import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname || "/";

  const isHome = pathname === "/" || pathname === "/home";
  const isGroundStops = pathname.startsWith("/ground-stops");
  const isVendorCaseStatus = pathname.startsWith("/vendor-case-status");
  const isVendors = pathname === "/vendors" || isVendorCaseStatus;
  const isCategories = pathname.startsWith("/categories");
  const isFavorites = pathname.startsWith("/favorites");
  const isAdmin = pathname.startsWith("/admin");

  const [vendorsDropdownOpen, setVendorsDropdownOpen] = useState(isVendors);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isVendors) {
      setVendorsDropdownOpen(true);
    }
  }, [isVendors]);

  // Automatically close the mobile off-canvas drawer upon route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  // Handle Escape key and body scroll lock when mobile navigation is open
  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    document.body.classList.toggle("mobile-nav-locked", mobileMenuOpen);

    const handleKeyDown = event => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("mobile-nav-locked");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleChevronClick = event => {
    event.preventDefault();
    event.stopPropagation();
    setVendorsDropdownOpen(prev => !prev);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Top Navigation Bar (< 768px) */}
      <header className="mobile-nav-topbar" aria-label="Mobile navigation bar">
        <button
          type="button"
          className={`mobile-hamburger-btn${mobileMenuOpen ? " is-active" : ""}`}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen ? "true" : "false"}
          aria-controls="poc-main-sidebar"
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          <span className="mobile-hamburger-box" aria-hidden="true">
            <span className="mobile-hamburger-line" />
            <span className="mobile-hamburger-line" />
            <span className="mobile-hamburger-line" />
          </span>
        </button>

        <Link
          to="/"
          className="mobile-topbar-brand"
          aria-label="Alaska Airlines Production Operations Connect Home"
          onClick={handleNavClick}
        >
          <img
            className="mobile-topbar-logo"
            src="public/alaska-logo-white.svg"
            alt="Alaska Airlines"
          />
          <span className="mobile-topbar-divider" aria-hidden="true" />
          <span className="mobile-topbar-title">Ops Connect</span>
        </Link>

        <Link
          to="/ground-stops"
          className={`mobile-topbar-quick-alert${isGroundStops ? " is-active" : ""}`}
          aria-label="Ground Stop Critical Apps"
          title="Ground Stop Critical Apps"
          onClick={handleNavClick}
        >
          <span className="mobile-topbar-dot" aria-hidden="true" />
          <span>Tier-1</span>
        </Link>
      </header>

      {/* Semi-transparent dark backdrop overlay for mobile off-canvas sidebar */}
      <div
        className={`mobile-sidebar-overlay${mobileMenuOpen ? " is-visible" : ""}`}
        aria-hidden="true"
        onClick={() => setMobileMenuOpen(false)}
      />

      <aside
        id="poc-main-sidebar"
        className={`sidebar ias-sidebar${mobileMenuOpen ? " mobile-open" : ""}`}
        aria-label="Main navigation"
      >
        <div className="sidebar-brand-row">
          <Link
            className="sidebar-brand"
            to="/"
            aria-label="Alaska Airlines home"
            onClick={handleNavClick}
          >
            <img
              className="sidebar-alaska-logo"
              src="public/alaska-logo-white.svg"
              alt="Alaska Airlines"
            />
          </Link>

          <button
            type="button"
            className="mobile-sidebar-close"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M18 6 6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="sidebar-nav">
          <Link
            to="/"
            className={`nav-item${isHome ? " active" : ""}`}
            aria-current={isHome ? "page" : undefined}
            aria-label="Home"
            title="Home"
            onClick={handleNavClick}
          >
            <span className="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
              </svg>
            </span>
            <span>Home</span>
          </Link>

          <Link
            to="/ground-stops"
            className={`nav-item${isGroundStops ? " active" : ""}`}
            aria-current={isGroundStops ? "page" : undefined}
            aria-label="Ground Stop Apps"
            title="Ground Stop Apps"
            onClick={handleNavClick}
          >
            <span className="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M8 8h8M8 12h8M8 16h5" />
              </svg>
            </span>
            <span>Ground Stop Apps</span>
          </Link>

          <div
            className={`nav-dropdown${vendorsDropdownOpen ? " is-open" : ""}`}
            data-nav-dropdown="vendors"
          >
            <Link
              to="/vendors"
              className={`nav-item nav-dropdown-toggle${isVendors ? " active" : ""}`}
              aria-expanded={vendorsDropdownOpen ? "true" : "false"}
              aria-current={pathname === "/vendors" ? "page" : undefined}
              aria-label="Vendors"
              title="Vendors"
              onClick={() => {
                setVendorsDropdownOpen(true);
                handleNavClick();
              }}
            >
              <span className="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <span>Vendors</span>
              <span
                className="nav-chevron"
                aria-hidden="true"
                onClick={handleChevronClick}
                title={vendorsDropdownOpen ? "Collapse submenu" : "Expand submenu"}
              >
                <svg viewBox="0 0 24 24">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </Link>

            <div className="nav-dropdown-menu" role="group" aria-label="Vendors submenu">
              <Link
                to="/vendor-case-status"
                className={`nav-subitem${isVendorCaseStatus ? " active" : ""}`}
                data-vendor-subitem="case-status"
                aria-current={isVendorCaseStatus ? "page" : undefined}
                onClick={handleNavClick}
              >
                <span className="nav-subicon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                    <path d="m9 14 2 2 4-4" />
                  </svg>
                </span>
                <span>Vendor Case Status</span>
              </Link>
            </div>
          </div>

          <Link
            to="/categories"
            className={`nav-item${isCategories ? " active" : ""}`}
            aria-current={isCategories ? "page" : undefined}
            aria-label="System Categories"
            title="System Categories"
            onClick={handleNavClick}
          >
            <span className="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </span>
            <span>System Categories</span>
          </Link>

          <Link
            to="/favorites"
            className={`nav-item${isFavorites ? " active" : ""}`}
            aria-current={isFavorites ? "page" : undefined}
            aria-label="My Favorites"
            title="My Favorites"
            onClick={handleNavClick}
          >
            <span className="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z" />
              </svg>
            </span>
            <span>My Favorites</span>
          </Link>

          <Link
            to="/admin"
            className={`nav-item${isAdmin ? " active" : ""}`}
            aria-current={isAdmin ? "page" : undefined}
            aria-label="Admin Settings"
            title="Admin Settings"
            onClick={handleNavClick}
          >
            <span className="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>
            <span>Admin Settings</span>
          </Link>
        </nav>

        <div className="sidebar-bottom">
          <p className="sidebar-quote">
            PEOPLE.
            <br />
            PLANES.
            <br />
            PARTNERS.
            <br />
            TOMORROW.
          </p>
          <p className="sidebar-copyright">
            Stronger operations
            <br />
            for a brighter tomorrow.
          </p>
        </div>
      </aside>
    </>
  );
}
