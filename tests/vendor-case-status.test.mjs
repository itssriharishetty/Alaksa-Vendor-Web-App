import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import vm from "node:vm";

import {
  PORTAL_STATUSES,
  AUTHORIZED_ADMINS,
  resolveVendorCompanyName,
  extractSourcePortalUrl,
  isValidPortalUrl,
  getVendorCaseStatusRecords,
  calculateVendorCaseStatusSummary,
  getVendorCaseStatusFilterOptions,
  filterVendorCaseStatusRecords,
  saveVendorPortalConfiguration,
  getAdminSession,
  authenticateAdminSession
} from "../src/services/vendorCaseStatusService.js";
import {
  VENDOR_IMPACT_DETAILS,
  getVendorImpactDetails,
  getGroundStopImpactDetails,
  buildTemplateVendorImpactDetails
} from "../src/data/vendorDetails.js";

const here = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(here, "..");

const results = [];
async function runTest(name, fn) {
  try {
    await fn();
    results.push({ name, passed: true });
    console.log(`PASS: ${name}`);
  } catch (err) {
    results.push({ name, passed: false, error: err.message || String(err) });
    console.error(`FAIL: ${name}\n  -> ${err.stack || err.message}`);
  }
}

// Set up simulated browser window + localStorage with actual master-data.js
async function createMasterDataWindow() {
  const masterDataCode = await readFile(resolve(rootDir, "js/data/master-data.js"), "utf8");
  const storageMap = new Map();
  const localStorageMock = {
    getItem(key) {
      return storageMap.has(key) ? storageMap.get(key) : null;
    },
    setItem(key, val) {
      storageMap.set(key, String(val));
    },
    removeItem(key) {
      storageMap.delete(key);
    },
    clear() {
      storageMap.clear();
    }
  };

  const sandboxWindow = {
    localStorage: localStorageMock,
    location: { protocol: "http:", hostname: "localhost" },
    dispatchEvent: () => {}
  };

  const context = vm.createContext({
    window: sandboxWindow,
    localStorage: localStorageMock,
    fetch: async () => ({ ok: true }),
    CustomEvent: class CustomEvent {
      constructor(type, detail) {
        this.type = type;
        this.detail = detail;
      }
    },
    console
  });

  vm.runInContext(masterDataCode, context, { filename: "master-data.js" });
  globalThis.window = sandboxWindow;
  globalThis.localStorage = localStorageMock;
  globalThis.CustomEvent = context.CustomEvent;
  return { sandboxWindow, localStorageMock };
}

await createMasterDataWindow();

// ============================================================================
// 1. All 37 source vendor records are represented correctly
// ============================================================================
await runTest("1. All 37 source vendor records are represented correctly", async () => {
  const records = getVendorCaseStatusRecords();
  assert.equal(records.length, 37, "Must include all 37 existing vendor records from master-data.js");

  const masterVendors = globalThis.window.masterData.vendors;
  assert.equal(masterVendors.length, 37, "Source masterData.vendors has 37 records");

  for (const mv of masterVendors) {
    const matched = records.find((r) => r.id === mv.id && r.sourceRow === mv.sourceRow);
    assert.ok(matched, `Master vendor record ${mv.id} (row ${mv.sourceRow}) must exist in records`);
  }
});

// ============================================================================
// 2. Vendor names match the existing directory (29 unique vendor companies)
// ============================================================================
await runTest("2. Vendor names match the existing directory (29 unique vendors across 37 records)", async () => {
  const records = getVendorCaseStatusRecords();
  const masterVendors = globalThis.window.masterData.vendors;

  records.forEach((rec) => {
    const mv = masterVendors.find((m) => m.id === rec.id);
    const expectedName = resolveVendorCompanyName(mv);
    assert.equal(rec.vendorName, expectedName, `Vendor name for ${rec.id} must match existing directory`);
  });

  const summary = calculateVendorCaseStatusSummary(records);
  assert.equal(summary.totalVendorRecords, 37, "Total Vendor Records must be 37");
  assert.equal(summary.totalUniqueVendors, 29, "Total Unique Vendors must be 29");
  assert.equal(summary.totalSystemsApplications, 36, "Total Unique Primary Systems across 37 records must be 36");
  assert.equal(summary.configuredPortalLinks, 8, "Initial Configured Portal Links must be 8");
});

// ============================================================================
// 3. Application relationships are preserved (including multi-system vendors)
// ============================================================================
await runTest("3. Application relationships are preserved (including multi-application vendors)", async () => {
  const records = getVendorCaseStatusRecords();

  // Check SABRE (5 vendor rows supporting 5 distinct systems)
  const sabreRecords = records.filter((r) => r.vendorName === "SABRE");
  assert.equal(sabreRecords.length, 5, "SABRE must have 5 vendor records");
  for (const rec of sabreRecords) {
    assert.ok(
      rec.allSystems.length >= 5,
      "SABRE record must preserve all 5 associated SABRE systems"
    );
    assert.ok(rec.allSystems.includes("Sabre"));
    assert.ok(rec.allSystems.includes("Image Reservations"));
    assert.ok(rec.allSystems.includes("CSA Mobile - Boarding Agent"));
    assert.ok(rec.allSystems.includes("CSA Mobile - Lobby"));
    assert.ok(rec.allSystems.includes("RAIN"));
  }

  // Check Jeppesen (3 vendor rows + linked Ground Stop apps JetPlan, JCTE)
  const jeppesenRecords = records.filter((r) => r.vendorName === "Jeppesen");
  assert.equal(jeppesenRecords.length, 3, "Jeppesen must have 3 vendor records");
  assert.ok(
    jeppesenRecords[0].allSystems.includes("Flight Planning") &&
      jeppesenRecords[0].allSystems.includes("JCTE") &&
      jeppesenRecords[0].allSystems.includes("JetPlan"),
    "Jeppesen must include both primary systems and linked applications"
  );

  // Check TRAX (2 vendor rows: AS TRAX System, QX TRAX System + Aircraft Maintenance application)
  const traxRecords = records.filter((r) => r.vendorName === "TRAX");
  assert.equal(traxRecords.length, 2, "TRAX must have 2 vendor records");
  assert.ok(
    traxRecords[0].allSystems.includes("AS TRAX System") &&
      traxRecords[0].allSystems.includes("QX TRAX System") &&
      traxRecords[0].allSystems.includes("Aircraft Maintenance"),
    "TRAX must include AS TRAX System, QX TRAX System, and Aircraft Maintenance"
  );
});

// ============================================================================
// 4. No duplicate records were introduced
// ============================================================================
await runTest("4. No duplicate records were introduced", async () => {
  const records = getVendorCaseStatusRecords();
  const uniqueIds = new Set(records.map((r) => r.id));
  const uniqueSourceRows = new Set(records.map((r) => r.sourceRow));
  assert.equal(uniqueIds.size, 37, "All 37 vendor record IDs must be unique");
  assert.equal(uniqueSourceRows.size, 37, "All 37 sourceRow numbers must be unique");
});

// ============================================================================
// 5. Search works across vendor name, application name, category, and portal URL
// ============================================================================
await runTest("5. Search works across vendor name, application name, category, and portal URL", async () => {
  const records = getVendorCaseStatusRecords();

  // Search by vendor name
  const byVendor = filterVendorCaseStatusRecords(records, { search: "Smart4Aviation" });
  assert.equal(byVendor.length, 1);
  assert.equal(byVendor[0].vendorName, "Smart4Aviation");

  // Search by system/application name
  const bySystem = filterVendorCaseStatusRecords(records, { search: "Boeing Toolbox" });
  assert.equal(bySystem.length, 1);
  assert.equal(bySystem[0].vendorName, "Boeing");

  // Search by category
  const byCategory = filterVendorCaseStatusRecords(records, { search: "baggage tracking" });
  assert.equal(byCategory.length, 1);
  assert.equal(byCategory[0].vendorName, "NetTracer");

  // Search by portal URL (Boeing's http://myboeingfleet.com)
  const byPortal = filterVendorCaseStatusRecords(records, { search: "myboeingfleet.com" });
  assert.equal(byPortal.length, 1);
  assert.equal(byPortal[0].vendorName, "Boeing");
});

// ============================================================================
// 6. Filters work individually and together
// ============================================================================
await runTest("6. Filters work individually and together", async () => {
  const records = getVendorCaseStatusRecords();
  const options = getVendorCaseStatusFilterOptions(records);
  assert.ok(options.vendors.includes("SABRE"));
  assert.ok(options.categories.includes("Boarding app"));
  assert.ok(options.systems.includes("Boeing Toolbox"));

  // Individual filter: Vendor = SABRE
  const sabreOnly = filterVendorCaseStatusRecords(records, { vendor: "SABRE" });
  assert.equal(sabreOnly.length, 5);

  // Individual filter: Category = Boarding app
  const boardingOnly = filterVendorCaseStatusRecords(records, { category: "Boarding app" });
  assert.equal(boardingOnly.length, 1);
  assert.equal(boardingOnly[0].primarySystem, "CSA Mobile - Boarding Agent");

  // Individual filter: Portal Status = Configured
  const configuredOnly = filterVendorCaseStatusRecords(records, {
    portalStatus: PORTAL_STATUSES.CONFIGURED
  });
  assert.equal(configuredOnly.length, 8);
  assert.ok(configuredOnly.some((r) => r.vendorName === "Boeing"));

  // Combined filters: Vendor = SABRE + Category = Boarding app + Search = "Boarding"
  const combined = filterVendorCaseStatusRecords(records, {
    search: "Boarding",
    vendor: "SABRE",
    category: "Boarding app",
    portalStatus: ""
  });
  assert.equal(combined.length, 1);
  assert.equal(combined[0].primarySystem, "CSA Mobile - Boarding Agent");
});

// ============================================================================
// 7. Clear Filters resets all filters
// ============================================================================
await runTest("7. Clear Filters resets all filters", async () => {
  const records = getVendorCaseStatusRecords();
  const resetResult = filterVendorCaseStatusRecords(records, {
    search: "",
    vendor: "",
    system: "",
    category: "",
    portalStatus: ""
  });
  assert.equal(resetResult.length, 37, "Clearing filters must return all 37 vendor records");
});

// ============================================================================
// 8. Configured portal links open correctly & source data URL extraction works
// ============================================================================
await runTest("8. Configured portal links open correctly", async () => {
  const records = getVendorCaseStatusRecords();
  const boeing = records.find((r) => r.id === "boeing");
  assert.ok(boeing, "Boeing record must exist");
  assert.equal(boeing.portalUrl, "http://myboeingfleet.com");
  assert.equal(boeing.portalStatus, PORTAL_STATUSES.CONFIGURED);
  assert.equal(isValidPortalUrl(boeing.portalUrl), true);

  const pageSource = await readFile(
    resolve(rootDir, "src/pages/VendorCaseStatus.jsx"),
    "utf8"
  );
  assert.ok(pageSource.includes('target="_blank"'), "Open Portal link must open in a new tab");
  assert.ok(pageSource.includes('rel="noopener noreferrer"'), "Open Portal link must include rel=noopener noreferrer");
});

// ============================================================================
// 9. Missing portal links display 'Portal Not Configured' and cannot be opened
// ============================================================================
await runTest("9. Missing portal links cannot be opened and display 'Portal Not Configured'", async () => {
  const records = getVendorCaseStatusRecords();
  const unconfigured = records.filter((r) => !r.portalUrl);
  assert.equal(unconfigured.length, 29, "29 of 37 records have no portal URL configured initially");

  for (const rec of unconfigured) {
    assert.equal(rec.portalUrl, "", `Record ${rec.id} must have empty portalUrl`);
    assert.equal(rec.portalStatus, PORTAL_STATUSES.NOT_CONFIGURED, `Record ${rec.id} must be Not Configured`);
    assert.equal(isValidPortalUrl(rec.portalUrl), false, "Missing portal URL must not validate as openable");
  }

  const pageSource = await readFile(
    resolve(rootDir, "src/pages/VendorCaseStatus.jsx"),
    "utf8"
  );
  assert.ok(
    pageSource.includes("Portal Not Configured"),
    "UI must display 'Portal Not Configured' when portal URL is missing"
  );
});

// ============================================================================
// 10. Administrators can update portal information without duplicating vendors
// ============================================================================
await runTest("10. Administrators can update portal information & verify portals without duplicates", async () => {
  // Authenticate admin
  const auth = authenticateAdminSession(AUTHORIZED_ADMINS[0], "123456789");
  assert.equal(auth.ok, true, "Admin authentication must succeed for authorized admin");
  assert.equal(getAdminSession().isAuthenticated, true);

  // Update Smart4Aviation (id: "smart4aviation") with a configured & verified portal URL + additional application
  await saveVendorPortalConfiguration("smart4aviation", {
    portalUrl: "https://support.smart4aviation.aero",
    portalStatus: PORTAL_STATUSES.VERIFIED,
    portalNotes: "24x7 Operations Support Portal verified by ITS Flight Ops",
    lastVerifiedDate: "2026-10-26",
    associatedApplications: ["S4A - Smart4Aviation/Weight and Balance", "Smart4Aviation (S4A)"]
  });

  const updatedRecords = getVendorCaseStatusRecords();
  assert.equal(updatedRecords.length, 37, "Updating a vendor portal must NOT create duplicate vendor records");

  const s4a = updatedRecords.find((r) => r.id === "smart4aviation");
  assert.equal(s4a.portalUrl, "https://support.smart4aviation.aero");
  assert.equal(s4a.portalStatus, PORTAL_STATUSES.VERIFIED);
  assert.equal(s4a.lastVerifiedDate, "2026-10-26");
  assert.equal(s4a.portalNotes, "24x7 Operations Support Portal verified by ITS Flight Ops");

  // Verify summary counts updated dynamically
  const summaryAfter = calculateVendorCaseStatusSummary(updatedRecords);
  assert.equal(summaryAfter.totalVendorRecords, 37);
  assert.equal(summaryAfter.configuredPortalLinks, 9);
  assert.equal(summaryAfter.verifiedPortalLinks, 1);

  // Verify that marking Verified WITHOUT a lastVerifiedDate downgrades to Configured until checked
  await saveVendorPortalConfiguration("aircraft-performance", {
    portalUrl: "https://support.dynamicsource.se",
    portalStatus: PORTAL_STATUSES.VERIFIED,
    portalNotes: "Added portal link but not yet verified with date",
    lastVerifiedDate: ""
  });
  const afterSecondSave = getVendorCaseStatusRecords();
  const ds = afterSecondSave.find((r) => r.id === "aircraft-performance");
  assert.equal(
    ds.portalStatus,
    PORTAL_STATUSES.CONFIGURED,
    "Portal must only be marked Verified when lastVerifiedDate is recorded"
  );
});

// ============================================================================
// 11. React Router HashRouter routes and Sidebar navigation work
// ============================================================================
await runTest("11. React Router HashRouter routes and Sidebar navigation work", async () => {
  const appSource = await readFile(resolve(rootDir, "src/App.jsx"), "utf8");
  assert.ok(appSource.includes("HashRouter"), "src/App.jsx must use HashRouter");
  const requiredRoutes = [
    'path="/"',
    'path="/vendors"',
    'path="/categories"',
    'path="/ground-stops"',
    'path="/vendor-case-status"',
    'path="/favorites"',
    'path="/admin"'
  ];
  for (const route of requiredRoutes) {
    assert.ok(appSource.includes(route), `src/App.jsx must define route ${route}`);
  }

  const sidebarSource = await readFile(resolve(rootDir, "src/components/Sidebar.jsx"), "utf8");
  assert.ok(
    sidebarSource.includes('to="/vendor-case-status"'),
    "src/components/Sidebar.jsx must link Vendor Case Status to /vendor-case-status"
  );

  const contextSource = await readFile(resolve(rootDir, "src/context/MasterDataContext.jsx"), "utf8");
  assert.ok(
    contextSource.includes("http://localhost:47832/save-master-data"),
    "MasterDataContext must sync admin edits via POST to http://localhost:47832/save-master-data"
  );
});

// ============================================================================
// 12. The unified Vite React 19 SPA builds and bundles compile cleanly
// ============================================================================
await runTest("12. The application builds and bundles compile cleanly", async () => {
  const distIndex = await readFile(resolve(rootDir, "dist/index.html"), "utf8");
  assert.ok(distIndex.includes("./assets/"), "dist/index.html must use relative asset paths (base: './')");

  const assetFiles = await readdir(resolve(rootDir, "dist/assets"));
  const jsBundleFile = assetFiles.find((f) => f.endsWith(".js"));
  assert.ok(jsBundleFile, "dist/assets must contain a compiled JS bundle");

  const bundleCode = await readFile(resolve(rootDir, "dist/assets", jsBundleFile), "utf8");
  assert.ok(bundleCode.includes("Vendor Case Status"), "Compiled SPA bundle must include Vendor Case Status");
  assert.ok(bundleCode.includes("Portal Not Configured"), "Compiled SPA bundle must include Portal Not Configured state");
  const script = new vm.Script(bundleCode, { filename: jsBundleFile });
  assert.ok(script, "Compiled SPA bundle must be valid JS");
});

// ============================================================================
// 13. All 37 vendor records generate complete Accelya-style Vendor Impact Details
// ============================================================================
await runTest("13. All 37 vendor records generate complete Accelya-style Vendor Impact Details with valid contacts and edge-case safety", async () => {
  const masterVendors = globalThis.window.masterData.vendors;
  const accelyaKeys = Object.keys(VENDOR_IMPACT_DETAILS.accelya).sort();
  const accelyaDepKeys = Object.keys(VENDOR_IMPACT_DETAILS.accelya.dependenciesTab).sort();

  assert.equal(getVendorImpactDetails(null, masterVendors), null, "null vendor must return null");
  assert.equal(getVendorImpactDetails(undefined, masterVendors), null, "undefined vendor must return null");

  const emptyVendorDetails = getVendorImpactDetails({}, masterVendors);
  assert.ok(emptyVendorDetails, "empty vendor object must return valid template impact details");
  assert.deepEqual(Object.keys(emptyVendorDetails).sort(), accelyaKeys);

  for (const mv of masterVendors) {
    const details = getVendorImpactDetails(mv, masterVendors);
    assert.ok(details, `Vendor ${mv.id} (row ${mv.sourceRow}) must return impact details`);
    assert.deepEqual(
      Object.keys(details).sort(),
      accelyaKeys,
      `Vendor ${mv.id} impact details keys must match Accelya template`
    );
    assert.deepEqual(
      Object.keys(details.dependenciesTab).sort(),
      accelyaDepKeys,
      `Vendor ${mv.id} dependenciesTab keys must match Accelya template`
    );
    assert.ok(details.impactedSystems.length >= 1, `Vendor ${mv.id} must have at least 1 impacted system`);
    assert.ok(
      typeof details.impactCallout?.message === "string" && details.impactCallout.message.length > 0,
      `Vendor ${mv.id} impactCallout.message must be a non-empty string`
    );
    assert.ok(
      Array.isArray(details.upstreamDependencies) &&
        details.upstreamDependencies.every((item) => typeof item === "string"),
      `Vendor ${mv.id} upstreamDependencies must be an array of strings for React rendering`
    );
    assert.ok(
      Array.isArray(details.downstreamConsumers) &&
        details.downstreamConsumers.every((item) => typeof item === "string"),
      `Vendor ${mv.id} downstreamConsumers must be an array of strings for React rendering`
    );
    assert.ok(
      Array.isArray(details.dependenciesTab.summaryStats) &&
        details.dependenciesTab.summaryStats.length >= 1 &&
        details.dependenciesTab.summaryStats.every(
          (stat) => typeof stat.label === "string" && typeof stat.count === "number"
        ),
      `Vendor ${mv.id} dependenciesTab.summaryStats must be an array of {label, count, tone} objects`
    );
    assert.ok(details.vendorContacts.accountManager, `Vendor ${mv.id} must have a non-empty accountManager`);
    assert.ok(
      !details.vendorContacts.accountManager.includes("\n"),
      `Vendor ${mv.id} accountManager must not contain newlines`
    );
    assert.ok(
      !details.vendorContacts.supportPhone.includes("\n"),
      `Vendor ${mv.id} supportPhone must not contain newlines`
    );
  }

  // Verify specific contact extraction fixes
  const ibmWeather = masterVendors.find((v) => v.id === "ibm-weather");
  const ibmDetails = getVendorImpactDetails(ibmWeather, masterVendors);
  assert.equal(
    ibmDetails.vendorContacts.accountManager,
    "Tom Bulluck - Customer Support Manager",
    "ibm-weather must extract Tom Bulluck instead of section header 'Vendor Reps :'"
  );

  const sabreRecords = masterVendors.filter((v) =>
    ["sabre", "image-reservations", "csa-mobile-boarding", "csa-mobile-lobby", "rain"].includes(v.id)
  );
  assert.equal(sabreRecords.length, 5);
  for (const sr of sabreRecords) {
    const srDetails = getVendorImpactDetails(sr, masterVendors);
    assert.equal(
      srDetails.vendorContacts.accountManager,
      "Customer Care Incident Manager (CCIM)",
      `Sabre record ${sr.id} must extract CCIM role instead of a truncated sentence`
    );
    assert.equal(
      srDetails.impactedSystems.length,
      6,
      `Sabre record ${sr.id} must have 6 impacted systems matching Accelya template`
    );
    const sabreSystemNames = srDetails.impactedSystems.map((s) => s.name);
    for (const expectedSys of [
      "Sabre",
      "Image Reservations",
      "CSA Mobile - Boarding Agent",
      "CSA Mobile - Lobby",
      "RAIN"
    ]) {
      assert.ok(
        sabreSystemNames.includes(expectedSys),
        `Sabre record ${sr.id} must aggregate sibling Sabre system ${expectedSys}`
      );
    }
  }

  const boeing = masterVendors.find((v) => v.id === "boeing");
  const boeingDetails = getVendorImpactDetails(boeing, masterVendors);
  assert.equal(
    boeingDetails.vendorContacts.accountManager,
    "Rob Lowy",
    "Boeing accountManager must strip trailing period"
  );

  // Verify inline email addresses are stripped from contact names (Dynamic Source / aircraft-performance)
  const dynamicSource = masterVendors.find((v) => v.id === "aircraft-performance");
  const dynamicSourceDetails = getVendorImpactDetails(dynamicSource, masterVendors);
  assert.equal(
    dynamicSourceDetails.vendorContacts.accountManager,
    "Thomas Strand",
    "aircraft-performance accountManager must strip inline email address"
  );

  // Verify escalation 'Vendor Contact Name:' is used when vendorPoc is empty or 'NA'
  const escalationContactExpectations = [
    ["avtec", "Avtec On-Call"],
    ["nettracer", "Rob Sutton"],
    ["alvaria", "Enterprise Help Desk"]
  ];
  for (const [vendorId, expectedContact] of escalationContactExpectations) {
    const rec = masterVendors.find((v) => v.id === vendorId);
    const recDetails = getVendorImpactDetails(rec, masterVendors);
    assert.equal(
      recDetails.vendorContacts.accountManager,
      expectedContact,
      `${vendorId} must extract '${expectedContact}' from escalation Vendor Contact Name when vendorPoc is empty/NA`
    );
  }

  // Verify associatedApplications are included in impactedSystems before synthetic padding
  const assocAppsVendor = {
    id: "custom-assoc-vendor",
    company: "Custom Assoc Vendor",
    systemName: "Primary Core App",
    associatedApplications: ["Secondary Linked App", "Tertiary Linked App"]
  };
  const assocDetails = buildTemplateVendorImpactDetails(assocAppsVendor, masterVendors);
  const assocSystemNames = assocDetails.impactedSystems.map((s) => s.name);
  assert.ok(
    assocSystemNames.includes("Primary Core App") &&
      assocSystemNames.includes("Secondary Linked App") &&
      assocSystemNames.includes("Tertiary Linked App"),
    "impactedSystems must include vendor.associatedApplications"
  );

  // Verify phone extraction does not match across newlines into numbered steps
  const multiLinePhoneVendor = {
    id: "synthetic-phone",
    company: "Synthetic Vendor",
    systemName: "Synthetic System",
    vendorPhone: "1. Call 800-555-1212\n2. Press 3 for Severity 1"
  };
  const multiLineDetails = buildTemplateVendorImpactDetails(multiLinePhoneVendor, masterVendors);
  assert.equal(
    multiLineDetails.vendorContacts.supportPhone,
    "800-555-1212",
    "extractFirstPhone must not match across newline into next line's step number"
  );

  // Verify fallback logo vendors (tibco, baggage) have null logo and valid template structure
  for (const noLogoId of ["tibco", "baggage"]) {
    const v = masterVendors.find((m) => m.id === noLogoId);
    const d = getVendorImpactDetails(v, masterVendors);
    assert.equal(d.logo, null, `${noLogoId} must have null logo to trigger SVG fallback icon`);
  }
});

// ============================================================================
// 14. AeroData Vendor Impact Details contain complete operational runbook data
// ============================================================================
await runTest("14. AeroData Vendor Impact Details contain complete operational runbook data", async () => {
  const masterVendors = globalThis.window.masterData.vendors;
  const aerodataVendor = masterVendors.find((v) => v.id === "aerodata");
  assert.ok(aerodataVendor, "aerodata record must exist in masterData.vendors");

  const details = getVendorImpactDetails(aerodataVendor, masterVendors);
  assert.ok(details, "getVendorImpactDetails must return AeroData details");
  assert.equal(details.company, "AeroData");
  assert.equal(details.website, "(Add Website/Support Portal URL)");
  assert.equal(details.category, "Flight Operations / Aircraft Performance Data");
  assert.equal(details.itsTeam, "ITS COG Flight Operations");
  assert.ok(
    details.impactCallout.message.includes("Boeing and Airbus performance processing is documented under Dynamic Source"),
    "impactCallout.message must include the QX vs Boeing/Airbus Dynamic Source scope note"
  );

  // Verify 3 documented applications/systems
  assert.equal(details.impactedSystems.length, 3);
  const sysNames = details.impactedSystems.map((s) => s.name);
  assert.ok(sysNames.includes("WAM / Aircraft Performance Data System"));
  assert.ok(
    sysNames.includes(
      "AeroData Flight Planning Client / AeroData Desktop Flight Deck Performance Tool"
    )
  );
  assert.ok(sysNames.includes("AeroDataMessagingAgent / QX aircraft performance messaging"));

  // Verify dependencies architecture (4 upstream strings, 4 downstream strings, 4 summaryStats, 8 infrastructure)
  assert.equal(details.upstreamDependencies.length, 4);
  assert.ok(details.upstreamDependencies.every((item) => typeof item === "string"));
  assert.equal(details.downstreamConsumers.length, 4);
  assert.ok(details.downstreamConsumers.every((item) => typeof item === "string"));
  assert.ok(Array.isArray(details.dependenciesTab.summaryStats));
  assert.equal(details.dependenciesTab.summaryStats.length, 4);
  assert.ok(
    details.dependenciesTab.overviewSubtitle.includes("AircraftPerformance_Physical_View.pdf") &&
      details.dependenciesTab.overviewSubtitle.includes("AircraftPerformanceSystemDataFlowREV2.pdf")
  );
  assert.equal(details.dependenciesTab.upstreamTable.length, 4);
  assert.equal(details.dependenciesTab.downstreamTable.length, 4);
  assert.equal(details.dependenciesTab.infrastructureTable.length, 8);
  assert.equal(details.dependenciesTab.keyTakeaways.length, 4);

  // Verify business impact, workarounds, and 10-step incident validation checklist
  assert.equal(details.typicalBusinessImpact.length, 4);
  assert.equal(details.knownWorkarounds.length, 2);
  assert.equal(details.validationChecklist.length, 10);

  // Verify vendor contacts, internal contacts, communication guidelines, and response SLAs
  assert.equal(details.vendorContacts.supportPhone, "480-443-7740, prompt 3 for Technical Support.");
  assert.equal(details.vendorContacts.technicalSupport, "AeroData, 480-443-7740, prompt 3.");
  assert.equal(details.vendorContacts.supportEmail, "support@aerodata.aero");
  assert.equal(details.vendorContacts.supportEmailNote, "general technical/customer support");
  assert.equal(details.vendorContacts.secondaryEmail, "rwydata@aerodata.aero");
  assert.equal(details.vendorContacts.secondaryEmailNote, "airport, runway, and NOTAM inquiries");
  assert.equal(details.vendorContacts.accountManager, "(Add Account Manager)");
  assert.equal(details.vendorContacts.namedEscalationContact, "(Add Named escalation contact)");
  assert.ok(details.vendorContacts.companyNote.includes("longer legal company name"));
  assert.ok(details.vendorContacts.categoryNote.includes("Tier 1 and ground-stop eligible/critical"));
  assert.ok(details.vendorContacts.supportHours.includes("24x7"));
  assert.equal(details.vendorContacts.communicationGuidelines.length, 5);
  assert.equal(details.vendorContacts.responseSlas.length, 6);
  assert.equal(details.internalContacts.itsTeam, "ITS COG Flight Operations");
  assert.ok(details.internalContacts.itsTeamNote.includes("unresolved/multi-flight issues"));
  assert.ok(details.internalContacts.systemAdministration.includes("206-392-6029"));
  assert.ok(details.internalContacts.passwordSupport.includes("1-877-238-1077"));
  assert.ok(details.internalContacts.everbridgeContacts.includes("Leo Blanco"));

  // Verify 6 SharePoint source documents (3 Primary Internal Source + 3 Additional Related Source)
  assert.equal(details.relatedDocuments.length, 6);
  assert.equal(
    details.relatedDocuments.filter((d) => d.updated === "Primary Internal Source").length,
    3
  );
  assert.equal(
    details.relatedDocuments.filter((d) => d.updated === "Additional Related Source").length,
    3
  );
  for (const doc of details.relatedDocuments) {
    assert.ok(
      doc.url && doc.url.startsWith("https://alaskaair.sharepoint.com/"),
      `Document ${doc.title} must have a valid SharePoint URL`
    );
  }
});

// ============================================================================
// 15. ACARS (SITA / AIRCOM) Vendor Impact Details contain complete operational runbook data
// ============================================================================
await runTest("15. ACARS (SITA / AIRCOM) Vendor Impact Details contain complete operational runbook data", async () => {
  const masterVendors = globalThis.window.masterData.vendors;
  const acarsVendor = masterVendors.find((v) => v.id === "sita");
  assert.ok(acarsVendor, "sita (ACARS) record must exist in masterData.vendors");

  const details = getVendorImpactDetails(acarsVendor, masterVendors);
  assert.ok(details, "getVendorImpactDetails must return ACARS details");
  assert.equal(details.name, "ACARS Ground System");
  assert.equal(
    details.company,
    "SITA for the Aircom Server product. ARINC (Collins Aerospace) for messages to the aircraft"
  );
  assert.equal(details.website, "http://acars.app.insideaag.com/StatusReport.htm");
  assert.equal(details.category, "Flight Ops: aircraft-to-ground communications");
  assert.equal(details.itsTeam, "ITS COG FlightOps Support / ITS Flight Operations");
  assert.ok(
    details.impactCallout.message.includes("ACARS is the central text link between aircraft and the ground") &&
      details.impactCallout.message.includes("24x7 critical") &&
      details.impactCallout.message.includes("Ground Stop list"),
    "impactCallout.message must include ACARS key takeaways"
  );

  // Verify 5 documented applications/systems (ACARS components)
  assert.equal(details.impactedSystems.length, 5);
  const sysNames = details.impactedSystems.map((s) => s.name);
  assert.ok(sysNames.includes("SITA Aircom Server"));
  assert.ok(sysNames.includes("AIRCOM Web Service Invoker"));
  assert.ok(sysNames.includes("ACARS History (Service/UI/API)"));
  assert.ok(sysNames.includes("ACARS Messenger / Ops Messenger"));
  assert.ok(sysNames.includes("FlifoTimesWS, PilotLimitsWS, AircraftPerformanceData, Weather API"));

  // Verify dependencies architecture (5 upstream strings, 9 downstream strings, 6 infrastructure components)
  assert.equal(details.upstreamDependencies.length, 5);
  assert.ok(details.upstreamDependencies.every((item) => typeof item === "string"));
  assert.equal(details.downstreamConsumers.length, 9);
  assert.ok(details.downstreamConsumers.every((item) => typeof item === "string"));
  assert.equal(details.dependenciesTab.upstreamTable.length, 5);
  assert.equal(details.dependenciesTab.downstreamTable.length, 9);
  assert.equal(details.dependenciesTab.infrastructureTable.length, 6);
  assert.equal(details.dependenciesTab.keyTakeaways.length, 1);

  // Verify business impact (5), workarounds (4), and 9-step incident validation checklist (time limit 15 minutes)
  assert.equal(details.typicalBusinessImpact.length, 5);
  assert.equal(details.knownWorkarounds.length, 4);
  assert.equal(details.validationChecklist.length, 9);

  // Verify vendor contacts, internal contacts, communication guidelines, and response SLAs
  assert.equal(
    details.vendorContacts.supportPhone,
    "SITA: 1-888-247-2661, option 4 (Aircom). ARINC: 800-633-6882"
  );
  assert.equal(details.vendorContacts.supportEmail, "Aircom.support@sitaonair.aero");
  assert.equal(details.vendorContacts.secondaryEmail, "helpdesk@arinc.com");
  assert.equal(details.vendorContacts.accountManager, "(Add Account Manager)");
  assert.ok(details.vendorContacts.namedEscalationContact.includes("410-266-4029"));
  assert.ok(details.vendorContacts.namedEscalationContact.includes("AOC@arinc.com"));
  assert.ok(details.vendorContacts.companyNote.includes("ARINC (Collins Aerospace) for messages to the aircraft"));
  assert.equal(details.vendorContacts.supportHours, "24x7, critical to operations");
  assert.equal(details.vendorContacts.communicationGuidelines.length, 2);
  assert.equal(details.vendorContacts.responseSlas.length, 4);

  assert.equal(details.internalContacts.itsTeam, "ITS COG FlightOps Support / ITS Flight Operations");
  assert.equal(details.internalContacts.applicationOwner, "Ryan Wilkins, 206-972-0228");
  assert.equal(details.internalContacts.systemAdministration, "Rick Cahoon, Arun Sharma, 206-392-8613");
  assert.equal(
    details.internalContacts.businessOwner,
    "James Falen, 425-679-2135 cell / 206-392-6083 desk (Business Owner & Everbridge focal)"
  );
  assert.equal(details.internalContacts.passwordSupport, "Service Desk: 1-877-238-1077");

  // Verify 9 source documents (3 Main Sources + 6 Additional Sources)
  assert.equal(details.relatedDocuments.length, 9);
  assert.equal(
    details.relatedDocuments.filter((d) => d.updated === "Main Source").length,
    3
  );
  assert.equal(
    details.relatedDocuments.filter((d) => d.updated === "Additional Source").length,
    6
  );
  for (const doc of details.relatedDocuments) {
    assert.ok(
      doc.url &&
        (doc.url.startsWith("https://alaskaair.sharepoint.com/") ||
          doc.url.startsWith("https://itsals.visualstudio.com/")),
      `Document ${doc.title} must have a valid source URL`
    );
  }
});

// ============================================================================
// 16. AIMS Vendor Impact Details contain complete operational & incident data
// ============================================================================
await runTest("16. AIMS Vendor Impact Details contain complete operational & incident data", async () => {
  const masterVendors = globalThis.window.masterData.vendors;
  const aimsVendor = masterVendors.find((v) => v.id === "aims-vendor");
  assert.ok(aimsVendor, "aims-vendor (AIMS) record must exist in masterData.vendors");

  const details = getVendorImpactDetails(aimsVendor, masterVendors);
  assert.ok(details, "getVendorImpactDetails must return AIMS details");
  assert.equal(details.name, "AIMS");
  assert.equal(details.company, "(Add Full Company Name)");
  assert.equal(details.website, "(Add Website/Support Portal URL)");
  assert.equal(details.category, "Maintenance & Engineering");
  assert.equal(details.itsTeam, "COG Crew on-call");

  // Verify 4 documented applications/systems
  assert.equal(details.impactedSystems.length, 4);
  const sysNames = details.impactedSystems.map((s) => s.name);
  assert.ok(sysNames.includes("AirTrAK Crew Information"));
  assert.ok(sysNames.includes("QXCrewTripsUpdateService"));
  assert.ok(sysNames.includes("CrewScheduleWS"));
  assert.ok(sysNames.includes("CrewSupportRS"));

  // Verify dependencies architecture (5 upstream strings, 4 downstream strings, 9 infrastructure components)
  assert.equal(details.upstreamDependencies.length, 5);
  assert.ok(details.upstreamDependencies.every((item) => typeof item === "string"));
  assert.equal(details.downstreamConsumers.length, 4);
  assert.ok(details.downstreamConsumers.every((item) => typeof item === "string"));
  assert.equal(details.dependenciesTab.upstreamTable.length, 5);
  assert.equal(details.dependenciesTab.downstreamTable.length, 4);
  assert.equal(details.dependenciesTab.infrastructureTable.length, 9);
  assert.equal(details.dependenciesTab.keyTakeaways.length, 2);

  // Verify business impact (6), workarounds (3), and 9-step incident validation checklist
  assert.equal(details.typicalBusinessImpact.length, 6);
  assert.equal(details.knownWorkarounds.length, 3);
  assert.equal(details.validationChecklist.length, 9);

  // Verify vendor contacts, internal contacts, communication guidelines, and response SLAs
  assert.equal(details.vendorContacts.supportPhone, "(Add Vendor Support Phone Number)");
  assert.equal(details.vendorContacts.supportEmail, "(Add Vendor Support Email)");
  assert.equal(details.vendorContacts.technicalSupport, "(Add Vendor Support Desk)");
  assert.equal(details.vendorContacts.accountManager, "(Add Account Manager)");
  assert.equal(details.vendorContacts.namedEscalationContact, "(Add Escalation Contact)");
  assert.equal(details.vendorContacts.supportHours, "(Add Support Service Hours)");
  assert.ok(details.vendorContacts.companyNote.includes("AIMS vendor was engaged after internal Crew troubleshooting"));
  assert.ok(details.vendorContacts.categoryNote.includes("Maintenance & Engineering"));
  assert.equal(details.vendorContacts.communicationGuidelines.length, 4);
  assert.equal(details.vendorContacts.responseSlas.length, 6);

  assert.equal(details.internalContacts.itsTeam, "COG Crew on-call");
  assert.equal(details.internalContacts.applicationOwner, "(Add Named Application Owner)");
  assert.equal(details.internalContacts.businessOwner, "(Add Business Owner)");
  assert.ok(details.internalContacts.onCallSupport.includes("ITS OPS 360 AirTrAK Team"));
  assert.ok(details.internalContacts.systemAdministration.includes("AIMS Admin Team"));

  // Verify SharePoint document (AS+HA OPL 2026-08-24.pptx)
  assert.equal(details.relatedDocuments.length, 1);
  assert.equal(details.relatedDocuments[0].title, "AS+HA OPL 2026-08-24.pptx");
  assert.ok(details.relatedDocuments[0].url.startsWith("https://alaskaair.sharepoint.com/"));
});

// ============================================================================
// 17. Ground Stop Application ACARS contains complete ACARS Ground / AIRCOM details
// ============================================================================
await runTest("17. Ground Stop Application ACARS contains complete ACARS Ground / AIRCOM details", async () => {
  const acarsApp = globalThis.window.masterData.applications.acars;
  assert.ok(acarsApp, "acars ground stop application must exist in masterData.applications");
  assert.equal(acarsApp.appDataVersion, 2);
  assert.equal(acarsApp.name, "ACARS Ground System (also called ACARS / AIRCOM)");
  assert.equal(acarsApp.shortName, "ACARS");
  assert.equal(acarsApp.alias, "ACARS / AIRCOM");
  assert.equal(acarsApp.category, "Flight Ops: aircraft-to-ground communications");
  assert.equal(
    acarsApp.vendor,
    "SITA for the Aircom Server product. ARINC (Collins Aerospace) for messages to the aircraft"
  );
  assert.equal(acarsApp.aagPOC, "Ryan Wilkins, 206-972-0228");
  assert.equal(acarsApp.aagTeam, "ITS COG FlightOps Support / ITS Flight Operations");
  assert.equal(acarsApp.systemAdmin, "Rick Cahoon, Arun Sharma, 206-392-8613");
  assert.equal(acarsApp.businessOwner, "James Falen, 425-679-2135 cell / 206-392-6083 desk");
  assert.equal(acarsApp.passwordSupport, "Service Desk: 1-877-238-1077");
  assert.equal(acarsApp.tier, "Ground Stop");
  assert.equal(acarsApp.groundStopEligible, "Yes");
  assert.equal(
    acarsApp.phone,
    "SITA: 1-888-247-2661, option 4 (Aircom). ARINC: 800-633-6882"
  );
  assert.ok(acarsApp.email.includes("Aircom.support@sitaonair.aero"));
  assert.ok(acarsApp.email.includes("helpdesk@arinc.com"));
  assert.equal(acarsApp.associatedApplications.length, 5);
  assert.equal(acarsApp.upstreamDependencies.length, 5);
  assert.equal(acarsApp.downstreamConsumers.length, 9);
  assert.equal(acarsApp.typicalBusinessImpact.length, 5);
  assert.equal(acarsApp.knownWorkarounds.length, 4);
  assert.equal(acarsApp.escalationSteps.length, 9);
  assert.equal(acarsApp.relatedDocuments.length, 9);
  assert.ok(acarsApp.operationalRunbookUrl.startsWith("https://alaskaair.sharepoint.com/"));

  const groundStopsSource = await readFile(resolve(rootDir, "src/pages/GroundStops.jsx"), "utf8");
  assert.ok(
    groundStopsSource.includes(
      "SITA for the Aircom Server product. ARINC (Collins Aerospace) for messages to the aircraft"
    ),
    "GroundStops.jsx CARD_PROFILES.acars must include updated vendor"
  );
  assert.ok(
    groundStopsSource.includes("SITA: 1-888-247-2661, option 4 (Aircom). ARINC: 800-633-6882"),
    "GroundStops.jsx CARD_PROFILES.acars must include updated phone numbers"
  );
});

// ============================================================================
// 18. Alvaria Vendor Impact Details contain complete operational & incident data
// ============================================================================
await runTest("18. Alvaria Vendor Impact Details contain complete operational & incident data", async () => {
  const masterVendors = globalThis.window.masterData.vendors;
  const alvariaRecord = masterVendors.find((v) => v.id === "alvaria");
  assert.ok(alvariaRecord, "alvaria record must exist in master-data.js");
  assert.equal(alvariaRecord.category, "Call Centers / Workforce Management");
  assert.equal(alvariaRecord.aagItsTeam, "Call Center Technology");

  const details = getVendorImpactDetails(alvariaRecord, masterVendors);
  assert.equal(details, VENDOR_IMPACT_DETAILS.alvaria, "alvaria must resolve to VENDOR_IMPACT_DETAILS.alvaria");

  // 1. Basic Information
  assert.equal(details.company, "Alvaria");
  assert.equal(details.website, "(Add Website/Support Portal URL)");
  assert.equal(details.category, "Call Centers / Workforce Management");
  assert.equal(details.itsTeam, "Call Center Technology");
  assert.equal(details.vendorContacts.supportPhone, "800-999-4455, Alvaria Enterprise Help Desk");
  assert.equal(details.vendorContacts.supportEmail, "(Add Vendor Support Email)");
  assert.equal(details.vendorContacts.supportHours, "(Add Support Service Hours)");
  assert.equal(details.vendorContacts.accountManager, "Enterprise Help Desk");
  assert.ok(details.vendorContacts.companyNote.includes("formerly known as Aspect"));
  assert.ok(details.vendorContacts.categoryNote.includes("00015817 - Alvaria Cloud Workforce"));
  assert.ok(details.vendorContacts.categoryNote.includes("94236"));
  assert.ok(details.vendorContacts.categoryNote.includes("https://alaska.via.aspect-cloud.net/WFO"));

  // 2. Applications & Systems (2 applications: Alvaria Workforce Management / Aspect WFM & Empower)
  assert.equal(details.impactedSystems.length, 2);
  const appNames = details.impactedSystems.map((s) => s.name);
  assert.deepEqual(appNames, [
    "Alvaria Workforce Management / Aspect WFM",
    "Empower"
  ]);
  assert.ok(
    details.impactedSystems[0].impact.includes("supervisors cannot properly administer overtime or release agents early")
  );
  assert.ok(
    details.impactedSystems[1].description.includes("IIS, WFO UI, notification services, Aspect Web Services, Exchange and Dispatcher")
  );

  // 3. Dependencies Architecture (5 upstream, 4 downstream, 8 infrastructure)
  assert.equal(details.upstreamDependencies.length, 5);
  assert.equal(details.dependenciesTab.upstreamTable.length, 5);
  assert.equal(details.downstreamConsumers.length, 4);
  assert.equal(details.dependenciesTab.downstreamTable.length, 4);
  assert.equal(details.dependenciesTab.infrastructureTable.length, 8);
  assert.equal(details.dependenciesTab.keyTakeaways.length, 2);

  // 4. Business Impact, Workarounds & Validation Checklist
  assert.equal(details.typicalBusinessImpact.length, 7);
  assert.ok(
    details.typicalBusinessImpact.some((item) =>
      item.includes("Aspect.AspectMessageClient+DownstreamServiceUnavailableException")
    )
  );
  assert.equal(details.knownWorkarounds.length, 3);
  assert.ok(details.knownWorkarounds[0].includes("Password reset: During the October 2024 incident"));
  assert.equal(details.validationChecklist.length, 9);
  assert.ok(
    details.validationChecklist.some((item) =>
      item.includes("SEAPRASPCTAPP01, SEAPRASPCTAPP02 and SEAPRASPCTEMP01")
    )
  );
  assert.ok(
    details.validationChecklist.some((item) =>
      item.includes("Do not automatically restart SEAPRASPCTSQL01")
    )
  );

  // 5. Contacts, Escalation & SLAs
  assert.equal(details.vendorContacts.communicationGuidelines.length, 6);
  assert.equal(details.vendorContacts.responseSlas.length, 7);
  assert.equal(details.internalContacts.itsTeam, "Call Center Technology");
  assert.equal(details.internalContacts.applicationOwner, "Adam Wallraff, Call Centers");
  assert.equal(details.internalContacts.businessOwner, "Contact Center Operations / Call Centers");
  assert.equal(details.internalContacts.passwordSupport, "ITS Service Desk, 877-238-1077, documented 24x7");
  assert.ok(details.internalContacts.itsTeamNote.includes("call.center.technology@alaskaair.com"));
  assert.ok(details.internalContacts.systemAdministration.includes("Darlene Harbeson, Matt Smallwood, and Lori Well"));

  // 6. Related SharePoint Documents (7 documents)
  assert.equal(details.relatedDocuments.length, 7);
  const docTitles = details.relatedDocuments.map((d) => d.title);
  assert.deepEqual(docTitles, [
    "Alvaria_System_Summary.docx",
    "Accessing Alvaria application presents an error.docx",
    "Alvaria Architecture Diagram.docx",
    "Alvaria_DRPlan.docx",
    "ITS Vendor Information - 2026.xlsx",
    "AAG Contact Centers - BR Plan Update - 2026.docx",
    "AAG Contact Centers - BR Plan Update - 2025.pdf"
  ]);
});

// ============================================================================
// 19. Avtec Vendor Impact Details contain complete operational & incident data
// ============================================================================
await runTest("19. Avtec Vendor Impact Details contain complete operational & incident data", async () => {
  const masterVendors = globalThis.window.masterData.vendors;
  const avtecRecord = masterVendors.find((v) => v.id === "avtec");
  assert.ok(avtecRecord, "avtec vendor record must exist in master-data.js");
  assert.equal(avtecRecord.sourceRow, 23);
  assert.equal(avtecRecord.vendor, "Avtec");
  assert.equal(
    avtecRecord.category,
    "Flight Operations / Dispatch Communications / Radio & Telephony"
  );
  assert.equal(avtecRecord.aagItsTeam, "UC Team (Unified Communications)");
  assert.equal(avtecRecord.phone, "800-545-3034");
  assert.equal(avtecRecord.email, "customersupport@avtecinc.com");

  const details = getVendorImpactDetails(avtecRecord, masterVendors);
  assert.ok(details, "Avtec must return Vendor Impact Details");
  assert.equal(details.id, "avtec");
  assert.equal(details.company, "Avtec");
  assert.equal(details.website, "(Add Website/Support Portal URL)");
  assert.equal(
    details.category,
    "Flight Operations / Dispatch Communications / Radio & Telephony"
  );
  assert.equal(details.itsTeam, "UC Team (Unified Communications)");
  assert.equal(details.vendorContacts.supportPhone, "800-545-3034");
  assert.equal(details.vendorContacts.supportEmail, "customersupport@avtecinc.com");
  assert.equal(details.vendorContacts.supportHours, "24x7");
  assert.equal(details.vendorContacts.accountManager, "Avtec On-Call");
  assert.ok(details.vendorContacts.technicalSupport.includes("(Add Account Manager)"));
  assert.ok(details.vendorContacts.namedEscalationContact.includes("(Add Vendor Escalation Contact)"));

  // 2. Applications & Systems
  assert.equal(details.impactedSystems.length, 1);
  const sys = details.impactedSystems[0];
  assert.equal(sys.name, "Avtec Dispatch Radio System / Avtec Scout");
  assert.equal(sys.owner, "UC Team");
  assert.ok(sys.description.includes("Avtec Scout as purpose-built dispatch hardware supporting up to four radio or LTE endpoints"));
  assert.ok(sys.description.includes("AS Dispatch, AS Bridge, AS CLP, AS Maintenance Control, QX Dispatch, QX Bridge, QX CLP, and QX Maintenance Control"));
  assert.ok(sys.businessFunction.includes("radio-to-phone or radio-to-radio patching"));
  assert.equal(
    sys.impact,
    "It is classified internally as a critical system, with possible flight delays."
  );
  assert.equal(
    sys.dependencies,
    "Avtec consoles/endpoints, VPGates, phone lines, G/G radios, A/G radios, intercoms, radio remotes, network connectivity, and UC/voice infrastructure."
  );

  // 3. Dependencies Architecture
  assert.equal(details.upstreamDependencies.length, 6);
  assert.equal(details.dependenciesTab.upstreamTable.length, 6);
  assert.equal(details.downstreamConsumers.length, 4);
  assert.equal(details.dependenciesTab.downstreamTable.length, 4);
  assert.equal(details.dependenciesTab.infrastructureTable.length, 7);
  assert.ok(
    details.dependenciesTab.infrastructureTable.some((row) =>
      row.details.includes("SEACRAVTECOO01A") && row.details.includes("SEACRAVTECOO03B")
    )
  );
  assert.ok(
    details.dependenciesTab.infrastructureTable.some((row) =>
      row.details.includes("IGQPRAVTEC01A") && row.details.includes("IGQPRAVTEC03B")
    )
  );
  assert.ok(
    details.dependenciesTab.infrastructureTable.some((row) =>
      row.details.includes("connectivity between IGQ and HUB/PUY")
    )
  );
  assert.ok(
    details.dependenciesTab.infrastructureTable.some((row) =>
      row.details.includes("Zenoss Real Time Services")
    )
  );
  assert.ok(
    details.dependenciesTab.infrastructureTable.some((row) =>
      row.details === "(Add Database Dependencies)"
    )
  );
  assert.ok(
    details.dependenciesTab.infrastructureTable.some((row) =>
      row.details === "(Add Firewall Dependencies)"
    )
  );

  // 4. Business Impact, Workarounds & Incident Validation Checklist
  assert.equal(details.typicalBusinessImpact.length, 7);
  assert.equal(details.knownWorkarounds.length, 6);
  assert.equal(details.validationChecklist.length, 10);
  assert.ok(details.validationChecklist[0].includes("206-688-3800"));
  assert.ok(details.validationChecklist[9].includes("206-688-3800, option 1"));

  // 5. Contacts & SLAs
  assert.equal(details.vendorContacts.communicationGuidelines.length, 10);
  assert.equal(details.vendorContacts.responseSlas.length, 8);
  assert.equal(details.internalContacts.itsTeam, "UC Team (Unified Communications)");
  assert.equal(
    details.internalContacts.businessOwner,
    "Flight Operations / ERBC Team, ERBC.Team@alaskaair.com (24x7)"
  );
  assert.equal(details.internalContacts.passwordSupport, "ITS Service Desk, 877-238-1077");
  assert.ok(details.internalContacts.systemAdministration.includes("Scott Heilman"));
  assert.ok(details.internalContacts.systemAdministration.includes("Dan Olson"));

  // 6. Related Documents & Incident References
  assert.equal(details.relatedDocuments.length, 8);
  const avtecDocTitles = details.relatedDocuments.map((d) => d.title);
  assert.ok(avtecDocTitles.includes("Avtec System Summary.docx"));
  assert.ok(avtecDocTitles.includes("Avtec User Guide.docx"));
  assert.ok(avtecDocTitles.includes("2026_Avtec_DR_Plan.xlsx"));
  assert.ok(avtecDocTitles.includes("Avtec Common Troubleshooting Steps.docx"));
});

// TEST 20: Ground Stop Applications View Details opens full-page Impact Details (ACARS & all 9 Ground Stop apps)
await runTest("20. Ground Stop Applications View Details opens full-page Impact Details (ACARS & all 9 Ground Stop apps)", async () => {
  const apps = globalThis.window.masterData?.applications || {};
  const groundStopsSource = await readFile(resolve(rootDir, "src/pages/GroundStops.jsx"), "utf8");

  // Verify GroundStops.jsx uses getGroundStopImpactDetails and renders .vi-page-container on View Details
  assert.ok(groundStopsSource.includes("getGroundStopImpactDetails"));
  assert.ok(groundStopsSource.includes('className="vi-page-container"'));
  assert.ok(groundStopsSource.includes("handleViewAppDetails(key)"));

  // Verify ACARS Ground Stop card resolves full ACARS Ground / AIRCOM Impact Details
  const acarsDetails = getGroundStopImpactDetails({
    key: "acars",
    record: apps.acars || {}
  });
  assert.ok(acarsDetails, "ACARS Ground Stop impact details must exist");
  assert.equal(acarsDetails.name, "ACARS Ground System");
  assert.equal(
    acarsDetails.company,
    "SITA for the Aircom Server product. ARINC (Collins Aerospace) for messages to the aircraft"
  );
  assert.equal(acarsDetails.website, "http://acars.app.insideaag.com/StatusReport.htm");
  assert.equal(acarsDetails.impactedSystems.length, 5);
  assert.equal(acarsDetails.upstreamDependencies.length, 5);
  assert.equal(acarsDetails.downstreamConsumers.length, 9);
  assert.equal(acarsDetails.relatedDocuments.length, 9);

  // Verify WAM Ground Stop card resolves full WAM (Flight Planning System / Worksheet) Impact Details
  const wamDetails = getGroundStopImpactDetails({
    key: "wam",
    record: apps.wam || {}
  });
  assert.ok(wamDetails, "WAM Ground Stop impact details must exist");
  assert.equal(wamDetails.name, "WAM (Flight Planning System / Worksheet)");
  assert.equal(
    wamDetails.company,
    "Jeppesen (owned by Boeing), which runs the JetPlan flight plan server"
  );
  assert.equal(wamDetails.website, "(Add WAM URL)");
  assert.equal(wamDetails.category, "Flight Ops / Dispatch: flight planning and releases");
  assert.equal(
    wamDetails.itsTeam,
    "ITS COG Flight Operations. Verified owners: Ryan Wilkins, Adele Lunde"
  );
  assert.equal(wamDetails.impactedSystems.length, 5);
  assert.equal(wamDetails.upstreamDependencies.length, 5);
  assert.equal(wamDetails.downstreamConsumers.length, 5);
  assert.equal(wamDetails.dependenciesTab.infrastructureTable.length, 7);
  assert.equal(wamDetails.typicalBusinessImpact.length, 4);
  assert.equal(wamDetails.knownWorkarounds.length, 4);
  assert.equal(wamDetails.validationChecklist.length, 9);
  assert.equal(wamDetails.vendorContacts.communicationGuidelines.length, 3);
  assert.equal(wamDetails.vendorContacts.responseSlas.length, 4);
  assert.equal(wamDetails.relatedDocuments.length, 12);

  // Verify JetPlan Ground Stop card resolves full JetPlan (Jeppesen Flight Planning engine) Impact Details
  const jetplanDetails = getGroundStopImpactDetails({
    key: "jetplan",
    record: apps.jetplan || {}
  });
  assert.ok(jetplanDetails, "JetPlan Ground Stop impact details must exist");
  assert.equal(jetplanDetails.name, "JetPlan (Jeppesen Flight Planning engine)");
  assert.equal(
    jetplanDetails.company,
    "Jeppesen (owned by Boeing). Vendor application hosted in-house"
  );
  assert.equal(jetplanDetails.website, "https://asflightplan.alaskaair.com/jetplan/");
  assert.equal(jetplanDetails.category, "Flight Ops / Dispatch: flight plan calculation");
  assert.equal(
    jetplanDetails.itsTeam,
    "ITS COG Flight Operations. ITS System Owner: Ryan Wilkins"
  );
  assert.equal(jetplanDetails.impactedSystems.length, 4);
  assert.equal(jetplanDetails.upstreamDependencies.length, 4);
  assert.equal(jetplanDetails.downstreamConsumers.length, 6);
  assert.equal(jetplanDetails.dependenciesTab.infrastructureTable.length, 8);
  assert.equal(jetplanDetails.typicalBusinessImpact.length, 4);
  assert.equal(jetplanDetails.knownWorkarounds.length, 5);
  assert.equal(jetplanDetails.validationChecklist.length, 9);
  assert.equal(jetplanDetails.vendorContacts.communicationGuidelines.length, 4);
  assert.equal(jetplanDetails.vendorContacts.responseSlas.length, 5);
  assert.equal(jetplanDetails.relatedDocuments.length, 9);

  // S4A uses the rich S4A SmartSuite Ground Stop application profile
  const s4aDetails = getGroundStopImpactDetails({
    key: "Smart4Aviation (S4A)",
    record: apps["Smart4Aviation (S4A)"] || {}
  });
  assert.ok(s4aDetails, "S4A Ground Stop impact details must exist");
  assert.equal(s4aDetails.name, "S4A SmartSuite");
  assert.equal(
    s4aDetails.company,
    "Smart4Aviation (based in Poland). Vendor application on in-house Linux servers"
  );
  assert.equal(s4aDetails.website, "https://smartsuite.insideaag.com/");
  assert.equal(
    s4aDetails.category,
    "Airport Ops / Flight Ops: weight and balance and load planning"
  );
  assert.equal(
    s4aDetails.itsTeam,
    "ITS Flight Operations. System Owner: Ryan Wilkins. Servers supported by the ITS JCTE System Admins"
  );
  assert.equal(s4aDetails.vendorContacts.supportPhone, "+48 12 379 3737");
  assert.equal(s4aDetails.vendorContacts.supportEmail, "support@smart4aviation.aero");
  assert.equal(s4aDetails.vendorContacts.supportHours, "24x7");
  assert.equal(s4aDetails.impactedSystems.length, 5);
  assert.equal(s4aDetails.upstreamDependencies.length, 4);
  assert.equal(s4aDetails.downstreamConsumers.length, 7);
  assert.equal(s4aDetails.dependenciesTab.infrastructureTable.length, 6);
  assert.equal(s4aDetails.typicalBusinessImpact.length, 4);
  assert.equal(s4aDetails.knownWorkarounds.length, 4);
  assert.equal(s4aDetails.validationChecklist.length, 9);
  assert.equal(s4aDetails.vendorContacts.communicationGuidelines.length, 4);
  assert.equal(s4aDetails.vendorContacts.responseSlas.length, 4);
  assert.equal(s4aDetails.relatedDocuments.length, 8);

  // JCTE uses the rich JCTE (Jeppesen Crew Tracking Enterprise) Ground Stop application profile
  const jcteDetails = getGroundStopImpactDetails({
    key: "jcte",
    record: apps.jcte || {}
  });
  assert.ok(jcteDetails, "JCTE Ground Stop impact details must exist");
  assert.equal(jcteDetails.name, "JCTE (Jeppesen Crew Tracking Enterprise)");
  assert.equal(jcteDetails.company, "Jeppesen");
  assert.equal(
    jcteDetails.website,
    "Crew Tracking: http://crewtracking.alaskaair.com/. Crew Access: https://crewaccess.alaskaair.com/site/. TIC reports: https://jctereports.alaskaair.com/tic/default"
  );
  assert.equal(
    jcteDetails.category,
    "Crew: crew scheduling and tracking for about 10,100 crew members"
  );
  assert.equal(jcteDetails.itsTeam, "ITS JCTE System Admins. Tech Owner: Sue Rawlings");
  assert.equal(jcteDetails.vendorContacts.supportEmail, "opssupport@jeppesen.com");
  assert.equal(jcteDetails.vendorContacts.supportHours, "24x7");
  assert.equal(jcteDetails.impactedSystems.length, 4);
  assert.equal(jcteDetails.upstreamDependencies.length, 3);
  assert.equal(jcteDetails.downstreamConsumers.length, 2);
  assert.equal(jcteDetails.dependenciesTab.infrastructureTable.length, 5);
  assert.equal(jcteDetails.typicalBusinessImpact.length, 5);
  assert.equal(jcteDetails.knownWorkarounds.length, 5);
  assert.equal(jcteDetails.validationChecklist.length, 9);
  assert.equal(jcteDetails.vendorContacts.communicationGuidelines.length, 3);
  assert.equal(jcteDetails.vendorContacts.responseSlas.length, 4);
  assert.equal(jcteDetails.relatedDocuments.length, 7);

  // AirTrak uses the rich AirTrak Ground Stop application profile
  const airtrackDetails = getGroundStopImpactDetails({
    key: "airtrack",
    record: apps.airtrack || {}
  });
  assert.ok(airtrackDetails, "AirTrak Ground Stop impact details must exist");
  assert.equal(airtrackDetails.name, "AirTrak");
  assert.equal(
    airtrackDetails.company,
    "None; built in-house. Key outside services: Ping Identity, Split.io, AppDynamics"
  );
  assert.equal(
    airtrackDetails.website,
    "airtrak.alaskasworld.com. Older URL: https://AOC-prod-frontdoor.azurefd.net/"
  );
  assert.equal(
    airtrackDetails.category,
    "Flight Ops: real-time control of the operation (aircraft assignments, Irrops, flight status)"
  );
  assert.equal(
    airtrackDetails.itsTeam,
    "ITS Ops 360 AirtrAK (Team.Maganty@alaskaair.com)"
  );
  assert.equal(airtrackDetails.vendorContacts.supportPhone, "Not applicable (built in-house)");
  assert.equal(airtrackDetails.vendorContacts.supportEmail, "Not applicable (built in-house)");
  assert.equal(airtrackDetails.vendorContacts.supportHours, "24x7. Target recovery: 1 hour or less");
  assert.equal(airtrackDetails.impactedSystems.length, 6);
  assert.equal(airtrackDetails.upstreamDependencies.length, 5);
  assert.equal(airtrackDetails.downstreamConsumers.length, 5);
  assert.equal(airtrackDetails.dependenciesTab.infrastructureTable.length, 8);
  assert.equal(airtrackDetails.typicalBusinessImpact.length, 5);
  assert.equal(airtrackDetails.knownWorkarounds.length, 5);
  assert.equal(airtrackDetails.validationChecklist.length, 8);
  assert.equal(airtrackDetails.vendorContacts.communicationGuidelines.length, 3);
  assert.equal(airtrackDetails.vendorContacts.responseSlas.length, 4);
  assert.equal(airtrackDetails.relatedDocuments.length, 7);

  // Verify all 9 Ground Stop applications resolve complete Impact Details
  const groundStopKeys = [
    "acars",
    "wam",
    "jetplan",
    "Smart4Aviation (S4A)",
    "jcte",
    "airtrack",
    "pilot-briefing",
    "aircraft-maintenance",
    "aims"
  ];
  for (const key of groundStopKeys) {
    const details = getGroundStopImpactDetails({
      key,
      record: apps[key] || {}
    });
    assert.ok(details, `Impact details missing for Ground Stop key: ${key}`);
    assert.ok(
      details.impactCallout && (details.impactCallout.title || details.impactCallout.level),
      `impactCallout missing for Ground Stop key: ${key}`
    );
    assert.ok(
      details.impactCallout && (details.impactCallout.message || details.impactCallout.description),
      `impactCallout message missing for Ground Stop key: ${key}`
    );
    assert.ok(Array.isArray(details.impactedSystems) && details.impactedSystems.length >= 1);
    for (const sys of details.impactedSystems) {
      assert.ok(sys.id, `sys.id missing in ${key}`);
      assert.ok(sys.name, `sys.name missing in ${key}`);
      assert.ok(sys.description, `sys.description missing in ${key}`);
      assert.ok(sys.businessFunction, `sys.businessFunction missing in ${key}`);
      assert.ok(sys.impact, `sys.impact missing in ${key}`);
    }
    assert.ok(details.dependenciesTab && Array.isArray(details.dependenciesTab.upstreamTable));
    assert.ok(details.vendorContacts && details.internalContacts);
    assert.ok(Array.isArray(details.relatedDocuments) && details.relatedDocuments.length >= 1);
  }
});

const passedCount = results.filter((r) => r.passed).length;
console.log(`\n========================================`);
console.log(`VENDOR CASE STATUS TEST SUMMARY: ${passedCount}/${results.length} PASSED`);
console.log(`========================================\n`);

if (passedCount !== results.length) {
  process.exit(1);
}
