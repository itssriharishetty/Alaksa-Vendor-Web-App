import React, { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useMasterData } from "../context/MasterDataContext";

const CATEGORY_SVGS = {
    "flight-operations": (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
    ),
    "crew": (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="3.5" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <circle cx="16.5" cy="7.5" r="2.8" />
        </svg>
    ),
    "airport-operations": (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="3" width="12" height="18" rx="1.5" />
            <path d="M3 10h3v11H3zM18 10h3v11h-3z" />
            <path d="M10 7h4M10 11h4M10 15h4M11 21v-3h2v3" />
        </svg>
    ),
    "maintenance": (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            <path d="m4 4 5.5 5.5" />
            <path d="m2.5 5.5 3-3" />
            <path d="m14.5 14.5 5 5" />
        </svg>
    ),
    "infrastructure": (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="12" rx="2" />
            <path d="M2 20h20" />
            <path d="M9 16v4" />
            <path d="M15 16v4" />
        </svg>
    ),
    "business-analytics": (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18" />
            <rect x="7" y="13" width="2.8" height="5" rx="0.6" />
            <rect x="12" y="9" width="2.8" height="9" rx="0.6" />
            <rect x="17" y="5" width="2.8" height="13" rx="0.6" />
        </svg>
    ),
    "cargo": (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
    ),
    "ecommerce": (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
    ),
    "weather": (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
    ),
    "communications": (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
            <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
            <circle cx="12" cy="12" r="2" />
            <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
            <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
        </svg>
    ),
    "contact-centers": (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
    )
};

const PILL_ICONS = {
    systems: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 12 12 17 22 12" />
            <polyline points="2 17 12 22 22 17" />
        </svg>
    ),
    warning: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
    ),
    link: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    ),
    check: (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.7-5 5a1 1 0 0 1-1.4 0l-2.2-2.2a1 1 0 0 1 1.4-1.4l1.5 1.5 4.3-4.3a1 1 0 0 1 1.4 1.4z" />
        </svg>
    )
};

const INITIAL_CATEGORIES = [
    {
        id: "flight-operations",
        name: "Flight Operations",
        theme: "blue",
        icon: "✈",
        description: "Systems supporting flight planning, aircraft communication, flight tracking, and operational decision-making.",
        badgeOverride: {
            type: "groundstop",
            text: "5 Ground Stop Apps"
        },
        systems: [
            {
                name: "ACARS",
                shortName: "ACARS",
                appId: "acars",
                vendorSearch: "ACARS",
                description: "Aircraft Communications Addressing and Reporting System for digital datalink messaging between aircraft and ground stations."
            },
            {
                name: "JetPlan (Flight Planning)",
                shortName: "JetPlan",
                appId: "jetplan",
                vendorSearch: "Flight Planning",
                description: "Jeppesen operational flight planning system for calculating optimal routes, fuel requirements, and weather considerations."
            },
            {
                name: "Airtrak",
                shortName: "Airtrak",
                appId: "airtrack",
                vendorSearch: "Airtrak",
                description: "Real-time aircraft movement and irregular operations (IROPS) tracking platform used by NOC, SOC, and Dispatch."
            },
            {
                name: "Smart4Aviation (S4A)",
                shortName: "S4A",
                appId: "Smart4Aviation (S4A)",
                vendorSearch: "S4A",
                description: "Automated weight and balance load management system used by Centralized Load Planning (CLP) for aircraft load closeouts."
            },
            {
                name: "JCTE",
                shortName: "JCTE",
                appId: "jcte",
                vendorSearch: "JCTE",
                description: "Jeppesen Crew Tracking Enterprise for crew scheduling, alert monitoring, and operational crew tracking."
            },
            {
                name: "Aircraft Performance",
                shortName: "AeroData",
                appId: "",
                vendorSearch: "Aircraft performance data",
                description: "AeroData aircraft performance calculations, takeoff/landing weight analysis, and runway performance data."
            }
        ]
    },
    {
        id: "crew",
        name: "Crew Operations",
        theme: "purple",
        icon: "👥",
        description: "Applications supporting crew tracking, crew scheduling, bidding, and mobile pre-flight briefing workflows.",
        badgeOverride: {
            type: "groundstop",
            text: "1 Ground Stop App"
        },
        moreCountOverride: 1,
        systems: [
            {
                name: "AIMS",
                shortName: "AIMS",
                appId: "aims",
                vendorSearch: "AIMS",
                description: "Airline Information Management System (Horizon Crew Tracking / eCrew) for scheduling pilots and flight attendants."
            },
            {
                name: "JCTE",
                shortName: "JCTE",
                appId: "jcte",
                vendorSearch: "JCTE",
                description: "Jeppesen Crew Tracking Enterprise supporting Alaska Airlines crew scheduling, In-Flight, and frontline crew access."
            },
            {
                name: "Pilot Briefing (JetPack)",
                shortName: "Pilot Briefing",
                appId: "pilot-briefing",
                vendorSearch: "Pilot Briefing",
                description: "JetPack iPad application used by AS and QX pilots for pre-flight briefing packets, fit-for-duty sign-off, and en-route tracking."
            }
        ]
    },
    {
        id: "airport-operations",
        name: "Airport Operations",
        theme: "green",
        icon: "▦",
        description: "Systems supporting airport gate management, passenger check-in, baggage handling, and terminal display systems.",
        badgeOverride: {
            type: "vendor",
            text: "1 Vendor Link"
        },
        systems: [
            {
                name: "Real Time Gates (RTG)",
                shortName: "RTG",
                appId: "",
                vendorSearch: "Real Time Gates",
                description: "INFORM GroundStar / Real Time Gates (RTG) and Gatesheet platform for airport gate planning and turnaround management."
            },
            {
                name: "Web / Kiosk Check-In",
                shortName: "Kiosk Check-In",
                appId: "",
                vendorSearch: "Web/Kiosk Check-in",
                description: "Self-service web and airport kiosk passenger check-in and boarding pass issuance applications."
            },
            {
                name: "Information Display Applications (FIDS)",
                shortName: "FIDS",
                appId: "",
                vendorSearch: "Information Display Applications",
                description: "Airport flight, gate, lobby, and ramp information display systems (FIDS / GIDS / LIDS / RIDS / xIDS)."
            },
            {
                name: "NetTracer System",
                shortName: "NetTracer",
                appId: "",
                vendorSearch: "NetTracer",
                description: "Baggage incident management, delayed/lost luggage tracing, and passenger baggage recovery platform."
            },
            {
                name: "Brock SmartSuite",
                shortName: "SmartSuite",
                appId: "",
                vendorSearch: "BrockSmartsuite",
                description: "SaaS web and mobile scanner platform used across airports to scan, reconcile, and track checked-in baggage."
            },
            {
                name: "Baggage Operations",
                shortName: "Baggage Ops",
                appId: "",
                vendorSearch: "Baggage",
                description: "Airport baggage handling integrations, sortation messaging, and operational baggage services."
            },
            {
                name: "CSA Mobile",
                shortName: "CSA Mobile",
                appId: "",
                vendorSearch: "CSA Mobile",
                description: "Mobile customer service agent applications for departure gate boarding and airport lobby assistance."
            }
        ]
    },
    {
        id: "maintenance",
        name: "Maintenance & Engineering",
        theme: "amber",
        icon: "🔧",
        description: "Systems used for aircraft maintenance, engineering records, reliability, and technical operations.",
        badgeOverride: {
            type: "groundstop",
            text: "1 Ground Stop App"
        },
        systems: [
            {
                name: "Smart4Aviation (S4A)",
                shortName: "S4A",
                appId: "Smart4Aviation (S4A)",
                vendorSearch: "S4A",
                description: "Weight and balance load management and aircraft operational readiness integration."
            },
            {
                name: "Aircraft Performance (AeroData)",
                shortName: "AeroData",
                appId: "",
                vendorSearch: "Aircraft performance data",
                description: "AeroData aircraft weight, runway performance, and engineering operational data services."
            },
            {
                name: "Aircraft Maintenance Manuals (AMM)",
                shortName: "AMM",
                appId: "",
                vendorSearch: "Boeing",
                description: "Boeing Toolbox technical publications, aircraft maintenance manuals, and engineering support documentation."
            },
            {
                name: "Aircraft Maintenance (TRAX)",
                shortName: "TRAX",
                appId: "aircraft-maintenance",
                vendorSearch: "TRAX",
                description: "Core M&E platform for inventory management, engineering controls, work orders, and defect tracking across AS and QX."
            },
            {
                name: "QX TRAX System",
                shortName: "QX TRAX",
                appId: "aircraft-maintenance",
                vendorSearch: "QX TRAX System",
                description: "Horizon Air regional fleet maintenance tracking, engineering work orders, and airworthiness management."
            }
        ]
    },
    {
        id: "infrastructure",
        name: "IT & Infrastructure",
        theme: "red",
        icon: "💻",
        description: "Core IT infrastructure, network services, identity management, and enterprise platforms.",
        badgeOverride: {
            type: "vendor",
            text: "1 Vendor Link"
        },
        systems: [
            {
                name: "WAM (Weather Alert Monitoring)",
                shortName: "WAM",
                appId: "wam",
                vendorSearch: "Weather",
                description: "Enterprise operational weather alert monitoring and platform integration services."
            },
            {
                name: "Active Directory",
                shortName: "Active Directory",
                appId: "",
                vendorSearch: "Microsoft",
                description: "Enterprise identity, authentication, single sign-on, and directory access management."
            },
            {
                name: "ServiceNow",
                shortName: "ServiceNow",
                appId: "",
                vendorSearch: "Microsoft",
                description: "IT service management, operational incident ticketing, change management, and escalation workflows."
            },
            {
                name: "TIBCO Messaging & Integration",
                shortName: "TIBCO",
                appId: "",
                vendorSearch: "TIBCO",
                description: "Core enterprise integration backbone routing real-time operational events across flight, crew, and airport systems."
            },
            {
                name: "Microsoft Azure Cloud",
                shortName: "Azure Cloud",
                appId: "",
                vendorSearch: "Microsoft",
                description: "Enterprise cloud infrastructure, application hosting, identity, and managed platform services."
            },
            {
                name: "NetTracer Platform",
                shortName: "NetTracer",
                appId: "",
                vendorSearch: "NetTracer",
                description: "Hosted operational baggage tracing infrastructure and airline recovery service integration."
            }
        ]
    },
    {
        id: "business-analytics",
        name: "Business & Analytics",
        theme: "cyan",
        icon: "📊",
        description: "Reporting, analytics, operational performance, and data visualization systems.",
        badgeOverride: {
            type: "safe",
            text: "0 Ground Stop Apps"
        },
        systems: [
            {
                name: "AIMS Reports",
                shortName: "AIMS Reports",
                appId: "",
                vendorSearch: "AIMS",
                description: "Operational crew, flight schedule, and utilization analytics reporting suite."
            },
            {
                name: "Enterprise Data Lake",
                shortName: "Data Lake",
                appId: "",
                vendorSearch: "Microsoft",
                description: "Centralized operational data warehouse and streaming telemetry analytics repository."
            },
            {
                name: "BI Tools & Dashboards",
                shortName: "BI Tools",
                appId: "",
                vendorSearch: "PeopleSoft Financials",
                description: "Executive and NOC operational KPI visualization, on-time performance, and SLA reporting tools."
            },
            {
                name: "PeopleSoft Financials (PSFin)",
                shortName: "PSFin",
                appId: "",
                vendorSearch: "PeopleSoft Financials",
                description: "Enterprise financial management, general ledger, accounts payable, and corporate accounting platform."
            }
        ]
    },
    {
        id: "cargo",
        name: "Cargo",
        theme: "amber",
        icon: "▣",
        description: "Systems supporting air cargo booking, freight handling, payment processing, and cargo terminal operations.",
        badgeOverride: {
            type: "vendor",
            text: "2 Vendor Links"
        },
        systems: [
            {
                name: "iCargo System",
                shortName: "iCargo",
                appId: "",
                vendorSearch: "iCargo",
                description: "IBS iCargo and CargoSpot platform managing air freight reservations, manifest tracking, and warehouse operations."
            },
            {
                name: "Cargo Spot",
                shortName: "Cargo Spot",
                appId: "",
                vendorSearch: "Cargo Spot",
                description: "Cargo payment processing, billing reconciliation, and freight customer portal services."
            }
        ]
    },
    {
        id: "ecommerce",
        name: "E-Commerce",
        theme: "purple",
        icon: "◇",
        description: "Customer-facing commerce, airline reservations, fare shopping, revenue accounting, and loyalty platforms.",
        badgeOverride: {
            type: "vendor",
            text: "5 Vendor Links"
        },
        systems: [
            {
                name: "Sabre Reservation System",
                shortName: "Sabre",
                appId: "",
                vendorSearch: "Sabre",
                description: "Core Passenger Service System (PSS) for airline reservations, ticketing, inventory, and departure control."
            },
            {
                name: "Image Reservations",
                shortName: "Image",
                appId: "",
                vendorSearch: "Image",
                description: "Reservation center booking workflows, customer reservation management, and partner ticketing services."
            },
            {
                name: "Shopping Service System",
                shortName: "Shopping Service",
                appId: "",
                vendorSearch: "Shopping Service",
                description: "Google QPX / QPXconnect / QPXReshop fare shopping and flight itinerary pricing engine."
            },
            {
                name: "SOLAR - Mileage Plan",
                shortName: "SOLAR",
                appId: "",
                vendorSearch: "SOLAR",
                description: "Oracle Siebel / LMS loyalty management platform powering Alaska Airlines Mileage Plan member accounts."
            },
            {
                name: "Accelya (Revera Suite)",
                shortName: "Accelya",
                appId: "",
                vendorSearch: "Accelya",
                description: "Airline revenue accounting, interline billing, and ticket proration platform."
            }
        ]
    },
    {
        id: "weather",
        name: "Weather",
        theme: "cyan",
        icon: "☁",
        description: "Meteorological data feeds, turbulence alerting, and weather visualization platforms for Dispatch and Flight Ops.",
        badgeOverride: {
            type: "groundstop",
            text: "1 Ground Stop App"
        },
        systems: [
            {
                name: "Weather / WSI Fusion",
                shortName: "WSI Fusion",
                appId: "wam",
                vendorSearch: "Weather",
                description: "The Weather Company (TWC) FlightFX API and WSI Fusion platform supplying critical weather data to Dispatch and pilots."
            },
            {
                name: "Weather Feed (TWC / WSI)",
                shortName: "Weather Feed",
                appId: "wam",
                vendorSearch: "Weather Feed",
                description: "Automated meteorological data feeds powering WAM, Aircom pilot weather requests, JetPack, and Flyways."
            },
            {
                name: "WSI Pilotbrief / FlightFX",
                shortName: "FlightFX",
                appId: "wam",
                vendorSearch: "WSI Fusion",
                description: "Real-time weather visualization, radar tracking, and flight hazard alerting workstation for Flight Dispatch."
            }
        ]
    },
    {
        id: "communications",
        name: "Communications",
        theme: "blue",
        icon: "⌁",
        description: "Air-to-ground datalink networks, VHF/SATCOM radio gateways, and dispatch voice communication platforms.",
        badgeOverride: {
            type: "groundstop",
            text: "1 Ground Stop App"
        },
        systems: [
            {
                name: "ACARS",
                shortName: "ACARS",
                appId: "acars",
                vendorSearch: "ACARS",
                description: "SITA Aircom digital datalink network for exchanging operational messages and OOOI times between aircraft and ground."
            },
            {
                name: "ARINC Air/Ground Communications",
                shortName: "ARINC",
                appId: "",
                vendorSearch: "ARINC",
                description: "Collins Aerospace / ARINC voice and datalink communication services connecting ground operations with aircraft."
            },
            {
                name: "AvTec Dispatch Console",
                shortName: "AvTec",
                appId: "",
                vendorSearch: "AvTec",
                description: "AvTec Scout VoIP radio console system used for air-to-ground and operational dispatch voice communications."
            }
        ]
    },
    {
        id: "contact-centers",
        name: "Contact Centers",
        theme: "green",
        icon: "🎧",
        description: "Cloud telephony, interactive voice response, and workforce management platforms for customer contact centers.",
        badgeOverride: {
            type: "vendor",
            text: "2 Vendor Links"
        },
        systems: [
            {
                name: "Intelligent Cloud Contact Center",
                shortName: "Five9 Cloud",
                appId: "",
                vendorSearch: "Five9",
                description: "Five9 cloud contact center platform routing customer calls, agent desktops, and IVR self-service workflows."
            },
            {
                name: "Alvaria (Aspect WFM / WFO)",
                shortName: "Alvaria WFM",
                appId: "",
                vendorSearch: "Alvaria",
                description: "Workforce management and forecasting platform for contact center agent scheduling and real-time adherence."
            }
        ]
    }
];

function getCategoryMetrics(category) {
    const totalSystems = category.systems.length;
    const groundStopApps = category.systems.filter((s) => Boolean(s.appId)).length;
    const vendorLinks = totalSystems;
    return {
        totalSystems,
        groundStopApps,
        vendorLinks
    };
}

export default function Categories() {
    const { applications, groundStopKeys } = useMasterData();
    const [searchParams] = useSearchParams();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState("");
    const [selectedSystem, setSelectedSystem] = useState("");
    const [activeCategory, setActiveCategory] = useState(null);

    const categories = useMemo(() => {
        const groundStopKeySet = new Set(groundStopKeys || []);
        const masterApplicationsMap = applications || {};

        return INITIAL_CATEGORIES.map((category) => ({
            ...category,
            systems: category.systems.map((system) => {
                const resolvedAppId = system.appId && groundStopKeySet.has(system.appId) ? system.appId : "";
                const masterApp = resolvedAppId ? masterApplicationsMap[resolvedAppId] : null;
                return {
                    name: system.name || (masterApp && masterApp.name) || "System",
                    shortName: system.shortName || system.name || "System",
                    description: system.description || (masterApp && masterApp.function) || "Operational system",
                    appId: resolvedAppId,
                    vendorSearch: system.vendorSearch || system.name
                };
            })
        }));
    }, [applications, groundStopKeys]);

    const sortedSystems = useMemo(() => {
        const uniqueSystemNames = new Map();
        categories.forEach((cat) => {
            cat.systems.forEach((sys) => {
                const key = sys.shortName.toLowerCase();
                if (!uniqueSystemNames.has(key)) {
                    uniqueSystemNames.set(key, sys.shortName);
                }
            });
        });
        return Array.from(uniqueSystemNames.values()).sort((a, b) => a.localeCompare(b));
    }, [categories]);

    // Sync URL search params on mount / navigation
    useEffect(() => {
        const searchParam = searchParams.get("search");
        const categoryParam = searchParams.get("category");

        if (searchParam) {
            setSearchQuery(searchParam);
        }

        if (categoryParam) {
            const normalizedParam = categoryParam.toLowerCase();
            const match = categories.find(
                (cat) =>
                    cat.id.toLowerCase() === normalizedParam ||
                    cat.name.toLowerCase() === normalizedParam ||
                    (normalizedParam === "corporate-applications" && cat.id === "business-analytics")
            );
            if (match) {
                setActiveCategory(match);
            }
        }
    }, [searchParams, categories]);

    // Escape key & body overflow for modal
    useEffect(() => {
        if (activeCategory) {
            document.body.style.overflow = "hidden";
            const handleKeyDown = (e) => {
                if (e.key === "Escape") {
                    setActiveCategory(null);
                }
            };
            document.addEventListener("keydown", handleKeyDown);
            return () => {
                document.body.style.overflow = "";
                document.removeEventListener("keydown", handleKeyDown);
            };
        } else {
            document.body.style.overflow = "";
        }
    }, [activeCategory]);

    const filteredCategories = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        const selectedCat = selectedCategoryId.trim().toLowerCase();
        const selectedSys = selectedSystem.trim().toLowerCase();

        return categories.filter((category) => {
            if (selectedCat && category.id.toLowerCase() !== selectedCat) {
                return false;
            }

            if (selectedSys) {
                const matchesSys = category.systems.some(
                    (sys) =>
                        (sys.shortName && sys.shortName.toLowerCase().includes(selectedSys)) ||
                        (sys.name && sys.name.toLowerCase().includes(selectedSys))
                );
                if (!matchesSys) {
                    return false;
                }
            }

            if (!query) {
                return true;
            }

            const categoryText = [
                category.id,
                category.name,
                category.description,
                ...category.systems.map((s) => s.name),
                ...category.systems.map((s) => s.shortName),
                ...category.systems.map((s) => s.vendorSearch),
                ...category.systems.map((s) => s.description)
            ]
                .join(" ")
                .toLowerCase();

            return categoryText.includes(query);
        });
    }, [categories, searchQuery, selectedCategoryId, selectedSystem]);

    const renderSecondaryPill = (category, metrics) => {
        if (category.badgeOverride) {
            const { type, text } = category.badgeOverride;
            if (type === "groundstop") {
                return (
                    <div className="category-mini-stat groundstop-pill">
                        {PILL_ICONS.warning}
                        <span>{text}</span>
                    </div>
                );
            }
            if (type === "safe") {
                return (
                    <div className="category-mini-stat safe-pill">
                        {PILL_ICONS.check}
                        <span>{text}</span>
                    </div>
                );
            }
            return (
                <div className="category-mini-stat vendor-pill">
                    {PILL_ICONS.link}
                    <span>{text}</span>
                </div>
            );
        }

        if (metrics.groundStopApps > 0) {
            const label = metrics.groundStopApps === 1 ? "1 Ground Stop App" : `${metrics.groundStopApps} Ground Stop Apps`;
            return (
                <div className="category-mini-stat groundstop-pill">
                    {PILL_ICONS.warning}
                    <span>{label}</span>
                </div>
            );
        }

        const vendorLabel = metrics.vendorLinks === 1 ? "1 Vendor Link" : `${metrics.vendorLinks} Vendor Links`;
        return (
            <div className="category-mini-stat vendor-pill">
                {PILL_ICONS.link}
                <span>{vendorLabel}</span>
            </div>
        );
    };

    const modalMetrics = activeCategory ? getCategoryMetrics(activeCategory) : { totalSystems: 0, groundStopApps: 0, vendorLinks: 0 };

    return (
        <>
            <main className="categories-main ias-main-content">
                <header className="category-page-header" aria-label="System Categories Header">
                    <div className="category-page-title-group">
                        <h1 className="category-page-title">
                            System <span className="category-title-accent">Categories</span>
                        </h1>
                        <p className="category-page-subtitle">Operational domains, critical systems &amp; mapped vendor support</p>
                    </div>
                    <div className="category-page-header-actions">
                        <span className="category-header-pill">
                            <span className="category-header-dot" aria-hidden="true"></span>
                            <span>11 Operational Domains</span>
                        </span>
                    </div>
                </header>

                <section className="category-directory">
                    <div className="category-filter-bar" role="region" aria-label="Filter categories">
                        <div className="category-search">
                            <span className="search-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </span>
                            <input
                                id="categorySearch"
                                type="search"
                                placeholder="Search categories, systems or keywords..."
                                aria-label="Search categories, systems or keywords"
                                autoComplete="off"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="category-filter-controls">
                            <div className="cat-select-wrap">
                                <span className="cat-select-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="7" height="7" rx="1.5" />
                                        <rect x="14" y="3" width="7" height="7" rx="1.5" />
                                        <rect x="14" y="14" width="7" height="7" rx="1.5" />
                                        <rect x="3" y="14" width="7" height="7" rx="1.5" />
                                    </svg>
                                </span>
                                <select
                                    id="categorySelectFilter"
                                    className="category-filter-select"
                                    aria-label="Filter by category"
                                    value={selectedCategoryId}
                                    onChange={(e) => setSelectedCategoryId(e.target.value)}
                                >
                                    <option value="">All Categories</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                                <span className="cat-select-chevron" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </span>
                            </div>

                            <div className="cat-select-wrap">
                                <span className="cat-select-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                        <polyline points="2 12 12 17 22 12" />
                                        <polyline points="2 17 12 22 22 17" />
                                    </svg>
                                </span>
                                <select
                                    id="systemSelectFilter"
                                    className="category-filter-select"
                                    aria-label="Filter by system"
                                    value={selectedSystem}
                                    onChange={(e) => setSelectedSystem(e.target.value)}
                                >
                                    <option value="">All Systems</option>
                                    {sortedSystems.map((sysName) => (
                                        <option key={sysName} value={sysName.toLowerCase()}>
                                            {sysName}
                                        </option>
                                    ))}
                                </select>
                                <span className="cat-select-chevron" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </span>
                            </div>

                            <button
                                id="clearCategorySearch"
                                className="clear-search"
                                type="button"
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategoryId("");
                                    setSelectedSystem("");
                                }}
                            >
                                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M21 12a9 9 0 1 1-2.64-6.36" />
                                    <polyline points="21 3 21 9 15 9" />
                                </svg>
                                <span>Clear Filters</span>
                            </button>
                        </div>
                    </div>

                    <div id="categoryGrid" className="category-grid">
                        {filteredCategories.map((category, idx) => {
                            const previewSystems = category.systems.slice(0, 3);
                            const remaining =
                                typeof category.moreCountOverride === "number"
                                    ? category.moreCountOverride
                                    : Math.max(0, category.systems.length - previewSystems.length);
                            const metrics = getCategoryMetrics(category);
                            const themeClass = category.theme ? `theme-${category.theme}` : "theme-blue";

                            return (
                                <article
                                    key={category.id}
                                    className="category-card"
                                    data-category-index={idx}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    <div className="category-card-body">
                                        <div className="category-card-header">
                                            <div className={`category-icon ${themeClass}`} aria-hidden="true">
                                                {CATEGORY_SVGS[category.id] || category.icon || "✈"}
                                            </div>
                                            <div className="category-card-titles">
                                                <h3>{category.name}</h3>
                                                <p className="category-card-description">{category.description}</p>
                                            </div>
                                        </div>

                                        <div className="category-card-bottom">
                                            <div className="category-card-meta">
                                                <div className="category-card-stats">
                                                    <div className="category-mini-stat systems-pill">
                                                        {PILL_ICONS.systems}
                                                        <span>
                                                            <strong>{metrics.totalSystems}</strong>{" "}
                                                            {metrics.totalSystems === 1 ? "System" : "Systems"}
                                                        </span>
                                                    </div>
                                                    {renderSecondaryPill(category, metrics)}
                                                </div>

                                                <div className="category-system-preview">
                                                    {previewSystems.map((system) => (
                                                        <span
                                                            key={system.name}
                                                            className="system-chip"
                                                            title={`${system.name} — ${system.description}`}
                                                        >
                                                            {system.shortName || system.name}
                                                        </span>
                                                    ))}
                                                    {remaining > 0 && <span className="system-chip more">+{remaining} more</span>}
                                                </div>
                                            </div>

                                            <button
                                                className="view-category"
                                                type="button"
                                                data-category-index={idx}
                                                aria-label={`Explore ${category.name}`}
                                                title={`Explore ${category.name}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveCategory(category);
                                                }}
                                            >
                                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <path d="M5 12h14" />
                                                    <path d="m12 5 7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {filteredCategories.length === 0 && (
                        <div id="noCategoryResults" className="no-category-results">
                            <div className="no-results-icon">⌕</div>
                            <h3>No categories found</h3>
                            <p>Try a different category, system, or keyword filter.</p>
                        </div>
                    )}
                </section>
            </main>

            <div
                id="categoryModal"
                className={`category-modal ${activeCategory ? "active" : ""}`}
                aria-hidden={activeCategory ? "false" : "true"}
            >
                <div className="category-modal-overlay" onClick={() => setActiveCategory(null)}></div>

                <div
                    className="category-modal-card"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="categoryModalTitle"
                >
                    <button
                        id="categoryModalClose"
                        className="modal-close"
                        type="button"
                        aria-label="Close"
                        onClick={() => setActiveCategory(null)}
                    >
                        ×
                    </button>

                    <div className="modal-header">
                        <div id="categoryModalIcon" className="modal-category-icon">
                            {activeCategory ? CATEGORY_SVGS[activeCategory.id] || activeCategory.icon || "✈" : "✈"}
                        </div>

                        <div className="modal-header-text">
                            <div className="modal-eyebrow">OPERATIONAL CATEGORY</div>
                            <h2 id="categoryModalTitle">{activeCategory ? activeCategory.name : "Category"}</h2>
                            <p id="categoryModalDescription">
                                {activeCategory ? activeCategory.description : "Category description"}
                            </p>
                        </div>
                    </div>

                    <div className="modal-summary">
                        <div className="modal-summary-item">
                            <span>Total Systems</span>
                            <strong id="modalSystemCount">{modalMetrics.totalSystems}</strong>
                        </div>

                        <div className="modal-summary-item">
                            <span>Ground Stop Apps</span>
                            <strong id="modalAppCount">{modalMetrics.groundStopApps}</strong>
                        </div>

                        <div className="modal-summary-item">
                            <span>Vendor Directory Links</span>
                            <strong id="modalVendorCount">{modalMetrics.vendorLinks}</strong>
                        </div>
                    </div>

                    <div className="modal-section">
                        <div className="modal-section-header">
                            <div className="modal-section-title">Systems &amp; Applications</div>
                            <span className="modal-section-hint">
                                Click any system card to open its escalation or vendor record
                            </span>
                        </div>

                        <div id="modalSystems" className="modal-systems">
                            {activeCategory &&
                                activeCategory.systems.map((system) => {
                                    const searchKey = system.vendorSearch || system.name;
                                    const targetTo = system.appId
                                        ? `/ground-stops?application=${encodeURIComponent(system.appId)}`
                                        : `/vendors?search=${encodeURIComponent(searchKey)}`;
                                    return (
                                        <Link
                                            key={system.name}
                                            to={targetTo}
                                            className="modal-system"
                                            onClick={() => setActiveCategory(null)}
                                        >
                                            <div className="modal-system-head">
                                                <strong>{system.name}</strong>
                                                <small className={`modal-system-badge ${system.appId ? "app" : "vendor"}`}>
                                                    {system.appId ? "Ground Stop App ↗" : "Vendor Directory ↗"}
                                                </small>
                                            </div>
                                            <span>
                                                {Array.isArray(system.description)
                                                    ? system.description.join(" ")
                                                    : system.description}
                                            </span>
                                        </Link>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="modal-actions">
                        <Link
                            id="modalViewVendors"
                            to="/vendors"
                            className="modal-action primary"
                            onClick={() => setActiveCategory(null)}
                        >
                            View Vendors
                            <span>→</span>
                        </Link>

                        <Link
                            to="/ground-stops"
                            className="modal-action secondary"
                            onClick={() => setActiveCategory(null)}
                        >
                            View Ground Stop Apps
                            <span>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

