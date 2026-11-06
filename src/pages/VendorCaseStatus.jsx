import React, { useState, useEffect, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";
import { useMasterData } from "../context/MasterDataContext";
import {
  AUTHORIZED_ADMINS,
  getAdminSession,
  authenticateAdminSession,
  getVendorCaseStatusRecords,
  calculateVendorCaseStatusSummary,
  getVendorCaseStatusFilterOptions,
  filterVendorCaseStatusRecords,
  saveVendorPortalConfiguration,
  isValidPortalUrl
} from "../services/vendorCaseStatusService";

const INITIAL_FILTERS = {
  search: "",
  vendor: "",
  system: "",
  category: "",
  portalStatus: ""
};

const AVATAR_PALETTES = [
  { bg: "#0050c8", fg: "#ffffff" },
  { bg: "#1e1b8b", fg: "#ffffff" },
  { bg: "#034687", fg: "#ffffff" },
  { bg: "#0d5c75", fg: "#ffffff" },
  { bg: "#1d4ed8", fg: "#ffffff" },
  { bg: "#0f766e", fg: "#ffffff" },
  { bg: "#4338ca", fg: "#ffffff" },
  { bg: "#0369a1", fg: "#ffffff" }
];

function getVendorMonogram(name) {
  const cleaned = String(name || "VN")
    .replace(/[^a-zA-Z0-9 ]+/g, " ")
    .trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return cleaned.slice(0, 2).toUpperCase() || "VN";
}

function getAvatarPalette(seed = "") {
  let hash = 0;
  const text = String(seed);
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return AVATAR_PALETTES[hash % AVATAR_PALETTES.length];
}

const CATEGORY_TONES = ["blue", "lavender", "green", "amber"];

function getCategoryTone(category = "") {
  const normalized = String(category || "").toLowerCase();
  if (
    normalized.includes("flight") ||
    normalized.includes("dispatch") ||
    normalized.includes("crew") ||
    normalized.includes("weather")
  ) {
    return "blue";
  }
  if (
    normalized.includes("guest") ||
    normalized.includes("loyalty") ||
    normalized.includes("commerce") ||
    normalized.includes("passenger") ||
    normalized.includes("reservation")
  ) {
    return "lavender";
  }
  if (
    normalized.includes("airport") ||
    normalized.includes("ramp") ||
    normalized.includes("cargo") ||
    normalized.includes("baggage") ||
    normalized.includes("maintenance")
  ) {
    return "green";
  }
  if (
    normalized.includes("corporate") ||
    normalized.includes("finance") ||
    normalized.includes("hr") ||
    normalized.includes("security") ||
    normalized.includes("network")
  ) {
    return "amber";
  }
  let hash = 0;
  for (let i = 0; i < normalized.length; i += 1) {
    hash = (hash * 31 + normalized.charCodeAt(i)) >>> 0;
  }
  return CATEGORY_TONES[hash % CATEGORY_TONES.length];
}

function VendorLogoBadge({ logoUrl, vendorName }) {
  const [imgFailed, setImgFailed] = useState(false);
  const monogram = getVendorMonogram(vendorName);

  if (logoUrl && !imgFailed) {
    return (
      <div className="vcs-vendor-logo-box">
        <img
          src={logoUrl}
          alt={`${vendorName} logo`}
          className="vcs-vendor-logo-img"
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className="vcs-vendor-logo-fallback" aria-hidden="true">
      {monogram}
    </div>
  );
}

export default function VendorCaseStatus() {
  const { masterData } = useMasterData();
  const [searchParams] = useSearchParams();
  const [records, setRecords] = useState([]);
  const [filters, setFilters] = useState(() => ({
    ...INITIAL_FILTERS,
    search: searchParams.get("search") || ""
  }));
  const [sortConfig, setSortConfig] = useState({ key: "vendorName", direction: "asc" });
  const [adminSession, setAdminSession] = useState(() => getAdminSession());
  const [toastMessage, setToastMessage] = useState(null);

  // Admin Login Modal state
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [pendingVendorAfterLogin, setPendingVendorAfterLogin] = useState(null);
  const [loginEmail, setLoginEmail] = useState(AUTHORIZED_ADMINS[0]);
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Admin Portal Configuration Modal state
  const [editingRecord, setEditingRecord] = useState(null);
  const [formPortalUrl, setFormPortalUrl] = useState("");
  const [formPortalStatus, setFormPortalStatus] = useState("Not Configured");
  const [formLastVerifiedDate, setFormLastVerifiedDate] = useState("");
  const [formPortalNotes, setFormPortalNotes] = useState("");
  const [formAssociatedApps, setFormAssociatedApps] = useState([]);
  const [customAppInput, setCustomAppInput] = useState("");
  const [formError, setFormError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const loadRecords = useCallback(() => {
    const loaded = getVendorCaseStatusRecords(masterData);
    setRecords(loaded);
  }, [masterData]);

  useEffect(() => {
    loadRecords();
    const handleStorage = () => {
      loadRecords();
      setAdminSession(getAdminSession());
    };
    window.addEventListener("storage", handleStorage);
    window.addEventListener("masterdata:updated", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("masterdata:updated", handleStorage);
    };
  }, [loadRecords]);

  useEffect(() => {
    const clearAdminAuth = () => {
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("productionOperationsAdminAuthenticated");
        localStorage.removeItem("productionOperationsAdminEmail");
      }
    };
    window.addEventListener("pagehide", clearAdminAuth);
    window.addEventListener("beforeunload", clearAdminAuth);
    return () => {
      window.removeEventListener("pagehide", clearAdminAuth);
      window.removeEventListener("beforeunload", clearAdminAuth);
      clearAdminAuth();
    };
  }, []);

  const showToast = useCallback((text, type = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(prev => (prev && prev.text === text ? null : prev));
    }, 4000);
  }, []);

  const summary = useMemo(
    () => calculateVendorCaseStatusSummary(records),
    [records]
  );

  const filterOptions = useMemo(
    () => getVendorCaseStatusFilterOptions(records, masterData),
    [records, masterData]
  );

  const filteredRecords = useMemo(
    () => filterVendorCaseStatusRecords(records, filters),
    [records, filters]
  );

  const sortedRecords = useMemo(() => {
    const sortKey = sortConfig.key || "vendorName";
    const list = [...filteredRecords];
    const dir = sortConfig.direction === "desc" ? -1 : 1;
    list.sort((a, b) => {
      const valA = String(a[sortKey] || "");
      const valB = String(b[sortKey] || "");
      const primaryCmp = valA.localeCompare(valB, undefined, { sensitivity: "base" }) * dir;
      if (primaryCmp !== 0) return primaryCmp;
      return String(a.primarySystem || "").localeCompare(
        String(b.primarySystem || ""),
        undefined,
        { sensitivity: "base" }
      );
    });
    return list;
  }, [filteredRecords, sortConfig]);

  const configuredPortalRecords = useMemo(
    () => records.filter(r => r.isConfigured && r.portalUrl),
    [records]
  );

  const selectedPortalLabel = useMemo(() => {
    const val = filters.portalStatus;
    if (!val) return "All Vendor Portals";
    if (val === "Configured") return "Configured Portals";
    if (val === "Verified") return "Verified Portals";
    if (val === "Not Configured") return "Portal Not Configured";
    if (val.startsWith("url:")) {
      const url = val.slice(4);
      const match = configuredPortalRecords.find(r => r.portalUrl === url);
      return match ? `${match.vendorName} (${match.primarySystem})` : url;
    }
    if (val.startsWith("vendor:")) {
      return val.slice(7);
    }
    return val;
  }, [filters.portalStatus, configuredPortalRecords]);

  const handleSort = columnKey => {
    setSortConfig(prev => {
      if (prev.key !== columnKey) {
        return { key: columnKey, direction: "asc" };
      }
      if (prev.direction === "asc") {
        return { key: columnKey, direction: "desc" };
      }
      return { key: "vendorName", direction: "asc" };
    });
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  const openEditorForRecord = useCallback(record => {
    setEditingRecord(record);
    setFormPortalUrl(record.portalUrl || "");
    setFormPortalStatus(
      record.isVerified
        ? "Verified"
        : record.isConfigured
        ? "Configured"
        : "Not Configured"
    );
    setFormLastVerifiedDate(record.lastVerifiedDate || "");
    setFormPortalNotes(record.portalNotes || "");
    setFormAssociatedApps(
      Array.isArray(record.associatedApplications)
        ? [...record.associatedApplications]
        : []
    );
    setCustomAppInput("");
    setFormError("");
  }, []);

  const handleEditRecord = record => {
    const session = getAdminSession();
    setAdminSession(session);
    if (session.isAuthorizedAdmin) {
      openEditorForRecord(record);
      return;
    }
    setPendingVendorAfterLogin(record);
    setLoginError("");
    setLoginModalOpen(true);
  };

  const handleAdminSignIn = e => {
    e.preventDefault();
    const result = authenticateAdminSession(loginEmail, loginPassword);
    if (!result.ok) {
      setLoginError(result.error);
      return;
    }
    const updatedSession = getAdminSession();
    setAdminSession(updatedSession);
    setLoginModalOpen(false);
    setLoginPassword("");
    setLoginError("");
    showToast(`Signed in as ${result.email}`);
    if (pendingVendorAfterLogin) {
      const target = pendingVendorAfterLogin;
      setPendingVendorAfterLogin(null);
      openEditorForRecord(target);
    }
  };

  const handleCheckAndVerifyUrl = () => {
    const trimmed = String(formPortalUrl || "").trim();
    if (!isValidPortalUrl(trimmed)) {
      setFormError(
        "Enter a valid http:// or https:// portal URL before verifying the link."
      );
      return;
    }
    window.open(trimmed, "_blank", "noopener,noreferrer");
    const todayIso = new Date().toISOString().slice(0, 10);
    setFormPortalStatus("Verified");
    setFormLastVerifiedDate(todayIso);
    setFormError("");
  };

  const handleToggleAssociatedApp = appName => {
    if (!appName) return;
    setFormAssociatedApps(prev => {
      const exists = prev.some(a => a.toLowerCase() === appName.toLowerCase());
      if (exists) {
        return prev.filter(a => a.toLowerCase() !== appName.toLowerCase());
      }
      return [...prev, appName];
    });
  };

  const handleAddCustomApp = () => {
    const trimmed = String(customAppInput || "").trim();
    if (!trimmed) return;
    setFormAssociatedApps(prev => {
      if (prev.some(a => a.toLowerCase() === trimmed.toLowerCase())) {
        return prev;
      }
      return [...prev, trimmed];
    });
    setCustomAppInput("");
  };

  const handleSavePortalConfig = async e => {
    e.preventDefault();
    if (!editingRecord) return;
    if (!getAdminSession().isAuthorizedAdmin) {
      setFormError("Sign in as an authorized administrator to save portal changes.");
      return;
    }
    setFormError("");

    const trimmedUrl = String(formPortalUrl || "").trim();
    if (trimmedUrl && !isValidPortalUrl(trimmedUrl)) {
      setFormError(
        "Please enter a valid portal URL starting with http:// or https:// (or leave blank for Not Configured)."
      );
      return;
    }

    if (formPortalStatus === "Verified" && !trimmedUrl) {
      setFormError("A valid portal URL is required before marking a portal as Verified.");
      return;
    }

    if (formPortalStatus === "Verified" && !formLastVerifiedDate) {
      setFormError(
        "Please record the Last Verified Date or click 'Check & Verify Link' to confirm the portal was checked."
      );
      return;
    }

    setIsSaving(true);
    try {
      const effectiveStatus = !trimmedUrl
        ? "Not Configured"
        : formPortalStatus === "Verified"
        ? "Verified"
        : "Configured";

      await saveVendorPortalConfiguration(
        editingRecord.id || editingRecord.sourceRow,
        {
          portalUrl: trimmedUrl,
          portalStatus: effectiveStatus,
          lastVerifiedDate:
            effectiveStatus === "Verified"
              ? formLastVerifiedDate || new Date().toISOString().slice(0, 10)
              : formLastVerifiedDate,
          portalNotes: formPortalNotes,
          associatedApplications: formAssociatedApps
        },
        adminSession.email
      );

      loadRecords();
      setEditingRecord(null);
      showToast(
        `Saved portal configuration for ${editingRecord.vendorName} (${editingRecord.primarySystem}).`
      );
    } catch (err) {
      setFormError(err?.message || "Unable to save portal configuration.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="main-content ias-main-content vendors-main" id="vendor-case-status-root">
      <div className="vcs-page-shell">
        {/* Toast Notification */}
        {toastMessage && (
          <div
            className={`vcs-toast ${
              toastMessage.type === "info" ? "vcs-toast-info" : "vcs-toast-success"
            }`}
            role="status"
          >
            <span>{toastMessage.text}</span>
            <button
              type="button"
              className="vcs-toast-close"
              onClick={() => setToastMessage(null)}
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        )}

        {/* Page Header */}
        <header className="vcs-page-header">
          <nav className="vcs-breadcrumb-row" aria-label="Breadcrumb">
            <span className="vcs-breadcrumb-pill">Vendors</span>
            <span className="vcs-breadcrumb-sep">/</span>
            <span className="vcs-breadcrumb-current">Vendor Case Status</span>
          </nav>

          <div className="vcs-header-main">
            <div className="vcs-header-icon-badge" aria-hidden="true">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
              </svg>
            </div>
            <div className="vcs-header-text">
              <h1 className="vcs-page-title">Vendor Case Status</h1>
              <p className="vcs-page-subtitle">
                Centralized directory of vendor support portals, case tracking systems, and operational application relationships across all {summary.totalVendorRecords} vendor records.
              </p>
            </div>
          </div>
        </header>

        {/* Single-Row Toolbar */}
        <section className="vcs-toolbar" aria-label="Search and filter vendor portals">
          <div className="vcs-toolbar-inner">
            {/* Element 1: Vendor Records */}
            <div className="vcs-toolbar-stat">
              <div className="vcs-toolbar-stat-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 12 12 17 22 12" />
                  <polyline points="2 17 12 22 22 17" />
                </svg>
              </div>
              <div className="vcs-toolbar-stat-content">
                <div
                  className="vcs-toolbar-stat-number"
                  data-testid="kpi-total-records"
                >
                  {summary.totalVendorRecords}
                </div>
                <div className="vcs-toolbar-stat-label">Total Vendor Records</div>
              </div>
            </div>

            <div className="vcs-toolbar-divider" aria-hidden="true" />

            {/* Element 2: Search */}
            <div className="vcs-toolbar-search">
              <svg
                className="vcs-toolbar-search-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                className="vcs-toolbar-search-input"
                placeholder="Search vendors, contacts, or portal names..."
                value={filters.search}
                onChange={e => handleFilterChange("search", e.target.value)}
                aria-label="Search vendors, contacts, or portal names"
              />
            </div>

            {/* Element 3: Vendor Portal */}
            <div className="vcs-toolbar-portal-filter">
              <span className="vcs-portal-filter-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </span>
              <div className="vcs-portal-filter-text" aria-hidden="true">
                <span className="vcs-portal-filter-label">Vendor Portal</span>
                <span className="vcs-portal-filter-value">
                  {selectedPortalLabel}
                </span>
              </div>
              <span className="vcs-portal-filter-chevron" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
              <select
                className="vcs-portal-filter-select"
                value={filters.portalStatus}
                onChange={e => handleFilterChange("portalStatus", e.target.value)}
                aria-label="Vendor Portal"
              >
                <option value="">All Vendor Portals</option>
                <option value="Configured">
                  Configured Portals ({summary.configuredPortalLinks})
                </option>
                <option value="Verified">
                  Verified Portals ({summary.verifiedPortalLinks})
                </option>
                <option value="Not Configured">
                  Portal Not Configured ({summary.unconfiguredPortalLinks})
                </option>
                {configuredPortalRecords.length > 0 && (
                  <optgroup label="Configured Portals">
                    {configuredPortalRecords.map(rec => (
                      <option
                        key={`portal-${rec.id}`}
                        value={`url:${rec.portalUrl}`}
                      >
                        {rec.vendorName} — {rec.primarySystem}
                      </option>
                    ))}
                  </optgroup>
                )}
                <optgroup label="Filter by Vendor">
                  {filterOptions.vendors.map(vendor => (
                    <option key={`vendor-${vendor}`} value={`vendor:${vendor}`}>
                      {vendor}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Element 4: Record Count */}
            <div
              className="vcs-toolbar-count-badge"
              role="status"
              aria-live="polite"
              data-testid="vcs-record-count"
            >
              <span className="vcs-count-badge-icon" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="16" rx="3" />
                  <line x1="7" y1="9" x2="7.01" y2="9" />
                  <line x1="11" y1="9" x2="17" y2="9" />
                  <line x1="7" y1="13" x2="7.01" y2="13" />
                  <line x1="11" y1="13" x2="17" y2="13" />
                  <line x1="7" y1="17" x2="7.01" y2="17" />
                  <line x1="11" y1="17" x2="15" y2="17" />
                </svg>
              </span>
              <div className="vcs-count-badge-text">
                <span className="vcs-count-badge-line1">
                  Showing{" "}
                  <strong>
                    {filteredRecords.length} of {summary.totalVendorRecords}
                  </strong>
                </span>{" "}
                <span className="vcs-count-badge-line2">vendor records</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vendor Case Status Table */}
        <section className="vcs-table-card" aria-label="Vendor Case Status Directory Table">
          <div className="vcs-table-responsive">
            <table className="vcs-table">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="vcs-th-sortable vcs-col-vendor"
                    onClick={() => handleSort("vendorName")}
                    aria-sort={
                      sortConfig.key === "vendorName"
                        ? sortConfig.direction === "asc"
                          ? "ascending"
                          : "descending"
                        : "none"
                    }
                  >
                    <span>Vendor Name</span>
                  </th>
                  <th
                    scope="col"
                    className="vcs-th-sortable vcs-col-system"
                    onClick={() => handleSort("primarySystem")}
                    aria-sort={
                      sortConfig.key === "primarySystem"
                        ? sortConfig.direction === "asc"
                          ? "ascending"
                          : "descending"
                        : "none"
                    }
                  >
                    <span>System / Application</span>
                  </th>
                  <th
                    scope="col"
                    className="vcs-th-sortable vcs-col-category"
                    onClick={() => handleSort("category")}
                    aria-sort={
                      sortConfig.key === "category"
                        ? sortConfig.direction === "asc"
                          ? "ascending"
                          : "descending"
                        : "none"
                    }
                  >
                    <span>Category</span>
                  </th>
                  <th scope="col" className="vcs-col-portal-action">
                    <span>Open Portal</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedRecords.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="vcs-empty-cell">
                      <div className="vcs-empty-state">
                        <div className="vcs-empty-title">
                          No matching vendor records found
                        </div>
                        <p className="vcs-empty-text">
                          No vendor records match your current search or filter criteria.
                        </p>
                        <button
                          type="button"
                          className="vcs-btn vcs-btn-primary"
                          onClick={handleClearFilters}
                        >
                          Clear Filters
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  sortedRecords.map(record => (
                    <tr key={record.id} data-vendor-id={record.id}>
                      {/* Column 1: Vendor Name */}
                      <td className="vcs-cell-vendor" data-label="Vendor">
                        <div className="vcs-vendor-identity">
                          <VendorLogoBadge
                            logoUrl={record.logoUrl}
                            vendorName={record.vendorName}
                          />
                          <span
                            className="vcs-vendor-name"
                            title={record.vendorName}
                          >
                            {record.vendorName}
                          </span>
                        </div>
                      </td>

                      {/* Column 2: System / Application */}
                      <td className="vcs-cell-system" data-label="System / Application">
                        <div
                          className="vcs-primary-system"
                          title={record.primarySystem}
                        >
                          {record.primarySystem}
                        </div>
                      </td>

                      {/* Column 3: Category */}
                      <td className="vcs-cell-category" data-label="Category">
                        <span
                          className={`vcs-category-pill vcs-category-pill--${getCategoryTone(
                            record.category
                          )}`}
                          title={record.category}
                        >
                          {record.category}
                        </span>
                      </td>

                      {/* Column 4: Open Portal */}
                      <td className="vcs-cell-portal-action" data-label="Portal Actions">
                        <div className="vcs-portal-actions">
                          {record.isConfigured ? (
                            <a
                              href={record.portalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="vcs-open-portal-btn vcs-open-portal-active"
                              title={`Open ${record.portalUrl} in a new tab`}
                            >
                              <span>Open Portal</span>
                              <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            </a>
                          ) : (
                            <button
                              type="button"
                              className="vcs-open-portal-btn vcs-open-portal-disabled"
                              disabled
                              title="Portal Not Configured"
                            >
                              <span>Open Portal</span>
                              <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            </button>
                          )}
                          <button
                            type="button"
                            className="vcs-btn vcs-btn-outline vcs-edit-portal-btn"
                            onClick={() => handleEditRecord(record)}
                            aria-label={`Edit portal for ${record.vendorName} (${record.primarySystem})`}
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Admin Sign-In Modal (rendered in document.body portal) */}
        {loginModalOpen &&
          typeof document !== "undefined" &&
          createPortal(
            <div
              className="vcs-modal-backdrop"
              onClick={() => setLoginModalOpen(false)}
            >
              <div
                className="vcs-modal-dialog vcs-modal-sm"
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="vcs-login-modal-title"
              >
                <div className="vcs-modal-header">
                  <div>
                    <h2 id="vcs-login-modal-title" className="vcs-modal-title">
                      Admin Authorization Required
                    </h2>
                    <p className="vcs-modal-subtitle">
                      Sign in with your Alaska Airlines administrator account to add or update vendor portal URLs.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="vcs-modal-close"
                    onClick={() => setLoginModalOpen(false)}
                    aria-label="Close modal"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleAdminSignIn} className="vcs-modal-form">
                  {loginError && (
                    <div className="vcs-form-error" role="alert">
                      {loginError}
                    </div>
                  )}

                  <label className="vcs-field-label">
                    <span>Authorized Admin Email</span>
                    <select
                      className="vcs-input"
                      value={loginEmail}
                      onChange={e => setLoginEmail(e.target.value)}
                    >
                      {AUTHORIZED_ADMINS.map(email => (
                        <option key={email} value={email}>
                          {email}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="vcs-field-label">
                    <span>Admin Password</span>
                    <input
                      type="password"
                      className="vcs-input"
                      placeholder="Enter administrator password"
                      value={loginPassword}
                      onChange={e => setLoginPassword(e.target.value)}
                      autoFocus
                    />
                  </label>

                  <div className="vcs-modal-footer">
                    <button
                      type="button"
                      className="vcs-btn vcs-btn-outline"
                      onClick={() => setLoginModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="vcs-btn vcs-btn-primary">
                      Unlock Admin Controls
                    </button>
                  </div>
                </form>
              </div>
            </div>,
            document.body
          )}

        {/* Admin Portal Configuration Modal (rendered in document.body portal) */}
        {editingRecord &&
          typeof document !== "undefined" &&
          createPortal(
            <div
              className="vcs-modal-backdrop"
              onClick={() => setEditingRecord(null)}
            >
              <div
                className="vcs-modal-dialog"
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="vcs-config-modal-title"
              >
                <div className="vcs-modal-header">
                  <div>
                    <div className="vcs-modal-kicker">
                      Vendor Record #{editingRecord.sourceRow} · ID:{" "}
                      {editingRecord.id}
                    </div>
                    <h2 id="vcs-config-modal-title" className="vcs-modal-title">
                      Configure Vendor Portal — {editingRecord.vendorName}
                    </h2>
                    <p className="vcs-modal-subtitle">
                      Primary System: <strong>{editingRecord.primarySystem}</strong>{" "}
                      · Category: <strong>{editingRecord.category}</strong>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="vcs-modal-close"
                    onClick={() => setEditingRecord(null)}
                    aria-label="Close modal"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSavePortalConfig} className="vcs-modal-form">
                  {formError && (
                    <div className="vcs-form-error" role="alert">
                      {formError}
                    </div>
                  )}

                  <div className="vcs-field-group">
                    <label className="vcs-field-label" htmlFor="vcs-portal-url-input">
                      <span>Vendor Support Portal URL</span>
                      <span className="vcs-field-hint">
                        Enter the official vendor support or case portal URL (http:// or https://). Leave empty if not configured.
                      </span>
                    </label>
                    <div className="vcs-url-input-row">
                      <input
                        id="vcs-portal-url-input"
                        type="url"
                        className="vcs-input"
                        placeholder="https://support.vendor-domain.com"
                        value={formPortalUrl}
                        onChange={e => {
                          const val = e.target.value;
                          setFormPortalUrl(val);
                          if (!val.trim()) {
                            setFormPortalStatus("Not Configured");
                          } else if (formPortalStatus === "Not Configured") {
                            setFormPortalStatus("Configured");
                          }
                        }}
                      />
                      <button
                        type="button"
                        className="vcs-btn vcs-btn-secondary vcs-verify-btn"
                        onClick={handleCheckAndVerifyUrl}
                        title="Open URL in a new tab to verify it works and stamp today's verification date"
                      >
                        Check &amp; Verify Link ↗
                      </button>
                    </div>
                  </div>

                  <div className="vcs-form-grid-2">
                    <label className="vcs-field-label">
                      <span>Portal Configuration Status</span>
                      <select
                        className="vcs-input"
                        value={formPortalStatus}
                        onChange={e => {
                          const next = e.target.value;
                          setFormPortalStatus(next);
                          if (next === "Verified" && !formLastVerifiedDate) {
                            setFormLastVerifiedDate(
                              new Date().toISOString().slice(0, 10)
                            );
                          }
                        }}
                      >
                        <option value="Not Configured">Not Configured</option>
                        <option value="Configured">Configured</option>
                        <option value="Verified">
                          Verified (Checked by Admin)
                        </option>
                      </select>
                    </label>

                    <label className="vcs-field-label">
                      <span>Last Verified Date</span>
                      <input
                        type="date"
                        className="vcs-input"
                        value={formLastVerifiedDate}
                        onChange={e => setFormLastVerifiedDate(e.target.value)}
                      />
                    </label>
                  </div>

                  <div className="vcs-field-group">
                    <span className="vcs-field-label-title">
                      Associated Systems / Applications
                    </span>
                    <span className="vcs-field-hint">
                      Primary record system is{" "}
                      <strong>{editingRecord.primarySystem}</strong>. Select additional existing applications supported by this vendor:
                    </span>
                    <div className="vcs-app-checklist">
                      {filterOptions.systems
                        .filter(
                          sys =>
                            sys.toLowerCase() !==
                            editingRecord.primarySystem.toLowerCase()
                        )
                        .slice(0, 18)
                        .map(sysName => {
                          const isChecked =
                            formAssociatedApps.some(
                              a => a.toLowerCase() === sysName.toLowerCase()
                            ) ||
                            editingRecord.relatedSystems.some(
                              a => a.toLowerCase() === sysName.toLowerCase()
                            );
                          return (
                            <label key={sysName} className="vcs-app-check-item">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleToggleAssociatedApp(sysName)}
                              />
                              <span>{sysName}</span>
                            </label>
                          );
                        })}
                    </div>
                    <div className="vcs-custom-app-row">
                      <input
                        type="text"
                        className="vcs-input"
                        placeholder="Associate another existing application name..."
                        value={customAppInput}
                        onChange={e => setCustomAppInput(e.target.value)}
                      />
                      <button
                        type="button"
                        className="vcs-btn vcs-btn-outline"
                        onClick={handleAddCustomApp}
                      >
                        + Associate App
                      </button>
                    </div>
                  </div>

                  <label className="vcs-field-label">
                    <span>Internal Notes (Account IDs, Login Guidance, Escalation Info)</span>
                    <textarea
                      className="vcs-textarea"
                      rows={3}
                      placeholder="Add internal operational notes for accessing this vendor's case portal..."
                      value={formPortalNotes}
                      onChange={e => setFormPortalNotes(e.target.value)}
                    />
                  </label>

                  <div className="vcs-modal-footer">
                    <button
                      type="button"
                      className="vcs-btn vcs-btn-outline"
                      onClick={() => setEditingRecord(null)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="vcs-btn vcs-btn-primary"
                      disabled={isSaving}
                    >
                      {isSaving ? "Saving..." : "Save Portal Configuration"}
                    </button>
                  </div>
                </form>
              </div>
            </div>,
            document.body
          )}
      </div>
    </main>
  );
}

