import React from "react";

export function normalizeSlaBadgeText(value) {
  const raw = String(value || "").trim();
  if (!raw) return "15 min";
  const minMatch = raw.match(/(\d+)\s*(?:min|minute|minutes|m)\b/i);
  if (minMatch) {
    return `${minMatch[1]} min`;
  }
  const hourMatch = raw.match(/(\d+)\s*(?:hr|hrs|hour|hours|h)\b/i);
  if (hourMatch) {
    return `${hourMatch[1]} hr`;
  }
  if (raw.length <= 14) return raw;
  return "15 min";
}

export default function SlaBadge({
  value = "15 min",
  variant = "ground-stop",
  className = "",
  title
}) {
  if (variant === "vendor") {
    return (
      <span
        className={`vendor-status-badge vendor-status-badge-availability${className ? ` ${className}` : ""}`}
        title={title || `Support Window: ${value}`}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.5v5l3.2 2" />
        </svg>
        {value}
      </span>
    );
  }

  const normalized = normalizeSlaBadgeText(value);
  return (
    <span
      className={`gs-sla-pill${className ? ` ${className}` : ""}`}
      title={title || `SLA Response: ${normalized}`}
    >
      <svg
        viewBox="0 0 24 24"
        width="12.5"
        height="12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
      {normalized}
    </span>
  );
}

