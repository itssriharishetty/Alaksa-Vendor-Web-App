import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMasterData } from "../context/MasterDataContext";

const HOME_GROUND_STOP_APPS = [
  {
    key: "acars",
    name: "ACARS",
    searchName: "ACARS",
    tileClass: "tile-blue",
    defaultSeverity: "Critical",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 7 9 3 5 7l4 4" />
        <path d="m17 11 4 4-4 4-4-4" />
        <path d="m8 12 4 4 6-6-4-4Z" />
        <path d="m16 8 3-3" />
        <path d="M9 21a6 6 0 0 0-6-6" />
      </svg>
    )
  },
  {
    key: "wam",
    name: "WAM",
    searchName: "WAM",
    tileClass: "tile-red",
    defaultSeverity: "Critical",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    )
  },
  {
    key: "jetplan",
    name: "JetPlan",
    searchName: "JetPlan",
    tileClass: "tile-orange",
    defaultSeverity: "Critical",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    )
  },
  {
    key: "Smart4Aviation (S4A)",
    name: "S4A",
    searchName: "S4A Smart4Aviation",
    tileClass: "tile-pink",
    defaultSeverity: "High",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  },
  {
    key: "jcte",
    name: "JCTE",
    searchName: "JCTE",
    tileClass: "tile-purple",
    defaultSeverity: "Critical",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="m9 10 1.5 1.5L14 8" />
        <path d="M9 15h6" />
      </svg>
    )
  },
  {
    key: "airtrack",
    name: "Airtrak",
    searchName: "Airtrak AirTrack",
    tileClass: "tile-teal",
    defaultSeverity: "High",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    key: "pilot-briefing",
    name: "Pilot Briefing",
    searchName: "Pilot Briefing",
    tileClass: "tile-amber",
    defaultSeverity: "High",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 20c0-3.87 3.13-7 7-7s7 3.13 7 7" />
      </svg>
    )
  },
  {
    key: "aircraft-maintenance",
    name: "Aircraft Maintenance",
    searchName: "Aircraft Maintenance",
    tileClass: "tile-sky",
    defaultSeverity: "High",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    key: "aims",
    name: "AIMS",
    searchName: "AIMS",
    tileClass: "tile-navy",
    defaultSeverity: "Critical",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 19v-5M12 19V9M18 19V5" />
      </svg>
    )
  }
];

const HOME_TOP_CATEGORIES = [
  {
    key: "flight-ops",
    name: "Flight Operations",
    count: "8",
    width: "72%",
    colorClass: "cat-blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    )
  },
  {
    key: "maintenance",
    name: "Maintenance & Engineering",
    count: "6",
    width: "58%",
    colorClass: "cat-green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  },
  {
    key: "airports",
    name: "Airports & Ground Ops",
    count: "7",
    width: "65%",
    colorClass: "cat-amber",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21h16M6 21V5h12v16M9 8h2m2 0h2M9 12h2m2 0h2M9 16h2m2 0h2M4 5l8-3 8 3" />
      </svg>
    )
  },
  {
    key: "it-infra",
    name: "IT & Infrastructure",
    count: "5",
    width: "50%",
    colorClass: "cat-purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    key: "crew",
    name: "Crew & Scheduling",
    count: "4",
    width: "42%",
    colorClass: "cat-rose",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

export default function Home() {
  const { applications, vendors, categories, groundStopKeys } = useMasterData();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");

  const appTarget = Array.isArray(groundStopKeys) && groundStopKeys.length ? groundStopKeys.length : 9;
  const vendorTarget = Array.isArray(vendors) && vendors.length > 0 ? Math.max(vendors.length, 37) : 37;
  const categoryTarget = Array.isArray(categories) && categories.length > 0 ? Math.max(categories.length, 11) : 11;

  const activeSystemsCount = appTarget;
  const connectedVendorsCount = vendorTarget;
  const operationalDomainsCount = categoryTarget;

  useEffect(() => {
    const handleKeyDown = event => {
      if ((event.metaKey || event.ctrlKey) && String(event.key).toLowerCase() === "k") {
        event.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
          searchInputRef.current.select();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const resolvedApps = useMemo(() => {
    return HOME_GROUND_STOP_APPS.map(app => {
      const record =
        applications[app.key] ||
        Object.values(applications).find(item => item && item.id === app.key);

      const severityText = String(
        (record && (record.severity || record.criticality)) || app.defaultSeverity || "High"
      ).trim();

      const lower = severityText.toLowerCase();
      let severityClass = "severity-high";
      if (lower.includes("crit") || lower.includes("sev 1") || lower.includes("sev1")) {
        severityClass = "severity-critical";
      } else if (lower.includes("med") || lower.includes("standard") || lower.includes("low")) {
        severityClass = "severity-standard";
      }

      const fullSearchText = `${app.name} ${app.searchName}`.toLowerCase();
      const visible = !normalizedQuery || fullSearchText.includes(normalizedQuery);

      return {
        ...app,
        severityText,
        severityClass,
        visible
      };
    });
  }, [applications, normalizedQuery]);

  const resolvedCategories = useMemo(() => {
    return HOME_TOP_CATEGORIES.map(cat => {
      const visible = !normalizedQuery || cat.name.toLowerCase().includes(normalizedQuery);
      return {
        ...cat,
        visible
      };
    });
  }, [normalizedQuery]);

  const handleSearchSubmit = event => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    navigate(`/ground-stops?search=${encodeURIComponent(query)}`);
  };

  return (
    <main className="main-content ias-main-content home-dashboard-main">
      {/* 1. TOP HEADER BAR */}
      <header className="home-topbar" aria-label="Dashboard header and global search">
        <div className="home-header-titles">
          <h1 id="home-page-title" className="home-page-heading">
            One Stop Vendor <span className="home-heading-accent">Dashboard</span>
          </h1>
          <p className="home-page-subtitle">ITS Production Operations</p>
        </div>

        <div className="home-topbar-right">
          <form
            className="home-search-wrap"
            id="homeSearchForm"
            role="search"
            onSubmit={handleSearchSubmit}
          >
            <svg
              className="home-search-icon"
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
              ref={searchInputRef}
              id="homeGlobalSearch"
              type="search"
              placeholder="Search systems, vendors, contacts, categories..."
              aria-label="Search systems, vendors, contacts, categories"
              autoComplete="off"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </form>

          <div className="home-topbar-welcome">
            <span className="home-welcome-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
              </svg>
            </span>
            <div className="home-welcome-text">
              <span className="home-welcome-label">Welcome</span>
              <span className="home-welcome-title">Vendor Dashboard</span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. KPI STAT CARDS ROW (3 Cards) */}
      <section className="home-kpi-grid" aria-label="Real-time operational metrics">
        {/* KPI 1: 9 Ground Stop Applications */}
        <Link to="/ground-stops" className="home-kpi-card kpi-green">
          <span className="home-kpi-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <ellipse cx="12" cy="5" rx="8" ry="3" />
              <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
              <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
            </svg>
          </span>
          <div className="home-kpi-body">
            <div
              className="home-kpi-value"
              id="kpi-active-systems"
              data-kpi-target={String(appTarget)}
              data-kpi-initialized="true"
            >
              {activeSystemsCount}
            </div>
            <div className="home-kpi-label">Ground Stop Applications</div>
            <div className="home-kpi-meta meta-green">
              <span className="meta-dot"></span>
              <span>Application Support Information</span>
            </div>
          </div>
          <div className="home-kpi-illustration" aria-hidden="true">
            <svg
              viewBox="0 0 64 52"
              width="62"
              height="50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10"
                y="9"
                width="36"
                height="23"
                rx="2.5"
                fill="#F0FDF4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M5 32h42v1.8a2.2 2.2 0 0 1-2.2 2.2H7.2A2.2 2.2 0 0 1 5 33.8V32Z"
                fill="#FFFFFF"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <g transform="translate(27.5 20.5) rotate(45) scale(0.82)">
                <path
                  d="M-1.3-7.7A1.3 1.3 0 0 1 1.3-7.7V-4.2L8.5 0.2V2L1.3-0.5V4.8L4.2 7V8.4L0 7.1L-4.2 8.4V7L-1.3 4.8V-0.5L-8.5 2V0.2L-1.3-4.2Z"
                  fill="currentColor"
                />
              </g>
              <circle cx="46" cy="34" r="9.8" fill="#F0FDF4" />
              <path
                d="M52.14 32.58L54.11 32.79L54.11 35.21L52.14 35.42L51.34 37.34L52.59 38.88L50.88 40.59L49.34 39.34L47.42 40.14L47.21 42.11L44.79 42.11L44.58 40.14L42.66 39.34L41.12 40.59L39.41 38.88L40.66 37.34L39.86 35.42L37.89 35.21L37.89 32.79L39.86 32.58L40.66 30.66L39.41 29.12L41.12 27.41L42.66 28.66L44.58 27.86L44.79 25.89L47.21 25.89L47.42 27.86L49.34 28.66L50.88 27.41L52.59 29.12L51.34 30.66Z"
                fill="#FFFFFF"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="46" cy="34" r="3.1" fill="#F0FDF4" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </div>
        </Link>

        {/* KPI 2: 37 Connected Vendors */}
        <Link to="/vendors" className="home-kpi-card kpi-blue">
          <span className="home-kpi-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
          <div className="home-kpi-body">
            <div
              className="home-kpi-value"
              id="kpi-vendor-network"
              data-kpi-target={String(vendorTarget)}
              data-kpi-initialized="true"
            >
              {connectedVendorsCount}
            </div>
            <div className="home-kpi-label">Connected Vendors</div>
            <div className="home-kpi-meta meta-blue">
              <span className="meta-dot"></span>
              <span>Vendor Contacts &amp; Portals</span>
            </div>
          </div>
          <div className="home-kpi-illustration" aria-hidden="true">
            <svg
              viewBox="0 0 64 52"
              width="62"
              height="50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 7v5M24 9.5l2.2 4.2M40 9.5l-2.2 4.2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M7 28.5 13.5 17l6.5 3.8-6.5 11.5L7 28.5Z"
                fill="#EFF6FF"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M57 28.5 50.5 17 44 20.8l6.5 11.5 6.5-3.8Z"
                fill="#EFF6FF"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M20 20.8c2.8-1.6 5.6-2.5 8.5-1.2l4 2.2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44 20.8c-2.8-1.5-5.8-2.2-8.6-.8l-6.6 4.2a2.3 2.3 0 0 0-.6 3.2 2.3 2.3 0 0 0 3.2.5l4.6-2.8 8.8 6.4a2.2 2.2 0 0 1 .3 3.1 2.2 2.2 0 0 1-3.1.3l-5.2-3.9"
                fill="#FFFFFF"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M41.8 35.4a2.1 2.1 0 0 1-3 .3l-4.5-3.4M38.4 38.4a2.1 2.1 0 0 1-2.9.3l-3.8-2.9M34.8 41a2 2 0 0 1-2.8.2l-3-2.3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M13.5 32.3l6.2 4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <rect
                x="18.5"
                y="31.2"
                width="4.8"
                height="3.2"
                rx="1.5"
                transform="rotate(-38 18.5 31.2)"
                fill="#EFF6FF"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <rect
                x="21.4"
                y="33.6"
                width="5.2"
                height="3.2"
                rx="1.5"
                transform="rotate(-38 21.4 33.6)"
                fill="#EFF6FF"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <rect
                x="24.5"
                y="35.9"
                width="5"
                height="3.2"
                rx="1.5"
                transform="rotate(-38 24.5 35.9)"
                fill="#EFF6FF"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <rect
                x="27.6"
                y="38.1"
                width="4.4"
                height="3.1"
                rx="1.5"
                transform="rotate(-38 27.6 38.1)"
                fill="#EFF6FF"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </div>
        </Link>

        {/* KPI 3: 11 Operational Domains */}
        <Link to="/categories" className="home-kpi-card kpi-purple">
          <span className="home-kpi-icon" aria-hidden="true">
            <svg
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
          </span>
          <div className="home-kpi-body">
            <div
              className="home-kpi-value"
              id="kpi-operational-domains"
              data-kpi-target={String(categoryTarget)}
              data-kpi-initialized="true"
            >
              {operationalDomainsCount}
            </div>
            <div className="home-kpi-label">Operational Domains</div>
            <div className="home-kpi-meta meta-purple">
              <span className="meta-dot"></span>
              <span>Application Classification</span>
            </div>
          </div>
          <div className="home-kpi-illustration" aria-hidden="true">
            <svg
              viewBox="0 0 64 52"
              width="62"
              height="50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="23"
                y="8"
                width="18"
                height="11"
                rx="2"
                fill="#FAF5FF"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M32 19v8M14 27h36M14 27v6M32 27v6M50 27v6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="33"
                width="10"
                height="10"
                rx="1.8"
                fill="#FAF5FF"
                stroke="currentColor"
                strokeWidth="2"
              />
              <rect
                x="27"
                y="33"
                width="10"
                height="10"
                rx="1.8"
                fill="#FAF5FF"
                stroke="currentColor"
                strokeWidth="2"
              />
              <rect
                x="45"
                y="33"
                width="10"
                height="10"
                rx="1.8"
                fill="#FAF5FF"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </Link>
      </section>

      {/* 4. FULL-WIDTH GROUND STOP APPLICATIONS SECTION (All 9 in One Row) */}
      <section className="home-middle-grid" aria-label="Ground Stop Applications">
        <div className="home-panel home-apps-panel">
          <div className="home-panel-header">
            <div className="home-panel-title-group">
              <span className="home-panel-title-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </span>
              <div>
                <h2 className="home-panel-title">Ground Stop Applications</h2>
                <p className="home-panel-subtitle">Quick access to critical operational systems</p>
              </div>
            </div>
            <Link to="/ground-stops" className="home-panel-link">
              View All Systems →
            </Link>
          </div>

          <div className="home-apps-grid" id="homeAppsContainer">
            {resolvedApps.map(app => (
              <Link
                key={app.key}
                to={`/ground-stops?app=${encodeURIComponent(app.key)}`}
                className="home-app-card"
                data-app-key={app.key}
                data-app-name={app.searchName}
                style={{ display: app.visible ? "" : "none" }}
              >
                <span className={`home-app-tile ${app.tileClass}`} aria-hidden="true">
                  {app.icon}
                </span>
                <strong className="home-app-name">{app.name}</strong>
                <span className={`home-app-status ${app.severityClass}`}>
                  <i aria-hidden="true"></i>
                  <span className="home-app-severity-text">{app.severityText}</span>
                </span>
                <span className="home-app-cta">View Details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM TWO-COLUMN SECTION */}
      <section className="home-bottom-grid" aria-label="Top Vendor Categories and Quick Links">
        {/* LEFT: Top Vendor Categories */}
        <div className="home-panel home-categories-card">
          <div className="home-panel-header compact">
            <div className="home-panel-title-group">
              <span className="home-panel-title-icon navy-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-2 13-3-3 1.4-1.4 1.6 1.6 4.6-4.6L16 9l-6 6z" />
                </svg>
              </span>
              <div>
                <h2 className="home-panel-title">Top Vendor Categories</h2>
                <p className="home-panel-subtitle">Key vendor support across operational functions</p>
              </div>
            </div>
            <Link to="/categories" className="home-panel-link">
              View All →
            </Link>
          </div>

          <div className="home-cat-mini-grid">
            {resolvedCategories.map(cat => (
              <Link
                key={cat.key}
                to="/categories"
                className={`home-cat-mini ${cat.colorClass}`}
                style={{ display: cat.visible ? "" : "none" }}
              >
                <span className="cat-mini-icon" aria-hidden="true">
                  {cat.icon}
                </span>
                <span className="cat-mini-name">{cat.name}</span>
                <strong className="cat-mini-count">{cat.count}</strong>
                <span className="cat-mini-bar" aria-hidden="true">
                  <i style={{ width: cat.width }}></i>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT: Quick Links */}
        <div className="home-panel home-quicklinks-card">
          <div className="home-panel-header compact">
            <div className="home-panel-title-group">
              <span className="home-panel-title-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </span>
              <div>
                <h2 className="home-panel-title">Quick Links</h2>
                <p className="home-panel-subtitle">Essential resources for quick access</p>
              </div>
            </div>
          </div>

          <div className="home-ql-grid">
            <Link to="/ground-stops" className="home-ql-item ql-card-blue">
              <div className="ql-top">
                <span className="ql-icon ql-blue" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <path d="M8 8h8M8 12h8M8 16h5" />
                  </svg>
                </span>
                <strong className="ql-title">Operations Directory</strong>
              </div>
              <p className="ql-desc">Find vendor contacts and support details</p>
              <span className="ql-link">
                View Contacts <span aria-hidden="true">→</span>
              </span>
            </Link>

            <Link to="/vendors" className="home-ql-item ql-card-red">
              <div className="ql-top">
                <span className="ql-icon ql-red" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </span>
                <strong className="ql-title">Escalation Process</strong>
              </div>
              <p className="ql-desc">Step-by-step escalation guidelines</p>
              <span className="ql-link">
                View Steps <span aria-hidden="true">→</span>
              </span>
            </Link>

            <Link to="/categories" className="home-ql-item ql-card-purple">
              <div className="ql-top">
                <span className="ql-icon ql-purple" aria-hidden="true">
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
                <strong className="ql-title">System Categories</strong>
              </div>
              <p className="ql-desc">Browse all systems by category</p>
              <span className="ql-link">
                View All <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
