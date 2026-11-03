/**
 * Canonical Vendor Case Portal seed configuration for all 37 vendor records.
 * Combined with js/data/master-data.js inside MasterDataContext.
 */

export const VENDOR_CASE_PORTALS = Object.freeze({
  aerodata: {
    id: "aerodata",
    sourceRow: 4,
    vendor: "AeroData",
    systemName: "AeroData",
    portalUrl: "https://www.aerodata.co/en-US/"
  },
  arinc: {
    id: "arinc",
    sourceRow: 6,
    vendor: "ARINC",
    systemName: "ARINC",
    portalUrl: "https://auth.direct.arinc.net/"
  },
  boeing: {
    id: "boeing",
    sourceRow: 14,
    vendor: "Boeing",
    systemName: "Boeing Toolbox",
    portalUrl: "http://myboeingfleet.com"
  },
  "aims-vendor": {
    id: "aims-vendor",
    sourceRow: 26,
    vendor: "AIMS",
    systemName: "AIMS",
    portalUrl: "https://www.aimsairlinesoftware.com/"
  },
  icargo: {
    id: "icargo",
    sourceRow: 29,
    vendor: "iBS Software, PLC",
    systemName: "iCargo System",
    portalUrl: "https://alaska-icargo.ibsplc.aero"
  },
  accelya: {
    id: "accelya",
    sourceRow: 37,
    vendor: "Accelya",
    systemName: "Accelya",
    portalUrl: "https://customercare-mastercard.my.salesforce-sites.com/chat"
  },
  five9: {
    id: "five9",
    sourceRow: 38,
    vendor: "Five9",
    systemName: "Intelligent Cloud Contact Center",
    portalUrl: "https://community.five9.com/s/?language=en_US"
  },
  alvaria: {
    id: "alvaria",
    sourceRow: 39,
    vendor: "Alvaria",
    systemName: "Alvaria",
    portalUrl: "https://www.alvaria.com/services-and-support/customer-care"
  }
});

/**
 * Merges default Vendor Case Portal seed URLs into the vendor array when a record
 * does not already have an explicit portalUrl override.
 */
export function mergeVendorCasePortals(vendors = []) {
  if (!Array.isArray(vendors)) return [];
  const portalsByRow = new Map(
    Object.values(VENDOR_CASE_PORTALS).map(entry => [Number(entry.sourceRow), entry])
  );

  return vendors.map(vendor => {
    if (!vendor || typeof vendor !== "object") return vendor;
    const match =
      (vendor.id && VENDOR_CASE_PORTALS[vendor.id]) ||
      (vendor.sourceRow && portalsByRow.get(Number(vendor.sourceRow)));

    if (!match) return vendor;
    if (vendor.portalUrl === undefined || vendor.portalUrl === null || vendor.portalUrl === "") {
      return {
        ...vendor,
        portalUrl: match.portalUrl
      };
    }
    return vendor;
  });
}

export default VENDOR_CASE_PORTALS;

