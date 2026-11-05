import React from "react";

export const VERIFIED_VENDOR_LOGOS = Object.freeze({
  accelya: "public/vendors/accelya.jpg",
  aerodata: "public/vendors/aerodata.jpg",
  "aircraft-performance-aerodata": "public/vendors/aerodata.jpg",
  "aims-vendor": "public/vendors/aims.jpg",
  aims: "public/vendors/aims.jpg",
  alvaria: "public/vendors/alvaria.jpg",
  arinc: "public/vendors/arinc.png",
  avtec: "public/vendors/avtec.jpg",
  boeing: "public/vendors/boeing.png",
  "cargo-spot": "public/vendors/cargo-spot.png",
  "aircraft-performance": "public/vendors/dynamic-source.png",
  "dynamic-source": "public/vendors/dynamic-source.png",
  five9: "public/vendors/five9.png",
  icargo: "public/vendors/ibs-software.jpg",
  "ibs-software": "public/vendors/ibs-software.jpg",
  "real-time-gates": "public/vendors/inform.jpg",
  inform: "public/vendors/inform.jpg",
  "information-display": "public/vendors/nettracer.png",
  "jeppesen-flight-planning": "public/vendors/jeppesen.png",
  jcte: "public/vendors/jeppesen.png",
  "jcte-crew": "public/vendors/jeppesen.png",
  jeppesen: "public/vendors/jeppesen.png",
  "shopping-service": "public/vendors/microsoft.png",
  microsoft: "public/vendors/microsoft.png",
  ncr: "public/vendors/ncr.png",
  nettracer: "public/vendors/nettracer.png",
  "solar-mileage": "public/vendors/oracle.png",
  "peoplesoft-financials": "public/vendors/oracle.png",
  "peoplesoft-hcm": "public/vendors/oracle.png",
  oracle: "public/vendors/oracle.png",
  sabre: "public/vendors/sabre.png",
  "image-reservations": "public/vendors/sabre.png",
  "csa-mobile-boarding": "public/vendors/sabre.png",
  "csa-mobile-lobby": "public/vendors/sabre.png",
  rain: "public/vendors/sabre.png",
  sita: "public/vendors/sita.png",
  smart4aviation: "public/vendors/smart4aviation.jpg",
  "as-trax": "public/vendors/trax.jpg",
  "qx-trax": "public/vendors/trax.jpg",
  trax: "public/vendors/trax.jpg",
  "ibm-weather": "public/vendors/the-weather-company.webp",
  "the-weather-company": "public/vendors/the-weather-company.webp",
  "wsi-fusion": "public/vendors/wsi-fusion.webp",
  "weather-feed": "public/vendors/wsi-fusion.webp"
});

export function initials(value) {
  const text = String(value || "VENDOR").trim();
  const words = text
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  if (!words.length) return "V";
  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function usableCardValue(value) {
  const text = String(value || "")
    .replace(/\s*[—–]\s*/g, " - ")
    .trim();
  return text && !/^(?:n\/?a|tbd|none|no)$/i.test(text) ? text : "";
}

export function companyName(vendor) {
  if (!vendor) return "Vendor";
  return (
    usableCardValue(vendor.company) ||
    usableCardValue(vendor.vendor) ||
    usableCardValue(vendor.displayName) ||
    usableCardValue(vendor.name) ||
    "Vendor"
  );
}

export function isVendor24x7(vendor) {
  if (!vendor) return false;
  const rawAvail = String(
    vendor.supportAvailability ||
      vendor.supportSchedule ||
      vendor.supportHours ||
      ""
  ).trim();
  if (
    rawAvail &&
    /^(?:business\s*hours|8\s*[x×]\s*5|9\s*-\s*5|none|no|n\/?a|disabled|inactive|offline)$/i.test(
      rawAvail
    )
  ) {
    return false;
  }
  const statusRaw = String(vendor.status || vendor.portalStatus || "").trim();
  if (/^(?:inactive|disabled|retired|decommissioned|offline)$/i.test(statusRaw)) {
    return false;
  }
  return true;
}

export function vendorStatusInfo(vendor) {
  const raw = String((vendor && (vendor.status || vendor.portalStatus)) || "").trim();
  const isInactive = /^(?:inactive|disabled|retired|decommissioned|offline)$/i.test(raw);
  return {
    label: isInactive ? "Inactive" : "Active",
    className: isInactive ? "inactive" : "active"
  };
}

export function extractPhoneFromSegment(segment) {
  const text = String(segment || "");
  const phoneRegex =
    /(?:\+\s*\d{1,4}[\s.-]*|\b\d{1,4}[\s.-]+)?(?:\(\d{1,5}\)[\s.-]*)?\d+(?:[\s.-]+\d+)*(?:\s*(?:PIN|ext\.?|x)\s*\d+)?/gi;
  let match;
  while ((match = phoneRegex.exec(text)) !== null) {
    const candidate = match[0].trim();
    const coreDigits = candidate
      .replace(/(?:PIN|ext\.?|x)\s*\d+$/i, "")
      .replace(/\D/g, "");
    if (coreDigits.length >= 7 && coreDigits.length <= 15) {
      return candidate
        .replace(/^\+\s+/, "+")
        .replace(/\s*-\s*/g, "-")
        .replace(/\s+/g, " ")
        .trim();
    }
  }
  return "";
}

export function primaryCardPhone(value) {
  if (Array.isArray(value)) {
    const primaryObj = value.find(
      item => item && typeof item === "object" && (item.primary || item.isPrimary)
    );
    if (primaryObj) {
      const extracted = primaryCardPhone(
        primaryObj.phone || primaryObj.number || primaryObj.value || ""
      );
      if (extracted) return extracted;
    }
    return primaryCardPhone(
      value
        .map(item =>
          item && typeof item === "object"
            ? item.phone || item.number || item.value || ""
            : String(item ?? "")
        )
        .join("\n")
    );
  }
  const raw = String(value ?? "").replace(/\r\n/g, "\n");
  if (!usableCardValue(raw)) return "";

  const lines = raw
    .split("\n")
    .map(l => l.trim())
    .filter(Boolean);
  for (let i = 0; i < lines.length; i++) {
    if (/primary/i.test(lines[i])) {
      const onSameLine = extractPhoneFromSegment(lines[i]);
      if (onSameLine) return onSameLine;
      if (i + 1 < lines.length) {
        const onNextLine = extractPhoneFromSegment(lines[i + 1]);
        if (onNextLine) return onNextLine;
      }
    }
  }

  for (const line of lines) {
    const found = extractPhoneFromSegment(line);
    if (found) return found;
  }

  const extractedRaw = extractPhoneFromSegment(raw);
  if (extractedRaw) return extractedRaw;

  if (lines.length && /^contact via\s+/i.test(lines[0])) {
    return lines[0].replace(/\s*\([^)]*\)\s*$/, "").trim();
  }

  return "";
}

export function extractEmailFromSegment(segment) {
  const match = String(segment || "").match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0].trim() : "";
}

export function primaryCardEmail(value) {
  if (Array.isArray(value)) {
    const primaryObj = value.find(
      item => item && typeof item === "object" && (item.primary || item.isPrimary)
    );
    if (primaryObj) {
      const extracted = primaryCardEmail(
        primaryObj.email || primaryObj.address || primaryObj.value || ""
      );
      if (extracted) return extracted;
    }
    return primaryCardEmail(
      value
        .map(item =>
          item && typeof item === "object"
            ? item.email || item.address || item.value || ""
            : String(item ?? "")
        )
        .join("\n")
    );
  }
  const raw = String(value ?? "").replace(/\r\n/g, "\n");
  if (!usableCardValue(raw)) return "";

  const lines = raw
    .split("\n")
    .map(l => l.trim())
    .filter(Boolean);
  for (let i = 0; i < lines.length; i++) {
    if (/primary/i.test(lines[i])) {
      const onSameLine = extractEmailFromSegment(lines[i]);
      if (onSameLine) return onSameLine;
      if (i + 1 < lines.length) {
        const onNextLine = extractEmailFromSegment(lines[i + 1]);
        if (onNextLine) return onNextLine;
      }
    }
  }

  for (const line of lines) {
    const found = extractEmailFromSegment(line);
    if (found) return found;
  }

  return extractEmailFromSegment(raw);
}

export function contactTarget(value, type) {
  const text = Array.isArray(value) ? value.join("\n") : String(value || "");

  if (type === "email") {
    const addresses = [
      ...new Set(text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || [])
    ];
    return addresses.length ? `mailto:${addresses.join(",")}` : "";
  }

  const numbers = text.match(/\+?\d[\d\s().-]{5,}\d/g) || [];
  const phone = numbers
    .map(number => number.trim())
    .find(number => number.replace(/\D/g, "").length >= 7);

  return phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : "";
}

export function vendorLogo(vendor, company) {
  const id = String((vendor && vendor.id) || "")
    .toLowerCase()
    .trim();
  const comp = String(
    (vendor && (vendor.vendor || vendor.company || vendor.displayName)) ||
      company ||
      ""
  )
    .toLowerCase()
    .trim();
  const sys = String(
    (vendor && (vendor.systemName || vendor.displayName)) || ""
  )
    .toLowerCase()
    .trim();

  let verifiedLogo = VERIFIED_VENDOR_LOGOS[id] || (vendor && vendor.logo);

  if (!verifiedLogo) {
    if (
      comp === "accelya" ||
      comp.includes("accelya") ||
      sys.includes("accelya")
    ) {
      verifiedLogo = "public/vendors/accelya.jpg";
    } else if (comp === "avtec" || comp.includes("avtec")) {
      verifiedLogo = "public/vendors/avtec.jpg";
    } else if (
      comp === "aerodata" ||
      comp.startsWith("aerodata") ||
      comp.includes("aerodata")
    ) {
      verifiedLogo = "public/vendors/aerodata.jpg";
    } else if (comp === "arinc" || comp.includes("arinc")) {
      verifiedLogo = "public/vendors/arinc.png";
    } else if (comp === "aims" || comp.includes("aims")) {
      verifiedLogo = "public/vendors/aims.jpg";
    } else if (comp === "alvaria" || comp.includes("alvaria")) {
      verifiedLogo = "public/vendors/alvaria.jpg";
    } else if (
      comp === "boeing" ||
      comp.includes("boeing") ||
      sys.includes("boeing")
    ) {
      verifiedLogo = "public/vendors/boeing.png";
    } else if (
      sys === "cargo spot" ||
      comp.includes("champ") ||
      comp.includes("cargo spot")
    ) {
      verifiedLogo = "public/vendors/cargo-spot.png";
    } else if (
      comp === "dynamic source" ||
      comp.startsWith("dynamic source")
    ) {
      verifiedLogo = "public/vendors/dynamic-source.png";
    } else if (
      comp === "five9" ||
      comp.includes("five9") ||
      sys.includes("five9")
    ) {
      verifiedLogo = "public/vendors/five9.png";
    } else if (comp.includes("ibs software") || sys.includes("icargo")) {
      verifiedLogo = "public/vendors/ibs-software.jpg";
    } else if (
      comp === "inform" ||
      comp.includes("inform") ||
      sys.includes("real time gates")
    ) {
      verifiedLogo = "public/vendors/inform.jpg";
    } else if (comp === "jeppesen" || comp.includes("jeppesen")) {
      verifiedLogo = "public/vendors/jeppesen.png";
    } else if (comp.includes("microsoft") || comp.includes("azure")) {
      verifiedLogo = "public/vendors/microsoft.png";
    } else if (comp === "ncr" || comp.includes("ncr")) {
      verifiedLogo = "public/vendors/ncr.png";
    } else if (
      comp === "nettracer" ||
      comp.includes("nettracer") ||
      sys.includes("nettracer") ||
      sys.includes("information display")
    ) {
      verifiedLogo = "public/vendors/nettracer.png";
    } else if (comp.includes("oracle")) {
      verifiedLogo = "public/vendors/oracle.png";
    } else if (comp === "sabre" || comp.includes("sabre")) {
      verifiedLogo = "public/vendors/sabre.png";
    } else if (comp === "sita" || comp.includes("sita")) {
      verifiedLogo = "public/vendors/sita.png";
    } else if (
      comp.includes("smart4aviation") ||
      sys.includes("smart4aviation")
    ) {
      verifiedLogo = "public/vendors/smart4aviation.jpg";
    } else if (
      comp === "trax" ||
      comp.includes("trax") ||
      sys.includes("trax")
    ) {
      verifiedLogo = "public/vendors/trax.jpg";
    } else if (
      comp.includes("weather company") ||
      comp.startsWith("twc")
    ) {
      verifiedLogo = "public/vendors/the-weather-company.webp";
    } else if (
      comp.includes("wsi fusion") ||
      sys.includes("wsi fusion") ||
      comp.includes("fusion")
    ) {
      verifiedLogo = "public/vendors/wsi-fusion.webp";
    }
  }

  const resolvedCompany = company || companyName(vendor);

  if (verifiedLogo) {
    return {
      src: verifiedLogo,
      alt: `${resolvedCompany || comp} logo`,
      isCustom: true
    };
  }

  const identity = (resolvedCompany || "").toLocaleLowerCase();
  let hash = 0;

  for (let index = 0; index < identity.length; index += 1) {
    hash = (hash * 31 + identity.charCodeAt(index)) >>> 0;
  }

  const palettes = [
    { bgStart: "#0066CC", bgEnd: "#0052A3" },
    { bgStart: "#211D8A", bgEnd: "#171469" },
    { bgStart: "#004B87", bgEnd: "#003865" },
    { bgStart: "#0D6E6E", bgEnd: "#095252" },
    { bgStart: "#3B288F", bgEnd: "#2A1B6E" },
    { bgStart: "#026AA7", bgEnd: "#014F7D" }
  ];

  let palette = palettes[hash % palettes.length];
  if (identity.includes("smart4aviation")) {
    palette = palettes[0];
  } else if (identity.includes("dynamic source")) {
    palette = palettes[1];
  } else if (identity.includes("aerodata")) {
    palette = palettes[2];
  }

  const mark = initials(resolvedCompany || "Vendor");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${palette.bgStart}"/><stop offset="100%" stop-color="${palette.bgEnd}"/></linearGradient></defs><rect width="96" height="96" rx="22" fill="url(#g)"/><text x="48" y="59" text-anchor="middle" font-family="'AS Circular',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif" font-size="33" font-weight="700" letter-spacing="-0.5" fill="#FFFFFF">${mark}</text></svg>`;

  return {
    src: `data:image/svg+xml,${encodeURIComponent(svg)}`,
    alt: `${resolvedCompany} monogram badge`,
    isCustom: false
  };
}

export function renderPhoneNodes(phoneText) {
  if (!phoneText) {
    return <span className="vendor-contact-missing">Phone not listed</span>;
  }
  const parts = String(phoneText).split(/(\([^)]+\))/g);
  return parts.map((part, idx) => {
    if (part.startsWith("(") && part.endsWith(")")) {
      return (
        <span key={idx} className="vendor-phone-note">
          {part}
        </span>
      );
    }
    return part;
  });
}

// Keep backwards-compatible named exports if any external module imports them
export const cleanText = (value, fallback = "") => usableCardValue(value) || fallback;
export const resolveCardCompanyName = companyName;
export const resolveCustomVendorLogo = vendor => {
  const logo = vendorLogo(vendor, companyName(vendor));
  return logo.isCustom ? logo.src : null;
};
export const createVendorLogoDataUri = vendor =>
  vendorLogo(vendor, companyName(vendor)).src;
export const formatCategoryPill = vendor =>
  usableCardValue(vendor?.category)
    ? String(vendor.category)
        .split("•")[0]
        .replace(/\s+/g, " ")
        .trim()
    : "Operations Partner";

export const renderSlaIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v2.5a1.8 1.8 0 0 1-1.96 1.8 17.8 17.8 0 0 1-7.76-2.76 17.5 17.5 0 0 1-5.4-5.4A17.8 17.8 0 0 1 4.12 5.26 1.8 1.8 0 0 1 5.91 3.3h2.5a1.8 1.8 0 0 1 1.8 1.55c.11.85.32 1.68.62 2.48a1.8 1.8 0 0 1-.41 1.9l-1.06 1.06a14.4 14.4 0 0 0 5.4 5.4l1.06-1.06a1.8 1.8 0 0 1 1.9-.41c.8.3 1.63.51 2.48.62A1.8 1.8 0 0 1 22 16.92z" />
  </svg>
);

export default function VendorCard({
  vendor,
  index = 0,
  isFavorite = false,
  onToggleFavorite,
  onViewDetails,
  onPrimaryAction,
  primaryActionLabel = "Contact"
}) {
  const company = companyName(vendor);
  const logo = vendorLogo(vendor, company);
  const systemLabel =
    usableCardValue(vendor?.systemName) ||
    usableCardValue(vendor?.displayName) ||
    "";
  const categoryLabel = usableCardValue(vendor?.category)
    ? String(vendor.category)
        .split("•")[0]
        .replace(/\s+/g, " ")
        .trim()
    : "Operations Partner";
  const rawContact =
    usableCardValue(vendor?.aagItsPoc) ||
    usableCardValue(vendor?.vendorPoc) ||
    usableCardValue(vendor?.poc);
  const primaryContact = rawContact
    ? rawContact
        .split(/\r?\n/)[0]
        .replace(/^(?:vendor\s*reps?\s*:?|primary\s*contact\s*:?)\s*/i, "")
        .trim()
    : "";
  const phone = primaryCardPhone(vendor?.phone);
  const email = primaryCardEmail(vendor?.email);
  const phoneTarget = contactTarget(phone, "phone");
  const emailTarget = contactTarget(email, "email");
  const fullPhoneTarget = contactTarget(vendor?.phone, "phone");
  const fullEmailTarget = contactTarget(vendor?.email, "email");
  const team =
    usableCardValue(vendor?.aagItsTeam) ||
    usableCardValue(vendor?.category) ||
    "Department not listed";
  const vendorKey = vendor?.id || String(vendor?.sourceRow || "");
  const is24x7 = isVendor24x7(vendor);
  const statusInfo = vendorStatusInfo(vendor);
  const rawSla =
    usableCardValue(vendor?.sla) ||
    usableCardValue(vendor?.responseSla) ||
    usableCardValue(vendor?.response);
  const slaLabel = rawSla
    ? /^sla:/i.test(rawSla)
      ? rawSla.replace(/minutes/i, "min")
      : `SLA: ${rawSla.replace(/minutes/i, "min")}`
    : "";

  const handleCardClick = event => {
    if (event.target.closest("a")) return;
    if (onViewDetails) {
      onViewDetails(vendor);
    }
  };

  const handleFavoriteClick = event => {
    event.preventDefault();
    event.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(vendorKey);
    }
  };

  const handleDetailsClick = event => {
    event.preventDefault();
    event.stopPropagation();
    if (onViewDetails) {
      onViewDetails(vendor);
    }
  };

  const handlePrimaryClick = event => {
    event.preventDefault();
    event.stopPropagation();
    if (onPrimaryAction) {
      onPrimaryAction(vendor);
    }
  };

  return (
    <article
      className="vendor-card"
      data-index={String(index)}
      data-id={vendorKey}
      onClick={handleCardClick}
    >
      <header className="vendor-card-header">
        <div
          className={`vendor-logo-frame ${logo.isCustom ? "has-custom-logo" : ""}`}
        >
          <img
            className={`vendor-logo ${logo.isCustom ? "custom-logo" : ""}`}
            src={logo.src}
            alt={logo.alt}
          />
        </div>
        <div className="vendor-card-heading">
          {systemLabel && (
            <span className="vendor-system-eyebrow" title={systemLabel}>
              {systemLabel}
            </span>
          )}
          <h3 className="vendor-company-name" title={company}>
            {company}
          </h3>
          <div className="vendor-card-submeta">
            <span
              className="vendor-category-pill vendor-card-description"
              title={categoryLabel}
            >
              {categoryLabel}
            </span>
          </div>
        </div>
        <div
          className="vendor-card-badges"
          aria-label="Vendor status, availability, and favorite"
        >
          <div className="vendor-badge-stack">
            <span
              className={`vendor-status-badge vendor-status-badge-status ${statusInfo.className}`}
            >
              <i aria-hidden="true"></i>
              {statusInfo.label}
            </span>
            {slaLabel && (
              <span
                className="vendor-status-badge vendor-status-badge-availability"
                title={slaLabel}
              >
                {renderSlaIcon()}
                <span>{slaLabel}</span>
              </span>
            )}
            {is24x7 && (
              <span
                className="vendor-status-badge vendor-status-badge-availability"
                title="24×7 Support Available"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
                24×7
              </span>
            )}
          </div>
          {onToggleFavorite && (
            <button
              className={`vendor-card-favorite ${isFavorite ? "active" : ""}`}
              type="button"
              data-vendor-id={vendorKey}
              aria-label={
                isFavorite
                  ? "Remove vendor from favorites"
                  : "Add vendor to favorites"
              }
              title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              onClick={handleFavoriteClick}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9L12 2.5z" />
              </svg>
            </button>
          )}
        </div>
      </header>

      <div className="vendor-card-contacts" aria-label="Vendor contact details">
        {primaryContact && (
          <div className="vendor-contact-line">
            <span className="vendor-contact-icon icon-poc" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="7.5" r="3.5" />
                <path d="M5 19.5c.5-3.2 3.1-5 7-5s6.5 1.8 7 5" />
              </svg>
            </span>
            <span className="vendor-contact-key">Contact</span>
            <span
              className="vendor-contact-val vendor-contact-poc"
              title={rawContact}
            >
              {primaryContact}
            </span>
          </div>
        )}
        <div className="vendor-contact-line">
          <span className="vendor-contact-icon icon-phone" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M21 16.4v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.7 2 2 0 0 1 3.1 1.5h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L7 9.2a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 2 2.3Z" />
            </svg>
          </span>
          <span className="vendor-contact-key">Phone</span>
          {phoneTarget ? (
            <a
              className="vendor-contact-val vendor-contact-phone"
              href={phoneTarget}
              title={phone || "Call vendor"}
              onClick={e => e.stopPropagation()}
            >
              {renderPhoneNodes(phone)}
            </a>
          ) : (
            <span
              className="vendor-contact-val vendor-contact-phone"
              title={phone || "Phone not listed"}
            >
              {renderPhoneNodes(phone)}
            </span>
          )}
        </div>
        <div className="vendor-contact-line">
          <span className="vendor-contact-icon icon-email" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
              <path d="m3.5 6 8.5 7 8.5-7" />
            </svg>
          </span>
          <span className="vendor-contact-key">Email</span>
          {emailTarget ? (
            <a
              className="vendor-contact-val vendor-contact-link"
              href={emailTarget}
              title={email || "Email vendor"}
              onClick={e => e.stopPropagation()}
            >
              {email || "Email vendor"}
            </a>
          ) : (
            <span
              className="vendor-contact-val"
              title={email || "Email not listed"}
            >
              {email ? (
                email
              ) : (
                <span className="vendor-contact-missing">Email not listed</span>
              )}
            </span>
          )}
        </div>
        <div className="vendor-contact-line">
          <span className="vendor-contact-icon icon-team" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="9" cy="8.5" r="3" />
              <path d="M3.5 19c.4-2.8 2.4-4.3 5.5-4.3s5.1 1.5 5.5 4.3" />
              <circle cx="16.5" cy="9.5" r="2.3" />
              <path d="M16 14.8c2.1.2 3.7 1.4 4 3.7" />
            </svg>
          </span>
          <span className="vendor-contact-key">ITS Team</span>
          <span className="vendor-contact-val vendor-contact-team" title={team}>
            {team}
          </span>
        </div>
      </div>

      <footer className="vendor-card-footer">
        <button
          className="vendor-view vendor-btn-details"
          type="button"
          data-index={String(index)}
          onClick={handleDetailsClick}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span>View Details</span>
          <svg
            className="vendor-btn-arrow"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </button>
        <button
          className="vendor-contact-btn vendor-btn-contact"
          type="button"
          data-index={String(index)}
          data-email-target={fullEmailTarget}
          data-phone-target={fullPhoneTarget}
          onClick={handlePrimaryClick}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
            <path d="m3.5 6 8.5 7 8.5-7" />
          </svg>
          <span>{primaryActionLabel}</span>
          <svg
            className="vendor-btn-arrow"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </button>
      </footer>
    </article>
  );
}
