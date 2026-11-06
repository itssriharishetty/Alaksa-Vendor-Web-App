import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMasterData } from "../context/MasterDataContext.jsx";
import { getAdminSession } from "../services/vendorCaseStatusService.js";
import LoginScreen from "./admin/Login.jsx";
import VendorEditor, { ApplicationEditor } from "./admin/VendorEditor.jsx";
import Sidebar from "./Sidebar.jsx";

const STORAGE = {
  authenticated: "productionOperationsAdminAuthenticated",
  email: "productionOperationsAdminEmail",
  password: "productionOperationsAdminPassword",
  vendors: "productionOperationsVendors",
  applications: "productionOperationsApplications",
  history: "productionOperationsAdminHistory"
};

const fields = [
  "systemName",
  "category",
  "vendorCompanyName",
  "status",
  "supportAvailability",
  "sla",
  "website",
  "lastUpdated",
  "pageTitle",
  "pageSubtitle",
  "prodOpsEscalationProcess",
  "contactNumbers",
  "emailAddress",
  "vendorPOC",
  "aagItsPOC",
  "aagItsTeam",
  "portalUrl",
  "portalStatus",
  "lastVerifiedDate",
  "portalNotes",
  "infoUpdatedDate",
  "infoUpdatedBy",
  "infoApprovedDate",
  "infoApprovedBy"
];

const CARD_PROFILES = {
  "acars": {
    shortName: "ACARS",
    category: "Flight Ops: aircraft-to-ground communications",
    status: "Active",
    sla: "15 min",
    slaIcon: "spark",
    severity: "Critical",
    description:
      "ACARS is the central text link between aircraft and the ground. It carries flight info, flight times, weather, performance data, releases and load closeouts. It is rated 24x7 critical and is on the Ground Stop list.",
    vendor: "SITA",
    poc: "Ryan Wilkins, 206-972-0228",
    phone: "1-888-247-2661",
    email: "Aircom.support@sitaonair.aero",
    team: "ITS COG FlightOps Support",
    logoVariant: "logo-acars"
  },
  "wam": {
    shortName: "WAM",
    category: "Flight Ops / Dispatch: flight planning and releases",
    status: "Active",
    sla: "15 min",
    slaIcon: "spark",
    severity: "Critical",
    description:
      "WAM is the main dispatch tool for AS and QX. It brings together flight plans, weather, performance data and MEL information to produce the dispatch release. If WAM or any of its upstream feeds fails, flights can't be released.",
    vendor: "Jeppesen",
    poc: "Ryan Wilkins, 206-972-0228",
    phone: "1-800-732-2800",
    email: "opssupport@jeppesen.com",
    team: "ITS COG Flight Operations",
    logoVariant: "logo-wam"
  },
  "jetplan": {
    shortName: "JetPlan",
    category: "Flight Ops / Dispatch: flight plan calculation",
    status: "Active",
    sla: "15 min",
    slaIcon: "phone",
    severity: "Critical",
    description:
      "JetPlan is the engine that calculates every AS and QX flight plan. If it goes down, WAM can't produce flight plans or releases, ATC filing stops, and flights can't be dispatched. That is why it is on the Ground Stop list.",
    vendor: "Jeppesen",
    poc: "Ryan Wilkins, 206-972-0228",
    phone: "1-800-732-2800",
    email: "opssupport@jeppesen.com",
    team: "ITS COG Flight Operations",
    logoVariant: "logo-jp"
  },
  "Smart4Aviation (S4A)": {
    shortName: "S4A SmartSuite",
    category: "Airport Ops / Flight Ops: weight and balance and load planning",
    status: "Active",
    sla: "15 min",
    slaIcon: "spark",
    severity: "Critical",
    description:
      "S4A pulls in flight, passenger, bag, cargo, crew, fuel and MEL data to automate weight and balance. It checks the actual load and sends the Load Closeout to the aircraft. If S4A is down, aircraft can't be safely prepared to depart on time.",
    vendor: "Smart4Aviation",
    poc: "Ryan Wilkins, 206-972-0228",
    phone: "+48 12 379 3737",
    email: "support@smart4aviation.aero",
    team: "ITS Flight Operations",
    logoVariant: "logo-s4a"
  },
  "jcte": {
    shortName: "JCTE",
    category: "Crew: crew scheduling and tracking for about 10,100 crew members",
    status: "Active",
    sla: "15 min",
    slaIcon: "spark",
    severity: "Critical",
    description:
      "JCTE is the system of record for Alaska crew scheduling and tracking. If it goes down, schedulers can't manage crews and crew members can't see schedules or check in. When it causes flight delays, it is treated as Sev 1.",
    vendor: "Jeppesen",
    poc: "Sue Rawlings, 253-341-1173",
    phone: "+1-303-328-6412",
    email: "opssupport@jeppesen.com",
    team: "ITS JCTE System Admins",
    logoVariant: "logo-jcte"
  },
  "airtrack": {
    shortName: "AirTrak",
    category: "Flight Ops: real-time control of the operation (aircraft assignments, Irrops, flight status)",
    status: "Active",
    sla: "15 min",
    slaIcon: "phone",
    severity: "Critical",
    description:
      "AirTrak is the AOC's real-time control tool for AS and QX. Teams use it for aircraft swaps, aircraft movement, Irrops and watching the whole system. If it goes down, the AOC loses real-time visibility and can't take action across the network.",
    vendor: "In-house",
    poc: "GK Maganty, 206-227-1134",
    phone: "206-227-1134",
    email: "Team.Maganty@alaskaair.com",
    team: "ITS Ops 360 AirtrAK",
    logoVariant: "logo-airtrack"
  },
  "pilot-briefing": {
    shortName: "Pilot Briefing",
    category: "Flight Ops: briefing packets (flight paperwork). Printing them before takeoff is an FAA requirement",
    status: "Active",
    sla: "15 min",
    slaIcon: "phone",
    severity: "Critical",
    description:
      "Pilot Briefing produces the FAA-required briefing packet for every flight. If a major part fails, the whole system goes down. If a minor part fails, packets come out incomplete or won't print.",
    vendor: "In-house",
    poc: "Ryan Wilkins, 206-972-0228",
    phone: "206-972-0228",
    email: "ITS.Service.Desk@alaskaair.com",
    team: "ITS COG Flight Operations",
    logoVariant: "logo-pb"
  },
  "aircraft-maintenance": {
    shortName: "Aircraft Maintenance Status (AMS)",
    category: "Maintenance & Engineering: tracks aircraft from removal from service to return to service",
    status: "Active",
    sla: "15 min",
    slaIcon: "spark",
    severity: "High",
    description:
      "AMS is the system of record for which aircraft are out of service. When AMS and Informix fall out of sync, other systems show the wrong OTS status, including AirTrak.",
    vendor: "In-house",
    poc: "Brad Dufour, +1 614-779-1493",
    phone: "+1 614-779-1493",
    email: "Jerred.Slavata@alaskaair.com",
    team: "ITS COG M&E App Support",
    logoVariant: "logo-am"
  },
  "aims": {
    shortName: "AIMS (Horizon Crew Scheduling)",
    category: "Crew: scheduling pilots and flight attendants (FAs) for Horizon, including bids and trip trades. QX only",
    status: "Active",
    sla: "15 min",
    slaIcon: "phone",
    severity: "Critical",
    description:
      "AIMS is the system of record for Horizon crew schedules. If it goes down, QX schedulers can't manage crews, and crew data stops flowing to VisOps, AirTrak and payroll.",
    vendor: "AIMS",
    poc: "Adam Kalb, 425-578-4570",
    phone: "+30 210 940 2300",
    email: "aims@aims.aero",
    team: "ITS COG Crew Support",
    logoVariant: "logo-aims"
  }
};

function renderAppLogoSvg(key) {
  switch (key) {
    case "wam":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case "jetplan":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      );
    case "Smart4Aviation (S4A)":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "jcte":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="m9 10 1.5 1.5L14 8" />
          <path d="M9 15h6" />
        </svg>
      );
    case "airtrack":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "pilot-briefing":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="8" r="4" />
          <path d="M5 20c0-3.87 3.13-7 7-7s7 3.13 7 7" />
        </svg>
      );
    case "aircraft-maintenance":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "aims":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 19v-5M12 19V9M18 19V5" />
        </svg>
      );
    case "acars":
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 7 9 3 5 7l4 4" />
          <path d="m17 11 4 4-4 4-4-4" />
          <path d="m8 12 4 4 6-6-4-4Z" />
          <path d="m16 8 3-3" />
          <path d="M9 21a6 6 0 0 0-6-6" />
        </svg>
      );
  }
}

function renderSlaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v2.5a1.8 1.8 0 0 1-1.96 1.8 17.8 17.8 0 0 1-7.76-2.76 17.5 17.5 0 0 1-5.4-5.4A17.8 17.8 0 0 1 4.12 5.26 1.8 1.8 0 0 1 5.91 3.3h2.5a1.8 1.8 0 0 1 1.8 1.55c.11.85.32 1.68.62 2.48a1.8 1.8 0 0 1-.41 1.9l-1.06 1.06a14.4 14.4 0 0 0 5.4 5.4l1.06-1.06a1.8 1.8 0 0 1 1.9-.41c.8.3 1.63.51 2.48.62A1.8 1.8 0 0 1 22 16.92z" />
    </svg>
  );
}

function isVendor24x7(vendor) {
  if (!vendor) return false;
  const rawAvail = String(
    vendor.supportAvailability ||
      vendor.supportSchedule ||
      vendor.supportHours ||
      ""
  ).trim();
  if (rawAvail && /^(?:business\s*hours|8\s*[x×]\s*5|9\s*-\s*5|none|no|n\/?a|disabled|inactive|offline)$/i.test(rawAvail)) {
    return false;
  }
  const statusRaw = String(vendor.status || vendor.portalStatus || "").trim();
  if (/^(?:inactive|disabled|retired|decommissioned|offline)$/i.test(statusRaw)) {
    return false;
  }
  return true;
}

function vendorStatusInfo(vendor) {
  const raw = String((vendor && (vendor.status || vendor.portalStatus)) || "").trim();
  const isInactive = /^(?:inactive|disabled|retired|decommissioned|offline)$/i.test(raw);
  return {
    label: isInactive ? "Inactive" : "Active",
    className: isInactive ? "inactive" : "active"
  };
}

function usableCardValue(value) {
  const text = String(value || "").replace(/\s*[—–]\s*/g, " - ").trim();
  return text && !/^(?:n\/?a|tbd|none|no)$/i.test(text) ? text : "";
}

function extractPhoneFromSegment(segment) {
  const text = String(segment || "");
  const phoneRegex = /(?:\+\s*\d{1,4}[\s.-]*|\b\d{1,4}[\s.-]+)?(?:\(\d{1,5}\)[\s.-]*)?\d+(?:[\s.-]+\d+)*(?:\s*(?:PIN|ext\.?|x)\s*\d+)?/gi;
  let match;
  while ((match = phoneRegex.exec(text)) !== null) {
    const candidate = match[0].trim();
    const coreDigits = candidate.replace(/(?:PIN|ext\.?|x)\s*\d+$/i, "").replace(/\D/g, "");
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

function primaryCardPhone(value) {
  if (Array.isArray(value)) {
    const primaryObj = value.find(
      item => item && typeof item === "object" && (item.primary || item.isPrimary)
    );
    if (primaryObj) {
      const extracted = primaryCardPhone(primaryObj.phone || primaryObj.number || primaryObj.value || "");
      if (extracted) return extracted;
    }
    return primaryCardPhone(
      value.map(item => (item && typeof item === "object" ? item.phone || item.number || item.value || "" : String(item ?? ""))).join("\n")
    );
  }
  const raw = String(value ?? "").replace(/\r\n/g, "\n");
  if (!usableCardValue(raw)) return "";

  const lines = raw.split("\n").map(l => l.trim()).filter(Boolean);
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

function extractEmailFromSegment(segment) {
  const match = String(segment || "").match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0].trim() : "";
}

function primaryCardEmail(value) {
  if (Array.isArray(value)) {
    const primaryObj = value.find(
      item => item && typeof item === "object" && (item.primary || item.isPrimary)
    );
    if (primaryObj) {
      const extracted = primaryCardEmail(primaryObj.email || primaryObj.address || primaryObj.value || "");
      if (extracted) return extracted;
    }
    return primaryCardEmail(
      value.map(item => (item && typeof item === "object" ? item.email || item.address || item.value || "" : String(item ?? ""))).join("\n")
    );
  }
  const raw = String(value ?? "").replace(/\r\n/g, "\n");
  if (!usableCardValue(raw)) return "";

  const lines = raw.split("\n").map(l => l.trim()).filter(Boolean);
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

function contactTarget(value, type) {
  const text = Array.isArray(value) ? value.join("\n") : String(value || "");
  if (type === "email") {
    const addresses = [...new Set(text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || [])];
    return addresses.length ? `mailto:${addresses.join(",")}` : "";
  }
  const numbers = text.match(/\+?\d[\d\s().-]{5,}\d/g) || [];
  const phone = numbers.map(n => n.trim()).find(n => n.replace(/\D/g, "").length >= 7);
  return phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : "";
}

function initials(value) {
  const text = String(value || "VENDOR").trim();
  const words = text.replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  if (!words.length) return "V";
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function vendorLogo(company, vendor) {
  const id = String((vendor && vendor.id) || "").toLocaleLowerCase().trim();
  const identity = String((vendor && (vendor.vendorCompanyName || vendor.company || vendor.systemName || vendor.id)) || company || "Vendor")
    .toLocaleLowerCase()
    .trim();
  const sys = String((vendor && vendor.systemName) || "").toLocaleLowerCase().trim();

  if (id === "accelya" || identity === "accelya" || identity.includes("accelya") || sys.includes("accelya")) {
    return { src: "public/vendors/accelya.jpg", alt: `${company} logo`, isCustom: true };
  }
  if (id === "avtec" || identity === "avtec" || identity.includes("avtec")) {
    return { src: "public/vendors/avtec.jpg", alt: `${company} logo`, isCustom: true };
  }
  if (id === "aerodata" || id === "aircraft-performance-aerodata" || identity === "aerodata" || identity.includes("aerodata")) {
    return { src: "public/vendors/aerodata.jpg", alt: `${company} logo`, isCustom: true };
  }
  if (id === "arinc" || identity === "arinc" || identity.includes("arinc")) {
    return { src: "public/vendors/arinc.png", alt: `${company} logo`, isCustom: true };
  }
  if (id === "aims" || id === "aims-vendor" || identity === "aims" || identity.includes("aims")) {
    return { src: "public/vendors/aims.jpg", alt: `${company} logo`, isCustom: true };
  }
  if (id === "alvaria" || identity === "alvaria" || identity.includes("alvaria")) {
    return { src: "public/vendors/alvaria.jpg", alt: `${company} logo`, isCustom: true };
  }
  if (id === "boeing" || identity === "boeing" || identity.includes("boeing") || sys.includes("boeing")) {
    return { src: "public/vendors/boeing.png", alt: `${company} logo`, isCustom: true };
  }
  if (id === "cargo-spot" || sys === "cargo spot" || identity.includes("champ") || identity.includes("cargo spot")) {
    return { src: "public/vendors/cargo-spot.png", alt: `${company} logo`, isCustom: true };
  }
  if (id === "aircraft-performance" || identity === "dynamic source" || identity.startsWith("dynamic source")) {
    return { src: "public/vendors/dynamic-source.png", alt: `${company} logo`, isCustom: true };
  }
  if (id === "five9" || identity === "five9" || identity.includes("five9") || sys.includes("five9")) {
    return { src: "public/vendors/five9.png", alt: `${company} logo`, isCustom: true };
  }
  if (id === "icargo" || identity.includes("ibs software") || sys.includes("icargo")) {
    return { src: "public/vendors/ibs-software.jpg", alt: `${company} logo`, isCustom: true };
  }
  if (id === "real-time-gates" || id === "inform" || identity === "inform" || identity.includes("inform") || sys.includes("real time gates")) {
    return { src: "public/vendors/inform.jpg", alt: `${company} logo`, isCustom: true };
  }
  if (id === "jeppesen-flight-planning" || id === "jcte" || id === "jcte-crew" || identity === "jeppesen" || identity.includes("jeppesen")) {
    return { src: "public/vendors/jeppesen.png", alt: `${company} logo`, isCustom: true };
  }
  if (id === "shopping-service" || identity.includes("microsoft") || identity.includes("azure")) {
    return { src: "public/vendors/microsoft.png", alt: `${company} logo`, isCustom: true };
  }
  if (id === "ncr" || identity === "ncr" || identity.includes("ncr")) {
    return { src: "public/vendors/ncr.png", alt: `${company} logo`, isCustom: true };
  }
  if (
    id === "information-display" ||
    id === "nettracer" ||
    identity === "nettracer" ||
    identity.includes("nettracer") ||
    sys.includes("nettracer") ||
    sys.includes("information display")
  ) {
    return { src: "public/vendors/nettracer.png", alt: `${company} logo`, isCustom: true };
  }
  if (id === "solar-mileage" || id === "peoplesoft-financials" || id === "peoplesoft-hcm" || identity.includes("oracle")) {
    return { src: "public/vendors/oracle.png", alt: `${company} logo`, isCustom: true };
  }
  if (
    id === "sabre" ||
    id === "image-reservations" ||
    id === "csa-mobile-boarding" ||
    id === "csa-mobile-lobby" ||
    id === "rain" ||
    identity === "sabre" ||
    identity.includes("sabre")
  ) {
    return { src: "public/vendors/sabre.png", alt: `${company} logo`, isCustom: true };
  }
  if (id === "sita" || identity === "sita" || identity.includes("sita")) {
    return { src: "public/vendors/sita.png", alt: `${company} logo`, isCustom: true };
  }
  if (id === "smart4aviation" || identity.includes("smart4aviation") || sys.includes("smart4aviation")) {
    return { src: "public/vendors/smart4aviation.jpg", alt: `${company} logo`, isCustom: true };
  }
  if (id === "as-trax" || id === "qx-trax" || identity === "trax" || identity.includes("trax") || sys.includes("trax")) {
    return { src: "public/vendors/trax.jpg", alt: `${company} logo`, isCustom: true };
  }
  if (id === "ibm-weather" || identity.includes("weather company") || identity.startsWith("twc")) {
    return { src: "public/vendors/the-weather-company.webp", alt: `${company} logo`, isCustom: true };
  }
  if (id === "wsi-fusion" || id === "weather-feed" || identity.includes("wsi fusion") || sys.includes("wsi fusion") || identity.includes("fusion")) {
    return { src: "public/vendors/wsi-fusion.webp", alt: `${company} logo`, isCustom: true };
  }

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
  const mark = initials(company);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${palette.bgStart}"/><stop offset="100%" stop-color="${palette.bgEnd}"/></linearGradient></defs><rect width="96" height="96" rx="22" fill="url(#g)"/><text x="48" y="59" text-anchor="middle" font-family="'AS Circular',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif" font-size="33" font-weight="700" letter-spacing="-0.5" fill="#FFFFFF">${mark}</text></svg>`;
  return {
    src: `data:image/svg+xml,${encodeURIComponent(svg)}`,
    alt: `${company} monogram badge`,
    isCustom: false
  };
}

function renderFormattedPhone(phoneText) {
  if (!phoneText) {
    return <span className="vendor-contact-missing">Phone not listed</span>;
  }
  const parts = String(phoneText).split(/(\([^)]+\))/g);
  return parts.map((part, idx) =>
    part.startsWith("(") && part.endsWith(")") ? (
      <span key={idx} className="vendor-phone-note">
        {part}
      </span>
    ) : (
      <React.Fragment key={idx}>{part}</React.Fragment>
    )
  );
}

const read = (key, fallback) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : fallback;
  } catch {
    return fallback;
  }
};

const workbookVendors = (useBase = false) => {
  const rawVendors = useBase
    ? window.baseMasterData?.vendors || window.masterData?.vendors
    : window.masterData?.vendors;
  if (!Array.isArray(rawVendors)) return [];
  return rawVendors.map(vendor => ({
    id: `its-application-vendors-${vendor.sourceRow}`,
    vendorId: vendor.id || `its-application-vendors-${vendor.sourceRow}`,
    sourceRow: vendor.sourceRow,
    vendorDataVersion: 3,
    systemName: vendor.systemName || vendor.displayName || vendor.category || "",
    category: vendor.category || vendor.displaySubtitle || "",
    vendorCompanyName: vendor.vendor || vendor.company || vendor.displayName || "",
    status: vendor.status || "Active",
    supportAvailability: vendor.supportAvailability || "24x7",
    sla: vendor.sla || vendor.responseSla || vendor.response || "",
    website: vendor.website || vendor.portalUrl || "",
    lastUpdated: vendor.lastUpdated || vendor.updatedDate || "",
    pageTitle: vendor.pageTitle || "",
    pageSubtitle: vendor.pageSubtitle || "",
    prodOpsEscalationProcess: vendor.escalation || "",
    contactNumbers: vendor.phone || "",
    emailAddress: vendor.email || "",
    vendorPOC: vendor.vendorPoc || "",
    aagItsPOC: vendor.aagItsPoc || "",
    aagItsTeam: vendor.aagItsTeam || "",
    infoUpdatedDate: vendor.updatedDate || "",
    infoUpdatedBy: vendor.updatedBy || "",
    infoApprovedDate: vendor.approvedDate || "",
    infoApprovedBy: vendor.approvedBy || "",
    portalUrl: vendor.portalUrl || "",
    portalStatus: vendor.portalStatus || "",
    lastVerifiedDate: vendor.lastVerifiedDate || "",
    portalNotes: vendor.portalNotes || "",
    ...(vendor.adminEdited ? { adminEdited: true } : {}),
    ...(vendor.impactOverrides ? { impactOverrides: vendor.impactOverrides } : {})
  }));
};

function buildDefaultApplications() {
  const keys = window.groundStopApplicationKeys || Object.keys(CARD_PROFILES);
  const rawApps = window.masterData?.applications || {};
  const saved = read(STORAGE.applications, []);
  return keys.map(key => {
    const raw = rawApps[key] || Object.values(rawApps).find(a => a && (a.id === key || a.key === key)) || {};
    const profile = CARD_PROFILES[key] || {};
    const prior = saved.find(a => a && (a.key === key || a.id === key || (raw.id && a.id === raw.id))) || {};
    const isEdited = Boolean(prior.adminEdited);
    return {
      ...raw,
      ...prior,
      id: raw.id || prior.id || key,
      key,
      adminEdited: isEdited,
      shortName: isEdited ? (prior.shortName || prior.name || profile.shortName || raw.name || key) : (profile.shortName || raw.name || key),
      name: isEdited ? (prior.name || prior.shortName || raw.name || profile.shortName || key) : (profile.shortName || raw.name || key),
      category: isEdited ? (prior.category || raw.category || profile.category || "Operations") : (raw.category || profile.category || "Operations"),
      status: isEdited ? (prior.status || profile.status || "Active") : (profile.status || "Active"),
      response: isEdited ? (prior.response || prior.sla || profile.sla || "15 min") : (profile.sla || "15 min"),
      sla: isEdited ? (prior.sla || prior.response || profile.sla || "15 min") : (profile.sla || "15 min"),
      slaIcon: profile.slaIcon || "spark",
      logoVariant: profile.logoVariant || "logo-acars",
      severity: isEdited ? (prior.severity || raw.severity || profile.severity || "Critical") : (raw.severity || profile.severity || "Critical"),
      description: isEdited
        ? Array.isArray(prior.description)
          ? prior.description.join(" ")
          : prior.description || profile.description || ""
        : profile.description || (Array.isArray(raw.description) ? raw.description.join(" ") : raw.description) || "",
      vendor: isEdited ? (prior.vendor || profile.vendor || "NA") : (profile.vendor || usableCardValue(raw.vendor) || "NA"),
      aagPOC: isEdited ? (prior.aagPOC || profile.poc || "NA") : (profile.poc || usableCardValue(raw.aagPOC) || "NA"),
      phone: isEdited ? (prior.phone || profile.phone || "NA") : (profile.phone || usableCardValue(raw.phone) || "NA"),
      email: isEdited ? (prior.email || profile.email || "NA") : (profile.email || usableCardValue(raw.email) || "NA"),
      aagTeam: isEdited
        ? prior.aagTeam || profile.team || "ITS Flight Operations"
        : profile.team || usableCardValue(raw.aagTeam) || "ITS Flight Operations",
      ...(prior.impactOverrides || raw.impactOverrides ? { impactOverrides: prior.impactOverrides || raw.impactOverrides } : {})
    };
  });
}

function PasswordEditor({ onClose }) {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  function save(event) {
    event.preventDefault();
    if (current !== (localStorage.getItem(STORAGE.password) || "123456789")) {
      return setMessage("Current password is incorrect.");
    }
    if (next.length < 8) {
      return setMessage("New password must contain at least 8 characters.");
    }
    if (next !== confirm) {
      return setMessage("New passwords do not match.");
    }
    localStorage.setItem(STORAGE.password, next);
    onClose();
  }
  return (
    <div className="modal">
      <form className="editor password-editor" onSubmit={save}>
        <header>
          <div>
            <small>SECURITY</small>
            <h2>Change Password</h2>
          </div>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </header>
        <label>
          Current Password
          <input type="password" value={current} onChange={e => setCurrent(e.target.value)} required />
        </label>
        <label>
          New Password
          <input type="password" value={next} onChange={e => setNext(e.target.value)} required />
        </label>
        <label>
          Confirm New Password
          <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} required />
        </label>
        {message && <p className="error">{message}</p>}
        <footer>
          <button type="button" className="secondary" onClick={onClose}>
            Cancel
          </button>
          <button>Update Password</button>
        </footer>
      </form>
    </div>
  );
}

function AdminSidebar() {
  const [vendorsOpen, setVendorsOpen] = useState(false);

  function handleChevronClick(event) {
    event.preventDefault();
    event.stopPropagation();
    setVendorsOpen(prev => !prev);
  }

  return (
    <aside className="sidebar ias-sidebar" aria-label="Sidebar Navigation">
      <Link className="sidebar-brand" to="/" aria-label="Alaska Airlines home">
        <img className="sidebar-alaska-logo" src="public/alaska-logo-white.svg" alt="Alaska Airlines" />
      </Link>
      <nav className="sidebar-nav" aria-label="Primary navigation">
        <Link to="/" className="nav-item">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
            </svg>
          </span>
          <span>Home</span>
        </Link>

        <Link to="/ground-stops" className="nav-item">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="4" y="3" width="16" height="18" rx="2" />
              <path d="M8 8h8M8 12h8M8 16h5" />
            </svg>
          </span>
          <span>Ground Stop Apps</span>
        </Link>

        <div className={`nav-dropdown${vendorsOpen ? " is-open" : ""}`} data-nav-dropdown="vendors">
          <Link to="/vendors" className="nav-item nav-dropdown-toggle" aria-expanded={vendorsOpen ? "true" : "false"}>
            <span className="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <span>Vendors</span>
            <span className="nav-chevron" aria-hidden="true" onClick={handleChevronClick}>
              <svg viewBox="0 0 24 24">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </Link>
          <div className="nav-dropdown-menu" role="group" aria-label="Vendors submenu">
            <Link to="/vendor-case-status" className="nav-subitem">
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

        <Link to="/categories" className="nav-item">
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

        <Link to="/favorites" className="nav-item">
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z" />
            </svg>
          </span>
          <span>My Favorites</span>
        </Link>

        <Link to="/admin" className="nav-item active" aria-current="page">
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
        <div className="sidebar-quote">
          PEOPLE.
          <br />
          PLANES.
          <br />
          PARTNERS.
          <br />
          TOMORROW.
        </div>
        <small className="sidebar-copyright">
          Stronger operations
          <br />
          for a brighter tomorrow.
        </small>
      </div>
    </aside>
  );
}

function Metric({ value, label, detail, icon }) {
  return (
    <article className="metric metric-neutral">
      <div className="metric-icon" aria-hidden="true">
        {icon}
      </div>
      <div className="metric-copy">
        <small>{label}</small>
        <strong>{String(value).padStart(2, "0")}</strong>
        <span>{detail}</span>
      </div>
    </article>
  );
}

function OperationModule({ icon, title, description, href, tone = "blue" }) {
  function handleJump(e) {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }
  return (
    <a className={`operation-module operation-module-${tone}`} href={href} onClick={handleJump}>
      <span className="module-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="module-copy">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <b className="module-chevron" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </b>
    </a>
  );
}

export default function AdminLayout() {
  const navigate = useNavigate();
  const {
    favoriteAppKeys,
    favoriteVendorIds: favoriteIds,
    toggleAppFavorite: ctxToggleAppFavorite,
    toggleVendorFavorite: ctxToggleVendorFavorite,
    saveMasterData
  } = useMasterData();

  const [email, setEmail] = useState(() => getAdminSession().email);
  const [vendors, setVendors] = useState(() => {
    const saved = read(STORAGE.vendors, []);
    const source = workbookVendors();
    if (!saved.length) return source;
    return source.map(record => {
      const prior = saved.find(
        vendor =>
          (vendor.id && vendor.id === record.id) ||
          (vendor.sourceRow != null && Number(vendor.sourceRow) === Number(record.sourceRow))
      );
      if (!prior) return record;
      if (prior.vendorDataVersion !== 3 && (Number(record.sourceRow) === 3 || Number(record.sourceRow) === 9)) {
        return record;
      }
      if (prior.vendorDataVersion === 3 && !Array.isArray(prior.editedFields)) {
        return { ...record, ...prior, id: record.id, vendorId: record.vendorId, sourceRow: record.sourceRow, vendorDataVersion: 3 };
      }
      if (Array.isArray(prior.editedFields)) {
        const mergedEdited = prior.editedFields.reduce(
          (merged, field) => (fields.includes(field) ? { ...merged, [field]: prior[field] || "" } : merged),
          record
        );
        return {
          ...mergedEdited,
          vendorDataVersion: 3,
          ...(prior.supportPortalUrl ? { supportPortalUrl: prior.supportPortalUrl } : {}),
          ...(prior.caseStatusUrl ? { caseStatusUrl: prior.caseStatusUrl } : {}),
          ...(prior.portalUrl ? { portalUrl: prior.portalUrl } : {}),
          ...(prior.portalStatus ? { portalStatus: prior.portalStatus } : {}),
          ...(prior.lastVerifiedDate ? { lastVerifiedDate: prior.lastVerifiedDate } : {}),
          ...(prior.portalVerifiedAt ? { portalVerifiedAt: prior.portalVerifiedAt } : {}),
          ...(prior.portalNotes ? { portalNotes: prior.portalNotes } : {}),
          ...(Array.isArray(prior.associatedApplications) ? { associatedApplications: prior.associatedApplications } : {}),
          ...(prior.adminEdited ? { adminEdited: true } : {}),
          ...(prior.impactOverrides ? { impactOverrides: prior.impactOverrides } : {}),
          editedFields: prior.editedFields
        };
      }
      return { ...record, ...prior, id: record.id, vendorId: record.vendorId, sourceRow: record.sourceRow, vendorDataVersion: 3 };
    });
  });
  const [applications, setApplications] = useState(buildDefaultApplications);
  const [history, setHistory] = useState(() => read(STORAGE.history, []));
  const [appQuery, setAppQuery] = useState("");
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(null);
  const [editingApplication, setEditingApplication] = useState(null);
  const [changingPassword, setChangingPassword] = useState(false);

  useEffect(() => {
    document.body.className = "admin-page";
    document.title = "AS | Control Panel";
  }, []);

  function toggleVendorFavorite(vendor, event) {
    if (event) event.stopPropagation();
    const key = vendor.id || String(vendor.sourceRow);
    ctxToggleVendorFavorite(key);
  }

  function toggleAppFavorite(appKey, event) {
    if (event) event.stopPropagation();
    ctxToggleAppFavorite(appKey);
  }

  useEffect(() => {
    const logout = () => {
      localStorage.removeItem(STORAGE.authenticated);
      localStorage.removeItem(STORAGE.email);
    };
    window.addEventListener("pagehide", logout);
    return () => window.removeEventListener("pagehide", logout);
  }, []);

  useEffect(() => {
    const baseVendors = workbookVendors(true);
    localStorage.setItem(
      STORAGE.vendors,
      JSON.stringify(
        vendors.map(v => {
          const base = baseVendors.find(x => x.sourceRow === v.sourceRow) || {};
          const priorEdited = Array.isArray(v.editedFields) ? v.editedFields : [];
          const changed = fields.filter(key => (v[key] || "") !== (base[key] || "") || priorEdited.includes(key));
          return { ...v, editedFields: changed };
        })
      )
    );
    if (typeof window.syncMasterDataOverrides === "function") window.syncMasterDataOverrides();
  }, [vendors]);

  useEffect(() => {
    localStorage.setItem(STORAGE.applications, JSON.stringify(applications));
    if (typeof window.syncMasterDataOverrides === "function") window.syncMasterDataOverrides();
  }, [applications]);

  const filteredApplications = useMemo(
    () =>
      applications.filter(
        app =>
          !appQuery.trim() ||
          Object.values(app).join(" ").toLowerCase().includes(appQuery.trim().toLowerCase())
      ),
    [applications, appQuery]
  );

  const results = useMemo(
    () => vendors.filter(v => Object.values(v).join(" ").toLowerCase().includes(query.toLowerCase())),
    [vendors, query]
  );

  function saveVendor(draft) {
    const currentVendor = vendors.find(x => x.id === draft.id) || {};
    const base = workbookVendors(true).find(x => x.sourceRow === draft.sourceRow) || {};
    const newlyChanged = fields.filter(
      key => (draft[key] || "") !== (currentVendor[key] || "") || (draft[key] || "") !== (base[key] || "")
    );
    const editedFields = Array.from(new Set([...(draft.editedFields || []), ...newlyChanged]));
    const updatedDraft = { ...draft, adminEdited: true, editedFields };
    const nextVendors = vendors.map(v => (v.id === draft.id ? updatedDraft : v));
    setVendors(nextVendors);
    const item = {
      action: "Vendor updated",
      details: `${draft.vendorCompanyName || draft.systemName || "Vendor"} information was updated`,
      timestamp: new Date().toLocaleString()
    };
    const next = [item, ...history].slice(0, 50);
    setHistory(next);
    saveMasterData({ vendors: nextVendors, historyEntries: next, historyItem: item });
    setEditing(null);
  }

  function saveApplication(draft) {
    const updatedDraft = { ...draft, adminEdited: true };
    const nextApplications = applications.map(app => (app.id === draft.id ? updatedDraft : app));
    setApplications(nextApplications);
    const item = {
      action: "Application updated",
      details: `${draft.name || draft.shortName || "Application"} information was updated`,
      timestamp: new Date().toLocaleString()
    };
    const next = [item, ...history].slice(0, 50);
    setHistory(next);
    saveMasterData({ applications: nextApplications, historyEntries: next, historyItem: item });
    setEditingApplication(null);
  }

  if (!email || !getAdminSession().isAuthorizedAdmin) {
    return <LoginScreen onLogin={setEmail} />;
  }

  return (
    <main className="app">
      <div className="admin-mobile-nav"><Sidebar /></div>
      <AdminSidebar />
      <section className="dashboard">
        <header className="command-header">
          <div className="header-left">
            <div className="header-brand" aria-label="Alaska Airlines">
              <img className="header-brand-emblem" src="public/sidebar-logo.png" alt="" aria-hidden="true" />
              <div className="header-brand-text">
                <img className="header-brand-wordmark" src="public/alaska-logo-white.svg" alt="Alaska" />
                <span>AIRLINES</span>
              </div>
            </div>
            <span className="header-divider" aria-hidden="true"></span>
            <div className="header-copy">
              <small>ITS PRODUCTION OPERATIONS</small>
              <h1>Admin Control Center</h1>
              <p>Manage applications, vendors and operational information</p>
            </div>
          </div>
          <div className="header-actions">
            <button className="header-button change-password-btn" onClick={() => setChangingPassword(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="7.5" cy="15.5" r="5.5" />
                <path d="m21 2-9.6 9.6" />
                <path d="m15.5 7.5 3 3L22 7l-3-3" />
              </svg>
              <span>Change Password</span>
            </button>
            <button
              className="header-button logout"
              onClick={() => {
                localStorage.removeItem(STORAGE.authenticated);
                localStorage.removeItem(STORAGE.email);
                setEmail(null);
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </header>
        <section className="metrics">
          <Metric
            value={applications.length}
            label="APPLICATIONS"
            detail="Active operational applications"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
              </svg>
            }
          />
          <Metric
            value={vendors.length}
            label="VENDOR RECORDS"
            detail="Configured vendor contacts"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
          <Metric
            value={history.length}
            label="CHANGES"
            detail="Changes pending review"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                <path d="M16 16h5v5" />
              </svg>
            }
          />
        </section>
        <section className="section-block operations-block">
          <div className="section-heading">
            <div>
              <small>CONTROL ROOM</small>
              <h2>Operations Overview</h2>
            </div>
            <span>ADMINISTRATION</span>
          </div>
          <div className="module-grid">
            <OperationModule
              tone="blue"
              href="#applications"
              title="Application Management"
              description="Configure and update systems"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1.8" />
                  <rect x="14" y="3" width="7" height="7" rx="1.8" />
                  <rect x="3" y="14" width="7" height="7" rx="1.8" />
                  <rect x="14" y="14" width="7" height="7" rx="1.8" />
                </svg>
              }
            />
            <OperationModule
              tone="purple"
              href="#vendors"
              title="Vendor Management"
              description="Maintain vendor contacts"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
            <OperationModule
              tone="green"
              href="#activity"
              title="Record Changes"
              description="Track administrative activity"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M12 7v5l3 2" />
                </svg>
              }
            />
            <OperationModule
              tone="amber"
              href="#admin-tools"
              title="Administration Tools"
              description="User access and system controls"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              }
            />
          </div>
        </section>
        <section className="section-block" id="applications">
          <div className="service-register-bar">
            <div className="service-register-left">
              <span className="service-register-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="10" width="3.5" height="10" rx="1" />
                  <rect x="10.25" y="5" width="3.5" height="15" rx="1" />
                  <rect x="16.5" y="13" width="3.5" height="7" rx="1" />
                </svg>
              </span>
              <div className="service-register-title">
                <small>LIVE SERVICE REGISTER</small>
                <h2>Application Status</h2>
              </div>
            </div>
            <label className="service-register-search" aria-label="Search applications">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7.5" />
                <path d="m20 20-3.8-3.8" />
              </svg>
              <input
                type="search"
                placeholder="Search applications, vendors..."
                value={appQuery}
                onChange={e => setAppQuery(e.target.value)}
              />
            </label>
            <div className="service-register-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 12 12 17 22 12" />
                <polyline points="2 17 12 22 22 17" />
              </svg>
              <strong>{filteredApplications.length} SYSTEMS</strong>
            </div>
          </div>
          <div className="ground-stop-grid">
            {filteredApplications.map(app => {
              const appKey = app.key || app.id || "acars";
              const profile = CARD_PROFILES[appKey] || {};
              const title = app.shortName || app.name || profile.shortName || appKey;
              const category = app.category || profile.category || "Operations";
              const shortCategory = String(category).split(":")[0].trim() || category;
              const rawSla = String(app.response || app.sla || profile.sla || "15 min").trim();
              const slaLabel =
                (rawSla && !/not\s*verified|tbd|n\/?a|none/i.test(rawSla)
                  ? rawSla.replace(/\bminutes\b/gi, "min")
                  : profile.sla) || "15 min";
              const description = Array.isArray(app.description)
                ? app.description.join(" ")
                : app.description || profile.description || app.function || "";
              const vendor = usableCardValue(app.vendor) || usableCardValue(profile.vendor) || "Not available";
              const poc = usableCardValue(app.aagPOC) || usableCardValue(profile.poc) || "Not available";
              const phone = usableCardValue(app.phone) || usableCardValue(profile.phone) || "Not available";
              const emailAddr = usableCardValue(app.email) || usableCardValue(profile.email) || "Not available";
              const team = usableCardValue(app.aagTeam) || usableCardValue(profile.team) || "ITS Flight Operations";
              const logoVariant = app.logoVariant || profile.logoVariant || "logo-acars";
              const slaIcon = app.slaIcon || profile.slaIcon || "spark";
              const phoneMatch = String(phone).match(/\+?\d[\d\s().-]{5,}\d/);
              const phoneDigits = phoneMatch ? phoneMatch[0].replace(/[^\d+]/g, "") : "";
              const phoneHref = phoneDigits.replace(/\D/g, "").length >= 7 ? `tel:${phoneDigits}` : "";
              const emailMatches = String(emailAddr).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || [];
              const emailHref = emailMatches.length ? `mailto:${[...new Set(emailMatches)].join(",")}` : "";
              const isFav = favoriteAppKeys.includes(appKey);
              const rawCardSeverity = String(
                app.severity || profile.severity || app.criticality || "Critical"
              ).trim();
              const isHighCardSeverity =
                /high|sev\s*2/i.test(rawCardSeverity) && !/crit|sev\s*1/i.test(rawCardSeverity);
              const cardSeverityLabel = isHighCardSeverity ? "High" : "Critical";
              const cardSeverityClass = isHighCardSeverity ? "severity-high" : "severity-critical";

              return (
                <article
                  className="ground-stop-card"
                  data-app-card-key={appKey}
                  data-card-accent={logoVariant}
                  key={app.id}
                  onClick={() => setEditingApplication(app)}
                >
                  <header className="gs-card-header">
                    <div className="gs-card-identity">
                      <div className={`gs-card-logo ${logoVariant}`} aria-hidden="true">
                        {renderAppLogoSvg(appKey)}
                      </div>
                      <span className="gs-header-divider" aria-hidden="true"></span>
                      <div className="gs-card-titles">
                        <h2 title={app.name || title}>{title}</h2>
                        <span className="gs-category-pill" title={category}>
                          {shortCategory}
                        </span>
                      </div>
                    </div>
                    <div className="gs-card-badges">
                      <div className="gs-card-status-stack">
                        <span
                          className={`gs-criticality-pill ${cardSeverityClass}`}
                          title={`Criticality: ${cardSeverityLabel}`}
                        >
                          <i aria-hidden="true"></i>
                          <span>{cardSeverityLabel}</span>
                        </span>
                        <span className="gs-sla-pill" title={`SLA: ${slaLabel}`}>
                          {renderSlaIcon(slaIcon)}
                          <span>SLA: {slaLabel}</span>
                        </span>
                      </div>
                      <button
                        type="button"
                        className={`gs-card-favorite${isFav ? " active" : ""}`}
                        aria-label={isFav ? "Remove application from favorites" : "Add application to favorites"}
                        aria-pressed={isFav ? "true" : "false"}
                        title={isFav ? "Remove from Favorites" : "Add to Favorites"}
                        onClick={e => toggleAppFavorite(appKey, e)}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9L12 2.5z" />
                        </svg>
                      </button>
                    </div>
                  </header>

                  <p className="gs-card-description application-description" title={description}>
                    {String(description || "").replace(/\s+/g, " ").trim()}
                  </p>

                  <div className="gs-card-contact-list">
                    <div className="gs-contact-row gs-contact-row-vendor">
                      <div className="gs-contact-row-label">
                        <span className="gs-contact-icon gs-contact-icon-vendor" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="12" height="18" rx="1.5" />
                            <path d="M15 9h4a2 2 0 0 1 2 2v10H15" />
                            <path d="M7 7h.01M11 7h.01M7 11h.01M11 11h.01M7 15h.01M11 15h.01" />
                          </svg>
                        </span>
                        <span>Vendor / Provider</span>
                      </div>
                      <span className="gs-contact-row-value" title={vendor}>
                        {vendor}
                      </span>
                    </div>

                    <div className="gs-contact-row gs-contact-row-poc">
                      <div className="gs-contact-row-label">
                        <span className="gs-contact-icon gs-contact-icon-poc" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </span>
                        <span>ITS POC</span>
                      </div>
                      <span className="gs-contact-row-value" title={poc}>
                        {poc}
                      </span>
                    </div>

                    <div className="gs-contact-row gs-contact-row-phone">
                      <div className="gs-contact-row-label">
                        <span className="gs-contact-icon gs-contact-icon-phone" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </span>
                        <span>Phone</span>
                      </div>
                      {phoneHref ? (
                        <a
                          href={phoneHref}
                          className="gs-contact-row-value gs-contact-phone"
                          title={`Call ${phone}`}
                          onClick={e => e.stopPropagation()}
                        >
                          {phone}
                        </a>
                      ) : (
                        <span className="gs-contact-row-value gs-contact-phone" title={phone}>
                          {phone}
                        </span>
                      )}
                    </div>

                    <div className="gs-contact-row gs-contact-row-email">
                      <div className="gs-contact-row-label">
                        <span className="gs-contact-icon gs-contact-icon-email" aria-hidden="true">
                          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </span>
                        <span>Email</span>
                      </div>
                      {emailHref ? (
                        <a
                          href={emailHref}
                          className="gs-contact-row-value gs-contact-email"
                          title={`Email ${emailAddr}`}
                          onClick={e => e.stopPropagation()}
                        >
                          {emailAddr}
                        </a>
                      ) : (
                        <span className="gs-contact-row-value gs-contact-email-plain" title={emailAddr}>
                          {emailAddr}
                        </span>
                      )}
                    </div>
                  </div>

                  <footer className="gs-card-footer">
                    <div className="gs-card-team" title={`Responsible Team: ${team}`}>
                      <span className="gs-team-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </span>
                      <span>{team}</span>
                    </div>
                    <div className="gs-card-actions">
                      <button
                        type="button"
                        className="ground-stop-details-button gs-admin-view-btn"
                        onClick={e => {
                          e.stopPropagation();
                          navigate(`/ground-stops?application=${encodeURIComponent(appKey)}`);
                        }}
                      >
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        <span>View Details</span>
                      </button>
                      <button
                        type="button"
                        className="ground-stop-details-button gs-admin-edit-btn"
                        onClick={e => {
                          e.stopPropagation();
                          setEditingApplication(app);
                        }}
                      >
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                        </svg>
                        <span>Edit</span>
                      </button>
                    </div>
                  </footer>
                </article>
              );
            })}
          </div>
        </section>
        <section className="section-block" id="vendors">
          <div className="service-register-bar">
            <div className="service-register-left">
              <span className="service-register-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <div className="service-register-title">
                <small>PARTNER DIRECTORY</small>
                <h2>Vendor Management</h2>
              </div>
            </div>
            <label className="service-register-search" aria-label="Search vendors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7.5" />
                <path d="m20 20-3.8-3.8" />
              </svg>
              <input
                type="search"
                placeholder="Search vendors, systems, contacts..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </label>
            <div className="service-register-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <strong>{results.length} RECORDS</strong>
            </div>
          </div>
          <div className="vendor-grid">
            {results.map(v => {
              const company = usableCardValue(v.vendorCompanyName) || usableCardValue(v.systemName) || "Vendor";
              const systemLabel = usableCardValue(v.systemName) || "";
              const logo = vendorLogo(company, v);
              const categoryLabel = usableCardValue(v.category)
                ? String(v.category).split("•")[0].replace(/\s+/g, " ").trim()
                : "Operations Partner";
              const rawContact = usableCardValue(v.aagItsPOC) || usableCardValue(v.vendorPOC);
              const primaryContact = rawContact
                ? rawContact
                    .split(/\r?\n/)[0]
                    .replace(/^(?:vendor\s*reps?\s*:?|primary\s*contact\s*:?)\s*/i, "")
                    .trim()
                : "";
              const phone = primaryCardPhone(v.contactNumbers);
              const emailAddr = primaryCardEmail(v.emailAddress);
              const cardPhoneTarget = contactTarget(phone, "phone");
              const cardEmailTarget = contactTarget(emailAddr, "email");
              const team = usableCardValue(v.aagItsTeam) || usableCardValue(v.category) || "Department not listed";
              const vendorKey = v.id || String(v.sourceRow);
              const isFav = favoriteIds.includes(vendorKey);
              const is24x7 = isVendor24x7(v);
              const statusInfo = vendorStatusInfo(v);
              const rawSla = usableCardValue(v.sla) || usableCardValue(v.responseSla) || usableCardValue(v.response);
              const slaLabel = rawSla
                ? /^sla:/i.test(rawSla)
                  ? rawSla.replace(/minutes/i, "min")
                  : `SLA: ${rawSla.replace(/minutes/i, "min")}`
                : "";

              return (
                <article
                  className="vendor-card"
                  key={v.id}
                  onClick={() => setEditing(v)}
                >
                  <header className="vendor-card-header">
                    <div className={`vendor-logo-frame ${logo.isCustom ? "has-custom-logo" : ""}`}>
                      <img className={`vendor-logo ${logo.isCustom ? "custom-logo" : ""}`} src={logo.src} alt={logo.alt} loading="lazy" />
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
                        <span className="vendor-category-pill vendor-card-description" title={categoryLabel}>
                          {categoryLabel}
                        </span>
                      </div>
                    </div>
                    <div className="vendor-card-badges" aria-label="Vendor status, availability, and favorite">
                      <div className="vendor-badge-stack">
                        <span className={`vendor-status-badge vendor-status-badge-status ${statusInfo.className}`}>
                          <i aria-hidden="true"></i>
                          {statusInfo.label}
                        </span>
                        {slaLabel && (
                          <span className="vendor-status-badge vendor-status-badge-availability" title={slaLabel}>
                            {renderSlaIcon()}
                            <span>{slaLabel}</span>
                          </span>
                        )}
                        {is24x7 && (
                          <span className="vendor-status-badge vendor-status-badge-availability" title="24×7 Support Available">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                              <circle cx="12" cy="12" r="8.5" />
                              <path d="M12 7v5l3.5 2" />
                            </svg>
                            24×7
                          </span>
                        )}
                      </div>
                      <button
                        className={`vendor-card-favorite ${isFav ? "active" : ""}`}
                        type="button"
                        data-vendor-id={vendorKey}
                        aria-label={isFav ? "Remove vendor from favorites" : "Add vendor to favorites"}
                        title={isFav ? "Remove from Favorites" : "Add to Favorites"}
                        onClick={e => toggleVendorFavorite(v, e)}
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9L12 2.5z" />
                        </svg>
                      </button>
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
                        <span className="vendor-contact-val vendor-contact-poc" title={rawContact}>
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
                      {cardPhoneTarget ? (
                        <a
                          className="vendor-contact-val vendor-contact-phone"
                          href={cardPhoneTarget}
                          title={phone || "Call vendor"}
                          onClick={e => e.stopPropagation()}
                        >
                          {renderFormattedPhone(phone)}
                        </a>
                      ) : (
                        <span className="vendor-contact-val vendor-contact-phone" title={phone || "Phone not listed"}>
                          {renderFormattedPhone(phone)}
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
                      {cardEmailTarget ? (
                        <a
                          className="vendor-contact-val vendor-contact-link"
                          href={cardEmailTarget}
                          title={emailAddr || "Email vendor"}
                          onClick={e => e.stopPropagation()}
                        >
                          {emailAddr || "Email vendor"}
                        </a>
                      ) : (
                        <span className="vendor-contact-val" title={emailAddr || "Email not listed"}>
                          {emailAddr ? emailAddr : <span className="vendor-contact-missing">Email not listed</span>}
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
                      onClick={e => {
                        e.stopPropagation();
                        navigate(`/vendors?vendor=${encodeURIComponent(v.vendorId || v.id || company)}`);
                      }}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      <span>View Details</span>
                      <svg className="vendor-btn-arrow" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </button>
                    <button
                      className="vendor-contact-btn vendor-btn-contact admin-vendor-edit-btn"
                      type="button"
                      onClick={e => {
                        e.stopPropagation();
                        setEditing(v);
                      }}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                      <span>Edit</span>
                      <svg className="vendor-btn-arrow" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </button>
                  </footer>
                </article>
              );
            })}
          </div>
        </section>
        <section className="section-block activity-block" id="activity">
          <div className="section-heading">
            <div>
              <small>AUDIT TRAIL</small>
              <h2>Recent Activity</h2>
            </div>
            <span>{history.length ? `${history.length} EVENTS` : "NO EVENTS"}</span>
          </div>
          {history.length ? (
            <div className="activity-list">
              {history.slice(0, 5).map((item, index) => (
                <div className="activity-item" key={`${item.timestamp}-${index}`}>
                  <i></i>
                  <div>
                    <strong>{item.action}</strong>
                    <small>{item.details}</small>
                  </div>
                  <time>{item.timestamp}</time>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-activity">
              <span>✓</span>
              <div>
                <strong>No recent administrative activity.</strong>
                <small>Vendor and application updates will appear here.</small>
              </div>
            </div>
          )}
        </section>
        <div id="admin-tools" className="dashboard-footer">
          <span>ALASKA AIRLINES · PRODUCTION OPERATIONS</span>
          <span>SECURE ADMINISTRATIVE ACCESS</span>
        </div>
      </section>
      {editing && <VendorEditor vendor={editing} onClose={() => setEditing(null)} onSave={saveVendor} />}
      {editingApplication && (
        <ApplicationEditor
          application={editingApplication}
          onClose={() => setEditingApplication(null)}
          onSave={saveApplication}
        />
      )}
      {changingPassword && <PasswordEditor onClose={() => setChangingPassword(false)} />}
    </main>
  );
}

