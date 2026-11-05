import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useMasterData } from "../context/MasterDataContext";
import { getGroundStopImpactDetails } from "../data/vendorDetails";

const CARD_PROFILES = {
    "acars": {
        shortName: "ACARS",
        category: "Flight Ops: aircraft-to-ground communications",
        status: "Active",
        sla: "15 min",
        slaIcon: "phone",
        severity: "Critical",
        description:
            "ACARS is the central text link between aircraft and the ground. It carries flight info, flight times, weather, performance data, releases and load closeouts. It is rated 24x7 critical and is on the Ground Stop list.",
        vendor: "SITA for the Aircom Server product. ARINC (Collins Aerospace) for messages to the aircraft",
        poc: "Ryan Wilkins, 206-972-0228",
        phone: "SITA: 1-888-247-2661, option 4 (Aircom). ARINC: 800-633-6882",
        email: "SITA: Aircom.support@sitaonair.aero. ARINC: helpdesk@arinc.com",
        team: "ITS COG FlightOps Support / ITS Flight Operations",
        logoVariant: "logo-acars"
    },
    "wam": {
        shortName: "WAM",
        category: "Flight Ops / Dispatch: flight planning and releases",
        status: "Active",
        sla: "15 min",
        slaIcon: "phone",
        severity: "Critical",
        description:
            "WAM is the main dispatch tool for AS and QX. It brings together flight plans, weather, performance data and MEL information to produce the dispatch release. If WAM or any of its upstream feeds fails, flights can't be released.",
        vendor: "Jeppesen (owned by Boeing), which runs the JetPlan flight plan server",
        poc: "Ryan Wilkins, Adele Lunde",
        phone: "Jeppesen: 1-800-732-2800. Say \"Flight Planning\" and give account number 83491",
        email: "opssupport@jeppesen.com",
        team: "ITS COG Flight Operations. Verified owners: Ryan Wilkins, Adele Lunde",
        logoVariant: "logo-wam",
        monogram: "WAM"
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
        vendor: "Jeppesen (owned by Boeing). Vendor application hosted in-house",
        poc: "Ryan Wilkins",
        phone: "Sev 1: 1-800-732-2800. Say \"Flight Planning\" and give account number 83491. Other issues: 1-800-375-4973. Server help: 1-303-328-4585",
        email: "OpsSupport@jeppesen.com",
        team: "ITS COG Flight Operations. ITS System Owner: Ryan Wilkins",
        logoVariant: "logo-jp",
        monogram: "JP"
    },
    "Smart4Aviation (S4A)": {
        shortName: "S4A SmartSuite",
        category: "Airport Ops / Flight Ops: weight and balance and load planning",
        status: "Active",
        sla: "24x7",
        slaIcon: "phone",
        severity: "Critical",
        description:
            "S4A pulls in flight, passenger, bag, cargo, crew, fuel and MEL data to automate weight and balance. It checks the actual load and sends the Load Closeout to the aircraft. If S4A is down, aircraft can't be safely prepared to depart on time.",
        vendor: "Smart4Aviation (based in Poland). Vendor application on in-house Linux servers",
        poc: "Ryan Wilkins",
        phone: "+48 12 379 3737",
        email: "support@smart4aviation.aero",
        team: "ITS Flight Operations. System Owner: Ryan Wilkins. Servers supported by the ITS JCTE System Admins",
        logoVariant: "logo-s4a",
        monogram: "S4A"
    },
    "jcte": {
        shortName: "JCTE",
        category: "Crew: crew scheduling and tracking for about 10,100 crew members",
        status: "Active",
        sla: "24x7",
        slaIcon: "phone",
        severity: "Critical",
        description:
            "JCTE is the system of record for Alaska crew scheduling and tracking. If it goes down, schedulers can't manage crews and crew members can't see schedules or check in. When it causes flight delays, it is treated as Sev 1.",
        vendor: "Jeppesen",
        poc: "Sue Rawlings",
        phone: "+1-303-328-6412, effective 01 Apr 2026. For ProdOps Sev 1 use only. Otherwise the System Admins contact Jeppesen",
        email: "opssupport@jeppesen.com",
        team: "ITS JCTE System Admins. Tech Owner: Sue Rawlings",
        logoVariant: "logo-jcte",
        monogram: "JT"
    },
    "airtrack": {
        shortName: "AirTrak",
        category: "Flight Ops: real-time control of the operation (aircraft assignments, Irrops, flight status)",
        status: "Active",
        sla: "24x7",
        slaIcon: "phone",
        severity: "Critical",
        description:
            "AirTrak is the AOC's real-time control tool for AS and QX. Teams use it for aircraft swaps, aircraft movement, Irrops and watching the whole system. If it goes down, the AOC loses real-time visibility and can't take action across the network.",
        vendor: "None; built in-house. Key outside services: Ping Identity, Split.io, AppDynamics",
        poc: "GK Maganty",
        phone: "Not applicable (built in-house)",
        email: "Not applicable (built in-house)",
        team: "ITS Ops 360 AirtrAK (Team.Maganty@alaskaair.com)",
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
    const [searchParams, setSearchParams] = useSearchParams();

    const [searchQuery, setSearchQuery] = useState("");
    const [appFilterKey, setAppFilterKey] = useState("");
    const [selectedAppKey, setSelectedAppKey] = useState(null);
    const [activeTab, setActiveTab] = useState("contacts");

    // Full-page Impact Details view state (matching Vendors page)
    const [impactAppKey, setImpactAppKey] = useState(null);
    const [impactTab, setImpactTab] = useState("overview");
    const [impactSearch, setImpactSearch] = useState("");
    const [appTableSearch, setAppTableSearch] = useState("");
    const [appOwnerFilter, setAppOwnerFilter] = useState("all");
    const [appSortConfig, setAppSortConfig] = useState({
        key: null,
        direction: "asc"
    });
    const [selectedAppDetail, setSelectedAppDetail] = useState(null);
    const [copiedField, setCopiedField] = useState("");

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

    const impactApp = useMemo(() => {
        if (!impactAppKey) return null;
        return applicationsList.find((item) => item.key === impactAppKey) || null;
    }, [applicationsList, impactAppKey]);

    const impactData = useMemo(
        () => getGroundStopImpactDetails(impactApp),
        [impactApp]
    );

    const handleViewAppDetails = useCallback((key) => {
        if (!key) return;
        setImpactAppKey(key);
        setImpactTab("overview");
        setImpactSearch("");
        setAppTableSearch("");
        setAppOwnerFilter("all");
        setAppSortConfig({ key: null, direction: "asc" });
        setSelectedAppDetail(null);
        setCopiedField("");
        document.querySelector(".ground-stops-main")?.scrollTo({ top: 0, behavior: "smooth" });
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const closeImpactView = useCallback(() => {
        setImpactAppKey(null);
        setImpactTab("overview");
        setImpactSearch("");
        setAppTableSearch("");
        setAppOwnerFilter("all");
        setAppSortConfig({ key: null, direction: "asc" });
        setSelectedAppDetail(null);
        setCopiedField("");
        if (searchParams.has("application") || searchParams.has("app")) {
            const nextParams = new URLSearchParams(searchParams);
            nextParams.delete("application");
            nextParams.delete("app");
            setSearchParams(nextParams, { replace: true });
        }
    }, [searchParams, setSearchParams]);

    const handleCopyText = useCallback((text, fieldKey) => {
        if (!text) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).catch(() => {});
        }
        setCopiedField(fieldKey);
        window.setTimeout(() => {
            setCopiedField((prev) => (prev === fieldKey ? "" : prev));
        }, 1800);
    }, []);

    const handleCopyImpactSummary = useCallback(() => {
        if (!impactData) return;
        const summaryText = [
            `${impactData.pageTitle} (${impactData.status})`,
            `Company: ${impactData.company} | Category: ${impactData.category} | ITS Team: ${impactData.itsTeam}`,
            `Support Email: ${impactData.vendorContacts.supportEmail} | Phone: ${impactData.vendorContacts.supportPhone}`,
            `Impacted Systems: ${impactData.impactedSystems.map((s) => s.name).join(", ")}`
        ].join("\n");
        handleCopyText(summaryText, "summary");
    }, [impactData, handleCopyText]);

    const filteredImpactedSystems = useMemo(() => {
        if (!impactData || !Array.isArray(impactData.impactedSystems)) return [];
        const q = impactSearch.trim().toLowerCase();
        if (!q) return impactData.impactedSystems;
        return impactData.impactedSystems.filter((sys) =>
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
        impactData.impactedSystems.forEach((sys) => {
            if (sys.owner) owners.add(sys.owner);
        });
        return ["all", ...owners];
    }, [impactData]);

    const filteredAppsTabSystems = useMemo(() => {
        if (!impactData || !Array.isArray(impactData.impactedSystems)) return [];
        const topQ = impactSearch.trim().toLowerCase();
        const tableQ = appTableSearch.trim().toLowerCase();

        const list = impactData.impactedSystems.filter((sys) => {
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

    const handleSortAppsTable = useCallback((columnKey) => {
        setAppSortConfig((prev) => {
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
        const escapeCsv = (val) => `"${String(val || "").replace(/"/g, '""')}"`;
        const rows = impactData.impactedSystems.map((sys) => [
            `${sys.name}${sys.appTabSubName ? ` ${sys.appTabSubName}` : ""}`,
            sys.appTabDescription || sys.description,
            sys.businessFunction,
            sys.impact,
            sys.dependencies || "",
            sys.owner || ""
        ]);
        const csvContent =
            "\uFEFF" +
            [headers.map(escapeCsv).join(","), ...rows.map((r) => r.map(escapeCsv).join(","))].join("\r\n");
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
                handleViewAppDetails(match.key);
            }
        }
    }, [searchParams, applicationsList, handleViewAppDetails]);

    // Close Impact Details view on Escape key
    useEffect(() => {
        if (!impactAppKey) return;
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeImpactView();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [impactAppKey, closeImpactView]);

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
            <main
                className={`main-content ias-main-content ground-stops-main${
                    impactData ? " vi-inpage-main" : ""
                }`}
            >
                {!impactData ? (
                    <>
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
                                        handleViewAppDetails(key);
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
                                                handleViewAppDetails(key);
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
                    </>
                ) : (
                    <div className="vi-page-container" id="groundStopImpactView">
                        {/* TOP HEADER ROW: BREADCRUMB + TITLE LEFT, SEARCH + STATUS RIGHT */}
                        <header className="vi-topbar" aria-label="Application Impact Header">
                            <div className="vi-topbar-left">
                                <nav className="vi-breadcrumb" aria-label="Breadcrumb">
                                    <button
                                        type="button"
                                        className="vi-breadcrumb-link"
                                        onClick={closeImpactView}
                                    >
                                        Ground Stop Applications
                                    </button>
                                    <span className="vi-breadcrumb-sep" aria-hidden="true">
                                        ›
                                    </span>
                                    <button
                                        type="button"
                                        className="vi-breadcrumb-link"
                                        onClick={() => setImpactTab("overview")}
                                    >
                                        {impactData.name}
                                    </button>
                                    <span className="vi-breadcrumb-sep" aria-hidden="true">
                                        ›
                                    </span>
                                    <span className="vi-breadcrumb-current">
                                        {impactTab === "systems"
                                            ? "Applications & Systems"
                                            : impactTab === "dependencies"
                                            ? "Dependencies"
                                            : impactTab === "contacts"
                                            ? "Contacts"
                                            : impactTab === "documents"
                                            ? "Related Documents"
                                            : "Vendor Impact"}
                                    </span>
                                </nav>

                                {impactTab === "systems" ? (
                                    <>
                                        <h1 id="viModalTitle" className="vi-page-title">
                                            {impactData.applicationsTabTitle || impactData.name}
                                        </h1>
                                        <div className="vi-page-subheading">
                                            {impactData.applicationsTabSubheading ||
                                                "Applications & Systems"}
                                        </div>
                                        <p className="vi-page-subtitle">
                                            {impactData.applicationsTabSubtitle ||
                                                impactData.pageSubtitle}
                                        </p>
                                    </>
                                ) : impactTab === "dependencies" ? (
                                    <>
                                        <h1 id="viModalTitle" className="vi-page-title">
                                            {impactData.dependenciesTabTitle ||
                                                `${impactData.name} – Dependencies`}
                                        </h1>
                                        <p className="vi-page-subtitle">
                                            {impactData.dependenciesTabSubtitle ||
                                                impactData.pageSubtitle}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <h1 id="viModalTitle" className="vi-page-title">
                                            {impactData.pageTitle}
                                        </h1>
                                        <p className="vi-page-subtitle">
                                            {impactData.pageSubtitle}
                                        </p>
                                    </>
                                )}
                            </div>

                            <div className="vi-topbar-right">
                                <div className="vi-topbar-controls">
                                    <label
                                        className="vi-search-box"
                                        aria-label="Search applications, systems, contacts"
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
                                            placeholder="Search applications, systems, contacts..."
                                            value={impactSearch}
                                            onChange={(e) => setImpactSearch(e.target.value)}
                                        />
                                    </label>

                                    {impactTab === "systems" || impactTab === "dependencies" ? (
                                        <button
                                            type="button"
                                            className="vi-bell-btn"
                                            aria-label="Notifications"
                                            title="Notifications"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 0 0-3 0v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                                            </svg>
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            className="vi-more-btn"
                                            aria-label="More options"
                                            title="More options"
                                            onClick={handleCopyImpactSummary}
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <circle cx="12" cy="5" r="1.8" />
                                                <circle cx="12" cy="12" r="1.8" />
                                                <circle cx="12" cy="19" r="1.8" />
                                            </svg>
                                        </button>
                                    )}
                                </div>

                                <div className="vi-topbar-status">
                                    <span className="vi-last-updated">
                                        Last updated: {impactData.lastUpdated}
                                    </span>
                                </div>
                            </div>
                        </header>

                        {/* HERO SUMMARY CARD + TAB BAR */}
                        <section className="vi-hero-card" aria-label="Application summary">
                            <div className="vi-hero-main">
                                <div className="vi-hero-logo-box">
                                    {impactData.logo ? (
                                        <img
                                            src={impactData.logo}
                                            alt={impactData.name}
                                            className="vi-hero-logo-img"
                                        />
                                    ) : (
                                        <div className="vi-hero-logo-fallback">
                                            {impactApp ? renderLogoBadge(impactApp.key) : null}
                                        </div>
                                    )}
                                </div>

                                <div className="vi-hero-info">
                                    <div className="vi-hero-header-row">
                                        <div className="vi-hero-title-group">
                                            <h2 className="vi-hero-title">{impactData.name}</h2>
                                            <p className="vi-hero-subtitle">
                                                {impactData.subtitle}
                                            </p>
                                        </div>

                                        <div className="vi-hero-actions">
                                            {impactTab !== "overview" ? (
                                                <button
                                                    type="button"
                                                    className="vi-btn-secondary"
                                                    onClick={() => setImpactTab("overview")}
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
                                                        <path d="M19 12H5" />
                                                        <path d="m12 19-7-7 7-7" />
                                                    </svg>
                                                    <span>Back to Vendor Details</span>
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="vi-btn-secondary"
                                                    onClick={closeImpactView}
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
                                                        <path d="M19 12H5" />
                                                        <path d="m12 19-7-7 7-7" />
                                                    </svg>
                                                    <span>Back to Ground Stop Applications</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* 4-ITEM METADATA STRIP */}
                                    <div className="vi-meta-row">
                                        <div className="vi-meta-item">
                                            <span className="vi-meta-icon" aria-hidden="true">
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
                                            </span>
                                            <div className="vi-meta-text">
                                                <span className="vi-meta-label">Company</span>
                                                <strong className="vi-meta-value">
                                                    {impactData.company}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="vi-meta-item">
                                            <span className="vi-meta-icon" aria-hidden="true">
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
                                            </span>
                                            <div className="vi-meta-text">
                                                <span className="vi-meta-label">Website</span>
                                                {/^https?:\/\//i.test(String(impactData.website || "")) ? (
                                                    <a
                                                        href={impactData.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="vi-meta-link"
                                                    >
                                                        <span>{impactData.website}</span>
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
                                                ) : (
                                                    <strong className="vi-meta-value">
                                                        {impactData.website}
                                                    </strong>
                                                )}
                                            </div>
                                        </div>

                                        <div className="vi-meta-item">
                                            <span className="vi-meta-icon" aria-hidden="true">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.9"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                                    <line x1="7" y1="7" x2="7.01" y2="7" />
                                                </svg>
                                            </span>
                                            <div className="vi-meta-text">
                                                <span className="vi-meta-label">Category</span>
                                                <strong className="vi-meta-value">
                                                    {impactData.category}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="vi-meta-item">
                                            <span className="vi-meta-icon" aria-hidden="true">
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
                                            </span>
                                            <div className="vi-meta-text">
                                                <span className="vi-meta-label">ITS Team</span>
                                                <strong className="vi-meta-value">
                                                    {impactData.itsTeam}
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* HERO TABS */}
                            <div className="vi-hero-tabs" role="tablist">
                                {[
                                    { key: "overview", label: "Impact Overview" },
                                    { key: "dependencies", label: "Dependencies" },
                                    { key: "contacts", label: "Contacts" },
                                    { key: "documents", label: "Related Documents" }
                                ].map((tab) => (
                                    <button
                                        key={tab.key}
                                        type="button"
                                        role="tab"
                                        aria-selected={impactTab === tab.key ? "true" : "false"}
                                        className={`vi-hero-tab${
                                            impactTab === tab.key ? " active" : ""
                                        }`}
                                        onClick={() => {
                                            setImpactTab(tab.key);
                                            setSelectedAppDetail(null);
                                        }}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {impactTab === "systems" ? (
                            /* FULL-WIDTH APPLICATIONS & SYSTEMS TAB LAYOUT */
                            <div className="vi-apps-tab-layout">
                                <section
                                    className="vi-card vi-apps-full-card"
                                    aria-label="Applications and Systems List"
                                >
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
                                                    onChange={(e) => setAppTableSearch(e.target.value)}
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
                                                    ].map((col) => (
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
                                                {filteredAppsTabSystems.map((sys) => (
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

                                <div className="vi-apps-bottom-grid">
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
                            <div className="vi-deps-tab-layout">
                                <div className="vi-deps-top-grid">
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

                                        <div className="vi-dep-diagram">
                                            <div className="vi-dep-col col-upstream">
                                                <h4 className="vi-dep-col-title title-upstream">
                                                    Upstream Dependencies
                                                </h4>
                                                <div className="vi-dep-node-stack">
                                                    {impactData.dependenciesTab.diagramUpstream.map(
                                                        (node) => (
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
                                                                {impactApp ? renderLogoBadge(impactApp.key) : null}
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

                                            <div className="vi-dep-col col-downstream">
                                                <h4 className="vi-dep-col-title title-downstream">
                                                    Downstream Consumers
                                                </h4>
                                                <div className="vi-dep-node-stack">
                                                    {impactData.dependenciesTab.diagramDownstream.map(
                                                        (node) => (
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

                                    <aside className="vi-deps-side-col">
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

                                <div className="vi-deps-mid-grid">
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
                                                        (row) => (
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
                                                        (row) => (
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
                                                    (row) => (
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
                                                                  ? ` — ${item.description}`
                                                                  : ""
                                                          }`}
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

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
                                                                  ? ` — ${item.description}`
                                                                  : ""
                                                          }`}
                                                </li>
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
                            </div>
                        ) : (
                            /* TWO-COLUMN BODY LAYOUT */
                            <div className="vi-content-grid">
                                {/* LEFT MAIN COLUMN */}
                                <div className="vi-main-col">
                                    {(impactTab === "overview" || impactTab === "systems") && (
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
                                                <strong>
                                                    {impactData.impactCallout?.title ||
                                                        impactData.criticalityBannerTitle ||
                                                        (impactData.impactCallout?.level
                                                            ? `${impactData.impactCallout.level} Operational Impact`
                                                            : `Operational Impact if ${impactData.name} is Unavailable`)}
                                                </strong>
                                                <p>
                                                    {impactData.impactCallout?.message ||
                                                        impactData.impactCallout?.description ||
                                                        impactData.criticalityHint ||
                                                        impactData.impactAlert}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {(impactTab === "overview" || impactTab === "systems") && (
                                        <section
                                            className="vi-card vi-systems-card"
                                            aria-label="Applications and Systems Impacted"
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
                                                    <thead>
                                                        <tr>
                                                            <th>Application / System</th>
                                                            <th>Short Description</th>
                                                            <th>Business Function</th>
                                                            <th>
                                                                Impact if Down ({impactData.name})
                                                            </th>
                                                            <th>Direct Dependencies</th>
                                                            <th>ITS Owner</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {filteredImpactedSystems.map((sys) => (
                                                            <tr key={sys.id}>
                                                                <td className="vi-td-app">
                                                                    <strong>{sys.name}</strong>
                                                                    {sys.subName ? (
                                                                        <div className="vi-td-subname">
                                                                            {sys.subName}
                                                                        </div>
                                                                    ) : null}
                                                                </td>
                                                                <td className="vi-td-desc">
                                                                    {sys.description}
                                                                </td>
                                                                <td className="vi-td-func">
                                                                    {sys.businessFunction}
                                                                </td>
                                                                <td className="vi-td-impact">{sys.impact}</td>
                                                                <td className="vi-td-desc">
                                                                    {sys.dependencies || "—"}
                                                                </td>
                                                                <td className="vi-td-owner">
                                                                    {sys.owner || impactData.itsTeam}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </section>
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
                                                <ol
                                                    className="vi-bullet-list"
                                                    style={{ paddingLeft: "20px", margin: "12px 0 4px" }}
                                                >
                                                    {impactData.validationChecklist.map((step, idx) => (
                                                        <li key={idx} style={{ marginBottom: "8px" }}>
                                                            {step}
                                                        </li>
                                                    ))}
                                                </ol>
                                            </section>
                                        )}

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
                                                <table className="vi-table">
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
                                                <table className="vi-table">
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
                                    aria-label="Contacts and Quick Actions"
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
                                            <div className="vi-kv-row">
                                                <span className="vi-kv-label">
                                                    {impactData.vendorContacts.supportEmailNote
                                                        ? `Support Email (${impactData.vendorContacts.supportEmailNote})`
                                                        : "Support Email"}
                                                </span>
                                                <div className="vi-kv-val-group">
                                                    {String(
                                                        impactData.vendorContacts.supportEmail || ""
                                                    ).includes("@") ? (
                                                        <a
                                                            href={`mailto:${impactData.vendorContacts.supportEmail}`}
                                                            className="vi-kv-link"
                                                            title={
                                                                impactData.vendorContacts.supportEmailNote ||
                                                                impactData.vendorContacts.supportEmail
                                                            }
                                                        >
                                                            {impactData.vendorContacts.supportEmail}
                                                        </a>
                                                    ) : (
                                                        <strong className="vi-kv-strong">
                                                            {impactData.vendorContacts.supportEmail}
                                                        </strong>
                                                    )}
                                                    <button
                                                        type="button"
                                                        className="vi-copy-btn"
                                                        title="Copy Support Email"
                                                        aria-label="Copy Support Email"
                                                        onClick={() =>
                                                            handleCopyText(
                                                                impactData.vendorContacts.supportEmail,
                                                                "email"
                                                            )
                                                        }
                                                    >
                                                        {copiedField === "email" ? (
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
                                                        )}
                                                    </button>
                                                </div>
                                            </div>

                                            {impactData.vendorContacts.secondaryEmail && (
                                                <div className="vi-kv-row">
                                                    <span className="vi-kv-label">
                                                        {impactData.vendorContacts.secondaryEmailNote
                                                            ? `Secondary Email (${impactData.vendorContacts.secondaryEmailNote})`
                                                            : "Secondary Email"}
                                                    </span>
                                                    <div className="vi-kv-val-group">
                                                        <a
                                                            href={`mailto:${impactData.vendorContacts.secondaryEmail}`}
                                                            className="vi-kv-link"
                                                            title={
                                                                impactData.vendorContacts.secondaryEmailNote ||
                                                                impactData.vendorContacts.secondaryEmail
                                                            }
                                                        >
                                                            {impactData.vendorContacts.secondaryEmail}
                                                        </a>
                                                        <button
                                                            type="button"
                                                            className="vi-copy-btn"
                                                            title="Copy Secondary Email"
                                                            aria-label="Copy Secondary Email"
                                                            onClick={() =>
                                                                handleCopyText(
                                                                    impactData.vendorContacts.secondaryEmail,
                                                                    "secondaryEmail"
                                                                )
                                                            }
                                                        >
                                                            {copiedField === "secondaryEmail" ? (
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
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="vi-kv-row">
                                                <span className="vi-kv-label">Support Phone</span>
                                                <div className="vi-kv-val-group">
                                                    <strong className="vi-kv-strong">
                                                        {impactData.vendorContacts.supportPhone}
                                                    </strong>
                                                    <button
                                                        type="button"
                                                        className="vi-copy-btn"
                                                        title="Copy Support Phone"
                                                        aria-label="Copy Support Phone"
                                                        onClick={() =>
                                                            handleCopyText(
                                                                impactData.vendorContacts.supportPhone,
                                                                "phone"
                                                            )
                                                        }
                                                    >
                                                        {copiedField === "phone" ? (
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
                                                        )}
                                                    </button>
                                                </div>
                                            </div>

                                            {impactData.vendorContacts.technicalSupport && (
                                                <div className="vi-kv-row">
                                                    <span className="vi-kv-label">Technical Support</span>
                                                    <span className="vi-kv-muted">
                                                        {impactData.vendorContacts.technicalSupport}
                                                    </span>
                                                </div>
                                            )}

                                            {impactData.vendorContacts.supportHours && (
                                                <div className="vi-kv-row vi-kv-row-top">
                                                    <span className="vi-kv-label">
                                                        Support Service Hours
                                                    </span>
                                                    <span className="vi-kv-multiline">
                                                        {impactData.vendorContacts.supportHours}
                                                    </span>
                                                </div>
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
                                            <div className="vi-kv-row">
                                                <span className="vi-kv-label">ITS Team</span>
                                                <strong className="vi-kv-strong">
                                                    {impactData.internalContacts.itsTeam}
                                                </strong>
                                            </div>

                                            {impactData.internalContacts.itsTeamNote && (
                                                <div className="vi-kv-row vi-kv-row-top">
                                                    <span className="vi-kv-label">ITS Team Scope</span>
                                                    <span className="vi-kv-multiline">
                                                        {impactData.internalContacts.itsTeamNote}
                                                    </span>
                                                </div>
                                            )}

                                            <div className="vi-kv-row">
                                                <span className="vi-kv-label">Application Owner</span>
                                                <span
                                                    className={
                                                        String(
                                                            impactData.internalContacts.applicationOwner || ""
                                                        ).startsWith("(")
                                                            ? "vi-kv-muted"
                                                            : "vi-kv-strong"
                                                    }
                                                >
                                                    {impactData.internalContacts.applicationOwner}
                                                </span>
                                            </div>

                                            {impactData.internalContacts.systemAdministration && (
                                                <div className="vi-kv-row vi-kv-row-top">
                                                    <span className="vi-kv-label">
                                                        System Administration
                                                    </span>
                                                    <span className="vi-kv-multiline">
                                                        {impactData.internalContacts.systemAdministration}
                                                    </span>
                                                </div>
                                            )}

                                            <div className="vi-kv-row vi-kv-row-top">
                                                <span className="vi-kv-label">Business Owner</span>
                                                <strong className="vi-kv-strong">
                                                    {impactData.internalContacts.businessOwner}
                                                </strong>
                                            </div>

                                            {impactData.internalContacts.passwordSupport && (
                                                <div className="vi-kv-row">
                                                    <span className="vi-kv-label">Password Support</span>
                                                    <span className="vi-kv-muted">
                                                        {impactData.internalContacts.passwordSupport}
                                                    </span>
                                                </div>
                                            )}

                                            {impactData.internalContacts.everbridgeContacts && (
                                                <div className="vi-kv-row vi-kv-row-top">
                                                    <span className="vi-kv-label">
                                                        Everbridge Focal Contacts
                                                    </span>
                                                    <span className="vi-kv-multiline">
                                                        {impactData.internalContacts.everbridgeContacts}
                                                    </span>
                                                </div>
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

