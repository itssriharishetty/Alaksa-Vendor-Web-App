import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useMasterData } from "../context/MasterDataContext";

const CARD_PROFILES = {
    "acars": {
        shortName: "ACARS",
        category: "Flight Operations / Aircraft Communications",
        status: "Active",
        sla: "15 min",
        slaIcon: "phone",
        severity: "Critical",
        description:
            "Processes Aircraft Communication Addressing and Reporting System (ACARS) messages transmitted through VHF or satellite (flight information, weather, aircraft telemetry, free text, OOOI flight times, performance data, and dispatch-release uplinks) in both air-to-ground and ground-to-air directions.",
        vendor: "SITA (AIRCOM) / ARINC (Aircraft Communications)",
        poc: "Ryan Wilkins, 206-972-0228",
        phone: "SITA: 1-866-247-2661, option 4 for AIRCOM Services. ARINC: 800-633-6882.",
        email: "Aircom.support@sitaonair.aero • AOChelpdesk@collins.com",
        team: "ITS Flight Operations / ITS COG Flight Operations",
        logoVariant: "logo-acars"
    },
    "wam": {
        shortName: "WAM",
        category: "Weather",
        status: "Active",
        sla: "15 min",
        slaIcon: "phone",
        severity: "Critical",
        description:
            "The weather data is provided by TWC/The Weather Company via their FlightFX Develop API. Internal AAG Systems interface with an AAG Web service that provides the weather data retured by the Flight FX Develop API.",
        vendor: "TWC / The Weather Company",
        poc: "Ryan Wilkins",
        phone: "+1 978-983-6325 (option 4)",
        email: "fieldandfacilities@weather.com",
        team: "ITS Flight Operations",
        logoVariant: "logo-wam",
        monogram: "WAM"
    },
    "jetplan": {
        shortName: "JetPlan",
        category: "Flight Planning",
        status: "Active",
        sla: "15 min",
        slaIcon: "phone",
        severity: "Critical",
        description:
            "JetPlan is an aviation flight planning application used to prepare operational flight plans. It helps dispatchers calculate efficient routes, fuel requirements, and aircraft performance.",
        vendor: "Jeppesen",
        poc: "Ryan Wilkins",
        phone: "1-800-732-2800",
        email: "OpsSupport@jeppesen.com",
        team: "ITS Flight Operations",
        logoVariant: "logo-jp",
        monogram: "JP"
    },
    "Smart4Aviation (S4A)": {
        shortName: "S4A",
        category: "Weight and Balance",
        status: "Active",
        sla: "15 min",
        slaIcon: "phone",
        severity: "High",
        description:
            "S4A Incorporates data from other systems in order to automate the load management process. The system continually monitors the planned load and informs CLP (Centralized Load Planner) when they may need to investigate and take action.",
        vendor: "Smart4Aviation",
        poc: "Arun Sharma / Ryan Wilkins",
        phone: "+48 12 379 3737",
        email: "support@smart4aviation.com",
        team: "ITS Flight Operations",
        logoVariant: "logo-s4a",
        monogram: "S4A"
    },
    "jcte": {
        shortName: "JCTE",
        category: "Crew / Technical Engineering",
        status: "Active",
        sla: "15 min",
        slaIcon: "phone",
        severity: "Critical",
        description:
            "JCTE Used by Alaska Crew Scheduling, In-flight, Drug Testing, payroll groups and approx 6300 members. The Crew Scheduling System Features scheduling applications for both the Frontline Crew and Back office.",
        vendor: "Jeppesen",
        poc: "Sue Rawlings",
        phone: "1-562-797-6193",
        email: "NA",
        team: "ITS Crew System Product",
        logoVariant: "logo-jcte",
        monogram: "JT"
    },
    "airtrack": {
        shortName: "Airtrak",
        category: "Aircraft Tracking",
        status: "Active",
        sla: "15 min",
        slaIcon: "phone",
        severity: "High",
        description:
            "Airtrak is an aviation tracking system that provides real-time visibility into aircraft movement. Allows NOC, SOC & Dispatch to conduct Flight operations. It lets them allocate Aircraft to flights or move flights to differenct aircraft.",
        vendor: "NA",
        poc: "GK Maganty",
        phone: "NA",
        email: "NA",
        team: "ITS Ops 360 AirtrAK",
        logoVariant: "logo-airtrack",
        monogram: "AT"
    },
    "pilot-briefing": {
        shortName: "Pilot Briefing",
        category: "Pilot Briefing",
        status: "Active",
        sla: "15 min",
        slaIcon: "phone",
        severity: "High",
        description:
            "JetPack (Pilot Mobile) / Pilot Briefing is an iPad app for AS and QX pilots. Pilots use JetPack for their pre-flight procedures and while en-route.",
        vendor: "NA",
        poc: "Ryan Wilkins",
        phone: "NA",
        email: "NA",
        team: "ITS Flight Operations",
        logoVariant: "logo-pb",
        monogram: "PB"
    },
    "aircraft-maintenance": {
        shortName: "Aircraft Maintenance",
        category: "Aircraft Maintenance",
        status: "Active",
        sla: "15 min",
        slaIcon: "phone",
        severity: "High",
        description:
            "Trax is the core application for the Mainatenace division. Trax provides modules for Inventory Management, Order Management, Engineering Controls, Planning Financials, Work Orders, and Defect Tracking etc...",
        vendor: "Trax",
        poc: "Brad Dufour",
        phone: "305-622-7400, TRAX 24x7Support (877-264-8729)",
        email: "AS Trax: Jairo.arias@trax.aero, QX Trax: Camilo.Sarmiento@trax.aero",
        team: "ITS COG M&E App Support",
        logoVariant: "logo-am",
        monogram: "AM"
    },
    "aims": {
        shortName: "AIMS",
        category: "AIMS, Horizon Crew Tracking, eCrew",
        status: "Active",
        sla: "15 min",
        slaIcon: "phone",
        severity: "Critical",
        description:
            "AIMS/Horizon Crew Scheduling is used for scheduling pilots and flight attendants on Horizon flights. There is a web appliction used by the crews to access information, bid for lines and trade trips.",
        vendor: "AIMS (in Athens Greece)",
        poc: "Sue R",
        phone: "00-30-210-960-6000",
        email: "aims@aims.aero / Support247@aims.aero",
        team: "ITS COG Crew Support",
        logoVariant: "logo-aims",
        monogram: "AIMS"
    }
};

const HOME_APP_LOGOS = {
    "acars": (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 7 9 3 5 7l4 4" />
            <path d="m17 11 4 4-4 4-4-4" />
            <path d="m8 12 4 4 6-6-4-4Z" />
            <path d="m16 8 3-3" />
            <path d="M9 21a6 6 0 0 0-6-6" />
        </svg>
    ),
    "wam": (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    ),
    "jetplan": (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
    ),
    "Smart4Aviation (S4A)": (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
    ),
    "jcte": (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="m9 10 1.5 1.5L14 8" />
            <path d="M9 15h6" />
        </svg>
    ),
    "airtrack": (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
    ),
    "pilot-briefing": (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="8" r="4" />
            <path d="M5 20c0-3.87 3.13-7 7-7s7 3.13 7 7" />
        </svg>
    ),
    "aircraft-maintenance": (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    ),
    "aims": (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 19v-5M12 19V9M18 19V5" />
        </svg>
    )
};

const DOCUMENT_TYPES = [
    ["Application Support Guide", ["applicationSupportGuideUrl", "supportGuideUrl"]],
    ["Escalation Procedure", ["escalationProcedureUrl", "escalationUrl"]],
    ["Operational Runbook", ["operationalRunbookUrl", "runbookUrl"]],
    ["Vendor Support Information", ["vendorSupportUrl", "supportInformationUrl"]]
];

const DETAIL_TABS = [
    { id: "groundStopTabContacts", key: "contacts", label: "Contacts" },
    { id: "groundStopTabOverview", key: "overview", label: "Overview" },
    { id: "groundStopTabSupport", key: "support", label: "SLA & Support" },
    { id: "groundStopTabEscalation", key: "escalation", label: "Escalation" },
    { id: "groundStopTabDocuments", key: "documents", label: "Documents" }
];

function valueText(value) {
    if (Array.isArray(value)) return value.map(valueText).join("\n\n");
    if (value && typeof value === "object") return JSON.stringify(value, null, 2);
    return String(value ?? "").trim();
}

function present(value) {
    const text = valueText(value);
    return text && !/^(?:n\/?a|none)$/i.test(text) ? text : "Not specified";
}

function renderLinkedNodes(value, type) {
    const text = valueText(value);
    const pattern =
        type === "email"
            ? /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
            : /\+?\d[\d\s().-]{5,}\d/g;
    const parts = [];
    let position = 0;
    let keyIdx = 0;

    for (const match of text.matchAll(pattern)) {
        const matched = match[0];
        const index = match.index;
        const target =
            type === "email"
                ? `mailto:${matched}`
                : `tel:${matched.replace(/[^\d+]/g, "")}`;

        if (index > position) {
            parts.push(text.slice(position, index));
        }
        parts.push(
            <a key={keyIdx++} href={target}>
                {matched}
            </a>
        );
        position = index + matched.length;
    }

    if (position < text.length) {
        parts.push(text.slice(position));
    }

    return parts.length ? parts : text;
}

function getActionHref(value, type) {
    const text = valueText(value);
    const pattern =
        type === "email"
            ? /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
            : /\+?\d[\d\s().-]{5,}\d/g;
    const targets = [...new Set(text.match(pattern) || [])];
    if (!targets.length) return "";
    return `${type === "email" ? "mailto:" : "tel:"}${
        type === "email" ? targets.join(",") : targets[0].replace(/[^\d+]/g, "")
    }`;
}

export default function GroundStops() {
    const {
        applications: masterApps,
        groundStopKeys,
        favoriteAppKeys,
        toggleAppFavorite
    } = useMasterData();
    const [searchParams] = useSearchParams();

    const [searchQuery, setSearchQuery] = useState("");
    const [appFilterKey, setAppFilterKey] = useState("");
    const [selectedAppKey, setSelectedAppKey] = useState(null);
    const [activeTab, setActiveTab] = useState("contacts");

    const dialogRef = useRef(null);
    const tabRefs = useRef({});

    const applicationsList = useMemo(() => {
        const records = masterApps || {};
        const keys = groundStopKeys && groundStopKeys.length ? groundStopKeys : Object.keys(CARD_PROFILES);

        return keys.map((key) => {
            const rawRecord =
                records[key] || Object.values(records).find((app) => app.id === key) || {};
            const profile = CARD_PROFILES[key] || {};
            return {
                key,
                profile,
                record: {
                    ...rawRecord,
                    name: rawRecord.name || profile.shortName || key,
                    category: rawRecord.category || profile.category,
                    description: rawRecord.description || profile.description || rawRecord.function,
                    vendor: rawRecord.vendor || profile.vendor,
                    aagPOC: rawRecord.aagPOC || profile.poc,
                    phone: rawRecord.phone || profile.phone,
                    email: rawRecord.email || profile.email,
                    aagTeam: rawRecord.aagTeam || profile.team
                }
            };
        });
    }, [masterApps, groundStopKeys]);

    // Sync URL query params
    useEffect(() => {
        const searchParam = searchParams.get("search");
        const appParam = searchParams.get("application") || searchParams.get("app");

        if (searchParam) {
            setSearchQuery(searchParam);
        }

        if (appParam) {
            const normalized = appParam.trim().toLowerCase();
            const match = applicationsList.find(
                (item) =>
                    item.key.toLowerCase() === normalized ||
                    String(item.record.id || "").toLowerCase() === normalized ||
                    String(item.record.name || "").toLowerCase() === normalized ||
                    String(item.profile.shortName || "").toLowerCase() === normalized
            );
            if (match) {
                setSelectedAppKey(match.key);
                setActiveTab("contacts");
            }
        }
    }, [searchParams, applicationsList]);

    const selectedApplication = useMemo(() => {
        if (!selectedAppKey) return null;
        return applicationsList.find((item) => item.key === selectedAppKey) || null;
    }, [applicationsList, selectedAppKey]);

    // Sync <dialog> open/close state with selectedApplication
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (selectedApplication) {
            if (!dialog.open) {
                try {
                    dialog.showModal();
                } catch {
                    dialog.setAttribute("open", "");
                }
            }
            document.body.style.overflow = "hidden";
        } else {
            if (dialog.open) {
                try {
                    dialog.close();
                } catch {
                    dialog.removeAttribute("open");
                }
            }
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedApplication]);

    const filteredApplications = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        return applicationsList.filter((item) => {
            if (appFilterKey && item.key !== appFilterKey) return false;
            if (!query) return true;

            const { record, profile } = item;
            const searchable = [
                profile.shortName,
                profile.category,
                profile.description,
                profile.vendor,
                profile.poc,
                profile.phone,
                profile.email,
                profile.team,
                record.name,
                record.function,
                record.description,
                record.category,
                record.vendor,
                record.phone,
                record.email,
                record.severity,
                record.aagTeam,
                record.supportModel
            ]
                .map(valueText)
                .join(" ")
                .toLowerCase();

            return searchable.includes(query);
        });
    }, [applicationsList, searchQuery, appFilterKey]);

    const renderLogoBadge = (key) => {
        const profile = CARD_PROFILES[key] || {};
        const variant = profile.logoVariant || "logo-jp";
        const svgIcon = HOME_APP_LOGOS[key] || HOME_APP_LOGOS["acars"];
        return (
            <div className={`gs-card-logo ${variant}`} aria-hidden="true">
                {svgIcon}
            </div>
        );
    };

    const renderSlaIcon = () => (
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v2.5a1.8 1.8 0 0 1-1.96 1.8 17.8 17.8 0 0 1-7.76-2.76 17.5 17.5 0 0 1-5.4-5.4A17.8 17.8 0 0 1 4.12 5.26 1.8 1.8 0 0 1 5.91 3.3h2.5a1.8 1.8 0 0 1 1.8 1.55c.11.85.32 1.68.62 2.48a1.8 1.8 0 0 1-.41 1.9l-1.06 1.06a14.4 14.4 0 0 0 5.4 5.4l1.06-1.06a1.8 1.8 0 0 1 1.9-.41c.8.3 1.63.51 2.48.62A1.8 1.8 0 0 1 22 16.92z" />
        </svg>
    );

    const handleTabKeyDown = (event, index) => {
        let nextIndex = null;
        if (event.key === "ArrowRight") nextIndex = (index + 1) % DETAIL_TABS.length;
        if (event.key === "ArrowLeft") nextIndex = (index - 1 + DETAIL_TABS.length) % DETAIL_TABS.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = DETAIL_TABS.length - 1;

        if (nextIndex !== null) {
            event.preventDefault();
            const nextTab = DETAIL_TABS[nextIndex];
            setActiveTab(nextTab.key);
            if (tabRefs.current[nextTab.key]) {
                tabRefs.current[nextTab.key].focus();
            }
        }
    };

    const renderTabBody = (app) => {
        if (!app) return null;
        const { record, profile } = app;

        if (activeTab === "contacts") {
            const rawVendor = valueText(record.vendor);
            const vendorDisplay =
                rawVendor && !/^(?:n\/?a|none|tbd)$/i.test(rawVendor)
                    ? rawVendor
                    : "Alaska ITS (Internal)";
            const email = present(record.email);
            const phone = present(record.phone);
            const sysAdmin = valueText(record.systemAdmin);
            const bizOwner = valueText(record.businessOwner);
            const pwdSupport = valueText(record.passwordSupport);
            const extraTeams = valueText(record.additionalSupportTeams);

            return (
                <section className="ground-stop-detail-panel ground-stop-detail-panel-wide">
                    <h3>Operational Contacts</h3>
                    <div className="ground-stop-contact-grid">
                        <article className="ground-stop-contact-card">
                            <h4>Vendor</h4>
                            <p>{vendorDisplay}</p>
                            <div>
                                <span>Vendor POC:</span> {present(record.vendorPOC)}
                            </div>
                        </article>
                        <article className="ground-stop-contact-card">
                            <h4>AAG ITS POC</h4>
                            <p>{present(record.aagPOC)}</p>
                            <div>
                                <span>ITS Team:</span> {present(record.aagTeam)}
                            </div>
                        </article>
                        <article className="ground-stop-contact-card">
                            <h4>Phone</h4>
                            <p>{phone === "Not specified" ? phone : renderLinkedNodes(phone, "phone")}</p>
                            <div>
                                <span>Call Note:</span> {present(record.phoneNote)}
                            </div>
                        </article>
                        <article className="ground-stop-contact-card">
                            <h4>Email</h4>
                            <p>{email === "Not specified" ? email : renderLinkedNodes(email, "email")}</p>
                            <div>
                                <span>Support Model:</span> {present(record.supportModel)}
                            </div>
                        </article>
                        {(sysAdmin || extraTeams) && (
                            <article className="ground-stop-contact-card">
                                <h4>System Administration</h4>
                                <p>{sysAdmin ? renderLinkedNodes(sysAdmin, "phone") : "Not specified"}</p>
                                <div>
                                    <span>Additional Support:</span> {present(extraTeams)}
                                </div>
                            </article>
                        )}
                        {(bizOwner || pwdSupport) && (
                            <article className="ground-stop-contact-card">
                                <h4>Business Owner</h4>
                                <p>{bizOwner ? renderLinkedNodes(bizOwner, "phone") : "Not specified"}</p>
                                <div>
                                    <span>Password Support:</span>{" "}
                                    {pwdSupport ? renderLinkedNodes(pwdSupport, "phone") : "Not specified"}
                                </div>
                            </article>
                        )}
                    </div>
                </section>
            );
        }

        if (activeTab === "overview") {
            const appDetailsRows = [
                ["Application Name", record.name],
                ...(record.alias ? [["Alias", record.alias]] : []),
                ["Description", record.description || profile.description || record.function],
                ["Function", record.function || record.description],
                ["Category", record.category],
                ["Vendor", record.vendor],
                ["Environment", record.environment]
            ];
            const severityRows = [
                ["Severity", record.severity],
                ...(record.tier ? [["Service Tier", record.tier]] : []),
                ...(record.groundStopEligible ? [["Ground-Stop Eligible", record.groundStopEligible]] : []),
                ["Current Status", record.status],
                ["Business Criticality", record.criticality],
                ...(record.businessImpact ? [["Business Impact", record.businessImpact]] : []),
                ["Response Target", record.response || profile.sla],
                ["Support Model", record.supportModel]
            ];
            const keyInfoRows = [
                ["Primary Vendor", record.vendor],
                ["AAG ITS POC", record.aagPOC],
                ["ITS Team", record.aagTeam],
                ...(record.systemAdmin ? [["System Administration", record.systemAdmin]] : []),
                ...(record.businessOwner ? [["Business Owner", record.businessOwner]] : []),
                ...(record.directDependencies ? [["Direct Dependencies", record.directDependencies]] : []),
                ...(record.infrastructure ? [["Infrastructure", record.infrastructure]] : []),
                ["Last Updated", record.lastUpdated || record.updatedDate || record.infoUpdatedDate]
            ];

            return (
                <>
                    <section className="ground-stop-detail-panel">
                        <h3>Application Details</h3>
                        <dl className="ground-stop-info-grid">
                            {appDetailsRows.map(([label, val]) => (
                                <div key={label} className="ground-stop-info-row">
                                    <dt>{label}</dt>
                                    <dd>{present(val)}</dd>
                                </div>
                            ))}
                        </dl>
                    </section>
                    <section className="ground-stop-detail-panel">
                        <h3>Severity &amp; Status</h3>
                        <dl className="ground-stop-info-grid">
                            {severityRows.map(([label, val]) => (
                                <div key={label} className="ground-stop-info-row">
                                    <dt>{label}</dt>
                                    <dd>{present(val)}</dd>
                                </div>
                            ))}
                        </dl>
                    </section>
                    <section className="ground-stop-detail-panel ground-stop-detail-panel-wide">
                        <h3>Key Information</h3>
                        <dl className="ground-stop-info-grid">
                            {keyInfoRows.map(([label, val]) => (
                                <div key={label} className="ground-stop-info-row">
                                    <dt>{label}</dt>
                                    <dd>{present(val)}</dd>
                                </div>
                            ))}
                        </dl>
                    </section>
                    {Array.isArray(record.associatedApplications) && record.associatedApplications.length > 0 && (
                        <section className="ground-stop-detail-panel ground-stop-detail-panel-wide">
                            <h3>Associated Services &amp; Components</h3>
                            <dl className="ground-stop-info-grid">
                                {record.associatedApplications.map((svc, idx) => (
                                    <div key={svc.name || idx} className="ground-stop-info-row">
                                        <dt>{svc.name}</dt>
                                        <dd>
                                            <strong>{svc.function}</strong> — {svc.description} (Owner: {svc.owner}; Dependencies: {svc.dependencies}; Impact: {svc.impact})
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </section>
                    )}
                    {Array.isArray(record.upstreamDependencies) && record.upstreamDependencies.length > 0 && (
                        <section className="ground-stop-detail-panel">
                            <h3>Upstream Dependencies</h3>
                            <ol className="ground-stop-escalation-list">
                                {record.upstreamDependencies.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ol>
                        </section>
                    )}
                    {Array.isArray(record.downstreamConsumers) && record.downstreamConsumers.length > 0 && (
                        <section className="ground-stop-detail-panel">
                            <h3>Downstream Consumers</h3>
                            <ol className="ground-stop-escalation-list">
                                {record.downstreamConsumers.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ol>
                        </section>
                    )}
                    {Array.isArray(record.typicalBusinessImpact) && record.typicalBusinessImpact.length > 0 && (
                        <section className="ground-stop-detail-panel">
                            <h3>Typical Business Impact</h3>
                            <ol className="ground-stop-escalation-list">
                                {record.typicalBusinessImpact.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ol>
                        </section>
                    )}
                    {Array.isArray(record.knownWorkarounds) && record.knownWorkarounds.length > 0 && (
                        <section className="ground-stop-detail-panel">
                            <h3>Known Workarounds</h3>
                            <ol className="ground-stop-escalation-list">
                                {record.knownWorkarounds.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ol>
                        </section>
                    )}
                </>
            );
        }

        if (activeTab === "support") {
            const escalationText = valueText(record.escalation);
            const slaEscalation =
                escalationText && escalationText.length <= 28
                    ? escalationText
                    : present(record.criticality || record.severity);
            const slaEscalationLabel =
                escalationText && escalationText.length <= 28 ? "Escalation" : "Criticality";
            const slaEscalationSub =
                escalationText && escalationText.length <= 28
                    ? "Recorded escalation target"
                    : "Business criticality tier";
            const targets = [
                ["Severity", record.severity, "Recorded application severity"],
                ["Response", record.response || profile.sla, "Recorded response target"],
                ["Resolution", record.resolution, "Recorded resolution target"],
                [slaEscalationLabel, slaEscalation, slaEscalationSub]
            ];

            return (
                <>
                    <section className="ground-stop-detail-panel ground-stop-detail-panel-wide">
                        <h3>SLA &amp; Support Targets</h3>
                        <div className="ground-stop-sla-grid">
                            {targets.map(([label, val, description]) => (
                                <article key={label} className="ground-stop-sla-card">
                                    <span>{label}</span>
                                    <strong>{present(val)}</strong>
                                    <small>{description}</small>
                                </article>
                            ))}
                        </div>
                    </section>
                    <section className="ground-stop-detail-panel ground-stop-detail-panel-wide">
                        <h3>Support Model</h3>
                        <p className="ground-stop-full-text">{present(record.supportModel)}</p>
                        <p className="ground-stop-full-text ground-stop-support-description">
                            {present(record.supportDescription)}
                        </p>
                    </section>
                    {Array.isArray(record.responseSlas) && record.responseSlas.length > 0 && (
                        <section className="ground-stop-detail-panel">
                            <h3>Documented Response &amp; Escalation SLAs</h3>
                            <ol className="ground-stop-escalation-list">
                                {record.responseSlas.map((sla, idx) => (
                                    <li key={idx}>{sla}</li>
                                ))}
                            </ol>
                        </section>
                    )}
                    {Array.isArray(record.communicationGuidelines) && record.communicationGuidelines.length > 0 && (
                        <section className="ground-stop-detail-panel">
                            <h3>Communication Guidelines</h3>
                            <ol className="ground-stop-escalation-list">
                                {record.communicationGuidelines.map((guide, idx) => (
                                    <li key={idx}>{guide}</li>
                                ))}
                            </ol>
                        </section>
                    )}
                </>
            );
        }

        if (activeTab === "escalation") {
            const steps = record.escalationSteps;
            const procedure = valueText(record.escalation);

            if (Array.isArray(steps) && steps.length) {
                return (
                    <section className="ground-stop-detail-panel ground-stop-detail-panel-wide">
                        <h3>Escalation Process</h3>
                        <ol className="ground-stop-escalation-list">
                            {steps.map((step, i) => (
                                <li key={i}>{valueText(step)}</li>
                            ))}
                        </ol>
                        {procedure && !/^(?:tbd|n\/?a)$/i.test(procedure) && (
                            <p className="ground-stop-full-text ground-stop-escalation-note">
                                {procedure}
                            </p>
                        )}
                    </section>
                );
            }

            return (
                <section className="ground-stop-detail-panel ground-stop-detail-panel-wide">
                    <h3>Escalation Process</h3>
                    {procedure && !/^(?:tbd|n\/?a)$/i.test(procedure) ? (
                        <p className="ground-stop-full-text">{procedure}</p>
                    ) : (
                        <p className="ground-stop-empty-message">
                            Escalation procedure not available.
                        </p>
                    )}
                </section>
            );
        }

        if (activeTab === "documents") {
            return (
                <>
                    <section className="ground-stop-detail-panel ground-stop-detail-panel-wide">
                        <h3>Application Documents</h3>
                        <div className="ground-stop-document-list">
                            {DOCUMENT_TYPES.map(([title, keys]) => {
                                const url = keys
                                    .map((k) => record[k])
                                    .find((value) => typeof value === "string" && value.trim());
                                const validUrl = url && /^(?:https?:\/\/|\/|\.\.?\/)/i.test(url.trim());
                                return (
                                    <div key={title} className="ground-stop-document-row">
                                        <span className="ground-stop-document-icon" aria-hidden="true">
                                            <svg viewBox="0 0 24 24">
                                                <path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6m-6 4h6" />
                                            </svg>
                                        </span>
                                        <strong>{title}</strong>
                                        {validUrl ? (
                                            <a href={url} target="_blank" rel="noopener noreferrer">
                                                Open <span aria-hidden="true">→</span>
                                            </a>
                                        ) : (
                                            <span className="ground-stop-document-unavailable">
                                                Not available
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                    {Array.isArray(record.relatedDocuments) && record.relatedDocuments.length > 0 && (
                        <section className="ground-stop-detail-panel ground-stop-detail-panel-wide">
                            <h3>Runbooks &amp; Source Documents</h3>
                            <div className="ground-stop-document-list">
                                {record.relatedDocuments.map((doc, idx) => {
                                    const url = doc && typeof doc.url === "string" ? doc.url.trim() : "";
                                    const validUrl = url && /^(?:https?:\/\/|\/|\.\.?\/)/i.test(url);
                                    return (
                                        <div key={doc.title || idx} className="ground-stop-document-row">
                                            <span className="ground-stop-document-icon" aria-hidden="true">
                                                <svg viewBox="0 0 24 24">
                                                    <path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6m-6 4h6" />
                                                </svg>
                                            </span>
                                            <strong>
                                                {doc.title}
                                                {doc.category ? ` (${doc.category})` : ""}
                                            </strong>
                                            {validUrl ? (
                                                <a href={url} target="_blank" rel="noopener noreferrer">
                                                    Open <span aria-hidden="true">→</span>
                                                </a>
                                            ) : (
                                                <span className="ground-stop-document-unavailable">
                                                    Not available
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    )}
                </>
            );
        }

        return null;
    };

    const selectedRecord = selectedApplication ? selectedApplication.record : {};
    const severityText = selectedApplication ? present(selectedRecord.severity) : "";
    const severityClass = severityText.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const fullModalDescription = selectedApplication
        ? valueText(
              selectedRecord.description ||
                  selectedApplication.profile.description ||
                  selectedRecord.function
          )
        : "";
    const emailHref = selectedApplication ? getActionHref(selectedRecord.email, "email") : "";
    const callHref = selectedApplication ? getActionHref(selectedRecord.phone, "phone") : "";
    const isModalFavorite = selectedApplication
        ? favoriteAppKeys.includes(selectedApplication.key)
        : false;
    const activeTabObj = DETAIL_TABS.find((t) => t.key === activeTab) || DETAIL_TABS[0];

    return (
        <>
            <main className="main-content ias-main-content ground-stops-main">
                <header className="gs-page-header" aria-label="Ground Stop Applications Header">
                    <div className="gs-header-left">
                        <div className="gs-header-app-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                            </svg>
                        </div>
                        <div className="gs-page-title-group">
                            <h1 className="gs-page-title">
                                Ground Stop <span className="gs-title-accent">Applications</span>
                            </h1>
                            <p className="gs-page-subtitle">
                                Critical flight &amp; dispatch systems with real-time operational escalation
                            </p>
                        </div>
                    </div>

                    <div className="gs-header-metrics" aria-label="Ground Stop summary metrics">
                        <div className="gs-kpi-badge gs-kpi-blue">
                            <span className="gs-kpi-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                    <polyline points="2 12 12 17 22 12" />
                                    <polyline points="2 17 12 22 22 17" />
                                </svg>
                            </span>
                            <div className="gs-kpi-text">
                                <span className="gs-kpi-primary">
                                    <span id="groundStopTotalStat">{applicationsList.length || 9}</span> Ground Stop
                                </span>
                                <span className="gs-kpi-secondary gs-kpi-secondary-strong">Applications</span>
                            </div>
                        </div>

                        <div className="gs-kpi-badge gs-kpi-green">
                            <span className="gs-kpi-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="9" />
                                    <polyline points="12 7 12 12 15 14" />
                                </svg>
                            </span>
                            <div className="gs-kpi-text">
                                <span className="gs-kpi-primary" id="groundStopAverageSlaStat">
                                    15 min
                                </span>
                                <span className="gs-kpi-secondary">Target SLA</span>
                            </div>
                        </div>

                        <div className="gs-kpi-badge gs-kpi-purple">
                            <span className="gs-kpi-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
                                    <rect x="2.5" y="12" width="3.5" height="6" rx="1.75" />
                                    <rect x="18" y="12" width="3.5" height="6" rx="1.75" />
                                    <path d="M19.5 18v.5a3 3 0 0 1-3 3h-2.5" />
                                    <circle cx="13" cy="21.5" r="1" fill="currentColor" />
                                </svg>
                            </span>
                            <div className="gs-kpi-text">
                                <span className="gs-kpi-primary">24×7</span>
                                <span className="gs-kpi-secondary">ITS Coverage</span>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="ground-stop-directory" aria-label="Ground Stop applications directory">
                    <div className="ground-stop-filter-bar" role="region" aria-label="Filter applications">
                        <label className="ground-stop-search">
                            <span className="gs-search-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </span>
                            <input
                                id="groundStopSearch"
                                type="search"
                                placeholder="Search applications, vendors, or keywords..."
                                autoComplete="off"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </label>

                        <span className="gs-toolbar-divider" aria-hidden="true"></span>

                        <div className="gs-select-wrap">
                            <span className="gs-select-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 12h4l2.5-6 4 12 2.5-6H21" />
                                </svg>
                            </span>
                            <select
                                id="groundStopAppFilter"
                                className="gs-filter-select"
                                aria-label="Filter by application"
                                value={appFilterKey}
                                onChange={(e) => setAppFilterKey(e.target.value)}
                            >
                                <option value="">All Applications</option>
                                {applicationsList.map(({ key, profile, record }) => (
                                    <option key={key} value={key}>
                                        {profile.shortName || record.name || key}
                                    </option>
                                ))}
                            </select>
                            <span className="gs-select-chevron" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </span>
                        </div>

                        <span className="gs-toolbar-divider" aria-hidden="true"></span>

                        <button
                            id="groundStopClearFilters"
                            className="gs-clear-btn"
                            type="button"
                            onClick={() => {
                                setSearchQuery("");
                                setAppFilterKey("");
                            }}
                        >
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21 12a9 9 0 1 1-2.64-6.36" />
                                <polyline points="21 3 21 9 15 9" />
                            </svg>
                            <span>Clear Filters</span>
                        </button>
                    </div>

                    <section className="ground-stop-grid" id="groundStopGrid" aria-label="Ground Stop applications">
                        {filteredApplications.map(({ key, profile, record }) => {
                            const isEdited = Boolean(record.adminEdited);
                            const title =
                                (isEdited && (record.shortName || record.name)) ||
                                profile.shortName ||
                                record.name;
                            const category =
                                (isEdited && record.category) ||
                                record.category ||
                                profile.category ||
                                "Operations";
                            const slaLabel =
                                (isEdited && record.response) || profile.sla || "15 min";
                            const description =
                                (isEdited && valueText(record.description)) ||
                                profile.description ||
                                valueText(record.description || record.function);
                            const vendor =
                                (isEdited && valueText(record.vendor)) ||
                                profile.vendor ||
                                valueText(record.vendor) ||
                                "NA";
                            const poc =
                                (isEdited && valueText(record.aagPOC)) ||
                                profile.poc ||
                                valueText(record.aagPOC) ||
                                "NA";
                            const phone =
                                (isEdited && valueText(record.phone)) ||
                                profile.phone ||
                                valueText(record.phone) ||
                                "NA";
                            const email =
                                (isEdited && valueText(record.email)) ||
                                profile.email ||
                                valueText(record.email) ||
                                "NA";
                            const team =
                                (isEdited && valueText(record.aagTeam)) ||
                                profile.team ||
                                valueText(record.aagTeam) ||
                                "ITS Flight Operations";

                            const phoneMatch = String(phone).match(/\+?\d[\d\s().-]{5,}\d/);
                            const phoneDigits = phoneMatch
                                ? phoneMatch[0].replace(/[^\d+]/g, "")
                                : "";
                            const phoneHref =
                                phoneDigits.replace(/\D/g, "").length >= 7
                                    ? `tel:${phoneDigits}`
                                    : "";
                            const emailMatches =
                                String(email).match(
                                    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
                                ) || [];
                            const cardEmailHref = emailMatches.length
                                ? `mailto:${[...new Set(emailMatches)].join(",")}`
                                : "";
                            const isFav = favoriteAppKeys.includes(key);

                            return (
                                <article
                                    key={key}
                                    className="ground-stop-card"
                                    data-app-card-key={key}
                                    data-card-accent={profile.logoVariant || ""}
                                    onClick={(e) => {
                                        if (e.target.closest("a") || e.target.closest("[data-fav-app-key]")) {
                                            return;
                                        }
                                        setSelectedAppKey(key);
                                        setActiveTab("contacts");
                                    }}
                                >
                                    <header className="gs-card-header">
                                        {renderLogoBadge(key)}
                                        <div className="gs-card-titles">
                                            <h2 title={record.name || title}>{title}</h2>
                                            <span className="gs-category-pill" title={category}>
                                                {category}
                                            </span>
                                        </div>
                                        <div className="gs-card-badges">
                                            <span className="gs-sla-pill">
                                                {renderSlaIcon()}
                                                <span>SLA: {slaLabel}</span>
                                            </span>
                                            <button
                                                type="button"
                                                className={`gs-card-favorite ${isFav ? "active" : ""}`}
                                                data-fav-app-key={key}
                                                aria-label={
                                                    isFav
                                                        ? "Remove application from favorites"
                                                        : "Add application to favorites"
                                                }
                                                aria-pressed={isFav ? "true" : "false"}
                                                title={
                                                    isFav ? "Remove from Favorites" : "Add to Favorites"
                                                }
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleAppFavorite(key);
                                                }}
                                            >
                                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9L12 2.5z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </header>

                                    <p
                                        className="gs-card-description application-description"
                                        title={description}
                                    >
                                        {String(description || "")
                                            .replace(/\s+/g, " ")
                                            .trim()}
                                    </p>

                                    <div className="gs-card-contact-list">
                                        <div className="gs-contact-row gs-contact-row-vendor">
                                            <div className="gs-contact-row-label">
                                                <span
                                                    className="gs-contact-icon gs-contact-icon-vendor"
                                                    aria-hidden="true"
                                                >
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
                                                <span
                                                    className="gs-contact-icon gs-contact-icon-poc"
                                                    aria-hidden="true"
                                                >
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
                                                <span
                                                    className="gs-contact-icon gs-contact-icon-phone"
                                                    aria-hidden="true"
                                                >
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
                                                    title={phone}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {phone}
                                                </a>
                                            ) : (
                                                <span
                                                    className="gs-contact-row-value gs-contact-phone"
                                                    title={phone}
                                                >
                                                    {phone}
                                                </span>
                                            )}
                                        </div>

                                        <div className="gs-contact-row gs-contact-row-email">
                                            <div className="gs-contact-row-label">
                                                <span
                                                    className="gs-contact-icon gs-contact-icon-email"
                                                    aria-hidden="true"
                                                >
                                                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                                    </svg>
                                                </span>
                                                <span>Email</span>
                                            </div>
                                            {cardEmailHref ? (
                                                <a
                                                    href={cardEmailHref}
                                                    className="gs-contact-row-value gs-contact-email"
                                                    title={email}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {email}
                                                </a>
                                            ) : (
                                                <span
                                                    className="gs-contact-row-value gs-contact-email-plain"
                                                    title={email}
                                                >
                                                    {email}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <footer className="gs-card-footer">
                                        <div
                                            className="gs-card-team"
                                            title={`Responsible Team: ${team}`}
                                        >
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
                                        <button
                                            type="button"
                                            className="ground-stop-details-button"
                                            data-app-key={key}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedAppKey(key);
                                                setActiveTab("contacts");
                                            }}
                                        >
                                            <span>View Details</span>
                                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M5 12h14" />
                                                <path d="m13 6 6 6-6 6" />
                                            </svg>
                                        </button>
                                    </footer>
                                </article>
                            );
                        })}
                    </section>

                    {filteredApplications.length === 0 && (
                        <div className="ground-stop-empty" id="groundStopEmpty">
                            <strong>No applications found</strong>
                            <span>Try another application, vendor, or filter.</span>
                        </div>
                    )}
                </section>
            </main>

            <dialog
                ref={dialogRef}
                className="ground-stop-dialog"
                id="groundStopDialog"
                aria-labelledby="groundStopDialogTitle"
                onClick={(e) => {
                    if (e.target === dialogRef.current) {
                        setSelectedAppKey(null);
                    }
                }}
                onClose={() => setSelectedAppKey(null)}
            >
                <div className="ground-stop-dialog-shell">
                    <header className="ground-stop-dialog-header">
                        <div className="ground-stop-dialog-icon" id="groundStopDialogLogoWrap">
                            {selectedApplication && renderLogoBadge(selectedApplication.key)}
                        </div>
                        <div className="ground-stop-dialog-heading">
                            <p>APPLICATION DETAILS</p>
                            <h2 id="groundStopDialogTitle">
                                {selectedApplication
                                    ? selectedRecord.name ||
                                      selectedApplication.profile.shortName ||
                                      "Application"
                                    : "Application"}
                            </h2>
                            {fullModalDescription && (
                                <p
                                    className="ground-stop-dialog-description"
                                    id="groundStopDialogDescription"
                                >
                                    {fullModalDescription}
                                </p>
                            )}
                        </div>
                        <div className="ground-stop-dialog-status">
                            <span
                                className={`ground-stop-severity ${severityClass}`}
                                id="groundStopSeverity"
                            >
                                {severityText}
                            </span>
                            <span
                                className="ground-stop-operational-status"
                                id="groundStopStatus"
                            >
                                {selectedApplication ? present(selectedRecord.status) : ""}
                            </span>
                            <button
                                className="ground-stop-dialog-close"
                                id="groundStopDialogClose"
                                type="button"
                                aria-label="Close details"
                                onClick={() => setSelectedAppKey(null)}
                            >
                                ×
                            </button>
                        </div>
                    </header>

                    <div
                        className="ground-stop-dialog-tabs"
                        role="tablist"
                        aria-label="Application details"
                    >
                        {DETAIL_TABS.map((tab, idx) => {
                            const isSelected = activeTab === tab.key;
                            return (
                                <button
                                    key={tab.key}
                                    ref={(el) => {
                                        tabRefs.current[tab.key] = el;
                                    }}
                                    type="button"
                                    role="tab"
                                    id={tab.id}
                                    aria-controls="groundStopDialogBody"
                                    aria-selected={isSelected ? "true" : "false"}
                                    tabIndex={isSelected ? 0 : -1}
                                    data-detail-tab={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    onKeyDown={(e) => handleTabKeyDown(e, idx)}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    <main
                        className="ground-stop-dialog-body"
                        id="groundStopDialogBody"
                        role="tabpanel"
                        aria-labelledby={activeTabObj.id}
                        tabIndex={0}
                    >
                        {renderTabBody(selectedApplication)}
                    </main>

                    <footer className="ground-stop-dialog-footer">
                        <div className="ground-stop-dialog-actions">
                            <a
                                className="ground-stop-email-action"
                                id="groundStopEmailAction"
                                href={emailHref || undefined}
                                aria-disabled={!emailHref ? "true" : undefined}
                                tabIndex={!emailHref ? -1 : undefined}
                            >
                                Send Email
                            </a>
                            <a
                                className="ground-stop-call-action"
                                id="groundStopCallAction"
                                href={callHref || undefined}
                                aria-disabled={!callHref ? "true" : undefined}
                                tabIndex={!callHref ? -1 : undefined}
                            >
                                Call Support
                            </a>
                            <span className="ground-stop-data-source">
                                DATA SOURCE <strong>Application master data</strong>
                            </span>
                        </div>
                        <button
                            className={`ground-stop-favorite-action ${
                                isModalFavorite ? "active" : ""
                            }`}
                            id="groundStopFavoriteAction"
                            type="button"
                            aria-pressed={isModalFavorite ? "true" : "false"}
                            onClick={() => {
                                if (selectedApplication) {
                                    toggleAppFavorite(selectedApplication.key);
                                }
                            }}
                        >
                            <span aria-hidden="true">{isModalFavorite ? "★" : "☆"}</span>
                            <span>
                                {isModalFavorite
                                    ? "Remove from Favorites"
                                    : "Add to Favorites"}
                            </span>
                        </button>
                    </footer>
                </div>
            </dialog>
        </>
    );
}

