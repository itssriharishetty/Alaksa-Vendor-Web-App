import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useMasterData } from "../context/MasterDataContext";
import VendorCard, {
  companyName,
  contactTarget,
  isVendor24x7,
  usableCardValue,
  vendorLogo,
  vendorStatusInfo
} from "../components/VendorCard";
import { getVendorImpactDetails } from "../data/vendorDetails";
import {
  DetailPageHeader,
  DetailTabs,
  CriticalityAlert,
  ImpactTable,
  ContactRow,
  renderTextWithLinks
} from "../components/SharedDetailComponents";

function searchableText(vendor) {
  return [
    vendor.systemName,
    vendor.displayName,
    vendor.displaySubtitle,
    vendor.category,
    vendor.company || vendor.vendor,
    vendor.escalation,
    vendor.phone,
    vendor.email,
    vendor.vendorPoc,
    vendor.aagItsPoc,
    vendor.aagItsTeam
  ]
    .join(" ")
    .toLowerCase();
}

function renderMultilineValue(value) {
  if (
    value === undefined ||
    value === null ||
    String(value).trim() === "" ||
    /^(?:n\/?a|tbd|none|no)$/i.test(String(value).trim())
  ) {
    return "Not specified";
  }

  const lines = String(value).split(/\r?\n/);
  return lines.map((line, idx) => (
    <React.Fragment key={idx}>
      {line}
      {idx < lines.length - 1 ? <br /> : null}
    </React.Fragment>
  ));
}

function renderModalFallbackIcon(vendor, allVendors = []) {
  const label = [
    vendor?.company,
    vendor?.vendor,
    vendor?.displayName,
    vendor?.category
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const list = Array.isArray(allVendors) ? allVendors : [];
  const ordinal = Math.max(0, list.indexOf(vendor));
  let hash = ordinal;

  if (/(weather|wsi|rain|fusion)/.test(label)) {
    hash += 1;
  } else if (/(baggage|cargo|icargo|spot|nettracer)/.test(label)) {
    hash += 2;
  } else if (/(flight|aircraft|aerodata|boeing|avtec|jetplan|jeppesen)/.test(label)) {
    hash += 3;
  }

  const iconIdx = hash % 12;
  const accentX = 4 + (ordinal % 7) * 2.6;
  const accentY = 4 + (Math.floor(ordinal / 7) % 6) * 3;
  const accentRadius = 0.8 + (ordinal % 3) * 0.25;

  const renderPaths = () => {
    switch (iconIdx) {
      case 0:
        return (
          <>
            <path d="M4 20V5l8-2 8 2v15" />
            <path d="M8 8h2m4 0h2M8 12h2m4 0h2M8 16h2m4 0h2" />
          </>
        );
      case 1:
        return (
          <>
            <path d="M7 18h10a3.5 3.5 0 0 0 .4-7A5.5 5.5 0 0 0 7 9.5 4.25 4.25 0 0 0 7 18Z" />
            <path d="m8 21 1-1m4 1 1-1m4 1 1-1" />
          </>
        );
      case 2:
        return (
          <>
            <path d="M4 8h16v12H4z" />
            <path d="M8 8V5h8v3M8 12v4m8-4v4" />
          </>
        );
      case 3:
        return (
          <path d="m2.5 12 7.1-1.1 3.1-6.7 1.8.5-1 6.6 4.1.2 4-2.2.8.6-2.8 2.8 2.8 2.8-.8.6-4-2.2-4.1.2 1 6.6-1.8.5-3.1-6.7L2.5 12Z" />
        );
      case 4:
        return (
          <>
            <path d="M4 10a8 8 0 0 1 16 0" />
            <path d="M7 10v6m10-6v6M5 16h3m8 0h3M9 20h6" />
          </>
        );
      case 5:
        return (
          <>
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <path d="M8 9h8M8 13h5m-5 3h3" />
          </>
        );
      case 6:
        return (
          <>
            <circle cx="9" cy="8" r="3" />
            <path d="M3.5 19c.5-3.1 2.3-4.7 5.5-4.7s5 1.6 5.5 4.7M15 6a3 3 0 0 1 0 5.8M16 14.5c2.4.4 3.8 1.8 4.2 4.5" />
          </>
        );
      case 7:
        return (
          <>
            <circle cx="12" cy="12" r="7" />
            <path d="M12 5v7l4 2" />
          </>
        );
      case 8:
        return (
          <>
            <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" />
            <path d="m8 10 4 2 4-2M8 14l4 2 4-2" />
          </>
        );
      case 9:
        return (
          <>
            <path d="M5 5h14v14H5z" />
            <path d="M8 9h8M8 12h8M8 15h5" />
          </>
        );
      case 10:
        return (
          <path d="M4 18h16M6 18V8h12v10M9 8V5h6v3" />
        );
      default:
        return (
          <>
            <path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8" />
            <circle cx="12" cy="12" r="3" />
          </>
        );
    }
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {renderPaths()}
      <circle
        className="vendor-icon-accent"
        cx={accentX}
        cy={accentY}
        r={accentRadius}
      />
    </svg>
  );
}

export default function Vendors() {
  const {
    vendors: rawVendors,
    isVendorFavorite,
    toggleVendorFavorite
  } = useMasterData();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    () => searchParams.get("search") || ""
  );
  const [sortMode, setSortMode] = useState("name-asc");
  const [viewMode, setViewMode] = useState("grid");
  const [currentVendor, setCurrentVendor] = useState(null);
  const [activeModalTab, setActiveModalTab] = useState("overview");

  // Full-page Vendor Impact Details state (Accelya)
  const [impactVendor, setImpactVendor] = useState(null);
  const [impactTab, setImpactTab] = useState("overview");
  const [impactSearch, setImpactSearch] = useState("");
  const [appTableSearch, setAppTableSearch] = useState("");
  const [appOwnerFilter, setAppOwnerFilter] = useState("all");
  const [appSortConfig, setAppSortConfig] = useState({
    key: null,
    direction: "asc"
  });
  const [selectedAppDetail, setSelectedAppDetail] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});
  const [copiedField, setCopiedField] = useState("");

  const vendors = useMemo(() => rawVendors || [], [rawVendors]);
  const impactData = useMemo(
    () => getVendorImpactDetails(impactVendor, vendors),
    [impactVendor, vendors]
  );

  const supportedSystemsForVendor = useCallback(
    vendor => {
      if (!vendor) return [];
      const company = companyName(vendor).toLocaleLowerCase();
      const systems = new Map();

      vendors.forEach(record => {
        if (companyName(record).toLocaleLowerCase() !== company) {
          return;
        }
        const system = usableCardValue(
          record.systemName || record.displayName
        );
        if (system) {
          systems.set(system.toLocaleLowerCase(), system);
        }
      });

      return [...systems.values()];
    },
    [vendors]
  );

  const openVendorModal = useCallback((vendor, initialTab = "overview") => {
    if (!vendor) return;
    setCurrentVendor(vendor);
    setActiveModalTab(initialTab || "overview");
  }, []);

  const handleViewVendorDetails = useCallback(
    vendor => {
      if (!vendor) return;
      const details = getVendorImpactDetails(vendor, vendors);
      if (details) {
        setImpactVendor(vendor);
        setImpactTab("overview");
        setImpactSearch("");
        setAppTableSearch("");
        setAppOwnerFilter("all");
        setAppSortConfig({ key: null, direction: "asc" });
        setSelectedAppDetail(null);
        setCheckedItems({});
        setCopiedField("");
        document.querySelector(".vendors-main")?.scrollTo({ top: 0, behavior: "smooth" });
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      openVendorModal(vendor, "overview");
    },
    [openVendorModal, vendors]
  );

  const closeImpactView = useCallback(() => {
    setImpactVendor(null);
    setImpactTab("overview");
    setImpactSearch("");
    setAppTableSearch("");
    setAppOwnerFilter("all");
    setAppSortConfig({ key: null, direction: "asc" });
    setSelectedAppDetail(null);
    setCheckedItems({});
    setCopiedField("");
    if (searchParams.has("vendor")) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete("vendor");
      setSearchParams(nextParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const closeVendorModal = useCallback(() => {
    setCurrentVendor(null);
    if (!impactVendor && searchParams.has("vendor")) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete("vendor");
      setSearchParams(nextParams, { replace: true });
    }
  }, [impactVendor, searchParams, setSearchParams]);

  const handleCopyText = useCallback((text, fieldKey) => {
    if (!text) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedField(fieldKey);
    window.setTimeout(() => {
      setCopiedField(prev => (prev === fieldKey ? "" : prev));
    }, 1800);
  }, []);

  const toggleChecklistItem = useCallback(index => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }, []);

  const filteredImpactedSystems = useMemo(() => {
    if (!impactData || !Array.isArray(impactData.impactedSystems)) return [];
    const q = impactSearch.trim().toLowerCase();
    if (!q) return impactData.impactedSystems;
    return impactData.impactedSystems.filter(sys =>
      [
        sys.name,
        sys.subName,
        sys.appTabSubName,
        sys.description,
        sys.appTabDescription,
        sys.businessFunction,
        sys.impact,
        sys.dependencies,
        sys.owner
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [impactData, impactSearch]);

  const appOwnerOptions = useMemo(() => {
    if (!impactData || !Array.isArray(impactData.impactedSystems)) return [];
    const owners = new Set();
    impactData.impactedSystems.forEach(sys => {
      if (sys.owner) owners.add(sys.owner);
    });
    return ["all", ...owners];
  }, [impactData]);

  const filteredAppsTabSystems = useMemo(() => {
    if (!impactData || !Array.isArray(impactData.impactedSystems)) return [];
    const topQ = impactSearch.trim().toLowerCase();
    const tableQ = appTableSearch.trim().toLowerCase();

    const list = impactData.impactedSystems.filter(sys => {
      if (appOwnerFilter !== "all" && sys.owner !== appOwnerFilter) {
        return false;
      }
      const haystack = [
        sys.name,
        sys.subName,
        sys.appTabSubName,
        sys.description,
        sys.appTabDescription,
        sys.businessFunction,
        sys.impact,
        sys.dependencies,
        sys.owner
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (topQ && !haystack.includes(topQ)) return false;
      if (tableQ && !haystack.includes(tableQ)) return false;
      return true;
    });

    if (appSortConfig.key) {
      const { key, direction } = appSortConfig;
      const mult = direction === "desc" ? -1 : 1;
      list.sort((a, b) => {
        const valA = String(a[key] || "");
        const valB = String(b[key] || "");
        return valA.localeCompare(valB) * mult;
      });
    }

    return list;
  }, [impactData, impactSearch, appTableSearch, appOwnerFilter, appSortConfig]);

  const handleSortAppsTable = useCallback(columnKey => {
    setAppSortConfig(prev => {
      if (prev.key === columnKey) {
        return {
          key: columnKey,
          direction: prev.direction === "asc" ? "desc" : "asc"
        };
      }
      return { key: columnKey, direction: "asc" };
    });
  }, []);

  const handleCycleOwnerFilter = useCallback(() => {
    if (appOwnerOptions.length <= 1) return;
    const currentIndex = appOwnerOptions.indexOf(appOwnerFilter);
    const nextIndex = (currentIndex + 1) % appOwnerOptions.length;
    setAppOwnerFilter(appOwnerOptions[nextIndex]);
  }, [appOwnerOptions, appOwnerFilter]);

  const handleExportAppsExcel = useCallback(() => {
    if (!impactData || !Array.isArray(impactData.impactedSystems)) return;
    const headers = [
      "Application / System",
      "Description",
      "Business Function",
      `Impact if ${impactData.name} is Unavailable`,
      "Dependencies",
      "Owner"
    ];
    const escapeCsv = val => `"${String(val || "").replace(/"/g, '""')}"`;
    const rows = impactData.impactedSystems.map(sys => [
      `${sys.name}${sys.appTabSubName ? ` ${sys.appTabSubName}` : ""}`,
      sys.appTabDescription || sys.description,
      sys.businessFunction,
      sys.impact,
      sys.dependencies || "",
      sys.owner || ""
    ]);
    const csvContent =
      "\uFEFF" +
      [headers.map(escapeCsv).join(","), ...rows.map(r => r.map(escapeCsv).join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${impactData.name}_Applications_Systems.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [impactData]);

  // Sync URL ?search= or ?vendor= parameters on mount / param change
  useEffect(() => {
    const searchParam = searchParams.get("search");
    const vendorParam = searchParams.get("vendor");

    if (searchParam !== null) {
      setSearchQuery(searchParam);
    }

    if (vendorParam && vendors.length > 0) {
      const normalizedParam = vendorParam.trim().toLowerCase();
      const targetVendor =
        vendors.find(
          v =>
            String(v.id || "").toLowerCase() === normalizedParam ||
            String(v.sourceRow || "") === vendorParam.trim()
        ) ||
        vendors.find(
          v =>
            String(v.systemName || "").toLowerCase() === normalizedParam ||
            String(v.displayName || "").toLowerCase() === normalizedParam
        ) ||
        vendors.find(
          v =>
            String(v.company || v.vendor || "").toLowerCase() ===
            normalizedParam
        );
      if (targetVendor) {
        if (getVendorImpactDetails(targetVendor, vendors)) {
          setImpactVendor(targetVendor);
          setImpactTab("overview");
          setImpactSearch("");
          setAppTableSearch("");
          setAppOwnerFilter("all");
          setAppSortConfig({ key: null, direction: "asc" });
          setSelectedAppDetail(null);
          setCheckedItems({});
          setCopiedField("");
        } else {
          openVendorModal(targetVendor, "overview");
        }
      }
    }
  }, [searchParams, vendors, openVendorModal]);

  // Close modal on Escape key & lock body scroll only when contact modal is open
  useEffect(() => {
    document.body.style.overflow = currentVendor ? "hidden" : "";
    if (!currentVendor && !impactVendor) {
      return;
    }

    const handleKeyDown = event => {
      if (event.key === "Escape") {
        if (currentVendor) {
          closeVendorModal();
        } else if (impactVendor) {
          closeImpactView();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentVendor, impactVendor, closeVendorModal, closeImpactView]);

  const filteredVendors = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = vendors.filter(vendor => {
      return !query || searchableText(vendor).includes(query);
    });

    if (sortMode === "name-asc") {
      filtered.sort((a, b) => companyName(a).localeCompare(companyName(b)));
    } else if (sortMode === "name-desc") {
      filtered.sort((a, b) => companyName(b).localeCompare(companyName(a)));
    } else if (sortMode === "system-asc") {
      filtered.sort((a, b) =>
        String(a.systemName || a.displayName || "").localeCompare(
          String(b.systemName || b.displayName || "")
        )
      );
    } else if (sortMode === "team-asc") {
      filtered.sort((a, b) =>
        String(a.aagItsTeam || "").localeCompare(String(b.aagItsTeam || ""))
      );
    }

    return filtered;
  }, [vendors, searchQuery, sortMode]);

  const rangeLabel =
    filteredVendors.length > 0
      ? `Showing 1 – ${filteredVendors.length} of ${vendors.length} vendor records`
      : `Showing 0 of ${vendors.length} vendor records`;

  const modalLogo = useMemo(() => {
    if (!currentVendor) return null;
    const comp = companyName(currentVendor);
    return vendorLogo(currentVendor, comp);
  }, [currentVendor]);

  const currentVendorKey = currentVendor
    ? currentVendor.id || String(currentVendor.sourceRow || "")
    : "";
  const isCurrentFavorite = currentVendorKey
    ? isVendorFavorite(currentVendorKey)
    : false;

  const handleEmailVendor = () => {
    if (
      currentVendor &&
      currentVendor.email &&
      currentVendor.email !== "No"
    ) {
      const target = contactTarget(currentVendor.email, "email");
      window.location.href = target || `mailto:${currentVendor.email}`;
    }
  };

  const handleCallVendor = () => {
    if (
      currentVendor &&
      currentVendor.phone &&
      currentVendor.phone !== "No"
    ) {
      const phone = String(currentVendor.phone).match(/\+?\d[\d\s().-]{6,}/);
      if (phone) {
        window.location.href = `tel:${phone[0].replace(/[^0-9+]/g, "")}`;
      }
    }
  };

  const handleToggleCurrentFavorite = () => {
    if (!currentVendorKey) return;
    toggleVendorFavorite(currentVendorKey);
  };

  const handleCopyImpactSummary = () => {
    if (!impactData) return;
    const summaryText = [
      `${impactData.pageTitle} (${impactData.status})`,
      `Company: ${impactData.company} | Category: ${impactData.category} | ITS Team: ${impactData.itsTeam}`,
      `Support Email: ${impactData.vendorContacts.supportEmail} | Phone: ${impactData.vendorContacts.supportPhone}`,
      `Impacted Systems: ${impactData.impactedSystems.map(s => s.name).join(", ")}`
    ].join("\n");
    handleCopyText(summaryText, "summary");
  };

  return (
    <>
      <main
        className={`main-content ias-main-content vendors-main${
          impactData ? " vi-inpage-main" : ""
        }`}
      >
        {!impactData ? (
          <>
            {/* COMPACT PAGE HEADER (HOME-STYLE TOPBAR WITH SEARCH) */}
        <header
          className="vendor-page-header"
          aria-label="Vendor Directory Header and Search"
        >
          <div className="vendor-page-title-group">
            <h1 className="vendor-page-title">
              Vendor <span className="vendor-title-accent">Directory</span>
            </h1>
            <p className="vendor-page-subtitle">
              Enterprise vendor partners, support contacts &amp; escalation
              channels
            </p>
          </div>

          <div className="vendor-page-header-actions">
            <label
              className="vendor-search-box"
              aria-label="Search vendors, systems, contacts"
            >
              <svg
                className="vendor-search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                id="vendorSearch"
                type="search"
                placeholder="Search vendors, systems, contacts..."
                autoComplete="off"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </label>

            <div
              className="vendor-view-toggle"
              role="group"
              aria-label="Directory layout view"
            >
              <button
                id="vendorViewGrid"
                className={`vendor-view-btn${viewMode === "grid" ? " active" : ""}`}
                type="button"
                aria-pressed={viewMode === "grid" ? "true" : "false"}
                onClick={() => setViewMode("grid")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
                <span>Grid</span>
              </button>
              <button
                id="vendorViewList"
                className={`vendor-view-btn${viewMode === "list" ? " active" : ""}`}
                type="button"
                aria-pressed={viewMode === "list" ? "true" : "false"}
                onClick={() => setViewMode("list")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                </svg>
                <span>List</span>
              </button>
            </div>
          </div>
        </header>

        {/* ROW 4: DIRECTORY SUBHEADER & SORT */}
        <section
          className="vendor-subheader-bar"
          aria-label="Directory count and sorting"
        >
          <div className="vendor-subheader-left">
            <h2 className="vendor-subheader-title">
              Vendor Directory{" "}
              <span id="vendorDirectoryCount" className="vendor-dir-count">
                ({vendors.length})
              </span>
            </h2>
            <span className="vendor-subheader-sep" aria-hidden="true">
              |
            </span>
            <span id="vendorResultCount" className="vendor-subheader-meta">
              {rangeLabel}
            </span>
          </div>

          <div className="vendor-subheader-right">
            <span className="vendor-sort-label">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" y1="6" x2="13" y2="6" />
                <line x1="4" y1="12" x2="11" y2="12" />
                <line x1="4" y1="18" x2="11" y2="18" />
                <polyline points="15 15 18 18 21 15" />
                <line x1="18" y1="6" x2="18" y2="18" />
              </svg>
              <span>Sort by:</span>
            </span>
            <select
              id="vendorSortSelect"
              className="vendor-sort-select"
              aria-label="Sort vendor directory"
              value={sortMode}
              onChange={e => setSortMode(e.target.value)}
            >
              <option value="name-asc">Company (A-Z)</option>
              <option value="name-desc">Company (Z-A)</option>
              <option value="default">Name (A-Z)</option>
              <option value="system-asc">Supported System</option>
              <option value="team-asc">ITS Team</option>
            </select>
          </div>
        </section>

        {/* ROW 5: VENDOR CARDS GRID */}
        <section
          className="vendor-grid-section"
          aria-label="Vendor directory cards"
        >
          <div
            id="vendorGrid"
            className={`vendor-grid${viewMode === "list" ? " list-view" : ""}`}
            hidden={filteredVendors.length === 0}
          >
            {filteredVendors.map(vendor => {
              const originalIndex = vendors.indexOf(vendor);
              const vendorKey = vendor.id || String(vendor.sourceRow || "");
              return (
                <VendorCard
                  key={`${vendorKey}-${originalIndex}`}
                  vendor={vendor}
                  index={originalIndex}
                  isFavorite={isVendorFavorite(vendorKey)}
                  onToggleFavorite={toggleVendorFavorite}
                  onViewDetails={v => handleViewVendorDetails(v)}
                  onPrimaryAction={v => openVendorModal(v, "contacts")}
                  primaryActionLabel="Contact"
                />
              );
            })}
          </div>

          <div
            id="noVendorResults"
            className="no-vendor-results"
            hidden={filteredVendors.length !== 0}
          >
            <div>⌕</div>
            <strong>No vendors found</strong>
            <span>Try a different search or clear the filters.</span>
          </div>
        </section>
          </>
        ) : (
            <div
              className="vi-page-container"
              id="vendorImpactView"
              key={impactVendor?.id || impactVendor?.sourceRow || impactData.name}
            >
              {/* HERO SUMMARY CARD + 4 PASTEL INFO CARDS + TAB BAR */}
              <DetailPageHeader
                ariaLabel="Vendor summary"
                title={impactData.pageTitle || `${impactData.name} - Vendor Impact Details`}
                subtitle={impactData.pageSubtitle}
                lastUpdated={impactData.lastUpdated}
                backLabel={
                  impactTab !== "overview"
                    ? "Back to Vendor Details"
                    : "Back to Vendors"
                }
                onBack={
                  impactTab !== "overview"
                    ? () => setImpactTab("overview")
                    : closeImpactView
                }
                company={impactData.company}
                website={impactData.website}
                category={impactData.category}
                itsTeam={impactData.itsTeam}
                tabs={[
                  { key: "overview", label: "Impact Overview" },
                  { key: "dependencies", label: "Dependencies" },
                  { key: "contacts", label: "Contacts" },
                  { key: "documents", label: "Related Documents" }
                ]}
                activeTab={impactTab}
                onSelectTab={key => {
                  setImpactTab(key);
                  setSelectedAppDetail(null);
                }}
              />

              {impactTab === "systems" ? (
                /* FULL-WIDTH APPLICATIONS & SYSTEMS TAB LAYOUT */
                <div className="vi-apps-tab-layout vi-animate-tab" key={impactTab}>
                  <section
                    className="vi-card vi-apps-full-card"
                    aria-label="Applications and Systems List"
                  >
                    {/* CARD HEADER WITH TITLE/SUBTITLE LEFT + SEARCH/FILTER RIGHT */}
                    <header className="vi-apps-card-header">
                      <div className="vi-apps-header-left">
                        <span
                          className="vi-card-icon icon-blue"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="7" height="7" rx="1.5" />
                            <rect x="14" y="3" width="7" height="7" rx="1.5" />
                            <rect x="3" y="14" width="7" height="7" rx="1.5" />
                            <rect x="14" y="14" width="7" height="7" rx="1.5" />
                          </svg>
                        </span>
                        <div className="vi-apps-title-stack">
                          <h3>
                            Applications &amp; Systems (
                            {impactData.impactedSystems.length})
                          </h3>
                          <p>{impactData.applicationsCardSubtitle}</p>
                        </div>
                      </div>

                      <div className="vi-apps-header-right">
                        <label
                          className="vi-apps-search-box"
                          aria-label="Search applications"
                        >
                          <svg
                            className="vi-search-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                          <input
                            type="search"
                            placeholder="Search applications..."
                            value={appTableSearch}
                            onChange={e => setAppTableSearch(e.target.value)}
                          />
                        </label>

                        <button
                          type="button"
                          className={`vi-apps-filter-btn${
                            appOwnerFilter !== "all" ? " active" : ""
                          }`}
                          onClick={handleCycleOwnerFilter}
                          title="Click to filter by Owner team"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="7" y1="12" x2="17" y2="12" />
                            <line x1="10" y1="18" x2="14" y2="18" />
                          </svg>
                          <span>
                            {appOwnerFilter === "all"
                              ? "Filter"
                              : `Filter: ${appOwnerFilter}`}
                          </span>
                        </button>
                      </div>
                    </header>

                    {/* 8-COLUMN APPLICATIONS & SYSTEMS TABLE */}
                    <div className="vi-table-wrap">
                      <table className="vi-table vi-apps-table">
                        <thead>
                          <tr>
                            {[
                              { key: "name", label: "Application / System" },
                              {
                                key: "appTabDescription",
                                label: "Description"
                              },
                              {
                                key: "businessFunction",
                                label: "Business Function"
                              },
                              {
                                key: "impact",
                                label: `Impact if ${impactData.name} is Unavailable`
                              },
                              { key: "dependencies", label: "Dependencies" },
                              { key: "owner", label: "Owner" }
                            ].map(col => (
                              <th key={col.key}>
                                <button
                                  type="button"
                                  className="vi-th-sort-btn"
                                  onClick={() => handleSortAppsTable(col.key)}
                                >
                                  <span>{col.label}</span>
                                  <span
                                    className="vi-sort-arrows"
                                    aria-hidden="true"
                                  >
                                    ↑↓
                                  </span>
                                </button>
                              </th>
                            ))}
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredAppsTabSystems.map(sys => (
                            <tr key={sys.id}>
                              <td className="vi-td-app">
                                <strong>{sys.name}</strong>
                                {sys.appTabSubName || sys.subName ? (
                                  <div className="vi-td-app-subbold">
                                    {sys.appTabSubName || sys.subName}
                                  </div>
                                ) : null}
                              </td>
                              <td className="vi-td-desc">
                                {sys.appTabDescription || sys.description}
                              </td>
                              <td className="vi-td-func">
                                {sys.businessFunction}
                              </td>
                              <td className="vi-td-impact">{sys.impact}</td>
                              <td className="vi-td-deps">{sys.dependencies}</td>
                              <td className="vi-td-owner">{sys.owner}</td>
                              <td className="vi-td-actions">
                                <button
                                  type="button"
                                  className="vi-app-view-btn"
                                  onClick={() => setSelectedAppDetail(sys)}
                                >
                                  <span>View Details</span>
                                  <span
                                    className="vi-app-view-arrow"
                                    aria-hidden="true"
                                  >
                                    →
                                  </span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* SELECTED APPLICATION DETAIL DRAWER / CALLOUT */}
                    {selectedAppDetail ? (
                      <div
                        className="vi-selected-app-drawer"
                        role="region"
                        aria-label={`Details for ${selectedAppDetail.name}`}
                      >
                        <div className="vi-selected-app-header">
                          <div>
                            <strong>
                              {selectedAppDetail.name}{" "}
                              {selectedAppDetail.appTabSubName ||
                                selectedAppDetail.subName ||
                                ""}
                            </strong>
                            <span>
                              {selectedAppDetail.businessFunction} •{" "}
                              {selectedAppDetail.owner}
                            </span>
                          </div>
                          <button
                            type="button"
                            className="vi-selected-app-close"
                            onClick={() => setSelectedAppDetail(null)}
                          >
                            Close ×
                          </button>
                        </div>
                        <div className="vi-selected-app-grid">
                          <div>
                            <span>Description</span>
                            <p>
                              {selectedAppDetail.appTabDescription ||
                                selectedAppDetail.description}
                            </p>
                          </div>
                          <div>
                            <span>
                              Impact if {impactData.name} is Unavailable
                            </span>
                            <p>{selectedAppDetail.impact}</p>
                          </div>
                          <div>
                            <span>Dependencies</span>
                            <p>{selectedAppDetail.dependencies}</p>
                          </div>
                          <div>
                            <span>Support &amp; Escalation</span>
                            <p>
                              {impactData.vendorContacts.supportEmail} (
                              {impactData.vendorContacts.supportPhone})
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {/* PAGINATION FOOTER */}
                    <footer className="vi-apps-pagination-bar">
                      <span className="vi-apps-showing-text">
                        Showing{" "}
                        {filteredAppsTabSystems.length > 0 ? "1" : "0"} –{" "}
                        {filteredAppsTabSystems.length} of{" "}
                        {impactData.impactedSystems.length} applications
                      </span>

                      <div className="vi-pagination-controls">
                        <button
                          type="button"
                          className="vi-page-btn"
                          disabled
                          aria-label="Previous page"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          className="vi-page-btn active"
                          aria-current="page"
                        >
                          1
                        </button>
                        <button
                          type="button"
                          className="vi-page-btn"
                          disabled
                          aria-label="Next page"
                        >
                          ›
                        </button>
                      </div>
                    </footer>
                  </section>

                  {/* BOTTOM 2-CARD ROW: IMPACT SUMMARY + QUICK ACTIONS */}
                  <div className="vi-apps-bottom-grid">
                    {/* LEFT CARD: IMPACT SUMMARY */}
                    <section
                      className="vi-card vi-impact-summary-card"
                      aria-label="Impact Summary"
                    >
                      <header className="vi-card-header">
                        <span
                          className="vi-card-icon icon-blue-soft"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="20" x2="18" y2="10" />
                            <line x1="12" y1="20" x2="12" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="14" />
                          </svg>
                        </span>
                        <h3>Impact Summary</h3>
                      </header>

                      <div className="vi-impact-kpi-grid">
                        <div className="vi-impact-kpi kpi-confirmed">
                          <strong className="vi-kpi-num">
                            {impactData.impactSummary
                              ? impactData.impactSummary.confirmed
                              : 0}
                          </strong>
                          <span className="vi-kpi-label">
                            Confirmed Impacted
                          </span>
                        </div>

                        <div className="vi-impact-kpi kpi-potential">
                          <strong className="vi-kpi-num">
                            {impactData.impactSummary
                              ? impactData.impactSummary.potential
                              : impactData.impactedSystems.length}
                          </strong>
                          <span className="vi-kpi-label">
                            Potentially Impacted
                          </span>
                        </div>

                        <div className="vi-impact-kpi kpi-not-impacted">
                          <strong className="vi-kpi-num">
                            {impactData.impactSummary
                              ? impactData.impactSummary.notImpacted
                              : 0}
                          </strong>
                          <span className="vi-kpi-label">Not Impacted</span>
                        </div>

                        <div className="vi-impact-kpi kpi-under-review">
                          <strong className="vi-kpi-num">
                            {impactData.impactSummary
                              ? impactData.impactSummary.underReview
                              : 0}
                          </strong>
                          <span className="vi-kpi-label">Under Review</span>
                        </div>
                      </div>
                    </section>

                    {/* RIGHT CARD: QUICK ACTIONS */}
                    <section
                      className="vi-card vi-apps-quick-actions-card"
                      aria-label="Quick Actions"
                    >
                      <header className="vi-card-header">
                        <span
                          className="vi-card-icon icon-blue"
                          aria-hidden="true"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                        </span>
                        <h3>Quick Actions</h3>
                      </header>

                      <div className="vi-apps-qa-row">
                        <button
                          type="button"
                          className="vi-apps-qa-btn"
                          onClick={() =>
                            window.open(
                              "https://alaskaair.service-now.com/",
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                          </svg>
                          <span>Create ServiceNow Incident</span>
                        </button>

                        <button
                          type="button"
                          className="vi-apps-qa-btn"
                          onClick={handleExportAppsExcel}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="8" y1="13" x2="16" y2="13" />
                            <line x1="8" y1="17" x2="16" y2="17" />
                          </svg>
                          <span>Export to Excel</span>
                        </button>

                        <button
                          type="button"
                          className="vi-apps-qa-btn"
                          onClick={() => window.print()}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <polyline points="6 9 6 2 18 2 18 9" />
                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                            <rect x="6" y="14" width="12" height="8" />
                          </svg>
                          <span>Print</span>
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              ) : impactTab === "dependencies" && impactData.dependenciesTab ? (
                /* DEPENDENCIES TAB FULL-WIDTH LAYOUT */
                <div className="vi-deps-tab-layout vi-animate-tab" key={impactTab}>
                  {/* ROW 1: DEPENDENCY OVERVIEW DIAGRAM (LEFT) + SUMMARY & KEY TAKEAWAYS (RIGHT) */}
                  <div className="vi-deps-top-grid">
                    {/* LEFT CARD: DEPENDENCY OVERVIEW DIAGRAM */}
                    <section
                      className="vi-card vi-dep-overview-card"
                      aria-label="Dependency Overview Diagram"
                    >
                      <header className="vi-dep-overview-header">
                        <span
                          className="vi-card-icon icon-blue-soft"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="9" y="2" width="6" height="6" rx="1" />
                            <rect x="2" y="16" width="6" height="6" rx="1" />
                            <rect x="16" y="16" width="6" height="6" rx="1" />
                            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                            <path d="M12 12V8" />
                          </svg>
                        </span>
                        <div className="vi-apps-title-stack">
                          <h3>Dependency Overview</h3>
                          <p>
                            {impactData.dependenciesTab.overviewSubtitle ||
                              impactData.dependenciesTab.diagramSubtitle}
                          </p>
                        </div>
                      </header>

                      {/* 3-COLUMN ARCHITECTURE FLOW DIAGRAM */}
                      <div className="vi-dep-diagram">
                        {/* COLUMN 1: UPSTREAM DEPENDENCIES */}
                        <div className="vi-dep-col col-upstream">
                          <h4 className="vi-dep-col-title title-upstream">
                            Upstream Dependencies
                          </h4>
                          <div className="vi-dep-node-stack">
                            {impactData.dependenciesTab.diagramUpstream.map(
                              node => (
                                <div key={node.id} className="vi-dep-node">
                                  <span
                                    className={`vi-dep-node-icon icon-${node.iconType}`}
                                    aria-hidden="true"
                                  >
                                    {node.iconType === "ticket" ? (
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          x="2"
                                          y="5"
                                          width="20"
                                          height="14"
                                          rx="2"
                                        />
                                        <line x1="2" y1="10" x2="22" y2="10" />
                                      </svg>
                                    ) : node.iconType === "doc" ? (
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <circle cx="12" cy="14" r="2.5" />
                                      </svg>
                                    ) : node.iconType === "transfer" ? (
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M17 3h4v4" />
                                        <path d="M3 11l18-8" />
                                        <path d="M21 13l-18 8" />
                                        <path d="M17 21h4v-4" />
                                      </svg>
                                    ) : (
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <circle cx="12" cy="12" r="9" />
                                        <line x1="3" y1="12" x2="21" y2="12" />
                                        <path d="M12 3a14.5 14.5 0 0 1 0 18 14.5 14.5 0 0 1 0-18" />
                                      </svg>
                                    )}
                                  </span>
                                  <div className="vi-dep-node-text">
                                    <strong>{node.name || node.label}</strong>
                                    {node.subtitle ? (
                                      <span>{node.subtitle}</span>
                                    ) : null}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* CONNECTOR 1: UPSTREAM -> ACCELYA */}
                        <div
                          className="vi-dep-connector conn-left"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 60 280"
                            preserveAspectRatio="none"
                            className="vi-dep-conn-svg"
                          >
                            <path
                              d="M 0 38 H 28 V 140 M 0 106 H 28 V 140 M 0 174 H 28 V 140 M 0 242 H 28 V 140 M 28 140 H 52"
                              fill="none"
                              stroke="#2563EB"
                              strokeWidth="1.8"
                            />
                            <polygon
                              points="50,135 60,140 50,145"
                              fill="#2563EB"
                            />
                          </svg>
                        </div>

                        {/* COLUMN 2: VENDOR SERVICES */}
                        <div className="vi-dep-col col-center">
                          <h4 className="vi-dep-col-title title-center">
                            {impactData.name} Services
                          </h4>
                          <div className="vi-dep-center-box">
                            <div className="vi-dep-center-logo">
                              {impactData.logo ? (
                                <img
                                  src={impactData.logo}
                                  alt={impactData.name}
                                />
                              ) : (
                                <div className="vi-dep-logo-fallback">
                                  {renderModalFallbackIcon(
                                    impactVendor,
                                    vendors
                                  )}
                                </div>
                              )}
                            </div>
                            <div className="vi-dep-services-stack">
                              {impactData.dependenciesTab.diagramServices.map(
                                (svc, idx) => (
                                  <div
                                    key={idx}
                                    className="vi-dep-service-pill"
                                  >
                                    {svc}
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        {/* CONNECTOR 2: ACCELYA -> DOWNSTREAM */}
                        <div
                          className="vi-dep-connector conn-right"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 60 280"
                            preserveAspectRatio="none"
                            className="vi-dep-conn-svg"
                          >
                            <path
                              d="M 0 140 H 26 M 26 28 V 252 M 26 28 H 52 M 26 84 H 52 M 26 140 H 52 M 26 196 H 52 M 26 252 H 52"
                              fill="none"
                              stroke="#2563EB"
                              strokeWidth="1.8"
                            />
                            <polygon
                              points="50,23 60,28 50,33"
                              fill="#2563EB"
                            />
                            <polygon
                              points="50,79 60,84 50,89"
                              fill="#2563EB"
                            />
                            <polygon
                              points="50,135 60,140 50,145"
                              fill="#2563EB"
                            />
                            <polygon
                              points="50,191 60,196 50,201"
                              fill="#2563EB"
                            />
                            <polygon
                              points="50,247 60,252 50,257"
                              fill="#2563EB"
                            />
                          </svg>
                        </div>

                        {/* COLUMN 3: DOWNSTREAM CONSUMERS */}
                        <div className="vi-dep-col col-downstream">
                          <h4 className="vi-dep-col-title title-downstream">
                            Downstream Consumers
                          </h4>
                          <div className="vi-dep-node-stack">
                            {impactData.dependenciesTab.diagramDownstream.map(
                              node => (
                                <div key={node.id} className="vi-dep-node">
                                  <span
                                    className={`vi-dep-node-icon icon-${node.iconType}`}
                                    aria-hidden="true"
                                  >
                                    {node.iconType === "bank" ? (
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <polygon points="12 2 2 7 22 7 12 2" />
                                        <line x1="6" y1="11" x2="6" y2="17" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                        <line x1="18" y1="11" x2="18" y2="17" />
                                        <line x1="3" y1="21" x2="21" y2="21" />
                                      </svg>
                                    ) : node.iconType === "database" ? (
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          x="2"
                                          y="3"
                                          width="20"
                                          height="14"
                                          rx="2"
                                        />
                                        <line x1="8" y1="21" x2="16" y2="21" />
                                        <line x1="12" y1="17" x2="12" y2="21" />
                                      </svg>
                                    ) : node.iconType === "team" ? (
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                      </svg>
                                    ) : node.iconType === "nodes" ? (
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <circle cx="18" cy="5" r="3" />
                                        <circle cx="6" cy="12" r="3" />
                                        <circle cx="18" cy="19" r="3" />
                                        <line
                                          x1="8.59"
                                          y1="13.51"
                                          x2="15.42"
                                          y2="17.49"
                                        />
                                        <line
                                          x1="15.41"
                                          y1="6.51"
                                          x2="8.59"
                                          y2="10.49"
                                        />
                                      </svg>
                                    ) : (
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          x="3"
                                          y="3"
                                          width="18"
                                          height="18"
                                          rx="2"
                                        />
                                        <line x1="8" y1="16" x2="8" y2="12" />
                                        <line x1="12" y1="16" x2="12" y2="8" />
                                        <line x1="16" y1="16" x2="16" y2="11" />
                                      </svg>
                                    )}
                                  </span>
                                  <div className="vi-dep-node-text">
                                    <strong>{node.name || node.label}</strong>
                                    {node.subtitle ? (
                                      <span>{node.subtitle}</span>
                                    ) : null}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* RIGHT STACKED COLUMN: DEPENDENCY SUMMARY + KEY TAKEAWAYS */}
                    <aside className="vi-deps-side-col">
                      {/* CARD 1: DEPENDENCY SUMMARY */}
                      <section
                        className="vi-card vi-dep-summary-card"
                        aria-label="Dependency Summary"
                      >
                        <header className="vi-card-header">
                          <span
                            className="vi-card-icon icon-blue-soft"
                            aria-hidden="true"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="9" y="2" width="6" height="6" rx="1" />
                              <rect x="2" y="16" width="6" height="6" rx="1" />
                              <rect x="16" y="16" width="6" height="6" rx="1" />
                              <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                              <path d="M12 12V8" />
                            </svg>
                          </span>
                          <h3>Dependency Summary</h3>
                        </header>

                        <div className="vi-dep-summary-list">
                          {impactData.dependenciesTab.summaryStats.map(
                            (stat, idx) => (
                              <div key={idx} className="vi-dep-summary-row">
                                <span className="vi-dep-summary-label">
                                  {stat.label}
                                </span>
                                <strong
                                  className={`vi-dep-summary-count tone-${stat.tone}`}
                                >
                                  {stat.count}
                                </strong>
                              </div>
                            )
                          )}
                        </div>
                      </section>

                      {/* CARD 2: KEY TAKEAWAYS */}
                      <section
                        className="vi-card vi-dep-takeaways-card"
                        aria-label="Key Takeaways"
                      >
                        <header className="vi-card-header">
                          <span
                            className="vi-card-icon icon-blue-soft"
                            aria-hidden="true"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9 18h6" />
                              <path d="M10 22h4" />
                              <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                            </svg>
                          </span>
                          <h3>Key Takeaways</h3>
                        </header>

                        <ul className="vi-bullet-list vi-takeaways-list">
                          {impactData.dependenciesTab.keyTakeaways.map(
                            (item, idx) => (
                              <li key={idx}>{item}</li>
                            )
                          )}
                        </ul>
                      </section>
                    </aside>
                  </div>

                  {/* ROW 2: UPSTREAM DEPENDENCIES (4) + DOWNSTREAM CONSUMERS (5) TABLES */}
                  <div className="vi-deps-mid-grid">
                    {/* LEFT TABLE: UPSTREAM DEPENDENCIES (4) */}
                    <section
                      className="vi-card vi-dep-table-card"
                      aria-label="Upstream Dependencies Table"
                    >
                      <header className="vi-card-header">
                        <span
                          className="vi-card-icon icon-red-up"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="12" y1="19" x2="12" y2="5" />
                            <polyline points="5 12 12 5 19 12" />
                          </svg>
                        </span>
                        <h3>
                          Upstream Dependencies (
                          {impactData.dependenciesTab.upstreamTable.length})
                        </h3>
                      </header>

                      <div className="vi-table-wrap">
                        <table className="vi-table vi-dep-mini-table">
                          <thead>
                            <tr>
                              <th>System / Vendor</th>
                              <th>Description</th>
                              <th>Type</th>
                              <th>Impact if Unavailable</th>
                            </tr>
                          </thead>
                          <tbody>
                            {impactData.dependenciesTab.upstreamTable.map(
                              row => (
                                <tr key={row.id}>
                                  <td className="vi-td-app">
                                    <strong>{row.name}</strong>
                                    {row.subName ? (
                                      <div className="vi-td-subname">
                                        {row.subName}
                                      </div>
                                    ) : null}
                                  </td>
                                  <td className="vi-td-desc">
                                    {row.description}
                                  </td>
                                  <td>
                                    <span
                                      className={`vi-dep-type-pill type-${
                                        String(row.type || row.dataFlow || "")
                                          .toLowerCase()
                                          .includes("external")
                                          ? "external"
                                          : String(row.type || row.dataFlow || "")
                                              .toLowerCase()
                                              .includes("infrastructure")
                                          ? "infrastructure"
                                          : "internal"
                                      }`}
                                    >
                                      {row.type || row.dataFlow || "Internal"}
                                    </span>
                                  </td>
                                  <td className="vi-td-impact">{row.impact}</td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </section>

                    {/* RIGHT TABLE: DOWNSTREAM CONSUMERS (5) */}
                    <section
                      className="vi-card vi-dep-table-card"
                      aria-label="Downstream Consumers Table"
                    >
                      <header className="vi-card-header">
                        <span
                          className="vi-card-icon icon-green-down"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <polyline points="19 12 12 19 5 12" />
                          </svg>
                        </span>
                        <h3>
                          Downstream Consumers (
                          {impactData.dependenciesTab.downstreamTable.length})
                        </h3>
                      </header>

                      <div className="vi-table-wrap">
                        <table className="vi-table vi-dep-mini-table">
                          <thead>
                            <tr>
                              <th>System / Team</th>
                              <th>Description</th>
                              <th>Type</th>
                              <th>Impact if {impactData.name} Unavailable</th>
                            </tr>
                          </thead>
                          <tbody>
                            {impactData.dependenciesTab.downstreamTable.map(
                              row => (
                                <tr key={row.id}>
                                  <td className="vi-td-app">
                                    <strong>{row.name}</strong>
                                  </td>
                                  <td className="vi-td-desc">
                                    {row.description}
                                  </td>
                                  <td>
                                    <span
                                      className={`vi-dep-type-pill type-${
                                        String(row.type || row.dataFlow || "")
                                          .toLowerCase()
                                          .includes("external")
                                          ? "external"
                                          : String(row.type || row.dataFlow || "")
                                              .toLowerCase()
                                              .includes("infrastructure")
                                          ? "infrastructure"
                                          : "internal"
                                      }`}
                                    >
                                      {row.type || row.dataFlow || "Internal"}
                                    </span>
                                  </td>
                                  <td className="vi-td-impact">{row.impact}</td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  </div>

                  {/* ROW 3: RELATED INFRASTRUCTURE DEPENDENCIES TABLE */}
                  <section
                    className="vi-card vi-dep-infra-card"
                    aria-label="Related Infrastructure Dependencies"
                  >
                    <header className="vi-card-header">
                      <span
                        className="vi-card-icon icon-blue"
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      </span>
                      <h3>Related Infrastructure Dependencies</h3>
                    </header>

                    <div className="vi-table-wrap">
                      <table className="vi-table vi-dep-infra-table">
                        <thead>
                          <tr>
                            <th>Component</th>
                            <th>Description</th>
                            <th>Owner</th>
                            <th>Impact</th>
                          </tr>
                        </thead>
                        <tbody>
                          {impactData.dependenciesTab.infrastructureTable.map(
                            row => (
                              <tr key={row.id}>
                                <td className="vi-td-app">
                                  <strong>
                                    {row.component || row.category}
                                  </strong>
                                </td>
                                <td className="vi-td-desc">
                                  {row.description || row.details}
                                </td>
                                <td className="vi-td-owner">
                                  {row.owner || impactData.itsTeam}
                                </td>
                                <td className="vi-td-impact">
                                  {row.impact || "See runbook details"}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* ROW 4: 2x2 DEPENDENCY & IMPACT DETAILS GRID */}
                  <div className="vi-quad-grid">
                    {/* 1. Upstream Dependencies */}
                    <section className="vi-card vi-quad-card">
                      <header className="vi-card-header">
                        <span
                          className="vi-card-icon icon-blue-soft"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 3h5v5" />
                            <path d="M4 20 21 3" />
                            <path d="M21 16v5h-5" />
                            <path d="M15 15l6 6" />
                            <path d="M4 4l5 5" />
                          </svg>
                        </span>
                        <h3>
                          Upstream Dependencies (to {impactData.name})
                        </h3>
                      </header>
                      <ul className="vi-bullet-list">
                        {impactData.upstreamDependencies.map((item, idx) => (
                          <li key={idx}>
                            {typeof item === "string"
                              ? item
                              : `${item.name}${
                                  item.description
                                    ? ` - ${item.description}`
                                    : ""
                                }`}
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* 2. Downstream Consumers */}
                    <section className="vi-card vi-quad-card">
                      <header className="vi-card-header">
                        <span
                          className="vi-card-icon icon-green-soft"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m17 2 4 4-4 4" />
                            <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
                            <path d="m7 22-4-4 4-4" />
                            <path d="M21 13v1a4 4 0 0 1-4 4H3" />
                          </svg>
                        </span>
                        <h3>
                          Downstream Consumers (from {impactData.name})
                        </h3>
                      </header>
                      <ul className="vi-bullet-list">
                        {impactData.downstreamConsumers.map((item, idx) => (
                          <li key={idx}>
                            {typeof item === "string"
                              ? item
                              : `${item.name}${
                                  item.description
                                    ? ` - ${item.description}`
                                    : ""
                                }`}
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* 3. Typical Business Impact */}
                    <section className="vi-card vi-quad-card">
                      <header className="vi-card-header">
                        <span
                          className="vi-card-icon icon-blue-soft"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="20" x2="18" y2="10" />
                            <line x1="12" y1="20" x2="12" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="14" />
                          </svg>
                        </span>
                        <h3>Typical Business Impact</h3>
                      </header>
                      <ul className="vi-bullet-list">
                        {impactData.typicalBusinessImpact.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    {/* 4. Known Workarounds */}
                    <section className="vi-card vi-quad-card">
                      <header className="vi-card-header">
                        <span
                          className="vi-card-icon icon-blue-soft"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                          </svg>
                        </span>
                        <h3>Known Workarounds</h3>
                      </header>
                      <ul className="vi-bullet-list">
                        {impactData.knownWorkarounds.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              ) : (
              /* TWO-COLUMN BODY LAYOUT */
              <div className="vi-content-grid vi-animate-tab" key={impactTab}>
                {/* LEFT MAIN COLUMN */}
                <div className="vi-main-col">
                  {/* AMBER WARNING CALLOUT */}
                  {(impactTab === "overview" || impactTab === "systems") && (
                    <CriticalityAlert
                      title={
                        impactData.impactCallout.title ||
                        (impactData.impactCallout.level
                          ? `${impactData.impactCallout.level} Operational Impact`
                          : `Operational Impact if ${impactData.name} is Unavailable`)
                      }
                      message={
                        impactData.impactCallout.message ||
                        impactData.impactCallout.description
                      }
                    />
                  )}

                  {/* APPLICATIONS & SYSTEMS IMPACTED TABLE CARD */}
                  {(impactTab === "overview" || impactTab === "systems") && (
                    <ImpactTable
                      systemName={impactData.name}
                      systems={filteredImpactedSystems}
                      defaultOwner={impactData.itsTeam}
                    />
                  )}

                  {impactTab === "overview" && (
                    <div className="vi-quad-grid">
                      <section className="vi-card vi-quad-card">
                        <header className="vi-card-header">
                          <span
                            className="vi-card-icon icon-blue-soft"
                            aria-hidden="true"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="18" y1="20" x2="18" y2="10" />
                              <line x1="12" y1="20" x2="12" y2="4" />
                              <line x1="6" y1="20" x2="6" y2="14" />
                            </svg>
                          </span>
                          <h3>Typical Business Impact</h3>
                        </header>
                        <ul className="vi-bullet-list">
                          {impactData.typicalBusinessImpact.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </section>

                      <section className="vi-card vi-quad-card">
                        <header className="vi-card-header">
                          <span
                            className="vi-card-icon icon-blue-soft"
                            aria-hidden="true"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>
                          </span>
                          <h3>Known Workarounds</h3>
                        </header>
                        <ul className="vi-bullet-list">
                          {impactData.knownWorkarounds.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  )}

                  {impactTab === "overview" &&
                    Array.isArray(impactData.validationChecklist) &&
                    impactData.validationChecklist.length > 0 && (
                      <section
                        className="vi-card vi-systems-card"
                        aria-label="Incident Validation Checklist"
                      >
                        <header className="vi-card-header">
                          <span
                            className="vi-card-icon icon-blue"
                            aria-hidden="true"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9 11l3 3L22 4" />
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                          </span>
                          <h3>
                            Incident Validation Checklist (Time Limit: 15 Minutes)
                          </h3>
                        </header>
                        <div className="vi-card-body">
                          <ul className="vi-bullet-list">
                            {impactData.validationChecklist.map((step, idx) => (
                              <li key={idx}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      </section>
                    )}

                  {/* CONTACTS TAB VIEW */}
                  {impactTab === "contacts" && (
                    <section
                      className="vi-card vi-systems-card"
                      aria-label="Contacts and Escalation Details"
                    >
                      <header className="vi-card-header">
                        <span
                          className="vi-card-icon icon-blue"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </span>
                        <h3>Contacts, Escalation &amp; SLAs</h3>
                      </header>

                      <div className="vi-table-wrap">
                        <table className="vi-table vi-contacts-table">
                          <colgroup>
                            <col style={{ width: "22%" }} />
                            <col style={{ width: "22%" }} />
                            <col style={{ width: "28%" }} />
                            <col style={{ width: "28%" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>Contact Role</th>
                              <th>Name / Team</th>
                              <th>Phone / Email</th>
                              <th>Hours / Escalation Scope</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="vi-td-app">
                                <strong>Vendor Support Desk</strong>
                              </td>
                              <td className="vi-td-func">
                                {impactData.vendorContacts.accountManager ||
                                  impactData.name}
                              </td>
                              <td className="vi-td-desc">
                                <div>
                                  <strong>Phone:</strong>{" "}
                                  {impactData.vendorContacts.supportPhone}
                                </div>
                                <div>
                                  <strong>Email:</strong>{" "}
                                  {impactData.vendorContacts.supportEmail}
                                </div>
                              </td>
                              <td className="vi-td-impact">
                                {impactData.vendorContacts.supportHours ||
                                  impactData.vendorContacts.technicalSupport ||
                                  "Follow vendor support schedule"}
                              </td>
                            </tr>

                            {(impactData.vendorContacts.secondaryEmail ||
                              impactData.vendorContacts
                                .namedEscalationContact) && (
                              <tr>
                                <td className="vi-td-app">
                                  <strong>
                                    Secondary / Escalation Contact
                                  </strong>
                                </td>
                                <td className="vi-td-func">
                                  {impactData.vendorContacts
                                    .namedEscalationContact || impactData.name}
                                </td>
                                <td className="vi-td-desc">
                                  {impactData.vendorContacts.secondaryEmail ||
                                    impactData.vendorContacts.supportPhone}
                                </td>
                                <td className="vi-td-impact">
                                  {impactData.vendorContacts
                                    .secondaryEmailNote ||
                                    "Vendor Escalation Contact"}
                                </td>
                              </tr>
                            )}

                            <tr>
                              <td className="vi-td-app">
                                <strong>Primary Alaska ITS Team</strong>
                              </td>
                              <td className="vi-td-func">
                                {impactData.internalContacts.itsTeam}
                              </td>
                              <td className="vi-td-desc">
                                {impactData.internalContacts.onCallSupport ||
                                  impactData.internalContacts
                                    .systemAdministration ||
                                  "Engage via ITS On-Call"}
                              </td>
                              <td className="vi-td-impact">
                                {impactData.internalContacts.itsTeamNote ||
                                  impactData.internalContacts.businessOwner}
                              </td>
                            </tr>

                            <tr>
                              <td className="vi-td-app">
                                <strong>AAG ITS POC / App Owner</strong>
                              </td>
                              <td className="vi-td-func">
                                {impactData.internalContacts.applicationOwner}
                              </td>
                              <td className="vi-td-desc">
                                {impactData.internalContacts
                                  .systemAdministration ||
                                  impactData.internalContacts.itsTeam}
                              </td>
                              <td className="vi-td-impact">
                                {impactData.internalContacts.passwordSupport
                                  ? `Password Support: ${impactData.internalContacts.passwordSupport}`
                                  : `Business Owner: ${impactData.internalContacts.businessOwner}`}
                              </td>
                            </tr>

                            {Array.isArray(
                              impactData.vendorContacts.responseSlas
                            ) &&
                              impactData.vendorContacts.responseSlas.map(
                                (sla, idx) => (
                                  <tr key={`sla-${idx}`}>
                                    <td className="vi-td-app">
                                      <strong>
                                        {sla.priority ||
                                          sla.label ||
                                          "SLA Target"}
                                      </strong>
                                    </td>
                                    <td className="vi-td-func">
                                      {sla.level || "SLA / Response Target"}
                                    </td>
                                    <td className="vi-td-desc">
                                      {sla.description ||
                                        sla.condition ||
                                        sla.value}
                                    </td>
                                    <td className="vi-td-impact">
                                      <strong>
                                        {sla.target || sla.value}
                                      </strong>
                                    </td>
                                  </tr>
                                )
                              )}
                          </tbody>
                        </table>
                      </div>

                      {Array.isArray(
                        impactData.vendorContacts.communicationGuidelines
                      ) &&
                        impactData.vendorContacts.communicationGuidelines
                          .length > 0 && (
                          <div style={{ marginTop: "14px" }}>
                            <strong
                              style={{
                                display: "block",
                                marginBottom: "6px",
                                fontSize: "13px",
                                color: "#0B192C"
                              }}
                            >
                              Communication &amp; Escalation Guidelines
                            </strong>
                            <ul className="vi-bullet-list">
                              {impactData.vendorContacts.communicationGuidelines.map(
                                (guide, idx) => (
                                  <li key={idx}>{guide}</li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                    </section>
                  )}

                  {/* RELATED DOCUMENTS TAB VIEW */}
                  {impactTab === "documents" && (
                    <section className="vi-card vi-systems-card">
                      <header className="vi-card-header">
                        <span
                          className="vi-card-icon icon-blue"
                          aria-hidden="true"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                        </span>
                        <h3>Related Runbooks &amp; Documentation</h3>
                      </header>
                      <div className="vi-table-wrap">
                        <table className="vi-table vi-docs-table">
                          <colgroup>
                            <col style={{ width: "35%" }} />
                            <col style={{ width: "25%" }} />
                            <col style={{ width: "25%" }} />
                            <col style={{ width: "15%" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>Document Title</th>
                              <th>Type</th>
                              <th>Owner Team</th>
                              <th>Last Updated</th>
                            </tr>
                          </thead>
                          <tbody>
                            {impactData.relatedDocuments.map((doc, idx) => (
                              <tr key={idx}>
                                <td className="vi-td-app">
                                  {doc.url ? (
                                    <a
                                      href={doc.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="vi-kv-link"
                                    >
                                      <strong>{doc.title}</strong>
                                    </a>
                                  ) : (
                                    <strong>{doc.title}</strong>
                                  )}
                                </td>
                                <td className="vi-td-func">{doc.type}</td>
                                <td className="vi-td-desc">{doc.owner}</td>
                                <td className="vi-td-impact">{doc.updated}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  )}
                </div>

                {/* RIGHT SIDEBAR COLUMN */}
                <aside
                  className="vi-side-col"
                  aria-label="Contacts and Checklist"
                >
                  {/* 1. VENDOR CONTACTS */}
                  <section className="vi-card vi-side-card">
                    <header className="vi-card-header">
                      <span
                        className="vi-card-icon icon-blue"
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </span>
                      <h3>Vendor Contacts</h3>
                    </header>

                    <div className="vi-kv-list">
                      <ContactRow
                        label={
                          impactData.vendorContacts.supportEmailNote
                            ? `Support Email (${impactData.vendorContacts.supportEmailNote})`
                            : "Support Email"
                        }
                        value={impactData.vendorContacts.supportEmail}
                        note={impactData.vendorContacts.supportEmailNote}
                        isEmail={String(
                          impactData.vendorContacts.supportEmail || ""
                        ).includes("@")}
                        iconType="email"
                        copyField="email"
                        copiedField={copiedField}
                        onCopy={handleCopyText}
                      />

                      {impactData.vendorContacts.secondaryEmail && (
                        <ContactRow
                          label={
                            impactData.vendorContacts.secondaryEmailNote
                              ? `Runway / NOTAM Email (${impactData.vendorContacts.secondaryEmailNote})`
                              : "Runway / NOTAM Email"
                          }
                          value={impactData.vendorContacts.secondaryEmail}
                          note={impactData.vendorContacts.secondaryEmailNote}
                          isEmail={true}
                          iconType="secondaryEmail"
                          copyField="secondaryEmail"
                          copiedField={copiedField}
                          onCopy={handleCopyText}
                        />
                      )}

                      <ContactRow
                        label="Support Phone"
                        value={impactData.vendorContacts.supportPhone}
                        iconType="phone"
                        copyField="phone"
                        copiedField={copiedField}
                        onCopy={handleCopyText}
                      />

                      {impactData.vendorContacts.technicalSupport && (
                        <ContactRow
                          label="Technical Support"
                          value={impactData.vendorContacts.technicalSupport}
                          isMuted={true}
                          iconType="technical"
                          copyField="technicalSupport"
                          copiedField={copiedField}
                          onCopy={handleCopyText}
                        />
                      )}

                      {impactData.vendorContacts.supportHours && (
                        <ContactRow
                          label="Support Service Hours"
                          value={impactData.vendorContacts.supportHours}
                          isMultiline={true}
                          iconType="hours"
                        />
                      )}
                    </div>
                  </section>

                  {/* 2. ALASKA INTERNAL CONTACTS */}
                  <section className="vi-card vi-side-card">
                    <header className="vi-card-header">
                      <span
                        className="vi-card-icon icon-blue-solid"
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
                        </svg>
                      </span>
                      <h3>Alaska Internal Contacts</h3>
                    </header>

                    <div className="vi-kv-list">
                      <ContactRow
                        label="ITS Team"
                        value={impactData.internalContacts.itsTeam}
                        iconType="team"
                      />

                      {impactData.internalContacts.itsTeamNote && (
                        <ContactRow
                          label="ITS Team Scope"
                          value={impactData.internalContacts.itsTeamNote}
                          isMultiline={true}
                          iconType="scope"
                        />
                      )}

                      <ContactRow
                        label="Application Owner"
                        value={impactData.internalContacts.applicationOwner}
                        isMuted={String(
                          impactData.internalContacts.applicationOwner || ""
                        ).startsWith("(")}
                        iconType="owner"
                      />

                      {impactData.internalContacts.systemAdministration && (
                        <ContactRow
                          label="System Administration"
                          value={impactData.internalContacts.systemAdministration}
                          isMultiline={true}
                          iconType="admin"
                        />
                      )}

                      <ContactRow
                        label="Business Owner"
                        value={impactData.internalContacts.businessOwner}
                        iconType="business"
                      />

                      {impactData.internalContacts.passwordSupport && (
                        <ContactRow
                          label="Password Support"
                          value={impactData.internalContacts.passwordSupport}
                          isMuted={true}
                          iconType="password"
                        />
                      )}

                      {impactData.internalContacts.everbridgeContacts && (
                        <ContactRow
                          label="Everbridge Focal Contacts"
                          value={impactData.internalContacts.everbridgeContacts}
                          isMultiline={true}
                          iconType="everbridge"
                        />
                      )}
                    </div>
                  </section>

                  {/* 3. QUICK ACTIONS */}
                  <section className="vi-card vi-quick-actions-card">
                    <header className="vi-card-header">
                      <span
                        className="vi-card-icon icon-blue-bolt"
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </span>
                      <h3>Quick Actions</h3>
                    </header>

                    <div className="vi-qa-body">
                      <button
                        type="button"
                        className="vi-qa-primary-btn"
                        onClick={() =>
                          window.open(
                            "https://alaskaair.service-now.com/",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        <span>Create ServiceNow Incident</span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </button>

                      <div className="vi-qa-secondary-row">
                        <button
                          type="button"
                          className="vi-qa-sec-btn"
                          onClick={handleCopyImpactSummary}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <rect
                              x="9"
                              y="9"
                              width="13"
                              height="13"
                              rx="2"
                              ry="2"
                            />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                          <span>
                            {copiedField === "summary"
                              ? "Copied Summary!"
                              : "Copy Impact Summary"}
                          </span>
                        </button>

                        <button
                          type="button"
                          className="vi-qa-sec-btn"
                          onClick={() => setImpactTab("documents")}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                          </svg>
                          <span>View Runbook / Playbook</span>
                        </button>
                      </div>
                    </div>
                  </section>
                </aside>
              </div>
              )}
            </div>
        )}
      </main>

      {/* VENDOR DETAIL MODAL */}
      <div
        id="vendorModal"
        className={`vendor-modal${currentVendor ? " active" : ""}`}
        aria-hidden={currentVendor ? "false" : "true"}
        onClick={event => {
          if (event.target.id === "vendorModal") {
            closeVendorModal();
          }
        }}
      >
        <div className="vendor-modal-window">
          <header className="vendor-modal-header">
            <div
              id="vendorModalIcon"
              className={`vendor-modal-icon${
                modalLogo && modalLogo.isCustom ? " has-custom-logo" : ""
              }`}
            >
              {currentVendor ? (
                modalLogo && modalLogo.isCustom ? (
                  <img
                    className="vendor-modal-logo"
                    src={modalLogo.src}
                    alt={modalLogo.alt}
                  />
                ) : (
                  renderModalFallbackIcon(currentVendor, vendors)
                )
              ) : (
                "V"
              )}
            </div>

            <div className="vendor-modal-heading">
              <div className="vendor-modal-eyebrow">VENDOR DETAILS</div>

              <div className="vendor-modal-title-row">
                <h2 id="vendorModalTitle">
                  {currentVendor
                    ? currentVendor.displayName || "Vendor"
                    : "Vendor"}
                </h2>

                <span id="vendorModalCompany" className="vendor-company-pill">
                  {currentVendor
                    ? currentVendor.company || currentVendor.vendor || ""
                    : "Company"}
                </span>
              </div>

              <p id="vendorModalSubtitle">
                {currentVendor
                  ? currentVendor.displaySubtitle ||
                    currentVendor.category ||
                    "Production Operations vendor information"
                  : "Production Operations vendor information"}
              </p>
            </div>

            <button
              id="vendorModalClose"
              className="vendor-modal-close"
              type="button"
              aria-label="Close"
              onClick={closeVendorModal}
            >
              ×
            </button>
          </header>

          <div className="vendor-modal-tabs">
            {[
              { key: "overview", label: "Overview" },
              { key: "contacts", label: "Contacts" },
              { key: "escalation", label: "Escalation" },
              { key: "records", label: "Source Record" }
            ].map(tab => (
              <button
                key={tab.key}
                type="button"
                className={`vendor-modal-tab${
                  activeModalTab === tab.key ? " active" : ""
                }`}
                data-tab={tab.key}
                onClick={() => setActiveModalTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="vendor-modal-body">
            <section
              className={`vendor-tab-panel${
                activeModalTab === "overview" ? " active" : ""
              }`}
              data-panel="overview"
            >
              <div className="vendor-detail-grid">
                <div className="vendor-detail-card">
                  <h3>System / Application</h3>
                  <div id="detailSystem">
                    {currentVendor
                      ? renderMultilineValue(
                          currentVendor.systemName || currentVendor.displayName
                        )
                      : null}
                  </div>
                </div>

                <div className="vendor-detail-card">
                  <h3>All Supported Systems</h3>
                  <div id="detailSupportedSystems">
                    {currentVendor
                      ? renderMultilineValue(
                          supportedSystemsForVendor(currentVendor).join("\n")
                        )
                      : null}
                  </div>
                </div>

                <div className="vendor-detail-card">
                  <h3>Category</h3>
                  <div id="detailCategory">
                    {currentVendor
                      ? renderMultilineValue(
                          currentVendor.category ||
                            currentVendor.displaySubtitle ||
                            "Operations Partner"
                        )
                      : null}
                  </div>
                </div>

                <div className="vendor-detail-card">
                  <h3>Vendor Company</h3>
                  <div id="detailCompany">
                    {currentVendor
                      ? renderMultilineValue(
                          currentVendor.company || currentVendor.vendor
                        )
                      : null}
                  </div>
                </div>

                <div className="vendor-detail-card">
                  <h3>AAG ITS Team</h3>
                  <div id="detailTeam">
                    {currentVendor
                      ? renderMultilineValue(currentVendor.aagItsTeam)
                      : null}
                  </div>
                </div>

                <div className="vendor-detail-card">
                  <h3>Status / Support Schedule</h3>
                  <div id="detailStatusSupport">
                    {currentVendor
                      ? renderMultilineValue(
                          [
                            currentVendor.status ||
                              vendorStatusInfo(currentVendor).label,
                            currentVendor.supportAvailability ||
                              currentVendor.supportSchedule ||
                              currentVendor.supportHours ||
                              (isVendor24x7(currentVendor)
                                ? "24×7 Support Available"
                                : "")
                          ]
                            .filter(Boolean)
                            .join(" · ") || "Active"
                        )
                      : null}
                  </div>
                </div>
              </div>
            </section>

            <section
              className={`vendor-tab-panel${
                activeModalTab === "contacts" ? " active" : ""
              }`}
              data-panel="contacts"
            >
              <div className="vendor-contact-grid">
                <div className="vendor-contact-card">
                  <span>VENDOR POC</span>
                  <strong id="detailVendorPoc">
                    {currentVendor
                      ? renderMultilineValue(currentVendor.vendorPoc)
                      : "Not specified"}
                  </strong>
                </div>

                <div className="vendor-contact-card">
                  <span>AAG ITS POC</span>
                  <strong id="detailAagPoc">
                    {currentVendor
                      ? renderMultilineValue(currentVendor.aagItsPoc)
                      : "Not specified"}
                  </strong>
                </div>

                <div className="vendor-contact-card">
                  <span>PHONE</span>
                  <strong id="detailPhone">
                    {currentVendor
                      ? renderMultilineValue(currentVendor.phone)
                      : "Not specified"}
                  </strong>
                </div>

                <div className="vendor-contact-card">
                  <span>EMAIL</span>
                  <strong id="detailEmail">
                    {currentVendor
                      ? renderMultilineValue(currentVendor.email)
                      : "Not specified"}
                  </strong>
                </div>
              </div>
            </section>

            <section
              className={`vendor-tab-panel${
                activeModalTab === "escalation" ? " active" : ""
              }`}
              data-panel="escalation"
            >
              <div className="vendor-detail-card vendor-escalation-card">
                <h3>ProdOps Escalation Process</h3>
                <pre id="detailEscalation">
                  {currentVendor
                    ? renderMultilineValue(currentVendor.escalation)
                    : "Not specified"}
                </pre>
              </div>
            </section>

            <section
              className={`vendor-tab-panel${
                activeModalTab === "records" ? " active" : ""
              }`}
              data-panel="records"
            >
              <div className="vendor-detail-grid">
                <div className="vendor-detail-card">
                  <h3>Source Excel Row</h3>
                  <div id="detailSourceRow">
                    {currentVendor
                      ? renderMultilineValue(currentVendor.sourceRow)
                      : "Not specified"}
                  </div>
                </div>

                <div className="vendor-detail-card">
                  <h3>Info Updated Date</h3>
                  <div id="detailUpdatedDate">
                    {currentVendor
                      ? renderMultilineValue(currentVendor.updatedDate)
                      : "Not specified"}
                  </div>
                </div>

                <div className="vendor-detail-card">
                  <h3>Info Updated By</h3>
                  <div id="detailUpdatedBy">
                    {currentVendor
                      ? renderMultilineValue(currentVendor.updatedBy)
                      : "Not specified"}
                  </div>
                </div>

                <div className="vendor-detail-card">
                  <h3>Info Approved Date</h3>
                  <div id="detailApprovedDate">
                    {currentVendor
                      ? renderMultilineValue(currentVendor.approvedDate)
                      : "Not specified"}
                  </div>
                </div>

                <div className="vendor-detail-card">
                  <h3>Info Approved By</h3>
                  <div id="detailApprovedBy">
                    {currentVendor
                      ? renderMultilineValue(currentVendor.approvedBy)
                      : "Not specified"}
                  </div>
                </div>
              </div>

              <div className="source-note">
                This vendor directory is generated from the{" "}
                <strong>ITS Application Vendors</strong> worksheet supplied for
                Production Operations.
              </div>
            </section>
          </div>

          <footer className="vendor-modal-footer">
            <button
              id="vendorEmailButton"
              className="vendor-action primary"
              type="button"
              onClick={handleEmailVendor}
            >
              ✉ Send Email
            </button>

            <button
              id="vendorCallButton"
              className="vendor-action secondary"
              type="button"
              onClick={handleCallVendor}
            >
              ☎ Call Vendor
            </button>

            <button
              id="vendorFavoriteButton"
              className={`vendor-action favorite${
                isCurrentFavorite ? " active" : ""
              }`}
              type="button"
              onClick={handleToggleCurrentFavorite}
            >
              {isCurrentFavorite
                ? "★ Remove from Favorites"
                : "☆ Add to Favorites"}
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
