import React from "react";

/**
 * Renders plain text with any embedded http(s) URLs turned into clickable external links.
 */
export function renderTextWithLinks(text, linkClassName = "vi-inline-link") {
  const raw = String(text || "");
  if (!raw) return null;

  const urlRegex = /(https?:\/\/[^\s<>()]+[^\s<>().,;:"'!?\])}])/gi;
  const parts = raw.split(urlRegex);
  if (parts.length === 1) return raw;

  return parts.map((part, idx) => {
    if (/^https?:\/\//i.test(part)) {
      return (
        <a
          key={idx}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          onClick={e => e.stopPropagation()}
        >
          {part}
        </a>
      );
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

/**
 * Extracts the primary external URL from a website string if present.
 */
function extractPrimaryUrl(websiteText) {
  const raw = String(websiteText || "").trim();
  if (!raw || raw.startsWith("(") || /^none|n\/a|na|internal/i.test(raw)) {
    return null;
  }
  const httpMatch = raw.match(/https?:\/\/[^\s<>()]+[^\s<>().,;:"'!?\])}]/i);
  if (httpMatch) {
    return httpMatch[0];
  }
  const domainMatch = raw.match(
    /\b([a-z0-9-]+(?:\.[a-z0-9-]+)+\.(?:com|aero|org|net|io|gov|edu)(?:\/[^\s,;]*)?)\b/i
  );
  if (domainMatch) {
    return `https://${domainMatch[1]}`;
  }
  return null;
}

/**
 * Shared Status / Criticality / Availability Badge component
 */
export function StatusBadge({
  label,
  variant = "blue",
  dot = false,
  icon = null,
  className = "",
  title
}) {
  if (!label) return null;
  return (
    <span
      className={`shared-status-badge badge-${variant} ${className}`.trim()}
      title={title || label}
    >
      {dot && <i className="shared-status-dot" aria-hidden="true" />}
      {icon && (
        <span className="shared-status-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{label}</span>
    </span>
  );
}

/**
 * Shared Pastel Information Card inside DetailPageHeader
 * Matches the 4 horizontally aligned pastel cards in the ACARS reference screenshot:
 * - Card 1 (blue): Company
 * - Card 2 (purple): Website (with functional external-link icon)
 * - Card 3 (green): Category / Supported Systems
 * - Card 4 (amber): ITS Team / Support Team
 */
export function DetailInfoCard({
  variant = "blue",
  iconType = "company",
  label,
  value,
  isWebsite = false
}) {
  const displayValue = value || "Not specified";
  const primaryUrl = isWebsite ? extractPrimaryUrl(displayValue) : null;
  const isPureUrl =
    isWebsite && /^https?:\/\/\S+$/i.test(String(displayValue).trim());

  const renderIcon = () => {
    switch (iconType) {
      case "company":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
          </svg>
        );
      case "website":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        );
      case "category":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 12 12 17 22 12" />
            <polyline points="2 17 12 22 22 17" />
          </svg>
        );
      case "team":
      default:
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
    }
  };

  return (
    <div className={`vi-info-card card-${variant} vi-meta-item`}>
      <span
        className={`vi-info-card-icon pastel-${variant} vi-meta-icon`}
        aria-hidden="true"
      >
        {renderIcon()}
      </span>
      <div className="vi-info-card-body vi-meta-text">
        <span className="vi-info-card-label vi-meta-label">{label}</span>
        {isWebsite && primaryUrl ? (
          <div className="vi-info-card-website-wrap">
            {isPureUrl ? (
              <a
                href={primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="vi-info-card-link vi-meta-link"
              >
                {displayValue}
              </a>
            ) : (
              <strong className="vi-info-card-value vi-meta-value">
                {renderTextWithLinks(displayValue, "vi-info-card-link vi-meta-link")}
              </strong>
            )}
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vi-info-card-ext-btn"
              title={`Open ${primaryUrl}`}
              aria-label={`Open ${label} in new tab`}
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
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        ) : (
          <strong className="vi-info-card-value vi-meta-value">
            {renderTextWithLinks(displayValue, "vi-info-card-link vi-meta-link")}
          </strong>
        )}
      </div>
    </div>
  );
}

/**
 * Shared Pill Navigation Tabs component (matches ACARS Ground System screenshot)
 */
export function DetailTabNavigation({
  tabs,
  activeTab,
  onSelectTab,
  ariaLabel = "Detail sections"
}) {
  return (
    <div className="vi-hero-tabs" role="tablist" aria-label={ariaLabel}>
      {tabs.map(tab => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={isActive ? "true" : "false"}
            className={`vi-hero-tab${isActive ? " active" : ""}`}
            onClick={() => onSelectTab(tab.key)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

// Keep DetailTabs alias for existing imports
export const DetailTabs = DetailTabNavigation;

/**
 * Shared DetailPageHeader component for all 9 Ground Stop Application detail pages
 * and all Vendor detail pages.
 * Renders:
 * - Large white rounded parent card (.vi-hero-card)
 * - Top row: Logo on top-left, Bold navy title + subtitle beside logo, Rounded Back button on top-right
 * - Middle row: Four equal-width pastel information cards (Company, Website, Category, ITS Team)
 * - Thin horizontal divider
 * - Bottom row: Rounded pill-shaped navigation tabs
 */
export function DetailPageHeader({
  ariaLabel = "Application summary",
  logoSrc,
  logoAlt,
  fallbackLogo,
  title,
  subtitle,
  backLabel = "Back to Ground Stop Applications",
  onBack,
  infoCards,
  company,
  website,
  category,
  itsTeam,
  tabs,
  activeTab,
  onSelectTab
}) {
  const resolvedCards =
    Array.isArray(infoCards) && infoCards.length > 0
      ? infoCards
      : [
          {
            key: "company",
            variant: "blue",
            iconType: "company",
            label: "Company",
            value: company
          },
          {
            key: "website",
            variant: "purple",
            iconType: "website",
            label: "Website",
            value: website,
            isWebsite: true
          },
          {
            key: "category",
            variant: "green",
            iconType: "category",
            label: "Category",
            value: category
          },
          {
            key: "team",
            variant: "amber",
            iconType: "team",
            label: "ITS Team",
            value: itsTeam
          }
        ];

  return (
    <section className="vi-hero-card" aria-label={ariaLabel}>
      {/* TOP HEADER ROW: LOGO + TITLE/SUBTITLE LEFT, BACK BUTTON RIGHT */}
      <div className="vi-hero-top-row">
        <div className="vi-hero-identity">
          <div className="vi-hero-logo-box">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={logoAlt || title}
                className="vi-hero-logo-img"
              />
            ) : (
              <div className="vi-hero-logo-fallback">{fallbackLogo}</div>
            )}
          </div>

          <div className="vi-hero-title-group">
            <h2 className="vi-hero-title">{title}</h2>
            {subtitle ? <p className="vi-hero-subtitle">{subtitle}</p> : null}
          </div>
        </div>

        {onBack ? (
          <div className="vi-hero-actions">
            <button
              type="button"
              className="vi-btn-secondary vi-back-btn"
              onClick={onBack}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              <span>{backLabel}</span>
            </button>
          </div>
        ) : null}
      </div>

      {/* FOUR HORIZONTALLY ALIGNED PASTEL INFORMATION CARDS */}
      <div className="vi-info-cards-grid vi-meta-row">
        {resolvedCards.map((card, index) => (
          <DetailInfoCard
            key={card.key || index}
            variant={card.variant}
            iconType={card.iconType}
            label={card.label}
            value={card.value}
            isWebsite={Boolean(card.isWebsite)}
          />
        ))}
      </div>

      {/* THIN HORIZONTAL DIVIDER */}
      <hr className="vi-hero-divider" aria-hidden="true" />

      {/* ROUNDED PILL-SHAPED NAVIGATION TABS */}
      {Array.isArray(tabs) && tabs.length > 0 ? (
        <DetailTabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onSelectTab={onSelectTab}
        />
      ) : null}
    </section>
  );
}

/**
 * Shared Soft Amber Criticality Alert Banner component
 */
export function CriticalityAlert({ title, message }) {
  if (!title && !message) return null;
  return (
    <div className="vi-alert-banner" role="note">
      <span className="vi-alert-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line
            x1="12"
            y1="9"
            x2="12"
            y2="13"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="17" r="1.2" fill="#FFFFFF" />
        </svg>
      </span>
      <div className="vi-alert-content">
        {title && <strong>{title}</strong>}
        {message && <p>{renderTextWithLinks(message, "vi-alert-link")}</p>}
      </div>
    </div>
  );
}

/**
 * Shared Contact Row with Fixed-Width Pastel Icon, Consistent Label Column,
 * Flexible Contact Value Column, and Fixed-Width Copy Button.
 */
export function ContactRow({
  iconType = "email-blue",
  label,
  sublabel,
  note,
  value,
  href,
  isEmail = false,
  copyKey,
  copyField,
  copiedField,
  onCopy,
  multiline = false,
  isMultiline = false,
  muted = false,
  isMuted = false
}) {
  if (!value) return null;

  const effectiveSublabel = sublabel || note || "";
  let cleanLabel = String(label || "");
  if (effectiveSublabel && cleanLabel.includes(`(${effectiveSublabel})`)) {
    cleanLabel = cleanLabel.replace(`(${effectiveSublabel})`, "").trim();
  }

  const effectiveCopyKey = copyKey || copyField || "";
  const effectiveMultiline = Boolean(multiline || isMultiline);
  const effectiveMuted = Boolean(muted || isMuted);
  const effectiveHref =
    href ||
    (isEmail && String(value || "").includes("@")
      ? `mailto:${String(value).trim()}`
      : undefined);
  const hasCopy = Boolean(onCopy && effectiveCopyKey);

  const normalizedIconType = (() => {
    switch (iconType) {
      case "email":
      case "email-blue":
        return "email-blue";
      case "secondaryEmail":
      case "email-purple":
        return "email-purple";
      case "phone":
      case "password":
      case "phone-green":
        return "phone-green";
      case "technical":
      case "admin":
      case "support-violet":
        return "support-violet";
      case "hours":
      case "everbridge":
      case "clock-amber":
        return "clock-amber";
      case "team":
      case "team-blue":
        return "team-blue";
      case "owner":
      case "business":
      case "user-purple":
        return "user-purple";
      case "scope":
      case "shield-green":
        return "shield-green";
      default:
        return "email-blue";
    }
  })();

  const renderPastelIcon = () => {
    switch (normalizedIconType) {
      case "email-blue":
        return (
          <span className="vi-contact-pastel-icon pastel-blue" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </span>
        );
      case "email-purple":
        return (
          <span className="vi-contact-pastel-icon pastel-purple" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </span>
        );
      case "phone-green":
        return (
          <span className="vi-contact-pastel-icon pastel-green" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
        );
      case "support-violet":
        return (
          <span className="vi-contact-pastel-icon pastel-violet" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
              <rect x="2.5" y="12" width="3.5" height="6" rx="1.75" />
              <rect x="18" y="12" width="3.5" height="6" rx="1.75" />
              <path d="M19.5 18v.5a3 3 0 0 1-3 3h-2.5" />
              <circle cx="13" cy="21.5" r="1" fill="currentColor" />
            </svg>
          </span>
        );
      case "clock-amber":
        return (
          <span className="vi-contact-pastel-icon pastel-amber" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 14" />
            </svg>
          </span>
        );
      case "team-blue":
        return (
          <span className="vi-contact-pastel-icon pastel-blue" aria-hidden="true">
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
        );
      case "user-purple":
        return (
          <span className="vi-contact-pastel-icon pastel-purple" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
        );
      case "shield-green":
        return (
          <span className="vi-contact-pastel-icon pastel-green" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`vi-kv-row vi-kv-row-pastel${hasCopy ? " has-copy" : " no-copy"}${
        effectiveMultiline ? " vi-kv-row-top" : ""
      }`}
    >
      {renderPastelIcon()}
      <div className="vi-kv-label-stack">
        <span className="vi-kv-label">{cleanLabel}</span>
        {effectiveSublabel ? (
          <span className="vi-kv-sublabel">({effectiveSublabel})</span>
        ) : null}
      </div>
      <div className="vi-kv-val-col">
        {effectiveHref ? (
          <a
            href={effectiveHref}
            className="vi-kv-link"
            title={effectiveSublabel || value}
          >
            {value}
          </a>
        ) : effectiveMultiline ? (
          <span className="vi-kv-multiline">{value}</span>
        ) : effectiveMuted ? (
          <span className="vi-kv-muted">{value}</span>
        ) : (
          <strong className="vi-kv-strong">{value}</strong>
        )}
      </div>
      {hasCopy ? (
        <button
          type="button"
          className="vi-copy-btn"
          title={`Copy ${cleanLabel}`}
          aria-label={`Copy ${cleanLabel}`}
          onClick={() => onCopy(value, effectiveCopyKey)}
        >
          {copiedField === effectiveCopyKey ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#16A34A"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
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
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      ) : null}
    </div>
  );
}

/**
 * Shared Impacted Applications & Systems 6-Column Table Card
 */
export function ImpactTable({ systemName, systems, defaultOwner }) {
  return (
    <section
      className="vi-card vi-systems-card"
      aria-label="Applications and Systems Impacted"
    >
      <header className="vi-card-header">
        <span className="vi-card-icon icon-blue" aria-hidden="true">
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
        <h3>Applications &amp; Systems Impacted</h3>
      </header>

      <div className="vi-table-wrap">
        <table className="vi-table vi-table-6col">
          <colgroup>
            <col style={{ width: "19%" }} />
            <col style={{ width: "21%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "12%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>Application / System</th>
              <th>Short Description</th>
              <th>Business Function</th>
              <th>Impact if Down ({systemName})</th>
              <th>Direct Dependencies</th>
              <th>ITS Owner</th>
            </tr>
          </thead>
          <tbody>
            {systems.map(sys => (
              <tr key={sys.id}>
                <td className="vi-td-app">
                  <strong>{sys.name}</strong>
                  {sys.subName ? (
                    <div className="vi-td-subname">{sys.subName}</div>
                  ) : null}
                </td>
                <td className="vi-td-desc">{sys.description}</td>
                <td className="vi-td-func">{sys.businessFunction}</td>
                <td className="vi-td-impact">{sys.impact}</td>
                <td className="vi-td-desc">{sys.dependencies || "-"}</td>
                <td className="vi-td-owner">{sys.owner || defaultOwner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
