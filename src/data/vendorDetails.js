export const VENDOR_IMPACT_DETAILS = {
  accelya: {
    id: "accelya",
    name: "Accelya",
    breadcrumbTrail: ["Vendors", "Accelya", "Vendor Impact"],
    pageTitle: "Accelya - Vendor Impact Details",
    pageSubtitle:
      "Accelya provides the Revera passenger revenue accounting suite for ticket sales, audit, and financial settlement.",
    applicationsTabTitle: "Accelya",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "View all Alaska applications and systems that depend on Accelya, including business function, dependencies, and expected impact if this vendor experiences an outage or degraded service.",
    applicationsCardSubtitle:
      "This list shows Alaska applications and systems that use Accelya services. Not all systems may be impacted for every incident.",
    dependenciesTabTitle: "Accelya - Dependencies",
    dependenciesTabSubtitle:
      "View upstream and downstream dependencies, integrations, and infrastructure components for Accelya.",
    status: "Active",
    lastUpdated: "Oct 30, 2026",
    subtitle: "Revera suite / Revenue Accounting & NDC Solutions",
    company: "Accelya Solutions",
    website: "https://www.accelya.com",
    category: "Finance & Distribution",
    itsTeam: "ITS Corporate Applications",
    logo: "public/vendors/accelya.jpg",
    impactSummary: {
      confirmed: 0,
      potential: 6,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title: "Vendor Impact Information",
      message:
        "The information below shows potential and confirmed impact to Alaska applications and systems if Accelya experiences an outage, degraded service, or connectivity issue. Not all systems may be impacted for every incident. Validate impact with the application owner."
    },
    impactedSystems: [
      {
        id: "accelya-prism",
        name: "Accelya PRISM",
        subName: "",
        appTabSubName: "",
        description: "Reporting tool for custom revenue accounting reports",
        appTabDescription: "Reporting tool for custom revenue accounting reports",
        businessFunction: "Finance / Revenue Accounting",
        impact: "Reports unavailable or delayed",
        dependencies: "Accelya, Data Warehouse",
        status: "Potential",
        owner: "ITS Corporate Applications"
      },
      {
        id: "mozart",
        name: "Mozart",
        subName: "",
        appTabSubName: "",
        description: "Refund file processing",
        appTabDescription: "Refund file processing",
        businessFunction: "Refund Management",
        impact: "Refund files not processed; customer refunds delayed",
        dependencies: "Sabre, IWS, Axway, Financial Institutions",
        status: "Potential",
        owner: "ITS Corporate Applications"
      },
      {
        id: "iws-jobs",
        name: "IWS Jobs",
        subName: "(e.g., IM_VCRREFUNDFTP)",
        appTabSubName: "(IM_VCRREFUNDFTP)",
        description: "File generation and transfer jobs",
        appTabDescription: "File generation and transfer jobs",
        businessFunction: "File Transfer",
        impact: "Jobs may fail or remain incomplete",
        dependencies: "Sabre, Axway, Accelya",
        status: "Potential",
        owner: "ITS Infrastructure Services"
      },
      {
        id: "axway-file-transfer",
        name: "Axway (File Transfer)",
        subName: "",
        appTabSubName: "",
        description: "SFTP/FTP file transfers with Accelya",
        appTabDescription: "SFTP/FTP file transfers with Accelya",
        businessFunction: "Data Exchange",
        impact: "Inbound/outbound revenue files not sent or received",
        dependencies: "Accelya, Network",
        status: "Potential",
        owner: "ITS Infrastructure Services"
      },
      {
        id: "accelya-dwh-report",
        name: "ACCELYA_STQO180_DWH_REPORT",
        subName: "",
        appTabSubName: "",
        description: "Data load to data warehouse",
        appTabDescription: "Data load to data warehouse",
        businessFunction: "Reporting / Analytics",
        impact: "Data load delayed or failed; downstream reports impacted",
        dependencies: "Accelya, Data Services",
        status: "Potential",
        owner: "ITS Data Services"
      },
      {
        id: "accelya-sprk",
        name: "Accelya SPRK",
        subName: "",
        appTabSubName: "(HAConnect NDC)",
        description: "Front end UI for HAConnect (NDC)",
        appTabDescription: "Front end UI for NDC testing and administration",
        businessFunction: "NDC Distribution",
        impact: "NDC testing, administration or transactions may be impacted",
        dependencies: "Accelya, HAConnect, Distribution Systems",
        status: "Potential",
        owner: "ITS Corporate Applications"
      }
    ],
    upstreamDependencies: [
      "Sabre (refund files)",
      "IWS (file generation and transfer jobs)",
      "Axway (secure file transfer)",
      "Network connectivity (VPN/Direct Connect)"
    ],
    downstreamConsumers: [
      "Financial institutions (refund settlement)",
      "Alaska Data Warehouse / Reporting",
      "PRISM users (revenue accounting reports)",
      "Finance and Revenue Accounting teams",
      "Distribution / NDC (HAConnect)"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "This diagram shows the key upstream and downstream dependencies for Accelya and how it integrates with Alaska systems and external partners.",
      diagramUpstream: [
        {
          id: "sabre",
          name: "Sabre",
          subtitle: "(Refund files)",
          iconType: "ticket"
        },
        {
          id: "iws",
          name: "IWS Jobs",
          subtitle: "(File generation)",
          iconType: "doc"
        },
        {
          id: "axway",
          name: "Axway",
          subtitle: "(File transfer)",
          iconType: "transfer"
        },
        {
          id: "vpn",
          name: "Network / VPN",
          subtitle: "(Connectivity)",
          iconType: "network"
        }
      ],
      diagramServices: [
        "PRISM",
        "Mozart",
        "Revera Suite",
        "SPRK (HAConnect NDC)",
        "Reporting (DWH Load)"
      ],
      diagramDownstream: [
        {
          id: "fin",
          name: "Financial Institutions",
          subtitle: "(Refund settlement)",
          iconType: "bank"
        },
        {
          id: "dwh",
          name: "Alaska Data Warehouse",
          subtitle: "(Reporting / Analytics)",
          iconType: "database"
        },
        {
          id: "rev",
          name: "Alaska Revenue Teams",
          subtitle: "(Accounting & Reconciliation)",
          iconType: "team"
        },
        {
          id: "dist",
          name: "Distribution Systems",
          subtitle: "(NDC / HAConnect)",
          iconType: "nodes"
        },
        {
          id: "biz",
          name: "Business Users",
          subtitle: "(Reports & Analysis)",
          iconType: "users"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 4, tone: "red" },
        { label: "Downstream Consumers", count: 5, tone: "green" },
        { label: "Internal Systems", count: 3, tone: "blue" },
        { label: "External Systems", count: 4, tone: "blue" },
        { label: "Network / Infrastructure", count: 2, tone: "purple" }
      ],
      keyTakeaways: [
        "Accelya depends on Sabre, IWS, Axway and network connectivity for file processing.",
        "Revenue and refund processing are critical downstream consumers.",
        "Data warehouse reporting depends on Accelya data loads.",
        "NDC/HAConnect functionality relies on Accelya SPRK services."
      ],
      upstreamTable: [
        {
          id: "up-sabre",
          name: "Sabre",
          subName: "",
          description: "Provides refund files",
          type: "External",
          impact: "Refund files not generated"
        },
        {
          id: "up-iws",
          name: "IWS Jobs",
          subName: "(e.g., IM_VCRREFUNDFTP)",
          description: "File generation and transfer jobs",
          type: "Internal",
          impact: "Jobs may fail or remain incomplete"
        },
        {
          id: "up-axway",
          name: "Axway",
          subName: "",
          description: "SFTP/FTP file transfers",
          type: "Internal",
          impact: "Files not sent or received"
        },
        {
          id: "up-vpn",
          name: "Network / VPN",
          subName: "",
          description: "Connectivity to Accelya",
          type: "Infrastructure",
          impact: "No connectivity to Accelya"
        }
      ],
      downstreamTable: [
        {
          id: "down-fin",
          name: "Financial Institutions",
          description: "Refund settlement",
          type: "External",
          impact: "Refunds delayed to customers"
        },
        {
          id: "down-dwh",
          name: "Alaska Data Warehouse",
          description: "Reporting data load",
          type: "Internal",
          impact: "Reports delayed or unavailable"
        },
        {
          id: "down-rev",
          name: "Revenue Teams",
          description: "Accounting & Reconciliation",
          type: "Internal",
          impact: "Revenue processing delays"
        },
        {
          id: "down-dist",
          name: "Distribution Systems",
          description: "NDC / HAConnect",
          type: "Internal",
          impact: "NDC transactions may be affected"
        },
        {
          id: "down-biz",
          name: "Business Users",
          description: "PRISM Reports",
          type: "Internal",
          impact: "Custom reports unavailable"
        }
      ],
      infrastructureTable: [
        {
          id: "infra-fw",
          component: "Firewalls",
          description: "Firewall rules for Accelya connectivity",
          owner: "ITS Network",
          impact: "Application recovery may be affected"
        },
        {
          id: "infra-dc",
          component: "Data Centers (Primary/DR)",
          description: "Accelya hosted infrastructure",
          owner: "Accelya",
          impact: "Data synchronization issues during DR"
        },
        {
          id: "infra-db",
          component: "Databases",
          description: "Accelya databases and backups",
          owner: "Accelya",
          impact: "Potential data loss or recovery delays"
        }
      ]
    },
    typicalBusinessImpact: [
      "Delayed refund processing and customer refunds",
      "Revenue accounting files not processed",
      "Financial settlement delays",
      "Reporting data unavailable or delayed",
      "NDC distribution and testing impacted",
      "Manual workarounds may be required"
    ],
    knownWorkarounds: [
      "Use last available reports (PRISM)",
      "Monitor and re-run failed IWS jobs",
      "File transfers may be re-queued once connectivity is restored",
      "Work with application owner for manual processes (if available)",
      "Coordinate with Accelya support for file reprocessing"
    ],
    vendorContacts: {
      supportEmail: "customersupport@accelya.com",
      supportPhone: "+91 20 6608 3750",
      accountManager: "(Add name)",
      escalation: "Follow vendor escalation process\n(see ITS Vendor Information)"
    },
    internalContacts: {
      itsTeam: "ITS Corporate Applications",
      applicationOwner: "Tyler Sonnen",
      onCallSupport: "(Add on-call details)",
      businessOwner: "Finance / Revenue Accounting"
    },
    validationChecklist: [
      "Check vendor status or advisory",
      "Validate impacted applications from list",
      "Confirm file transfer status (Axway/IWS)",
      "Check refund file processing (Mozart)",
      "Verify PRISM reporting availability",
      "Check DWH data load status",
      "Confirm NDC/HAConnect functionality",
      "Update incident in ServiceNow",
      "Communicate impact to stakeholders"
    ],
    incidentHistory: [
      {
        id: "INC-2026-0914",
        date: "Sep 14, 2026",
        summary: "Delayed SFTP batch delivery for IM_VCRREFUNDFTP job",
        severity: "Severity 3",
        resolution: "Re-queued Axway transfer after VPN tunnel reset (42m duration)"
      },
      {
        id: "INC-2026-0602",
        date: "Jun 02, 2026",
        summary: "Scheduled maintenance window for Accelya PRISM reporting portal",
        severity: "Planned",
        resolution: "Completed within maintenance window; DWH load verified"
      }
    ],
    relatedDocuments: [
      {
        title: "Accelya Revera & PRISM Operational Runbook",
        type: "SOP / Playbook",
        owner: "ITS Corporate Applications",
        updated: "Oct 2026"
      },
      {
        title: "IWS Refund File Transfer Recovery Guide (IM_VCRREFUNDFTP)",
        type: "Technical Guide",
        owner: "Finance / Revenue Accounting",
        updated: "Sep 2026"
      },
      {
        title: "HAConnect (NDC) & Accelya SPRK Escalation Matrix",
        type: "Escalation Doc",
        owner: "Distribution / NDC",
        updated: "Aug 2026"
      }
    ]
  },
  aerodata: {
    id: "aerodata",
    name: "AeroData",
    breadcrumbTrail: ["Vendors", "AeroData", "Vendor Impact"],
    pageTitle: "AeroData - Vendor Impact Details",
    pageSubtitle:
      "AeroData provides aircraft performance, runway analysis, and weight and balance data for flight operations.",
    applicationsTabTitle: "AeroData",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "AeroData supports takeoff, landing, and runway performance data and is used by QX. The overall Aircraft Performance Data System is classified Tier 1 and ground-stop eligible/critical.",
    applicationsCardSubtitle:
      "This list shows Alaska applications and systems that use AeroData services. Boeing and Airbus performance processing is documented under Dynamic Source rather than AeroData; AeroData is explicitly associated with QX.",
    dependenciesTabTitle: "AeroData - Dependencies",
    dependenciesTabSubtitle:
      "Upstream dependencies, downstream consumers, and infrastructure components for AeroData (QX Aircraft Performance Data).",
    status: "Active",
    subtitle: "Flight Operations / Aircraft Performance Data (QX · Tier 1 Ground-Stop Critical)",
    company: "AeroData",
    website: "(Add Website/Support Portal URL)",
    category: "Flight Operations / Aircraft Performance Data",
    itsTeam: "ITS COG Flight Operations",
    logo: "public/vendors/aerodata.jpg",
    lastUpdated: "Nov 02, 2026",
    impactSummary: {
      confirmed: 0,
      potential: 3,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title: "Potential Impact on 3 Alaska Systems (Tier 1 / Ground-Stop Eligible)",
      message:
        "AeroData supports takeoff, landing, and runway performance data and is used by QX. The overall Aircraft Performance Data System is classified Tier 1 and ground-stop eligible/critical. Important scope note: Boeing and Airbus performance processing is documented under Dynamic Source rather than AeroData. AeroData is explicitly associated with QX.",
      description:
        "AeroData supports takeoff, landing, and runway performance data and is used by QX. The overall Aircraft Performance Data System is classified Tier 1 and ground-stop eligible/critical. Important scope note: Boeing and Airbus performance processing is documented under Dynamic Source rather than AeroData. AeroData is explicitly associated with QX.",
      updatedAgo: "Updated from Primary Internal Runbooks"
    },
    impactedSystems: [
      {
        id: "wam-aircraft-performance-data",
        name: "WAM / Aircraft Performance Data System",
        subName: "(QX Aircraft Performance Component)",
        appTabSubName: "(Tier 1 Ground-Stop System)",
        description:
          "Used by NOC/dispatchers for flight planning. It provides aircraft performance information for takeoff, landing, and runway lists. AeroData is the QX vendor component.",
        appTabDescription:
          "Used by NOC/dispatchers for flight planning. It provides aircraft performance information for takeoff, landing, and runway lists. AeroData is the QX vendor component.",
        businessFunction:
          "Flight Planning / Aircraft Performance; the runbook identifies WAM as a ground-stop system.",
        impact:
          "QX takeoff/landing reports may fail to return and aircraft performance data may not reach dispatch/crew.",
        dependencies:
          "AeroDataClientWS, AeroDataMessagingAgent, AeroData servers, AeroData client/DLL, MQ queues, and associated QX messaging path are explicitly shown in the operational and physical documentation.",
        status: "Potential",
        owner: "ITS COG Flight Operations"
      },
      {
        id: "aerodata-flight-planning-client",
        name: "AeroData Flight Planning Client / AeroData Desktop Flight Deck Performance Tool",
        subName: "(AeroData Flight Planning / Dispatch Client)",
        appTabSubName: "(AeroData Flight Planning / Dispatch Client)",
        description:
          "Dispatchers use the AeroData tool for performance data. The desktop tool is supported by AeroData and is documented as separate from WAM and WAM AeroData integrations.",
        appTabDescription:
          "Dispatchers use the AeroData tool for performance data. The desktop tool is supported by AeroData and is documented as separate from WAM and WAM AeroData integrations.",
        businessFunction: "Aircraft takeoff/landing performance for dispatch.",
        impact: "Dispatcher access to AeroData-provided performance data is affected.",
        dependencies:
          "AeroDataClientWS on dispatcher workstation; the client is launched through this local web-service bridge.",
        status: "Potential",
        owner:
          "ITS COG Flight Operations for integrated/WAM troubleshooting; standalone desktop tool issues are directed to AeroData Support."
      },
      {
        id: "aerodata-messaging-agent",
        name: "AeroDataMessagingAgent / QX aircraft performance messaging",
        subName: "(QX Aircraft Messaging / AeroDataMessagingAgent)",
        appTabSubName: "(QX Aircraft Messaging / AeroDataMessagingAgent)",
        description:
          "Messaging component supporting QX AeroData connectivity. The operational documents show hot/cold deployment on Seaprfoadata01/Tukprfoadata01 and another QX dispatch integration on Seavvapp22/Tukvvapp22.",
        appTabDescription:
          "Messaging component supporting QX AeroData connectivity. The operational documents show hot/cold deployment on Seaprfoadata01/Tukprfoadata01 and another QX dispatch integration on Seavvapp22/Tukvvapp22.",
        businessFunction:
          "Transfer/request-response processing for QX takeoff and landing performance data.",
        impact:
          "TLR responses may not return and crew/dispatch may report aircraft performance data not coming through.",
        dependencies:
          "AeroData servers, AeroDataMessagingAgent, QXEFBGW, MQ queues, file share/landing location, and FlyHT in the documented troubleshooting path.",
        status: "Potential",
        owner: "ITS COG Flight Operations"
      }
    ],
    upstreamDependencies: [
      "QX dispatch/AeroData client and AeroDataClientWS.",
      "WAM aircraft-performance processing and flight registration/session information.",
      "QX aircraft messaging path: for E175, the troubleshooting document says AeroData is contacted directly and dispatch also uses the AeroData client, with aircraft data delivered through ARINC.",
      "ARINC/SITA appears in the physical architecture alongside AircraftPerformanceData."
    ],
    downstreamConsumers: [
      "QX dispatchers using AeroData performance tools.",
      "Crew requiring takeoff/landing performance data.",
      "WAM / flight-planning workflows consuming takeoff, landing and runway performance information.",
      "FlyHT is part of the documented QX message path and is contacted if AeroData reports no vendor-side problem."
    ],
    dependenciesTab: {
      overviewSubtitle:
        "This diagram shows the key upstream and downstream dependencies for AeroData (QX Aircraft Performance Data) and how it integrates with WAM, QX dispatch workstations, MQ queues, and flight crew messaging paths. Relevant architecture sources include AircraftPerformance_Physical_View.pdf and AircraftPerformanceSystemDataFlowREV2.pdf.",
      diagramUpstream: [
        {
          id: "ad-dup-1",
          name: "QX Dispatch / AeroDataClientWS",
          subtitle: "Workstation Client & WS",
          iconType: "ticket"
        },
        {
          id: "ad-dup-2",
          name: "WAM Performance Processing",
          subtitle: "Flight Registration / Session",
          iconType: "doc"
        },
        {
          id: "ad-dup-3",
          name: "QX Aircraft Messaging (E175)",
          subtitle: "Direct AeroData + ARINC",
          iconType: "transfer"
        },
        {
          id: "ad-dup-4",
          name: "ARINC / SITA",
          subtitle: "Physical Architecture Path",
          iconType: "network"
        }
      ],
      diagramServices: [
        "WAM / Aircraft Performance Data",
        "AeroData Desktop Flight Deck Tool",
        "AeroDataClientWS (localhost:8080)",
        "AeroDataMessagingAgent",
        "QXEFBGW & MQ Queues"
      ],
      diagramDownstream: [
        {
          id: "ad-ddn-1",
          name: "QX Dispatchers",
          subtitle: "AeroData Performance Tools",
          iconType: "team"
        },
        {
          id: "ad-ddn-2",
          name: "Flight Crew (QX)",
          subtitle: "Takeoff / Landing Reports (TLRs)",
          iconType: "nodes"
        },
        {
          id: "ad-ddn-3",
          name: "WAM Workflows",
          subtitle: "Takeoff, Landing & Runway Data",
          iconType: "database"
        },
        {
          id: "ad-ddn-4",
          name: "FlyHT",
          subtitle: "QX Message Path Consumer",
          iconType: "chart"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 4, tone: "red" },
        { label: "Downstream Consumers", count: 4, tone: "green" },
        { label: "Impacted Applications", count: 3, tone: "blue" },
        { label: "Infrastructure Components", count: 8, tone: "purple" }
      ],
      keyTakeaways: [
        "AeroData is the QX portion of a Tier 1 Aircraft Performance Data capability used for aircraft takeoff/landing/runway performance.",
        "The overall Aircraft Performance Data System is explicitly marked ground-stop eligible/critical.",
        "AeroData integrates dispatch clients, local web services, messaging agents, MQ infrastructure, aircraft messaging and external AeroData servers.",
        "Important scope note: Boeing and Airbus performance processing is documented under Dynamic Source rather than AeroData. AeroData is explicitly associated with QX."
      ],
      upstreamTable: [
        {
          id: "ad-upt-1",
          name: "QX dispatch/AeroData client and AeroDataClientWS",
          description:
            "Dispatcher workstation client and local web-service bridge (localhost:8080/AeroDataClientWS).",
          type: "Internal / Workstation",
          impact: "Dispatcher access to AeroData-provided performance data is affected."
        },
        {
          id: "ad-upt-2",
          name: "WAM aircraft-performance processing",
          description:
            "WAM aircraft-performance processing and flight registration/session information.",
          type: "Internal (Tier 1)",
          impact: "QX takeoff/landing reports may fail to return to WAM flight planning."
        },
        {
          id: "ad-upt-3",
          name: "QX aircraft messaging path",
          description:
            "For E175, the troubleshooting document says AeroData is contacted directly and dispatch also uses the AeroData client, with aircraft data delivered through ARINC.",
          type: "External / Messaging",
          impact: "Aircraft performance data may not reach dispatch or E175 crew via ARINC."
        },
        {
          id: "ad-upt-4",
          name: "ARINC/SITA",
          description: "Appears in the physical architecture alongside AircraftPerformanceData.",
          type: "External",
          impact: "Datalink delivery of takeoff/landing performance messages impacted."
        }
      ],
      downstreamTable: [
        {
          id: "ad-dwt-1",
          name: "QX dispatchers using AeroData performance tools",
          description: "Dispatchers using WAM AeroData integration and the AeroData desktop tool.",
          type: "Internal Users",
          impact: "Dispatchers can lose normal AeroData aircraft performance functionality."
        },
        {
          id: "ad-dwt-2",
          name: "Crew requiring takeoff/landing performance data",
          description: "QX flight crews requesting and receiving Takeoff Landing Reports (TLRs).",
          type: "Internal Users",
          impact: "QX TLRs may not return and crew can report performance data not coming through."
        },
        {
          id: "ad-dwt-3",
          name: "WAM / flight-planning workflows",
          description:
            "WAM / flight-planning workflows consuming takeoff, landing and runway performance information.",
          type: "Internal (Tier 1)",
          impact: "Parent Aircraft Performance capability is Tier 1 and ground-stop eligible/critical."
        },
        {
          id: "ad-dwt-4",
          name: "FlyHT",
          description:
            "Part of the documented QX message path and is contacted if AeroData reports no vendor-side problem.",
          type: "External Partner",
          impact: "Downstream QX aircraft messaging path requires FlyHT investigation if AeroData is healthy."
        }
      ],
      infrastructureTable: [
        {
          id: "ad-inf-1",
          component: "AeroDataMessagingAgent",
          description: "Seaprfoadata01 / Tukprfoadata01, hot/cold.",
          owner: "ITS COG Flight Operations",
          impact: "TLR responses may not return; validate/restart on Seaprfoadata01/Tukprfoadata01."
        },
        {
          id: "ad-inf-2",
          component: "QX Dispatch-related messaging",
          description: "Seavvapp22 / Tukvvapp22, documented as hot/hot.",
          owner: "ITS COG Flight Operations",
          impact: "QX dispatch messaging integration affected."
        },
        {
          id: "ad-inf-3",
          component: "AeroDataClientWS",
          description:
            "Local dispatcher workstation web service; physical diagram shows localhost:8080/AeroDataClientWS.",
          owner: "ITS COG Flight Operations",
          impact: "AeroData Flight Planning Client cannot launch or bridge requests."
        },
        {
          id: "ad-inf-4",
          component: "File share",
          description:
            "\\\\fltopsfs.alaskaair.com\\fltdata\\perf_files, where TLR files are checked during troubleshooting (also referenced as \\\\fltopsfs.alaskaair.com\\fltops\\fltdata\\perf_files).",
          owner: "ITS COG Flight Operations",
          impact: "TLR landing files unavailable or delayed for verification by RC number."
        },
        {
          id: "ad-inf-5",
          component: "MQ",
          description:
            "Physical architecture shows QXEFBGW.FROM.AERODATAMSGAG; troubleshooting also checks QMADQX > QLOCAL > HORIZON.TO.AIRDAT.",
          owner: "ITS COG Flight Operations",
          impact: "Message queue backlog blocks QX takeoff/landing performance delivery."
        },
        {
          id: "ad-inf-6",
          component: "Database shown in physical architecture",
          description:
            "AircraftPerformanceData SQL2012, SEAPRARPRFSQL1A / TUKPRARPRFSQL1A; Visops Informix Server Performance is also shown. The diagram establishes their place in the broader Aircraft Performance architecture, but does not explicitly label either database as an AeroData-only dependency.",
          owner: "ITS COG Flight Operations",
          impact: "Broader Aircraft Performance data persistence and lookup affected."
        },
        {
          id: "ad-inf-7",
          component: "Network",
          description:
            "AeroData connectivity uses Internet/Internet-T1 paths in the physical architecture. The troubleshooting guide explicitly notes that connectivity failures may require the network team to correct firewall rules or routing, and says AeroData supplied Network with a connectivity troubleshooting tool.",
          owner: "ITS Network",
          impact: "Connectivity failures between Alaska and external AeroData servers."
        },
        {
          id: "ad-inf-8",
          component: "Specific firewall ports/IPs",
          description: "(Add Specific firewall ports/IPs)",
          owner: "ITS Network",
          impact: "Firewall rules or routing may need adjustment during connectivity failures."
        }
      ]
    },
    typicalBusinessImpact: [
      "QX Takeoff Landing Reports (TLRs) may not return.",
      "Crew can report that performance data is not coming through.",
      "Dispatchers can lose normal AeroData aircraft performance functionality.",
      "The affected parent Aircraft Performance capability is Tier 1 and ground-stop eligible/critical."
    ],
    knownWorkarounds: [
      "For the documented Q400 TLR scenario, crew can request takeoff and landing performance from AeroData using the EFB onboard the Q400 aircraft.",
      "(Add other Known Workarounds)"
    ],
    vendorContacts: {
      companyNote:
        "The operational runbook identifies the vendor as “AeroData”; I did not find a longer legal company name.",
      categoryNote:
        "AeroData supports takeoff, landing, and runway performance data and is used by QX. The overall Aircraft Performance Data System is classified Tier 1 and ground-stop eligible/critical.",
      supportEmail: "support@aerodata.aero",
      supportEmailNote: "general technical/customer support",
      secondaryEmail: "rwydata@aerodata.aero",
      secondaryEmailNote: "airport, runway, and NOTAM inquiries",
      supportPhone: "480-443-7740, prompt 3 for Technical Support.",
      technicalSupport: "AeroData, 480-443-7740, prompt 3.",
      accountManager: "(Add Account Manager)",
      namedEscalationContact: "(Add Named escalation contact)",
      supportHours:
        "Production service availability is documented as 24x7. The AeroData escalation procedure separately says that email sent outside business hours can receive expedited handling by putting URGENT in the subject; documented response is 5-10 minutes. The source does not explicitly state that the AeroData support desk itself is staffed 24x7.",
      escalation:
        "Technical Support: AeroData, 480-443-7740, prompt 3.\nGeneral technical/customer support: support@aerodata.aero\nAirport/runway/NOTAM support: rwydata@aerodata.aero\nOutside business hours: Put URGENT in the email subject for expedited handling (documented target: 5-10 minutes).",
      communicationGuidelines: [
        "IT Service Desk provides initial intake/triage, creates/routes ServiceNow incidents, and escalates to Production Operations through the dedicated Teams channel. Production Operations monitors alerts, participates in P1/P2/RRT0 incident bridges, performs approved recovery actions, and escalates to engineering/vendors.",
        "AeroData support can be contacted by phone or its documented support emails. For expedited handling outside business hours, put URGENT in the email subject; the documented target is 5-10 minutes.",
        "On-call standard: use xMatters/Everbridge, page/call each on-call resource twice within 90 seconds, and escalate to the next tier after 5 minutes without a response.",
        "P1: start/join the bridge immediately. The runbook lists updates every 15-30 minutes, but explicitly marks that cadence TBD, so do not encode it as a finalized SLA.",
        "P2: create a Teams channel using the major-incident number and invite resolver groups."
      ],
      responseSlas: [
        {
          label: "Vendor system unavailable",
          value:
            "Documented SLA is 15 minutes (“SLA: 15 minutes if vendor system unavailable”; does not further define whether this means acknowledgment, response, or restoration)."
        },
        {
          label: "Sev 1 Production Operations triage",
          value: "Full Sev1-response triage time limit is 15 minutes."
        },
        {
          label: "AeroData expedited email outside business hours",
          value: "5-10 minute response when URGENT is included in the subject."
        },
        {
          label: "Sev 1 update cadence",
          value: "15-30 minutes, TBD/not finalized."
        },
        {
          label: "Sev 2 initial response time",
          value: "(Add Sev 2 initial response time)"
        },
        {
          label: "Sev 2 update cadence",
          value: "(Add Sev 2 update cadence)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS COG Flight Operations",
      itsTeamNote:
        "AeroData troubleshooting procedures direct unresolved/multi-flight issues to this team/on-call.",
      applicationOwner: "ITS COG Flight Operations / on-call",
      onCallSupport: "ITS COG Flight Operations / on-call",
      systemAdministration:
        "AS DSO / QX Flight Control, 206-392-6029 option 2 / 1-800-547-7701 desk 9 (24/7)",
      businessOwner:
        "Alaska SOC / Horizon SOC; DSO (Director of Systems Operations/FlightOps on duty) / QX Flight Controller on duty, 24/7",
      passwordSupport: "ITS Service Desk, 1-877-238-1077, 24/7",
      everbridgeContacts:
        "Leo Blanco 206-688-3213; David Caraballo 206-688-3216; Mike Timpe 206-574-4789 / 503-702-3463"
    },
    validationChecklist: [
      "Determine whether the issue affects a single user/flight or multiple users/flights; gather flight number and aircraft tail information.",
      "For a workstation issue, validate that AeroDataClientWS is installed/running and validate the AeroData client registration/key.",
      "Review AeroDataClientWS/AppInsights traces and local C:\\Airgroup\\Log\\Fogs\\AeroDataClientWS logs.",
      "For QX TLR failures, validate/restart AeroDataMessagingAgent on the documented hot/cold pair Seaprfoadata01/Tukprfoadata01 as prescribed by the troubleshooting guide.",
      "Check the TLR landing location \\\\fltopsfs.alaskaair.com\\fltops\\fltdata\\perf_files using the RC number.",
      "For Q400 performance issues, confirm QXEFBGW is running on the primary server, review its logs for send/receive/FlyHT errors, and check MQ queues for backlog.",
      "If connectivity errors appear, involve Network; the guide explicitly identifies firewall/routing as possible connectivity work.",
      "Contact AeroData; if AeroData reports no issue, the documented procedure moves to FlyHT investigation.",
      "Escalate multiple-flight/user issues to ITS COG Flight Operations on-call as Sev 2; a single-flight/user issue is generally documented as Sev 3 in this troubleshooting guide.",
      "After recovery, validate normal error rate and latency, no new alerts, dependency health, stakeholder/user confirmation, and normal system thresholds."
    ],
    incidentHistory: [
      {
        id: "REF-TLR-QX",
        date: "Runbook Procedure",
        summary:
          "QX TLR failure / multi-flight issues escalate to ITS COG Flight Operations on-call as Sev 2 (single-flight/user issue generally documented as Sev 3)",
        severity: "Sev 2 / Sev 3",
        resolution:
          "Validate/restart AeroDataMessagingAgent on Seaprfoadata01/Tukprfoadata01, verify MQ queues and \\\\fltopsfs.alaskaair.com\\fltops\\fltdata\\perf_files, and engage AeroData or FlyHT as needed"
      }
    ],
    relatedDocuments: [
      {
        title: "AircraftPerformanceData_Runbook.pdf",
        type: "Operational Runbook (PDF)",
        owner: "ITS COG Flight Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/ITS%20Flight%20Ops%20Runbooks%20(IOC)/AircraftPerformanceData_Runbook.pdf?web=1"
      },
      {
        title: "AircraftPerformanceData_Triage_Troubleshooting.docx",
        type: "Triage & Troubleshooting (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BC758E56D-3E63-4E0C-BB72-B98EEDED3BA0%7D&file=AircraftPerformanceData_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "AircraftPerformance_Physical_View.pdf",
        type: "Physical Architecture (PDF)",
        owner: "ITS COG Flight Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/Aircraft%20Performance/AircraftPerformance_Physical_View.pdf?web=1"
      },
      {
        title: "AircraftPerformanceData__SystemSummary.docx",
        type: "System Summary (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Additional Related Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B30CF01FF-5DE1-4C7A-81B7-9A667A10A3CB%7D&file=AircraftPerformanceData__SystemSummary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "AircraftPerformanceSystemDataFlowREV2.pdf",
        type: "System Data Flow (PDF)",
        owner: "ITS COG Flight Operations",
        updated: "Additional Related Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/Aircraft%20Performance/Aircraft%20Performance%20Additional%20Docs/AircraftPerformanceSystemDataFlowREV2.pdf"
      },
      {
        title: "AircraftPerformanceData_DRPlan.xlsx",
        type: "DR Plan (Excel)",
        owner: "ITS COG Flight Operations",
        updated: "Additional Related Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BD36FF7B0-AC78-4753-A89D-E0690C7B6965%7D&file=AircraftPerformanceData_DRPlan.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      }
    ]
  },
  sita: {
    id: "sita",
    name: "ACARS Ground System",
    breadcrumbTrail: ["Ground Stop Applications", "ACARS", "Impact Details"],
    pageTitle: "ACARS Ground System (ACARS / AIRCOM) - Impact Details",
    pageSubtitle:
      "ACARS provides aircraft-to-ground messaging for flight operations, weather, and operational updates.",
    applicationsTabTitle: "ACARS Ground System",
    applicationsTabSubheading: "Applications & Systems (ACARS Components)",
    applicationsTabSubtitle:
      "ACARS Ground System (also called ACARS / AIRCOM) is on the Ground Stop list as a Flight Ops IT app (ACARS/Aircom), rated 24x7 critical to operations.",
    applicationsCardSubtitle:
      "Applications and components that make up ACARS Ground System (SITA Aircom Server, AIRCOM Web Service Invoker, ACARS History, ACARS Messenger / Ops Messenger, and Flight Ops Web Services).",
    dependenciesTabTitle: "ACARS Ground System - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream systems sending data to ACARS, downstream consumers relying on ACARS data, and server/database/DNS/MQ/monitoring infrastructure.",
    status: "Active",
    lastUpdated: "Nov 04, 2026",
    subtitle: "ACARS Ground System (also called ACARS / AIRCOM) · Criticality: Ground Stop · 24x7, critical to operations",
    company: "SITA for the Aircom Server product. ARINC (Collins Aerospace) for messages to the aircraft",
    website: "http://acars.app.insideaag.com/StatusReport.htm",
    category: "Flight Ops: aircraft-to-ground communications",
    itsTeam: "ITS COG FlightOps Support / ITS Flight Operations",
    logo: "public/vendors/sita.png",
    impactSummary: {
      confirmed: 0,
      potential: 5,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title: "Criticality: Ground Stop - 24x7, critical to operations (Triage Time Limit: 15 Minutes)",
      message:
        "ACARS is the central text link between aircraft and the ground. It carries flight info, flight times, weather, performance data, releases and load closeouts. It is rated 24x7 critical and is on the Ground Stop list. Aircom Server Status page: http://acars.app.insideaag.com/StatusReport.htm",
      description:
        "ACARS is the central text link between aircraft and the ground. It carries flight info, flight times, weather, performance data, releases and load closeouts. It is rated 24x7 critical and is on the Ground Stop list. Aircom Server Status page: http://acars.app.insideaag.com/StatusReport.htm",
      updatedAgo: "Updated from ACARS System Summary & Triage Runbooks"
    },
    impactedSystems: [
      {
        id: "sita-aircom-server",
        name: "SITA Aircom Server",
        subName: "(SEAVVACARSAPP03 / TUKVVACARSAPP03)",
        appTabSubName: "(SEAVVACARSAPP03 / TUKVVACARSAPP03)",
        description:
          "Vendor message server running on SEAVVACARSAPP03 / TUKVVACARSAPP03",
        appTabDescription:
          "Vendor message server running on SEAVVACARSAPP03 / TUKVVACARSAPP03",
        businessFunction: "Aircraft message routing",
        impact: "No ACARS messages go to or from aircraft",
        dependencies: "SQL (SEAPRACARSSQL02 / TUKPRACARSSQL02), IBM MQ, MSMQ",
        status: "Potential",
        owner: "Ryan Wilkins"
      },
      {
        id: "aircom-web-service-invoker",
        name: "AIRCOM Web Service Invoker",
        subName: "(seavvapp22 / tukvvapp22 - Active/Active)",
        appTabSubName: "(seavvapp22 / tukvvapp22 - Active/Active)",
        description:
          "In-house Windows service on seavvapp22 / tukvvapp22, both active at the same time",
        appTabDescription:
          "In-house Windows service on seavvapp22 / tukvvapp22, both active at the same time",
        businessFunction: "Message logic and web service calls",
        impact: "Flight times (OUT/OFF/ON/IN) and replies don't process",
        dependencies: "FO.TO.AIRCOM.WEBSERVICES queue",
        status: "Potential",
        owner: "ITS Flight Ops"
      },
      {
        id: "acars-history",
        name: "ACARS History (Service/UI/API)",
        subName: "(Azure SQL, APIM, PingFederate)",
        appTabSubName: "(Azure SQL, APIM, PingFederate)",
        description: "Search of recent and archived ACARS messages",
        appTabDescription: "Search of recent and archived ACARS messages",
        businessFunction: "Message history and audit",
        impact: "Users can't search ACARS history",
        dependencies: "Azure SQL, APIM, PingFederate",
        status: "Potential",
        owner:
          "Team Wilkins (Team_Wilkins@alaskaair.com) / Flight Operations Engineering (unreviewed runbook)"
      },
      {
        id: "acars-ops-messenger",
        name: "ACARS Messenger / Ops Messenger",
        subName: "(Operations Free-Text Client)",
        appTabSubName: "(Operations Free-Text Client)",
        description: "Free-text message clients for Operations",
        appTabDescription: "Free-text message clients for Operations",
        businessFunction: "Ops-to-crew messaging",
        impact: "No free-text messages to crews",
        dependencies: "Aircom Server",
        status: "Potential",
        owner:
          "Flight Operations / ITS COG Flight Ops Support (ACARS Messenger; separate Ops Messenger owner: Not verified)"
      },
      {
        id: "acars-message-web-services",
        name: "FlifoTimesWS, PilotLimitsWS, AircraftPerformanceData, Weather API",
        subName: "(2012 DNA Farm Web Services)",
        appTabSubName: "(2012 DNA Farm Web Services)",
        description: "Web services that process specific message types",
        appTabDescription: "Web services that process specific message types",
        businessFunction: "Flight times, pilot duty limits, performance, weather",
        impact: "Those message types fail",
        dependencies: "2012 DNA farm",
        status: "Potential",
        owner: "FltOps / Crew Scheduling"
      }
    ],
    upstreamDependencies: [
      "ARINC/SITA → ALASKA.FROM.ARINC / ALASKA.FROM.SITA → Aircom",
      "S4A (COMM.V1.JMS.EXT_ACARS_OUTBOUND)",
      "WAM (dispatch release uplink)",
      "FlightKeys/FPS briefing data (through AS OpsCom CyberJet)",
      "AeroData (AD.TO.AAG) for performance and loadsheet data"
    ],
    downstreamConsumers: [
      "Aircraft (through ALASKA.TO.ARINC)",
      "S4A (EXT_ACARS_INBOUND)",
      "Tibco (engine, telemetry and position events)",
      "fltops database (OUT/OFF/ON/IN times)",
      "QX EFB gateway",
      "SkyWest feed (FO.OO.ACARS.AS)",
      "AeroData (AAG.TO.AD)",
      "FlightKeys",
      "Dispatch, CLP and SOC teams"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Upstream systems that send data to ACARS (ARINC/SITA, S4A, WAM, FlightKeys/FPS, AeroData), ACARS components, and downstream consumers that rely on ACARS data.",
      diagramUpstream: [
        {
          id: "acars-dup-1",
          name: "ARINC / SITA",
          subtitle: "ALASKA.FROM.ARINC / ALASKA.FROM.SITA → Aircom",
          iconType: "network"
        },
        {
          id: "acars-dup-2",
          name: "S4A",
          subtitle: "COMM.V1.JMS.EXT_ACARS_OUTBOUND",
          iconType: "transfer"
        },
        {
          id: "acars-dup-3",
          name: "WAM",
          subtitle: "Dispatch release uplink",
          iconType: "doc"
        },
        {
          id: "acars-dup-4",
          name: "FlightKeys / FPS",
          subtitle: "Briefing data (through AS OpsCom CyberJet)",
          iconType: "ticket"
        },
        {
          id: "acars-dup-5",
          name: "AeroData (AD.TO.AAG)",
          subtitle: "Performance and loadsheet data",
          iconType: "transfer"
        }
      ],
      diagramServices: [
        "SITA Aircom Server",
        "AIRCOM Web Service Invoker",
        "ACARS History (Service/UI/API)",
        "ACARS Messenger / Ops Messenger",
        "FlifoTimesWS, PilotLimitsWS, AircraftPerformanceData, Weather API"
      ],
      diagramDownstream: [
        {
          id: "acars-ddn-1",
          name: "Aircraft & Dispatch / CLP / SOC",
          subtitle: "ALASKA.TO.ARINC & Operational Teams",
          iconType: "team"
        },
        {
          id: "acars-ddn-2",
          name: "S4A & AeroData",
          subtitle: "EXT_ACARS_INBOUND & AAG.TO.AD",
          iconType: "nodes"
        },
        {
          id: "acars-ddn-3",
          name: "Tibco & fltops database",
          subtitle: "Engine/Telemetry/Position & OUT/OFF/ON/IN Times",
          iconType: "database"
        },
        {
          id: "acars-ddn-4",
          name: "QX EFB gateway & SkyWest feed",
          subtitle: "QX EFB & FO.OO.ACARS.AS",
          iconType: "chart"
        },
        {
          id: "acars-ddn-5",
          name: "FlightKeys",
          subtitle: "Flight Planning Consumer",
          iconType: "users"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 5, tone: "red" },
        { label: "Downstream Consumers", count: 9, tone: "green" },
        { label: "ACARS Components", count: 5, tone: "blue" },
        { label: "Infrastructure Components", count: 6, tone: "purple" }
      ],
      keyTakeaways: [
        "ACARS is the central text link between aircraft and the ground. It carries flight info, flight times, weather, performance data, releases and load closeouts. It is rated 24x7 critical and is on the Ground Stop list."
      ],
      upstreamTable: [
        {
          id: "acars-upt-1",
          name: "ARINC/SITA → ALASKA.FROM.ARINC / ALASKA.FROM.SITA → Aircom",
          description: "Inbound aircraft messages routed from ARINC and SITA queues into Aircom.",
          type: "External / MQ Queue",
          impact: "No inbound ACARS messages arrive from aircraft into Aircom."
        },
        {
          id: "acars-upt-2",
          name: "S4A (COMM.V1.JMS.EXT_ACARS_OUTBOUND)",
          description: "Outbound load management and weight/balance messages from Smart4Aviation (S4A).",
          type: "Internal / MQ Queue",
          impact: "Load closeouts and S4A outbound messages cannot be sent to aircraft."
        },
        {
          id: "acars-upt-3",
          name: "WAM (dispatch release uplink)",
          description: "Dispatch release uplink data sent from WAM to ACARS.",
          type: "Internal (Ground Stop)",
          impact: "Dispatch release uplinks do not reach aircraft via ACARS."
        },
        {
          id: "acars-upt-4",
          name: "FlightKeys/FPS briefing data (through AS OpsCom CyberJet)",
          description: "Flight planning and briefing data routed through AS OpsCom CyberJet.",
          type: "External / Partner",
          impact: "FlightKeys/FPS briefing data uplinks to aircraft are delayed or fail."
        },
        {
          id: "acars-upt-5",
          name: "AeroData (AD.TO.AAG) for performance and loadsheet data",
          description: "Inbound performance and loadsheet data from AeroData via AD.TO.AAG queue.",
          type: "External / MQ Queue",
          impact: "Takeoff numbers, landing performance data, and loadsheet data are delayed."
        }
      ],
      downstreamTable: [
        {
          id: "acars-dwt-1",
          name: "Aircraft (through ALASKA.TO.ARINC)",
          description: "Outbound ground-to-air ACARS messages transmitted to aircraft via ALASKA.TO.ARINC.",
          type: "External / Aircraft",
          impact: "No ACARS messages, releases, load closeouts, or clearances reach aircraft."
        },
        {
          id: "acars-dwt-2",
          name: "S4A (EXT_ACARS_INBOUND)",
          description: "Inbound ACARS messages delivered to Smart4Aviation (S4A) via EXT_ACARS_INBOUND.",
          type: "Internal / MQ Queue",
          impact: "S4A weight and balance workflow does not receive aircraft ACARS updates."
        },
        {
          id: "acars-dwt-3",
          name: "Tibco (engine, telemetry and position events)",
          description: "Downstream middleware consumer for engine, telemetry, and aircraft position events.",
          type: "Internal Middleware",
          impact: "Engine, telemetry, and position events do not flow to downstream consumers."
        },
        {
          id: "acars-dwt-4",
          name: "fltops database (OUT/OFF/ON/IN times)",
          description: "Flight Operations database receiving automated OUT/OFF/ON/IN flight times.",
          type: "Internal Database",
          impact: "Flight times (OUT/OFF/ON/IN) don't arrive, so Dispatch and CLP have to enter them by hand."
        },
        {
          id: "acars-dwt-5",
          name: "QX EFB gateway",
          description: "Horizon Air (QX) Electronic Flight Bag gateway receiving ACARS traffic.",
          type: "Internal Service",
          impact: "Horizon (QX) EFB communications and performance updates are affected."
        },
        {
          id: "acars-dwt-6",
          name: "SkyWest feed (FO.OO.ACARS.AS)",
          description: "ACARS message feed to SkyWest via FO.OO.ACARS.AS queue.",
          type: "External / Partner",
          impact: "SkyWest ACARS feed does not receive flight messages."
        },
        {
          id: "acars-dwt-7",
          name: "AeroData (AAG.TO.AD)",
          description: "Outbound ACARS requests and aircraft data sent to AeroData via AAG.TO.AD.",
          type: "External / Partner",
          impact: "Aircraft performance requests do not reach AeroData."
        },
        {
          id: "acars-dwt-8",
          name: "FlightKeys",
          description: "Downstream FlightKeys flight planning system receiving ACARS updates.",
          type: "External / Partner",
          impact: "FlightKeys does not receive real-time ACARS flight progression updates."
        },
        {
          id: "acars-dwt-9",
          name: "Dispatch, CLP and SOC teams",
          description: "Operational teams relying on ACARS for crew messaging, flight times, and load closeouts.",
          type: "Internal Teams",
          impact: "Dispatch, CLP, and SOC must enter flight times manually and call in final numbers."
        }
      ],
      infrastructureTable: [
        {
          id: "acars-inf-1",
          component: "App servers",
          description:
            "SEAVVACARSAPP03 (IGQ) and TUKVVACARSAPP03 (TUK), Windows Server 2016",
          owner: "Ryan Wilkins / ITS COG FlightOps Support",
          impact: "No ACARS messages go to or from aircraft if Aircom Server is unavailable."
        },
        {
          id: "acars-inf-2",
          component: "Database servers",
          description:
            "SEAPRACARSSQL02 (159.49.43.93) and TUKPRACARSSQL02 (10.70.106.5), SQL Server 2016",
          owner: "DBA On-Call / SQL Database Team",
          impact: "If the Database Connector shows red, check SQL and call the DBA on call."
        },
        {
          id: "acars-inf-3",
          component: "DNS",
          description:
            "acars.app.insideaag.com, acars.sql.insideaag.com, and the CNAME acars.app.int.insideaag.com",
          owner: "ITS Infrastructure / Network",
          impact: "Application and SQL name resolution and active/standby routing affected."
        },
        {
          id: "acars-inf-4",
          component: "IBM MQ & MSMQ",
          description:
            "IBM MQ queue managers QMAS and QMMFP, plus local MSMQ queues",
          owner: "Middleware (IBM MQ) / ITS Flight Ops",
          impact: "Queue disconnect or backlog halts message routing; AMX1QM1.QMAS channel alert is Sev 1."
        },
        {
          id: "acars-inf-5",
          component: "Monitoring",
          description: "AlarmsOne, Dynatrace, Zenoss",
          owner: "ITS Production Operations / SRE",
          impact: "Monitoring and alerting visibility for Aircom services and queue depths."
        },
        {
          id: "acars-inf-6",
          component: "Firewall / network rules",
          description:
            "Not verified (documented connections: SEAVVACARSAPP03 / TUKVVACARSAPP03, SEAPRACARSSQL02 / TUKPRACARSSQL02 via acars.sql.insideaag.com, QMAS queues ALASKA.FROM.ARINC / ALASKA.TO.ARINC; exact firewall rule IDs, ports, and external VIPs not verified)",
          owner: "ITS Network",
          impact: "Network connectivity between Aircom, ARINC/SITA, and internal services."
        }
      ]
    },
    typicalBusinessImpact: [
      "Takeoff numbers, landing performance data and pre-departure clearances are delayed",
      "Flight times (OUT/OFF/ON/IN) don't arrive, so Dispatch and CLP have to enter them by hand",
      "Crews don't receive load closeouts or final numbers",
      "Flight delays. In the MI6516 outage (1/9/2026), Alaska Air Group logged 68 delays totalling 1,075 minutes",
      "Hawaiian (HA) and Horizon (QX) operations can be affected too"
    ],
    knownWorkarounds: [
      "Enter flight times and flight plans manually",
      "CLP calls in final numbers manually",
      "CLP re-sends the load closeout after a few minutes",
      "Manually generate performance data and email it to crews (documented in MI6579); exact approved voice/VHF/SATCOM fallback procedure: Not verified"
    ],
    vendorContacts: {
      companyNote:
        "SITA for the Aircom Server product. ARINC (Collins Aerospace) for messages to the aircraft",
      categoryNote:
        "Application Name: ACARS Ground System (also called ACARS / AIRCOM) • Criticality: Ground Stop • Operational Category: Flight Ops: aircraft-to-ground communications • Aircom Server Status page: http://acars.app.insideaag.com/StatusReport.htm",
      supportEmail: "Aircom.support@sitaonair.aero",
      supportEmailNote: "SITA Aircom support",
      secondaryEmail: "helpdesk@arinc.com",
      secondaryEmailNote: "ARINC Help Desk (Senior On-Duty Ops Manager 24x7: AOC@arinc.com)",
      supportPhone:
        "SITA: 1-888-247-2661, option 4 (Aircom). ARINC: 800-633-6882",
      technicalSupport:
        "SITA Help Desk: 866-247-2661 (24/7) • SITA Aircom support: 1-888-247-2661, option 4 / Aircom.support@sitaonair.aero • ARINC Help Desk: 800-633-6882 / helpdesk@arinc.com",
      accountManager:
        "Not verified (blank in ITS Vendor Information - 2026.xlsx; ARINC lists rotating Senior On-Duty Ops Manager 24x7)",
      namedEscalationContact:
        "ARINC Senior On-Duty Ops Manager (24x7): 410-266-4029 / AOC@arinc.com",
      supportHours: "24x7, critical to operations",
      escalation:
        "Vendor Contacts:\n• SITA Help Desk: 866-247-2661 (24/7)\n• SITA Aircom support: 1-888-247-2661, option 4 / Aircom.support@sitaonair.aero\n• ARINC Help Desk: 800-633-6882 / helpdesk@arinc.com\n• ARINC Senior On-Duty Ops Manager (24x7): 410-266-4029 / AOC@arinc.com\n• Account Manager: Not verified (blank in ITS Vendor Information - 2026.xlsx)\n\nCommunication Guidelines:\n• For SITA issues, an assigned developer follows up with SITA and escalates.\n• When escalating, include the scope: one aircraft (tail), one flight (date, flight, city pair), or the whole fleet, plus which Ops group is affected.",
      communicationGuidelines: [
        "For SITA issues, an assigned developer follows up with SITA and escalates.",
        "When escalating, include the scope: one aircraft (tail), one flight (date, flight, city pair), or the whole fleet, plus which Ops group is affected."
      ],
      responseSlas: [
        {
          label: "Sev 1",
          priority: "Sev 1",
          level: "Critical / Ground Stop",
          description:
            "ARINC MQ channel alert, required services down and not clearing, or queue depth over 500",
          target: "15 min triage limit",
          value:
            "ARINC MQ channel alert, required services down and not clearing, or queue depth over 500"
        },
        {
          label: "Sev 2",
          priority: "Sev 2",
          level: "High Operational Impact",
          description:
            "Queue depth over 100, multiple flights affected, or critical messages (releases, performance data) failing",
          target: "Inform COG FlightOps",
          value:
            "Queue depth over 100, multiple flights affected, or critical messages (releases, performance data) failing"
        },
        {
          label: "Sev 3",
          priority: "Sev 3",
          level: "Single Flight / Station",
          description:
            "Single flight, single station, or non-critical messages",
          target: "Standard triage",
          value: "Single flight, single station, or non-critical messages"
        },
        {
          label: "Initial response and update cadence",
          priority: "Initial response and update cadence",
          level: "Response & Update Cadence",
          description:
            "Internal triage limit: 15 minutes. P1 bridge update cadence: every 15-30 minutes - TBD in runbook (not confirmed). Contractual SITA / ARINC Sev 1 and Sev 2 response times: Not verified",
          target:
            "15 min triage limit | P1 cadence: 15-30 min (TBD) | Vendor SLA: Not verified",
          value:
            "Internal triage limit: 15 minutes. P1 bridge update cadence: every 15-30 minutes - TBD in runbook (not confirmed). Contractual SITA / ARINC Sev 1 and Sev 2 response times: Not verified"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS COG FlightOps Support / ITS Flight Operations",
      itsTeamNote:
        "Technical Owners: Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified) • On-Call: ITS COG FlightOps Support / ITS FltOps on-call",
      applicationOwner: "Ryan Wilkins, 206-972-0228",
      onCallSupport: "ITS COG FlightOps Support / ITS FltOps on-call",
      systemAdministration: "Rick Cahoon, Arun Sharma, 206-392-8613",
      businessOwner:
        "James Falen, 425-679-2135 cell / 206-392-6083 desk (Business Owner & Everbridge focal)",
      passwordSupport: "Service Desk: 1-877-238-1077",
      everbridgeContacts:
        "Everbridge Focal: James Falen (425-679-2135 cell / 206-392-6083 desk) • Everbridge Backup: Charles Ostick (877-238-1077)"
    },
    validationChecklist: [
      "Open the Aircom Status page (http://acars.app.insideaag.com/StatusReport.htm). Confirm all required services are green: Base Service, Communication Relay, Database Connector, Email Connector, File/Printer Connector, FTP Connector, IBM MQ Connector, Message Processor, and Monitoring Service.",
      "If only the IBM MQ Links show red, restart AS IBM MQ Connector. If the queues are still disconnected, restart all Aircom services.",
      "If the Message Processor shows yellow, check the backlog. If the queue depth is over 100, restart the Message Processor and inform COG FlightOps.",
      "Check the FO.FROM.AIRCOM.WEBSERVICES queue depth. Over 100 is Sev 2; over 500 is Sev 1.",
      "If OUT/OFF/ON/IN times are missing, restart AircomWebSvcInvokerSvc on seavvapp22 / tukvvapp22.",
      "If the Database Connector shows red, check SQL and call the DBA on call.",
      "If only one station is affected, contact ARINC and give them the station code.",
      "An ARINC alert about the AMX1QM1.QMAS channel is Sev 1. Engage Middleware (IBM MQ).",
      "Ask the user: which flights and tail numbers, what message type, how many flights, and which team (SOC/Dispatch/CLP)."
    ],
    incidentHistory: [
      {
        id: "MI6516",
        date: "Jan 09, 2026",
        summary:
          "ACARS degraded impacting flight operations and planning - Alaska Air Group logged 68 delays totalling 1,075 minutes.",
        severity: "Sev 1",
        resolution:
          "Documented in RCA - Sev1 - MI6516 - ACARS is degraded impacting flight operations and planning.docx"
      }
    ],
    relatedDocuments: [
      {
        title: "ACARS System Summary.docx",
        type: "Main Source - System Summary (Word)",
        owner: "ITS COG FlightOps Support / ITS Flight Operations",
        updated: "2026-09-22",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BA9959123-88A9-4875-A445-BDE7EC8095C4%7D&file=ACARS%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARS_Triage_Troubleshooting.docx",
        type: "Main Source - Triage & Troubleshooting (Word)",
        owner: "ITS COG FlightOps Support / ITS Flight Operations",
        updated: "2026-07-26",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B781CA6D6-1F42-4C55-BEF2-C5D8C9704290%7D&file=ACARS_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Ground Stop Applications List.docx",
        type: "Main Source - Ground Stop List (Word)",
        owner: "COG Business Impact Mitigation Support",
        updated: "2026-08-18",
        url: "https://alaskaair.sharepoint.com/sites/CogTeam-BusinessImpactMitigationSupport-CogMIMPOTeams/_layouts/15/Doc.aspx?sourcedoc=%7B93C4FA57-AC4E-4E7A-A5BE-6E1670770D91%7D&file=Ground%20Stop%20Applications%20List.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Service-Offering-Application-Metadata mapping 10-12-2026.xlsx",
        type: "Service Offering Metadata (Excel)",
        owner: "ITS Production Operations",
        updated: "Not verified (filename 2026-10-12)",
        url: "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7BCCA8403B-C46B-47D8-8D7D-58429E9875D6%7D&file=Service-Offering-Application-Metadata%20mapping%2010-12-2026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARSHistory-Runbook.docx",
        type: "Service Runbook (Word - reviewer field blank)",
        owner: "ITS Flight Operations",
        updated: "2026-05-25",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B125C0C1E-4C83-4AE9-B492-DB2525D6378C%7D&file=ACARSHistory-Runbook.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARS Messenger System Summary.docx",
        type: "Component System Summary (Word)",
        owner: "ITS COG FlightOps Support / ITS Flight Operations",
        updated: "2026-08-14",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BB386946E-6F8B-4874-8D6D-7B932BC4FD83%7D&file=ACARS%20Messenger%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ITS Operations Runbook_ACARSGround_Aircom_03.2026.pdf",
        type: "Operations Runbook (PDF - P1 cadence marked TBD)",
        owner: "ITS COG FlightOps Support / ITS Flight Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/ACARS%20(AS)/ITS%20Operations%20Runbook_ACARSGround_Aircom_03.2026.pdf?web=1"
      },
      {
        title: "E2E Test Strategy - Flight Planning System Replacement_V0.1.pptx",
        type: "Architecture & Test Strategy (PowerPoint)",
        owner: "ITS Flight Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/AlaskaE2ETesting/_layouts/15/Doc.aspx?sourcedoc=%7B45417EC3-08B2-46C7-A5DF-AE77AB217C2D%7D&file=E2E%20Test%20Strategy%20-%20Flight%20Planning%20System%20Replacement_V0.1.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ground_stop_apps_dep_matrix.xlsx",
        type: "Ground Stop Dependency Matrix (Excel)",
        owner: "SRE ITS Hub",
        updated: "2026-08-24",
        url: "https://alaskaair.sharepoint.com/sites/SREITSHub/_layouts/15/Doc.aspx?sourcedoc=%7B4A885E79-6862-4AB7-B941-C8A305D14F04%7D&file=ground_stop_apps_dep_matrix.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "RCA - Sev1 - MI6516 - ACARS is degraded impacting flight operations and planning.docx",
        type: "Sev 1 RCA (Word)",
        owner: "ITS Sev1 Response",
        updated: "2026-08-14",
        url: "https://alaskaair.sharepoint.com/sites/ITSSev1Response/_layouts/15/Doc.aspx?sourcedoc=%7B594EDDF3-1DF8-4F61-8BF9-E2C992B1CBDD%7D&file=RCA%20-%20Sev1%20-%20MI6516%20-%20ACARS%20is%20degraded%20impacting%20flight%20operations%20and%20planning.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "RCA - Sev1 - MI6579 - ACARS Performance Degraded - Copy.docx",
        type: "Sev 1 RCA (Word)",
        owner: "ITS Sev1 Response",
        updated: "2026-10-17",
        url: "https://alaskaair.sharepoint.com/sites/ITSSev1Response/_layouts/15/Doc.aspx?sourcedoc=%7B7AAF752A-136E-4A35-BDF2-59E46FBDDE1B%7D&file=RCA%20-%20Sev1%20-%20MI6579%20-%20ACARS%20Performance%20Degraded%20-%20Copy.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARS 2.0 Architecture (ADO Wiki)",
        type: "Architecture Wiki (ADO)",
        owner: "ITS Flight Operations",
        updated: "Not verified",
        url: "https://itsals.visualstudio.com/FlightOperationsGIT/_wiki/wikis/FlightOperationsGIT.wiki/49438"
      }
    ]
  },
  wam: {
    id: "wam",
    name: "WAM (Flight Planning System / Worksheet)",
    breadcrumbTrail: ["Ground Stop Applications", "WAM", "Impact Details"],
    pageTitle: "WAM (Flight Planning System / Worksheet) - Impact Details",
    pageSubtitle:
      "WAM supports flight planning workflows and operational flight plan preparation.",
    applicationsTabTitle: "WAM (Flight Planning System / Worksheet)",
    applicationsTabSubheading: "Applications & Systems (WAM Components)",
    applicationsTabSubtitle:
      "WAM is also called the Flight Planning System or Worksheet. Dispatchers for Alaska (AS) and Horizon (QX) use it to create flight plans and dispatch releases. Listed as \"FlightPlanning-WAM\" among Ground Stop critical apps.",
    applicationsCardSubtitle:
      "Components that make up WAM (WAM Web UI, FlightPlanSvc, FlightPlanningWs / DispatchFlightDetailWs, Aircraft Performance web services, and MEL Service).",
    dependenciesTabTitle: "WAM (Flight Planning System / Worksheet) - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream systems sending data to WAM, downstream consumers relying on WAM data, and server/DNA farm/IBM MQ/Informix/APIM/monitoring infrastructure.",
    status: "Active",
    lastUpdated: "Nov 04, 2026",
    subtitle:
      "WAM (Flight Planning System / Worksheet) · Criticality: Ground Stop (\"FlightPlanning-WAM\") · 24/7. FlightPlanSvc must run 24/7",
    company: "Jeppesen (owned by Boeing), which runs the JetPlan flight plan server",
    website:
      "https://worksheet.webui.alaskaair.com/foworksheetui/index.html?airline=AS&desk=B&shift=3",
    category: "Flight Ops / Dispatch: flight planning and releases",
    itsTeam: "ITS COG Flight Operations. Verified owners: Ryan Wilkins, Adele Lunde",
    logo: "public/vendors/jeppesen.png",
    impactSummary: {
      confirmed: 0,
      potential: 5,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title:
        "Criticality: Ground Stop (\"FlightPlanning-WAM\") - 24/7 Operations (Sev 1 Triage Time Limit: 15 Minutes)",
      message:
        "WAM is the main dispatch tool for AS and QX. It brings together flight plans, weather, performance data and MEL information to produce the dispatch release. If WAM or any of its upstream feeds fails, flights can't be released. Production URL example (Chrome only; airline, desk, and shift vary; parameter-free launcher URL not verified): https://worksheet.webui.alaskaair.com/foworksheetui/index.html?airline=AS&desk=B&shift=3",
      description:
        "WAM is the main dispatch tool for AS and QX. It brings together flight plans, weather, performance data and MEL information to produce the dispatch release. If WAM or any of its upstream feeds fails, flights can't be released.",
      updatedAgo: "Updated from Flight Planning System Summary & WAM Troubleshooting Runbooks"
    },
    impactedSystems: [
      {
        id: "wam-web-ui",
        name: "WAM Web UI",
        subName: "(AngularJS Front End - Chrome Only)",
        appTabSubName: "(AngularJS Front End - Chrome Only)",
        description:
          "AngularJS front end that talks only to web services. Chrome only",
        appTabDescription:
          "AngularJS front end that talks only to web services. Chrome only",
        businessFunction: "Dispatcher workflow",
        impact: "Dispatchers can't plan or release flights",
        dependencies: "FlightPlanningWs, DNA farm",
        status: "Potential",
        owner: "ITS COG Flight Ops"
      },
      {
        id: "wam-flightplansvc",
        name: "FlightPlanSvc",
        subName: "(seavvapp22 / tukvvapp22 - Hot/Hot)",
        appTabSubName: "(seavvapp22 / tukvvapp22 - Hot/Hot)",
        description:
          "Windows service, hot/hot on seavvapp22 / tukvvapp22",
        appTabDescription:
          "Windows service, hot/hot on seavvapp22 / tukvvapp22",
        businessFunction: "Requests flight plans from Jeppesen and updates fltops",
        impact: "No flight plans, or plans \"REJECTED\" / \"JEP DOWN\"",
        dependencies: "Jeppesen JetPlan, MQ (QMMFP), fltops DB",
        status: "Potential",
        owner: "ITS COG Flight Ops"
      },
      {
        id: "wam-flightplanning-ws",
        name: "FlightPlanningWs / DispatchFlightDetailWs",
        subName: "(DNA Farm Web Services)",
        appTabSubName: "(DNA Farm Web Services)",
        description: "Web services on the DNA farm",
        appTabDescription: "Web services on the DNA farm",
        businessFunction: "Flight plan request and release",
        impact: "WAM errors, can't release flights",
        dependencies: "MelsWs, Weather API, FlightPlanSvc",
        status: "Potential",
        owner: "ITS COG Flight Ops"
      },
      {
        id: "wam-aircraft-performance",
        name: "Aircraft Performance (AircraftPerformanceData, DispatchAircraftPerformance, LocationMapsAPI)",
        subName: "(Takeoff & Landing Performance Web Services)",
        appTabSubName: "(Takeoff & Landing Performance Web Services)",
        description: "Takeoff and landing performance web services",
        appTabDescription: "Takeoff and landing performance web services",
        businessFunction: "Performance data for releases",
        impact: "Releases can't be completed, which leads to delays",
        dependencies: "Dynamic Source (Boeing/Airbus), AeroData (QX)",
        status: "Potential",
        owner: "ITS COG Flight Ops"
      },
      {
        id: "wam-mel-service",
        name: "MEL Service",
        subName: "(Minimum Equipment List Service)",
        appTabSubName: "(Minimum Equipment List Service)",
        description: "Minimum Equipment List (MEL) data called by WAM",
        appTabDescription: "Minimum Equipment List (MEL) data called by WAM",
        businessFunction: "MEL checks on releases",
        impact: "\"Mels Request Exception\" errors in WAM",
        dependencies: "APIM (primary SDP, secondary DNA), MEL DB",
        status: "Potential",
        owner: "ITS COG M&E App Support"
      }
    ],
    upstreamDependencies: [
      "Jeppesen JetPlan, which supplies flight plans",
      "Weather API (The Weather Company FlightFX). WAM relies only on this for weather",
      "Dynamic Source and AeroData performance data",
      "MEL Service",
      "Workbench 2.0, which launches WAM"
    ],
    downstreamConsumers: [
      "Dispatch releases. Released flights feed pilot briefing packets",
      "ACARS, which uplinks the dispatch release to the aircraft",
      "fltops database",
      "Pilot Briefing API",
      "AS and QX Dispatch teams"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Upstream feeds (Jeppesen JetPlan, Weather API, Dynamic Source/AeroData, MEL Service, Workbench 2.0) flowing into WAM to produce dispatch releases for ACARS, Pilot Briefing, fltops, and AS/QX Dispatch.",
      diagramUpstream: [
        {
          id: "wam-up-1",
          name: "Jeppesen JetPlan",
          subtitle: "Supplies flight plans",
          iconType: "network"
        },
        {
          id: "wam-up-2",
          name: "Weather API (TWC FlightFX)",
          subtitle: "Sole weather feed for WAM",
          iconType: "transfer"
        },
        {
          id: "wam-up-3",
          name: "Dynamic Source & AeroData",
          subtitle: "Takeoff & landing performance data",
          iconType: "doc"
        },
        {
          id: "wam-up-4",
          name: "MEL Service & Workbench 2.0",
          subtitle: "MEL checks & WAM launcher",
          iconType: "ticket"
        }
      ],
      diagramServices: [
        "WAM Web UI (Chrome Only)",
        "FlightPlanSvc (seavvapp22 / tukvvapp22)",
        "FlightPlanningWs / DispatchFlightDetailWs",
        "Aircraft Performance Web Services",
        "MEL Service"
      ],
      diagramDownstream: [
        {
          id: "wam-down-1",
          name: "Dispatch Releases",
          subtitle: "Feeds pilot briefing packets",
          iconType: "doc"
        },
        {
          id: "wam-down-2",
          name: "ACARS",
          subtitle: "Uplinks dispatch release to aircraft",
          iconType: "nodes"
        },
        {
          id: "wam-down-3",
          name: "fltops Database",
          subtitle: "Informix operational flight database",
          iconType: "database"
        },
        {
          id: "wam-down-4",
          name: "Pilot Briefing API",
          subtitle: "Pre-flight & en-route pilot packets",
          iconType: "chart"
        },
        {
          id: "wam-down-5",
          name: "AS and QX Dispatch Teams",
          subtitle: "Flight planning & release operations",
          iconType: "team"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 5, tone: "red" },
        { label: "Downstream Consumers", count: 5, tone: "green" },
        { label: "WAM Components", count: 5, tone: "blue" },
        { label: "Infrastructure Components", count: 7, tone: "purple" }
      ],
      keyTakeaways: [
        "WAM is the main dispatch tool for AS and QX. It brings together flight plans, weather, performance data and MEL information to produce the dispatch release. If WAM or any of its upstream feeds fails, flights can't be released."
      ],
      upstreamTable: [
        {
          id: "wam-upt-1",
          name: "Jeppesen JetPlan, which supplies flight plans",
          description: "Jeppesen (owned by Boeing) runs the JetPlan flight plan server supplying flight plans to FlightPlanSvc.",
          type: "External / Vendor",
          impact: "No flight plans, or plans \"REJECTED\" / \"JEP DOWN\"."
        },
        {
          id: "wam-upt-2",
          name: "Weather API (The Weather Company FlightFX). WAM relies only on this for weather",
          description: "Sole weather feed for WAM flight planning and releases.",
          type: "External / Internal API",
          impact: "Missing weather in WAM; requires manual flight release with weather entered by hand (+3-8 min per release)."
        },
        {
          id: "wam-upt-3",
          name: "Dynamic Source and AeroData performance data",
          description: "Dynamic Source (Boeing/Airbus) and AeroData (QX) takeoff and landing performance data.",
          type: "External / Partner",
          impact: "Performance data is missing from flight packets; releases can't be completed, leading to delays."
        },
        {
          id: "wam-upt-4",
          name: "MEL Service",
          description: "Minimum Equipment List (MEL) data called by WAM via APIM (primary SDP, secondary DNA).",
          type: "Internal Service",
          impact: "\"Mels Request Exception\" errors in WAM."
        },
        {
          id: "wam-upt-5",
          name: "Workbench 2.0, which launches WAM",
          description: "Dispatcher workspace application that launches WAM.",
          type: "Internal Application",
          impact: "Dispatchers cannot launch WAM from Workbench 2.0."
        }
      ],
      downstreamTable: [
        {
          id: "wam-dwt-1",
          name: "Dispatch releases. Released flights feed pilot briefing packets",
          description: "Completed dispatch releases generated in WAM feed downstream pilot briefing packets.",
          type: "Internal Operations",
          impact: "Flights cannot be released; pilot briefing packets lack release and performance data."
        },
        {
          id: "wam-dwt-2",
          name: "ACARS, which uplinks the dispatch release to the aircraft",
          description: "Receives dispatch release uplink messages via FO.FLIGHT.LOAD.ACARS.UPLINK.",
          type: "Internal / Aircraft Comms",
          impact: "Dispatch releases cannot be uplinked via ACARS to the aircraft."
        },
        {
          id: "wam-dwt-3",
          name: "fltops database",
          description: "Informix operational database updated by FlightPlanSvc and WAM release workflows.",
          type: "Internal Database",
          impact: "fltops database does not receive updated flight plan and dispatch release records."
        },
        {
          id: "wam-dwt-4",
          name: "Pilot Briefing API",
          description: "Downstream API delivering flight plans, releases, and performance data to pilot briefing tools.",
          type: "Internal API",
          impact: "Pilots do not receive updated release or performance packets."
        },
        {
          id: "wam-dwt-5",
          name: "AS and QX Dispatch teams",
          description: "Alaska (AS) and Horizon (QX) dispatchers using WAM to plan and release flights.",
          type: "Internal Teams",
          impact: "Dispatchers can't pull flight plans or release flights without manual workarounds."
        }
      ],
      infrastructureTable: [
        {
          id: "wam-inf-1",
          component: "App servers",
          description: "seavvapp22 / tukvvapp22 (FlightPlanSvc)",
          owner: "ITS COG Flight Ops",
          impact: "FlightPlanSvc must run 24/7 (hot/hot on seavvapp22 / tukvvapp22)."
        },
        {
          id: "wam-inf-2",
          component: "DNA web farm",
          description:
            "Primary WAM UI hosts: IGQprFLTOPSdwn1/2 and SE4prFLTOPSdwn1/2; primary DNA hosts: IGQprFLTOPSdna1/2 and SE4prFLTOPSdna1/2 (supporting DNA farm: SEAV3DNA09-16 and TUKV3DNA09-16, behind a load balancer)",
          owner: "ITS COG Flight Ops",
          impact: "Hosts WAM Web UI and FlightPlanningWs / DispatchFlightDetailWs / performance web services."
        },
        {
          id: "wam-inf-3",
          component: "IBM MQ",
          description:
            "QMMFP on wmq1as.alaskaair.com, port 1425. Queues include FO.FLIGHTPLAN.REQUEST.QUEUE, FO.TANKER.REQUEST.QUEUE and FO.FLIGHT.LOAD.ACARS.UPLINK",
          owner: "Middleware / ITS COG Flight Ops",
          impact: "Queue alerts or failures stop flight plan requests, tanker requests, and ACARS release uplinks."
        },
        {
          id: "wam-inf-4",
          component: "Databases",
          description: "fltops (Informix) and VisOps",
          owner: "Informix DBA / ITS COG Flight Ops",
          impact: "WAM is down if fltops Informix database connectivity fails."
        },
        {
          id: "wam-inf-5",
          component: "Azure API Management (APIM) and Front Door",
          description: "Azure API Management (APIM) and Front Door for the MEL Service",
          owner: "ITS COG M&E App Support",
          impact: "Causes \"Mels Request Exception\" errors in WAM if primary SDP and secondary DNA backends fail."
        },
        {
          id: "wam-inf-6",
          component: "Monitoring",
          description: "AlarmsOne, Sumo Logic, Application Insights, Dynatrace",
          owner: "ITS COG Flight Ops / ProdOps",
          impact: "Used to detect MQ alerts, DNA server error counts in Sumo Logic, and service health."
        },
        {
          id: "wam-inf-7",
          component: "Firewall / network rules",
          description:
            "Not verified (IBM MQ QMMFP on wmq1as.alaskaair.com:1425, Informix fltops, APIM/Front Door, and WAM UI/DNA tiers documented; approved firewall rule set, ports, and load-balancer VIPs not verified)",
          owner: "ITS Network",
          impact: "Network connectivity between WAM, DNA farm, MQ, Informix, and Jeppesen JetPlan."
        }
      ]
    },
    typicalBusinessImpact: [
      "Dispatchers can't pull flight plans or release flights",
      "Performance data is missing from flight packets",
      "Flight delays. In INC00020700 (11/3/2026), about 50% of dispatchers were affected",
      "Horizon (QX) delays were reported during the weather outage MI-6584"
    ],
    knownWorkarounds: [
      "Manual flight release with weather entered by hand. This adds about 3-5 minutes per release, or 5-8 minutes when packet updates are needed",
      "Get aircraft performance manually through Dynamic Source (limited workaround)",
      "Single-user errors: use Chrome, check the URL is https, and clear the browser cache",
      "Release screen locked: delete the lock record in the wam_release_locks table"
    ],
    vendorContacts: {
      companyNote:
        "Jeppesen (owned by Boeing), which runs the JetPlan flight plan server",
      categoryNote:
        "Application Name: WAM (Flight Planning System / Worksheet) • Criticality: Ground Stop. Listed as \"FlightPlanning-WAM\" among critical apps • Operational Category: Flight Ops / Dispatch: flight planning and releases",
      supportEmail: "opssupport@jeppesen.com",
      supportEmailNote: "Jeppesen email",
      supportPhone:
        "Jeppesen: 1-800-732-2800. Say \"Flight Planning\" and give account number 83491",
      technicalSupport:
        "Jeppesen Sev 1 line: 1-800-732-2800, account number 83491 • Jeppesen email: opssupport@jeppesen.com • The Weather Company (weather issues): 1-800-872-2359, option 4 / fieldandfacilities@weather.com (secondary: 1-978-983-6352 / metops@weather.com; Aviation API primary: aviationapi@weather.com; phone conflict in Weather_System_Summary.docx: +1 978-983-6325 option 4)",
      accountManager:
        "Not verified (vendor-contact-name field is blank in current summaries)",
      namedEscalationContact:
        "The Weather Company: 1-800-872-2359, option 4 / fieldandfacilities@weather.com (secondary: 1-978-983-6352 / metops@weather.com; Aviation API: aviationapi@weather.com; Weather_System_Summary.docx lists +1 978-983-6325 option 4)",
      supportHours: "24/7. FlightPlanSvc must run 24/7",
      escalation:
        "Vendor Contacts:\n• Jeppesen Sev 1 line: 1-800-732-2800, account number 83491\n• Jeppesen email: opssupport@jeppesen.com\n• The Weather Company (weather issues): 1-800-872-2359, option 4 / fieldandfacilities@weather.com (secondary: 1-978-983-6352 / metops@weather.com; Aviation API primary: aviationapi@weather.com; phone conflict in Weather_System_Summary.docx: +1 978-983-6325 option 4)\n• Account Manager: Not verified (vendor-contact-name field is blank in current summaries)\n\nCommunication Guidelines:\n• The business focal follows up with Jeppesen and escalates.\n• When escalating to Jeppesen, give: which application (WAM or Flight Planning), the flight and tail number, the RC number, and how many users are affected.\n• Send incident updates about every hour, through Everbridge, xMatters and ServiceNow.",
      communicationGuidelines: [
        "The business focal follows up with Jeppesen and escalates.",
        "When escalating to Jeppesen, give: which application (WAM or Flight Planning), the flight and tail number, the RC number, and how many users are affected.",
        "Send incident updates about every hour, through Everbridge, xMatters and ServiceNow."
      ],
      responseSlas: [
        {
          label: "Sev 1",
          priority: "Sev 1",
          level: "Critical / Ground Stop",
          description: "ProdOps triage within 15 minutes",
          target: "15 minutes",
          value: "ProdOps triage within 15 minutes"
        },
        {
          label: "Sev 2 / Sev 3",
          priority: "Sev 2 / Sev 3",
          level: "Scope Classification",
          description:
            "Sev 2: multiple flights or users affected. Sev 3: single flight or single user",
          target: "Sev 2 (Multiple) / Sev 3 (Single)",
          value:
            "Sev 2: multiple flights or users affected. Sev 3: single flight or single user"
        },
        {
          label: "Update cadence",
          priority: "Update cadence",
          level: "Bridge Communication",
          description: "hourly, per bridge practice",
          target: "Hourly",
          value: "hourly, per bridge practice"
        },
        {
          label: "Vendor response SLA",
          priority: "Vendor response SLA",
          level: "Jeppesen SLA",
          description:
            "Not verified (24/7 vendor support and account 83491 documented; numerical contractual Jeppesen response/resolution SLAs not verified)",
          target: "Not verified (24/7 vendor support)",
          value:
            "Not verified (24/7 vendor support and account 83491 documented; numerical contractual Jeppesen response/resolution SLAs not verified)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS COG Flight Operations. Verified owners: Ryan Wilkins, Adele Lunde",
      itsTeamNote:
        "On-Call: ITS COG Flight Operations • MEL issues: ITS COG M&E App Support",
      applicationOwner:
        "Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified) (Technical Owners)",
      onCallSupport: "ITS COG Flight Operations",
      systemAdministration: "MEL issues: ITS COG M&E App Support",
      businessOwner:
        "AS Business Focals: Leo Blanco and David Caraballo, 206-688-3213 / 206-688-3216 • QX Business Focal: Mike Timpe, 206-574-4789 / 503-702-3463",
      passwordSupport: "AS business contacts (alternate list): Katie Pagel, Leo Blanco",
      everbridgeContacts:
        "AS Business Focals: Leo Blanco, David Caraballo (206-688-3213 / 206-688-3216) • QX Business Focal: Mike Timpe (206-574-4789 / 503-702-3463) • Alternate AS Contacts: Katie Pagel, Leo Blanco"
    },
    validationChecklist: [
      "Confirm scope: how many users and flights, and AS or QX. Get flight numbers, tail numbers and the dispatcher's machine name.",
      "Single user: run the Chrome and cache steps. Multiple users: move to step 3.",
      "\"JEP DOWN\" or rejected plans: check FlightPlanSvc logs on seavvapp22 / tukvvapp22, restart the service, and check the Jeppesen server.",
      "Check MQ alerts on FO.FLIGHTPLAN.REQUEST.QUEUE.",
      "Performance errors: check the Sumo queries for the performance web services. Reset IIS on any DNA servers showing higher error counts.",
      "Missing weather: check the Weather API and confirm with The Weather Company.",
      "MEL errors: check the APIM backend (SDP or DNA) and engage ITS COG M&E.",
      "Check for recent changes. In INC00020700, rolling back CHG00001023 resolved the issue.",
      "Single flight: open a Sev 3. Multiple flights: open a Sev 2 and contact the ITS COG Flight Ops on-call."
    ],
    incidentHistory: [
      {
        id: "INC00020700",
        date: "11/3/2026",
        summary:
          "Flight delays in WAM where about 50% of dispatchers were affected; rolling back CHG00001023 resolved the issue."
      },
      {
        id: "MI-6584",
        date: "2026",
        summary:
          "Horizon (QX) delays reported during weather outage affecting WAM releases."
      }
    ],
    relatedDocuments: [
      {
        title: "Flight Planning System Summary.docx",
        type: "Main Source - System Summary (Word - SysDocs copy modified 2026-09-22)",
        owner: "ITS Knowledge Management / ITS COG Flight Operations",
        updated: "2026-10-06",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B699F4E53-05D1-46F7-BC0B-DDE61D08A91E%7D&file=Flight%20Planning%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Flight_Planning_System_Summary.docx",
        type: "Main Source - SysDocs Summary (Word)",
        owner: "ITS COG Flight Operations",
        updated: "2026-10-30",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B235791B5-2AC8-4E5B-AF7E-F5DCB33C256C%7D&file=Flight_Planning_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "WAM.troubleshooting.docx",
        type: "Main Source - WAM Troubleshooting (Word)",
        owner: "ITS COG Flight Operations",
        updated: "2024-01-22",
        url: "https://alaskaair.sharepoint.com/sites/ASICS/AOS/FO/_layouts/15/Doc.aspx?sourcedoc=%7B0D9BD242-FDDB-4191-B04F-07B63922C56C%7D&file=WAM.troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "FlightPlanning_JetPlan_WAM_TriageDocument.docx",
        type: "Main Source - JetPlan / WAM Triage (Word)",
        owner: "ITS COG Flight Operations",
        updated: "2026-09-27",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BF0F37D42-C602-41A7-AA73-9F3AF09FE00D%7D&file=FlightPlanning_JetPlan_WAM_TriageDocument.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "AircraftPerformanceData_Triage_Troubleshooting.docx",
        type: "Main Source - Aircraft Performance Triage (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BC758E56D-3E63-4E0C-BB72-B98EEDED3BA0%7D&file=AircraftPerformanceData_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "MELService_Triage_Troubleshooting.docx",
        type: "Additional Source - MEL Service Triage (Word)",
        owner: "ITS COG M&E App Support",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BFE7BC914-ED66-41BA-99E2-704E2D344459%7D&file=MELService_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "WAM Error Please try again. If the issue persists report to application support team..docx",
        type: "Additional Source - Single-User WAM Error Guide (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B7BC9A263-7A94-49B7-AF49-FFE7FF6BBB7D%7D&file=WAM%20Error%20Please%20try%20again.%20If%20the%20issue%20persists%20report%20to%20application%20support%20team..docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Weather_System_Summary.docx",
        type: "Additional Source - Weather System Summary (Word)",
        owner: "ITS COG Flight Operations",
        updated: "2026-10-12",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B3DCD1721-BA2E-4F47-838A-3C37820DC927%7D&file=Weather_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ITSOperationsRunbook-WorkBench2.0.docx",
        type: "Additional Source - Workbench 2.0 Runbook (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BCFDCDE00-B7D3-46A1-BBAB-16D3A29B7FD3%7D&file=ITSOperationsRunbook-WorkBench2.0.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARS_System_Summary.docx",
        type: "Additional Source - ACARS System Summary (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BE5D614AD-8759-464D-ABD0-0B87929F4568%7D&file=ACARS_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "RRT0-2025-12-26-01-WAM is down facing informix DBA (OneNote)",
        type: "Additional Source - Rapid Response Tier 0 (OneNote)",
        owner: "Rapid Response Tier 0 / Informix DBA",
        updated: "Not verified (event 2025-12-26)",
        url: "https://alaskaair.sharepoint.com/sites/RapidResponseTier0-2026/_layouts/15/Doc.aspx?action=edit&mobileredirect=true&wdorigin=Sharepoint&DefaultItemOpen=1&sourcedoc=%7Baa538122-0d0b-4713-aa06-83613809aaf0%7D"
      },
      {
        title: "PilotBriefing legacy support (ADO Work Item 1392599)",
        type: "Additional Source - ADO Work Item",
        owner: "ITS Flight Operations",
        updated: "Not verified",
        url: "https://dev.azure.com/itsals/8a8c8ebe-3927-41cd-a3a1-0caec270008a/_workitems/edit/1392599"
      }
    ]
  },
  jetplan: {
    id: "jetplan",
    name: "JetPlan (Jeppesen Flight Planning engine)",
    breadcrumbTrail: ["Ground Stop Applications", "JetPlan", "Impact Details"],
    pageTitle:
      "JetPlan (Jeppesen Flight Planning engine) - Impact Details",
    pageSubtitle:
      "JetPlan calculates flight plans and routing for Alaska and Horizon dispatch operations.",
    applicationsTabTitle: "JetPlan (Jeppesen Flight Planning engine)",
    applicationsTabSubheading: "Applications & Systems (JetPlan Components)",
    applicationsTabSubtitle:
      "JetPlan is Jeppesen's flight planning engine (also called Flight Plan, Jepp JetPlan, BCJPlan). Alaska hosts it in-house, and WAM sends it requests through FlightPlanSvc. Issues require an RRT0 (Tier 0 rapid response) right away.",
    applicationsCardSubtitle:
      "Components that make up JetPlan (JetPlan Engine (JPE), JetPlan Weather (ingestMTDD / forbind), Tomcat (LJPDC) / JBoss adaptor, and FlightPlanSvc).",
    dependenciesTabTitle:
      "JetPlan (Jeppesen Flight Planning engine) - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream systems sending data to JetPlan, downstream consumers relying on JetPlan data, and Linux container/weather server/DNS/NAT/IBM MQ/Informix/monitoring/cloud fallback infrastructure.",
    status: "Active",
    lastUpdated: "Nov 04, 2026",
    subtitle:
      "JetPlan (Jeppesen Flight Planning engine). Also called Flight Plan, Jepp JetPlan, BCJPlan · Criticality: Ground Stop (RRT0) · 24/7, critical to operations",
    company: "Jeppesen (owned by Boeing). Vendor application hosted in-house",
    website: "https://asflightplan.alaskaair.com/jetplan/",
    category: "Flight Ops / Dispatch: flight plan calculation",
    itsTeam: "ITS COG Flight Operations. ITS System Owner: Ryan Wilkins",
    logo: "public/vendors/jeppesen.png",
    impactSummary: {
      confirmed: 0,
      potential: 4,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title:
        "Criticality: Ground Stop. Issues require an RRT0 (Tier 0 rapid response) right away - 24/7, critical to operations",
      message:
        "JetPlan is the engine that calculates every AS and QX flight plan. If it goes down, WAM can't produce flight plans or releases, ATC filing stops, and flights can't be dispatched. That is why it is on the Ground Stop list. Support Portal URL: https://asflightplan.alaskaair.com/jetplan/",
      description:
        "JetPlan is the engine that calculates every AS and QX flight plan. If it goes down, WAM can't produce flight plans or releases, ATC filing stops, and flights can't be dispatched. That is why it is on the Ground Stop list.",
      updatedAgo: "Updated from FlightPlanning_JetPlan_WAM_TriageDocument & Flight_Planning_System_Summary"
    },
    impactedSystems: [
      {
        id: "jetplan-engine-jpe",
        name: "JetPlan Engine (JPE)",
        subName: "(IGQprJPLANin01 / TUKvvJPLANin01 - Linux Containers)",
        appTabSubName: "(IGQprJPLANin01 / TUKvvJPLANin01 - Linux Containers)",
        description: "Linux containers on IGQprJPLANin01 / TUKvvJPLANin01",
        appTabDescription: "Linux containers on IGQprJPLANin01 / TUKvvJPLANin01",
        businessFunction: "Calculates flight plans",
        impact: "\"JEP DOWN\" or \"REJECTED\" plans, no flight plans",
        dependencies: "Jeppesen weather and winds uploads",
        status: "Potential",
        owner: "ITS COG Flight Ops"
      },
      {
        id: "jetplan-weather-ingestmtdd",
        name: "JetPlan Weather (ingestMTDD / forbind)",
        subName: "(IGQprJPWXD01 / TUKvvJPWXD01)",
        appTabSubName: "(IGQprJPWXD01 / TUKvvJPWXD01)",
        description: "Local weather database on IGQprJPWXD01 / TUKvvJPWXD01",
        appTabDescription: "Local weather database on IGQprJPWXD01 / TUKvvJPWXD01",
        businessFunction: "Winds aloft and TAFs used in plans",
        impact: "\"INSUFFICIENT WX DATA\", old TAF data",
        dependencies: "Jeppesen file transfer (SFTP) from DENCOM2",
        status: "Potential",
        owner: "Jeppesen / ITS COG Flight Ops"
      },
      {
        id: "jetplan-tomcat-ljpdc",
        name: "Tomcat (LJPDC) / JBoss adaptor",
        subName: "(Communication Layer & DB Link)",
        appTabSubName: "(Communication Layer & DB Link)",
        description: "Communication layer and database link inside JetPlan",
        appTabDescription: "Communication layer and database link inside JetPlan",
        businessFunction: "Request handling",
        impact: "\"FRONTERR PERFORMANCE SERVER ERROR -1\"",
        dependencies: "JetPlan Engine",
        status: "Potential",
        owner: "Jeppesen"
      },
      {
        id: "jetplan-flightplansvc",
        name: "FlightPlanSvc",
        subName: "(SEAVVAPP22 / TUKVVAPP22 - Hot/Hot)",
        appTabSubName: "(SEAVVAPP22 / TUKVVAPP22 - Hot/Hot)",
        description: "Windows service, hot/hot on SEAVVAPP22 / TUKVVAPP22",
        appTabDescription: "Windows service, hot/hot on SEAVVAPP22 / TUKVVAPP22",
        businessFunction: "Sends requests to JetPlan and writes plans to fltops",
        impact: "No plans reach WAM",
        dependencies: "IBM MQ (QMMFP), Informix fltops",
        status: "Potential",
        owner: "ITS COG Flight Ops"
      }
    ],
    upstreamDependencies: [
      "WAM, through FlightPlanSvc and FO.FLIGHTPLAN.REQUEST.QUEUE",
      "Jeppesen weather and winds aloft files sent by file transfer (SFTP), about every 7 hours",
      "Tanker requests (FO.TANKER.REQUEST.QUEUE)",
      "Aircraft data loaded by business users"
    ],
    downstreamConsumers: [
      "WAM / Dispatch (AS and QX)",
      "Dispatch releases and pilot briefing packets",
      "ATC filing through jobs in the IWS job scheduler: FOASATCPlans and FOQXATCPlans",
      "Tankering batch (FOTANKERPLANS)",
      "ACARS, which uplinks the FMC route string to the aircraft",
      "Flyways Optimization"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Upstream feeds (WAM via FlightPlanSvc/MQ, Jeppesen SFTP weather/winds aloft every ~7 hours, Tanker requests, Aircraft data) flowing into JetPlan to power WAM/Dispatch, ATC filing, Tankering batch, ACARS FMC routes, and Flyways Optimization.",
      diagramUpstream: [
        {
          id: "jp-up-1",
          name: "WAM via FlightPlanSvc",
          subtitle: "FO.FLIGHTPLAN.REQUEST.QUEUE",
          iconType: "transfer"
        },
        {
          id: "jp-up-2",
          name: "Jeppesen Weather & Winds Aloft",
          subtitle: "SFTP from DENCOM2 (~every 7 hrs)",
          iconType: "network"
        },
        {
          id: "jp-up-3",
          name: "Tanker Requests",
          subtitle: "FO.TANKER.REQUEST.QUEUE",
          iconType: "ticket"
        },
        {
          id: "jp-up-4",
          name: "Aircraft Data",
          subtitle: "Loaded by business users",
          iconType: "doc"
        }
      ],
      diagramServices: [
        "JetPlan Engine (JPE)",
        "JetPlan Weather (ingestMTDD / forbind)",
        "Tomcat (LJPDC) / JBoss adaptor",
        "FlightPlanSvc (SEAVVAPP22 / TUKVVAPP22)"
      ],
      diagramDownstream: [
        {
          id: "jp-down-1",
          name: "WAM / Dispatch (AS and QX)",
          subtitle: "Dispatch releases & pilot briefing packets",
          iconType: "team"
        },
        {
          id: "jp-down-2",
          name: "ATC Filing (IWS Jobs)",
          subtitle: "FOASATCPlans and FOQXATCPlans",
          iconType: "doc"
        },
        {
          id: "jp-down-3",
          name: "Tankering Batch",
          subtitle: "FOTANKERPLANS",
          iconType: "database"
        },
        {
          id: "jp-down-4",
          name: "ACARS FMC Route Uplink",
          subtitle: "Uplinks FMC route string to aircraft",
          iconType: "nodes"
        },
        {
          id: "jp-down-5",
          name: "Flyways Optimization",
          subtitle: "Route & flight optimization",
          iconType: "chart"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 4, tone: "red" },
        { label: "Downstream Consumers", count: 6, tone: "green" },
        { label: "JetPlan Components", count: 4, tone: "blue" },
        { label: "Infrastructure Components", count: 8, tone: "purple" }
      ],
      keyTakeaways: [
        "JetPlan is the engine that calculates every AS and QX flight plan. If it goes down, WAM can't produce flight plans or releases, ATC filing stops, and flights can't be dispatched. That is why it is on the Ground Stop list."
      ],
      upstreamTable: [
        {
          id: "jp-upt-1",
          name: "WAM, through FlightPlanSvc and FO.FLIGHTPLAN.REQUEST.QUEUE",
          description: "WAM sends flight plan requests through FlightPlanSvc and IBM MQ queue FO.FLIGHTPLAN.REQUEST.QUEUE.",
          type: "Internal / MQ",
          impact: "Flight plan requests do not reach JetPlan; no plans reach WAM."
        },
        {
          id: "jp-upt-2",
          name: "Jeppesen weather and winds aloft files sent by file transfer (SFTP), about every 7 hours",
          description: "Jeppesen SFTP file transfer from DENCOM2 updating local weather database on IGQprJPWXD01 / TUKvvJPWXD01.",
          type: "External / SFTP",
          impact: "\"INSUFFICIENT WX DATA\" or plans calculated with old TAF / winds aloft data."
        },
        {
          id: "jp-upt-3",
          name: "Tanker requests (FO.TANKER.REQUEST.QUEUE)",
          description: "Fuel tankering calculation requests sent via IBM MQ queue FO.TANKER.REQUEST.QUEUE.",
          type: "Internal / MQ",
          impact: "Tankering requests fail to process."
        },
        {
          id: "jp-upt-4",
          name: "Aircraft data loaded by business users",
          description: "Aircraft characteristics and route/fleet configuration data maintained by business users.",
          type: "Internal Operations",
          impact: "Incorrect or missing aircraft data causes rejected flight plans."
        }
      ],
      downstreamTable: [
        {
          id: "jp-dwt-1",
          name: "WAM / Dispatch (AS and QX)",
          description: "Alaska (AS) and Horizon (QX) dispatchers receiving calculated flight plans in WAM.",
          type: "Internal Teams",
          impact: "All flights get \"JEP DOWN\" or \"REJECTED\" flight plans; WAM can't produce flight plans or releases."
        },
        {
          id: "jp-dwt-2",
          name: "Dispatch releases and pilot briefing packets",
          description: "Calculated flight plans populate dispatch releases and pilot briefing packets.",
          type: "Internal Operations",
          impact: "Flight releases are delayed, which leads to departure delays."
        },
        {
          id: "jp-dwt-3",
          name: "ATC filing through jobs in the IWS job scheduler: FOASATCPlans and FOQXATCPlans",
          description: "Automated ATC flight plan filing jobs in IWS job scheduler.",
          type: "Internal / Batch",
          impact: "Flight plans aren't filed with ATC, so Dispatch has to file them manually."
        },
        {
          id: "jp-dwt-4",
          name: "Tankering batch (FOTANKERPLANS)",
          description: "Batch job processing fuel tankering plans.",
          type: "Internal / Batch",
          impact: "Automated fuel tankering plans do not run."
        },
        {
          id: "jp-dwt-5",
          name: "ACARS, which uplinks the FMC route string to the aircraft",
          description: "Uplinks the calculated FMC route string from JetPlan to the aircraft via ACARS.",
          type: "Internal / Aircraft Comms",
          impact: "Crews cannot receive automated FMC route uplinks via ACARS."
        },
        {
          id: "jp-dwt-6",
          name: "Flyways Optimization",
          description: "Downstream flight optimization platform consuming JetPlan flight plan data.",
          type: "External / Partner",
          impact: "Flyways Optimization lacks calculated flight plan feeds."
        }
      ],
      infrastructureTable: [
        {
          id: "jp-inf-1",
          component: "JetPlan servers",
          description: "IGQprJPLANin01 (159.49.43.6) and TUKvvJPLANin01 (10.70.104.189)",
          owner: "ITS COG Flight Ops / Jeppesen",
          impact: "Hosts JetPlan Engine (JPE) Linux containers."
        },
        {
          id: "jp-inf-2",
          component: "Weather servers",
          description: "IGQprJPWXD01 (159.49.41.22) and TUKvvJPWXD01 (10.70.104.45)",
          owner: "Jeppesen / ITS COG Flight Ops",
          impact: "Hosts local weather database (ingestMTDD / forbind) for winds aloft and TAFs."
        },
        {
          id: "jp-inf-3",
          component: "DNS (GTM WideIP)",
          description:
            "asflightplan.alaskaair.com and jpdc.alaskaair.com (159.49.246.70 / 159.49.88.47); jetplandatafeed.alaskaair.com",
          owner: "ITS Network",
          impact: "Routes traffic to active JetPlan and weather data feed endpoints."
        },
        {
          id: "jp-inf-4",
          component: "External NAT IP",
          description:
            "External NAT IP 159.49.252.30, which Jeppesen uses for the winds aloft feed",
          owner: "ITS Network / Jeppesen",
          impact: "Required for Jeppesen SFTP winds aloft uploads (~every 7 hours)."
        },
        {
          id: "jp-inf-5",
          component: "IBM MQ QMMFP",
          description: "IBM MQ QMMFP (wmq1as.alaskaair.com, port 1425)",
          owner: "Middleware / ITS COG Flight Ops",
          impact: "Handles FO.FLIGHTPLAN.REQUEST.QUEUE and FO.TANKER.REQUEST.QUEUE."
        },
        {
          id: "jp-inf-6",
          component: "Informix fltops database",
          description: "Informix fltops database on Visops 2000",
          owner: "Informix DBA / ITS COG Flight Ops",
          impact: "Stores flight plans written by FlightPlanSvc (fltops.alaskaair.com:1585)."
        },
        {
          id: "jp-inf-7",
          component: "Monitoring",
          description: "Sysdig, AlarmsOne, Grafana, Sumo Logic",
          owner: "ITS COG Flight Ops / ProdOps",
          impact: "Monitors URL health, weather file size (warn 400MB / crit 500MB), and 7-hour upload window."
        },
        {
          id: "jp-inf-8",
          component: "Cloud fallback endpoint",
          description:
            "Cloud fallback endpoint (needs a config change): soap-grays-east.cloud.jetplan.com",
          owner: "Jeppesen / ITS COG Flight Ops",
          impact: "Used when switching from on-prem JetPlan servers to the Jeppesen cloud endpoint."
        }
      ]
    },
    typicalBusinessImpact: [
      "All flights get \"JEP DOWN\" or \"REJECTED\" flight plans",
      "Plans use old weather data (TAFs, winds aloft)",
      "Flight plans aren't filed with ATC, so Dispatch has to file them manually",
      "Flight releases are delayed, which leads to departure delays"
    ],
    knownWorkarounds: [
      "Single user or a few users: change the request settings and try again",
      "File flight plans with ATC manually",
      "Fail over between IGQ and TUK using the JetPlan DR plan (requires an RC number gap of about 100)",
      "Switch to the Jeppesen cloud endpoint",
      "Boeing MAX ETOPS flights on OW routes: pick a different route"
    ],
    vendorContacts: {
      companyNote:
        "Jeppesen (owned by Boeing). Vendor application hosted in-house",
      categoryNote:
        "Application Name: JetPlan (Jeppesen Flight Planning engine). Also called Flight Plan, Jepp JetPlan, BCJPlan • Criticality: Ground Stop. Issues require an RRT0 (Tier 0 rapid response) right away • Support Portal URL: https://asflightplan.alaskaair.com/jetplan/",
      supportEmail: "OpsSupport@jeppesen.com",
      supportEmailNote: "Jeppesen Email",
      supportPhone:
        "Sev 1: 1-800-732-2800. Say \"Flight Planning\" and give account number 83491. Other issues: 1-800-375-4973. Server help: 1-303-328-4585",
      technicalSupport:
        "Jeppesen Sev 1: 1-800-732-2800, account number 83491 • Jeppesen general: 1-800-375-4973 • Jeppesen server help: 1-303-328-4585 • Jeppesen Digital Support Operations Center (DSOC): 1-800-JETPLAN (538-7526)",
      accountManager:
        "Not verified (vendor-contact-name field is blank in current summaries)",
      namedEscalationContact:
        "Jeppesen Digital Support Operations Center (DSOC): 1-800-JETPLAN (538-7526) • Server help: 1-303-328-4585",
      supportHours: "24/7, critical to operations",
      escalation:
        "Vendor Contacts:\n• Jeppesen Sev 1: 1-800-732-2800, account number 83491\n• Jeppesen general: 1-800-375-4973\n• Jeppesen server help: 1-303-328-4585\n• Email: OpsSupport@jeppesen.com\n• Jeppesen Digital Support Operations Center (DSOC): 1-800-JETPLAN (538-7526)\n• Account Manager: Not verified (vendor-contact-name field is blank in current summaries)\n\nCommunication Guidelines:\n• The business focal follows up with Jeppesen and escalates.\n• When escalating, give: which application (WAM or Flight Planning), the flight, tail and RC numbers, how many users are affected, and the weather type if it's a weather issue.\n• Forward critical Jeppesen alerts directly to OpsSupport@jeppesen.com.\n• Raise an RRT0 right away for any JetPlan issue.",
      communicationGuidelines: [
        "The business focal follows up with Jeppesen and escalates.",
        "When escalating, give: which application (WAM or Flight Planning), the flight, tail and RC numbers, how many users are affected, and the weather type if it's a weather issue.",
        "Forward critical Jeppesen alerts directly to OpsSupport@jeppesen.com.",
        "Raise an RRT0 right away for any JetPlan issue."
      ],
      responseSlas: [
        {
          label: "Sev 1",
          priority: "Sev 1",
          level: "Critical / Ground Stop (RRT0)",
          description:
            "all flights or multiple users getting \"REJECTED\" or \"ERROR\"",
          target: "Raise RRT0 right away",
          value:
            "all flights or multiple users getting \"REJECTED\" or \"ERROR\""
        },
        {
          label: "Sev 2",
          priority: "Sev 2",
          level: "High Operational Impact",
          description:
            "more than 2 dispatchers affected, or constant FRONTERR errors",
          target: "More than 2 dispatchers / constant FRONTERR",
          value:
            "more than 2 dispatchers affected, or constant FRONTERR errors"
        },
        {
          label: "Sev 3",
          priority: "Sev 3",
          level: "Single User / Intermittent",
          description: "single user, or intermittent FRONTERR errors",
          target: "Single user / intermittent FRONTERR",
          value: "single user, or intermittent FRONTERR errors"
        },
        {
          label: "Initial response and update cadence",
          priority: "Initial response and update cadence",
          level: "Response & Update Cadence",
          description:
            "Not verified (immediate RRT0 escalation required for critical alerts; numerical internal Sev 1 and Sev 2 response times and bridge update cadence not verified)",
          target: "Immediate RRT0 | Numerical SLA & cadence: Not verified",
          value:
            "Not verified (immediate RRT0 escalation required for critical alerts; numerical internal Sev 1 and Sev 2 response times and bridge update cadence not verified)"
        },
        {
          label: "Vendor response SLA",
          priority: "Vendor response SLA",
          level: "Jeppesen SLA",
          description:
            "Not verified (24/7 vendor support and account 83491 documented; numerical contractual Jeppesen response/resolution SLAs not verified)",
          target: "Not verified (24/7 vendor support)",
          value:
            "Not verified (24/7 vendor support and account 83491 documented; numerical contractual Jeppesen response/resolution SLAs not verified)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS COG Flight Operations. ITS System Owner: Ryan Wilkins",
      itsTeamNote:
        "Technical Owners: Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified) • On-Call: ITS COG Flight Operations",
      applicationOwner:
        "Ryan Wilkins (ITS System Owner, 206-972-0228) • Technical Owners: Ryan Wilkins, Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified)",
      onCallSupport: "ITS COG Flight Operations",
      systemAdministration:
        "AS Business Owners / System Admins: Leo Blanco, David Caraballo, 206-688-3213 / 206-688-3216",
      businessOwner:
        "AS Business Owners / System Admins: Leo Blanco, David Caraballo, 206-688-3213 / 206-688-3216 • QX Business Owner: Mike Timpe, 206-574-4789 / 503-702-3463",
      passwordSupport: "Service Desk: 1-877-238-1077",
      everbridgeContacts:
        "AS Business Owners / System Admins: Leo Blanco, David Caraballo (206-688-3213 / 206-688-3216) • QX Business Owner: Mike Timpe (206-574-4789 / 503-702-3463)"
    },
    validationChecklist: [
      "Confirm scope: one user, several dispatchers, or all flights. All flights is Sev 1; more than 2 dispatchers is Sev 2.",
      "Check that https://asflightplan.alaskaair.com/jetplan/ is up.",
      "Check Sysdig: URL monitor, weather file size (warning at 400MB, critical at 500MB), and whether the last data upload was within the past 7 hours.",
      "Check that FlightPlanSvc is running on SEAVVAPP22 / TUKVVAPP22 and review the logs. Restart it if needed.",
      "Check queue depth on FO.FLIGHTPLAN.REQUEST.QUEUE (QMMFP). Engage Middleware if it isn't draining.",
      "\"ingestMT down\" alert: forward it to Jeppesen right away. Ping the server; if the ping fails, call Compute & Platform on-call.",
      "SSL/TLS alert: check the Jeppesen certificate and any recent change requests (CRs).",
      "Check the Informix fltops database (fltops.alaskaair.com:1585). Engage the DBA if there's a problem.",
      "If the problem continues, call the Jeppesen Sev 1 line and engage the ITS COG Flight Ops on-call."
    ],
    incidentHistory: [],
    relatedDocuments: [
      {
        title: "FlightPlanning_JetPlan_WAM_TriageDocument.docx",
        type: "Main Source - JetPlan & WAM Triage (Word)",
        owner: "ITS COG Flight Operations",
        updated: "2026-09-27",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BF0F37D42-C602-41A7-AA73-9F3AF09FE00D%7D&file=FlightPlanning_JetPlan_WAM_TriageDocument.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Flight_Planning_System_Summary.docx",
        type: "Main Source - System Summary (Word)",
        owner: "ITS COG Flight Operations",
        updated: "2026-10-30",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B235791B5-2AC8-4E5B-AF7E-F5DCB33C256C%7D&file=Flight_Planning_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Flight Planning System Summary.docx",
        type: "Main Source - ITS Knowledge Management (Word - SysDocs copy modified 2026-09-22)",
        owner: "ITS Knowledge Management / ITS COG Flight Operations",
        updated: "2026-10-06",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B699F4E53-05D1-46F7-BC0B-DDE61D08A91E%7D&file=Flight%20Planning%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "FlightPlanSvc_Runbook.pdf",
        type: "Main Source - FlightPlanSvc Runbook (PDF - unreviewed/unvalidated warning)",
        owner: "ITS Flight Ops Runbooks (IOC)",
        updated: "2026-04-17",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/ITS%20Flight%20Ops%20Runbooks%20(IOC)/FlightPlanSvc_Runbook.pdf?web=1"
      },
      {
        title: "JetPlan_DRPlan.xlsx",
        type: "Additional Source - JetPlan DR Plan (Excel)",
        owner: "ITS COG Flight Operations",
        updated: "2026-07-23",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B3960049C-C827-4F38-A1F6-649E183E60EE%7D&file=JetPlan_DRPlan.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "User Gets FRONTERR PERFORMANCE SERVER ERROR -1.docx",
        type: "Additional Source - FRONTERR Troubleshooting (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B852618A7-D2AA-4D06-ABFC-79BFE7867DA0%7D&file=User%20Gets%20FRONTERR%20PERFORMANCE%20SERVER%20ERROR%20-1.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Service-Offering-Application-Metadata mapping 10-12-2026.xlsx",
        type: "Additional Source - Service Offering Metadata (Excel)",
        owner: "ITS Production Operations",
        updated: "Not verified (filename 2026-10-12)",
        url: "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7BCCA8403B-C46B-47D8-8D7D-58429E9875D6%7D&file=Service-Offering-Application-Metadata%20mapping%2010-12-2026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARS_Physical_View.pdf",
        type: "Additional Source - ACARS Physical View (PDF)",
        owner: "ITS COG Flight Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/ACARS%20(AS)/ACARS_Physical_View.pdf?web=1"
      },
      {
        title: "FlywaysMessaging_FlywaysOptimization_Triage_Troubleshooting.docx",
        type: "Additional Source - Flyways Optimization Triage (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BE6109FA6-1741-4020-B2D6-E29C9DF7AF1A%7D&file=FlywaysMessaging_FlywaysOptimization_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      }
    ]
  },
  "Smart4Aviation (S4A)": {
    id: "Smart4Aviation (S4A)",
    name: "S4A SmartSuite",
    breadcrumbTrail: [
      "Ground Stop Applications",
      "S4A SmartSuite",
      "Application Impact Details"
    ],
    pageTitle: "S4A SmartSuite - Application Impact Details",
    pageSubtitle:
      "S4A SmartSuite provides flight operations modules including SmartBrief, SmartLoad weight and balance, and SmartComm messaging.",
    applicationsTabTitle: "S4A SmartSuite (Smart4Aviation / SmartLoad / SmartComm / Weight and Balance)",
    applicationsTabSubheading: "Applications & Systems (S4A components)",
    applicationsTabSubtitle:
      "S4A pulls in flight, passenger, bag, cargo, crew, fuel and MEL data to automate weight and balance. It checks the actual load and sends the Load Closeout to the aircraft. If S4A is down, aircraft can't be safely prepared to depart on time.",
    applicationsCardSubtitle:
      "This list shows the core S4A components, their business functions, operational impact if down, key dependencies, and primary technical owners.",
    dependenciesTabTitle: "S4A SmartSuite - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream data feeds, downstream consumers, and hosting & network infrastructure for S4A SmartSuite.",
    status: "Active",
    lastUpdated: "Nov 04, 2026",
    subtitle:
      "S4A SmartSuite. Also called Smart4Aviation, SmartLoad, SmartComm, Weight and Balance · Criticality: Tier 1 and Ground Stop eligible · 24x7",
    company: "Smart4Aviation (based in Poland). Vendor application on in-house Linux servers",
    website: "https://smartsuite.insideaag.com/",
    category: "Airport Ops / Flight Ops: weight and balance and load planning",
    itsTeam:
      "ITS Flight Operations. System Owner: Ryan Wilkins. Servers supported by the ITS JCTE System Admins",
    logo: "public/vendors/smart4aviation.jpg",
    impactSummary: {
      confirmed: 0,
      potential: 5,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title:
        "Criticality: Tier 1 and Ground Stop eligible. Impact is high if fully down, medium if only some services or data types are affected - 24x7",
      message:
        "S4A pulls in flight, passenger, bag, cargo, crew, fuel and MEL data to automate weight and balance. It checks the actual load and sends the Load Closeout to the aircraft. If S4A is down, aircraft can't be safely prepared to depart on time. Web App URL: https://smartsuite.insideaag.com/",
      description:
        "S4A pulls in flight, passenger, bag, cargo, crew, fuel and MEL data to automate weight and balance. It checks the actual load and sends the Load Closeout to the aircraft. If S4A is down, aircraft can't be safely prepared to depart on time.",
      updatedAgo: "Updated from ITS Operations Runbook_S4A_SmartSuite_v1.1_0406_2026 & S4A_Triage_Troubleshooting"
    },
    impactedSystems: [
      {
        id: "s4a-smartload",
        name: "SmartLoad",
        subName: "(Load Planning & Weight and Balance)",
        appTabSubName: "(Load Planning & Weight and Balance)",
        description: "Plans the load and calculates weight and balance",
        appTabDescription: "Plans the load and calculates weight and balance",
        shortDescription: "Plans the load and calculates weight and balance",
        businessFunction: "Load planning, Load Closeout",
        impact: "CLP can't produce Load Closeouts",
        impactIfDown: "CLP can't produce Load Closeouts",
        dependencies: "MQ S4AP, PostgreSQL",
        keyDependencies: "MQ S4AP, PostgreSQL",
        owner: "ITS Apps-Airline Ops",
        technicalOwner: "ITS Apps-Airline Ops",
        status: "Potential"
      },
      {
        id: "s4a-smartcomm",
        name: "SmartComm",
        subName: "(Alerts, Messaging & Templates)",
        appTabSubName: "(Alerts, Messaging & Templates)",
        description: "Alerts, messaging and message templates",
        appTabDescription: "Alerts, messaging and message templates",
        shortDescription: "Alerts, messaging and message templates",
        businessFunction: "Communications",
        impact: "No alerts or messages to stations or aircraft",
        impactIfDown: "No alerts or messages to stations or aircraft",
        dependencies: "MQ, TIBCO, ACARS",
        keyDependencies: "MQ, TIBCO, ACARS",
        owner: "ITS Apps-Airline Ops",
        technicalOwner: "ITS Apps-Airline Ops",
        status: "Potential"
      },
      {
        id: "s4a-smartops",
        name: "SmartOps",
        subName: "(Gantt Flight Schedule & Tail Overview)",
        appTabSubName: "(Gantt Flight Schedule & Tail Overview)",
        description: "Gantt view of flight schedules and tail numbers",
        appTabDescription: "Gantt view of flight schedules and tail numbers",
        shortDescription: "Gantt view of flight schedules and tail numbers",
        businessFunction: "Flight overview",
        impact: "No flight view for CLP",
        impactIfDown: "No flight view for CLP",
        dependencies: "Flight event feeds",
        keyDependencies: "Flight event feeds",
        owner: "ITS Apps-Airline Ops",
        technicalOwner: "ITS Apps-Airline Ops",
        status: "Potential"
      },
      {
        id: "s4a-app-mq-cs-servers",
        name: "App / MQ / CS servers",
        subName: "(IGQ & SE4 Linux Servers)",
        appTabSubName: "(IGQ & SE4 Linux Servers)",
        description: "Linux servers in IGQ and SE4 (app, MQ and CS tiers)",
        appTabDescription: "Linux servers in IGQ and SE4 (app, MQ and CS tiers)",
        shortDescription: "Linux servers in IGQ and SE4 (app, MQ and CS tiers)",
        businessFunction: "Hosting",
        impact: "Whole system down",
        impactIfDown: "Whole system down",
        dependencies: "JBoss, PostgreSQL",
        keyDependencies: "JBoss, PostgreSQL",
        owner: "ITS JCTE System Admins",
        technicalOwner: "ITS JCTE System Admins",
        status: "Potential"
      },
      {
        id: "s4a-postgresql-databases",
        name: "PostgreSQL databases",
        subName: "(s4a.wbpgdb.insideaag.com & SE4prS4Awbdb02)",
        appTabSubName: "(s4a.wbpgdb.insideaag.com & SE4prS4Awbdb02)",
        description: "s4a.wbpgdb.insideaag.com, plus reporting database SE4prS4Awbdb02",
        appTabDescription: "s4a.wbpgdb.insideaag.com, plus reporting database SE4prS4Awbdb02",
        shortDescription: "s4a.wbpgdb.insideaag.com, plus reporting database SE4prS4Awbdb02",
        businessFunction: "Data storage and reporting",
        impact: "App fails, reporting fails",
        impactIfDown: "App fails, reporting fails",
        dependencies: "Database servers",
        keyDependencies: "Database servers",
        owner: "ITS JCTE System Admins",
        technicalOwner: "ITS JCTE System Admins",
        status: "Potential"
      }
    ],
    upstreamDependencies: [
      "MQ S4AP inbound queues: Flight, PAX, Baggage, Cargo, MEL, Crew, Fuel, EXT_ACARS, Assignment, FP_JEPPESEN, COMM_MESSAGE, XML_COMM",
      "Aircom (ACARS ground), RSA Mobile, iCargo",
      "Sabre (reservations and Flight Record Data), Visops, Crew Management, Dispatch (fuel requirements), M&E (MEL through MtxEventPublisher)",
      "JetPlan / Jeppesen flight plans"
    ],
    downstreamConsumers: [
      "ACARS / aircraft: Load Closeout and fuel slip, through FO.FLIGHT.LOAD.ACARS.UPLINK",
      "FAA Cert database (FINAL_LOAD_OUTBOUND)",
      "Estimated zero fuel weight (EZFW) / ZeroFuelWeightWS (fltops)",
      "AirClic / ULD Planeside tool (COMM_ALERT_OUTBOUND)",
      "Fuel vendors (fuel slips sent by email through outbound.alaskaair.com)",
      "Countdown and Ad-Hoc data feeds, PST, Turn Timeline",
      "CLP, stations and ramp agents"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Upstream feeds (MQ S4AP inbound queues, Aircom/RSA Mobile/iCargo, Sabre/Visops/Crew/Dispatch/M&E, and JetPlan flight plans) flowing into S4A SmartSuite to deliver Load Closeouts to ACARS/aircraft, FAA Cert DB, EZFW, AirClic, fuel vendors, and CLP/stations.",
      diagramUpstream: [
        {
          id: "s4a-up-1",
          name: "MQ S4AP Inbound Queues",
          subtitle: "Flight, PAX, Baggage, Cargo, MEL, Crew, Fuel, EXT_ACARS, Assignment, FP_JEPPESEN, COMM_MESSAGE, XML_COMM",
          iconType: "transfer"
        },
        {
          id: "s4a-up-2",
          name: "Aircom, RSA Mobile, iCargo",
          subtitle: "ACARS ground, ramp & cargo feeds",
          iconType: "network"
        },
        {
          id: "s4a-up-3",
          name: "Sabre, Visops, Crew, Dispatch, M&E",
          subtitle: "Reservations, Flight Record Data, fuel, MEL (MtxEventPublisher)",
          iconType: "database"
        },
        {
          id: "s4a-up-4",
          name: "JetPlan / Jeppesen",
          subtitle: "Jeppesen flight plans",
          iconType: "doc"
        }
      ],
      diagramServices: [
        "SmartLoad (Load planning & Closeout)",
        "SmartComm (Alerts & messaging)",
        "SmartOps (Gantt flight overview)",
        "IGQ & SE4 App / MQ / CS / PostgreSQL"
      ],
      diagramDownstream: [
        {
          id: "s4a-down-1",
          name: "ACARS / Aircraft",
          subtitle: "Load Closeout & fuel slip (FO.FLIGHT.LOAD.ACARS.UPLINK)",
          iconType: "nodes"
        },
        {
          id: "s4a-down-2",
          name: "FAA Cert DB & EZFW",
          subtitle: "FINAL_LOAD_OUTBOUND & ZeroFuelWeightWS (fltops)",
          iconType: "database"
        },
        {
          id: "s4a-down-3",
          name: "AirClic / ULD Planeside",
          subtitle: "COMM_ALERT_OUTBOUND",
          iconType: "ticket"
        },
        {
          id: "s4a-down-4",
          name: "Fuel Vendors & Operational Feeds",
          subtitle: "outbound.alaskaair.com, Countdown, Ad-Hoc, PST, Turn Timeline",
          iconType: "chart"
        },
        {
          id: "s4a-down-5",
          name: "CLP, Stations & Ramp Agents",
          subtitle: "Centralized Load Planners & station teams",
          iconType: "team"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 4, tone: "red" },
        { label: "Downstream Consumers", count: 7, tone: "green" },
        { label: "S4A Components", count: 5, tone: "blue" },
        { label: "Infrastructure Components", count: 6, tone: "purple" }
      ],
      keyTakeaways: [
        "S4A pulls in flight, passenger, bag, cargo, crew, fuel and MEL data to automate weight and balance. It checks the actual load and sends the Load Closeout to the aircraft. If S4A is down, aircraft can't be safely prepared to depart on time."
      ],
      upstreamTable: [
        {
          id: "s4a-upt-1",
          name: "MQ S4AP inbound queues: Flight, PAX, Baggage, Cargo, MEL, Crew, Fuel, EXT_ACARS, Assignment, FP_JEPPESEN, COMM_MESSAGE, XML_COMM",
          description: "Inbound IBM MQ queues on S4AP delivering operational feeds into S4A SmartSuite.",
          type: "Internal / MQ",
          impact: "Missing passenger, baggage, cargo, crew, fuel, MEL, or flight plan data in S4A."
        },
        {
          id: "s4a-upt-2",
          name: "Aircom (ACARS ground), RSA Mobile, iCargo",
          description: "Aircraft communications, ramp baggage scanning, and cargo management feeds.",
          type: "Internal / Operational",
          impact: "ACARS messages, baggage loading scans, or cargo weights fail to update in S4A."
        },
        {
          id: "s4a-upt-3",
          name: "Sabre (reservations and Flight Record Data), Visops, Crew Management, Dispatch (fuel requirements), M&E (MEL through MtxEventPublisher)",
          description: "Core airline operations feeds for passenger counts, schedule, crew, fuel, and MEL items.",
          type: "Internal / Core Feeds",
          impact: "Missing passenger counts, fuel requirements, or MEL updates force manual workarounds at closeout."
        },
        {
          id: "s4a-upt-4",
          name: "JetPlan / Jeppesen flight plans",
          description: "Flight planning data fed from JetPlan / Jeppesen.",
          type: "Internal / Flight Ops",
          impact: "Planned flight weights and fuel figures do not populate automatically."
        }
      ],
      downstreamTable: [
        {
          id: "s4a-dwt-1",
          name: "ACARS / aircraft: Load Closeout and fuel slip, through FO.FLIGHT.LOAD.ACARS.UPLINK",
          description: "Sends final Load Closeout and fuel slip to the aircraft via IBM MQ and ACARS.",
          type: "Aircraft Uplink",
          impact: "No automated Load Closeouts or final numbers to aircraft; stations must print and read them to the crew."
        },
        {
          id: "s4a-dwt-2",
          name: "FAA Cert database (FINAL_LOAD_OUTBOUND)",
          description: "Outbound queue feeding final load records to FAACertWS / FAA Cert database.",
          type: "Regulatory Database",
          impact: "Final load records do not update in the FAA Cert database."
        },
        {
          id: "s4a-dwt-3",
          name: "Estimated zero fuel weight (EZFW) / ZeroFuelWeightWS (fltops)",
          description: "Outbound feed providing estimated zero fuel weight (EZFW) to Flight Ops.",
          type: "Internal / Flight Ops",
          impact: "ZeroFuelWeightWS does not receive EZFW updates."
        },
        {
          id: "s4a-dwt-4",
          name: "AirClic / ULD Planeside tool (COMM_ALERT_OUTBOUND)",
          description: "Outbound communication and alert feed to AirClic / ULD Planeside tools.",
          type: "Internal / Ramp Tools",
          impact: "Planeside ramp tools do not receive load alerts."
        },
        {
          id: "s4a-dwt-5",
          name: "Fuel vendors (fuel slips sent by email through outbound.alaskaair.com)",
          description: "Automated email delivery of fuel slips to fuel vendors via outbound.alaskaair.com.",
          type: "External / Vendors",
          impact: "Fuel vendors do not receive automated fuel slips by email."
        },
        {
          id: "s4a-dwt-6",
          name: "Countdown and Ad-Hoc data feeds, PST, Turn Timeline",
          description: "Downstream operational data feeds and turn tracking dashboards.",
          type: "Internal / Dashboards",
          impact: "Countdown, Ad-Hoc feeds, PST, and Turn Timeline lack load status updates."
        },
        {
          id: "s4a-dwt-7",
          name: "CLP, stations and ramp agents",
          description: "Centralized Load Planners, station customer service agents, and ramp teams.",
          type: "Internal Teams",
          impact: "CLP plans flights manually in the FlexLoad spreadsheet; stations print final numbers and read them to the aircraft."
        }
      ],
      infrastructureTable: [
        {
          id: "s4a-inf-1",
          component: "IGQ servers",
          description:
            "IGQprS4Awbap01-03 (app), IGQprS4Awbmq01-02 (MQ), IGQprS4Awbcs01-03 (CS), IGQprS4Awbdb01 (database)",
          owner: "ITS JCTE System Admins",
          impact: "Hosts primary IGQ application, MQ, CS, and database tiers."
        },
        {
          id: "s4a-inf-2",
          component: "SE4 servers",
          description:
            "SE4prS4Awbapp01-03, SE4prS4Amqwb01-02, SE4prS4Awbcs01-03, SE4prS4Awbdb01, plus reporting database SE4prS4Awbdb02",
          owner: "ITS JCTE System Admins",
          impact: "Hosts SE4 application, MQ, CS, database, and reporting database tiers."
        },
        {
          id: "s4a-inf-3",
          component: "IBM MQ",
          description:
            "S4AP (all COMM.V1.* queues) and QMMFP (FO.FLIGHT.EVENTS, FO.FLIGHT.LOAD.ACARS.UPLINK)",
          owner: "ITS Middleware / JCTE System Admins",
          impact: "Carries all inbound S4AP queues and outbound QMMFP flight events and ACARS load uplinks."
        },
        {
          id: "s4a-inf-4",
          component: "TIBCO, Prod DNA server farm, and FltOps Informix database",
          description:
            "TIBCO, the Prod DNA server farm, and the FltOps Informix database",
          owner: "ITS Middleware / Flight Ops",
          impact: "Middleware routing and Flight Ops database integration."
        },
        {
          id: "s4a-inf-5",
          component: "Monitoring",
          description:
            "AppDynamics (S4ASmartSuite_WBPROD), the S4A WB status dashboard, and Sumo Logic (_sourcecategory = prod/its/non-sensitive/crew/s4a/app)",
          owner: "ITS Flight Ops / JCTE System Admins",
          impact: "Application performance monitoring, WB status visibility, and log aggregation."
        },
        {
          id: "s4a-inf-6",
          component: "Firewall / network rules",
          description:
            "Not verified (server tiers IGQprS4Awb* / SE4prS4Awb*, MQ S4AP and QMMFP, and database alias s4a.wbpgdb.insideaag.com documented; specific approved firewall rules, ports, and load-balancer VIPs not verified)",
          owner: "ITS Network",
          impact:
            "Network connectivity between S4A tiers, MQ S4AP/QMMFP, PostgreSQL, and downstream consumers (exact firewall rules: Not verified)"
        }
      ]
    },
    typicalBusinessImpact: [
      "No automated Load Closeouts or final numbers to aircraft",
      "Flight delays. In INC3406923, Flight 305 SEA-MIA was delayed 7-10 minutes because of a bag count issue",
      "Missing passenger or bag counts force manual workarounds at closeout. RRT0 on 2026-01-21 was caused by a middleware change",
      "QX flights didn't get passenger count closure or final load numbers (INC00020920, 11/3/2026)"
    ],
    knownWorkarounds: [
      "CLP plans flights manually in the FlexLoad spreadsheet. Stations print the final numbers and read them to the aircraft",
      "For missing passenger counts, call the CSAs (customer service agents) manually",
      "If a middleware change caused the issue, roll back the change request (CR)",
      "DR failover per S4A_Smartload_DR.xlsx"
    ],
    validationChecklist: [
      "Open the S4A URL and click SAML Login. A \"no access\" page means the site is up; any other error means it's down. If it's down: open a Sev 1, call the JCTE System Admin on-call, and notify the FltOps on-call and the S4A Product Admin.",
      "Confirm scope. All CLP users down is Sev 1; otherwise start at Sev 2.",
      "Check S4AP inbound queue alerts. A warning is Sev 3; a critical alert is Sev 2. Contact the JCTE System Admin on-call.",
      "Check outbound queue backups. Reassign to Middleware, then check the receiving service (FAACertWS, ZeroFuelWeightWS, RealTimeAlertsWS).",
      "Green \"unrecoverable error\" message: this is a network or infrastructure problem. One station is Sev 2; multiple stations is Sev 1.",
      "JBoss alert: if the JCTE admin doesn't respond within 5 minutes, follow the S4A instructions for ProdOps.",
      "Flights missing from desks: check the FOVerifySked job and contact COG FltOps.",
      "MEL data not updating: check that MtxEventPublisher is running on TUKVVAPP22, then check MQ and TIBCO.",
      "Check for recent changes to Middleware or TIBCO."
    ],
    vendorContacts: {
      companyNote:
        "Smart4Aviation (based in Poland). Vendor application on in-house Linux servers",
      categoryNote:
        "Application Name: S4A SmartSuite. Also called Smart4Aviation, SmartLoad, SmartComm, Weight and Balance • Criticality: Tier 1 and Ground Stop eligible. Impact is high if fully down, medium if only some services or data types are affected • Web App URL: https://smartsuite.insideaag.com/",
      supportEmail: "support@smart4aviation.aero",
      supportEmailNote: "Smart4Aviation Support",
      supportPhone: "+48 12 379 3737",
      technicalSupport:
        "Smart4Aviation Support: +48 12 379 3737 / support@smart4aviation.aero • Escalation: email the support desk first. If there's no response or it's urgent, call the help line",
      accountManager: "N/A in current source; named account manager not verified.",
      namedEscalationContact:
        "Escalation: email the support desk first. If there's no response or it's urgent, call the help line (+48 12 379 3737)",
      supportHours: "24x7",
      escalation:
        "Vendor Contacts:\n• Smart4Aviation Support: +48 12 379 3737 / support@smart4aviation.aero\n• Escalation: email the support desk first. If there's no response or it's urgent, call the help line\n• Account Manager: N/A in current source; named account manager not verified.\n\nCommunication Guidelines:\n• When escalating, give: user name, role, flight number, flight date, departure city, and a description of the issue.\n• Page or call each on-call contact twice within 90 seconds. If there's no response in 5 minutes, escalate to the next tier.\n• P2: create a Teams channel named with the MI number. RRT0: name the channel RRT0YYYYMMDD0X - Title.\n• For vendor issues, email the details and logs first, then call the help desk.",
      communicationGuidelines: [
        "When escalating, give: user name, role, flight number, flight date, departure city, and a description of the issue.",
        "Page or call each on-call contact twice within 90 seconds. If there's no response in 5 minutes, escalate to the next tier.",
        "P2: create a Teams channel named with the MI number. RRT0: name the channel RRT0YYYYMMDD0X - Title.",
        "For vendor issues, email the details and logs first, then call the help desk."
      ],
      responseSlas: [
        {
          label: "P1 updates",
          priority: "P1 updates",
          level: "Leadership Engaged",
          description:
            "every 15-30 minutes - TBD in runbook (not a confirmed policy). Leadership must be engaged for P1",
          target: "Every 15-30 minutes (TBD)",
          value:
            "every 15-30 minutes - TBD in runbook (not a confirmed policy). Leadership must be engaged for P1"
        },
        {
          label: "Sev 1",
          priority: "Sev 1",
          level: "Critical / Ground Stop Eligible",
          description: "all CLP users down, or the URL is down",
          target: "All CLP users down, or the URL is down",
          value: "all CLP users down, or the URL is down"
        },
        {
          label: "Sev 2",
          priority: "Sev 2",
          level: "High Operational Impact",
          description: "some users, or a critical inbound queue alert",
          target: "Some users, or a critical inbound queue alert",
          value: "some users, or a critical inbound queue alert"
        },
        {
          label: "Vendor response SLA",
          priority: "Vendor response SLA",
          level: "Smart4Aviation SLA",
          description:
            "Not verified (24x7 vendor support documented; numerical contractual Smart4Aviation response and resolution targets not verified)",
          target: "Not verified (24x7 vendor support)",
          value:
            "Not verified (24x7 vendor support documented; numerical contractual Smart4Aviation response and resolution targets not verified)"
        }
      ]
    },
    internalContacts: {
      itsTeam:
        "ITS Flight Operations. System Owner: Ryan Wilkins. Servers supported by the ITS JCTE System Admins",
      itsTeamNote:
        "Technical Owners: Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified) • System Admin: ITS JCTE System Admins on-call, 24/7",
      applicationOwner:
        "ITS System Owner: Ryan Wilkins (ITS Flight Operations, 206-972-0228) • Technical Owners: Ryan Wilkins, Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified)",
      onCallSupport:
        "Application Admin: Arun Sharma, Ryan Wilkins (ITS Apps-Airline Ops), 07:00-15:30, with on-call 24/7",
      systemAdministration: "ITS JCTE System Admins on-call, 24/7",
      businessOwner:
        "Business Owner Primary group: ITS Flight Operations; contact: N/A (named CLP/Airport Operations business focal: Not verified)",
      passwordSupport: "Service Desk: 1-877-238-1077",
      everbridgeContacts:
        "ITS Flight Operations on-call • ITS Apps-Airline Ops (Arun Sharma, Ryan Wilkins) • ITS JCTE System Admins on-call, 24/7"
    },
    incidentHistory: [
      {
        id: "INC00020920 (2026-11-03)",
        date: "2026-11-03",
        duration: "Documented Incident",
        severity: "High",
        title: "QX flights didn't get passenger count closure or final load numbers",
        rootCause:
          "QX flights didn't get passenger count closure or final load numbers (INC00020920, 11/3/2026).",
        resolution:
          "Manual passenger count and load number verification per S4A triage guidelines."
      },
      {
        id: "RRT0 (2026-01-21) & INC3406923",
        date: "2026-01-21",
        duration: "7-10 min flight delay",
        severity: "RRT0 / Sev 1",
        title: "Middleware change caused missing counts (RRT0); Flight 305 SEA-MIA delayed (INC3406923)",
        rootCause:
          "In INC3406923, Flight 305 SEA-MIA was delayed 7-10 minutes because of a bag count issue. Missing passenger or bag counts force manual workarounds at closeout; RRT0 on 2026-01-21 was caused by a middleware change.",
        resolution:
          "Roll back the middleware change request (CR) and use manual closeout workarounds."
      }
    ],
    relatedDocuments: [
      {
        title: "ITS Operations Runbook_S4A_SmartSuite_v1.1_0406_2026.docx",
        type: "Primary Source - S4A SmartSuite Operations Runbook (Word - P1 cadence marked TBD; two SysDocs copies exist)",
        owner: "ITS Flight Operations",
        updated: "2026-04-06 (copy 2: 2026-04-15)",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B97741431-AD50-495E-BF14-0B66DDF51F08%7D&file=ITS%20Operations%20Runbook_S4A_SmartSuite_v1.1_0406_2026.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "S4A_Triage_Troubleshooting.docx",
        type: "Primary Source - S4A Triage & Troubleshooting (Word)",
        owner: "ITS Flight Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B06828A43-BB4C-42CD-870E-C2C4C607C9EC%7D&file=S4A_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "S4A (Smart4Aviation) IT Support Documentation.docx",
        type: "Primary Source - S4A IT Support Documentation (Word)",
        owner: "ITS Knowledge Management",
        updated: "2026-09-22",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BC715869B-33B8-41C2-8C4B-B84C73EAEB6C%7D&file=S4A%20(Smart4Aviation)%20IT%20Support%20Documentation.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "S4A (Smart4Aviation) System Summary.docx",
        type: "Primary Source - S4A System Summary (Word)",
        owner: "ITS Flight Operations",
        updated: "2026-09-22",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B5DFC0539-A7FA-4D53-AF6D-CDC9720C0F9E%7D&file=S4A%20(Smart4Aviation)%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "S4A_Smartload_DR.xlsx",
        type: "Primary Source - S4A SmartLoad Disaster Recovery Plan (Excel)",
        owner: "ITS Flight Operations / ITS JCTE System Admins",
        updated: "2026-02-13",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B6151C57B-2D9B-44F2-A1FC-0DDD3B901ED5%7D&file=S4A_Smartload_DR.xlsx&action=default&mobileredirect=true"
      },
      {
        title: "Monitoring alert for Jboss services for S4A.docx",
        type: "Primary Source - JBoss Services Monitoring Alert for S4A (Word)",
        owner: "ITS Knowledge Management",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BBBAF6694-880E-4D77-8F81-ABC9B9C07818%7D&file=Monitoring%20alert%20for%20Jboss%20services%20for%20S4A.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "S4A System Logical_Orig.pdf",
        type: "Primary Source - S4A System Logical Diagram (PDF)",
        owner: "ITS Flight Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/Aircraft%20Weight%20and%20Balance/Weight%20and%20Balance%20-%20S4A%20Additional%20Docs/Logical%20Diagram/S4A%20System%20Logical_Orig.pdf?web=1"
      },
      {
        title: "MtxEventPublisher Service (M&E) System Summary.docx",
        type: "Additional Source - MtxEventPublisher Service System Summary (Word)",
        owner: "ITS Maintenance & Engineering",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BC6CC21A6-60FF-425F-8CDD-23CB5752EA51%7D&file=MtxEventPublisher%20Service%20(M%26E)%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Executive Summary of Incidents 2025-12 to Current Date.xlsx",
        type: "Additional Source - Executive Summary of Incidents (Excel)",
        owner: "ITS Production Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7BE5D240DC-3123-4D8D-8A59-CF1533D32C5B%7D&file=Executive%20Summary%20of%20Incidents%202025-12%20to%20Current%20Date.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      }
    ]
  },
  "pilot-briefing": {
    id: "pilot-briefing",
    name: "Pilot Briefing",
    breadcrumbTrail: [
      "Ground Stop Applications",
      "Pilot Briefing",
      "Application Impact Details"
    ],
    pageTitle: "Pilot Briefing - Application Impact Details",
    pageSubtitle:
      "Pilot Briefing generates and distributes pre-departure flight briefing packets for flight crews.",
    applicationsTabTitle: "Pilot Briefing (JetStream / Briefing Packets)",
    applicationsTabSubheading: "Applications & Systems (Pilot Briefing Components)",
    applicationsTabSubtitle:
      "Also called JetStream, Briefing Packets. JetPack is a separate pilot mobile app, not another name for it. Ground Stop, 24x7, critical to operations.",
    applicationsCardSubtitle:
      "This list shows the core Pilot Briefing components (JetStream UI / JetStream API, PilotBriefingWS, Weather API, and Performance file sync), their business functions, impact if down, direct dependencies, and ITS owners.",
    dependenciesTabTitle: "Pilot Briefing - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream systems sending data to Pilot Briefing, downstream consumers relying on Pilot Briefing data, and 2012 DNA farm/SDP/PingFederate/APIM/Informix/Print Server infrastructure.",
    status: "Active",
    lastUpdated: "Nov 05, 2026",
    subtitle:
      "Pilot Briefing. Also called JetStream, Briefing Packets. JetPack is a separate pilot mobile app, not another name for it · Criticality: Ground Stop. 24x7, critical to operations",
    company: "None; built in-house. Weather data comes from The Weather Company",
    website:
      "JetStream website: http://fogsweb.insideaag.com/jetstreamwebsite/jetstream.aspx. Airline Ops Portal: http://fogsweb.insideaag.com/fogswebportal/",
    category:
      "Flight Ops: briefing packets (flight paperwork). Printing them before takeoff is an FAA requirement",
    itsTeam: "ITS Flight Operations. Technical Owners: Ryan Wilkins, Adele Lunde",
    logo: "public/applications/pilot-briefing.png",
    impactSummary: {
      confirmed: 0,
      potential: 4,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title:
        "Criticality: Ground Stop - 24x7, critical to operations",
      message:
        "Pilot Briefing produces the FAA-required briefing packet for every flight. If a major part fails, the whole system goes down. If a minor part fails, packets come out incomplete or won't print. JetStream website: http://fogsweb.insideaag.com/jetstreamwebsite/jetstream.aspx. Airline Ops Portal: http://fogsweb.insideaag.com/fogswebportal/",
      description:
        "Pilot Briefing produces the FAA-required briefing packet for every flight. If a major part fails, the whole system goes down. If a minor part fails, packets come out incomplete or won't print.",
      updatedAgo: "Updated from Pilot_Briefing_System_Summary & Pilot_Briefing_Triage_Troubleshooting"
    },
    impactedSystems: [
      {
        id: "pb-jetstream-ui-api",
        name: "JetStream UI / JetStream API",
        subName: "(SDP Platform Pods in IGQ & TUK behind Azure Front Door)",
        appTabSubName: "(SDP Platform Pods in IGQ & TUK behind Azure Front Door)",
        description:
          "Web app on the SDP platform (pods in IGQ and TUK), behind Azure Front Door",
        appTabDescription:
          "Web app on the SDP platform (pods in IGQ and TUK), behind Azure Front Door",
        shortDescription:
          "Web app on the SDP platform (pods in IGQ and TUK), behind Azure Front Door",
        businessFunction: "Request and print packets",
        impact: "\"Jetstream is down,\" so no packets",
        impactIfDown: "\"Jetstream is down,\" so no packets",
        dependencies: "SDP backend pools, PilotBriefingWS, print servers",
        keyDependencies: "SDP backend pools, PilotBriefingWS, print servers",
        owner: "ITS COG Flight Ops",
        technicalOwner: "ITS COG Flight Ops",
        status: "Potential"
      },
      {
        id: "pb-pilotbriefingws",
        name: "PilotBriefingWS",
        subName: "(SEAV3DNA09-16 / TUKV3DNA09-16)",
        appTabSubName: "(SEAV3DNA09-16 / TUKV3DNA09-16)",
        description:
          "Web service on the DNA farm (SEAV3DNA09-16 / TUKV3DNA09-16)",
        appTabDescription:
          "Web service on the DNA farm (SEAV3DNA09-16 / TUKV3DNA09-16)",
        shortDescription:
          "Web service on the DNA farm (SEAV3DNA09-16 / TUKV3DNA09-16)",
        businessFunction: "Builds the packet",
        impact: "Packets fail or are slow",
        impactIfDown: "Packets fail or are slow",
        dependencies: "Informix, Weather API, performance files",
        keyDependencies: "Informix, Weather API, performance files",
        owner: "ITS COG Flight Ops",
        technicalOwner: "ITS COG Flight Ops",
        status: "Potential"
      },
      {
        id: "pb-weather-api",
        name: "Weather API",
        subName: "(Azure West US 2 / West Central US & DNA Farm)",
        appTabSubName: "(Azure West US 2 / West Central US & DNA Farm)",
        description:
          "Runs on Azure (West US 2 / West Central US) and the DNA farm",
        appTabDescription:
          "Runs on Azure (West US 2 / West Central US) and the DNA farm",
        shortDescription:
          "Runs on Azure (West US 2 / West Central US) and the DNA farm",
        businessFunction: "Weather sections of the packet",
        impact: "Weather missing from packets",
        impactIfDown: "Weather missing from packets",
        dependencies: "The Weather Company FlightFX API, APIM",
        keyDependencies: "The Weather Company FlightFX API, APIM",
        owner: "ITS COG Flight Ops",
        technicalOwner: "ITS COG Flight Ops",
        status: "Potential"
      },
      {
        id: "pb-performance-file-sync",
        name: "Performance file sync",
        subName: "(SEAVVDOCSYNC02 / TUKVVDOCSYNC02 & NetApp)",
        appTabSubName: "(SEAVVDOCSYNC02 / TUKVVDOCSYNC02 & NetApp)",
        description:
          "RSync on SEAVVDOCSYNC02 / TUKVVDOCSYNC02, then NetApp copies to the DMZ (a backup process)",
        appTabDescription:
          "RSync on SEAVVDOCSYNC02 / TUKVVDOCSYNC02, then NetApp copies to the DMZ (a backup process)",
        shortDescription:
          "RSync on SEAVVDOCSYNC02 / TUKVVDOCSYNC02, then NetApp copies to the DMZ (a backup process)",
        businessFunction: "QX and Airbus takeoff performance reports",
        impact: "Performance pages missing",
        impactIfDown: "Performance pages missing",
        dependencies: "FltopsFS file share, NetApp",
        keyDependencies: "FltopsFS file share, NetApp",
        owner: "Compute & Platforms",
        technicalOwner: "Compute & Platforms",
        status: "Potential"
      }
    ],
    upstreamDependencies: [
      "WAM: only released flights can be briefed",
      "Weather API / The Weather Company",
      "Aircraft performance data",
      "Informix (fltops)",
      "Aircraft Maintenance Service (deferred maintenance items). Moving this connection to API Management (APIM) under CHG00001023 was rolled back on 11/3"
    ],
    downstreamConsumers: [
      "Pilots and Dispatch (AS and QX), station laser printers",
      "JetPack, which pilots use as the backup way to get the packet"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Upstream feeds (WAM released flights, Weather API / The Weather Company, Aircraft performance data, Informix fltops, and Aircraft Maintenance Service) flowing into Pilot Briefing (JetStream) to deliver FAA-required briefing packets to AS/QX Pilots, Dispatch, station laser printers, and JetPack.",
      diagramUpstream: [
        {
          id: "pb-up-1",
          name: "WAM (Flight Releases)",
          subtitle: "Only released flights can be briefed",
          iconType: "transfer"
        },
        {
          id: "pb-up-2",
          name: "Weather API / The Weather Company",
          subtitle: "FlightFX API & APIM",
          iconType: "network"
        },
        {
          id: "pb-up-3",
          name: "Aircraft Performance & Informix (fltops)",
          subtitle: "FltopsFS file share & fltops DB",
          iconType: "database"
        },
        {
          id: "pb-up-4",
          name: "Aircraft Maintenance Service",
          subtitle: "Deferred maintenance items",
          iconType: "doc"
        }
      ],
      diagramServices: [
        "JetStream UI / JetStream API (SDP IGQ/TUK)",
        "PilotBriefingWS (2012 DNA Farm)",
        "Weather API (Azure & DNA Farm)",
        "Performance File Sync (RSync & NetApp)"
      ],
      diagramDownstream: [
        {
          id: "pb-down-1",
          name: "Pilots & Dispatch (AS and QX)",
          subtitle: "FAA-required pre-flight briefing packets",
          iconType: "team"
        },
        {
          id: "pb-down-2",
          name: "Station Laser Printers",
          subtitle: "Print servers & NT print queues",
          iconType: "doc"
        },
        {
          id: "pb-down-3",
          name: "JetPack (Pilot Mobile App)",
          subtitle: "Backup way to get the briefing packet",
          iconType: "nodes"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 5, tone: "red" },
        { label: "Downstream Consumers", count: 2, tone: "green" },
        { label: "Pilot Briefing Components", count: 4, tone: "blue" },
        { label: "Infrastructure Components", count: 6, tone: "purple" }
      ],
      keyTakeaways: [
        "Pilot Briefing produces the FAA-required briefing packet for every flight. If a major part fails, the whole system goes down. If a minor part fails, packets come out incomplete or won't print."
      ],
      upstreamTable: [
        {
          id: "pb-upt-1",
          name: "WAM: only released flights can be briefed",
          description: "Flight releases from WAM required before a flight can be briefed in JetStream.",
          type: "Internal / Flight Ops",
          impact: "Unreleased flights cannot generate briefing packets."
        },
        {
          id: "pb-upt-2",
          name: "Weather API / The Weather Company",
          description: "Weather sections of the briefing packet fetched from The Weather Company FlightFX API via APIM.",
          type: "External / Weather Vendor",
          impact: "Weather is missing from packets; Dispatch must follow manual release procedures."
        },
        {
          id: "pb-upt-3",
          name: "Aircraft performance data",
          description: "QX and Airbus takeoff performance reports synced via RSync and NetApp from FltopsFS.",
          type: "Internal / File Sync",
          impact: "Performance pages missing from briefing packets."
        },
        {
          id: "pb-upt-4",
          name: "Informix (fltops)",
          description: "Flight operations Informix database accessed via Informix ODBC drivers.",
          type: "Internal / Database",
          impact: "PilotBriefingWS cannot build packets without Informix flight data."
        },
        {
          id: "pb-upt-5",
          name: "Aircraft Maintenance Service (deferred maintenance items). Moving this connection to API Management (APIM) under CHG00001023 was rolled back on 11/3",
          description: "Provides deferred maintenance items (MEL/CDL) for the briefing packet.",
          type: "Internal / Maintenance",
          impact: "Errors in the Pilot Briefing API or missing deferred maintenance items (e.g., CHG00001023 on 11/3/2026)."
        }
      ],
      downstreamTable: [
        {
          id: "pb-dwt-1",
          name: "Pilots and Dispatch (AS and QX), station laser printers",
          description: "AS and QX pilots, dispatchers, and station laser printers printing FAA-required flight paperwork before takeoff.",
          type: "Internal Teams & Stations",
          impact: "No packets can be printed, and the airline stops flying within about an hour."
        },
        {
          id: "pb-dwt-2",
          name: "JetPack, which pilots use as the backup way to get the packet",
          description: "Separate pilot mobile iPad app used by Dispatch and pilots as the backup way to receive the briefing packet.",
          type: "Internal / Mobile App",
          impact: "Dispatch sends the packet through JetPack when JetStream printing is unavailable."
        }
      ],
      infrastructureTable: [
        {
          id: "pb-inf-1",
          component: "2012 DNA farm",
          description: "SEAV3DNA09-16 / TUKV3DNA09-16",
          owner: "ITS COG Flight Ops / Compute & Platforms",
          impact: "Hosts PilotBriefingWS and Weather API; reset IIS here if packets are slow or failing."
        },
        {
          id: "pb-inf-2",
          component: "SDP on-premises clusters",
          description:
            "SDP on-premises clusters (IGQ / TUK), checked through ArgoCD, behind Azure Front Door",
          owner: "SDP / Automation Platforms",
          impact: "Hosts JetStream UI and JetStream API pods."
        },
        {
          id: "pb-inf-3",
          component: "Login, API & Database Drivers",
          description:
            "PingFederate (login), Azure APIM (Weather API calls), Informix ODBC drivers, FltopsFS file share",
          owner: "ITS Identity / Middleware API / Flight Ops",
          impact: "Supports authentication, Weather API gateway routing, Informix connectivity, and performance file storage."
        },
        {
          id: "pb-inf-4",
          component: "Print servers and the NT print queues",
          description: "Print servers and the NT print queues",
          owner: "Field Services / Compute & Platforms",
          impact: "Required for printing briefing packets at station laser printers."
        },
        {
          id: "pb-inf-5",
          component: "Monitoring",
          description: "Application Insights (jetstreamui-prod / JetstreamApi)",
          owner: "ITS COG Flight Ops",
          impact: "Tracks dependency call duration and exceptions for JetStream UI and API."
        },
        {
          id: "pb-inf-6",
          component: "Firewall / network rules",
          description:
            "Not verified (documented paths: SDP pods to printer servers, PilotBriefingWS on DNA farm, RSync fltopsfs to seavvpilotbrief, NetApp replication to DMZ share seav3pilotbrief; exact firewall rules, ports, and VIPs not verified)",
          owner: "ITS Network",
          impact:
            "Network connectivity between SDP pods, DNA farm, print servers, Informix, and DMZ shares (exact firewall rules: Not verified)"
        }
      ]
    },
    typicalBusinessImpact: [
      "No packets can be printed, and the airline stops flying within about an hour",
      "Weather is missing from packets. In MI-6584 (9/28/2026), a weather vendor outage led to manual releases and Horizon (QX) delays",
      "Errors in the Pilot Briefing API. These were linked to CHG00001023 on 11/3/2026"
    ],
    knownWorkarounds: [
      "Dispatch sends the packet through JetPack",
      "Use the JetStream backup site, which is linked from the error message (exact standalone backup URL: Not verified)",
      "When weather is down, Dispatch follows manual release procedures"
    ],
    validationChecklist: [
      "Confirm scope: one user, one flight, multiple flights, or all stations.",
      "Open the Airline Ops Portal to confirm whether the site is down.",
      "Check the SDP backend pools on the Front Door dashboard. If they're down, contact the SDP / Automation Platforms team.",
      "Check the JetStream pods in ArgoCD for IGQ and TUK. Healthy pods show a green heart; broken pods show a broken heart and need the SDP team.",
      "Weather missing: check weather alerts, reset IIS on the 2012 DNA farm, and restart the Weather API one region at a time.",
      "Slow or failing packets: check Application Insights (dependency call duration) and reset IIS on SEAV3DNA09-16 / TUKV3DNA09-16.",
      "If Azure or APIM has problems, engage Middleware API on-call.",
      "Printing fails at every station: check the NT print queue and the print server, and engage Field Services.",
      "Check changes made in the last 24 hours. CHG00001023 is an example.",
      "If the problem continues, page the ITS COG Flight Operations on-call: Sev 2 if multiple users or delays, Sev 3 for a single user."
    ],
    vendorContacts: {
      companyNote:
        "None; built in-house. Weather data comes from The Weather Company",
      categoryNote:
        "Application Name: Pilot Briefing. Also called JetStream, Briefing Packets. JetPack is a separate pilot mobile app, not another name for it • Criticality: Ground Stop. 24x7, critical to operations • URL: JetStream website: http://fogsweb.insideaag.com/jetstreamwebsite/jetstream.aspx. Airline Ops Portal: http://fogsweb.insideaag.com/fogswebportal/",
      supportEmail: "PilotBrief@weather.com",
      supportEmailNote:
        "Not applicable (built in-house). Troubleshooting contact in triage screenshots: ITS.Service.Desk@alaskaair.com (Service Desk label; official ITS COG Flight Operations mailbox: Not verified). Weather vendor: PilotBrief@weather.com",
      supportPhone:
        "Not applicable (built in-house). Weather vendor: 1-800-872-2359 (option 3) / PilotBrief@weather.com",
      technicalSupport:
        "The Weather Company (weather only): 1-800-872-2359 (option 3) or 1-800-USA-2FLY (option 3) / PilotBrief@weather.com. They rate all stations affected as Sev 1, and some stations as Sev 2",
      accountManager:
        "Not verified (Weather_System_Summary.docx lists Tom Bulluck, Customer Support Manager, +1 603-459-4027, and Elizabeth Reti, North America Sales, +1 978-409-8335 / Elizabeth.reti@weather.com)",
      namedEscalationContact:
        "The Weather Company (weather only): 1-800-872-2359 (option 3) or 1-800-USA-2FLY (option 3)",
      supportHours: "24x7",
      escalation:
        "Vendor Contacts:\n• The Weather Company (weather only): 1-800-872-2359 (option 3) or 1-800-USA-2FLY (option 3) / PilotBrief@weather.com. They rate all stations affected as Sev 1, and some stations as Sev 2\n• Account Manager: Not verified (Weather_System_Summary.docx lists Tom Bulluck, Customer Support Manager, +1 603-459-4027, and Elizabeth Reti, North America Sales, +1 978-409-8335 / Elizabeth.reti@weather.com)\n\nCommunication Guidelines:\n• When escalating, give: server name, error message, airline, flight number, origin, and the station printer name.\n• Share flight details only through approved channels.",
      communicationGuidelines: [
        "When escalating, give: server name, error message, airline, flight number, origin, and the station printer name.",
        "Share flight details only through approved channels."
      ],
      responseSlas: [
        {
          label: "Sev 2 / Sev 3",
          priority: "Sev 2 / Sev 3",
          level: "Operational Severity Criteria",
          description:
            "Sev 2: multiple users or flights, or a single user when it could cause a delay. Sev 3: single user and single flight",
          target: "Sev 2: multiple users/flights or delay risk | Sev 3: single user/flight",
          value:
            "Sev 2: multiple users or flights, or a single user when it could cause a delay. Sev 3: single user and single flight"
        },
        {
          label: "Initial response and update cadence",
          priority: "Initial response and update cadence",
          level: "Response & Update Cadence",
          description:
            "Not verified (PilotBriefingWs-Runbook.docx lists P1 updates every 15-30 minutes, but explicitly states the runbook is not approved for operational use; numerical Sev 1/Sev 2 response targets and approved Sev 1 trigger wording: Not verified)",
          target:
            "Not verified (runbook P1 15-30 min not approved for operational use)",
          value:
            "Not verified (PilotBriefingWs-Runbook.docx lists P1 updates every 15-30 minutes, but explicitly states the runbook is not approved for operational use; numerical Sev 1/Sev 2 response targets and approved Sev 1 trigger wording: Not verified)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS Flight Operations. Technical Owners: Ryan Wilkins, Adele Lunde",
      itsTeamNote:
        "On-Call: ITS COG Flight Operations • Troubleshooting contact in triage screenshots: ITS.Service.Desk@alaskaair.com (official Flight Ops mailbox: Not verified) • Dispatch Admins (weather setup): Leo Blanco (AS); Mike Timpe and Ken McNaught (QX)",
      applicationOwner:
        "ITS System Owner: Ben Shocki, 425-273-1560 (8-5) • Technical Owners: Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified)",
      onCallSupport: "ITS COG Flight Operations",
      systemAdministration:
        "Dispatch Admins (weather setup): Leo Blanco (AS); Mike Timpe and Ken McNaught (QX)",
      businessOwner:
        "QX Business Owner and AS/QX Everbridge Focal: Mike Timpe, 206-574-4789 / 503-702-3463 • AS Dispatch Admin: Leo Blanco (separate AS Business Owner: Not verified)",
      passwordSupport: "Service Desk: 1-877-238-1077",
      everbridgeContacts:
        "QX Business Owner and AS/QX Everbridge Focal: Mike Timpe, 206-574-4789 / 503-702-3463 • On-Call: ITS COG Flight Operations"
    },
    incidentHistory: [
      {
        id: "CHG00001023 (2026-11-03)",
        date: "2026-11-03",
        duration: "Documented Change Rollback",
        severity: "Sev 2",
        title: "Errors in the Pilot Briefing API linked to CHG00001023",
        rootCause:
          "Errors in the Pilot Briefing API. Moving the Aircraft Maintenance Service connection to API Management (APIM) under CHG00001023 was rolled back on 11/3/2026.",
        resolution: "Rolled back CHG00001023."
      },
      {
        id: "MI-6584 (2026-09-28)",
        date: "2026-09-28",
        duration: "Documented Major Incident",
        severity: "Sev 1 / Sev 2",
        title: "Weather missing from packets due to weather vendor outage",
        rootCause:
          "In MI-6584 (9/28/2026), a weather vendor outage led to manual releases and Horizon (QX) delays.",
        resolution: "Dispatch followed manual release procedures until weather feed recovered."
      }
    ],
    relatedDocuments: [
      {
        title: "Pilot_Briefing_System_Summary.docx",
        type: "Primary Source - Pilot Briefing System Summary (Word)",
        owner: "ITS Flight Operations",
        updated: "2026-03-13",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BDAE86A82-3686-4EDC-B183-D4610277171A%7D&file=Pilot_Briefing_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Pilot_Briefing_Triage_Troubleshooting.docx",
        type: "Primary Source - Pilot Briefing Triage & Troubleshooting (Word)",
        owner: "ITS COG Flight Operations",
        updated: "2026-06-14",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B699672D5-202A-45C7-80BA-8D3D594EC933%7D&file=Pilot_Briefing_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Pilot Briefing System Summary.docx",
        type: "Primary Source - Pilot Briefing System Summary (Word)",
        owner: "ITS Flight Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B671CAD64-BBBC-4976-8008-03C32CE00CCE%7D&file=Pilot%20Briefing%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "PilotBriefingWs-Runbook.docx",
        type: "Primary Source - PilotBriefingWS Runbook (Word - NOT approved for operational use)",
        owner: "ITS COG Flight Operations",
        updated: "2026-10-27",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B1B20CE94-B68F-49AE-A7BC-E9ED87CE6B8E%7D&file=PilotBriefingWs-Runbook.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Weather_Triage_Troubleshooting.docx",
        type: "Additional Source - Weather Triage & Troubleshooting (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BAABAD684-DD04-4A4A-9067-24491C1CE7CD%7D&file=Weather_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Weather_System_Summary.docx",
        type: "Additional Source - Weather System Summary (Word)",
        owner: "ITS COG Flight Operations",
        updated: "2026-10-12",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B3DCD1721-BA2E-4F47-838A-3C37820DC927%7D&file=Weather_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Flight Planning System Summary.docx",
        type: "Additional Source - Flight Planning System Summary (Word)",
        owner: "ITS Knowledge Management",
        updated: "2026-10-06",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B699F4E53-05D1-46F7-BC0B-DDE61D08A91E%7D&file=Flight%20Planning%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "SOP Review and Closure Tracker - 2026.xlsx",
        type: "Additional Source - SOP Review and Closure Tracker 2026 (Excel)",
        owner: "ITS Production Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7B1EA397F2-0B72-4BC6-A585-26131B554F44%7D&file=SOP%20Review%20and%20Closure%20Tracker%20-%202026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      }
    ]
  },
  "aircraft-maintenance": {
    id: "aircraft-maintenance",
    name: "Aircraft Maintenance Status (AMS)",
    breadcrumbTrail: [
      "Ground Stop Applications",
      "Aircraft Maintenance Status (AMS)",
      "Application Impact Details"
    ],
    pageTitle: "Aircraft Maintenance Status (AMS) - Application Impact Details",
    pageSubtitle:
      "AMS tracks out-of-service aircraft maintenance events and distributes status updates to operational systems.",
    applicationsTabTitle: "Aircraft Maintenance Status (AMS / ME Portal / Out of Service Recovery / OTS Recovery)",
    applicationsTabSubheading: "Applications & Systems (AMS Components)",
    applicationsTabSubtitle:
      "Also called ME Portal, Out of Service Recovery, OTS Recovery. On the Ground Stop list in the SOP tracker (the system summary rates it Sev 2). Tracks aircraft from removal from service to return to service.",
    applicationsCardSubtitle:
      "This list shows the core AMS components (AMS / ME Portal UI, AMS APIs, Out-of-service functions, and MtxEventPublisherSvc), their business functions, impact if down, direct dependencies, and ITS owner.",
    dependenciesTabTitle: "Aircraft Maintenance Status (AMS) - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream systems sending data to AMS, downstream consumers relying on AMS data, and Informix/Azure Cosmos DB/IBM MQ/Service Bus/Twilio/ArgoCD infrastructure.",
    status: "Active",
    lastUpdated: "Nov 05, 2026",
    subtitle:
      "Aircraft Maintenance Status (AMS). Also called ME Portal, Out of Service Recovery, OTS Recovery · Criticality: On the Ground Stop list in the SOP tracker (not listed in Ground Stop Applications List.docx 2026-08-18). The system summary rates it Sev 2 · 24x7",
    company:
      "None; built in-house. Uses Twilio for its chat and timeline features",
    website: "https://me-meportal.alaskaair.com/",
    category:
      "Maintenance & Engineering: tracks aircraft from removal from service to return to service",
    itsTeam: "ITS COG M&E App Support. ITS System Owner: Jerred Slavata",
    logo: "public/applications/aircraft-maintenance.png",
    impactSummary: {
      confirmed: 0,
      potential: 4,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title:
        "Criticality: On the Ground Stop list in the SOP tracker (not listed in Ground Stop Applications List.docx 2026-08-18). The system summary rates it Sev 2 - 24x7",
      message:
        "AMS is the system of record for which aircraft are out of service. When AMS and Informix fall out of sync, other systems show the wrong OTS status, including AirTrak. URL: https://me-meportal.alaskaair.com/",
      description:
        "AMS is the system of record for which aircraft are out of service. When AMS and Informix fall out of sync, other systems show the wrong OTS status, including AirTrak.",
      updatedAgo: "Updated from MEPortal_System_Summary, ME PortalAircraft Maintenance Status Application System Summary & MEPortal_Triage_Troubleshooting"
    },
    impactedSystems: [
      {
        id: "ams-me-portal-ui",
        name: "AMS / ME Portal UI",
        subName: "(Browser App on SDP - Azure & On-Premises)",
        appTabSubName: "(Browser App on SDP - Azure & On-Premises)",
        description: "Browser app on SDP (Azure and on-premises)",
        appTabDescription: "Browser app on SDP (Azure and on-premises)",
        shortDescription: "Browser app on SDP (Azure and on-premises)",
        businessFunction:
          "Out-of-service (OTS) event dashboard for Maintenance Control",
        impact: "Maintenance controllers can't manage OTS aircraft",
        impactIfDown: "Maintenance controllers can't manage OTS aircraft",
        dependencies: "PingFederate login, AD groups",
        keyDependencies: "PingFederate login, AD groups",
        owner: "ITS COG M&E App Support",
        technicalOwner: "ITS COG M&E App Support",
        status: "Potential"
      },
      {
        id: "ams-apis",
        name: "AMS APIs (OutOfServiceRecovery, AircraftMaintenanceStatus, ShiftNotes, MEPortal, MEConversation)",
        subName: "(Backend Services)",
        appTabSubName: "(Backend Services)",
        description: "Backend services",
        appTabDescription: "Backend services",
        shortDescription: "Backend services",
        businessFunction: "Events, shift notes, chat",
        impact: "Events don't save or display",
        impactIfDown: "Events don't save or display",
        dependencies: "Cosmos DB, Twilio, DAP",
        keyDependencies: "Cosmos DB, Twilio, DAP",
        owner: "ITS COG M&E App Support",
        technicalOwner: "ITS COG M&E App Support",
        status: "Potential"
      },
      {
        id: "ams-oos-functions",
        name: "Out-of-service functions (Events, Cache, Flight Events, Sync Status, SyncCompare)",
        subName: "(Azure Functions)",
        appTabSubName: "(Azure Functions)",
        description: "Azure Functions",
        appTabDescription: "Azure Functions",
        shortDescription: "Azure Functions",
        businessFunction: "Keep AMS in sync with Informix",
        impact: "\"Some Data is Out of Synch\" banner",
        impactIfDown: "\"Some Data is Out of Synch\" banner",
        dependencies: "Informix OUTSERV table, Service Bus",
        keyDependencies: "Informix OUTSERV table, Service Bus",
        owner: "ITS COG M&E App Support",
        technicalOwner: "ITS COG M&E App Support",
        status: "Potential"
      },
      {
        id: "ams-mtxeventpublishersvc",
        name: "MtxEventPublisherSvc (OTS)",
        subName: "(MQ ME.AIRCRAFT.EVENTS Publisher)",
        appTabSubName: "(MQ ME.AIRCRAFT.EVENTS Publisher)",
        description: "Sends OTS events out over MQ",
        appTabDescription: "Sends OTS events out over MQ",
        shortDescription: "Sends OTS events out over MQ",
        businessFunction: "OTS status shown in AirTrak",
        impact: "Stale OTS status in AirTrak",
        impactIfDown: "Stale OTS status in AirTrak",
        dependencies: "fltops Informix, MQ ME.AIRCRAFT.EVENTS",
        keyDependencies: "fltops Informix, MQ ME.AIRCRAFT.EVENTS",
        owner: "ITS COG M&E App Support",
        technicalOwner: "ITS COG M&E App Support",
        status: "Potential"
      }
    ],
    upstreamDependencies: [
      "DAP APIs (aircraft flight schedule)",
      "ITS Enterprise Service Bus (OUT/OFF/ON/IN times, diversions, ETA/ETD)",
      "Maintenance controllers' event entries"
    ],
    downstreamConsumers: [
      "Informix OUTSERV table / VisOps",
      "AirTrak, through MtxEventPublisherSvc",
      "SOC/NOC, Dispatch, Maintenance Operations Managers (MOMs)"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Upstream feeds (DAP APIs aircraft flight schedule, ITS Enterprise Service Bus OUT/OFF/ON/IN times/diversions/ETA/ETD, and Maintenance controllers' event entries) flowing into AMS to update Informix OUTSERV / VisOps, AirTrak (via MtxEventPublisherSvc), and SOC/NOC, Dispatch, and MOMs.",
      diagramUpstream: [
        {
          id: "ams-up-1",
          name: "DAP APIs",
          subtitle: "Aircraft flight schedule",
          iconType: "network"
        },
        {
          id: "ams-up-2",
          name: "ITS Enterprise Service Bus",
          subtitle: "OUT/OFF/ON/IN times, diversions, ETA/ETD",
          iconType: "transfer"
        },
        {
          id: "ams-up-3",
          name: "Maintenance Controllers",
          subtitle: "OTS event entries & shift notes",
          iconType: "doc"
        }
      ],
      diagramServices: [
        "AMS / ME Portal UI (SDP)",
        "AMS APIs (OutOfServiceRecovery, MEPortal, MEConversation)",
        "Out-of-Service Azure Functions (SyncCompare)",
        "MtxEventPublisherSvc (OTS over MQ)"
      ],
      diagramDownstream: [
        {
          id: "ams-down-1",
          name: "Informix OUTSERV Table / VisOps",
          subtitle: "fltops.alaskaair.com (fltops & maint)",
          iconType: "database"
        },
        {
          id: "ams-down-2",
          name: "AirTrak",
          subtitle: "Through MtxEventPublisherSvc & MQ",
          iconType: "nodes"
        },
        {
          id: "ams-down-3",
          name: "SOC/NOC, Dispatch & MOMs",
          subtitle: "Maintenance Operations Managers & Control",
          iconType: "team"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 3, tone: "red" },
        { label: "Downstream Consumers", count: 3, tone: "green" },
        { label: "AMS Components", count: 4, tone: "blue" },
        { label: "Infrastructure Components", count: 6, tone: "purple" }
      ],
      keyTakeaways: [
        "AMS is the system of record for which aircraft are out of service. When AMS and Informix fall out of sync, other systems show the wrong OTS status, including AirTrak."
      ],
      upstreamTable: [
        {
          id: "ams-upt-1",
          name: "DAP APIs (aircraft flight schedule)",
          description: "Provides aircraft lists and flight schedules to AMS / ME Portal.",
          type: "Internal / API",
          impact: "Aircraft lists or schedules don't load (DAP calls fail)."
        },
        {
          id: "ams-upt-2",
          name: "ITS Enterprise Service Bus (OUT/OFF/ON/IN times, diversions, ETA/ETD)",
          description: "Delivers real-time flight movement times, diversions, and ETA/ETD updates.",
          type: "Internal / Service Bus",
          impact: "Flight event updates do not flow into AMS."
        },
        {
          id: "ams-upt-3",
          name: "Maintenance controllers' event entries",
          description: "Out-of-service (OTS) events, shift notes, and recovery updates entered by Maintenance Control.",
          type: "Internal Operations",
          impact: "OTS events cannot be created or updated if UI or APIs are down."
        }
      ],
      downstreamTable: [
        {
          id: "ams-dwt-1",
          name: "Informix OUTSERV table / VisOps",
          description: "Synchronizes out-of-service aircraft records with the Informix OUTSERV table and VisOps.",
          type: "Internal / Database",
          impact: "\"Some Data is Out of Synch\" banner when AMS and Informix fall out of sync."
        },
        {
          id: "ams-dwt-2",
          name: "AirTrak, through MtxEventPublisherSvc",
          description: "Publishes OTS events via MQ (ME.AIRCRAFT.EVENTS) through MtxEventPublisherSvc to AirTrak.",
          type: "Internal / Flight Ops",
          impact: "\"Aircraft missing in OTS,\" or stale OTS status in AirTrak."
        },
        {
          id: "ams-dwt-3",
          name: "SOC/NOC, Dispatch, Maintenance Operations Managers (MOMs)",
          description: "Operational teams tracking aircraft removal from service and return to service.",
          type: "Internal Teams",
          impact: "Maintenance Control must use business continuity documents; AirTrak users check FOGS Out of Service."
        }
      ],
      infrastructureTable: [
        {
          id: "ams-inf-1",
          component: "Informix",
          description: "fltops.alaskaair.com (databases fltops and maint)",
          owner: "Informix DBA on-call (XTIVIA) / ITS COG M&E App Support",
          impact: "Stores the Informix OUTSERV table; locked records or DB outage stop sync."
        },
        {
          id: "ams-inf-2",
          component: "Azure Cosmos DB",
          description:
            "outofservicerecoveryDB (containers OutOfSync, SyncCompareResponse)",
          owner: "ITS COG M&E App Support",
          impact: "Stores AMS events and SyncCompareResponse (AircraftToAdd, AircraftToClose, AircraftToUpdate)."
        },
        {
          id: "ams-inf-3",
          component: "IBM MQ",
          description:
            "wmq1as.alaskaair.com:1425, queue manager QMMFP, queue ME.AIRCRAFT.EVENTS",
          owner: "ITS Middleware / ITS COG M&E App Support",
          impact: "Carries OTS events from MtxEventPublisherSvc to AirTrak."
        },
        {
          id: "ams-inf-4",
          component: "M&E Service Bus, Azure App Configuration, Twilio, ArgoCD",
          description:
            "M&E Service Bus, Azure App Configuration, Twilio, ArgoCD",
          owner: "ITS COG M&E App Support",
          impact: "Supports event messaging, app config, Twilio chat/timeline features, and SDP pod deployment."
        },
        {
          id: "ams-inf-5",
          component: "Monitoring",
          description:
            "Application Insights (outofservicesynccompareevents-prod-westus2, outofserviceevents-prod-westus2)",
          owner: "ITS COG M&E App Support",
          impact: "Monitors exceptions in the out-of-service sync functions."
        },
        {
          id: "ams-inf-6",
          component: "Firewall / network rules",
          description:
            "Not verified (verified dependency categories: Twilio, DAP APIs, Informix OUTSERV sync, enterprise flight-event Service Bus, M&E Service Bus, Azure configuration services, Azure/on-premises SDP; exact approved firewall rules and ports not verified)",
          owner: "ITS Network",
          impact:
            "Network connectivity between SDP pods, Azure Functions, Cosmos DB, Informix, and IBM MQ (exact firewall rules: Not verified)"
        }
      ]
    },
    typicalBusinessImpact: [
      "Maintenance controllers can't create or update OTS events",
      "\"Aircraft missing in OTS,\" or stale OTS status in AirTrak",
      "Aircraft lists or schedules don't load (DAP calls fail)"
    ],
    knownWorkarounds: [
      "Maintenance Control uses the business continuity documents to manage the OTS list for several hours",
      "AirTrak users check OTS status in FOGS Out of Service",
      "Use Finder or WebFinder, or contact an Mx Router or the M&E team"
    ],
    validationChecklist: [
      "Confirm scope: one tail number, multiple tails, or the whole app. A single mismatch is a local sync problem, not an outage; check with SOC/MOM first.",
      "Page not loading: clear cookies. If it still fails, assign to M&E support (Sev 2).",
      "Check that Informix (fltops.alaskaair.com) is up. If it isn't, call the Informix DBA on-call (XTIVIA).",
      "Out-of-sync banner: check Cosmos DB SyncCompareResponse (AircraftToAdd, AircraftToClose, AircraftToUpdate) and the Informix OUTSERV table.",
      "Check for locked records in Informix. Engage the DBA to release the locks.",
      "Check Application Insights for exceptions in the sync functions.",
      "AirTrak OTS stale: look for the \"MtxEventPublisherService for OTS Prod failed\" alert, check the pod in ArgoCD, and check the MQ connection. Open a Sev 2 and engage the M&E on-call."
    ],
    vendorContacts: {
      companyNote:
        "None; built in-house. Uses Twilio for its chat and timeline features",
      categoryNote:
        "Application Name: Aircraft Maintenance Status (AMS). Also called ME Portal, Out of Service Recovery, OTS Recovery • Criticality: On the Ground Stop list in the SOP tracker (not listed in Ground Stop Applications List.docx 2026-08-18). The system summary rates it Sev 2 • URL: https://me-meportal.alaskaair.com/",
      supportEmail: "Not applicable (built in-house)",
      supportEmailNote:
        "Built in-house - Primary ITS Team Owner: ITS COG M&E App Support",
      supportPhone: "Not applicable (built in-house)",
      technicalSupport:
        "Not applicable (built in-house). Uses Twilio for its chat and timeline features",
      accountManager: "Not applicable (built in-house)",
      namedEscalationContact:
        "On-Call: ITS COG M&E App Support. Escalate to the product team (Griffin)",
      supportHours: "ITS COG M&E APP Support: 24x7",
      escalation:
        "Vendor Contacts:\n• Not applicable (built in-house)\n\nCommunication Guidelines:\n• Service Desk does not change AD groups or AMS permissions. Send access requests to the business.\n• Include the time and aircraft details in tickets.\n• M&E support shares out-of-sync findings with Maintenance Controllers and MOMs.",
      communicationGuidelines: [
        "Service Desk does not change AD groups or AMS permissions. Send access requests to the business.",
        "Include the time and aircraft details in tickets.",
        "M&E support shares out-of-sync findings with Maintenance Controllers and MOMs."
      ],
      responseSlas: [
        {
          label: "System Rating",
          priority: "System Rating",
          level: "Sev 2 System (On Ground Stop list in SOP tracker)",
          description: "Sev 2 system",
          target: "Sev 2 system",
          value: "Sev 2 system"
        },
        {
          label: "MtxEventPublisher OTS alert",
          priority: "MtxEventPublisher OTS alert",
          level: "OTS Event Feed Alert",
          description:
            "MtxEventPublisher OTS alert: open a Sev 2, with resolution expected within 1 hour",
          target: "Open a Sev 2, resolution expected within 1 hour",
          value:
            "open a Sev 2, with resolution expected within 1 hour"
        },
        {
          label: "Update cadence",
          priority: "Update cadence",
          level: "Incident Updates",
          description:
            "Not verified (24x7 system administration and 1-hour MtxEventPublisher OTS Sev 2 resolution target documented; numerical incident-response targets and bridge update cadence not verified)",
          target: "Not verified",
          value:
            "Not verified (24x7 system administration and 1-hour MtxEventPublisher OTS Sev 2 resolution target documented; numerical incident-response targets and bridge update cadence not verified)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS COG M&E App Support. ITS System Owner: Jerred Slavata",
      itsTeamNote:
        "On-Call: ITS COG M&E App Support (24x7). Escalate to the product team (Griffin)",
      applicationOwner:
        "ITS System Owner: Jerred Slavata (Jerred.Slavata@alaskaair.com; phone: Not verified) • Card POC: Brad Dufour (Bradley.Dufour@alaskaair.com, +1 614-779-1493, Manager, Software Engineering; AMS ownership/support role: Not verified)",
      onCallSupport:
        "On-Call: ITS COG M&E App Support (24x7). Escalate to the product team (Griffin)",
      systemAdministration:
        "System Administration: ITS COG M&E APP Support (24x7) • Ownership discrepancy across sources: MEPortal_System_Summary.docx (2026-09-21) names Tim Lyons (AS) and Shawn Warnat (QX) as primary business owners; ME PortalAircraft Maintenance Status Application System Summary.docx names Catherine Harris as Business Owner and System Admin (direct phones/emails: Not verified). The MOM on duty grants permissions",
      businessOwner:
        "Discrepancy across summaries: Tim Lyons (AS) and Shawn Warnat (QX) in MEPortal_System_Summary.docx (2026-09-21) vs Catherine Harris (Business Owner and System Admin) in ME PortalAircraft Maintenance Status Application System Summary.docx (direct phones/emails: Not verified)",
      passwordSupport: "Service Desk: 877-238-1077",
      everbridgeContacts:
        "On-Call: ITS COG M&E App Support • Product Team Escalation: Griffin • Informix DBA on-call: XTIVIA"
    },
    incidentHistory: [],
    relatedDocuments: [
      {
        title: "MEPortal_System_Summary.docx",
        type: "Primary Source - ME Portal System Summary (Word)",
        owner: "ITS COG M&E App Support",
        updated: "2026-09-21",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B44B63477-F8EC-4824-A18F-8380101232B1%7D&file=MEPortal_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ME PortalAircraft Maintenance Status Application System Summary.docx",
        type: "Primary Source - ME Portal / AMS System Summary (Word)",
        owner: "ITS COG M&E App Support",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BC01723FC-4C5B-4F8A-9BA7-0831B4B95C5D%7D&file=ME%20PortalAircraft%20Maintenance%20Status%20Application%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "MEPortal_Triage_Troubleshooting.docx",
        type: "Primary Source - ME Portal / AMS Triage & Troubleshooting (Word)",
        owner: "ITS COG M&E App Support",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BD2E06F58-AA7D-427D-ABF7-1F2489B16647%7D&file=MEPortal_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "MtxEventPublisherSvc_OTS_Triage_Troubleshooting 1.docx",
        type: "Primary Source - MtxEventPublisherSvc OTS Triage & Troubleshooting (Word)",
        owner: "ITS COG M&E App Support",
        updated: "Not verified",
        url: "https://alaskaair-my.sharepoint.com/personal/shilpa_banerjee1_alaskaair_com/_layouts/15/Doc.aspx?sourcedoc=%7B3DB72E09-6B4F-4B17-AB69-A322BD42A72C%7D&file=MtxEventPublisherSvc_OTS_Triage_Troubleshooting%201.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Out of Service System Summary.docx",
        type: "Primary Source - Out of Service System Summary (Word)",
        owner: "ITS COG M&E App Support",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B1FDFC16C-EAF9-454F-AEBB-4FF662615457%7D&file=Out%20of%20Service%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Aircraft-Maintenance-Status-(AMS).aspx",
        type: "Additional Source - TechOpsDX AMS SharePoint Page",
        owner: "TechOpsDX",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/TechOpsDX/SitePages/Aircraft-Maintenance-Status-(AMS).aspx?web=1"
      },
      {
        title: "AirtrAK-QRG.pdf",
        type: "Additional Source - AirTrAK Quick Reference Guide (PDF)",
        owner: "OPS360 Users",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/OPS360Users/Shared%20Documents/General/AirtrAK%20Support%20Guides/AirtrAK-QRG.pdf?web=1"
      },
      {
        title: "Service-Offering-Application-Metadata mapping 10-12-2026.xlsx",
        type: "Additional Source - Service Offering Application Metadata Mapping (Excel)",
        owner: "ITS Production Operations",
        updated: "Not verified (filename 2026-10-12)",
        url: "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7BCCA8403B-C46B-47D8-8D7D-58429E9875D6%7D&file=Service-Offering-Application-Metadata%20mapping%2010-12-2026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "SOP Review and Closure Tracker - 2026.xlsx",
        type: "Additional Source - SOP Review and Closure Tracker 2026 (Excel)",
        owner: "ITS Production Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7B1EA397F2-0B72-4BC6-A585-26131B554F44%7D&file=SOP%20Review%20and%20Closure%20Tracker%20-%202026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      }
    ]
  },
  jcte: {
    id: "jcte",
    name: "JCTE (Jeppesen Crew Tracking Enterprise)",
    breadcrumbTrail: [
      "Ground Stop Applications",
      "JCTE",
      "Application Impact Details"
    ],
    pageTitle: "JCTE (Jeppesen Crew Tracking Enterprise) - Application Impact Details",
    pageSubtitle:
      "JCTE supports Alaska Airlines crew scheduling, crew tracking, and crew member check-in workflows.",
    applicationsTabTitle: "JCTE (Jeppesen Crew Tracking Enterprise)",
    applicationsTabSubheading: "Applications & Systems (JCTE Components)",
    applicationsTabSubtitle:
      "Also called Crew Access, Crew Exchange, Crew Scheduling System, CMS. Tier 1 system supporting crew scheduling and tracking for about 10,100 crew members.",
    applicationsCardSubtitle:
      "This list shows the core JCTE components (Crew Tracking, Crew Access, TIC, and JCTE APIs), their business functions, impact if down, direct dependencies, and ITS owners.",
    dependenciesTabTitle: "JCTE (Jeppesen Crew Tracking Enterprise) - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream systems sending data to JCTE, downstream consumers relying on JCTE data, and Linux/Oracle/W3 Domain/Monitoring infrastructure.",
    status: "Active",
    lastUpdated: "Nov 04, 2026",
    subtitle:
      "JCTE (Jeppesen Crew Tracking Enterprise). Also called Crew Access, Crew Exchange, Crew Scheduling System, CMS · Criticality: Tier 1. Standard ITS Tier 1 SLAs apply · 24x7",
    company: "Jeppesen",
    website:
      "Crew Tracking: http://crewtracking.alaskaair.com/. Crew Access: https://crewaccess.alaskaair.com/site/. TIC reports: https://jctereports.alaskaair.com/tic/default",
    category: "Crew: crew scheduling and tracking for about 10,100 crew members",
    itsTeam: "ITS JCTE System Admins. Tech Owner: Sue Rawlings",
    logo: "public/vendors/jeppesen.png",
    impactSummary: {
      confirmed: 0,
      potential: 4,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title:
        "Criticality: Tier 1. Standard ITS Tier 1 SLAs apply - 24x7",
      message:
        "JCTE is the system of record for Alaska crew scheduling and tracking. If it goes down, schedulers can't manage crews and crew members can't see schedules or check in. When it causes flight delays, it is treated as Sev 1. URLs: Crew Tracking: http://crewtracking.alaskaair.com/. Crew Access: https://crewaccess.alaskaair.com/site/. TIC reports: https://jctereports.alaskaair.com/tic/default",
      description:
        "JCTE is the system of record for Alaska crew scheduling and tracking. If it goes down, schedulers can't manage crews and crew members can't see schedules or check in. When it causes flight delays, it is treated as Sev 1.",
      updatedAgo: "Updated from JCTE System Summary 3 19 26 & JCTE_Triage_Troubleshooting_6.10.25"
    },
    impactedSystems: [
      {
        id: "jcte-crew-tracking",
        name: "Crew Tracking (Tracking Editor, Crew Editor, Alert Monitor)",
        subName: "(crewtracking.alaskaair.com)",
        appTabSubName: "(crewtracking.alaskaair.com)",
        description: "Java desktop tools launched from crewtracking.alaskaair.com",
        appTabDescription: "Java desktop tools launched from crewtracking.alaskaair.com",
        shortDescription: "Java desktop tools launched from crewtracking.alaskaair.com",
        businessFunction: "Back-office crew scheduling",
        impact: "Schedulers can't do any scheduling work",
        impactIfDown: "Schedulers can't do any scheduling work",
        dependencies: "W3 domain login, Java 11, JCTE servers",
        keyDependencies: "W3 domain login, Java 11, JCTE servers",
        owner: "ITS JCTE System Admins",
        technicalOwner: "ITS JCTE System Admins",
        status: "Potential"
      },
      {
        id: "jcte-crew-access",
        name: "Crew Access",
        subName: "(https://crewaccess.alaskaair.com/site/)",
        appTabSubName: "(https://crewaccess.alaskaair.com/site/)",
        description: "Web and mobile site for pilots and flight attendants (FAs)",
        appTabDescription: "Web and mobile site for pilots and flight attendants (FAs)",
        shortDescription: "Web and mobile site for pilots and flight attendants (FAs)",
        businessFunction: "Schedules, trades, pilot check-in",
        impact: "Crew can't view schedules or check in",
        impactIfDown: "Crew can't view schedules or check in",
        dependencies: "Single sign-on (SSO), two web servers behind a load balancer",
        keyDependencies: "Single sign-on (SSO), two web servers behind a load balancer",
        owner: "ITS JCTE System Admins",
        technicalOwner: "ITS JCTE System Admins",
        status: "Potential"
      },
      {
        id: "jcte-tic",
        name: "TIC (Tracking Information Center)",
        subName: "(https://jctereports.alaskaair.com/tic/default)",
        appTabSubName: "(https://jctereports.alaskaair.com/tic/default)",
        description: "Reports site",
        appTabDescription: "Reports site",
        shortDescription: "Reports site",
        businessFunction: "Crew reporting",
        impact: "No reports",
        impactIfDown: "No reports",
        dependencies: "FedAuth/SSO",
        keyDependencies: "FedAuth/SSO",
        owner: "ITS JCTE System Admins",
        technicalOwner: "ITS JCTE System Admins",
        status: "Potential"
      },
      {
        id: "jcte-apis",
        name: "JCTE APIs (CrewOnFlight, GetStatusCard, JobRunner, TripsDateOutput)",
        subName: "(On-Premises Services via SDP & APIM)",
        appTabSubName: "(On-Premises Services via SDP & APIM)",
        description: "On-premises services that other apps call",
        appTabDescription: "On-premises services that other apps call",
        shortDescription: "On-premises services that other apps call",
        businessFunction: "Crew data to other systems",
        impact: "Downstream apps lose crew data",
        impactIfDown: "Downstream apps lose crew data",
        dependencies: "SDP cluster and API Management (APIM)",
        keyDependencies: "SDP cluster and API Management (APIM)",
        owner:
          "Not verified (SDP cluster and APIM dependencies documented; specific component owner not verified)",
        technicalOwner:
          "Not verified (SDP cluster and APIM dependencies documented; specific component owner not verified)",
        status: "Potential"
      }
    ],
    upstreamDependencies: [
      "VisOps flight feed, through MQ Series and ActiveMQ",
      "Navblue trips and carry-in roster, sent by FTP",
      "PeopleSoft HCM employee data"
    ],
    downstreamConsumers: [
      "Pilot and Inflight websites, VisOps (crew on flight), APIS, SmartLoad (S4A), ETQ, IMAGE, Block2Block, Flight Payroll, EDW",
      "AirTrak, FltOps, DAP, Pilot Training, CSA/B2B/JetPack/Calendar (through SDP and APIM), and the FA Attendance App"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Upstream feeds (VisOps flight feed via MQ Series/ActiveMQ, Navblue trips/roster via FTP, PeopleSoft HCM employee data) flowing into JCTE to provide crew data to Pilot/Inflight websites, VisOps, APIS, S4A, Block2Block, Flight Payroll, EDW, AirTrak, FltOps, DAP, and JetPack.",
      diagramUpstream: [
        {
          id: "jcte-up-1",
          name: "VisOps Flight Feed",
          subtitle: "Through MQ Series and ActiveMQ",
          iconType: "transfer"
        },
        {
          id: "jcte-up-2",
          name: "Navblue Trips & Carry-In Roster",
          subtitle: "Sent by FTP",
          iconType: "doc"
        },
        {
          id: "jcte-up-3",
          name: "PeopleSoft HCM",
          subtitle: "Employee data",
          iconType: "database"
        }
      ],
      diagramServices: [
        "Crew Tracking (Tracking / Crew Editor / Alert Monitor)",
        "Crew Access (Web & Mobile)",
        "TIC (Tracking Information Center)",
        "JCTE APIs (CrewOnFlight, GetStatusCard, JobRunner, TripsDateOutput)"
      ],
      diagramDownstream: [
        {
          id: "jcte-down-1",
          name: "Pilot & Inflight Websites, VisOps, APIS",
          subtitle: "Crew on flight & web portals",
          iconType: "nodes"
        },
        {
          id: "jcte-down-2",
          name: "SmartLoad (S4A), ETQ, IMAGE, Block2Block",
          subtitle: "Weight & balance and crew operations",
          iconType: "ticket"
        },
        {
          id: "jcte-down-3",
          name: "Flight Payroll & EDW",
          subtitle: "Payroll & enterprise data warehouse",
          iconType: "database"
        },
        {
          id: "jcte-down-4",
          name: "AirTrak, FltOps, DAP, Pilot Training",
          subtitle: "Through SDP and APIM",
          iconType: "chart"
        },
        {
          id: "jcte-down-5",
          name: "CSA / B2B / JetPack / Calendar & FA Attendance",
          subtitle: "Crew mobile & attendance apps",
          iconType: "team"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 3, tone: "red" },
        { label: "Downstream Consumer Groups", count: 2, tone: "green" },
        { label: "JCTE Components", count: 4, tone: "blue" },
        { label: "Infrastructure Components", count: 5, tone: "purple" }
      ],
      keyTakeaways: [
        "JCTE is the system of record for Alaska crew scheduling and tracking. If it goes down, schedulers can't manage crews and crew members can't see schedules or check in. When it causes flight delays, it is treated as Sev 1."
      ],
      upstreamTable: [
        {
          id: "jcte-upt-1",
          name: "VisOps flight feed, through MQ Series and ActiveMQ",
          description: "Real-time flight movement and schedule updates delivered to JCTE via MQ Series and ActiveMQ.",
          type: "Internal / MQ",
          impact: "Flight feed data goes stale, which can lead to flight delays."
        },
        {
          id: "jcte-upt-2",
          name: "Navblue trips and carry-in roster, sent by FTP",
          description: "Crew pairings, trips, and carry-in rosters sent via FTP from Navblue.",
          type: "External / FTP",
          impact: "Monthly trips and carry-in rosters fail to load into JCTE."
        },
        {
          id: "jcte-upt-3",
          name: "PeopleSoft HCM employee data",
          description: "Employee master data for pilots and flight attendants.",
          type: "Internal / HCM",
          impact: "Crew member profiles and PeopleSoft ID updates do not sync."
        }
      ],
      downstreamTable: [
        {
          id: "jcte-dwt-1",
          name: "Pilot and Inflight websites, VisOps (crew on flight), APIS, SmartLoad (S4A), ETQ, IMAGE, Block2Block, Flight Payroll, EDW",
          description: "Downstream operational, weight & balance, compliance, check-in, payroll, and analytics systems consuming JCTE crew data.",
          type: "Internal Systems",
          impact: "Crew data feeds to S4A, VisOps, APIS, Block2Block, and payroll are affected."
        },
        {
          id: "jcte-dwt-2",
          name: "AirTrak, FltOps, DAP, Pilot Training, CSA/B2B/JetPack/Calendar (through SDP and APIM), and the FA Attendance App",
          description: "Downstream flight control, dispatch, pilot briefing, and crew mobile applications calling JCTE APIs through SDP and APIM.",
          type: "Internal / API Consumers",
          impact: "Downstream apps (AirTrak, FltOps, JetPack, FA Attendance) lose crew data."
        }
      ],
      infrastructureTable: [
        {
          id: "jcte-inf-1",
          component: "Main infrastructure Linux server",
          description: "Tukv3cmsinf01",
          owner: "ITS JCTE System Admins",
          impact: "If Tukv3cmsinf01 is down, nobody can log in."
        },
        {
          id: "jcte-inf-2",
          component: "Main Oracle database",
          description: "Tukvvcmsdb01",
          owner: "Oracle DBA / ITS JCTE System Admins",
          impact: "If Tukvvcmsdb01 is down, open a Sev 1 and contact the Oracle DBA on-call."
        },
        {
          id: "jcte-inf-3",
          component: "W3 / DMZ domain & Password manager servers",
          description:
            "W3 / DMZ domain (SEAVVW3.local) for scheduler logins. Password manager servers: SEAV3PWM01 / TUKV3PWM01",
          owner: "ITS JCTE System Admins / Compute & Platforms",
          impact: "Multiple users can't log in with W3 accounts if domain/password servers fail."
        },
        {
          id: "jcte-inf-4",
          component: "Monitoring",
          description:
            "Appmanager, AlarmsOne / Zenoss, plus a TWS job that checks database replication. A Grafana-to-Dynatrace migration is in progress",
          owner: "ITS JCTE System Admins",
          impact: "Provides alerting on JCTE servers, queues, and database replication."
        },
        {
          id: "jcte-inf-5",
          component: "Firewall / network rules",
          description:
            "Not verified (Tukv3cmsinf01, Tukvvcmsdb01, W3 / DMZ domain SEAVVW3.local, password servers SEAV3PWM01 / TUKV3PWM01, and two Crew Access web servers behind a load balancer documented; exact approved firewall rules, ports, and load-balancer VIPs not verified)",
          owner: "ITS Network",
          impact:
            "Network connectivity between JCTE infrastructure, Crew Access load balancer, W3 domain, and SDP/APIM (exact firewall rules: Not verified)"
        }
      ]
    },
    typicalBusinessImpact: [
      "Crew schedulers can't log in or do any scheduling work",
      "Flight feed data goes stale, which can lead to flight delays",
      "Crew can't view schedules or future rosters, or pilots can't check in",
      "Crew data feeds to S4A, AirTrak and payroll are affected",
      "RRT0 on 2026-10-07: JCTE couldn't be reached through Azure Virtual Desktop (AVD) because of a network/Azure issue"
    ],
    knownWorkarounds: [
      "Pilots call the crew scheduler on duty to check in",
      "FAs check in through the Block to Block app or by calling crew scheduling",
      "Crew Access can run on one web server if the load balancer is redirected",
      "Stale flight data: use Refresh (not Update) in Tracking Editor",
      "DR plan: Disaster Recovery Plan - JCTE.xls"
    ],
    validationChecklist: [
      "Confirm scope: one user, multiple users, or all users. Ask whether flight delays are happening; if yes, it's Sev 1.",
      "Check the JCTE System Admin on-call in Everbridge and contact them.",
      "Check the AlarmsOne / Zenoss dashboard and alerts.",
      "Check that Tukv3cmsinf01 is up. If it's down, nobody can log in; notify the System Admin.",
      "Ping the database Tukvvcmsdb01. If it's down, open a Sev 1 and contact the Oracle DBA on-call.",
      "Crew Access: test logging in from inside and outside the Alaska network. If it only fails outside, engage the Network team.",
      "Flight feed not updating: rule out a VisOps outage, then check MQ Series / ActiveMQ alerts.",
      "Multiple users can't log in with W3 accounts: open a Sev 1 to the JCTE System Admins and engage Compute & Platforms.",
      "If the problem continues, the System Admin contacts Jeppesen 24x7 support."
    ],
    vendorContacts: {
      companyNote: "Jeppesen",
      categoryNote:
        "Application Name: JCTE (Jeppesen Crew Tracking Enterprise). Also called Crew Access, Crew Exchange, Crew Scheduling System, CMS • Criticality: Tier 1. Standard ITS Tier 1 SLAs apply • URLs: Crew Tracking: http://crewtracking.alaskaair.com/. Crew Access: https://crewaccess.alaskaair.com/site/. TIC reports: https://jctereports.alaskaair.com/tic/default",
      supportEmail: "opssupport@jeppesen.com",
      supportEmailNote: "Jeppesen 24x7 Support",
      supportPhone:
        "+1-303-328-6412, effective 01 Apr 2026 (replaces +1-562-797-6193, which was valid only through 31 Mar 2026 and still appears in ITS Vendor Information - 2026.xlsx). For ProdOps Sev 1 use only. Otherwise the System Admins contact Jeppesen",
      technicalSupport:
        "Jeppesen 24x7: +1-303-328-6412 (effective 01 Apr 2026; replaces +1-562-797-6193 still listed in ITS Vendor Information - 2026.xlsx) / opssupport@jeppesen.com. Don't share the number; ProdOps uses it only for Sev 1",
      accountManager: "Not verified (blank in JCTE system summaries)",
      namedEscalationContact:
        "Jeppesen 24x7: +1-303-328-6412 (ProdOps Sev 1 use only; otherwise the JCTE System Admins contact Jeppesen)",
      supportHours: "24x7",
      escalation:
        "Vendor Contacts:\n• Jeppesen 24x7: +1-303-328-6412 (effective 01 Apr 2026; replaces +1-562-797-6193 still listed in ITS Vendor Information - 2026.xlsx) / opssupport@jeppesen.com. Don't share the number; ProdOps uses it only for Sev 1\n• Account Manager: Not verified (blank in JCTE system summaries)\n\nCommunication Guidelines:\n• Don't open tickets to the Crew team for crew questions. Send FAs to their scheduling committees, and pilots to the MEC Scheduling Chair.\n• When escalating, give: user name, PeopleSoft ID, which app they're using, how they're accessing it, steps to reproduce, and screenshots.\n• The JCTE System Admins contact Jeppesen.",
      communicationGuidelines: [
        "Don't open tickets to the Crew team for crew questions. Send FAs to their scheduling committees, and pilots to the MEC Scheduling Chair.",
        "When escalating, give: user name, PeopleSoft ID, which app they're using, how they're accessing it, steps to reproduce, and screenshots.",
        "The JCTE System Admins contact Jeppesen."
      ],
      responseSlas: [
        {
          label: "Standard SLAs",
          priority: "Standard SLAs",
          level: "Tier 1 System",
          description: "Standard ITS Tier 1 SLAs",
          target: "Standard ITS Tier 1 SLAs",
          value: "Standard ITS Tier 1 SLAs"
        },
        {
          label: "Sev 1",
          priority: "Sev 1",
          level: "Critical / Ground Stop",
          description: "flight delays, all users down, or multiple users can't log in",
          target: "Flight delays, all users down, or multiple users can't log in",
          value: "flight delays, all users down, or multiple users can't log in"
        },
        {
          label: "Sev 2",
          priority: "Sev 2",
          level: "High Operational Impact",
          description:
            "Crew Access fully down (both servers), or Alert Monitor problems causing delays",
          target: "Crew Access fully down (both servers), or Alert Monitor problems causing delays",
          value:
            "Crew Access fully down (both servers), or Alert Monitor problems causing delays"
        },
        {
          label: "Update cadence",
          priority: "Update cadence",
          level: "Incident Updates",
          description:
            "Not verified (Standard ITS Tier 1 SLAs and 24x7 vendor support documented; numerical Sev 1/Sev 2 response targets, vendor response targets, and bridge update cadence not verified)",
          target: "Standard ITS Tier 1 SLAs | Numerical SLA & cadence: Not verified",
          value:
            "Not verified (Standard ITS Tier 1 SLAs and 24x7 vendor support documented; numerical Sev 1/Sev 2 response targets, vendor response targets, and bridge update cadence not verified)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS JCTE System Admins. Tech Owner: Sue Rawlings",
      itsTeamNote:
        "ITS System Owners: Russell Ruiz (206-392-6255), Amirtha Raj Gnana Seelan (1-248-296-2602), Chaithanya Vadlamudi (1-425-919-8914)",
      applicationOwner:
        "Tech Owner: Sue Rawlings (253-341-1173) • ITS System Owners: Russell Ruiz (206-392-6255), Amirtha Raj Gnana Seelan (1-248-296-2602), Chaithanya Vadlamudi (1-425-919-8914)",
      onCallSupport: "ITS JCTE System Admins on-call (Everbridge)",
      systemAdministration:
        "System Administration and Everbridge Focal: Sue Rawlings, 253-341-1173",
      businessOwner:
        "Allen Thieman (VP Inflight), David Mets (VP Flight Ops)",
      passwordSupport: "Service Desk / password help: 1-877-238-1077",
      everbridgeContacts:
        "Focal: Sue Rawlings (253-341-1173) • Everbridge Backups: Nathan McFerren (859-391-4779), Terrance Chariandy (phone: Not verified - blank in summary), Keenan Faatea (phone: Not verified - blank in summary)"
    },
    incidentHistory: [
      {
        id: "RRT0 (2026-10-07)",
        date: "2026-10-07",
        duration: "Documented RRT0",
        severity: "RRT0 / Sev 1",
        title: "JCTE couldn't be reached through Azure Virtual Desktop (AVD)",
        rootCause:
          "RRT0 on 2026-10-07: JCTE couldn't be reached through Azure Virtual Desktop (AVD) because of a network/Azure issue.",
        resolution: "Network / Azure connectivity restored for AVD users."
      }
    ],
    relatedDocuments: [
      {
        title: "JCTE System Summary 3 19 26.docx",
        type: "Primary Source - JCTE System Summary (Word)",
        owner: "ITS Knowledge Management",
        updated: "2026-09-22",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BF48E8ABE-AEA3-40FB-9AE6-B79DA66D9931%7D&file=JCTE%20System%20Summary%203%2019%2026.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "JCTE_Triage_Troubleshooting_6.10.25.docx",
        type: "Primary Source - JCTE Triage & Troubleshooting (Word)",
        owner: "ITS JCTE System Admins",
        updated: "Not verified (filename 2025-06-10)",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B136D288F-45D3-437D-A139-3F393068EB49%7D&file=JCTE_Triage_Troubleshooting_6.10.25.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "JCTE_System_Summary_1.7.docx",
        type: "Primary Source - JCTE System Summary v1.7 (Word)",
        owner: "ITS JCTE System Admins",
        updated: "Not verified (v1.7)",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B89ED58A8-38EB-4EC5-9743-368B91EF74DA%7D&file=JCTE_System_Summary_1.7.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Disaster Recovery Plan - JCTE.xls",
        type: "Primary Source - JCTE Disaster Recovery Plan (Excel)",
        owner: "ITS Knowledge Management / ITS JCTE System Admins",
        updated: "2026-09-21",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B13CEEDAF-A417-42AD-B9EC-73B14F95F792%7D&file=Disaster%20Recovery%20Plan%20-%20JCTE.xls&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "JCTE System Communication Diagram.pdf",
        type: "Primary Source - JCTE System Communication Diagram (PDF)",
        owner: "ITS Crew Systems",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/iServer365/Shared%20Documents/HistoricalDocuments/Historical%20Diagrams%20Archive%202024/Flight%20Operations%20-%20Capability%20L1/Crew%20Scheduling/JCTE/JCTE%20System%20Communication%20Diagram.pdf?web=1"
      },
      {
        title: "System Summary Password Management in W3 Domain- Account Creation - W3 Domain JCTE - JCTE Docs.docx",
        type: "Additional Source - W3 Domain Password Management & Account Creation (Word)",
        owner: "ITS Knowledge Management",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B3D8092DB-EC6A-44ED-9B6D-560598D93CB2%7D&file=System%20Summary%20Password%20Management%20in%20W3%20Domain-%20Account%20Creation%20-%20W3%20Domain%20JCTE%20-%20JCTE%20Docs.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "JCTE system not consuming flight messages.docx",
        type: "Additional Source - JCTE Flight Messages Troubleshooting (Word)",
        owner: "ITS Knowledge Management",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B7FA76419-2A4B-4A8A-B729-85CCA30D8C6B%7D&file=JCTE%20system%20not%20consuming%20flight%20messages.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Critical Applications.xlsx",
        type: "Additional Source - Critical Applications Inventory (Excel)",
        owner: "ITS Production Operations",
        updated: "Not verified",
        url: "https://alaskaair-my.sharepoint.com/personal/suraj_mondal_alaskaair_com/_layouts/15/Doc.aspx?sourcedoc=%7B38D6135B-3F6C-44B6-9865-7897353CABCA%7D&file=Critical%20Applications.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      }
    ]
  },
  airtrack: {
    id: "airtrack",
    name: "AirTrak",
    breadcrumbTrail: [
      "Ground Stop Applications",
      "AirTrak",
      "Application Impact Details"
    ],
    pageTitle: "AirTrak - Application Impact Details",
    pageSubtitle:
      "AirTrak provides real-time operational control for flight tracking, aircraft routing, and irregular operations management.",
    applicationsTabTitle: "AirTrak (AOC App / Ops360 / Irrops)",
    applicationsTabSubheading: "Applications & Systems (AirTrak Components)",
    applicationsTabSubtitle:
      "Also called AOC App, Ops360, Irrops. Tier 1 and Ground Stop eligible application built in-house for real-time control of the operation (aircraft assignments, Irrops, flight status).",
    applicationsCardSubtitle:
      "This list shows the core AirTrak UI, AKS microservices, Auth API, decision support APIs, and Azure Functions, their business functions, impact if down, direct dependencies, and ITS owner.",
    dependenciesTabTitle: "AirTrak - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream event feeds and APIs sending data to AirTrak, downstream consumers relying on AirTrak data, and Azure Front Door/AKS/App Service/Azure SQL/ExpressRoute infrastructure.",
    status: "Active",
    lastUpdated: "Nov 04, 2026",
    subtitle:
      "AirTrak. Also called AOC App, Ops360, Irrops · Criticality: Tier 1 and Ground Stop eligible. Business impact: High · 24x7 (Target recovery: 1 hour or less)",
    company:
      "None; built in-house. Key outside services: Ping Identity, Split.io, AppDynamics",
    website:
      "airtrak.alaskasworld.com. Older URL: https://AOC-prod-frontdoor.azurefd.net/",
    category:
      "Flight Ops: real-time control of the operation (aircraft assignments, Irrops, flight status)",
    itsTeam: "ITS Ops 360 AirtrAK (Team.Maganty@alaskaair.com)",
    logo: "public/applications/airtrack.png",
    impactSummary: {
      confirmed: 0,
      potential: 6,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title:
        "Criticality: Tier 1 and Ground Stop eligible. Business impact: High - 24x7. Target recovery: 1 hour or less",
      message:
        "AirTrak is the AOC's real-time control tool for AS and QX. Teams use it for aircraft swaps, aircraft movement, Irrops and watching the whole system. If it goes down, the AOC loses real-time visibility and can't take action across the network. URL: airtrak.alaskasworld.com. Older URL: https://AOC-prod-frontdoor.azurefd.net/",
      description:
        "AirTrak is the AOC's real-time control tool for AS and QX. Teams use it for aircraft swaps, aircraft movement, Irrops and watching the whole system. If it goes down, the AOC loses real-time visibility and can't take action across the network.",
      updatedAgo: "Updated from aoc-runbook, Airtrak_System_Summary & Airtrak_Triage_Troubleshooting"
    },
    impactedSystems: [
      {
        id: "airtrak-ui",
        name: "AirTrak UI (React web app)",
        subName: "(Azure App Service - West US 2 & West Central US)",
        appTabSubName: "(Azure App Service - West US 2 & West Central US)",
        description:
          "Gantt chart UI on Azure App Service, running in West US 2 and West Central US at the same time",
        appTabDescription:
          "Gantt chart UI on Azure App Service, running in West US 2 and West Central US at the same time",
        shortDescription:
          "Gantt chart UI on Azure App Service, running in West US 2 and West Central US at the same time",
        businessFunction: "Monitoring the operation",
        impact: "No visibility for the Operations Control Center (AOC)",
        impactIfDown: "No visibility for the Operations Control Center (AOC)",
        dependencies: "Front Door, PingFederate",
        keyDependencies: "Front Door, PingFederate",
        owner: "ITS Ops 360 AirtrAK",
        technicalOwner: "ITS Ops 360 AirtrAK",
        status: "Potential"
      },
      {
        id: "airtrak-core-aks",
        name: "AOCFlights / AOCAssignments / AOCAirTrakManager",
        subName: "(Azure Kubernetes Service - AKS)",
        appTabSubName: "(Azure Kubernetes Service - AKS)",
        description: "Core services on Azure Kubernetes (AKS)",
        appTabDescription: "Core services on Azure Kubernetes (AKS)",
        shortDescription: "Core services on Azure Kubernetes (AKS)",
        businessFunction: "Flight data and aircraft assignments",
        impact: "Flights missing from the Gantt",
        impactIfDown: "Flights missing from the Gantt",
        dependencies: "Ops360 SQL database",
        keyDependencies: "Ops360 SQL database",
        owner: "ITS Ops 360 AirtrAK",
        technicalOwner: "ITS Ops 360 AirtrAK",
        status: "Potential"
      },
      {
        id: "airtrak-irrops-services",
        name: "AOCIrropsManager / IRROPSQueuePublisher / IrropsCodes",
        subName: "(Irrops Processing Services)",
        appTabSubName: "(Irrops Processing Services)",
        description: "Services that process Irrops",
        appTabDescription: "Services that process Irrops",
        shortDescription: "Services that process Irrops",
        businessFunction:
          "Divert, return to gate (RTG), air turn back (ATB), cancel, delay",
        impact: "Irrops can't be submitted",
        impactIfDown: "Irrops can't be submitted",
        dependencies: "Service Bus",
        keyDependencies: "Service Bus",
        owner: "ITS Ops 360 AirtrAK",
        technicalOwner: "ITS Ops 360 AirtrAK",
        status: "Potential"
      },
      {
        id: "airtrak-auth-api",
        name: "Auth API / AOCAuthorization",
        subName: "(Authentication & Permissions)",
        appTabSubName: "(Authentication & Permissions)",
        description: "Login and permissions",
        appTabDescription: "Login and permissions",
        shortDescription: "Login and permissions",
        businessFunction: "User access",
        impact: "All users locked out",
        impactIfDown: "All users locked out",
        dependencies: "PingFederate",
        keyDependencies: "PingFederate",
        owner: "ITS Ops 360 AirtrAK",
        technicalOwner: "ITS Ops 360 AirtrAK",
        status: "Potential"
      },
      {
        id: "airtrak-decision-support",
        name: "AOCCrewInfo, AOCScores, Ground Events API",
        subName: "(Crew, Scores & Out-of-Service Events)",
        appTabSubName: "(Crew, Scores & Out-of-Service Events)",
        description: "Crew data, revenue scores, out-of-service (OTS) events",
        appTabDescription: "Crew data, revenue scores, out-of-service (OTS) events",
        shortDescription: "Crew data, revenue scores, out-of-service (OTS) events",
        businessFunction: "Decision support",
        impact: "Missing crew, score or ground event data",
        impactIfDown: "Missing crew, score or ground event data",
        dependencies: "JCTE / Crew APIs, Revenue Management API",
        keyDependencies: "JCTE / Crew APIs, Revenue Management API",
        owner: "ITS Ops 360 AirtrAK",
        technicalOwner: "ITS Ops 360 AirtrAK",
        status: "Potential"
      },
      {
        id: "airtrak-azure-functions",
        name: "Azure Functions",
        subName: "(EquipmentChange, ShortTurnTime, UserAssignmentsClose, ScheduleFlightAdd)",
        appTabSubName: "(EquipmentChange, ShortTurnTime, UserAssignmentsClose, ScheduleFlightAdd)",
        description:
          "EquipmentChange, ShortTurnTime, UserAssignmentsClose, ScheduleFlightAdd",
        appTabDescription:
          "EquipmentChange, ShortTurnTime, UserAssignmentsClose, ScheduleFlightAdd",
        shortDescription:
          "EquipmentChange, ShortTurnTime, UserAssignmentsClose, ScheduleFlightAdd",
        businessFunction: "Processing incoming events",
        impact: "Equipment changes and flight adds are missed",
        impactIfDown: "Equipment changes and flight adds are missed",
        dependencies: "Service Bus",
        keyDependencies: "Service Bus",
        owner: "ITS Ops 360 AirtrAK",
        technicalOwner: "ITS Ops 360 AirtrAK",
        status: "Potential"
      }
    ],
    upstreamDependencies: [
      "Flight schedule events on Service Bus (as.sb.fo.ops360.flight.events), Azure Event Hub (FLIFO and aircraft status)",
      "VisOps / DAP service bus",
      "Crew APIs (CrewOnFlight, CrewRoster) from JCTE / AIMS",
      "ACARS events",
      "Revenue Management Pricing API (through APIM), PingFederate, Split.io"
    ],
    downstreamConsumers: [
      "Irrops, flight times and swap queues to downstream systems, plus the Ops360 Notification Engine",
      "VisOps",
      "Sabre (ETA/ETD times)",
      "Real Time Gates (RTG)",
      "AS/QX SOC, NOC, Dispatch"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Upstream feeds (Service Bus flight events, Azure Event Hub FLIFO/status, VisOps/DAP, Crew APIs from JCTE/AIMS, ACARS events, Revenue Management API, PingFederate, Split.io) flowing into AirTrak to power Irrops/swap queues, VisOps, Sabre ETA/ETD, Real Time Gates (RTG), and AS/QX SOC, NOC, and Dispatch.",
      diagramUpstream: [
        {
          id: "at-up-1",
          name: "Service Bus & Azure Event Hub",
          subtitle: "as.sb.fo.ops360.flight.events, FLIFO & aircraft status",
          iconType: "transfer"
        },
        {
          id: "at-up-2",
          name: "VisOps / DAP & ACARS Events",
          subtitle: "Flight operations & aircraft comms events",
          iconType: "network"
        },
        {
          id: "at-up-3",
          name: "Crew APIs (JCTE / AIMS)",
          subtitle: "CrewOnFlight, CrewRoster",
          iconType: "database"
        },
        {
          id: "at-up-4",
          name: "RM Pricing API, PingFederate, Split.io",
          subtitle: "Through APIM, SSO & feature flags",
          iconType: "ticket"
        }
      ],
      diagramServices: [
        "AirTrak UI (React on Azure App Service)",
        "AOCFlights / AOCAssignments / AOCAirTrakManager (AKS)",
        "AOCIrropsManager / IRROPSQueuePublisher / IrropsCodes",
        "Auth API / AOCCrewInfo / AOCScores / Azure Functions"
      ],
      diagramDownstream: [
        {
          id: "at-down-1",
          name: "Irrops, Flight Times & Swap Queues",
          subtitle: "Plus Ops360 Notification Engine",
          iconType: "nodes"
        },
        {
          id: "at-down-2",
          name: "VisOps",
          subtitle: "Operations database & tracking",
          iconType: "database"
        },
        {
          id: "at-down-3",
          name: "Sabre (ETA/ETD times)",
          subtitle: "Flight time updates",
          iconType: "ticket"
        },
        {
          id: "at-down-4",
          name: "Real Time Gates (RTG)",
          subtitle: "Gate planning & operations",
          iconType: "chart"
        },
        {
          id: "at-down-5",
          name: "AS/QX SOC, NOC, Dispatch",
          subtitle: "Operations Control Center teams",
          iconType: "team"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 5, tone: "red" },
        { label: "Downstream Consumers", count: 5, tone: "green" },
        { label: "AirTrak Components", count: 6, tone: "blue" },
        { label: "Infrastructure Components", count: 8, tone: "purple" }
      ],
      keyTakeaways: [
        "AirTrak is the AOC's real-time control tool for AS and QX. Teams use it for aircraft swaps, aircraft movement, Irrops and watching the whole system. If it goes down, the AOC loses real-time visibility and can't take action across the network."
      ],
      upstreamTable: [
        {
          id: "at-upt-1",
          name: "Flight schedule events on Service Bus (as.sb.fo.ops360.flight.events), Azure Event Hub (FLIFO and aircraft status)",
          description: "Inbound flight schedule events on Azure Service Bus and real-time FLIFO/aircraft status via Azure Event Hub.",
          type: "Internal / Azure",
          impact: "Missing flight schedule updates or real-time aircraft status in AirTrak."
        },
        {
          id: "at-upt-2",
          name: "VisOps / DAP service bus",
          description: "Operational flight and schedule feed from VisOps / DAP.",
          type: "Internal / Service Bus",
          impact: "Flights or operational updates fail to sync into AirTrak."
        },
        {
          id: "at-upt-3",
          name: "Crew APIs (CrewOnFlight, CrewRoster) from JCTE / AIMS",
          description: "Crew assignment and roster APIs from JCTE (AS) and AIMS (QX).",
          type: "Internal / API",
          impact: "Crew info doesn't load in AirTrak (e.g., MI6574 and INC00014511)."
        },
        {
          id: "at-upt-4",
          name: "ACARS events",
          description: "Real-time OOOI and aircraft event messages from ACARS.",
          type: "Internal / Aircraft Comms",
          impact: "Real-time aircraft movement times do not update automatically."
        },
        {
          id: "at-upt-5",
          name: "Revenue Management Pricing API (through APIM), PingFederate, Split.io",
          description: "Revenue scores via APIM, SSO authentication via PingFederate, and feature flags via Split.io.",
          type: "External & Internal",
          impact: "Missing revenue scores, user authentication lockout, or feature flag issues."
        }
      ],
      downstreamTable: [
        {
          id: "at-dwt-1",
          name: "Irrops, flight times and swap queues to downstream systems, plus the Ops360 Notification Engine",
          description: "Outbound queues publishing aircraft swaps, flight time changes, Irrops actions, and notifications.",
          type: "Internal / Queues",
          impact: "Downstream systems do not receive aircraft swaps, flight time updates, or Irrops notifications."
        },
        {
          id: "at-dwt-2",
          name: "VisOps",
          description: "Receives irregular operations and equipment assignment updates from AirTrak.",
          type: "Internal System",
          impact: "Equipment swaps and Irrops actions made in AirTrak do not flow to VisOps."
        },
        {
          id: "at-dwt-3",
          name: "Sabre (ETA/ETD times)",
          description: "Receives updated ETA and ETD flight times from AirTrak.",
          type: "External / Reservations",
          impact: "Missing or wrong ETA/ETD data sent to Sabre."
        },
        {
          id: "at-dwt-4",
          name: "Real Time Gates (RTG)",
          description: "Gate management system consuming aircraft assignment and flight time updates.",
          type: "Internal System",
          impact: "Gate assignments lack real-time tail swap and ETA/ETD updates."
        },
        {
          id: "at-dwt-5",
          name: "AS/QX SOC, NOC, Dispatch",
          description: "Alaska and Horizon System Operations Control, Network Operations Control, and Dispatch teams.",
          type: "Internal Teams",
          impact: "SOC, NOC and Dispatch can't do equipment swaps or Irrops and lose real-time operational visibility."
        }
      ],
      infrastructureTable: [
        {
          id: "at-inf-1",
          component: "Azure Front Door Premium",
          description:
            "Azure Front Door Premium (airtrak-prod-afd) with web application firewall (WAF) policy aocPRODAFDWafPolicy",
          owner: "ITS Ops 360 AirtrAK / Cloud",
          impact: "Primary global entry point and WAF for AirTrak UI and APIs."
        },
        {
          id: "at-inf-2",
          component: "Traffic Manager & Application Gateway",
          description:
            "Traffic Manager (aoc-app-primary-tm) and Application Gateway (aoc-app-gateway) as the fallback path",
          owner: "ITS Ops 360 AirtrAK / Cloud",
          impact: "Fallback routing path used during Front Door failover."
        },
        {
          id: "at-inf-3",
          component: "AKS clusters",
          description: "its-prod-aks-westus2 / its-prod-aks-westcentralus",
          owner: "ITS Automated Services / ITS Ops 360 AirtrAK",
          impact: "Hosts core AirTrak microservices in West US 2 and West Central US."
        },
        {
          id: "at-inf-4",
          component: "App Service plans",
          description: "flightops-prod-plan-lin-w2-01 / wc-01",
          owner: "ITS Ops 360 AirtrAK",
          impact: "Hosts the AirTrak React UI web app in West US 2 and West Central US."
        },
        {
          id: "at-inf-5",
          component: "Ops360 Azure SQL database",
          description:
            "Ops360 Azure SQL database (multi-region, with a documented failover process)",
          owner: "ITS Ops 360 AirtrAK",
          impact: "Primary persistence store for flights, aircraft assignments, and Irrops."
        },
        {
          id: "at-inf-6",
          component: "Key Vault & App Configuration",
          description:
            "Key Vault: aoc-prod-kv. App Configuration: aoc-prod-application-configuration-service / aoc-wc-prod-acs",
          owner: "ITS Ops 360 AirtrAK",
          impact: "Stores secrets and application configuration across regions."
        },
        {
          id: "at-inf-7",
          component: "Monitoring",
          description:
            "Application Insights (aoc-prod-appinsights), Log Analytics, AppDynamics, Dynatrace",
          owner: "ITS Ops 360 AirtrAK",
          impact: "Telemetry, logging, and health monitoring for AirTrak services."
        },
        {
          id: "at-inf-8",
          component: "Azure ExpressRoute",
          description:
            "Azure ExpressRoute. An ExpressRoute outage affected AirTrak on 2026-08-24",
          owner: "ITS Network / Cloud",
          impact: "Hybrid connectivity between on-prem services and Azure."
        }
      ]
    },
    typicalBusinessImpact: [
      "SOC, NOC and Dispatch can't do equipment swaps or Irrops",
      "Missing flights within 24 hours are Sev 1",
      "Crew info doesn't load. Examples: MI6574, and INC00014511 (QX crew latency)",
      "HA SOCC (Hawaiian operations center) lost access. INC00008592 lasted 1 hr 55 min. INC3416538 was a separate access issue",
      "Wrong ETA/ETD data sent to Sabre for diverted round-robin flights"
    ],
    knownWorkarounds: [
      "Use the Island browser if Chrome access fails. This worked during INC00008592",
      "Check the Out of Service board / Dashboard for ground events",
      "Single-user issues: clear filters, clear the browser cache, or sign out of VPN",
      "Irrops access problems: ask another user to make the entry, or contact the AS NOD / QX FCM (24/7)",
      "Fail over through Front Door / Traffic Manager using the DevOps pipeline"
    ],
    validationChecklist: [
      "Confirm scope: one user, multiple users, or all users, and whether the users are AS, QX or HA.",
      "Single user: check the URL, the login redirect, and browser cache and filters. This is Sev 4.",
      "All users locked out: restart the Auth API and Assignments API in both regions. If that doesn't fix it, open a Sev 2 and page the ITS Ops 360 AirtrAK on-call.",
      "503 or other 500-series errors: restart the UI App Services in both regions.",
      "No flights showing: restart the Flights API. Some flights missing: restart ScheduleFlightAddFunction.",
      "Ground events or Irrops reasons missing: check the AKS pods. If pods are down, call ITS Automated Services. If pods are up, call the AirtrAK on-call.",
      "Check Application Insights, the Front Door health probe, and changes from the last 48 hours.",
      "Check PingFederate, Azure/ExpressRoute and network health. Engage Identity, Network or Cloud teams as needed."
    ],
    vendorContacts: {
      companyNote:
        "None; built in-house. Key outside services: Ping Identity, Split.io, AppDynamics",
      categoryNote:
        "Application Name: AirTrak. Also called AOC App, Ops360, Irrops • Criticality: Tier 1 and Ground Stop eligible. Business impact: High • URL: airtrak.alaskasworld.com. Older URL: https://AOC-prod-frontdoor.azurefd.net/",
      supportEmail: "Not applicable (built in-house)",
      supportEmailNote: "Built in-house - Primary ITS Team Owner: ITS Ops 360 AirtrAK (Team.Maganty@alaskaair.com)",
      supportPhone: "Not applicable (built in-house)",
      technicalSupport:
        "Not applicable (built in-house). For outside platforms: Microsoft Azure Support, Ping Identity, Split.io",
      accountManager: "Not applicable (built in-house)",
      namedEscalationContact:
        "For outside platforms: Microsoft Azure Support, Ping Identity, Split.io",
      supportHours: "24x7. Target recovery: 1 hour or less",
      escalation:
        "Vendor Contacts:\n• Not applicable (built in-house). For outside platforms: Microsoft Azure Support, Ping Identity, Split.io\n\nCommunication Guidelines:\n• On-call is through xMatters or Everbridge. Page or call twice within 90 seconds, and escalate if there's no response in 5 minutes.\n• ProdOps leads or co-leads P1, P2 and RRT0 bridges.\n• When escalating, give: flight number, flight date, Irrops type attempted, and number of users affected.",
      communicationGuidelines: [
        "On-call is through xMatters or Everbridge. Page or call twice within 90 seconds, and escalate if there's no response in 5 minutes.",
        "ProdOps leads or co-leads P1, P2 and RRT0 bridges.",
        "When escalating, give: flight number, flight date, Irrops type attempted, and number of users affected."
      ],
      responseSlas: [
        {
          label: "Recovery target",
          priority: "Recovery target",
          level: "Tier 1 / Ground Stop Eligible",
          description: "Recovery target: 1 hour or less",
          target: "1 hour or less",
          value: "1 hour or less"
        },
        {
          label: "Response target",
          priority: "Response target",
          level: "Multi-Machine / No Backup",
          description:
            "15 minutes if multiple machines are affected or no backup machine is available. Otherwise Sev 3",
          target: "15 minutes (otherwise Sev 3)",
          value:
            "15 minutes if multiple machines are affected or no backup machine is available. Otherwise Sev 3"
        },
        {
          label: "Sev 1 / Sev 2",
          priority: "Sev 1 / Sev 2",
          level: "Severity Criteria",
          description:
            "Sev 1: flights missing within 24 hours. Sev 2: all users can't access, or Irrops fail within 24 hours",
          target: "Sev 1: flights missing <24h | Sev 2: all users locked out or Irrops fail <24h",
          value:
            "Sev 1: flights missing within 24 hours. Sev 2: all users can't access, or Irrops fail within 24 hours"
        },
        {
          label: "Update cadence",
          priority: "Update cadence",
          level: "Incident Updates",
          description:
            "P1: every 15-30 minutes (aoc-runbook.docx). P2 / RRT0 update cadence: Not verified",
          target: "P1: Every 15-30 minutes | P2/RRT0: Not verified",
          value:
            "P1: every 15-30 minutes (aoc-runbook.docx). P2 / RRT0 update cadence: Not verified"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS Ops 360 AirtrAK (Team.Maganty@alaskaair.com)",
      itsTeamNote:
        "Technical Owner / RCA Owner: GK Maganty (206-227-1134) • Accountable Director: Reid Childress (Reid.Childress@alaskaair.com; phone: Not verified) • ITS System Owners: Sean Duggan (Sean.Duggan@alaskaair.com; phone: Not verified), Ben Shocki (425-273-1560), Michael Dunn (email/phone: Not verified)",
      applicationOwner:
        "Technical Owner / RCA Owner: GK Maganty (206-227-1134) • ITS System Owners: Sean Duggan (Sean.Duggan@alaskaair.com; phone: Not verified), Ben Shocki (425-273-1560), Michael Dunn (email/phone: Not verified) • Accountable Director: Reid Childress (Reid.Childress@alaskaair.com; phone: Not verified)",
      onCallSupport:
        "On-Call: ITS Ops 360 AirtrAK. AKS issues: ITS Automated Services",
      systemAdministration:
        "On-Call: ITS Ops 360 AirtrAK • AKS issues: ITS Automated Services",
      businessOwner:
        "Ben Shocki (ITS Flight Operations) • Business Owners (24/7): Alaska SOC (NOD) / Horizon SOC (QX Flight Controller)",
      passwordSupport: "Service Desk: 877-238-1077",
      everbridgeContacts:
        "Everbridge Focal: TJ Banakes, 253-653-5097. Backup: Katie Michel, 971-235-0986"
    },
    incidentHistory: [
      {
        id: "INC00008592 & INC3416538",
        date: "2026-10-21",
        duration: "1 hr 55 min",
        severity: "RRT0 / Sev 1",
        title: "HA SOCC (Hawaiian operations center) lost access to AirTrak",
        rootCause:
          "HA SOCC (Hawaiian operations center) lost access. INC00008592 lasted 1 hr 55 min. INC3416538 was a separate access issue.",
        resolution: "Use the Island browser if Chrome access fails (worked during INC00008592)."
      },
      {
        id: "MI6574 & INC00014511",
        date: "2026-10",
        duration: "Documented Incident",
        severity: "High",
        title: "Crew info doesn't load in AirTrak (QX crew latency)",
        rootCause:
          "Crew info doesn't load. Examples: MI6574, and INC00014511 (QX crew latency).",
        resolution: "Investigated Crew APIs (CrewOnFlight, CrewRoster) from JCTE / AIMS."
      },
      {
        id: "ExpressRoute Outage (2026-08-24)",
        date: "2026-08-24",
        duration: "Documented Outage",
        severity: "High",
        title: "Azure ExpressRoute outage affected AirTrak",
        rootCause: "An ExpressRoute outage affected AirTrak on 2026-08-24.",
        resolution: "Restored ExpressRoute / network health."
      }
    ],
    relatedDocuments: [
      {
        title: "aoc-runbook.docx",
        type: "Primary Source - AOC / AirTrak Operations Runbook (Word)",
        owner: "ITS Ops 360 AirtrAK",
        updated: "2026-10-07",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B8D1A1BF2-8EA2-4B25-9EDF-DD7EB1E5265B%7D&file=aoc-runbook.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Airtrak_System_Summary.docx",
        type: "Primary Source - AirTrak System Summary (Word)",
        owner: "ITS Ops 360 AirtrAK",
        updated: "2026-03-05",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B8136D3C8-9D11-4793-AEFC-1C157EA7CB97%7D&file=Airtrak_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Airtrak_Triage_Troubleshooting.docx",
        type: "Primary Source - AirTrak Triage & Troubleshooting (Word)",
        owner: "ITS Ops 360 AirtrAK",
        updated: "2026-10-21",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BEBCEF9A6-65BB-492A-87BC-53AF2E8E19CA%7D&file=Airtrak_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "AirTrak System Summary.docx",
        type: "Primary Source - AirTrak System Summary (Word)",
        owner: "ITS Ops 360 AirtrAK",
        updated: "2026-09-22",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B419ACCEF-8571-4454-AE4D-E2C0962663E6%7D&file=AirTrak%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "RRT0 -21 Oct - INC00008592 - AirTrak Intermittent Availability Issue.docx",
        type: "Additional Source - RRT0 INC00008592 Post-Incident Review (Word)",
        owner: "ITS Sev1 Response",
        updated: "Not verified (event 2026-10-21)",
        url: "https://alaskaair.sharepoint.com/sites/ITSSev1Response/_layouts/15/Doc.aspx?sourcedoc=%7BFD78FD98-7F7D-40CC-9311-349271FEF320%7D&file=RRT0%20%E2%80%9321%20Oct%20-%20INC00008592%20%E2%80%93%20AirTrak%20Intermittent%20Availability%20Issue.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "AS+HA OPL 2026-10-26.pptx",
        type: "Additional Source - AS+HA Operational Review (PowerPoint)",
        owner: "ASICS / IO",
        updated: "Not verified (deck 2026-10-26)",
        url: "https://alaskaair.sharepoint.com/sites/ASICS/IO/_layouts/15/Doc.aspx?sourcedoc=%7B0CC90074-BCC7-4C2E-B494-2DB0AC2D679D%7D&file=AS%2BHA%20OPL%202026-10-26.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Executive Summary of Incidents 2025-12 to Current Date.xlsx",
        type: "Additional Source - Executive Summary of Incidents (Excel)",
        owner: "ITS Production Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7BE5D240DC-3123-4D8D-8A59-CF1533D32C5B%7D&file=Executive%20Summary%20of%20Incidents%202025-12%20to%20Current%20Date.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      }
    ]
  },
  aims: {
    id: "aims",
    name: "AIMS (Horizon Crew Scheduling)",
    breadcrumbTrail: [
      "Ground Stop Applications",
      "AIMS (Horizon Crew Scheduling)",
      "Application Impact Details"
    ],
    pageTitle: "AIMS (Horizon Crew Scheduling) - Application Impact Details",
    pageSubtitle:
      "AIMS manages Horizon Air pilot and flight attendant crew scheduling, tracking, and eCrew web access.",
    applicationsTabTitle: "AIMS (Aviation Information Management System / Horizon Crew Scheduling / eCrew)",
    applicationsTabSubheading: "Applications & Systems (AIMS Components)",
    applicationsTabSubtitle:
      "Also called Horizon Crew Scheduling / Tracking, and eCrew for the web app. Ground Stop; the scheduler app (through Citrix) is Sev 1 and the eCrew web app is Sev 2.",
    applicationsCardSubtitle:
      "This list shows the core AIMS components (AIMS scheduler client, eCrew web app, AIMS Job Scheduler, and QxCrewTripUpdateSvc), their business functions, impact if down, direct dependencies, and ITS owners.",
    dependenciesTabTitle: "AIMS (Horizon Crew Scheduling) - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream systems sending data to AIMS, downstream consumers relying on AIMS data, and SQL Server/App Servers/Job Scheduler/Citrix/DMZ infrastructure.",
    status: "Active",
    lastUpdated: "Nov 05, 2026",
    subtitle:
      "AIMS (Aviation Information Management System). Also called Horizon Crew Scheduling / Tracking, and eCrew for the web app · Criticality: Ground Stop. The scheduler app (through Citrix) is Sev 1; the eCrew web app is Sev 2",
    company: "AIMS, based in Athens, Greece",
    website: "eCrew: ecrew.horizonair.com",
    category:
      "Crew: scheduling pilots and flight attendants (FAs) for Horizon, including bids and trip trades. QX only",
    itsTeam: "ITS COG Crew Support (Sue Rawlings). Technical Owner: Adam Kalb",
    logo: "public/vendors/aims.jpg",
    impactSummary: {
      confirmed: 0,
      potential: 4,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title:
        "Criticality: Ground Stop - The scheduler app (through Citrix) is Sev 1; the eCrew web app is Sev 2",
      message:
        "AIMS is the system of record for Horizon crew schedules. If it goes down, QX schedulers can't manage crews, and crew data stops flowing to VisOps, AirTrak and payroll. URL: eCrew: ecrew.horizonair.com",
      description:
        "AIMS is the system of record for Horizon crew schedules. If it goes down, QX schedulers can't manage crews, and crew data stops flowing to VisOps, AirTrak and payroll.",
      updatedAgo: "Updated from AIMS HorizonCrewTracking_System_Summary_6.10.25 & Triage_Troubleshooting_6.10.25"
    },
    impactedSystems: [
      {
        id: "aims-scheduler-client",
        name: "AIMS scheduler client",
        subName: "(Citrix or Desktop FAT Client)",
        appTabSubName: "(Citrix or Desktop FAT Client)",
        description:
          "Used by schedulers and planners through Citrix or a desktop (FAT) client",
        appTabDescription:
          "Used by schedulers and planners through Citrix or a desktop (FAT) client",
        shortDescription:
          "Used by schedulers and planners through Citrix or a desktop (FAT) client",
        businessFunction: "QX crew scheduling and tracking",
        impact: "Sev 1: schedulers can't work",
        impactIfDown: "Sev 1: schedulers can't work",
        dependencies: "Citrix, AIMS SQL database",
        keyDependencies: "Citrix, AIMS SQL database",
        owner: "ITS COG Crew Support",
        technicalOwner: "ITS COG Crew Support",
        status: "Potential"
      },
      {
        id: "aims-ecrew-web-app",
        name: "eCrew web app",
        subName: "(DMZ - Two Web Servers)",
        appTabSubName: "(DMZ - Two Web Servers)",
        description: "Crew-facing site in the DMZ, hosted on two web servers",
        appTabDescription: "Crew-facing site in the DMZ, hosted on two web servers",
        shortDescription: "Crew-facing site in the DMZ, hosted on two web servers",
        businessFunction: "Schedules, bidding, trip trades",
        impact: "Sev 2: crew can't view or trade trips",
        impactIfDown: "Sev 2: crew can't view or trade trips",
        dependencies: "Web servers, AIMS database",
        keyDependencies: "Web servers, AIMS database",
        owner: "ITS COG Crew Support",
        technicalOwner: "ITS COG Crew Support",
        status: "Potential"
      },
      {
        id: "aims-job-scheduler",
        name: "AIMS Job Scheduler",
        subName: "(SEAPRAIMSJS10 - Job 174 & Job 203)",
        appTabSubName: "(SEAPRAIMSJS10 - Job 174 & Job 203)",
        description:
          "Runs data feed jobs on SEAPRAIMSJS10, such as Job 174 and Job 203",
        appTabDescription:
          "Runs data feed jobs on SEAPRAIMSJS10, such as Job 174 and Job 203",
        shortDescription:
          "Runs data feed jobs on SEAPRAIMSJS10, such as Job 174 and Job 203",
        businessFunction: "Feeds to and from VisOps; credit sort list",
        impact: "Crew and flight data goes stale",
        impactIfDown: "Crew and flight data goes stale",
        dependencies: "fltopsfs file share",
        keyDependencies: "fltopsfs file share",
        owner: "AIMS Admins / ITS COG Crew",
        technicalOwner: "AIMS Admins / ITS COG Crew",
        status: "Potential"
      },
      {
        id: "aims-qxcrewtripupdatesvc",
        name: "QxCrewTripUpdateSvc",
        subName: "(Windows Service on TUKVVAPP22)",
        appTabSubName: "(Windows Service on TUKVVAPP22)",
        description: "Windows service on TUKVVAPP22",
        appTabDescription: "Windows service on TUKVVAPP22",
        shortDescription: "Windows service on TUKVVAPP22",
        businessFunction: "Sends crew info from AIMS to VisOps",
        impact: "Crew info missing downstream",
        impactIfDown: "Crew info missing downstream",
        dependencies: "crewinfotoday.txt file from Job 174",
        keyDependencies: "crewinfotoday.txt file from Job 174",
        owner: "ITS COG Crew Support",
        technicalOwner: "ITS COG Crew Support",
        status: "Potential"
      }
    ],
    upstreamDependencies: [
      "VisOps flight schedule and flight events (MQ QMMFP)",
      "Sabre SSIM schedule files, PeopleSoft HCM employee data, FTMS (pilot training), Sabre CrewQual (FA training)",
      "Navblue crew bidding, Jeppesen trip optimizer"
    ],
    downstreamConsumers: [
      "VisOps crew info, through Job 174 and QxCrewTripUpdateSvc",
      "AirTrak Crew tab. This failed in August 2026 after the AIMS v531 change",
      "CrewTime, which sends time card data to PeopleSoft for payroll",
      "eCrew and QX crew members"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Upstream feeds (VisOps flight schedule/events via MQ QMMFP, Sabre SSIM/PeopleSoft HCM/FTMS/Sabre CrewQual, Navblue crew bidding & Jeppesen trip optimizer) flowing into AIMS to deliver QX crew data to VisOps, AirTrak Crew tab, CrewTime/PeopleSoft payroll, eCrew, and QX crew members.",
      diagramUpstream: [
        {
          id: "aims-up-1",
          name: "VisOps Flight Schedule & Events",
          subtitle: "MQ QMMFP",
          iconType: "transfer"
        },
        {
          id: "aims-up-2",
          name: "Sabre SSIM, PeopleSoft HCM, FTMS & CrewQual",
          subtitle: "Schedules, employee data & pilot/FA training",
          iconType: "database"
        },
        {
          id: "aims-up-3",
          name: "Navblue & Jeppesen Trip Optimizer",
          subtitle: "Crew bidding & trip optimization",
          iconType: "network"
        }
      ],
      diagramServices: [
        "AIMS Scheduler Client (Citrix / FAT)",
        "eCrew Web App (DMZ)",
        "AIMS Job Scheduler (SEAPRAIMSJS10)",
        "QxCrewTripUpdateSvc (TUKVVAPP22)"
      ],
      diagramDownstream: [
        {
          id: "aims-down-1",
          name: "VisOps Crew Info",
          subtitle: "Through Job 174 & QxCrewTripUpdateSvc",
          iconType: "database"
        },
        {
          id: "aims-down-2",
          name: "AirTrak Crew Tab",
          subtitle: "Real-time AOC crew visibility",
          iconType: "nodes"
        },
        {
          id: "aims-down-3",
          name: "CrewTime / PeopleSoft Payroll",
          subtitle: "Sends time card data for payroll",
          iconType: "doc"
        },
        {
          id: "aims-down-4",
          name: "eCrew & QX Crew Members",
          subtitle: "Schedules, bidding & trip trades",
          iconType: "users"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 3, tone: "red" },
        { label: "Downstream Consumers", count: 4, tone: "green" },
        { label: "AIMS Components", count: 4, tone: "blue" },
        { label: "Infrastructure Components", count: 6, tone: "purple" }
      ],
      keyTakeaways: [
        "AIMS is the system of record for Horizon crew schedules. If it goes down, QX schedulers can't manage crews, and crew data stops flowing to VisOps, AirTrak and payroll."
      ],
      upstreamTable: [
        {
          id: "aims-upt-1",
          name: "VisOps flight schedule and flight events (MQ QMMFP)",
          description: "Provides flight schedule and real-time flight events to AIMS via MQ QMMFP.",
          type: "Internal / Messaging",
          impact: "Flight schedule and event updates in AIMS become stale."
        },
        {
          id: "aims-upt-2",
          name: "Sabre SSIM schedule files, PeopleSoft HCM employee data, FTMS (pilot training), Sabre CrewQual (FA training)",
          description: "Feeds schedule files, employee records, and pilot/FA qualification and training data into AIMS.",
          type: "Internal / Enterprise Feeds",
          impact: "Employee profiles, qualifications, and schedule imports are not updated."
        },
        {
          id: "aims-upt-3",
          name: "Navblue crew bidding, Jeppesen trip optimizer",
          description: "Supplies crew bidding awards and optimized pairings into AIMS.",
          type: "External / Crew Planning",
          impact: "Crew bid awards and pairing imports into AIMS are delayed."
        }
      ],
      downstreamTable: [
        {
          id: "aims-dwt-1",
          name: "VisOps crew info, through Job 174 and QxCrewTripUpdateSvc",
          description: "Job 174 generates crewinfotoday.txt and QxCrewTripUpdateSvc sends QX crew info to VisOps.",
          type: "Internal / Flight Ops",
          impact: "Crew info missing downstream in VisOps."
        },
        {
          id: "aims-dwt-2",
          name: "AirTrak Crew tab. This failed in August 2026 after the AIMS v531 change",
          description: "Displays Horizon crew assignments in the AirTrak Crew tab.",
          type: "Internal / AOC Control",
          impact: "AirTrak Crew tab gets stuck loading; Dispatch must use manual crew change notices."
        },
        {
          id: "aims-dwt-3",
          name: "CrewTime, which sends time card data to PeopleSoft for payroll",
          description: "Transfers QX crew time card data to PeopleSoft for payroll processing.",
          type: "Internal / Payroll",
          impact: "Payroll time card data from AIMS is delayed."
        },
        {
          id: "aims-dwt-4",
          name: "eCrew and QX crew members",
          description: "Horizon pilots and flight attendants accessing schedules, bidding, and trip trades via eCrew.",
          type: "Internal / Crew Members",
          impact: "Sev 2: crew can't view schedules or trade trips."
        }
      ],
      infrastructureTable: [
        {
          id: "aims-inf-1",
          component: "SQL Server",
          description: "aims.sql.insideaag.com,1450 (Windows authentication)",
          owner: "SQL DBA / ITS COG Crew Support",
          impact: "Core AIMS database; if down or at 100% CPU, AIMS, eCrew, and downstream feeds fail."
        },
        {
          id: "aims-inf-2",
          component: "App servers",
          description: "seapraimsapp21/22, tukpraimsapp20/21/22",
          owner: "Compute & Platforms / ITS COG Crew Support",
          impact: "Hosts AIMS application services across SEA and TUK."
        },
        {
          id: "aims-inf-3",
          component: "Job Scheduler server & File share",
          description:
            "Job Scheduler server: SEAPRAIMSJS10. File share: \\fltopsfs.alaskaair.com\\FLTOPS\\AIMS",
          owner: "AIMS Admins / ITS COG Crew",
          impact: "Runs data feed jobs such as Job 174 and Job 203 and stores crewinfotoday.txt."
        },
        {
          id: "aims-inf-4",
          component: "Citrix, plus DMZ web servers for eCrew",
          description: "Citrix, plus DMZ web servers for eCrew",
          owner: "Citrix Team / Compute & Platforms",
          impact: "Citrix delivers the AIMS scheduler client; DMZ web servers host eCrew."
        },
        {
          id: "aims-inf-5",
          component: "Monitoring",
          description:
            "AlarmsOne / Zenoss, Sumo Logic (QXCrewTripsUpdateService alert), Dynatrace",
          owner: "ITS COG Crew Support / SRE",
          impact: "Monitors SQL database availability, QxCrewTripUpdateSvc logs, and server health."
        },
        {
          id: "aims-inf-6",
          component: "Firewall / network rules",
          description:
            "Not verified (Citrix/desktop access and required AD group TS_AIMS confirmed; exact approved firewall rules, SQL port 1450 mapping, DMZ rules, and server connection matrix not verified)",
          owner: "ITS Network",
          impact:
            "Network connectivity between Citrix/FAT clients, DMZ eCrew web servers, app servers, and SQL Server aims.sql.insideaag.com,1450 (exact firewall rules: Not verified)"
        }
      ]
    },
    typicalBusinessImpact: [
      "QX schedulers can't log in or schedule crews (Sev 1)",
      "Crew can't use eCrew for schedules or trades (Sev 2)",
      "Crew info doesn't reach VisOps or AirTrak",
      "In August 2026, AIMS v531 (CR131493) pushed SQL CPU to 100%. The AirTrak Crew tab got stuck loading, and Dispatch used manual crew change notices"
    ],
    knownWorkarounds: [
      "If Citrix fails, use the FAT client",
      "Make changes in the business continuity (BC) environment",
      "Manual crew change notifications",
      "Roll back the most recent AIMS release"
    ],
    validationChecklist: [
      "Confirm scope: schedulers (AIMS), crew (eCrew), or both. Notify the Business Focal.",
      "Test logging in through Citrix. If that fails, test the FAT client. If only Citrix fails, engage the Citrix team (CitrixTeam@alaskaair.com).",
      "Test eCrew. If eCrew works, it's not Sev 1.",
      "Check that the SQL database (aims.sql.insideaag.com) is up in AlarmsOne / Zenoss. If it's down, call the SQL DBA.",
      "Ask the business about recent code rollouts that might need a rollback.",
      "eCrew fails only off-network: escalate to Network. One web server down: call Compute & Platforms.",
      "Crew info feed: check the logs at \\Tukvvapp22\\Log\\Crew\\QxCrewTripUpdateSvc and confirm Job 174 creates crewinfotoday.txt.",
      "VisOps-to-AIMS file stale: wait 30 minutes, archive or rename the file, and ask the AIMS Admin to clear the job logs.",
      "If the problem continues, open a Sev 2 and page the ITS COG Crew Support on-call to restart the job or the AIMS NG services."
    ],
    vendorContacts: {
      companyNote: "AIMS, based in Athens, Greece",
      categoryNote:
        "Application Name: AIMS (Aviation Information Management System). Also called Horizon Crew Scheduling / Tracking, and eCrew for the web app • Criticality: Ground Stop. The scheduler app (through Citrix) is Sev 1; the eCrew web app is Sev 2 • URL: eCrew: ecrew.horizonair.com",
      supportEmail:
        "aims@aims.aero (conflict across sources: ITS Vendor Information - 2026.xlsx lists aims@aims.aero; older summary lists aims@aims.aero and Support247@aims.aero; 2026-09-14 summary lists aims@aimsmail.com)",
      supportEmailNote:
        "Email conflict across sources: aims@aims.aero (vendor workbook & older summary), Support247@aims.aero (older summary), and aims@aimsmail.com (2026-09-14 summary)",
      supportPhone:
        "+30 210 940 2300 (00-30-210-940-2300 in vendor workbook). Voicemail: 1-305-468-6336",
      technicalSupport:
        "AIMS (Athens): +30 210 940 2300 (00-30-210-940-2300). Voicemail: 1-305-468-6336 • Vendor emails (conflict in sources): aims@aims.aero, Support247@aims.aero, aims@aimsmail.com • The Business Focal (Mick Niemann) handles all escalation to the vendor",
      accountManager:
        "Not verified (blank in vendor workbook and system summaries)",
      namedEscalationContact:
        "The Business Focal (Mick Niemann) handles all escalation to the vendor",
      supportHours:
        "Not verified (support-hours cells in system summary are blank; 4-hour statement is operational impact tolerance, not a support or contractual SLA)",
      escalation:
        "Vendor Contacts:\n• AIMS (Athens): +30 210 940 2300 (00-30-210-940-2300 in vendor workbook). Voicemail: 1-305-468-6336\n• Vendor emails (conflict across sources): aims@aims.aero (vendor workbook & older summary), Support247@aims.aero (older summary), aims@aimsmail.com (2026-09-14 summary)\n• The Business Focal (Mick Niemann) handles all escalation to the vendor\n• Account Manager: Not verified (blank in vendor workbook and system summaries)\n\nCommunication Guidelines:\n• The Business Focal decides when to contact AIMS support.\n• When escalating, give: browser version, whether it's eCrew or AIMS, and for AIMS, whether the user is on desktop or Citrix, plus their user ID and IP address.\n• For functional issues, collect screenshots, steps to reproduce and error messages, then email the System Admin.",
      communicationGuidelines: [
        "The Business Focal decides when to contact AIMS support.",
        "When escalating, give: browser version, whether it's eCrew or AIMS, and for AIMS, whether the user is on desktop or Citrix, plus their user ID and IP address.",
        "For functional issues, collect screenshots, steps to reproduce and error messages, then email the System Admin."
      ],
      responseSlas: [
        {
          label: "Sev 1 / Sev 2",
          priority: "Sev 1 / Sev 2",
          level: "Scheduler & eCrew / VisOps Feed Severity",
          description:
            "Sev 1: AIMS scheduler app down. Sev 2: eCrew, or the crew feed to VisOps failing",
          target: "Sev 1: AIMS scheduler app down | Sev 2: eCrew, or the crew feed to VisOps failing",
          value:
            "Sev 1: AIMS scheduler app down. Sev 2: eCrew, or the crew feed to VisOps failing"
        },
        {
          label: "Sev 3",
          priority: "Sev 3",
          level: "Data Upload / Download Issues",
          description: "Sev 3: upload or download data issues",
          target: "Sev 3: upload or download data issues",
          value: "Sev 3: upload or download data issues"
        },
        {
          label: "Response times and update cadence",
          priority: "Response times and update cadence",
          level: "Response & Update Cadence",
          description:
            "Not verified (AIMS scheduler is Sev 1, eCrew is Sev 2; 4-hour statement is operational impact tolerance, not a contractual SLA; numerical response times and bridge update cadence: Not verified)",
          target:
            "Sev 1 (AIMS) / Sev 2 (eCrew) | Numerical SLA & cadence: Not verified",
          value:
            "Not verified (AIMS scheduler is Sev 1, eCrew is Sev 2; 4-hour statement is operational impact tolerance, not a contractual SLA; numerical response times and bridge update cadence: Not verified)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS COG Crew Support (Sue Rawlings). Technical Owner: Adam Kalb",
      itsTeamNote:
        "On-Call: ITS COG Crew Support (Shared mailbox: aims.support@horizonair.com) • Listed with Adam Kalb in Critical Apps: Kirk Phippen (phone/email: Not verified) • Accountable Director (from the August 2026 RCA): Guillermo Todd (phone/email: Not verified)",
      applicationOwner:
        "Technical Owner: Adam Kalb (Adam.Kalb@alaskaair.com, +1 206-392-5144) • ITS COG Crew Support: Sue Rawlings (253-341-1173) • Shared AIMS Support: aims.support@horizonair.com • Listed with Adam Kalb in Critical Apps: Kirk Phippen (phone/email: Not verified) • Accountable Director: Guillermo Todd (phone/email: Not verified)",
      onCallSupport: "ITS COG Crew Support",
      systemAdministration:
        "AIMS Admins / Business SMEs: Bethany Dundon (503-866-4664 cell, Bethany.dundon@alaskaair.com), Shannon McCarthy (Shannon.mccarthy@alaskaair.com; phone: Not verified) • Shared AIMS Support: aims.support@horizonair.com",
      businessOwner:
        "Business Focal: Mick Niemann, cell 360-241-6902 (work-phone conflict across sources: 206-225-2859 in 2026-09-14 summary vs 503-384-4557 in older summary)",
      passwordSupport:
        "Validation credentials omitted for security - see Horizon Crew Scheduling (AIMS) General Validation Steps.docx in Related Documents",
      everbridgeContacts:
        "Business Focal: Mick Niemann, cell 360-241-6902 (work-phone conflict: 206-225-2859 in 2026-09-14 summary vs 503-384-4557 in older summary) • On-Call: ITS COG Crew Support"
    },
    incidentHistory: [
      {
        id: "CR131493 (August 2026)",
        date: "2026-08-24",
        duration: "Documented Outage",
        severity: "Sev 1 / Sev 2",
        title: "AIMS v531 (CR131493) pushed SQL CPU to 100%; AirTrak Crew tab stuck loading",
        rootCause:
          "In August 2026, AIMS v531 (CR131493) pushed SQL CPU to 100%. The AirTrak Crew tab got stuck loading, and Dispatch used manual crew change notices.",
        resolution: "Dispatch used manual crew change notices; release rollback / SQL mitigation applied."
      }
    ],
    relatedDocuments: [
      {
        title: "AIMS HorizonCrewTracking_System_Summary_6.10.25.docx",
        type: "Primary Source - AIMS Horizon Crew Tracking System Summary (Word)",
        owner: "ITS COG Crew Support",
        updated: "2026-09-14",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BCB3AC3FD-E25D-494F-9C39-BB096BE2A5D0%7D&file=AIMS%20HorizonCrewTracking_System_Summary_6.10.25.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "AIMS HorizonCrewTracking_Triage_Troubleshooting_6.10.25.docx",
        type: "Primary Source - AIMS Horizon Crew Tracking Triage & Troubleshooting (Word)",
        owner: "ITS COG Crew Support",
        updated: "Not verified (filename 2025-06-10)",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BB24A215B-50CE-4158-85F5-D088F78EC108%7D&file=AIMS%20HorizonCrewTracking_Triage_Troubleshooting_6.10.25.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Horizon Crew Scheduling (AIMS) General Validation Steps.docx",
        type: "Primary Source - Horizon Crew Scheduling (AIMS) General Validation Steps (Word)",
        owner: "ITS COG Crew Support",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BF0059D76-1675-4F9A-B405-BE461F39F745%7D&file=Horizon%20Crew%20Scheduling%20(AIMS)%20General%20Validation%20Steps.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Multiple crew members unable to access eCrew (web application).docx",
        type: "Primary Source - eCrew Web Application Troubleshooting (Word)",
        owner: "ITS COG Crew Support",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B81FD7BE2-B035-4D26-A2AD-7C66E336FB25%7D&file=Multiple%20crew%20members%20unable%20to%20access%20eCrew%20(web%20application).docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "AIMS HorizonCrewTracking System Summary.docx",
        type: "Primary Source - AIMS Horizon Crew Tracking System Summary (Word)",
        owner: "ITS Knowledge Management",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BF62C5D1F-D2DF-4E9B-A3A8-964A1FB1E9C4%7D&file=AIMS%20HorizonCrewTracking%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Aims Application Validation Steps.docx",
        type: "Additional Source - AIMS Application Validation Steps (Word)",
        owner: "ITS COG Crew Support",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B0F31C9AC-DEEB-48B2-9BF8-6F583B2656E3%7D&file=Aims%20Application%20Validation%20Steps.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "AIMS application is running but certain functionality isnt performing as expected.docx",
        type: "Additional Source - AIMS Functionality Troubleshooting (Word)",
        owner: "ITS COG Crew Support",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BE3FFE844-BC6D-4085-87E7-F5FA9CC1104C%7D&file=AIMS%20application%20is%20running%20but%20certain%20functionality%20isnt%20performing%20as%20expected.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "AIMS_LogicalView.pdf",
        type: "Architecture Diagram - AIMS Logical View (PDF)",
        owner: "ITS COG Crew Support",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/Horizon%20Crew%20Scheduling/AIMS_LogicalView.pdf?web=1"
      },
      {
        title: "AS+HA OPL 2026-08-24.pptx",
        type: "Additional Source - AS+HA Operational Review (PowerPoint)",
        owner: "ASICS / IO",
        updated: "Not verified (deck 2026-08-24)",
        url: "https://alaskaair.sharepoint.com/sites/ASICS/IO/_layouts/15/Doc.aspx?sourcedoc=%7B00FAA8E7-643B-4CA3-B799-88C3D46E82B7%7D&file=AS%2BHA%20OPL%202026-08-24.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "SOP Review and Closure Tracker - 2026.xlsx",
        type: "Additional Source - SOP Review and Closure Tracker 2026 (Excel)",
        owner: "ITS Production Operations",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7B1EA397F2-0B72-4BC6-A585-26131B554F44%7D&file=SOP%20Review%20and%20Closure%20Tracker%20-%202026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Critical Applications.xlsx",
        type: "Additional Source - Critical Applications (Excel)",
        owner: "ITS Production Operations",
        updated: "Not verified",
        url: "https://alaskaair-my.sharepoint.com/personal/suraj_mondal_alaskaair_com/_layouts/15/Doc.aspx?sourcedoc=%7B38D6135B-3F6C-44B6-9865-7897353CABCA%7D&file=Critical%20Applications.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Critical Apps.xlsx",
        type: "Additional Source - Critical Apps (Excel)",
        owner: "ITS Production Operations",
        updated: "Not verified",
        url: "https://alaskaair-my.sharepoint.com/personal/srihari_gangisetti_alaskaair_com/_layouts/15/Doc.aspx?sourcedoc=%7B94800A82-5BF3-447D-8FCA-DF019714667D%7D&file=Critical%20Apps.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ITS Vendor Information - 2026.xlsx",
        type: "Additional Source - ITS Vendor Information 2026 (Excel)",
        owner: "ITS Production Operations",
        updated: "2026-10-31",
        url: "https://alaskaair-my.sharepoint.com/personal/srihari_gangisetti_alaskaair_com/_layouts/15/Doc.aspx?sourcedoc=%7B4D335542-0341-4922-9257-7585E2C2CA3F%7D&file=ITS%20Vendor%20Information%20-%202026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Dynatrace_Observations_Tracker.xlsx",
        type: "Additional Source - Dynatrace Observations Tracker (Excel)",
        owner: "SRE ITS Hub",
        updated: "Not verified",
        url: "https://alaskaair.sharepoint.com/sites/SREITSHub/_layouts/15/Doc.aspx?sourcedoc=%7B499B4519-7C21-4280-A6D3-FACB3EED8544%7D&file=Dynatrace_Observations_Tracker.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      }
    ]
  },
  "aims-vendor": {
    id: "aims-vendor",
    name: "AIMS",
    breadcrumbTrail: ["Vendors", "AIMS", "Vendor Impact"],
    pageTitle: "AIMS - Vendor Impact Details",
    pageSubtitle:
      "AIMS supports Horizon Air crew scheduling, crew tracking, and eCrew operational workflows.",
    applicationsTabTitle: "AIMS",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "AIMS is documented internally as a Maintenance & Engineering application with integrations into operational Crew-data workflows, participating in the backend path used to populate Crew information in AirTrAK and the AIMS-to-VisOps feed.",
    applicationsCardSubtitle:
      "This list shows Alaska applications and systems with documented integration/dependency relationships with AIMS.",
    dependenciesTabTitle: "AIMS - Dependencies",
    dependenciesTabSubtitle:
      "Upstream dependencies, downstream consumers, API Management → SDP → AIMS investigation flow, and infrastructure components for AIMS.",
    status: "Active",
    lastUpdated: "Nov 02, 2026",
    subtitle: "Maintenance & Engineering (Operational Crew-Data & AirTrAK / VisOps Integration)",
    company: "(Add Full Company Name)",
    website: "(Add Website/Support Portal URL)",
    category: "Maintenance & Engineering",
    itsTeam: "COG Crew on-call",
    logo: "public/vendors/aims.jpg",
    impactSummary: {
      confirmed: 0,
      potential: 4,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title: "Potential Impact on 4 Alaska Systems (Maintenance & Engineering / Crew Integration)",
      message:
        "An internal ground-stop application inventory explicitly categorizes AIMS under Maintenance & Engineering. Production incident evidence shows AIMS participating in the backend path (API Management → SDP → AIMS) used to populate Crew information in AirTrAK, with an AIMS-to-VisOps feed (QXCrewTripsUpdateService) also explicitly monitored.",
      description:
        "An internal ground-stop application inventory explicitly categorizes AIMS under Maintenance & Engineering. Production incident evidence shows AIMS participating in the backend path (API Management → SDP → AIMS) used to populate Crew information in AirTrAK, with an AIMS-to-VisOps feed (QXCrewTripsUpdateService) also explicitly monitored.",
      updatedAgo: "Updated from Operational Incident & OPL Evidence"
    },
    impactedSystems: [
      {
        id: "airtrak-crew-information",
        name: "AirTrAK Crew Information",
        subName: "(AirTrAK Crew / Dispatch Visibility)",
        appTabSubName: "(AirTrAK Crew / Dispatch Visibility)",
        description:
          "AirTrAK Crew functionality has documented integration/dependency relationships with AIMS. During an August 2026 incident, teams specifically investigated AIMS integration, QX crew/roster data, routing and configuration.",
        appTabDescription:
          "AirTrAK Crew functionality has documented integration/dependency relationships with AIMS. During an August 2026 incident, teams specifically investigated AIMS integration, QX crew/roster data, routing and configuration.",
        businessFunction: "Provides crew information to AirTrAK users/Dispatch.",
        impact:
          "Users can be unable to retrieve Crew information through AirTrAK, reducing Dispatch visibility into crew data.",
        dependencies:
          "AIMS integration, Crew Roster/Crew-on-Flight services, API Management, SDP, CrewScheduleWS, and CrewSupportRS are documented in the incident investigation path.",
        status: "Potential",
        owner: "ITS OPS 360 AirTrAK Team / ITS Cog Crew Team"
      },
      {
        id: "qx-crew-trips-update-service",
        name: "QXCrewTripsUpdateService",
        subName: "(AIMS-to-VisOps Feed)",
        appTabSubName: "(AIMS-to-VisOps Feed)",
        description:
          "Internal operational documentation explicitly describes it as the AIMS to VISOPS Feed.",
        appTabDescription:
          "Internal operational documentation explicitly describes it as the AIMS to VISOPS Feed.",
        businessFunction: "Crew data integration between AIMS and VisOps.",
        impact: "(Add QXCrewTripsUpdateService impact)",
        dependencies: "AIMS and VisOps.",
        status: "Potential",
        owner: "(Add Internal ITS Owner)"
      },
      {
        id: "crew-schedule-ws",
        name: "CrewScheduleWS",
        subName: "(Backend Crew Service)",
        appTabSubName: "(Backend Crew Service)",
        description:
          "A backend Crew service examined during recurring AirTrAK/AIMS Crew Information incidents.",
        appTabDescription:
          "A backend Crew service examined during recurring AirTrAK/AIMS Crew Information incidents.",
        businessFunction: "Crew information/service processing.",
        impact:
          "AirTrAK Crew data can fail to load when the affected dependency chain is degraded.",
        dependencies:
          "AIMS-related crew-data integrations are part of the documented investigation.",
        status: "Potential",
        owner: "ITS Cog Crew Team"
      },
      {
        id: "crew-support-rs",
        name: "CrewSupportRS",
        subName: "(Backend Crew Support Service)",
        appTabSubName: "(Backend Crew Support Service)",
        description:
          "Another Crew backend service validated during the recurring AirTrAK/AIMS issue.",
        appTabDescription:
          "Another Crew backend service validated during the recurring AirTrAK/AIMS issue.",
        businessFunction: "Crew support/data service.",
        impact: "(Add CrewSupportRS-specific impact)",
        dependencies: "AIMS-related Crew integration path.",
        status: "Potential",
        owner: "ITS Cog Crew Team"
      }
    ],
    upstreamDependencies: [
      "Crew/Roster data.",
      "Crew-on-Flight / Crew Roster services.",
      "API Management → SDP → AIMS is explicitly documented as an investigation flow in the August incident.",
      "AIMS MQ is explicitly referenced operationally.",
      "TRAX is explicitly associated with the same AIMS operational escalation path."
    ],
    downstreamConsumers: [
      "AirTrAK Crew Information: Crew information can fail to load when AIMS-related backend dependencies are degraded.",
      "VisOps: Internal monitoring calls QXCrewTripsUpdateService an “AIMS to VISOPS Feed.”",
      "Dispatch: Reduced Crew-data visibility in AirTrAK was specifically documented as an operational impact.",
      "QX users/workflows: The August 19 incident was isolated to QX while Alaska users were reportedly operating normally, focusing investigation on QX-specific AIMS integrations/configuration."
    ],
    dependenciesTab: {
      overviewSubtitle:
        "This diagram shows the documented AIMS / Crew integration path investigated during August 2026 production incidents, including API Management → SDP → AIMS, CrewScheduleWS, CrewSupportRS, AIMS MQ, AirTrAK Crew Information, and the AIMS-to-VisOps feed (QXCrewTripsUpdateService).",
      diagramUpstream: [
        {
          id: "aims-dup-1",
          name: "Crew / Roster Data",
          subtitle: "QX & Crew Roster Sources",
          iconType: "ticket"
        },
        {
          id: "aims-dup-2",
          name: "Crew-on-Flight / Roster Services",
          subtitle: "Crew Service Calls",
          iconType: "doc"
        },
        {
          id: "aims-dup-3",
          name: "API Management → SDP → AIMS",
          subtitle: "Documented Investigation Flow",
          iconType: "transfer"
        },
        {
          id: "aims-dup-4",
          name: "AIMS MQ & TRAX",
          subtitle: "COG Crew On-Call Path",
          iconType: "network"
        }
      ],
      diagramServices: [
        "AIMS Application Instances",
        "AIMS Database",
        "QXCrewTripsUpdateService (TUKVVAPP22)",
        "CrewScheduleWS",
        "CrewSupportRS"
      ],
      diagramDownstream: [
        {
          id: "aims-ddn-1",
          name: "AirTrAK Crew Information",
          subtitle: "Crew / Queue Tab Population",
          iconType: "nodes"
        },
        {
          id: "aims-ddn-2",
          name: "VisOps",
          subtitle: "AIMS to VISOPS Feed",
          iconType: "database"
        },
        {
          id: "aims-ddn-3",
          name: "Dispatch",
          subtitle: "Crew-Data Visibility in AirTrAK",
          iconType: "team"
        },
        {
          id: "aims-ddn-4",
          name: "QX Users / Workflows",
          subtitle: "QX-Specific AIMS Integrations",
          iconType: "users"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 5, tone: "red" },
        { label: "Downstream Consumers", count: 4, tone: "green" },
        { label: "Impacted Applications", count: 4, tone: "blue" },
        { label: "Infrastructure Components", count: 9, tone: "purple" }
      ],
      keyTakeaways: [
        "AIMS is documented internally as a Maintenance & Engineering application with integrations into operational Crew-data workflows. Evidence from production incidents shows AIMS participating in the backend path used to populate Crew information in AirTrAK, with an AIMS-to-VisOps feed also explicitly monitored.",
        "The August 2026 incidents are particularly useful for your profile because they show the operational dependency chain involving AirTrAK, Crew services, API Management, SDP, AIMS, the AIMS database and VisOps."
      ],
      upstreamTable: [
        {
          id: "aims-upt-1",
          name: "Crew/Roster data",
          description: "QX and operational crew/roster data investigated in the AIMS/Crew integration path.",
          type: "Internal Data",
          impact: "Missing or stale crew/roster data prevents downstream crew display."
        },
        {
          id: "aims-upt-2",
          name: "Crew-on-Flight / Crew Roster services",
          description: "Backend Crew services queried for flight crew assignments.",
          type: "Internal Service",
          impact: "HTTP 500 or circuit-breaker failures prevent AirTrAK Crew retrieval."
        },
        {
          id: "aims-upt-3",
          name: "API Management → SDP → AIMS",
          description: "Explicitly documented as an investigation flow in the August incident.",
          type: "Internal Integration",
          impact: "Degradation along API Management → SDP → AIMS breaks Crew Roster calls."
        },
        {
          id: "aims-upt-4",
          name: "AIMS MQ",
          description: "Explicitly referenced operationally (routed to COG Crew on-call).",
          type: "Internal Messaging",
          impact: "AIMS MQ issues disrupt crew messaging/feed updates."
        },
        {
          id: "aims-upt-5",
          name: "TRAX",
          description: "Explicitly associated with the same AIMS operational escalation path.",
          type: "Related M&E System",
          impact: "Shares COG Crew on-call escalation path with AIMS MQ."
        }
      ],
      downstreamTable: [
        {
          id: "aims-dwt-1",
          name: "AirTrAK Crew Information",
          description: "AirTrAK Crew / Queue tab consuming AIMS-backed crew services.",
          type: "Internal Application",
          impact: "Crew information can fail to load when AIMS-related backend dependencies are degraded."
        },
        {
          id: "aims-dwt-2",
          name: "VisOps",
          description: "Internal monitoring calls QXCrewTripsUpdateService an “AIMS to VISOPS Feed.”",
          type: "Internal Application",
          impact: "AIMS-to-VisOps crew trips feed delayed or interrupted."
        },
        {
          id: "aims-dwt-3",
          name: "Dispatch",
          description: "Dispatch users relying on AirTrAK for real-time crew visibility.",
          type: "Internal Users",
          impact: "Reduced Crew-data visibility in AirTrAK was specifically documented as an operational impact."
        },
        {
          id: "aims-dwt-4",
          name: "QX users/workflows",
          description: "Horizon (QX) operational workflows using QX-specific AIMS integrations/configuration.",
          type: "Internal Users",
          impact: "The August 19 incident was isolated to QX while Alaska users were reportedly operating normally, focusing investigation on QX-specific AIMS integrations/configuration."
        }
      ],
      infrastructureTable: [
        {
          id: "aims-inf-1",
          component: "AIMS Database",
          description:
            "During an August incident, the Database team observed AIMS database CPU at 100% and a high volume of queries originating from AIMS application servers.",
          owner: "Database team",
          impact: "AIMS database CPU saturation (100%) acts as a performance bottleneck during Crew-service failures."
        },
        {
          id: "aims-inf-2",
          component: "AIMS Application Instances",
          description:
            "Restarts of AIMS application instances/services are documented as mitigation actions.",
          owner: "AIMS Admin Team / ITS Cog Crew Team",
          impact: "Unhealthy AIMS application instances require service restarts to stabilize Crew functionality."
        },
        {
          id: "aims-inf-3",
          component: "API Management / SDP",
          description:
            "Incident investigation traced Crew Roster/Crew-on-Flight calls through API Management → SDP → AIMS.",
          owner: "ITS Middleware / API Management",
          impact: "Transaction failures along API Management → SDP → AIMS block Crew data population."
        },
        {
          id: "aims-inf-4",
          component: "MQ",
          description:
            "Operational guidance says AIMS MQ issues should be routed to COG Crew on-call.",
          owner: "COG Crew on-call",
          impact: "AIMS MQ issues impact crew integration feeds; route to COG Crew on-call."
        },
        {
          id: "aims-inf-5",
          component: "TRAX",
          description: "Listed alongside AIMS MQ for COG Crew on-call engagement.",
          owner: "COG Crew on-call",
          impact: "Shares operational escalation path with AIMS MQ."
        },
        {
          id: "aims-inf-6",
          component: "Application server names",
          description:
            "(Add Application server names) (Sumo Logic alert example references TUKVVAPP22 for QXCrewTripsUpdateService)",
          owner: "AIMS Admin Team",
          impact: "(Add Application server impact)"
        },
        {
          id: "aims-inf-7",
          component: "Database server names",
          description: "(Add Database server names)",
          owner: "Database team",
          impact: "(Add Database server impact)"
        },
        {
          id: "aims-inf-8",
          component: "Firewall/network configuration",
          description: "(Add Firewall/network configuration)",
          owner: "ITS Network",
          impact: "(Add Firewall/network impact)"
        },
        {
          id: "aims-inf-9",
          component: "MQ queue names",
          description: "(Add MQ queue names)",
          owner: "COG Crew on-call",
          impact: "(Add MQ queue impact)"
        }
      ]
    },
    typicalBusinessImpact: [
      "AirTrAK users can be unable to retrieve Crew information.",
      "Dispatch can have reduced visibility into Crew data.",
      "The Crew/Queue tab can remain stuck loading instead of populating data.",
      "Intermittent Crew data failures can affect some flights while others continue working.",
      "One documented incident involved QX while Alaska users remained operational.",
      "AIMS database resource degradation was investigated as a possible performance bottleneck during Crew-service failures."
    ],
    knownWorkarounds: [
      "VisOps: During a documented AirTrAK Crew issue, Dispatch used VisOps where available as a temporary workaround.",
      "Manual Crew communication: Crew Scheduling used manual communication processes to deliver crew information during the August 19 incident.",
      "(Add other Known Workarounds)"
    ],
    vendorContacts: {
      companyNote:
        "The retrieved August incident discussion states that the AIMS vendor was engaged after internal Crew troubleshooting options were exhausted, but the returned evidence does not give the vendor name or contact details.",
      categoryNote:
        "An internal ground-stop application inventory explicitly categorizes AIMS under Maintenance & Engineering.",
      supportEmail: "(Add Vendor Support Email)",
      supportPhone: "(Add Vendor Support Phone Number)",
      technicalSupport: "(Add Vendor Support Desk)",
      accountManager: "(Add Account Manager)",
      namedEscalationContact: "(Add Escalation Contact)",
      supportHours: "(Add Support Service Hours)",
      escalation:
        "Vendor Support Desk: (Add Vendor Support Desk)\nVendor Support Phone: (Add Vendor Support Phone)\nVendor Support Email: (Add Vendor Support Email)\nEscalation Contact: (Add Escalation Contact)\nNote: The retrieved August incident discussion states that the AIMS vendor was engaged after internal Crew troubleshooting options were exhausted, but the returned evidence does not give the vendor name or contact details.",
      communicationGuidelines: [
        "AIMS alerts are documented as coming from Sumo Logic. An explicit example is QXCrewTripsUpdateService on TUKVVAPP22 (AIMS to VISOPS Feed).",
        "AIMS MQ/TRAX issues should be directed to COG Crew on-call.",
        "For broader production incidents, documented AIMS incidents used an RRT0/Sev2 bridge involving ProdOps, AirTrAK, Crew and AIMS teams.",
        "During one August event, the RRT0 was elevated to Sev2 while multiple ITS teams investigated and performed recovery actions."
      ],
      responseSlas: [
        {
          label: "Sev 1 initial response",
          value: "(Add Sev 1 initial response)"
        },
        {
          label: "Sev 1 update cadence",
          value: "(Add Sev 1 update cadence)"
        },
        {
          label: "Sev 2 initial response",
          value: "(Add Sev 2 initial response)"
        },
        {
          label: "Sev 2 update cadence",
          value: "(Add Sev 2 update cadence)"
        },
        {
          label: "Vendor SLA",
          value: "(Add Vendor SLA)"
        },
        {
          label: "Availability target",
          value: "(Add Availability target)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "COG Crew on-call",
      itsTeamNote:
        "COG Crew on-call is the documented contact for AIMS MQ or TRAX issues. Crew dependency support: ITS Cog Crew Team. AirTrAK dependency support: ITS OPS 360 AirTrAK Team.",
      applicationOwner: "(Add Named Application Owner)",
      onCallSupport:
        "AIMS MQ/TRAX escalation: COG Crew on-call • Crew dependency support: ITS Cog Crew Team • AirTrAK dependency support: ITS OPS 360 AirTrAK Team",
      systemAdministration:
        "AIMS Admin: AIMS Admin Team (engaged during documented Crew/AIMS troubleshooting) • Database support: Database team (participated when AIMS database CPU saturation was observed)",
      businessOwner: "(Add Business Owner)"
    },
    validationChecklist: [
      "Determine whether Crew information is failing in AirTrAK and whether the problem affects AS, QX, or both.",
      "Validate CrewScheduleWS and CrewSupportRS application-pool state.",
      "Review Crew Roster/Crew-on-Flight service errors, including reported HTTP 500/circuit-breaker failures.",
      "Trace the affected transaction through API Management → SDP → AIMS.",
      "Compare successful AS transactions against failing QX transactions when impact is QX-specific.",
      "Validate AIMS database performance. A documented incident showed the database CPU reaching 100% while receiving a high query volume from AIMS application servers.",
      "Review recent AIMS, middleware, network, service-account and configuration changes when applicable.",
      "For AIMS MQ or TRAX issues, engage COG Crew on-call.",
      "Validate Crew information in AirTrAK after mitigation and continue monitoring for intermittent failures."
    ],
    incidentHistory: [
      {
        id: "INC-AIMS-AUG24",
        date: "Aug 24, 2026 (OPL)",
        summary:
          "AirTrAK Crew incident where AIMS application instances and supporting services were restarted and Crew functionality subsequently stabilized.",
        severity: "Sev 2 / RRT0",
        resolution:
          "Restarted AIMS application instances and supporting Crew services; validated AirTrAK Crew functionality."
      },
      {
        id: "INC-AIMS-AUG19",
        date: "Aug 19, 2026",
        summary:
          "QX-specific AirTrAK Crew data failure with AIMS database CPU reaching 100% under high query volume from AIMS application servers.",
        severity: "Sev 2",
        resolution:
          "Traced API Management → SDP → AIMS path, mitigated database/application load, and used VisOps and manual Crew Scheduling communication as temporary workarounds."
      }
    ],
    relatedDocuments: [
      {
        title: "AS+HA OPL 2026-08-24.pptx",
        type: "Operations Review (PowerPoint)",
        owner: "ITS Operations / AirTrAK & Crew Teams",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ASICS/IO/_layouts/15/Doc.aspx?sourcedoc=%7B00FAA8E7-643B-4CA3-B799-88C3D46E82B7%7D&file=AS%2BHA%20OPL%202026-08-24.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1&EntityRepresentationId=03737752-62d1-437a-a465-b15f02abf83a"
      }
    ]
  },
  alvaria: {
    id: "alvaria",
    name: "Alvaria",
    breadcrumbTrail: [
      "Vendors",
      "Call Centers / Workforce Management",
      "Alvaria"
    ],
    pageTitle: "Alvaria - Vendor Impact Details",
    pageSubtitle:
      "Alvaria provides contact center workforce management, agent scheduling, and adherence tracking.",
    applicationsTabTitle: "Applications & Systems Using Alvaria",
    applicationsTabSubheading:
      "Overview of all Alaska Airlines Contact Center workforce-management and employee self-service applications that depend on Alvaria.",
    applicationsTabSubtitle:
      "Detailed breakdown of the 2 documented applications (Alvaria Workforce Management / Aspect WFM and Empower), primary capabilities, direct dependencies, and outage impact.",
    applicationsCardSubtitle:
      "2 documented applications supported by Call Center Technology",
    dependenciesTabTitle: "Alvaria - Dependencies",
    dependenciesTabSubtitle:
      "Upstream dependencies, downstream consumers, and infrastructure components for Alvaria (Contact Center Workforce Management & Empower).",
    status: "Active",
    lastUpdated: "Source-Verified Runbook",
    subtitle: "Call Centers / Workforce Management (Aspect WFM · Aspect WFO · Tier 2)",
    company: "Alvaria",
    website: "(Add Website/Support Portal URL)",
    category: "Call Centers / Workforce Management",
    itsTeam: "Call Center Technology",
    logo: "public/vendors/alvaria.jpg",
    impactSummary: {
      confirmed: 0,
      potential: 2,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title: "High Operational Impact if Alvaria is Unavailable",
      description:
        "Contact Center agents may be unable to view or modify schedules or pick up/trade shifts, and supervisors cannot properly administer overtime or release agents early-potentially affecting Contact Center staffing and revenue. Remote Desktop access used by Contact Center Operations can also fail independently even when the primary agent web page (https://alaska.via.aspect-cloud.net/WFO) is functional.",
      message:
        "Contact Center agents may be unable to view or modify schedules or pick up/trade shifts, and supervisors cannot properly administer overtime or release agents early-potentially affecting Contact Center staffing and revenue. Remote Desktop access used by Contact Center Operations can also fail independently even when the primary agent web page (https://alaska.via.aspect-cloud.net/WFO) is functional."
    },
    impactedSystems: [
      {
        id: "alvaria-wfm",
        name: "Alvaria Workforce Management / Aspect WFM",
        subName: "Alaska Application URL: https://alaska.via.aspect-cloud.net/WFO",
        appTabSubName: "(Aspect WFM / Aspect WFO)",
        description:
          "Workforce-management platform used by Alaska Airlines Contact Centers for shift management, employee scheduling, schedule changes and long-term workforce forecasting. Primary capabilities include creating Contact Center employee schedules, allowing agents to view schedules, picking up additional shifts, trading/changing shifts, managing overtime and early release, long-term contact-volume forecasting, and supporting budgeting and shift bids. Identified in the Contact Center Business Resiliency Plan as the system used to manage agent schedules across the call center enterprise.",
        appTabDescription:
          "Workforce-management platform used by Alaska Airlines Contact Centers for shift management, employee scheduling, schedule changes and long-term workforce forecasting.",
        businessFunction: "Contact Center Workforce Management",
        impact:
          "Contact center agents and revenue can be affected because supervisors cannot properly administer overtime or release agents early.",
        dependencies:
          "WFM application services, employee-access component, SQL database, authentication and user-access infrastructure.",
        directDependencies:
          "WFM application services, employee-access component, SQL database, authentication and user-access infrastructure.",
        owner: "Call Center Technology",
        itsOwner: "Call Center Technology",
        severity: "High",
        status: "Potential"
      },
      {
        id: "alvaria-empower",
        name: "Empower",
        subName: "WFM Employee Self-Service UI & Notification Component",
        appTabSubName: "(Employee Self-Service WFM UI)",
        description:
          "Component included with the documented WFM solution; infrastructure includes IIS, WFO UI, notification services, Aspect Web Services, Exchange and Dispatcher functionality.",
        appTabDescription:
          "Component included with the documented WFM solution; infrastructure includes IIS, WFO UI, notification services, Aspect Web Services, Exchange and Dispatcher functionality.",
        businessFunction:
          "Employee/self-service Workforce Management UI and notifications.",
        impact:
          "Employees may lose access to applicable WFM self-service functionality.",
        dependencies:
          "IIS, WFO UI, notification services, Aspect Web Services and associated WFM infrastructure.",
        directDependencies:
          "IIS, WFO UI, notification services, Aspect Web Services and associated WFM infrastructure.",
        owner: "Call Center Technology",
        itsOwner: "Call Center Technology",
        severity: "Medium",
        status: "Potential"
      }
    ],
    upstreamDependencies: [
      "Authentication: Windows Integrated Security is documented for application access.",
      "Alaska SSO: The system summary describes mobile access using Alaska Airlines SSO through fedauth.",
      "Active Directory groups: app_aspectas provides basic Contact Center employee access; TS_ASPECT provides administrative access.",
      "Contact Center workforce/scheduling data: Alvaria processes agent schedules, shifts and workforce-planning information.",
      "ACD integration: WFM sizing documentation specifies one ACD for WFM Core, although the vendor/name is not populated in that source."
    ],
    downstreamConsumers: [
      "Contact Center agents.",
      "Contact Center leads and supervisors.",
      "Workforce planners.",
      "Contact Center Operations. Alvaria is explicitly identified in the Business Resiliency Plan as the application supporting enterprise agent scheduling."
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Upstream authentication, SSO, Active Directory, workforce data, and ACD feeds into Alvaria WFM & Empower and downstream Contact Center consumers.",
      diagramUpstream: [
        {
          id: "up-auth",
          name: "Windows Integrated Security",
          subtitle: "Application Access Auth",
          iconType: "globe"
        },
        {
          id: "up-sso",
          name: "Alaska SSO (fedauth)",
          subtitle: "Mobile Access Authentication",
          iconType: "transfer"
        },
        {
          id: "up-ad",
          name: "Active Directory Groups",
          subtitle: "app_aspectas / TS_ASPECT",
          iconType: "doc"
        },
        {
          id: "up-wfm-data",
          name: "Workforce & ACD Data",
          subtitle: "Schedules, Shifts & 1 ACD Core",
          iconType: "ticket"
        }
      ],
      diagramServices: [
        "Alvaria Workforce Management / Aspect WFM",
        "Empower Self-Service UI & Notifications",
        "Agent Scheduling, Shift Trades & Bids",
        "Overtime, Early Release & Forecasting"
      ],
      diagramDownstream: [
        {
          id: "down-agents",
          name: "Contact Center Agents",
          subtitle: "Schedule View & Shift Trades",
          iconType: "team"
        },
        {
          id: "down-supervisors",
          name: "Leads & Supervisors",
          subtitle: "Overtime & Early Release",
          iconType: "nodes"
        },
        {
          id: "down-planners",
          name: "Workforce Planners",
          subtitle: "Forecasting, Budgeting & Bids",
          iconType: "chart"
        },
        {
          id: "down-cco",
          name: "Contact Center Operations",
          subtitle: "Enterprise Agent Scheduling",
          iconType: "database"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 5, tone: "red" },
        { label: "Downstream Consumers", count: 4, tone: "green" },
        { label: "Impacted Applications", count: 2, tone: "blue" },
        { label: "Infrastructure Components", count: 8, tone: "purple" }
      ],
      keyTakeaways: [
        "Alvaria is Alaska's Tier 2 Contact Center workforce-management platform. It is responsible for scheduling, shift changes, overtime/early-release administration and workforce forecasting.",
        "Unlike ACARS or WAM, its primary outage impact is not aircraft flight processing. The Contact Center resiliency documentation notes that Contact Centers are not essential to safely departing aircraft, but they support airline operations by assisting guests."
      ],
      upstreamTable: [
        {
          id: "up-tbl-auth",
          name: "Authentication",
          subName: "Windows Integrated Security",
          description:
            "Windows Integrated Security is documented for application access.",
          type: "Internal Authentication",
          impact:
            "Users cannot authenticate to the Alvaria WFM desktop/web application."
        },
        {
          id: "up-tbl-sso",
          name: "Alaska SSO",
          subName: "fedauth Mobile Access",
          description:
            "The system summary describes mobile access using Alaska Airlines SSO through fedauth.",
          type: "Internal Identity / SSO",
          impact:
            "Mobile and federated SSO access to Alvaria WFM / Empower is unavailable."
        },
        {
          id: "up-tbl-ad",
          name: "Active Directory Groups",
          subName: "app_aspectas / TS_ASPECT",
          description:
            "app_aspectas provides basic Contact Center employee access; TS_ASPECT provides administrative access.",
          type: "Internal Directory",
          impact:
            "Role-based employee or administrative authorization fails."
        },
        {
          id: "up-tbl-wfm-data",
          name: "Contact Center Workforce / Scheduling Data",
          subName: "Schedules, Shifts & Planning Inputs",
          description:
            "Alvaria processes agent schedules, shifts and workforce-planning information.",
          type: "Internal Data",
          impact:
            "Schedule generation, shift updates, and workforce planning cannot process current inputs."
        },
        {
          id: "up-tbl-acd",
          name: "ACD Integration",
          subName: "WFM Core ACD Feed",
          description:
            "WFM sizing documentation specifies one ACD for WFM Core, although the vendor/name is not populated in that source.",
          type: "Internal Integration",
          impact:
            "Contact volume and adherence/forecasting metrics from the ACD are degraded."
        }
      ],
      downstreamTable: [
        {
          id: "down-tbl-agents",
          name: "Contact Center Agents",
          description:
            "Use Alvaria WFM and Empower to view schedules, pick up additional shifts, and trade/change shifts.",
          type: "Internal Consumer",
          impact:
            "Agents may be unable to view or modify schedules or pick up/trade shifts."
        },
        {
          id: "down-tbl-supervisors",
          name: "Contact Center Leads and Supervisors",
          description:
            "Supervise shift adherence and administer overtime and early release.",
          type: "Internal Operations",
          impact:
            "Supervisors may be unable to administer overtime or early release."
        },
        {
          id: "down-tbl-planners",
          name: "Workforce Planners",
          description:
            "Manage schedule creation, long-term contact-volume forecasting, budgeting, and shift bids.",
          type: "Internal Planning",
          impact:
            "Workforce planning, shift bids, and long-term forecasting may be affected."
        },
        {
          id: "down-tbl-cco",
          name: "Contact Center Operations",
          description:
            "Alvaria is explicitly identified in the Business Resiliency Plan as the application supporting enterprise agent scheduling.",
          type: "Internal Operations",
          impact:
            "Enterprise agent scheduling and Remote Desktop operational administration can be disrupted; revenue may be affected if workforce staffing cannot be appropriately managed."
        }
      ],
      infrastructureTable: [
        {
          id: "inf-app-servers",
          component: "Application Servers",
          description:
            "SEAPRASPCTAPP01 - Application Server 1; SEAPRASPCTAPP02 - Application Server 2; SEAPRASPCTEMP01 - Employee access.",
          owner: "Call Center Technology",
          impact:
            "Primary WFM application and employee self-service access fail; included in standard 3-server restart procedure."
        },
        {
          id: "inf-support-servers",
          component: "Supporting Servers (Jump & SQL)",
          description:
            "SEAPRASPCTJMP01 - Jump server used for vendor access; SEAPRASPCTSQL01 - SQL database server. The troubleshooting procedure specifically says the Jump and SQL servers should not be included in the standard application-server restart.",
          owner: "Call Center Technology / DBA",
          impact:
            "Vendor jump access or backend database state affected; do NOT automatically restart SEAPRASPCTSQL01 without DBA review."
        },
        {
          id: "inf-database",
          component: "Database",
          description: "Microsoft SQL Server 2016 SP2 (SEAPRASPCTSQL01).",
          owner: "Database Team / Call Center Technology",
          impact:
            "Loss of database connectivity prevents WFM schedule retrieval and updates even if SQL server appears healthy."
        },
        {
          id: "inf-hosting",
          component: "Hosting (On-Premises / AWS Cloud Workforce)",
          description:
            "Older WFM architecture documents describe virtual/on-premises server infrastructure, while the later DR plan and vendor sheet describe Alvaria Cloud Workforce hosted on AWS, with shared components across multiple Availability Zones and dedicated customer components, including the database, isolated to a single AZ.",
          owner: "Alvaria Cloud / Call Center Technology",
          impact:
            "Planned monthly cloud maintenance (up to 5 hours) or single-AZ customer component outage impacts WFO/WFM availability."
        },
        {
          id: "inf-network",
          component: "Network Path",
          description:
            "Client-to-Alvaria network path is an operational dependency; one documented incident involved latency affecting users in the McGee building while home/VPN users were unaffected.",
          owner: "Alaska Network Engineering / ITS",
          impact:
            "Location-specific latency or connectivity failures for office users while VPN/remote users operate normally."
        },
        {
          id: "inf-firewall",
          component: "Specific Firewall Ports",
          description: "(Add Specific firewall ports)",
          owner: "Network Security",
          impact: "Pending documentation of specific firewall ports."
        },
        {
          id: "inf-proxy",
          component: "Proxy Configuration",
          description: "(Add Proxy configuration)",
          owner: "Network Engineering",
          impact: "Pending documentation of proxy configuration."
        },
        {
          id: "inf-lb",
          component: "Load Balancers",
          description: "(Add Load balancers)",
          owner: "Network Engineering",
          impact: "Pending documentation of load balancers."
        }
      ]
    },
    typicalBusinessImpact: [
      "Contact Center agents may be unable to view or modify schedules.",
      "Agents may be unable to pick up or trade shifts.",
      "Supervisors may be unable to administer overtime or early release.",
      "Workforce planning and forecasting may be affected.",
      "Revenue may be affected if workforce staffing cannot be appropriately managed.",
      "Remote Desktop access used by Contact Center Operations may fail even when the primary agent web page is functional. This exact split condition occurred following a 2024 maintenance event.",
      "Users can encounter HTTP 500/downstream-service errors; one documented error was Aspect.AspectMessageClient+DownstreamServiceUnavailableException."
    ],
    knownWorkarounds: [
      "Password reset: During the October 2024 incident, Contact Center Operations restored Remote Desktop access by resetting the affected password after the main Alvaria page had already recovered.",
      "(Add scheduling/manual process workaround)",
      "(Add workforce-planning workaround)"
    ],
    vendorContacts: {
      supportEmail: "(Add Vendor Support Email)",
      supportPhone: "800-999-4455, Alvaria Enterprise Help Desk",
      technicalSupport:
        "Alvaria Enterprise Help Desk • Asset: 00015817 - Alvaria Cloud Workforce (Legacy Asset ID: 94236) • Application URL: https://alaska.via.aspect-cloud.net/WFO",
      accountManager: "Enterprise Help Desk",
      supportHours: "(Add Support Service Hours)",
      companyNote:
        "Alvaria. It was formerly known as Aspect, and internal aliases include Alvaria, Aspect WFM, Aspect WFO, and Aspect.",
      categoryNote:
        "Call Centers / Workforce Management • Tier 2 • Current Asset: 00015817 - Alvaria Cloud Workforce (Legacy Asset ID: 94236) • Alaska Application URL: https://alaska.via.aspect-cloud.net/WFO",
      escalation:
        "1. Alaska Airlines restarts the server suite (SEAPRASPCTAPP01, SEAPRASPCTAPP02, SEAPRASPCTEMP01; do not include Jump or SQL servers).\n2. Validate whether Alvaria is healthy.\n3. If the application remains unhealthy, contact Darlene Harbeson, Matt Smallwood, or Lori Well to begin vendor escalation.\n4. Alvaria Enterprise Help Desk is the vendor contact at 800-999-4455 (Asset: 00015817 - Alvaria Cloud Workforce; legacy Asset ID: 94236).\n5. When opening the vendor case, provide the affected function, users/locations, symptoms/errors, application and database validation results, and maintenance status.\n6. The dedicated troubleshooting document classifies “Accessing the application presents an error” as Severity 2 with a 30-minute internal troubleshooting time limit.",
      communicationGuidelines: [
        "1. Alaska Airlines restarts the server suite (SEAPRASPCTAPP01, SEAPRASPCTAPP02, SEAPRASPCTEMP01; do not include Jump or SQL servers).",
        "2. Validate whether Alvaria is healthy.",
        "3. If the application remains unhealthy, contact Darlene Harbeson, Matt Smallwood, or Lori Well to begin vendor escalation.",
        "4. Alvaria Enterprise Help Desk is the vendor contact at 800-999-4455.",
        "5. When opening the vendor case, provide the affected function, users/locations, symptoms/errors, application and database validation results, and maintenance status.",
        "6. The dedicated troubleshooting document classifies “Accessing the application presents an error” as Severity 2 with a 30-minute internal troubleshooting time limit."
      ],
      responseSlas: [
        {
          priority: "Tier 2",
          level: "Application Tier",
          target: "Tier 2",
          condition: "Documented service tier in Alvaria_System_Summary.docx",
          tone: "blue"
        },
        {
          priority: "Sev 2",
          level: "Internal Troubleshooting Limit",
          target: "30 minutes",
          condition:
            "Documented Alvaria troubleshooting time limit for Severity 2 “Accessing the application presents an error” procedure (internal troubleshooting time limit, not a contractual vendor response SLA)",
          tone: "amber"
        },
        {
          priority: "Sev 1",
          level: "Sev 1 Vendor Initial Response",
          target: "(Add Sev 1 vendor initial response)",
          condition: "Pending contractual SLA verification",
          tone: "red"
        },
        {
          priority: "Sev 1",
          level: "Sev 1 Update Cadence",
          target: "(Add Sev 1 update cadence)",
          condition: "Pending contractual SLA verification",
          tone: "red"
        },
        {
          priority: "Sev 2",
          level: "Sev 2 Vendor Initial Response",
          target: "(Add Sev 2 vendor initial response)",
          condition: "Pending contractual SLA verification",
          tone: "amber"
        },
        {
          priority: "Sev 2",
          level: "Sev 2 Update Cadence",
          target: "(Add Sev 2 update cadence)",
          condition: "Pending contractual SLA verification",
          tone: "amber"
        },
        {
          priority: "SLA",
          level: "Availability SLA",
          target: "(Add Availability SLA)",
          condition: "Pending contractual SLA verification",
          tone: "green"
        }
      ]
    },
    internalContacts: {
      itsTeam: "Call Center Technology",
      itsTeamNote:
        "Team email: call.center.technology@alaskaair.com • Escalation contacts (after internal restart/validation fails): Darlene Harbeson, Matt Smallwood, and Lori Well",
      applicationOwner: "Adam Wallraff, Call Centers",
      onCallSupport:
        "Call Center Technology (call.center.technology@alaskaair.com)",
      systemAdministration:
        "Escalation contacts: Darlene Harbeson, Matt Smallwood, and Lori Well",
      businessOwner: "Contact Center Operations / Call Centers",
      passwordSupport: "ITS Service Desk, 877-238-1077, documented 24x7"
    },
    validationChecklist: [
      "Confirm how many Alvaria users are affected and whether the issue affects the agent website, Remote Desktop, or both. A documented incident showed the website working while the Remote Desktop component remained unavailable.",
      "Determine whether the problem is location-specific. A previous latency issue affected McGee office users while work-from-home users were operating normally.",
      "Validate SEAPRASPCTAPP01, SEAPRASPCTAPP02 and SEAPRASPCTEMP01.",
      "Following the documented troubleshooting procedure, restart those three servers when appropriate, then validate whether users can access the application and whether it behaves normally.",
      "Do not automatically restart SEAPRASPCTSQL01. If the problem remains, engage DBA to review its state and determine whether a database restart is appropriate.",
      "Validate database connectivity. In one outage, SEAPRASPCTSQL01 was healthy but showed no current connections from the application.",
      "Check whether Alvaria has active planned/cloud maintenance. One outage was ultimately associated with planned monthly maintenance that could take up to five hours.",
      "For login-specific problems, validate authentication/password state. Password reset resolved the documented CCO Remote Desktop incident.",
      "If still unhealthy, escalate through Call Center Technology and engage the Alvaria Enterprise Help Desk."
    ],
    incidentHistory: [
      {
        id: "INC-ALVARIA-OCT24",
        date: "Oct 2024",
        summary:
          "Post-maintenance split condition where the primary agent web page (https://alaska.via.aspect-cloud.net/WFO) recovered, but Remote Desktop access used by Contact Center Operations remained unavailable.",
        severity: "Sev 2",
        resolution:
          "Contact Center Operations restored Remote Desktop access by resetting the affected password after the main Alvaria web page had recovered."
      },
      {
        id: "INC-ALVARIA-MAINT",
        date: "Documented Outage",
        summary:
          "Users encountered HTTP 500 / Aspect.AspectMessageClient+DownstreamServiceUnavailableException and SEAPRASPCTSQL01 showed no active connections during an outage ultimately associated with planned monthly cloud maintenance (up to 5 hours).",
        severity: "Sev 2",
        resolution:
          "Validated application servers and SQL state, confirmed active planned monthly maintenance window with Alvaria, and verified recovery post-maintenance."
      },
      {
        id: "INC-ALVARIA-MCGEE",
        date: "Documented Latency Event",
        summary:
          "Location-specific client-to-Alvaria network latency affecting Contact Center users in the McGee building while work-from-home/VPN users operated normally.",
        severity: "Sev 3",
        resolution:
          "Isolated issue to McGee building network path vs. Alvaria platform health."
      }
    ],
    relatedDocuments: [
      {
        title: "Alvaria_System_Summary.docx",
        type: "System Summary (Word)",
        owner: "Call Center Technology",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BA73D21BB-52CE-4FBB-83AA-5A73DF69734E%7D&file=Alvaria_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Accessing Alvaria application presents an error.docx",
        type: "Troubleshooting Procedure (Word)",
        owner: "ITS Knowledge Management",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B9BB0153A-4CD1-4EDD-BF3E-2426E8BFC9D6%7D&file=Accessing%20Alvaria%20application%20presents%20an%20error.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Alvaria Architecture Diagram.docx",
        type: "Architecture Diagram (Word)",
        owner: "Call Center Technology",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B0E726D24-DC88-467A-A512-3245C40819C7%7D&file=Alvaria%20Architecture%20Diagram.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Alvaria_DRPlan.docx",
        type: "Disaster Recovery Plan (Word)",
        owner: "Call Center Technology",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/sc/DR/_layouts/15/Doc.aspx?sourcedoc=%7B4A41017A-902C-4B89-B571-BD4B0B1982AA%7D&file=Alvaria_DRPlan.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ITS Vendor Information - 2026.xlsx",
        type: "Vendor Directory (Excel)",
        owner: "Production Operations",
        updated: "2026",
        url: "https://alaskaair-my.sharepoint.com/personal/srihari_gangisetti_alaskaair_com/_layouts/15/Doc.aspx?sourcedoc=%7B5E0C7BFD-2C5A-45BE-B341-FD25909E9AEB%7D&file=ITS%20Vendor%20Information%20-%202026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "AAG Contact Centers - BR Plan Update - 2026.docx",
        type: "Business Resiliency Plan (Word)",
        owner: "Contact Center Operations / ERBC",
        updated: "2026",
        url: "https://alaskaair.sharepoint.com/sites/ERBC/businesscontinuity/_layouts/15/Doc.aspx?sourcedoc=%7B6E463623-2541-43A9-9D6C-C18951CF3151%7D&file=AAG%20Contact%20Centers%20-%20BR%20Plan%20Update%20-%202026.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "AAG Contact Centers - BR Plan Update - 2025.pdf",
        type: "Business Resiliency Plan (PDF)",
        owner: "Contact Center Operations / ERBC",
        updated: "2025",
        url: "https://alaskaair.sharepoint.com/sites/ERBC/businesscontinuity/Shared%20Documents/Business%20Resiliency%20Plans/Business%20Resiliency%20Plans/AAG%20Contact%20Centers/AAG%20Contact%20Centers%202025%20Plan/AAG%20Contact%20Centers%20-%20BR%20Plan%20Update%20-%202025.pdf?web=1"
      }
    ]
  },

  avtec: {
    id: "avtec",
    name: "Avtec",
    breadcrumbTrail: ["Vendors", "Avtec", "Vendor Impact"],
    pageTitle: "Avtec - Vendor Impact Details",
    pageSubtitle:
      "Avtec is the main console for phone and radio communications in Dispatch, the NOC, and operations centers (Critical System · Tier 0).",
    applicationsTabTitle: "Avtec",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "View all Alaska and Horizon applications, dispatch consoles, radio/SATCOM systems, and call recording tools that depend on Avtec.",
    applicationsCardSubtitle:
      "Applications, radio/SATCOM consoles, call recording, and remote endpoints supported by Avtec",
    dependenciesTabTitle: "Avtec - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream CUCM inbound call paths, downstream operational consumers, and VPGate, DMS, firewall, circuit, and authentication infrastructure for Avtec.",
    company: "Avtec",
    website: "(Add Website/Support Portal URL)",
    category: "UC team: dispatch radio and phone communications",
    itsTeam: "ITS Network Unified Communications (UC Team)",
    logo: "public/vendors/avtec.jpg",
    status: "Active",
    lastUpdated: "2026 (Avtec_System_Summary, 2026_Avtec_DR_Plan & Incident Records)",
    subtitle:
      "UC team: dispatch radio and phone communications (Critical System · Tier 0 · 24/7)",
    impactCallout: {
      level: "Critical",
      title: "Key Takeaways: Critical System – Impact: Flight Delays Possible (Tier 0)",
      message:
        "Avtec is the main console for phone and radio communications in Dispatch, the NOC, and operations centers. Its documented criticality is \"Critical System – Impact: Flight Delays possible\". The Technology Recovery Document lists it as Tier 0. Most past outages started outside Avtec itself, in CUCM, firewall, circuit, or power changes."
    },
    impactSummary: {
      confirmed: 0,
      potential: 5,
      notImpacted: 0,
      underReview: 0
    },
    impactedSystems: [
      {
        id: "avtec-dispatch-radio-system",
        name: "Avtec Dispatch Radio System (consoles/VPGates)",
        subName: "(Consoles / VPGates · Avtec Scout)",
        appTabSubName: "(Consoles / VPGates · Avtec Scout)",
        description:
          "Telephone and radio console; the Avtec Scout handles up to four radio or LTE endpoints",
        appTabDescription:
          "Telephone and radio console; the Avtec Scout handles up to four radio or LTE endpoints",
        businessFunction: "Dispatch, NOC, CLP, and MX Control communications",
        impact: "Critical system; flight delays possible",
        dependencies: "CUCM (Cisco call manager), VPGates (A/B sides), network/power",
        status: "Potential",
        owner: "UC Team"
      },
      {
        id: "avtec-air-ground-radios",
        name: "Air-to-Ground / Ground-to-Ground radios",
        subName: "(A/G & G/G Radio Endpoints)",
        appTabSubName: "(A/G & G/G Radio Endpoints)",
        description:
          "Radios connected to Avtec consoles. UC owns the radio-to-Avtec connection; Field Services owns the radios themselves",
        appTabDescription:
          "Radios connected to Avtec consoles. UC owns the radio-to-Avtec connection; Field Services owns the radios themselves",
        businessFunction: "Communication with aircraft and ground crews",
        impact: "No radio contact with aircraft from the consoles",
        dependencies: "Avtec endpoints, radio remotes",
        status: "Potential",
        owner: "UC Team / Field Services"
      },
      {
        id: "avtec-satcom-voice",
        name: "SATCOM voice via Avtec",
        subName: "(Aircraft SATCOM Voice Dialing)",
        appTabSubName: "(Aircraft SATCOM Voice Dialing)",
        description:
          "SATCOM calls to aircraft dialed from Avtec (programmed user ID and PIN codes)",
        appTabDescription:
          "SATCOM calls to aircraft dialed from Avtec (programmed user ID and PIN codes)",
        businessFunction: "Dispatch-to-aircraft voice",
        impact: "SATCOM calls to aircraft fail",
        dependencies: "Iridium / Collins",
        status: "Potential",
        owner: "UC Team"
      },
      {
        id: "avtec-higherground-recording",
        name: "HigherGround (call recording)",
        subName: "(seaprhiground2 · Compliance & Audit Dashboard)",
        appTabSubName: "(seaprhiground2 · Compliance & Audit Dashboard)",
        description:
          "Records Avtec dispatch calls; dashboard is used for audits",
        appTabDescription:
          "Records Avtec dispatch calls; dashboard is used for audits",
        businessFunction: "Call recording and compliance",
        impact: "(Add Impact)",
        dependencies: "Avtec",
        status: "Potential",
        owner: "UC Team"
      },
      {
        id: "avtec-intercoms-radio-remotes",
        name: "Intercoms / Radio Dialup Remotes",
        subName: "(Avtec DR Plan Validated Endpoints)",
        appTabSubName: "(Avtec DR Plan Validated Endpoints)",
        description: "Tested as part of the Avtec DR plan",
        appTabDescription: "Tested as part of the Avtec DR plan",
        businessFunction: "Internal communications",
        impact: "(Add Impact)",
        dependencies: "Avtec VPGates",
        status: "Potential",
        owner: "UC Team"
      }
    ],
    upstreamDependencies: [
      "(Add Upstream Dependencies). Inbound calls arrive through CUCM for AS Dispatch/Bridge/CLP (DMS 1), AS MTX CTL (DMS 2), and QX Dispatch/Bridge/CLP/MTX CTL (DMS 3)."
    ],
    downstreamConsumers: [
      "AS and QX Dispatch, the NOC Bridge, CLP, MX Control, Station Ops, and QX SOC"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Inbound calls arrive through CUCM for AS Dispatch/Bridge/CLP (DMS 1), AS MTX CTL (DMS 2), and QX Dispatch/Bridge/CLP/MTX CTL (DMS 3), serving downstream AS and QX Dispatch, the NOC Bridge, CLP, MX Control, Station Ops, and QX SOC.",
      diagramUpstream: [
        {
          id: "avtec-up-1",
          name: "(Add Upstream Dependencies)",
          label: "(Add Upstream Dependencies)",
          subtitle: "External / additional upstream dependencies placeholder",
          iconType: "doc"
        },
        {
          id: "avtec-up-2",
          name: "CUCM Inbound Call Paths (DMS 1 / 2 / 3)",
          label: "CUCM Inbound Call Paths (DMS 1 / 2 / 3)",
          subtitle: "AS Dispatch/Bridge/CLP (DMS 1), AS MTX CTL (DMS 2), QX (DMS 3)",
          iconType: "network"
        }
      ],
      diagramServices: [
        "Avtec Dispatch Radio System (consoles/VPGates)",
        "Air-to-Ground / Ground-to-Ground radios",
        "SATCOM voice via Avtec",
        "HigherGround (call recording)",
        "Intercoms / Radio Dialup Remotes"
      ],
      diagramDownstream: [
        {
          id: "avtec-down-1",
          name: "AS & QX Dispatch, NOC Bridge & CLP",
          label: "AS & QX Dispatch, NOC Bridge & CLP",
          subtitle: "Flight Ops dispatch & bridge consoles",
          iconType: "team"
        },
        {
          id: "avtec-down-2",
          name: "MX Control, Station Ops & QX SOC",
          label: "MX Control, Station Ops & QX SOC",
          subtitle: "Maintenance Control, Station Ops lines (SIT, JNU, BRW) & QX SOC",
          iconType: "nodes"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 1, tone: "red" },
        { label: "Downstream Consumer Groups", count: 6, tone: "green" },
        { label: "Applications & Systems", count: 5, tone: "blue" },
        { label: "Infrastructure Components", count: 8, tone: "purple" }
      ],
      keyTakeaways: [
        "Avtec is the main console for phone and radio communications in Dispatch, the NOC, and operations centers. Its documented criticality is \"Critical System – Impact: Flight Delays possible\". The Technology Recovery Document lists it as Tier 0. Most past outages started outside Avtec itself, in CUCM, firewall, circuit, or power changes."
      ],
      upstreamTable: [
        {
          id: "avtec-uptbl-1",
          name: "CUCM Inbound Call Routing (DMS 1, DMS 2, DMS 3)",
          subName: "(Add Upstream Dependencies)",
          description:
            "(Add Upstream Dependencies). Inbound calls arrive through CUCM for AS Dispatch/Bridge/CLP (DMS 1), AS MTX CTL (DMS 2), and QX Dispatch/Bridge/CLP/MTX CTL (DMS 3).",
          type: "Internal / Telephony",
          typeBadge: "blue",
          impact:
            "Inbound calls to AS Dispatch/Bridge/CLP (DMS 1), AS MTX CTL (DMS 2), and QX Dispatch/Bridge/CLP/MTX CTL (DMS 3) fail if CUCM routing is disrupted."
        }
      ],
      downstreamTable: [
        {
          id: "avtec-dwntbl-1",
          name: "AS and QX Dispatch, the NOC Bridge, CLP, MX Control, Station Ops, and QX SOC",
          subName: "(Downstream Operational Consumers)",
          description:
            "AS and QX Dispatch, the NOC Bridge, CLP, MX Control, Station Ops, and QX SOC",
          type: "Internal Operations",
          dataFlow: "Dispatch Voice, Radio, SATCOM & Station Ops Lines",
          impact:
            "Outbound/inbound calls and radio communications fail across Dispatch, NOC Bridge, CLP, MX Control, Station Ops (e.g., SIT, JNU, BRW), and QX SOC; potential flight delays."
        }
      ],
      infrastructureTable: [
        {
          id: "avtec-infra-1",
          component: "VPGates (A/B Sides & IGQ Failover)",
          category: "VPGates (A/B Sides & IGQ Failover)",
          iconType: "server",
          description:
            "VPGates: seacravtecoo01a/02a/03a (\"A\" side) and seacravtecoo01b/02b/03b (\"B\" side). They fail over to the IGQ VPGates.",
          details:
            "VPGates: seacravtecoo01a/02a/03a (\"A\" side) and seacravtecoo01b/02b/03b (\"B\" side). They fail over to the IGQ VPGates.",
          owner: "UC Team",
          impact: "Primary A/B VPGate failure requires failover to IGQ VPGates."
        },
        {
          id: "avtec-infra-2",
          component: "IGQ to HUB/PUY Connectivity",
          category: "IGQ to HUB/PUY Connectivity",
          iconType: "globe",
          description:
            "Connectivity between IGQ and HUB/PUY is a critical dependency.",
          details:
            "Connectivity between IGQ and HUB/PUY is a critical dependency.",
          owner: "ITS Network / UC Team",
          impact: "Critical dependency for Avtec DR and cross-site communication."
        },
        {
          id: "avtec-infra-3",
          component: "Station DMS Nodes (Tier 1)",
          category: "Station DMS Nodes (Tier 1)",
          iconType: "server",
          description:
            "Station DMS nodes, for example laxpravtec01a/01b (Tier 1, monitored by Zenoss)",
          details:
            "Station DMS nodes, for example laxpravtec01a/01b (Tier 1, monitored by Zenoss)",
          owner: "UC Team / NRE-Stations",
          impact: "Tier 1 station DMS node-down alert requires confirming site power and engaging NetOps/NRE-Stations."
        },
        {
          id: "avtec-infra-4",
          component: "SEA Nodes",
          category: "SEA Nodes",
          iconType: "server",
          description:
            "SEA nodes: seapravtec01a–03b, seapravtecdms2, seaprhiground2",
          details:
            "SEA nodes: seapravtec01a–03b, seapravtecdms2, seaprhiground2",
          owner: "UC Team",
          impact: "Hosts SEA Avtec endpoints, DMS 2, and HigherGround call recording."
        },
        {
          id: "avtec-infra-5",
          component: "CUCM (Cisco Unified Communications Manager)",
          category: "CUCM (Cisco Unified Communications Manager)",
          iconType: "server",
          description:
            "CUCM. Cluster reboots and re-IPs have taken Avtec down before.",
          details:
            "CUCM. Cluster reboots and re-IPs have taken Avtec down before.",
          owner: "UC Team",
          impact: "Cluster reboots and subscriber re-IPs can take Avtec phone lines and consoles down."
        },
        {
          id: "avtec-infra-6",
          component: "Corporate Firewalls",
          category: "Corporate Firewalls",
          iconType: "shield",
          description:
            "Corporate firewalls. CR 131815 (SIP ALG) broke Avtec until it was rolled back.",
          details:
            "Corporate firewalls. CR 131815 (SIP ALG) broke Avtec until it was rolled back.",
          owner: "ITS Network / Firewall Team",
          impact: "Firewall changes (such as SIP ALG in CR 131815) can break Avtec voice/SIP traffic."
        },
        {
          id: "avtec-infra-7",
          component: "Hub/Lumen Voice Circuits",
          category: "Hub/Lumen Voice Circuits",
          iconType: "globe",
          description: "Hub/Lumen voice circuits",
          details: "Hub/Lumen voice circuits",
          owner: "UC Team / Telecom",
          impact: "Circuit degradation prevents outbound/inbound calling (e.g., MX Control unable to call out)."
        },
        {
          id: "avtec-infra-8",
          component: "Authentication (RDP & LDAP)",
          category: "Authentication (RDP & LDAP)",
          iconType: "shield",
          description:
            "Authentication: RDP to the server, LDAP for programming",
          details:
            "Authentication: RDP to the server, LDAP for programming",
          owner: "UC Team / ITS Service Desk",
          impact: "Required for server administration (RDP) and internal console programming (LDAP)."
        }
      ]
    },
    typicalBusinessImpact: [
      "Outbound calls fail. Gate-change coordination slows down, with potential flight delays (PDX, 8/14/2026).",
      "MX Control can't call out to assign techs.",
      "A SEA UPS failure (MI6587) took down Avtec along with A/G and G/G radios.",
      "Dispatch can't reach Alaska station ops lines (SIT, JNU, BRW).",
      "A dispatcher can't work the desk if that desk's Avtec fails."
    ],
    knownWorkarounds: [
      "Personal phones, MS Teams, or radios",
      "Dispatch can fall back on ACARS, SATCOM, and aircraft voice call-back",
      "If a single line fails, calls route to the rollover/backup line",
      "Move to an unoccupied desk, if one is free"
    ],
    validationChecklist: [
      "Ask whether it's one line/console or several, and which station or desk (get the PC and endpoint names).",
      "If it's one line, ticket ITS FS Avtec. If it's several, call UC On-Call at 206-688-3800 Opt 1.",
      "For audio problems: reseat the handset/headset, reset the jackbox or speaker USB (wait 5 seconds before plugging back in), then reboot the PC.",
      "Check for active changes on CUCM, firewall, or network. Several past outages followed a CR.",
      "For a Tier 1 station DMS node-down alert: confirm site power, engage the NetOps escalation chat, and page NRE-Stations on-call if there's no response within 5 minutes.",
      "Assess the business impact (flight delays, work stoppage). Raise an RRT0 if it's widespread.",
      "Avoid false alarms: during the routine monthly radio test on the 1st/2nd, \"ring no answer\" from 12–25 remotes is expected."
    ],
    vendorContacts: {
      supportPhone: "800-545-3034",
      supportEmail: "customersupport@avtecinc.com",
      supportHours: "24/7",
      accountManager: "Avtec On-Call",
      technicalSupport:
        "Avtec On-Call: 800-545-3034 • customersupport@avtecinc.com (24/7) • Account Manager: (Add Account Manager) • Escalation Contacts: (Add Escalation Contacts)",
      namedEscalationContact:
        "(Add Escalation Contacts) • Account Manager: (Add Account Manager)",
      companyNote:
        "Avtec — dispatch radio and phone console vendor.",
      categoryNote:
        "UC team: dispatch radio and phone communications • Primary ITS Team Owner: ITS Network Unified Communications (UC Team)",
      contactDirectory: [
        {
          role: "Support Desk / On-Call",
          name: "Avtec On-Call",
          phone: "800-545-3034",
          email: "customersupport@avtecinc.com"
        },
        {
          role: "Account Manager",
          name: "(Add Account Manager)",
          phone: "—",
          email: "—"
        },
        {
          role: "Escalation Contacts",
          name: "(Add Escalation Contacts)",
          phone: "—",
          email: "—"
        }
      ],
      escalation:
        "Call the UC Team first (206-688-3800 Opt 1, 24/7). They decide whether it needs to go to Avtec Support (Avtec On-Call: 800-545-3034 / customersupport@avtecinc.com). Contacts in the console directory need \"81\" in front of the area code. Directory changes are requested through the AVTEC Request Page on the NOC Bridge SharePoint. Account Manager: (Add Account Manager). Escalation Contacts: (Add Escalation Contacts).",
      communicationGuidelines: [
        "Call the UC Team first. They decide whether it needs to go to Avtec Support.",
        "Contacts in the console directory need \"81\" in front of the area code. Directory changes are requested through the AVTEC Request Page on the NOC Bridge SharePoint."
      ],
      responseSlas: [
        {
          priority: "Internal",
          label: "Internal",
          level: "Internal Criticality & Support",
          description: "Critical system, 24/7 support",
          target: "Critical system, 24/7 support",
          condition: "Critical system, 24/7 support",
          value: "Critical system, 24/7 support"
        },
        {
          priority: "Vendor initial response time",
          label: "Vendor initial response time",
          level: "Vendor Initial Response SLA",
          description: "Vendor initial response time",
          target: "(Add Response Targets)",
          condition: "(Add Response Targets)",
          value: "(Add Response Targets)"
        },
        {
          priority: "Sev 1/Sev 2 update cadence",
          label: "Sev 1/Sev 2 update cadence",
          level: "Incident Update Cadence",
          description: "Sev 1/Sev 2 update cadence",
          target: "(Add Update Cadence)",
          condition: "(Add Update Cadence)",
          value: "(Add Update Cadence)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS Network Unified Communications (UC Team)",
      itsTeamNote:
        "System Admin / ITS System Owner: UC Team, 206-688-3800 Opt 1, 24/7 • UC Manager: Dan Olson, +1 206-999-7184 • UC On-Call Engineers: Scott Heilman (+1 206-397-2819), Owen Talbert, Rohan Debnath, Karthik Yadavalli • Recovery Document Owner: Dennis VanTrease • Ticket routing: Cherwell, Service \"Radio\", Category \"Avtec\", sent to ITS Network Unified Comms",
      applicationOwner:
        "UC Team, 206-688-3800 Opt 1, 24/7 (UC Manager: Dan Olson, +1 206-999-7184; Recovery Document Owner: Dennis VanTrease)",
      onCallSupport:
        "UC Team, 206-688-3800 Opt 1, 24/7 • UC On-Call Engineers: Scott Heilman (+1 206-397-2819), Owen Talbert, Rohan Debnath, Karthik Yadavalli",
      systemAdministration:
        "UC Team, 206-688-3800 Opt 1, 24/7 • UC Manager: Dan Olson, +1 206-999-7184 • UC On-Call Engineers: Scott Heilman (+1 206-397-2819), Owen Talbert, Rohan Debnath, Karthik Yadavalli • Recovery Document Owner: Dennis VanTrease • Ticket routing: Cherwell, Service \"Radio\", Category \"Avtec\", sent to ITS Network Unified Comms",
      businessOwner: "Network Unified Comms team (TeamUC@AlaskaAir.com)",
      passwordSupport: "ITS Service Desk, 877-238-1077",
      internalDirectory: [
        {
          role: "System Admin / ITS System Owner",
          contact: "UC Team, 206-688-3800 Opt 1, 24/7"
        },
        {
          role: "Business Owner",
          contact: "Network Unified Comms team (TeamUC@AlaskaAir.com)"
        },
        {
          role: "UC Manager",
          contact: "Dan Olson, +1 206-999-7184"
        },
        {
          role: "UC On-Call Engineers",
          contact:
            "Scott Heilman (+1 206-397-2819), Owen Talbert, Rohan Debnath, Karthik Yadavalli"
        },
        {
          role: "Recovery Document Owner",
          contact: "Dennis VanTrease"
        },
        {
          role: "Ticket routing",
          contact:
            "Cherwell, Service \"Radio\", Category \"Avtec\", sent to ITS Network Unified Comms"
        },
        {
          role: "Password support",
          contact: "ITS Service Desk, 877-238-1077"
        }
      ]
    },
    incidentHistory: [
      {
        id: "INC 3358692",
        date: "8/14/2026",
        severity: "Medium",
        duration: "PDX Outbound Calling",
        summary:
          "Outbound calls fail. Gate-change coordination slows down, with potential flight delays (PDX, 8/14/2026).",
        rootCause: "Avtec outbound call path unavailable at PDX.",
        resolution:
          "Operators used fallback communication workarounds (personal phones, MS Teams, radios, or rollover/backup line) while UC restored outbound calling."
      },
      {
        id: "INC 3399523",
        date: "Documented Incident",
        severity: "High",
        duration: "Voice Path Failover",
        summary: "MX Control can't call out to assign techs.",
        rootCause: "Degraded Hub/Lumen voice circuits along the primary voice path.",
        resolution:
          "Restored by manually moving voice traffic away from affected Hub/Lumen voice circuits to the Data Center call-processing path."
      },
      {
        id: "MI6587",
        date: "Documented Incident",
        severity: "Sev 1",
        duration: "SEA UPS Failure",
        summary:
          "A SEA UPS failure (MI6587) took down Avtec along with A/G and G/G radios.",
        rootCause: "SEA UPS power failure impacting Avtec and radio infrastructure.",
        resolution:
          "Dispatch fell back on ACARS, SATCOM, and aircraft voice call-back until power and Avtec/radio consoles were restored."
      },
      {
        id: "CR 131815",
        date: "September 2026",
        severity: "Sev 1 / Sev 2",
        duration: "Firewall Change Rollback",
        summary:
          "Corporate firewall change CR 131815 (SIP ALG) broke Avtec until it was rolled back.",
        rootCause: "Corporate firewall SIP ALG change (CR 131815).",
        resolution: "Rolled back CR 131815 on corporate firewalls."
      },
      {
        id: "INC 3340834",
        date: "Documented Incident",
        severity: "High",
        duration: "PDX CUCM Re-IP",
        summary:
          "PDX Avtec not working following a CUCM Subscriber re-IP; cluster reboots and re-IPs have taken Avtec down before.",
        rootCause: "PDX CUCM Subscriber re-IP impacting Avtec endpoints.",
        resolution:
          "Restarted VPGate Audio Service and updated CUCM subscriber assignment."
      }
    ],
    relatedDocuments: [
      {
        title: "Avtec_System_Summary.docx",
        type: "System Summary (Word)",
        owner: "ITS Network Unified Communications (UC Team)",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BD133257A-7A3C-48D7-ADD7-1AB4B276F57B%7D&file=Avtec_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "No Audio being played on Avtec Speaker.docx",
        type: "Troubleshooting Guide (Word)",
        owner: "ITS Network Unified Communications (UC Team)",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B5733E8E7-831C-4E10-A0A2-43BEA98221D0%7D&file=No%20Audio%20being%20played%20on%20Avtec%20Speaker.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Air-to-Ground and Ground-to-Ground Troubleshooting.docx",
        type: "Troubleshooting Guide (Word)",
        owner: "UC Team / Field Services",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B4F8A7052-7142-4107-8795-B89911196FB8%7D&file=Air-to-Ground%20and%20Ground-to-Ground%20Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Technology Recovery Document - AVTEC.docx",
        type: "Technology Recovery Document (Word - Tier 0)",
        owner: "Dennis VanTrease / UC Team",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BB34249B0-7177-4364-9DD2-A9221D8B5AE5%7D&file=Technology%20Recovery%20Document%20-%20AVTEC.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Avtec User Guide.docx",
        type: "User Guide (Word)",
        owner: "UC Team / Flight Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BC5F0E464-DCB6-4750-BA07-2458164EE50F%7D&file=Avtec%20User%20Guide.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Avtec_DR_Plan.xlsx",
        type: "Disaster Recovery Plan (Excel)",
        owner: "Dan Olson / Scott Heilman / UC Team",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/sc/DR/_layouts/15/Doc.aspx?sourcedoc=%7BF9F9A3E8-4BFF-41D1-A3ED-F2C7E4A761C3%7D&file=Avtec_DR_Plan.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "2026_Avtec_DR_Plan.xlsx",
        type: "Disaster Recovery Plan (Excel)",
        owner: "Dan Olson / Scott Heilman / UC Team",
        updated: "2026",
        url: "https://alaskaair.sharepoint.com/sites/sc/DR/_layouts/15/Doc.aspx?sourcedoc=%7BB4A9DD5B-16D0-4A62-9A31-339721511A8F%7D&file=2026_Avtec_DR_Plan.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Bridge Standard Operating Procedures V8 FINAL.docx",
        type: "NOC Standards & Training SOP (Word)",
        owner: "NOC Bridge",
        updated: "V8 Final",
        url: "https://alaskaair.sharepoint.com/sites/NOCStandardsTraining/_layouts/15/Doc.aspx?sourcedoc=%7BC694622B-A1A0-4D05-AE52-0C43EEE06995%7D&file=Bridge%20Standard%20Operating%20Procedures%20V8%20FINAL.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "NOC Bridge Guide_V13 FINAL.pdf",
        type: "NOC Bridge Manual (PDF)",
        owner: "NOC Bridge",
        updated: "V13 Final",
        url: "https://alaskaair.sharepoint.com/sites/NOCStandardsTraining/Shared%20Documents/Manuals/NOC%20Bridge%20Guide_V13%20FINAL.pdf?web=1"
      },
      {
        title: "User states EndpointLine displays IN USE or they are not able to SelectGrab the line (it shows OFFLINE) but no one is actually using it.docx",
        type: "Troubleshooting Runbook (Word)",
        owner: "UC Team / SysDocs",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B8573A29C-1C9C-44A1-B042-CB815CB8CF2E%7D&file=User%20states%20EndpointLine%20displays%20IN%20USE%20or%20they%20are%20not%20able%20to%20SelectGrab%20the%20line%20(it%20shows%20OFFLINE)%20but%20no%20one%20is%20actually%20using%20it.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Avtec Common Troubleshooting Steps.docx",
        type: "Troubleshooting Guide (Word)",
        owner: "UC Team / Production Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B0B10D599-8648-4557-8B73-CB5D67CF8676%7D&file=Avtec%20Common%20Troubleshooting%20Steps.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Executive Summary of Incidents 2025-12 to Current Date.xlsx",
        type: "Executive Incident Summary (Excel)",
        owner: "ITS Production Operations",
        updated: "2026",
        url: "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7BE5D240DC-3123-4D8D-8A59-CF1533D32C5B%7D&file=Executive%20Summary%20of%20Incidents%202025-12%20to%20Current%20Date.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "RRT0-2026-02-01-01-Remotes radios OTS (OneNote)",
        type: "Rapid Response Tier 0 Log (OneNote)",
        owner: "ITS Production Operations",
        updated: "2026-02-01",
        url: "https://alaskaair.sharepoint.com/sites/RapidResponseTier0-2026/_layouts/15/Doc.aspx?action=edit&mobileredirect=true&wdorigin=Sharepoint&DefaultItemOpen=1&sourcedoc=%7Baa538122-0d0b-4713-aa06-83613809aaf0%7D&wd=target(/RRT0-2026-02-01-01-%20Remotes%20radios%20OTS.one/)&wdpartid=%7B1c1e841b-c862-429f-a5fb-7b15fed24ac7%7D%7B65%7D&wdsectionfileid=%7B600c0e82-5fc9-4eef-9280-ed6fa902d539%7D"
      },
      {
        title: "3274437 - AvTech SSR feed issue (Teams)",
        type: "Disambiguation Reference (Teams)",
        owner: "ITS Production Operations",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:c5314747d0a747e1afdff20bcb58c422@thread.v2/1780423716322?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "S2-S3 June - AvTech vs Avtec (Teams)",
        type: "Disambiguation Reference (Teams)",
        owner: "ITS Production Operations",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:eb4d0ceff99a4ae9937c64946039dc84@thread.v2/1782229896485?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "3267239 - Air-to-Ground radio outage (Teams)",
        type: "Incident Thread (Teams)",
        owner: "UC Team / Field Services",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:aee0e16e263e4807a98de1fb64faf544@thread.v2/1779830678658?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "AAG Sev 1 Performance Bridge - MI6587 SEA UPS / Avtec (Teams)",
        type: "Sev 1 Incident Bridge (Teams)",
        owner: "ITS Production Operations / UC Team",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:meeting_ZjZhNDIxMmMtZDU3OS00MGFiLTgzZTctZWM0MjI3NzY5OGJl@thread.v2/1791423461102?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "3189754 - SATCOM voice via Avtec / MAX fleet (Teams)",
        type: "Incident Thread (Teams)",
        owner: "UC Team / Flight Operations",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:a0b6abb5cf0f4eaf9d227677b7accba5@thread.v2/1789744338652?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "3257828 - HigherGround recording calls (Teams)",
        type: "Incident Thread (Teams)",
        owner: "UC Team",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:c72739197a064902935490b612fb5297@thread.v2/1779077511356?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "INC0002050 - laxpravtec01b alert (Outlook)",
        type: "Monitoring Alert Email (Outlook)",
        owner: "ITS Production Operations / NetOps",
        updated: "Incident Reference",
        url: "https://outlook.office365.com/owa/?ItemID=AAMkADQ3NmM0N2MxLThlMDktNDcwMC1iNGUzLWUwNjcwOGE2YmVjMQBGAAAAAAAHZJq3IE%2fqR7PNFWEcMesaBwCHiomNgAhoTr%2bjmuA%2fjTbyAAAAAAEMAACHiomNgAhoTr%2bjmuA%2fjTbyAAG2mI3SAAA%3d&exvsurl=1&viewmodel=ReadMessageItem"
      },
      {
        title: "INC0002049 - laxpravtec01a alert (Outlook)",
        type: "Monitoring Alert Email (Outlook)",
        owner: "ITS Production Operations / NetOps",
        updated: "Incident Reference",
        url: "https://outlook.office365.com/owa/?ItemID=AAMkADQ3NmM0N2MxLThlMDktNDcwMC1iNGUzLWUwNjcwOGE2YmVjMQBGAAAAAAAHZJq3IE%2fqR7PNFWEcMesaBwCHiomNgAhoTr%2bjmuA%2fjTbyAAAAAAEMAACHiomNgAhoTr%2bjmuA%2fjTbyAAG2mI3RAAA%3d&exvsurl=1&viewmodel=ReadMessageItem"
      },
      {
        title: "S2 - S3 September - CUCM / Station Ops lines (Teams)",
        type: "Incident Thread (Teams)",
        owner: "ITS Production Operations / UC Team",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:142ca8e2ddff401d99f23682350fce72@thread.v2/1790180859926?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "3340834 - PDX Avtec not working (Teams)",
        type: "Incident Thread (Teams)",
        owner: "Production Operations / UC Team",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:e25edb72a12542d381b9da31051749bc@thread.v2/1785396628764?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "S1 - S2 September - CR 131815 SIP ALG (Teams)",
        type: "Incident Thread (Teams)",
        owner: "Production Operations / Network / UC Team",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:cada735373044188b9e279c85c4c30b7@thread.v2/1789031874285?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "3399523 - MEL Update / MX Control (Teams)",
        type: "Incident Thread (Teams)",
        owner: "Production Operations / UC Team",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:c160606227ea4a639e17b4bdb4b42b8c@thread.v2/1790288045047?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "3358692 - Outbound calls out at PDX 8/14/2026 (Teams)",
        type: "Incident Thread (Teams)",
        owner: "Production Operations / UC Team",
        updated: "2026-08-14",
        url: "https://teams.microsoft.com/l/message/19:bf724af558204d20b3d815b4f12783c2@thread.v2/1786759783078?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "Airgroup P1 & CFS Chat - MI6587 SEA UPS (Teams)",
        type: "Sev 1 Incident Chat (Teams)",
        owner: "ITS Production Operations",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:f54fc4e53f884bafa0404c683b973beb@thread.v2/1791420439134?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "S2 - S3 September - SIT, JNU, BRW station ops lines (Teams)",
        type: "Incident Thread (Teams)",
        owner: "ITS Production Operations / UC Team",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:142ca8e2ddff401d99f23682350fce72@thread.v2/1790095879816?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "3299886 - Desk Avtec won't turn on (Teams)",
        type: "Incident Thread (Teams)",
        owner: "ITS Production Operations / Field Services",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:9bc6b752d9ba4d628adb85e90b14d56c@thread.v2/1782332866134?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "S2-June - UC Manager & On-Call Engineers (Teams)",
        type: "Contact Reference (Teams)",
        owner: "UC Team",
        updated: "Contact Reference",
        url: "https://teams.microsoft.com/l/message/19:4933d693e4794b17b2816690aa31682f@thread.v2/1782217057697?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "Ankita Swamy in chat - UC On-Call Engineers (Teams)",
        type: "Contact Reference (Teams)",
        owner: "UC Team",
        updated: "Contact Reference",
        url: "https://teams.microsoft.com/l/message/19:318e497879104dd6bd30a7b413327588@thread.v2/1782229955878?context=%7B%22contextType%22:%22chat%22%7D"
      }
    ]
  },

  arinc: {
    id: "arinc",
    name: "ARINC",
    breadcrumbTrail: ["Vendors", "ARINC", "Vendor Impact"],
    pageTitle: "ARINC - Vendor Impact Details",
    pageSubtitle:
      "ARINC (Aeronautical Radio, Incorporated), now part of Collins Aerospace, carries air/ground ACARS communication, ATC flight plan filings, Type B messaging, and airport Common Use 3.0 services.",
    applicationsTabTitle: "ARINC",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "View all Alaska and Hawaiian applications and systems that depend on ARINC (Collins Aerospace), including business function, dependencies, and expected impact if ARINC is unavailable.",
    applicationsCardSubtitle:
      "Applications and systems that use ARINC (Aeronautical Radio, Incorporated / Collins Aerospace) network and platform services.",
    dependenciesTabTitle: "ARINC - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream data sent to ARINC, downstream consumers relying on data from ARINC, and bidirectional IBM MQ, VPN/NAT, AT&T BGP NID, and Aircom server infrastructure.",
    status: "Active",
    lastUpdated: "Apr 20, 2026 (ACARS_System_Summary & RCA MI6516)",
    subtitle:
      "Flight Ops: communication to aircraft (ACARS) · 24x7 Critical to operation · Collins Aerospace",
    company:
      "ARINC (Aeronautical Radio, Incorporated), now part of Collins Aerospace",
    website:
      "https://portal.arinc.net (you need an ARINC Portal login; otherwise use email or phone)",
    category: "Flight Ops: communication to aircraft (ACARS)",
    itsTeam: "ITS Flight Operations (ITS System Owner: Ryan Wilkins)",
    logo: "public/vendors/arinc.png",
    impactSummary: {
      confirmed: 0,
      potential: 9,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title: "Key Takeaways: 24x7 Critical to Operation",
      message:
        "ARINC is the network that carries air/ground communication between Alaska systems and aircraft. ACARS is rated \"24x7 Critical to operation\". On the vendor side, ARINC runs ACARS out of Annapolis and moves it to a backup center in Islip, NY each quarter, with switchover taking under 2 minutes."
    },
    impactedSystems: [
      {
        id: "arinc-acars-ground-system",
        name: "ACARS Ground System (SITA Aircom Server)",
        subName: "(IBM MQ QMAS ALASKA.FROM.ARINC / ALASKA.TO.ARINC)",
        appTabSubName: "(IBM MQ QMAS ALASKA.FROM.ARINC / ALASKA.TO.ARINC)",
        description:
          "Processes air-to-ground and ground-to-air ACARS messages: FLIFO, weather, telemetry, free text",
        appTabDescription:
          "Processes air-to-ground and ground-to-air ACARS messages: FLIFO, weather, telemetry, free text",
        businessFunction:
          "Aircraft communications, OOOI times, initialization data",
        impact: "Loss of message flow between ARINC and Alaska systems",
        dependencies:
          "IBM MQ QMAS (ALASKA.FROM.ARINC / ALASKA.TO.ARINC), SQL Server",
        status: "Potential",
        owner: "ITS Flight Operations, Ryan Wilkins"
      },
      {
        id: "arinc-wam-jetplan-atc",
        name: "WAM / Jetplan ATC flight plans",
        subName: "(QMAS ALASKA.TO.ARINC.ATC)",
        appTabSubName: "(QMAS ALASKA.TO.ARINC.ATC)",
        description:
          "Flight plans are sent through QMAS ALASKA.TO.ARINC.ATC to ARINC",
        appTabDescription:
          "Flight plans are sent through QMAS ALASKA.TO.ARINC.ATC to ARINC",
        businessFunction: "Flight planning / ATC filing",
        impact: "(Add Impact)",
        dependencies: "FOATCFlightPlans, FOATCMessenger, Fltops DB",
        status: "Potential",
        owner: "(Add Internal ITS Owner)"
      },
      {
        id: "arinc-sabre-dispatch",
        name: "Sabre (dispatch)",
        subName: "(Direct ARINC Dispatch Connection)",
        appTabSubName: "(Direct ARINC Dispatch Connection)",
        description:
          "Has its own connection to ARINC; Dispatch can send flight release updates, re-routes, and fuel estimates to aircraft",
        appTabDescription:
          "Has its own connection to ARINC; Dispatch can send flight release updates, re-routes, and fuel estimates to aircraft",
        businessFunction: "Dispatch / flight release",
        impact: "(Add Impact)",
        dependencies: "(Add Direct Dependencies)",
        status: "Potential",
        owner: "(Add Internal ITS Owner)"
      },
      {
        id: "arinc-boeing-wind-uplinks",
        name: "Boeing Wind Uplinks",
        subName: "(Direct Aircraft-to-Boeing Winds via ARINC)",
        appTabSubName: "(Direct Aircraft-to-Boeing Winds via ARINC)",
        description:
          "Aircraft talk to Boeing winds directly through ARINC; Alaska gets courtesy copies",
        appTabDescription:
          "Aircraft talk to Boeing winds directly through ARINC; Alaska gets courtesy copies",
        businessFunction: "Wind data",
        impact: "(Add Impact)",
        dependencies: "(Add Direct Dependencies)",
        status: "Potential",
        owner: "(Add Internal ITS Owner)"
      },
      {
        id: "arinc-aerodata-via-acars",
        name: "Aircraft Performance (AeroData) via ACARS",
        subName: "(ACARS → ARINC/SITA → Aircom → AeroData)",
        appTabSubName: "(ACARS → ARINC/SITA → Aircom → AeroData)",
        description:
          "Performance requests and responses travel ACARS → ARINC/SITA → Aircom → AeroData",
        appTabDescription:
          "Performance requests and responses travel ACARS → ARINC/SITA → Aircom → AeroData",
        businessFunction: "Takeoff/landing performance",
        impact: "No performance numbers reach crews",
        dependencies: "Aircom, AAG.TO.AD / AD.TO.AAG queues",
        status: "Potential",
        owner: "(Add Internal ITS Owner)"
      },
      {
        id: "arinc-flightkeys-fps",
        name: "Flight Planning System (FlightKeys/FPS)",
        subName: "(Position Reports & Flight Briefings via ARINC/SITA)",
        appTabSubName: "(Position Reports & Flight Briefings via ARINC/SITA)",
        description:
          "Position reports come in and flight briefings go out over ARINC/SITA",
        appTabDescription:
          "Position reports come in and flight briefings go out over ARINC/SITA",
        businessFunction: "Flight planning",
        impact: "(Add Impact)",
        dependencies: "Aircom, OpsCom CyberJet",
        status: "Potential",
        owner: "(Add Internal ITS Owner)"
      },
      {
        id: "arinc-flyways-messenger",
        name: "Flyways Messenger",
        subName: "(.SFOXGXA, .SFOWSXA, .HDQHDXA)",
        appTabSubName: "(.SFOXGXA, .SFOWSXA, .HDQHDXA)",
        description:
          "Routes Type B messages from ARINC source addresses (.SFOXGXA, .SFOWSXA, .HDQHDXA)",
        appTabDescription:
          "Routes Type B messages from ARINC source addresses (.SFOXGXA, .SFOWSXA, .HDQHDXA)",
        businessFunction: "Dispatch messaging",
        impact: "(Add Impact)",
        dependencies: "Message Address API",
        status: "Potential",
        owner: "(Add Internal ITS Owner)"
      },
      {
        id: "arinc-ha-acars-type-b",
        name: "HA ACARS / Type B",
        subName: "(VHF, HF, Satellite, SwiftBroadband IP, Type B)",
        appTabSubName: "(VHF, HF, Satellite, SwiftBroadband IP, Type B)",
        description:
          "ACARS (VHF, HF, Satellite), SwiftBroadband IP, Type B messaging",
        appTabDescription:
          "ACARS (VHF, HF, Satellite), SwiftBroadband IP, Type B messaging",
        businessFunction: "HA aircraft communications",
        impact: "(Add Impact)",
        dependencies: "(Add Direct Dependencies)",
        status: "Potential",
        owner: "(Add Internal ITS Owner)"
      },
      {
        id: "arinc-common-use-3",
        name: "Common Use 3.0 (Collins/ARINC platform)",
        subName: "(Airport Gate & Ticket Counter)",
        appTabSubName: "(Airport Gate & Ticket Counter)",
        description: "Common-use airport application",
        appTabDescription: "Common-use airport application",
        businessFunction: "Gate and ticket counter processing",
        impact: "Agents switch to CSAM",
        dependencies: "Squid proxy servers seavvproxy/tukvvproxy",
        status: "Potential",
        owner: "(Add Internal ITS Owner)"
      }
    ],
    upstreamDependencies: [
      "ALASKA.TO.ARINC queue on QMAS: written by Aircom, consumed by ARINC, forwarded to aircraft",
      "ALASKA.TO.ARINC.ATC: ATC flight plans from WAM/Jetplan",
      "Sabre dispatch uplinks"
    ],
    downstreamConsumers: [
      "ALASKA.FROM.ARINC, consumed by Aircom",
      "From Aircom, the data feeds S4A (COMM.V1.JMS.EXT_ACARS_INBOUND), TIBCO (FO.ENGINE.EVENTS), aircraft position events, and ACARS times",
      "Dispatch, CLP, FOGS ACARS History, AirtrAK/OOOI consumers"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Upstream data sent to ARINC (ALASKA.TO.ARINC queue on QMAS, ALASKA.TO.ARINC.ATC from WAM/Jetplan, Sabre dispatch uplinks), ARINC network services, and downstream consumers relying on data from ARINC.",
      diagramUpstream: [
        {
          id: "arinc-up-1",
          name: "ALASKA.TO.ARINC (QMAS)",
          subtitle: "Written by Aircom, consumed by ARINC, forwarded to aircraft",
          iconType: "transfer"
        },
        {
          id: "arinc-up-2",
          name: "ALASKA.TO.ARINC.ATC",
          subtitle: "ATC flight plans from WAM/Jetplan",
          iconType: "doc"
        },
        {
          id: "arinc-up-3",
          name: "Sabre Dispatch Uplinks",
          subtitle: "Flight release updates, re-routes & fuel estimates",
          iconType: "network"
        }
      ],
      diagramServices: [
        "ACARS Ground System (SITA Aircom Server)",
        "WAM / Jetplan ATC Flight Plans",
        "Aircraft Performance (AeroData) via ACARS",
        "Flyways Messenger & HA ACARS / Type B",
        "Common Use 3.0 (Collins/ARINC platform)"
      ],
      diagramDownstream: [
        {
          id: "arinc-down-1",
          name: "ALASKA.FROM.ARINC",
          subtitle: "Consumed by Aircom",
          iconType: "nodes"
        },
        {
          id: "arinc-down-2",
          name: "S4A, TIBCO & ACARS Events",
          subtitle: "COMM.V1.JMS.EXT_ACARS_INBOUND & FO.ENGINE.EVENTS",
          iconType: "database"
        },
        {
          id: "arinc-down-3",
          name: "Dispatch, CLP, FOGS & AirtrAK",
          subtitle: "FOGS ACARS History & AirtrAK/OOOI consumers",
          iconType: "team"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 3, tone: "red" },
        { label: "Downstream Consumers", count: 3, tone: "green" },
        { label: "Applications & Systems", count: 9, tone: "blue" },
        { label: "Infrastructure Components", count: 3, tone: "purple" }
      ],
      keyTakeaways: [
        "ARINC is the network that carries air/ground communication between Alaska systems and aircraft. ACARS is rated \"24x7 Critical to operation\". On the vendor side, ARINC runs ACARS out of Annapolis and moves it to a backup center in Islip, NY each quarter, with switchover taking under 2 minutes."
      ],
      upstreamTable: [
        {
          id: "arinc-upt-1",
          name: "ALASKA.TO.ARINC queue on QMAS",
          subName: "(Written by Aircom, consumed by ARINC)",
          description:
            "ALASKA.TO.ARINC queue on QMAS: written by Aircom, consumed by ARINC, forwarded to aircraft",
          type: "Internal / MQ",
          impact:
            "Loss of ground-to-air ACARS message flow from Alaska systems to aircraft"
        },
        {
          id: "arinc-upt-2",
          name: "ALASKA.TO.ARINC.ATC",
          subName: "(WAM / Jetplan ATC Filing)",
          description: "ALASKA.TO.ARINC.ATC: ATC flight plans from WAM/Jetplan",
          type: "Internal / MQ",
          impact: "ATC flight plans from WAM/Jetplan do not reach ARINC"
        },
        {
          id: "arinc-upt-3",
          name: "Sabre dispatch uplinks",
          subName: "(Sabre Direct Connection to ARINC)",
          description:
            "Sabre has its own connection to ARINC; Dispatch sends flight release updates, re-routes, and fuel estimates to aircraft",
          type: "External / Dispatch",
          impact:
            "Dispatch flight release updates, re-routes, and fuel estimates cannot be sent over Sabre's connection to ARINC"
        }
      ],
      downstreamTable: [
        {
          id: "arinc-dwt-1",
          name: "ALASKA.FROM.ARINC, consumed by Aircom",
          description: "ALASKA.FROM.ARINC, consumed by Aircom",
          type: "Internal / MQ",
          impact:
            "Loss of inbound air-to-ground message flow from ARINC into Aircom"
        },
        {
          id: "arinc-dwt-2",
          name: "S4A, TIBCO, aircraft position events, and ACARS times",
          description:
            "From Aircom, the data feeds S4A (COMM.V1.JMS.EXT_ACARS_INBOUND), TIBCO (FO.ENGINE.EVENTS), aircraft position events, and ACARS times",
          type: "Internal Systems",
          impact:
            "S4A (COMM.V1.JMS.EXT_ACARS_INBOUND), TIBCO (FO.ENGINE.EVENTS), aircraft position events, and ACARS times stop receiving updates"
        },
        {
          id: "arinc-dwt-3",
          name: "Dispatch, CLP, FOGS ACARS History, AirtrAK/OOOI consumers",
          description:
            "Dispatch, CLP, FOGS ACARS History, AirtrAK/OOOI consumers",
          type: "Internal Operations",
          impact:
            "OOOI times stop updating, airborne aircraft can't be pinged, and messages are missing from ACARS History"
        }
      ],
      infrastructureTable: [
        {
          id: "arinc-inf-1",
          component: "IBM MQ Channels & VPN / NAT'd IPs",
          description:
            "MQ traffic runs both ways. ARINC's requester connects to Alaska's QMAS.AMX1 server channel, and ARINC's sender channels connect to Alaska's AMX1QM1.QMAS and AMX1QM2.QMAS receiver channels. The connection goes over VPN using NAT'd IPs 159.49.240.60, 10.80.96.123, and 159.49.42.170.",
          owner: "Middleware (IBM MQ) / ITS Network",
          impact:
            "Channel or VPN failures stop MQ message flow (alert or email from AOC@arinc.com about AMX1QM1.QMAS is Sev 1)"
        },
        {
          id: "arinc-inf-2",
          component: "ARINC Network Interface Devices (NIDs) & BGP Routing",
          description:
            "ARINC network interface devices (NIDs) sit in each datacenter, with BGP routing over AT&T circuits (SE4/IGQ). An improvement plan replaces the single old \"ASAR\" NID in each datacenter with two new ones.",
          owner: "ARINC (Collins Aerospace) / ITS Network",
          impact:
            "AT&T circuit failure on ARINC router or BGP route issue stops MQ message flow (e.g., Sev1 MI6516)"
        },
        {
          id: "arinc-inf-3",
          component: "Aircom App & Database Servers",
          description:
            "Aircom app servers are SEAVVACARSAPP03 and TUKVVACARSAPP03. The database servers are SEAPRACARSSQL02 and TUKPRACARSSQL02.",
          owner: "ITS Flight Operations",
          impact:
            "Hosts Aircom application services and SQL databases processing ACARS messages"
        }
      ]
    },
    typicalBusinessImpact: [
      "Sev1 MI6516 (1/9/2026): an AT&T circuit failure on the ARINC SE4 router plus a BGP route issue stopped MQ message flow. Impact lasted 5h 51m and caused 68 AAG delays totaling 1,075 minutes.",
      "OOOI times stopped updating, airborne aircraft couldn't be pinged, and messages were missing from ACARS History.",
      "A single-station outage (JNU) cut off automated aircraft communications."
    ],
    knownWorkarounds: [
      "Enter OOOI times and flight plans manually",
      "Get flight and fuel info from pilots by radio, enter Web Send Times manually, and relay final numbers to crews",
      "For Common Use: use CSAM, print bag tags at kiosks, and send boarding passes to customers' phones"
    ],
    vendorContacts: {
      companyNote:
        "ARINC (Aeronautical Radio, Incorporated), now part of Collins Aerospace",
      categoryNote:
        "Operational Category: Flight Ops: communication to aircraft (ACARS) • Support Portal URL: https://portal.arinc.net (you need an ARINC Portal login; otherwise use email or phone)",
      supportPhone: "800-633-6882",
      supportPhoneNote:
        "Older documents also list 800-482-0004 and 800-482-0006.",
      supportEmail: "AOChelpdesk@collins.com",
      supportEmailNote:
        "ARINC email contact info last updated 4/20/2026. Older documents list helpdesk@arinc.com, and the HA vendor list shows ops_hd@arinc.com.",
      secondaryEmail: "AOC@collins.com",
      secondaryEmailNote:
        "Escalation (24x7): Senior On-Duty Ops Manager (rotating), 410-266-4029 • Older docs: helpdesk@arinc.com / ops_hd@arinc.com",
      supportHours: "24x7 (rotating Senior On-Duty Operations Manager)",
      accountManager:
        "Brian Anderson (+1-786-527-1079 / brian.anderson1@collins.com)",
      namedEscalationContact:
        "Senior On-Duty Ops Manager (rotating): 410-266-4029 / AOC@collins.com • 2nd Level (Director, ARINC Operations Center): James Schuler (O 410-266-2084 / C 319-830-1204 / James.Schuler@Collins.com) • 3rd Level (Head of Global Network Solutions): Paul Hickox (O +44 1293 64 1293 / C +44 7736 05 5114 / Paul.Hickox@Collins.com)",
      technicalSupport:
        "Collins Aerospace Help Desk: 800-633-6882 / AOChelpdesk@collins.com (older phones: 800-482-0004, 800-482-0006; older emails: helpdesk@arinc.com, ops_hd@arinc.com) • Escalation (24x7): Senior On-Duty Ops Manager (rotating), 410-266-4029 / AOC@collins.com • CSM (ACARS): Joseph Pagan (+1-410-588-9191 / joseph.pagan@collins.com)",
      contactDirectory: [
        {
          role: "Help Desk",
          name: "Collins Aerospace Help Desk",
          phone: "800-633-6882",
          email: "AOChelpdesk@collins.com"
        },
        {
          role: "Escalation (24x7)",
          name: "Senior On-Duty Ops Manager (rotating)",
          phone: "410-266-4029",
          email: "AOC@collins.com"
        },
        {
          role: "2nd Level: Director, ARINC Operations Center",
          name: "James Schuler",
          phone: "O 410-266-2084 / C 319-830-1204",
          email: "James.Schuler@Collins.com"
        },
        {
          role: "3rd Level: Head of Global Network Solutions",
          name: "Paul Hickox",
          phone: "O +44 1293 64 1293 / C +44 7736 05 5114",
          email: "Paul.Hickox@Collins.com"
        },
        {
          role: "Account Manager",
          name: "Brian Anderson",
          phone: "+1-786-527-1079",
          email: "brian.anderson1@collins.com"
        },
        {
          role: "Customer Success Manager (ACARS)",
          name: "Joseph Pagan",
          phone: "+1-410-588-9191",
          email: "joseph.pagan@collins.com"
        },
        {
          role: "Network Services Sales/Marketing Director",
          name: "Terry Hughes",
          phone: "O 410-266-4939 / C 443-243-5957",
          email: "terrance.hughes@collins.com"
        },
        {
          role: "Program Manager, Avionics",
          name: "Luke Wilson",
          phone: "+1-704-737-3612",
          email: "(Add email)"
        },
        {
          role: "Senior Manager, Network Services",
          name: "Steve Andrews",
          phone: "O 410-266-4305 / C 410-693-2427",
          email: "Stephen.Andrews@Collins.com"
        }
      ],
      contactWarningNote:
        "⚠️ In the ACARS System Summary escalation image, the email addresses for Brian Anderson and Luke Wilson look shifted by one row. Please check them before you publish.",
      escalation:
        "Vendor Contacts:\n• Help Desk: Collins Aerospace Help Desk | 800-633-6882 | AOChelpdesk@collins.com (older phones: 800-482-0004, 800-482-0006; older emails: helpdesk@arinc.com, ops_hd@arinc.com)\n• Escalation (24x7): Senior On-Duty Ops Manager (rotating) | 410-266-4029 | AOC@collins.com\n• 2nd Level: Director, ARINC Operations Center: James Schuler | O 410-266-2084 / C 319-830-1204 | James.Schuler@Collins.com\n• 3rd Level: Head of Global Network Solutions: Paul Hickox | O +44 1293 64 1293 / C +44 7736 05 5114 | Paul.Hickox@Collins.com\n• Account Manager: Brian Anderson | +1-786-527-1079 | brian.anderson1@collins.com\n• Customer Success Manager (ACARS): Joseph Pagan | +1-410-588-9191 | joseph.pagan@collins.com\n• Network Services Sales/Marketing Director: Terry Hughes | O 410-266-4939 / C 443-243-5957 | terrance.hughes@collins.com\n• Program Manager, Avionics: Luke Wilson | +1-704-737-3612 | (Add email)\n• Senior Manager, Network Services: Steve Andrews | O 410-266-4305 / C 410-693-2427 | Stephen.Andrews@Collins.com\n⚠️ In the ACARS System Summary escalation image, the email addresses for Brian Anderson and Luke Wilson look shifted by one row. Please check them before you publish.",
      communicationGuidelines: [
        "Before escalating, collect the scope: tail and flight number, date and city pair, fleet-wide or not, and which ops group is affected (SOC/Dispatch/CLP).",
        "For a station outage: check ARINC's outage emails, report the station, ask for a resolution time, and update the customer."
      ],
      responseSlas: [
        {
          priority: "Internal",
          label: "Internal",
          level: "Internal Criticality & Triage Limit",
          description:
            "24x7 critical to operation. ProdOps triage time limit is 15 minutes.",
          target:
            "24x7 critical to operation. ProdOps triage time limit is 15 minutes.",
          value:
            "24x7 critical to operation. ProdOps triage time limit is 15 minutes."
        },
        {
          priority: "Vendor initial response time",
          label: "Vendor initial response time",
          level: "Vendor Initial Response SLA",
          description: "Vendor initial response time",
          target: "(Add Response Targets)",
          value: "(Add Response Targets)"
        },
        {
          priority: "Sev 1/Sev 2 update cadence",
          label: "Sev 1/Sev 2 update cadence",
          level: "Incident Update Cadence",
          description: "Sev 1/Sev 2 update cadence",
          target: "(Add Update Cadence)",
          value: "(Add Update Cadence)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS Flight Operations (ITS System Owner: Ryan Wilkins)",
      itsTeamNote:
        "On-Call: COG FltOps / ITS FltOps on-call; Middleware (IBM MQ) • ACARS SMEs: John Thivierge, Sylvain Laviolette",
      applicationOwner: "Ryan Wilkins, 206-972-0228",
      businessOwner:
        "James Falen (Flight Ops), 425-679-2135 (cell) / 206-392-6083 (desk)",
      systemAdministration: "Andy Nunez, Arun Sharma, 206-392-8613",
      everbridgeContacts: "Everbridge Backup: Charles Ostick, 877-238-1077",
      onCallSupport: "COG FltOps / ITS FltOps on-call; Middleware (IBM MQ)",
      acarsSmes: "John Thivierge, Sylvain Laviolette",
      internalDirectory: [
        { role: "ITS System Owner", contact: "Ryan Wilkins, 206-972-0228" },
        {
          role: "Business Owner",
          contact:
            "James Falen (Flight Ops), 425-679-2135 (cell) / 206-392-6083 (desk)"
        },
        {
          role: "System Administration",
          contact: "Andy Nunez, Arun Sharma, 206-392-8613"
        },
        { role: "Everbridge Backup", contact: "Charles Ostick, 877-238-1077" },
        {
          role: "On-Call",
          contact: "COG FltOps / ITS FltOps on-call; Middleware (IBM MQ)"
        },
        { role: "ACARS SMEs", contact: "John Thivierge, Sylvain Laviolette" }
      ]
    },
    validationChecklist: [
      "Open the Aircom status page (acars.app.insideaag.com/StatusReport.htm) and confirm all required services are green.",
      "If only IBM MQ Links show red, restart the AS IBM MQ Connector. If it's still disconnected, restart all Aircom services.",
      "If you get an alert or email from AOC@arinc.com about MQ channel AMX1QM1.QMAS, treat it as Sev 1 and engage Middleware (IBM MQ).",
      "For an ALASKA.TO.ARINC alert, open a Sev 2, contact ARINC, and contact FltOps on-call.",
      "For an ALASKA.FROM.ARINC alert, restart AircomWebSvcInvokerSvc on SEAVVAPP22/TUKVVAPP22. If the queue doesn't clear, restart the Aircom services. If it still doesn't clear, open a Sev 2 and contact FltOps on-call.",
      "If only one station is affected, search the Aircom log by station code. If there are no current messages, contact ARINC with the station and ask for an ETA."
    ],
    incidentHistory: [
      {
        id: "MI6516",
        date: "1/9/2026",
        severity: "Sev 1",
        summary:
          "Sev1 MI6516 (1/9/2026): an AT&T circuit failure on the ARINC SE4 router plus a BGP route issue stopped MQ message flow. Impact lasted 5h 51m and caused 68 AAG delays totaling 1,075 minutes. OOOI times stopped updating, airborne aircraft couldn't be pinged, and messages were missing from ACARS History.",
        resolution:
          "Restored AT&T circuit and BGP routing on the ARINC SE4 router to resume MQ message flow."
      },
      {
        id: "JNU Station Outage",
        date: "Documented Incident",
        severity: "Station Outage",
        summary:
          "A single-station outage (JNU) cut off automated aircraft communications.",
        resolution:
          "Searched Aircom log by station code, contacted ARINC with station code for ETA, and used manual OOOI and radio workarounds."
      }
    ],
    relatedDocuments: [
      {
        title: "ACARS_System_Summary.docx",
        type: "System Summary (Word)",
        owner: "ITS Flight Operations",
        updated: "2026-04-20",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BE5D614AD-8759-464D-ABD0-0B87929F4568%7D&file=ACARS_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARS_Triage_Troubleshooting.docx",
        type: "Triage & Troubleshooting (Word)",
        owner: "ITS Flight Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B781CA6D6-1F42-4C55-BEF2-C5D8C9704290%7D&file=ACARS_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARS_Physical_View.pdf",
        type: "Physical Architecture Diagram (PDF)",
        owner: "ITS Flight Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/ACARS%20(AS)/ACARS_Physical_View.pdf?web=1"
      },
      {
        title: "Arinc-improvement.docx",
        type: "Network Improvement Plan (Word)",
        owner: "ITS Network / ASICS",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ASICS/IO/NC/_layouts/15/Doc.aspx?sourcedoc=%7B5962904C-6830-48BD-A139-B4131C9C8B7B%7D&file=Arinc-improvement.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "HA Vendor Contacts (Cutover.one)",
        type: "HA Vendor Contacts (OneNote)",
        owner: "AS/HA Cutover",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ashatimo/_layouts/15/Doc.aspx?action=edit&mobileredirect=true&wdorigin=Sharepoint&DefaultItemOpen=1&sourcedoc=%7B8501a0a1-545b-4119-bfbf-e0d9e5a13d8c%7D&wd=target(/Cutover.one/)&wdpartid=%7B4cda5f21-693c-43c7-96cc-e478f4a39e2a%7D%7B1%7D&wdsectionfileid=%7Bed20e517-229c-4798-ae2f-700c014416aa%7D"
      },
      {
        title: "Vendor Contacts - Ground Stop Applications.docx",
        type: "Vendor Contacts Directory (Word)",
        owner: "ITS Production Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B6A63CAD1-1305-4213-A63E-0A904BCFFD7D%7D&file=Vendor%20Contacts%20-%20Ground%20Stop%20Applications.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Vendor Escalation for Critical Systems.docx",
        type: "Escalation Reference (Word)",
        owner: "ITS Production Operations",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BB85271C7-A549-4429-8EC8-01EBAFF93C00%7D&file=Vendor%20Escalation%20for%20Critical%20Systems.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "MQ Business Partners.docx",
        type: "Middleware Business Partners (Word)",
        owner: "Middleware (IBM MQ)",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BAF79CA3F-C0EE-4DD5-B67B-41BF8BCB0799%7D&file=MQ%20Business%20Partners.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARS System Summary.docx",
        type: "System Summary - Knowledge Management (Word)",
        owner: "ITS Knowledge Management",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B2BB39DDA-09AB-4472-B50C-30C9FBA44CF5%7D&file=ACARS%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "RCA - Sev1 - MI6516 - ACARS is degraded impacting flight operations and planning.docx",
        type: "Sev 1 Root Cause Analysis (Word - ITSSev1Response)",
        owner: "ITS Sev 1 Response",
        updated: "2026-01-09",
        url: "https://alaskaair.sharepoint.com/sites/ITSSev1Response/_layouts/15/Doc.aspx?sourcedoc=%7B594EDDF3-1DF8-4F61-8BF9-E2C992B1CBDD%7D&file=RCA%20-%20Sev1%20-%20MI6516%20-%20ACARS%20is%20degraded%20impacting%20flight%20operations%20and%20planning.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "RCA - Sev1 - MI6516 - ACARS is degraded impacting flight operations and planning (ProdOps Copy).docx",
        type: "Sev 1 Root Cause Analysis (Word - ProdOps)",
        owner: "ITS Production Operations",
        updated: "2026-01-09",
        url: "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7B0C81CDB7-694E-48F2-B40A-ECDEE71FF9B0%7D&file=RCA%20-%20Sev1%20-%20MI6516%20-%20ACARS%20is%20degraded%20impacting%20flight%20operations%20and%20planning.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "E2E Test Strategy - Flight Planning System Replacement_V0.1.pptx",
        type: "E2E Test Strategy Presentation (PowerPoint)",
        owner: "Alaska E2E Testing",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/AlaskaE2ETesting/_layouts/15/Doc.aspx?sourcedoc=%7B45417EC3-08B2-46C7-A5DF-AE77AB217C2D%7D&file=E2E%20Test%20Strategy%20-%20Flight%20Planning%20System%20Replacement_V0.1.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Flyways Messenger Routing Logic (ADO Wiki)",
        type: "ADO Wiki Documentation",
        owner: "ITS Flight Operations",
        updated: "Additional Source",
        url: "https://itsals.visualstudio.com/FlightOperationsGIT/_wiki/wikis/FlightOperationsGIT.wiki/44212"
      },
      {
        title: "Common Use 3.0_Runbook.docx",
        type: "Operational Runbook (Word)",
        owner: "Common Use",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/CommonUse/_layouts/15/Doc.aspx?sourcedoc=%7B84E1FF6D-FDA4-490A-92BA-0413EE45C14D%7D&file=Common%20Use%203.0_Runbook.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Business Partner Inventory.xlsx",
        type: "Middleware Partner Inventory (Excel)",
        owner: "Middleware (IBM MQ)",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/Middleware/_layouts/15/Doc.aspx?sourcedoc=%7B4B46202C-325C-4E41-B949-256A8B1D0625%7D&file=Business%20Partner%20Inventory.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "2025_ARINCvendor_DR.pdf",
        type: "Vendor Disaster Recovery Plan (PDF)",
        owner: "DR Program / ITS Flight Operations",
        updated: "2025",
        url: "https://alaskaair.sharepoint.com/sites/sc/DR/DR%20Plans%20Editable%20Tier%200%201%20%202/Vendor%20Owned%20DR%20Plans/2025_ARINCvendor_DR.pdf?web=1"
      },
      {
        title: "AAG Sev 1 Performance Bridge (Teams)",
        type: "Incident Bridge Thread (Teams)",
        owner: "Production Operations / Flight Operations",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:meeting_ZjZhNDIxMmMtZDU3OS00MGFiLTgzZTctZWM0MjI3NzY5OGJl@thread.v2/1788891520346?context=%7B%22contextType%22:%22chat%22%7D"
      }
    ]
  },

  boeing: {
    id: "boeing",
    name: "Boeing Toolbox",
    breadcrumbTrail: ["Vendors", "Boeing", "Vendor Impact"],
    pageTitle: "Boeing Toolbox - Vendor Impact Details",
    pageSubtitle:
      "Boeing Toolbox is the online library maintenance uses to look up Boeing fleet manuals, hosted externally by Boeing via My Boeing Fleet (MBF).",
    applicationsTabTitle: "Boeing",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "View all Alaska Maintenance & Engineering applications and continuity tools associated with Boeing Toolbox (MPT, MBF, TML, TBR).",
    applicationsCardSubtitle:
      "Applications and systems supported by Boeing for maintenance manuals, task cards, mobile access, and standalone continuity.",
    dependenciesTabTitle: "Boeing Toolbox - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream dependencies, downstream M&E operational consumers, and Express Connect SAML SSO, browser/plug-in, network, and monitoring infrastructure.",
    status: "Active",
    lastUpdated: "2026 (Boeing_Toolbox_System_Summary & Triage Runbooks)",
    subtitle:
      "Maintenance (M&E): maintenance reference library (24/7 During Maintenance · Most Critical 6p–6a)",
    company: "Boeing",
    website:
      "http://myboeingfleet.com (Boeing Service Requests, account required). The Toolbox itself is at https://myboeingfleet.boeing.com/toolbox/.",
    category: "Maintenance (M&E): maintenance reference library",
    itsTeam:
      "ITS COG M&E App Support (Jerred Slavata / Rituraj; Application Support: M&E and Safety ITS – On Call 24x7)",
    logo: "public/vendors/boeing.png",
    impactSummary: {
      confirmed: 0,
      potential: 4,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      level: "Critical",
      title: "Key Takeaways: 24/7 Maintenance Reference Library (Most Critical 6p–6a)",
      message:
        "Boeing Toolbox is the online library maintenance uses to look up Boeing fleet manuals. Boeing hosts it externally, so it depends on internet access and Boeing SSO. MPT has to be available 24/7 whenever maintenance work is underway, and the overnight 6p–6a window matters most."
    },
    impactedSystems: [
      {
        id: "boeing-mpt",
        name: "Maintenance Performance Toolbox (MPT)",
        subName: "(https://myboeingfleet.boeing.com/toolbox/ · Critical 6p–6a)",
        appTabSubName: "(https://myboeingfleet.boeing.com/toolbox/ · Critical 6p–6a)",
        description:
          "Boeing's maintenance reference library, opened in a browser through My Boeing Fleet",
        appTabDescription:
          "Boeing's maintenance reference library, opened in a browser through My Boeing Fleet",
        businessFunction: "Maintenance manuals, task cards, requirements",
        impact:
          "Techs lose online access to manuals. MPT must be up 24/7 whenever maintenance is being done, and 6p–6a is the most critical window.",
        dependencies:
          "My Boeing Fleet (MBF), Express Connect SAML SSO, IE / Edge IE mode, IG View/ISO View plug-in",
        status: "Potential",
        owner: "ITS COG M&E App Support"
      },
      {
        id: "boeing-mbf",
        name: "My Boeing Fleet (MBF)",
        subName: "(http://myboeingfleet.com · Portal & First-Level Access)",
        appTabSubName: "(http://myboeingfleet.com · Portal & First-Level Access)",
        description:
          "Boeing portal that grants the first level of access to Toolbox",
        appTabDescription:
          "Boeing portal that grants the first level of access to Toolbox",
        businessFunction: "Access and authentication",
        impact: "No way into MPT",
        dependencies: "Boeing, SAML SSO",
        status: "Potential",
        owner: "ITS COG M&E App Support"
      },
      {
        id: "boeing-tml",
        name: "Toolbox Mobile Library (TML)",
        subName: "(iPad App for Boeing Toolbox)",
        appTabSubName: "(iPad App for Boeing Toolbox)",
        description: "iPad app for Toolbox",
        appTabDescription: "iPad app for Toolbox",
        businessFunction: "Mobile access to manuals",
        impact: "(Add Impact)",
        dependencies: "App must be on the latest version",
        status: "Potential",
        owner: "Business Focal for Mobile: Sam Russell"
      },
      {
        id: "boeing-tbr",
        name: "Toolbox Remote (TBR)",
        subName: "(Standalone Backup on 6 Mobile Hard Drives & MX Control PC)",
        appTabSubName: "(Standalone Backup on 6 Mobile Hard Drives & MX Control PC)",
        description:
          "Standalone backup to MPT, in portable and workstation versions",
        appTabDescription:
          "Standalone backup to MPT, in portable and workstation versions",
        businessFunction: "Business continuity",
        impact: "N/A (this is the fallback)",
        dependencies: "Mobile Hard Drives maintained by Tech Pubs",
        status: "Potential",
        owner: "M&E Technical Publications"
      }
    ],
    upstreamDependencies: [
      "(Add Upstream Dependencies)"
    ],
    downstreamConsumers: [
      "M&E Technical Publications",
      "Line Maintenance",
      "Maintenance Control",
      "AOG Engineering",
      "Maintenance Programs authors, for the MTLSM"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Boeing-hosted My Boeing Fleet (MBF) and Maintenance Performance Toolbox (MPT) accessed over internet and Express Connect SAML SSO by M&E Technical Publications, Line Maintenance, Maintenance Control, AOG Engineering, and Maintenance Programs authors.",
      diagramUpstream: [
        {
          id: "boeing-up-1",
          name: "(Add Upstream Dependencies)",
          label: "(Add Upstream Dependencies)",
          subtitle: "External Boeing host & Express Connect SAML SSO",
          iconType: "doc"
        }
      ],
      diagramServices: [
        "Maintenance Performance Toolbox (MPT)",
        "My Boeing Fleet (MBF)",
        "Toolbox Mobile Library (TML)",
        "Toolbox Remote (TBR)"
      ],
      diagramDownstream: [
        {
          id: "boeing-down-1",
          name: "M&E Technical Publications",
          label: "M&E Technical Publications",
          subtitle: "Manual management & TBR Mobile Hard Drives",
          iconType: "team"
        },
        {
          id: "boeing-down-2",
          name: "Line Maintenance & Maintenance Control",
          label: "Line Maintenance & Maintenance Control",
          subtitle: "24/7 fleet maintenance manuals & task cards (6p–6a critical)",
          iconType: "nodes"
        },
        {
          id: "boeing-down-3",
          name: "AOG Engineering & Maintenance Programs",
          label: "AOG Engineering & Maintenance Programs",
          subtitle: "AOG Engineering & MTLSM authors",
          iconType: "chart"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 1, tone: "red" },
        { label: "Downstream Consumers (Business Owners)", count: 5, tone: "green" },
        { label: "Applications & Systems", count: 4, tone: "blue" },
        { label: "Infrastructure Dependencies", count: 5, tone: "purple" }
      ],
      keyTakeaways: [
        "Boeing Toolbox is the online library maintenance uses to look up Boeing fleet manuals. Boeing hosts it externally, so it depends on internet access and Boeing SSO. MPT has to be available 24/7 whenever maintenance work is underway, and the overnight 6p–6a window matters most."
      ],
      upstreamTable: [
        {
          id: "boeing-uptbl-1",
          name: "(Add Upstream Dependencies)",
          subName: "(Boeing External Host & Express Connect SAML SSO)",
          description: "(Add Upstream Dependencies)",
          type: "External / Vendor Host",
          typeBadge: "orange",
          impact:
            "Loss of access to My Boeing Fleet (MBF) and Maintenance Performance Toolbox (MPT) online manuals."
        }
      ],
      downstreamTable: [
        {
          id: "boeing-dwntbl-1",
          name: "M&E Technical Publications",
          subName: "(Business Owner)",
          description: "M&E Technical Publications",
          type: "Internal Operations",
          dataFlow: "Maintenance Reference Manuals & TBR Mobile Hard Drives",
          impact: "Unable to access or manage online Boeing maintenance publications."
        },
        {
          id: "boeing-dwntbl-2",
          name: "Line Maintenance",
          subName: "(Business Owner)",
          description: "Line Maintenance",
          type: "Internal Operations",
          dataFlow: "Online Fleet Manuals, Task Cards & Requirements",
          impact: "Line Maintenance can't open Boeing manuals online; must fall back to Toolbox Remote (TBR)."
        },
        {
          id: "boeing-dwntbl-3",
          name: "Maintenance Control",
          subName: "(Business Owner)",
          description: "Maintenance Control",
          type: "Internal Operations",
          dataFlow: "Online Fleet Manuals & Troubleshooting Reference",
          impact: "MX Control can't open Boeing manuals online; must use backup computer with MHD at MX Control."
        },
        {
          id: "boeing-dwntbl-4",
          name: "AOG Engineering",
          subName: "(Business Owner)",
          description: "AOG Engineering",
          type: "Internal Operations",
          dataFlow: "Engineering Reference & Aircraft-on-Ground Support",
          impact: "Loss of online access to Boeing engineering and maintenance documentation."
        },
        {
          id: "boeing-dwntbl-5",
          name: "Maintenance Programs authors, for the MTLSM",
          subName: "(Business Owner · Non-SGML Manual Revisions)",
          description: "Maintenance Programs authors, for the MTLSM",
          type: "Internal Operations",
          dataFlow: "MTLSM Manual Revisions & Requirements",
          impact: "Authors cannot reference or revise MTLSM manual materials online."
        }
      ],
      infrastructureTable: [
        {
          id: "boeing-infra-1",
          component: "Simplified Sign-On (Express Connect SAML)",
          category: "Simplified Sign-On (Express Connect SAML)",
          iconType: "shield",
          description:
            "Simplified Sign-On for MBF and MPT, using Express Connect (SAML)",
          details:
            "Simplified Sign-On for MBF and MPT, using Express Connect (SAML)",
          owner: "ITS Identity / ITS COG M&E App Support",
          impact: "Users cannot authenticate into My Boeing Fleet (MBF) or Maintenance Performance Toolbox (MPT)."
        },
        {
          id: "boeing-infra-2",
          component: "Browser & IG View / ISO View Plug-In (Altiris)",
          category: "Browser & IG View / ISO View Plug-In (Altiris)",
          iconType: "layers",
          description:
            "Internet Explorer, or Edge in IE mode, plus the IG View/ISO View plug-in (deployed through Altiris)",
          details:
            "Internet Explorer, or Edge in IE mode, plus the IG View/ISO View plug-in (deployed through Altiris)",
          owner: "ITS Endpoint Platforms / M&E App Support",
          impact: "Diagrams, manuals, or Toolbox pages fail to render or print without IE mode and IG View/ISO View."
        },
        {
          id: "boeing-infra-3",
          component: "Internet Access to Boeing Host (Comcast PC Isolation)",
          category: "Internet Access to Boeing Host (Comcast PC Isolation)",
          iconType: "globe",
          description:
            "Internet access to the Boeing host. Use the Comcast PC to tell whether a problem is on the Alaska network or on Boeing's side.",
          details:
            "Internet access to the Boeing host. Use the Comcast PC to tell whether a problem is on the Alaska network or on Boeing's side.",
          owner: "ITS Network / Boeing",
          impact: "If Comcast PC works, issue is on the Alaska network; if Comcast PC fails too, issue is on Boeing's side."
        },
        {
          id: "boeing-infra-4",
          component: "Monitoring (Critical Apps Dashboard)",
          category: "Monitoring (Critical Apps Dashboard)",
          iconType: "server",
          description: "Monitoring: the Critical apps dashboard",
          details: "Monitoring: the Critical apps dashboard",
          owner: "ITS Production Operations",
          impact: "Tracks operational availability of Boeing Toolbox on the Critical apps dashboard."
        },
        {
          id: "boeing-infra-5",
          component: "Change Validation (M&E Network & Firewall CR Validation Set)",
          category: "Change Validation (M&E Network & Firewall CR Validation Set)",
          iconType: "shield",
          description:
            "Change validation: Toolbox is part of the M&E validation set for network and firewall CRs",
          details:
            "Change validation: Toolbox is part of the M&E validation set for network and firewall CRs",
          owner: "ITS COG M&E App Support / Network",
          impact: "Must be validated during network and firewall change requests affecting M&E."
        }
      ]
    },
    typicalBusinessImpact: [
      "Line Maintenance and MX Control can't open Boeing manuals online.",
      "Data or content errors can affect accuracy.",
      "Printing failures slow down the work. These start as Sev 2 and may drop to Sev 3 if another workstation can print."
    ],
    knownWorkarounds: [
      "Toolbox Remote (TBR) on six Mobile Hard Drives, checked out from Tech Pubs",
      "A separate backup computer with an MHD at MX Control"
    ],
    validationChecklist: [
      "Check whether ProdOps can reach the Toolbox site.",
      "Try it from the Comcast PC. If that works, contact Network. If it fails too, contact Boeing.",
      "Collect the machine name, users, location, browser version, device type, and the error message.",
      "For browser problems: use the direct MBF link or IE mode, or add the Toolbox URL to the IE-mode sites list.",
      "For blank pages or pop-ups: clear the browser cache, log out of MBF, and log back in.",
      "For access or missing-icon problems: check that the user has the app under MBF Applications → \"M\". If not, send a request to Boeing.Access.Requests@alaskaair.com.",
      "CC Rob Lowy on every Toolbox issue."
    ],
    vendorContacts: {
      supportPhone:
        "Primary: 206-544-9990, Option 1 (Boeing e-Enabled Digital Data Customer Support). Secondary: 206-544-7500, Option 2 (Boeing Operations)",
      supportPhoneNote:
        "Primary requires MBF account / BEMS ID. Secondary: say it's a \"Toolbox\" issue, not aircraft-related.",
      supportEmail: "(Add Vendor Support Email)",
      supportHours: "24x7",
      accountManager: "(Add Account Manager)",
      technicalSupport:
        "Primary: Boeing e-Enabled Digital Data Customer Support — 206-544-9990, Opt 1 (requires MBF account / BEMS ID) • Secondary: Boeing Operations — 206-544-7500, Opt 2 (say it's a \"Toolbox\" issue, not aircraft-related) • Account Manager: (Add Account Manager)",
      namedEscalationContact:
        "Boeing Operations: 206-544-7500, Opt 2 (say it's a \"Toolbox\" issue, not aircraft-related) • Account Manager: (Add Account Manager)",
      companyNote: "Boeing",
      categoryNote:
        "Maintenance (M&E): maintenance reference library • Portal: http://myboeingfleet.com (Boeing Service Requests, account required) • Toolbox: https://myboeingfleet.boeing.com/toolbox/",
      contactDirectory: [
        {
          role: "Support Desk (primary)",
          name: "Boeing e-Enabled Digital Data Customer Support",
          phone: "206-544-9990, Opt 1 (requires MBF account / BEMS ID)",
          email: "(Add Vendor Support Email)"
        },
        {
          role: "Secondary",
          name: "Boeing Operations",
          phone: "206-544-7500, Opt 2. Say it's a \"Toolbox\" issue, not aircraft-related",
          email: "—"
        },
        {
          role: "Account Manager",
          name: "(Add Account Manager)",
          phone: "—",
          email: "—"
        }
      ],
      contactWarningNote:
        "⚠️ The document's change log says Rob Lowy was replaced as focal on 6/23/2020, but his name is still in the contact table. Check who the current focal is.",
      escalation:
        "Support Desk (primary): Boeing e-Enabled Digital Data Customer Support — 206-544-9990, Opt 1 (requires MBF account / BEMS ID).\nSecondary: Boeing Operations — 206-544-7500, Opt 2 (say it's a \"Toolbox\" issue, not aircraft-related).\nAccount Manager: (Add Account Manager).\nSev 1/2: call Boeing directly. For anything else, submit a Boeing Service Request through myboeingfleet.com.\nVendor update cadence: Boeing sends email updates every 15 minutes to 1 hour. If the updates stop, escalate to Rob Lowy.",
      communicationGuidelines: [
        "Sev 1/2: call Boeing directly. For anything else, submit a Boeing Service Request through myboeingfleet.com.",
        "For mobile issues, end users call the Service Desk (option 4). If the Service Desk can't fix it, they warm-transfer the caller to Boeing.",
        "For content or data errors, collect screenshots and send them to the Toolbox Online business focal, who takes it to Boeing."
      ],
      responseSlas: [
        {
          priority: "Vendor update cadence",
          label: "Vendor update cadence",
          level: "Vendor Email Update Cadence",
          description:
            "Boeing sends email updates every 15 minutes to 1 hour. If the updates stop, escalate to Rob Lowy.",
          target:
            "Boeing sends email updates every 15 minutes to 1 hour. If the updates stop, escalate to Rob Lowy.",
          condition:
            "Boeing sends email updates every 15 minutes to 1 hour. If the updates stop, escalate to Rob Lowy.",
          value:
            "Boeing sends email updates every 15 minutes to 1 hour. If the updates stop, escalate to Rob Lowy."
        },
        {
          priority: "Internal",
          label: "Internal",
          level: "Internal Operational Availability",
          description:
            "MPT available 24/7 during maintenance, most critical 6p–6a",
          target: "MPT available 24/7 during maintenance, most critical 6p–6a",
          condition: "MPT available 24/7 during maintenance, most critical 6p–6a",
          value: "MPT available 24/7 during maintenance, most critical 6p–6a"
        },
        {
          priority: "Initial response time",
          label: "Initial response time",
          level: "Vendor Initial Response SLA",
          description:
            "The System Summary includes a \"Boeing Issue Prioritization\" image, but its contents aren't readable.",
          target:
            "(Add Response Targets). The System Summary includes a \"Boeing Issue Prioritization\" image, but its contents aren't readable.",
          condition:
            "(Add Response Targets). The System Summary includes a \"Boeing Issue Prioritization\" image, but its contents aren't readable.",
          value:
            "(Add Response Targets). The System Summary includes a \"Boeing Issue Prioritization\" image, but its contents aren't readable."
        }
      ]
    },
    internalContacts: {
      itsTeam:
        "ITS COG M&E App Support (Jerred Slavata / Rituraj; Application Support: M&E and Safety ITS – On Call 24x7)",
      itsTeamNote:
        "ITS App Support: ITS COG M&E App Support (Jerred Slavata / Rituraj). Brad Dufour is also listed. The System Summary lists application support as \"M&E and Safety ITS – On Call 24x7\".",
      applicationOwner:
        "ITS COG M&E App Support (Jerred Slavata / Rituraj). Brad Dufour is also listed.",
      onCallSupport:
        "M&E and Safety ITS – On Call 24x7 (ITS COG M&E App Support: Jerred Slavata / Rituraj; Brad Dufour)",
      systemAdministration:
        "System Admin / Password: ITS Service Center, 877-238-1077, 24x7 • How-To: M&E Department, Maint.Engineering@firstclass.alaskaair.com (business hours) • TBR Support: Technical Publications Manager (business hours)",
      businessOwner:
        "Business Focal, Toolbox Online: Rob Lowy, cell 253-455-1716 (Call 24x7 for major incidents; otherwise use email) • Business Focal, Mobile / Everbridge Focal: Sam Russell, 206-948-1136",
      everbridgeContacts:
        "Business Focal, Mobile / Everbridge Focal: Sam Russell, 206-948-1136 • Everbridge Backup: Andrew Fitts (M&E), 206-369-0377",
      passwordSupport: "ITS Service Center, 877-238-1077, 24x7",
      internalDirectory: [
        {
          role: "Business Focal, Toolbox Online",
          contact:
            "Rob Lowy, cell 253-455-1716. Call 24x7 for major incidents; otherwise use email. ⚠️ The document's change log says Rob Lowy was replaced as focal on 6/23/2020, but his name is still in the contact table. Check who the current focal is."
        },
        {
          role: "Business Focal, Mobile / Everbridge Focal",
          contact: "Sam Russell, 206-948-1136"
        },
        {
          role: "Everbridge Backup",
          contact: "Andrew Fitts (M&E), 206-369-0377"
        },
        {
          role: "ITS App Support",
          contact:
            "ITS COG M&E App Support (Jerred Slavata / Rituraj). Brad Dufour is also listed."
        },
        {
          role: "System Admin / Password",
          contact: "ITS Service Center, 877-238-1077, 24x7"
        },
        {
          role: "How-To",
          contact:
            "M&E Department, Maint.Engineering@firstclass.alaskaair.com (business hours)"
        },
        {
          role: "TBR Support",
          contact: "Technical Publications Manager (business hours)"
        }
      ]
    },
    incidentHistory: [],
    relatedDocuments: [
      {
        title: "Boeing_Toolbox_System_Summary.docx",
        type: "System Summary (Word)",
        owner: "M&E and Safety ITS / ITS COG M&E App Support",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BA07205BC-DEAF-420F-8D9A-E0F6E4ACD387%7D&file=Boeing_Toolbox_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Boeing Toolbox Browser Troubleshooting.docx",
        type: "Browser Troubleshooting Guide (Word)",
        owner: "ITS COG M&E App Support / SysDocs",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B8E4CDE4C-4352-4D79-BAAE-E79523917A40%7D&file=Boeing%20Toolbox%20Browser%20Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Boeing Toolbox_Triage_Troubleshooting.docx",
        type: "Triage & Troubleshooting Guide (Word)",
        owner: "ITS Production Operations / M&E App Support",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B74B4998E-E20F-4645-ACD5-4FA6CBC9E8CF%7D&file=Boeing%20Toolbox_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Boeing Toolbox is Down.docx",
        type: "Outage Isolation Runbook (Word)",
        owner: "ITS Production Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B428878D7-3791-4229-B02F-4FF8C8597838%7D&file=Boeing%20Toolbox%20is%20Down.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Boeing Toolbox icon is missing.docx",
        type: "Access & Missing Icon Runbook (Word)",
        owner: "ITS Knowledge Management",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BDB0BA177-D6C3-4A8A-915E-B59EABC2D6E4%7D&file=Boeing%20Toolbox%20icon%20is%20missing.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "User is unable to access Boeing Toolbox through Toolbox Library in his Ipad.docx",
        type: "Mobile / iPad Troubleshooting (Word)",
        owner: "ITS Service Desk / Mobile Support",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BE1DD135F-E2CE-4CA6-8D62-39B333F5FAF2%7D&file=User%20is%20unable%20to%20access%20Boeing%20Toolbox%20through%20Toolbox%20Library%20in%20his%20Ipad.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Errors in data or content accuracy.docx",
        type: "Content Accuracy Escalation Guide (Word)",
        owner: "M&E Technical Publications",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B588E4D9B-97F7-4195-A69D-9CF410CC9E24%7D&file=Errors%20in%20data%20or%20content%20accuracy.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Slow to display PDF print window (Boeing Toolbox).docx",
        type: "Printing Troubleshooting Guide (Word)",
        owner: "ITS COG M&E App Support / SysDocs",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B0E027190-BB9E-4ACE-A903-95A1C50F17B1%7D&file=Slow%20to%20display%20PDF%20print%20window%20(Boeing%20Toolbox).docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Vendor Escalation for Critical Systems.docx",
        type: "Escalation Reference (Word)",
        owner: "ITS Production Operations",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BB85271C7-A549-4429-8EC8-01EBAFF93C00%7D&file=Vendor%20Escalation%20for%20Critical%20Systems.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "MTLSM (Non-SGML Manual Revisions.one)",
        type: "Tech Pubs Manual Revisions (OneNote)",
        owner: "M&E Technical Publications / Maintenance Programs",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/maineng/TechPubsASnew/_layouts/15/Doc.aspx?action=edit&mobileredirect=true&wdorigin=Sharepoint&DefaultItemOpen=1&sourcedoc=%7Ba0e76449-a7a2-4ba0-af0a-f8954716bb3f%7D&wd=target(/Non-SGML%20Manual%20Revisions.one/)&wdpartid=%7Be25edf1f-5cc5-0800-0f8b-bafeee4acf43%7D%7B1%7D&wdsectionfileid=%7B07d0f667-e398-4975-8f8f-eb269a18211c%7D"
      },
      {
        title: "sev1.xlsx",
        type: "Sev 1 Contacts Matrix (Excel)",
        owner: "ITSCOG M&E App Support",
        updated: "Additional Source",
        url: "https://alaskaair-my.sharepoint.com/personal/khalki_surya_rajan_alaskaair_com/_layouts/15/Doc.aspx?sourcedoc=%7B3D6FFB6E-17EA-4368-9BB7-2482749C063F%7D&file=sev1.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ITS Vendor Information - 2026.xlsx",
        type: "ITS Vendor Directory (Excel)",
        owner: "ITS Sev 1 Response",
        updated: "2026",
        url: "https://alaskaair.sharepoint.com/sites/ITSSev1Response/_layouts/15/Doc.aspx?sourcedoc=%7B0C805079-8D03-4D14-BE73-0012791BDD6A%7D&file=ITS%20Vendor%20Information%20-%202026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Validation - firewall upgrade (Teams)",
        type: "M&E Network/Firewall Validation Thread (Teams)",
        owner: "ITS COG M&E App Support / Network",
        updated: "Validation Reference",
        url: "https://teams.microsoft.com/l/message/19:meeting_NDc2M2Q1MzgtYzE5NC00ODBjLTkzMDYtNWM2YWJlMWNkMDMz@thread.v2/1789624828399?context=%7B%22contextType%22:%22chat%22%7D"
      }
    ]
  },

  "cargo-spot": {
    id: "cargo-spot",
    name: "CHAMP, AirClic (Descartes) & SmartKargo",
    breadcrumbTrail: ["Vendors", "CHAMP, AirClic, SmartKargo", "Vendor Impact"],
    pageTitle: "CHAMP, AirClic (Descartes) & SmartKargo - Vendor Impact Details",
    pageSubtitle:
      "Combined Cargo & Ramp vendor group covering CHAMP (CargoSPOT air waybill reservation, tracking and accounting), Descartes / formerly AirClic (ULD scanning and Planeside Tool), and SmartKargo (online cargo booking and HA cargo system).",
    applicationsTabTitle: "CHAMP, AirClic (Descartes) & SmartKargo",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "View all Alaska & Hawaiian Cargo and Ramp applications across CHAMP (CargoSPOT, Cargo Payment), Descartes / formerly AirClic (ULD Scanning / Verification, Planeside Tool, Igloo Verification Report / ULD AVR), and SmartKargo.",
    applicationsCardSubtitle:
      "Applications and systems supported by CHAMP, Descartes (formerly AirClic), and SmartKargo for cargo booking, air waybill tracking, ULD scanning, and planeside load verification.",
    dependenciesTabTitle: "CHAMP, AirClic (Descartes) & SmartKargo - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream dependencies, downstream consumers, and infrastructure components for CHAMP (CargoSPOT), Descartes (formerly AirClic), and SmartKargo.",
    status: "Active",
    lastUpdated: "2026 (CargoSpot, AirClic & SmartKargo System Summaries & KBs)",
    subtitle:
      "Cargo: air waybill reservation, tracking and accounting (CHAMP) • Cargo / Ramp: ULD scanning and the Planeside Tool (Descartes / formerly AirClic) • Cargo: online booking; HA uses it as its cargo system (SmartKargo)",
    company:
      "CHAMP (support@champ.aero domain) / Descartes (formerly AirClic) / SmartKargo",
    website:
      "CHAMP: (Add Website/Support Portal URL) • AirClic (Descartes): https://servicedesk.descartes.com/ (registration required) • SmartKargo: (Add Website/Support Portal URL)",
    category:
      "Cargo: air waybill reservation, tracking and accounting (CHAMP) • Cargo / Ramp: ULD scanning and the Planeside Tool (AirClic / Descartes) • Cargo: online booking. HA uses it as its cargo system (SmartKargo)",
    itsTeam:
      "ITS COG Airport Ops Support (John Antony Dubreuil; Will Marken) / ITS Airport Operations (formerly Cargo IT; AirportOps queue)",
    logo: "public/vendors/cargo-spot.png",
    impactSummary: {
      confirmed: 0,
      potential: 6,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      level: "Critical",
      title: "Key Takeaways: CHAMP (CargoSPOT), AirClic (Descartes) & SmartKargo",
      message:
        "CHAMP (CargoSPOT): CargoSPOT is the core cargo booking and tracking system for AS and QX. It has an internal SLA of 20 minutes. • AirClic (now Descartes): AirClic scanning issues are classed as Sev 2. The platform links S4A load planning to ramp loading verification. • SmartKargo: SmartKargo is the customer-facing tool for booking cargo online and it feeds CargoSPOT."
    },
    impactedSystems: [
      {
        id: "cargo-spot-cspot",
        name: "CargoSPOT (cSpot)",
        subName: "(CHAMP · Internal SLA: 20 minutes)",
        appTabSubName: "(CHAMP · Internal SLA: 20 minutes)",
        description:
          "Java app running as a Windows service. Used by 900+ AS/QX CSAs and RSAs at 83 cargo stations",
        appTabDescription:
          "Java app running as a Windows service. Used by 900+ AS/QX CSAs and RSAs at 83 cargo stations",
        businessFunction:
          "Cargo air waybill reservation, tracking and accounting",
        impact: "(Add Impact)",
        dependencies: "Windows Server 2008 R2, JRE 1.7u45, LDAP auth",
        status: "Potential",
        owner: "ITS System Owner: Will Marken, 206-245-4584 (6:30–18:30)"
      },
      {
        id: "cargo-spot-payment",
        name: "Cargo Payment",
        subName: "(CHAMP / AirClic / SmartKargo Vendor Group)",
        appTabSubName: "(CHAMP / AirClic / SmartKargo Vendor Group)",
        description:
          "Listed under the same vendor group (CHAMP / AirClic / SmartKargo)",
        appTabDescription:
          "Listed under the same vendor group (CHAMP / AirClic / SmartKargo)",
        businessFunction: "Cargo payment",
        impact: "(Add Impact)",
        dependencies: "(Add Direct Dependencies)",
        status: "Potential",
        owner: "ITS COG Airport Ops Support"
      },
      {
        id: "airclic-uld-scanning",
        name: "ULD Scanning / Verification",
        subName: "(Descartes / formerly AirClic · Sev 2)",
        appTabSubName: "(Descartes / formerly AirClic · Sev 2)",
        description:
          "Descartes app on handheld scanners. Pulls load data from ULD_Scanning and writes scan results to ULD_History",
        appTabDescription:
          "Descartes app on handheld scanners. Pulls load data from ULD_Scanning and writes scan results to ULD_History",
        businessFunction:
          "Assigns ULD positions on freighters and verifies them",
        impact: "Handsets can't download load data",
        dependencies: "ULDVerificationWS, AirClic DB, JBoss on TUKVVAPP17",
        status: "Potential",
        owner: "ITS Airport Operations"
      },
      {
        id: "airclic-pst",
        name: "Planeside Tool (PST)",
        subName: "(Descartes / formerly AirClic · Scanner App)",
        appTabSubName: "(Descartes / formerly AirClic · Scanner App)",
        description: "Scanner app for final flight load data",
        appTabDescription: "Scanner app for final flight load data",
        businessFunction:
          "Sends final load data from planeside to CLP and the Departure Coordinator",
        impact: "(Add Impact)",
        dependencies: "S4A, AirClic",
        status: "Potential",
        owner: "ITS Airport Operations"
      },
      {
        id: "airclic-uld-avr",
        name: "Igloo Verification Report / ULD AVR",
        subName: "(Descartes / formerly AirClic · Hourly Azure Refresh)",
        appTabSubName: "(Descartes / formerly AirClic · Hourly Azure Refresh)",
        description: "Match/No Match report, refreshed hourly into Azure",
        appTabDescription: "Match/No Match report, refreshed hourly into Azure",
        businessFunction: "Load verification for DC/CLP",
        impact: "Descartes data missing from the report",
        dependencies: "ULD_HISTORY table, Informix FltRange DB",
        status: "Potential",
        owner: "ITS Airport Operations"
      },
      {
        id: "smartkargo-app",
        name: "SmartKargo",
        subName: "(SmartKargo · Online Booking & HA Cargo System)",
        appTabSubName: "(SmartKargo · Online Booking & HA Cargo System)",
        description: "Web app for external customers to book cargo online",
        appTabDescription: "Web app for external customers to book cargo online",
        businessFunction:
          "Cargo booking. For HA, also payments and settlement via VeriFone",
        impact: "(Add Impact)",
        dependencies: "MQ feeds to CargoSPOT and Salesforce",
        status: "Potential",
        owner: "ITS Airport Operations"
      }
    ],
    upstreamDependencies: [
      "CHAMP (CargoSPOT): MQ queues QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT, CG.RNT2CS.DATAFEED, CG.SELFSERVICE.DELIVERY and CG.SITA.DATAFEED, all owned by ITS Airport Operations",
      "AirClic (Descartes): When CLP submits a load plan in S4A, it calls InsertULDScanInfo() on ULDVerificationWS, which writes to the ULD_Scanning table.",
      "SmartKargo: (Add Upstream Dependencies)"
    ],
    downstreamConsumers: [
      "CHAMP (CargoSPOT): Salesforce (QMMFP.CG.CUSTOMER.SALESFORCE), Azure (CG.CUSTOMER.AZURE)",
      "AirClic (Descartes): Load data and final load summaries go to S4A and the Planeside Tool. Igloo Verification Report.",
      "SmartKargo: CargoSPOT (QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT) and Salesforce (QMMFP.CG.CUSTOMER.SMARTKARGO.SALESFORCE)"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Upstream MQ queues and S4A ULDVerificationWS feeds, core CHAMP (CargoSPOT), Descartes (AirClic), and SmartKargo services, and downstream Salesforce, Azure, S4A, Planeside Tool, and Igloo Verification Report consumers.",
      diagramUpstream: [
        {
          id: "cargospot-up-1",
          name: "Airport Ops MQ Queues (QMMFP)",
          label: "Airport Ops MQ Queues (QMMFP)",
          subtitle: "SMARTKARGO.CARGOSPOT, RNT2CS, SELFSERVICE, SITA",
          iconType: "transfer"
        },
        {
          id: "cargospot-up-2",
          name: "S4A / CLP Load Plan",
          label: "S4A / CLP Load Plan",
          subtitle: "InsertULDScanInfo() on ULDVerificationWS → ULD_Scanning",
          iconType: "network"
        },
        {
          id: "cargospot-up-3",
          name: "SmartKargo Upstream",
          label: "SmartKargo Upstream",
          subtitle: "(Add Upstream Dependencies)",
          iconType: "doc"
        }
      ],
      diagramServices: [
        "CargoSPOT (cSpot)",
        "Cargo Payment",
        "ULD Scanning / Verification",
        "Planeside Tool (PST)",
        "Igloo Verification Report / ULD AVR",
        "SmartKargo"
      ],
      diagramDownstream: [
        {
          id: "cargospot-down-1",
          name: "Salesforce & Azure (QMMFP)",
          label: "Salesforce & Azure (QMMFP)",
          subtitle: "CG.CUSTOMER.SALESFORCE, CG.CUSTOMER.AZURE",
          iconType: "database"
        },
        {
          id: "cargospot-down-2",
          name: "S4A & Planeside Tool (PST)",
          label: "S4A & Planeside Tool (PST)",
          subtitle: "Load data, final load summaries & DC/CLP",
          iconType: "nodes"
        },
        {
          id: "cargospot-down-3",
          name: "Igloo Verification Report / ULD AVR",
          label: "Igloo Verification Report / ULD AVR",
          subtitle: "Match/No Match report refreshed hourly into Azure",
          iconType: "chart"
        },
        {
          id: "cargospot-down-4",
          name: "CargoSPOT (SmartKargo Feed)",
          label: "CargoSPOT (SmartKargo Feed)",
          subtitle: "QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT",
          iconType: "team"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 3, tone: "red" },
        { label: "Downstream Consumers", count: 3, tone: "green" },
        { label: "Applications & Systems", count: 6, tone: "blue" },
        { label: "Infrastructure Dependencies", count: 6, tone: "purple" }
      ],
      keyTakeaways: [
        "CHAMP (CargoSPOT): CargoSPOT is the core cargo booking and tracking system for AS and QX. It has an internal SLA of 20 minutes.",
        "AirClic (now Descartes): AirClic scanning issues are classed as Sev 2. The platform links S4A load planning to ramp loading verification.",
        "SmartKargo: SmartKargo is the customer-facing tool for booking cargo online and it feeds CargoSPOT."
      ],
      upstreamTable: [
        {
          id: "cargospot-uptbl-1",
          name: "CHAMP (CargoSPOT) Upstream MQ Queues",
          subName: "(Owned by ITS Airport Operations)",
          description:
            "MQ queues QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT, CG.RNT2CS.DATAFEED, CG.SELFSERVICE.DELIVERY and CG.SITA.DATAFEED, all owned by ITS Airport Operations",
          type: "Internal / IBM MQ (QMMFP)",
          typeBadge: "blue",
          impact:
            "Inbound bookings and data feeds from SmartKargo, RNT2CS, SelfService, and SITA do not reach CargoSPOT."
        },
        {
          id: "cargospot-uptbl-2",
          name: "AirClic (Descartes) Upstream (S4A / CLP)",
          subName: "(InsertULDScanInfo() on ULDVerificationWS)",
          description:
            "When CLP submits a load plan in S4A, it calls InsertULDScanInfo() on ULDVerificationWS, which writes to the ULD_Scanning table.",
          type: "Internal / Web Service",
          typeBadge: "orange",
          impact:
            "Handsets can't download load data if ULDVerificationWS or ULD_Scanning updates fail."
        },
        {
          id: "cargospot-uptbl-3",
          name: "SmartKargo Upstream",
          subName: "(Add Upstream Dependencies)",
          description: "(Add Upstream Dependencies)",
          type: "External / Vendor",
          typeBadge: "purple",
          impact: "(Add Impact)"
        }
      ],
      downstreamTable: [
        {
          id: "cargospot-dwntbl-1",
          name: "CHAMP (CargoSPOT) Downstream: Salesforce & Azure",
          subName: "(QMMFP.CG.CUSTOMER.SALESFORCE, CG.CUSTOMER.AZURE)",
          description:
            "Salesforce (QMMFP.CG.CUSTOMER.SALESFORCE), Azure (CG.CUSTOMER.AZURE)",
          type: "Downstream Consumers",
          dataFlow: "QMMFP.CG.CUSTOMER.SALESFORCE & CG.CUSTOMER.AZURE",
          impact:
            "CargoSPOT customer and operational data feeds to Salesforce and Azure are delayed."
        },
        {
          id: "cargospot-dwntbl-2",
          name: "AirClic (Descartes) Downstream: S4A, Planeside Tool & Igloo Verification Report",
          subName: "(S4A, PST & ULD AVR)",
          description:
            "Load data and final load summaries go to S4A and the Planeside Tool. Igloo Verification Report.",
          type: "Internal Operations",
          dataFlow: "ULD_History scan results, final load summaries & hourly Azure ULD AVR",
          impact:
            "Scan data never reaches the verification report; final load summaries delayed to S4A and Departure Coordinator."
        },
        {
          id: "cargospot-dwntbl-3",
          name: "SmartKargo Downstream: CargoSPOT & Salesforce",
          subName: "(QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT & SALESFORCE)",
          description:
            "CargoSPOT (QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT) and Salesforce (QMMFP.CG.CUSTOMER.SMARTKARGO.SALESFORCE)",
          type: "Internal / CRM Consumers",
          dataFlow: "Online cargo bookings via IBM MQ (QMMFP)",
          impact:
            "Online customer cargo bookings do not flow into CargoSPOT or Salesforce."
        }
      ],
      infrastructureTable: [
        {
          id: "cargospot-infra-1",
          component: "CHAMP (CargoSPOT) Infrastructure",
          category: "CHAMP (CargoSPOT) Infrastructure",
          iconType: "server",
          description:
            "Windows Server 2008 R2, Java 7 (JRE 1.7u45), LDAP, IBM MQ (QMMFP)",
          details:
            "Windows Server 2008 R2, Java 7, LDAP, IBM MQ (QMMFP)",
          owner: "ITS COG Airport Ops Support / ITS Airport Operations",
          impact:
            "CargoSPOT Windows service, authentication, or MQ message delivery unavailable."
        },
        {
          id: "cargospot-infra-2",
          component: "AirClic DB (TUKVVAAGSSDB01)",
          category: "AirClic (Descartes) Database",
          iconType: "database",
          description:
            "AirClic DB on airclic.sql.insideaag.com (TUKVVAAGSSDB01)",
          details:
            "AirClic DB on airclic.sql.insideaag.com (TUKVVAAGSSDB01)",
          owner: "ITS Airport Operations / DBA",
          impact:
            "ULD_Scanning and ULD_History database errors; contact the DBA about TUKVVAAGSSDB01."
        },
        {
          id: "cargospot-infra-3",
          component: "JBoss / Harvester (TUKVVAPP17)",
          category: "AirClic (Descartes) Application Server",
          iconType: "server",
          description: "JBoss/Harvester on TUKVVAPP17",
          details: "JBoss/Harvester on TUKVVAPP17",
          owner: "ITS Airport Operations / ProdOps / Network",
          impact:
            "AlaskaULDScan JBoss Connection Failed or Harvester Shutdown alerts affect scanner synchronization."
        },
        {
          id: "cargospot-infra-4",
          component: "ULDVerificationWS (DNA Servers)",
          category: "AirClic (Descartes) Web Service",
          iconType: "globe",
          description:
            "ULDVerificationWS on the DNA servers in McGee and Tukwila",
          details:
            "ULDVerificationWS on the DNA servers in McGee and Tukwila",
          owner: "ITS Airport Operations",
          impact:
            "S4A InsertULDScanInfo() calls fail to populate ULD_Scanning for handheld scanners."
        },
        {
          id: "cargospot-infra-5",
          component: "TC75x Scanners (Managed through WS1)",
          category: "AirClic (Descartes) Mobile Hardware",
          iconType: "layers",
          description: "TC75x scanners managed through WS1",
          details: "TC75x scanners managed through WS1",
          owner: "Enterprise Mobile / ITS Airport Operations",
          impact:
            "Handheld ULD scanning and Planeside Tool (PST) operations impacted on the ramp."
        },
        {
          id: "cargospot-infra-6",
          component: "SmartKargo Infrastructure",
          category: "SmartKargo Messaging & Hosting",
          iconType: "shield",
          description:
            "IBM MQ (QMMFP). Anything else: (Add Infrastructure Dependencies).",
          details:
            "IBM MQ (QMMFP). Anything else: (Add Infrastructure Dependencies).",
          owner: "ITS Airport Operations",
          impact:
            "Disrupts MQ feeds from SmartKargo to CargoSPOT and Salesforce."
        }
      ]
    },
    typicalBusinessImpact: [
      "CHAMP (CargoSPOT): (Add Typical Business Impact)",
      "AirClic (Descartes): Handsets can't download load data",
      "AirClic (Descartes): Scanners prompt for the wrong ULD position",
      "AirClic (Descartes): Scan data never reaches the verification report",
      "SmartKargo: (Add Typical Business Impact)"
    ],
    knownWorkarounds: [
      "CHAMP (CargoSPOT): (Add Known Workarounds)",
      "AirClic (Descartes): (Add Known Workarounds)",
      "SmartKargo: (Add Known Workarounds)"
    ],
    validationChecklist: [
      "CHAMP (CargoSPOT): Escalate to the Airport Operations team before contacting CHAMP. (Add the remaining checklist steps.)",
      "AirClic (Descartes): Check that ULDVerificationWS is running.",
      "AirClic (Descartes): For JBoss \"Connection Failed\" alerts, ask ProdOps/Network whether there's a network problem affecting TUKVVAPP17. If not, call Descartes; they may ask for server.log.",
      "AirClic (Descartes): For Harvester shutdown alerts, check the end of the log for PINGs. If there are none, email server.log to Descartes.",
      "AirClic (Descartes): For JBoss DB errors, contact the DBA about TUKVVAAGSSDB01.",
      "AirClic (Descartes): For a wrong position prompt, have Enterprise Mobile check the scanner first, then send the ticket to Airport Ops on-call.",
      "AirClic (Descartes): Have users log out of the Descartes app after scanning, which shows whether there was a network problem.",
      "SmartKargo: Send all SmartKargo or online cargo booking tickets to the AirportOps queue.",
      "SmartKargo: For HA users with password, access, browser, printer or network problems, route them to HA ITSC.",
      "SmartKargo: For anything else, the QID Help Desk logs a ticket. Include the issue description, steps to reproduce, and the user's contact info."
    ],
    vendorContacts: {
      supportPhone:
        "CHAMP: +44 20 8587 8080 (24-hr emergency: Alexander Hunter, 011 41 77 425 2866) • AirClic (Descartes): 877-786-9339 (opt 0, ask for AirClic Support) / 877-901-7557 (2026 sheet) • SmartKargo: 617-607-4066 / QID Help Desk: 888-733-0568",
      supportPhoneNote:
        "AirClic has two support numbers (877-786-9339 in most docs; 877-901-7557 in 2026 sheet). SmartKargo has two support numbers (617-607-4066 in 2026 sheet; 888-733-0568 QID Help Desk in HA guide).",
      supportEmail:
        "support@champ.aero • servicedesk@descartes.com (Escalation: wking@descartes.com) • ha@skglobal.zohodesk.com (v8.10; earlier skglobal@smartkargo.com)",
      supportHours:
        "CHAMP: A 24-hour emergency contact is listed: Alexander Hunter • AirClic (Descartes): (Add Support Service Hours) • SmartKargo: (Add Support Service Hours)",
      accountManager:
        "CHAMP: Alexander Hunter (011 41 77 425 2866) • Descartes Escalation: Will King, Manager of Support Services (wking@descartes.com)",
      technicalSupport:
        "CHAMP Support: +44 20 8587 8080 (support@champ.aero) • Descartes Service Desk: 877-786-9339 (opt 0) / 877-901-7557 (servicedesk@descartes.com) • SmartKargo / QID Help Desk: 888-733-0568 / 617-607-4066 (ha@skglobal.zohodesk.com)",
      namedEscalationContact:
        "CHAMP Account Rep / 24-hr emergency: Alexander Hunter, 011 41 77 425 2866 • Descartes: Will King, Manager of Support Services, wking@descartes.com",
      companyNote:
        "CHAMP (support@champ.aero domain) / Descartes (formerly AirClic) / SmartKargo",
      categoryNote:
        "CHAMP: Cargo: air waybill reservation, tracking and accounting • AirClic (Descartes): Cargo / Ramp: ULD scanning and the Planeside Tool (https://servicedesk.descartes.com/, registration required) • SmartKargo: Cargo: online booking. HA uses it as its cargo system",
      contactDirectory: [
        {
          role: "CHAMP Support",
          name: "CHAMP Support Desk",
          phone: "+44 20 8587 8080",
          email: "support@champ.aero"
        },
        {
          role: "CHAMP Account Rep / 24-hour Emergency Contact",
          name: "Alexander Hunter",
          phone: "011 41 77 425 2866",
          email: "support@champ.aero"
        },
        {
          role: "AirClic (Descartes) Service Desk",
          name: "Descartes Service Desk",
          phone:
            "877-786-9339 (choose option 0, then ask for AirClic Support) / 877-901-7557 (2026 vendor sheet)",
          email: "servicedesk@descartes.com"
        },
        {
          role: "AirClic (Descartes) Possible Escalation Contact",
          name: "Will King, Manager of Support Services",
          phone: "—",
          email: "wking@descartes.com"
        },
        {
          role: "SmartKargo Support (2026 Vendor Sheet)",
          name: "SmartKargo Support",
          phone: "617-607-4066",
          email:
            "ha@skglobal.zohodesk.com (v8.10). Earlier versions listed skglobal@smartkargo.com."
        },
        {
          role: "SmartKargo QID Help Desk (HA Support Guide)",
          name: "QID Help Desk",
          phone: "888-733-0568",
          email:
            "ha@skglobal.zohodesk.com (v8.10). Earlier versions listed skglobal@smartkargo.com."
        }
      ],
      contactWarningNote:
        "⚠️ Check before you publish: (1) CHAMP / CargoSPOT may be outdated. The 2026 vendor sheet lists iCargo (IBS Software) as the \"new CargoSPOT,\" with every IBS contact still \"TBD\". Confirm CargoSPOT is still live in production. (2) AirClic has two support numbers. Most documents list 877-786-9339; the 2026 vendor sheet lists 877-901-7557. (3) SmartKargo has two support numbers. The 2026 vendor sheet lists 617-607-4066. The HA support guide lists the QID Help Desk at 888-733-0568.",
      escalation:
        "CHAMP (CargoSPOT): Escalate through Airport Operations. Support: +44 20 8587 8080 (support@champ.aero). Account Rep / 24-hour emergency contact: Alexander Hunter, 011 41 77 425 2866.\nAirClic (now Descartes): Escalate to Airport Ops before contacting the vendor. Only Cargo Systems Support or CNS should contact Descartes. Phone: 877-786-9339 (choose option 0, then ask for AirClic Support) or 877-901-7557 (2026 vendor sheet). Email: servicedesk@descartes.com. Possible escalation contact: Will King, Manager of Support Services, wking@descartes.com.\nSmartKargo: Escalate through Airport Operations. Phone: 617-607-4066 (2026 vendor sheet) or QID Help Desk at 888-733-0568 (HA guide). Email: ha@skglobal.zohodesk.com (v8.10; earlier skglobal@smartkargo.com).",
      communicationGuidelines: [
        "CHAMP (CargoSPOT): Escalate through Airport Operations.",
        "AirClic (now Descartes): Escalate to Airport Ops before contacting the vendor. Only Cargo Systems Support or CNS should contact Descartes.",
        "SmartKargo: Escalate through Airport Operations."
      ],
      responseSlas: [
        {
          priority: "CHAMP (CargoSPOT)",
          label: "CHAMP (CargoSPOT)",
          level: "CHAMP (CargoSPOT) SLA",
          description: "Internal 20 minutes. Vendor response: (Add Response Targets).",
          target: "Internal 20 minutes. Vendor response: (Add Response Targets).",
          condition: "Internal 20 minutes. Vendor response: (Add Response Targets).",
          value: "Internal 20 minutes. Vendor response: (Add Response Targets)."
        },
        {
          priority: "AirClic (now Descartes)",
          label: "AirClic (now Descartes)",
          level: "AirClic (Descartes) SLA (Sev 2 Classed)",
          description: "(Add Response Targets)",
          target: "(Add Response Targets)",
          condition: "AirClic scanning issues are classed as Sev 2.",
          value: "(Add Response Targets)"
        },
        {
          priority: "SmartKargo",
          label: "SmartKargo",
          level: "SmartKargo SLA",
          description: "(Add Response Targets)",
          target: "(Add Response Targets)",
          condition: "(Add Response Targets)",
          value: "(Add Response Targets)"
        }
      ]
    },
    internalContacts: {
      itsTeam:
        "ITS COG Airport Ops Support (John Antony Dubreuil) / ITS Airport Operations (formerly Cargo IT; AirportOps queue)",
      itsTeamNote:
        "CHAMP: ITS COG Airport Ops Support (2026 vendor sheet lists John Antony Dubreuil; ITS System Owner: Will Marken, 206-245-4584, 6:30–18:30) • AirClic (Descartes): ITS Airport Operations (formerly Cargo IT) • SmartKargo: ITS Airport Operations (AirportOps queue)",
      applicationOwner:
        "John Antony Dubreuil (ITS COG Airport Ops Support) • Will Marken, 206-245-4584 (6:30–18:30, CargoSPOT ITS System Owner) • Gary Johnson, 573-854-1582 (Cargo Systems Support)",
      onCallSupport:
        "ITS Airport Operations On-Call (AirportOps queue) • Cargo Network Support: 206-392-7991 / 877-815-8254",
      systemAdministration:
        "CHAMP Password support: ITS Service Desk, 1-877-238-1077; How-to questions: Will Marken • AirClic Cargo Systems Support: Gary Johnson, 573-854-1582; Cargo Network Support: 206-392-7991 / 877-815-8254 • SmartKargo HA ITSC: 1-800-218-6149 in v8.10 (1-866-701-4143 in the older v8.9)",
      businessOwner:
        "Cargo / Airport Operations (AS, QX & HA Cargo)",
      everbridgeContacts:
        "ITS Airport Operations (AirportOps queue) / ITS COG Airport Ops Support",
      passwordSupport:
        "CHAMP: ITS Service Desk, 1-877-238-1077 • SmartKargo (HA users): HA ITSC, 1-800-218-6149 in v8.10 (1-866-701-4143 in the older v8.9)",
      internalDirectory: [
        {
          role: "CHAMP Primary ITS Team Owner",
          contact:
            "ITS COG Airport Ops Support. The 2026 vendor sheet lists John Antony Dubreuil."
        },
        {
          role: "CargoSPOT ITS System Owner / How-To Questions",
          contact: "Will Marken, 206-245-4584 (6:30–18:30)"
        },
        {
          role: "CHAMP Password Support",
          contact: "ITS Service Desk, 1-877-238-1077"
        },
        {
          role: "AirClic & SmartKargo Primary ITS Team Owner",
          contact:
            "ITS Airport Operations (formerly Cargo IT; AirportOps queue)"
        },
        {
          role: "AirClic Cargo Systems Support",
          contact: "Gary Johnson, 573-854-1582"
        },
        {
          role: "AirClic Cargo Network Support (CNS)",
          contact: "206-392-7991 / 877-815-8254"
        },
        {
          role: "SmartKargo HA ITSC (Password, Access, Browser, Printer, Network)",
          contact: "1-800-218-6149 in v8.10 (1-866-701-4143 in the older v8.9)"
        }
      ]
    },
    incidentHistory: [],
    relatedDocuments: [
      {
        title: "CargoSpot_System_Summary.docx",
        type: "System Summary (Word)",
        owner: "ITS Airport Operations / SysDocs",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B9CE0485F-8382-4BED-B44C-EA7CC1A84536%7D&file=CargoSpot_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "MQ-Queue-Inventory-03072024.xlsx",
        type: "MQ Queue Inventory (Excel)",
        owner: "ITS Airport Operations / SysDocs",
        updated: "Mar 2024",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B37B47C3F-FEBA-4287-B259-F514D938BF62%7D&file=MQ-Queue-Inventory-03072024.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Vendor Escalation for Critical Systems.docx",
        type: "Escalation Reference (Word)",
        owner: "ITS Production Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BB85271C7-A549-4429-8EC8-01EBAFF93C00%7D&file=Vendor%20Escalation%20for%20Critical%20Systems.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ITS Vendor Information - 2026.xlsx",
        type: "ITS Vendor Directory (Excel)",
        owner: "ITS Sev 1 Response",
        updated: "2026",
        url: "https://alaskaair.sharepoint.com/sites/ITSSev1Response/_layouts/15/Doc.aspx?sourcedoc=%7B0C805079-8D03-4D14-BE73-0012791BDD6A%7D&file=ITS%20Vendor%20Information%20-%202026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Cargo Vendor Support Contact Info.docx",
        type: "Cargo Vendor Contacts (Word)",
        owner: "ITS Airport Operations / Cargo",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ASICS/AOS/AO/cargo/_layouts/15/Doc.aspx?sourcedoc=%7B1EF59013-FCBE-4F30-A795-9DD53E1B8C7D%7D&file=Cargo%20Vendor%20Support%20Contact%20Info.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "SupportDoc_AirClic.docx",
        type: "AirClic Support Document (Word)",
        owner: "ITS Airport Operations / SysDocs",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BF7E2E38D-5CF2-445D-B9F9-2C2B6AEF2B84%7D&file=SupportDoc_AirClic.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ULD KT_Document V1.1.docx",
        type: "ULD Knowledge Transfer Document (Word)",
        owner: "ITS Airport Operations / WAB",
        updated: "V1.1",
        url: "https://alaskaair.sharepoint.com/sites/ASICS/AOS/AO/WAB/_layouts/15/Doc.aspx?sourcedoc=%7B544997FB-A7F1-4AA3-B960-BAB835922527%7D&file=ULD%20KT_Document%20V1.1.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Product Info.xlsx",
        type: "Mobile Ops Product Info (Excel)",
        owner: "Mobile Ops",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ops/mobileops/_layouts/15/Doc.aspx?sourcedoc=%7B6640C841-BCDE-468B-8937-EFE1EDD20907%7D&file=Product%20Info.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ULD Scanning data is not updated in mobile device.docx",
        type: "Troubleshooting KB (Word)",
        owner: "ITS Knowledge Management",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B77141EBF-384E-49A5-B271-6A73561D8E2E%7D&file=ULD%20Scanning%20data%20is%20not%20updated%20in%20mobile%20device.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "User reporting a problem with ULD scanning prompting the user with the wrong position.docx",
        type: "Troubleshooting KB (Word)",
        owner: "ITS Knowledge Management",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BDB0C08AA-51FE-4C86-904B-31FADF96EEB0%7D&file=User%20reporting%20a%20problem%20with%20ULD%20scanning%20prompting%20the%20user%20with%20the%20wrong%20position.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "SmartLoad_S4A_Physical_View.pdf",
        type: "Architecture Diagram (PDF)",
        owner: "Aircraft Weight and Balance / SysDocs",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/Aircraft%20Weight%20and%20Balance/SmartLoad_S4A_Physical_View.pdf?web=1"
      },
      {
        title: "ULD AVR Architecture.docx",
        type: "Architecture Guide (Word)",
        owner: "ITS Knowledge Management",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B61264A97-BDFA-44D8-AE37-9F80C874FF47%7D&file=ULD%20AVR%20Architecture.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "User can see load data and unable to see Descartes data in the Igloo Verification Report after scan completes.docx",
        type: "Troubleshooting KB (Word)",
        owner: "ITS Knowledge Management",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B76F143FD-2C3D-4815-ACEA-CC434879997C%7D&file=User%20can%20see%20load%20data%20and%20unable%20to%20see%20Descartes%20data%20in%20the%20Igloo%20Verification%20Report%20after%20scan%20completes.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Receive AlaskaULDScan Error Alerts with JBoss DB errors.docx",
        type: "Alert Runbook (Word)",
        owner: "ITS Knowledge Management",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BF5871B1B-C9CD-4740-A1AB-ED2736C19EFB%7D&file=Receive%20AlaskaULDScan%20Error%20Alerts%20with%20JBoss%20DB%20errors.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Receive AlaskaULDScan Error Alerts from JBoss with Connection Failed.docx",
        type: "Alert Runbook (Word)",
        owner: "ITS Knowledge Management",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BE1A39483-BE4A-4573-9DF1-00232F22E810%7D&file=Receive%20AlaskaULDScan%20Error%20Alerts%20from%20JBoss%20with%20Connection%20Failed.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Receive AlaskaULDScan Error Alerts from JBoss about Harvester Shutdown.docx",
        type: "Alert Runbook (Word)",
        owner: "ITS Knowledge Management",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BA9478C5F-EAC1-421D-AED8-7D6137DE38D5%7D&file=Receive%20AlaskaULDScan%20Error%20Alerts%20from%20JBoss%20about%20Harvester%20Shutdown.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "AirClic BCU vs PST Scanners.docx",
        type: "Scanner Reference Guide (Word)",
        owner: "ITS Knowledge Management",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B977F91BA-76F3-4846-A3A8-00DAE1B54EB2%7D&file=AirClic%20BCU%20vs%20PST%20Scanners.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Editrade Support Info.docx",
        type: "Support Reference (Word)",
        owner: "ITS Airport Operations / SysDocs",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BCEB61D97-43A5-43C7-88EA-69319AE1B29F%7D&file=Editrade%20Support%20Info.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "SmartKargo System Summary.docx",
        type: "System Summary (Word)",
        owner: "ITS Knowledge Management",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B3849EC97-55F4-4D13-9611-EA238C17D1F3%7D&file=SmartKargo%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "SmartKargo Product Support Guide v8.9.docx",
        type: "Product Support Guide v8.9 (Word)",
        owner: "Hawaiian Airlines / AS-HA TIMO",
        updated: "v8.9",
        url: "https://alaskaair.sharepoint.com/sites/ashatimo/_layouts/15/Doc.aspx?sourcedoc=%7BF9CD4742-84A9-4171-845D-F6D1B5FF5089%7D&file=SmartKargo%20Product%20Support%20Guide%20v8.9.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "SmartKargo Product Support Guide v8.10.docx",
        type: "Product Support Guide v8.10 (Word)",
        owner: "Hawaiian Airlines / AS-HA TIMO",
        updated: "v8.10",
        url: "https://alaskaair.sharepoint.com/sites/ashatimo/_layouts/15/Doc.aspx?sourcedoc=%7B59C4C917-07C6-4DCA-B850-D53DC1397A8B%7D&file=SmartKargo%20Product%20Support%20Guide%20v8.10.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "SmartKargo_User_Guide_(v2024.01).pdf",
        type: "User Guide v2024.01 (PDF)",
        owner: "Single Cargo Operation / AS-HA TIMO",
        updated: "2024.01",
        url: "https://alaskaair.sharepoint.com/sites/ashatimo/Shared%20Documents/2.%20Operations/Cargo/Single%20Cargo%20Operation/Requirements/SmartKargo_User_Guide_(v2024.01).pdf?web=1"
      }
    ]
  },

  champ: {
    id: "champ",
    name: "CHAMP (CargoSPOT)",
    breadcrumbTrail: ["Vendors", "CHAMP (CargoSPOT)", "Vendor Impact"],
    pageTitle: "CHAMP (CargoSPOT) - Vendor Impact Details",
    pageSubtitle:
      "CargoSPOT is the core cargo booking and tracking system for AS and QX, with an internal SLA of 20 minutes.",
    applicationsTabTitle: "CHAMP (CargoSPOT)",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "View all Alaska Cargo applications supported by CHAMP (CargoSPOT / cSpot and Cargo Payment).",
    applicationsCardSubtitle:
      "Applications and systems supported by CHAMP for cargo air waybill reservation, tracking, accounting, and payment.",
    dependenciesTabTitle: "CHAMP (CargoSPOT) - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream IBM MQ queues, downstream Salesforce and Azure feeds, and Windows Server 2008 R2 / Java 7 / LDAP / IBM MQ (QMMFP) infrastructure.",
    status: "Active",
    lastUpdated: "2026 (CargoSpot_System_Summary)",
    subtitle: "Cargo: air waybill reservation, tracking and accounting (Internal SLA: 20 minutes)",
    company: "CHAMP (support@champ.aero domain)",
    website: "(Add Website/Support Portal URL)",
    category: "Cargo: air waybill reservation, tracking and accounting",
    itsTeam: "ITS COG Airport Ops Support. The 2026 vendor sheet lists John Antony Dubreuil.",
    logo: "public/vendors/cargo-spot.png",
    impactSummary: {
      confirmed: 0,
      potential: 2,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      level: "Critical",
      title: "Key Takeaways: Core AS/QX Cargo Booking & Tracking (20-Minute Internal SLA)",
      message:
        "CargoSPOT is the core cargo booking and tracking system for AS and QX. It has an internal SLA of 20 minutes."
    },
    impactedSystems: [
      {
        id: "champ-cspot",
        name: "CargoSPOT (cSpot)",
        subName: "(Internal SLA: 20 minutes)",
        appTabSubName: "(Internal SLA: 20 minutes)",
        description:
          "Java app running as a Windows service. Used by 900+ AS/QX CSAs and RSAs at 83 cargo stations",
        appTabDescription:
          "Java app running as a Windows service. Used by 900+ AS/QX CSAs and RSAs at 83 cargo stations",
        businessFunction: "Cargo air waybill reservation, tracking and accounting",
        impact: "(Add Impact)",
        dependencies: "Windows Server 2008 R2, JRE 1.7u45, LDAP auth",
        status: "Potential",
        owner: "ITS System Owner: Will Marken, 206-245-4584 (6:30–18:30)"
      },
      {
        id: "champ-cargo-payment",
        name: "Cargo Payment",
        subName: "(CHAMP / AirClic / SmartKargo)",
        appTabSubName: "(CHAMP / AirClic / SmartKargo)",
        description:
          "Listed under the same vendor group (CHAMP / AirClic / SmartKargo)",
        appTabDescription:
          "Listed under the same vendor group (CHAMP / AirClic / SmartKargo)",
        businessFunction: "Cargo payment",
        impact: "(Add Impact)",
        dependencies: "(Add Direct Dependencies)",
        status: "Potential",
        owner: "ITS COG Airport Ops Support"
      }
    ],
    upstreamDependencies: [
      "MQ queues QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT, CG.RNT2CS.DATAFEED, CG.SELFSERVICE.DELIVERY and CG.SITA.DATAFEED, all owned by ITS Airport Operations"
    ],
    downstreamConsumers: [
      "Salesforce (QMMFP.CG.CUSTOMER.SALESFORCE)",
      "Azure (CG.CUSTOMER.AZURE)"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Inbound IBM MQ queues (SMARTKARGO.CARGOSPOT, RNT2CS.DATAFEED, SELFSERVICE.DELIVERY, SITA.DATAFEED) feeding CargoSPOT, and outbound feeds to Salesforce and Azure.",
      diagramUpstream: [
        {
          id: "champ-up-1",
          name: "ITS Airport Ops MQ Queues",
          label: "ITS Airport Ops MQ Queues",
          subtitle: "SMARTKARGO.CARGOSPOT, RNT2CS, SELFSERVICE, SITA",
          iconType: "transfer"
        }
      ],
      diagramServices: ["CargoSPOT (cSpot)", "Cargo Payment"],
      diagramDownstream: [
        {
          id: "champ-down-1",
          name: "Salesforce",
          label: "Salesforce",
          subtitle: "QMMFP.CG.CUSTOMER.SALESFORCE",
          iconType: "database"
        },
        {
          id: "champ-down-2",
          name: "Azure",
          label: "Azure",
          subtitle: "CG.CUSTOMER.AZURE",
          iconType: "nodes"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 1, tone: "red" },
        { label: "Downstream Consumers", count: 2, tone: "green" },
        { label: "Applications & Systems", count: 2, tone: "blue" },
        { label: "Infrastructure Dependencies", count: 1, tone: "purple" }
      ],
      keyTakeaways: [
        "CargoSPOT is the core cargo booking and tracking system for AS and QX. It has an internal SLA of 20 minutes."
      ],
      upstreamTable: [
        {
          id: "champ-uptbl-1",
          name: "IBM MQ Queues (QMMFP)",
          subName: "(Owned by ITS Airport Operations)",
          description:
            "MQ queues QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT, CG.RNT2CS.DATAFEED, CG.SELFSERVICE.DELIVERY and CG.SITA.DATAFEED, all owned by ITS Airport Operations",
          type: "Internal / IBM MQ",
          typeBadge: "blue",
          impact: "Inbound cargo booking and data feeds delayed to CargoSPOT."
        }
      ],
      downstreamTable: [
        {
          id: "champ-dwntbl-1",
          name: "Salesforce",
          subName: "(QMMFP.CG.CUSTOMER.SALESFORCE)",
          description: "Salesforce (QMMFP.CG.CUSTOMER.SALESFORCE)",
          type: "Downstream Consumer",
          dataFlow: "QMMFP.CG.CUSTOMER.SALESFORCE",
          impact: "Customer cargo updates to Salesforce delayed."
        },
        {
          id: "champ-dwntbl-2",
          name: "Azure",
          subName: "(CG.CUSTOMER.AZURE)",
          description: "Azure (CG.CUSTOMER.AZURE)",
          type: "Downstream Consumer",
          dataFlow: "CG.CUSTOMER.AZURE",
          impact: "Cargo data feeds to Azure delayed."
        }
      ],
      infrastructureTable: [
        {
          id: "champ-infra-1",
          component: "Windows Server 2008 R2, Java 7, LDAP, IBM MQ (QMMFP)",
          category: "CargoSPOT Server, Runtime, Auth & Messaging",
          iconType: "server",
          description: "Windows Server 2008 R2, Java 7, LDAP, IBM MQ (QMMFP)",
          details: "Windows Server 2008 R2, Java 7, LDAP, IBM MQ (QMMFP)",
          owner: "ITS COG Airport Ops Support / ITS Airport Operations",
          impact: "CargoSPOT service or MQ queues unavailable."
        }
      ]
    },
    typicalBusinessImpact: ["(Add Typical Business Impact)"],
    knownWorkarounds: ["(Add Known Workarounds)"],
    validationChecklist: [
      "Escalate to the Airport Operations team before contacting CHAMP. (Add the remaining checklist steps.)"
    ],
    vendorContacts: {
      supportPhone: "+44 20 8587 8080",
      supportPhoneNote:
        "Account Rep / 24-hour emergency contact: Alexander Hunter, 011 41 77 425 2866.",
      supportEmail: "support@champ.aero",
      supportHours: "A 24-hour emergency contact is listed: Alexander Hunter",
      accountManager: "Alexander Hunter, 011 41 77 425 2866",
      technicalSupport:
        "Support, +44 20 8587 8080 • Account Rep / 24-hour emergency contact: Alexander Hunter, 011 41 77 425 2866",
      namedEscalationContact:
        "Alexander Hunter, 011 41 77 425 2866 (Account Rep / 24-hour emergency contact)",
      companyNote: "CHAMP (support@champ.aero domain)",
      categoryNote: "Cargo: air waybill reservation, tracking and accounting",
      contactDirectory: [
        {
          role: "Support",
          name: "CHAMP Support",
          phone: "+44 20 8587 8080",
          email: "support@champ.aero"
        },
        {
          role: "Account Rep / 24-hour emergency contact",
          name: "Alexander Hunter",
          phone: "011 41 77 425 2866",
          email: "support@champ.aero"
        }
      ],
      contactWarningNote:
        "⚠️ Check before you publish: CHAMP / CargoSPOT may be outdated. The 2026 vendor sheet lists iCargo (IBS Software) as the \"new CargoSPOT,\" with every IBS contact still \"TBD\". Confirm CargoSPOT is still live in production.",
      escalation:
        "Escalate through Airport Operations. Support, +44 20 8587 8080. Account Rep / 24-hour emergency contact: Alexander Hunter, 011 41 77 425 2866.",
      communicationGuidelines: ["Escalate through Airport Operations."],
      responseSlas: [
        {
          priority: "Internal & Vendor SLA",
          label: "Internal & Vendor SLA",
          level: "CargoSPOT SLA",
          description: "Internal 20 minutes. Vendor response: (Add Response Targets).",
          target: "Internal 20 minutes. Vendor response: (Add Response Targets).",
          condition: "Internal 20 minutes. Vendor response: (Add Response Targets).",
          value: "Internal 20 minutes. Vendor response: (Add Response Targets)."
        }
      ]
    },
    internalContacts: {
      itsTeam:
        "ITS COG Airport Ops Support. The 2026 vendor sheet lists John Antony Dubreuil.",
      itsTeamNote:
        "Primary ITS Team Owner: ITS COG Airport Ops Support. The 2026 vendor sheet lists John Antony Dubreuil. ITS System Owner: Will Marken, 206-245-4584 (6:30–18:30).",
      applicationOwner: "Will Marken, 206-245-4584 (6:30–18:30) / John Antony Dubreuil",
      onCallSupport: "ITS COG Airport Ops Support",
      systemAdministration:
        "Password support: ITS Service Desk, 1-877-238-1077. How-to questions: Will Marken.",
      businessOwner: "Cargo Operations (AS & QX)",
      everbridgeContacts: "ITS Airport Operations",
      passwordSupport: "ITS Service Desk, 1-877-238-1077",
      internalDirectory: [
        {
          role: "Primary ITS Team Owner",
          contact:
            "ITS COG Airport Ops Support. The 2026 vendor sheet lists John Antony Dubreuil."
        },
        {
          role: "ITS System Owner / How-to questions",
          contact: "Will Marken, 206-245-4584 (6:30–18:30)"
        },
        {
          role: "Password support",
          contact: "ITS Service Desk, 1-877-238-1077"
        }
      ]
    },
    incidentHistory: [],
    relatedDocuments: [
      {
        title: "CargoSpot_System_Summary.docx",
        type: "System Summary (Word)",
        owner: "ITS Airport Operations / SysDocs",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B9CE0485F-8382-4BED-B44C-EA7CC1A84536%7D&file=CargoSpot_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "MQ-Queue-Inventory-03072024.xlsx",
        type: "MQ Queue Inventory (Excel)",
        owner: "ITS Airport Operations / SysDocs",
        updated: "Mar 2024",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B37B47C3F-FEBA-4287-B259-F514D938BF62%7D&file=MQ-Queue-Inventory-03072024.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Vendor Escalation for Critical Systems.docx",
        type: "Escalation Reference (Word)",
        owner: "ITS Production Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BB85271C7-A549-4429-8EC8-01EBAFF93C00%7D&file=Vendor%20Escalation%20for%20Critical%20Systems.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ITS Vendor Information - 2026.xlsx",
        type: "ITS Vendor Directory (Excel)",
        owner: "ITS Sev 1 Response",
        updated: "2026",
        url: "https://alaskaair.sharepoint.com/sites/ITSSev1Response/_layouts/15/Doc.aspx?sourcedoc=%7B0C805079-8D03-4D14-BE73-0012791BDD6A%7D&file=ITS%20Vendor%20Information%20-%202026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      }
    ]
  },

  airclic: {
    id: "airclic",
    name: "AirClic (now Descartes)",
    breadcrumbTrail: ["Vendors", "AirClic (now Descartes)", "Vendor Impact"],
    pageTitle: "AirClic (now Descartes) - Vendor Impact Details",
    pageSubtitle:
      "AirClic scanning issues are classed as Sev 2. The platform links S4A load planning to ramp loading verification.",
    applicationsTabTitle: "AirClic (now Descartes)",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "View all Alaska Cargo / Ramp applications supported by Descartes (formerly AirClic): ULD Scanning / Verification, Planeside Tool (PST), and Igloo Verification Report / ULD AVR.",
    applicationsCardSubtitle:
      "Applications and systems supported by Descartes (formerly AirClic) for ULD position assignment/verification, final flight load data, and load verification reporting.",
    dependenciesTabTitle: "AirClic (now Descartes) - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream S4A CLP InsertULDScanInfo() calls, downstream S4A / Planeside Tool / Igloo Verification Report consumers, and AirClic DB, JBoss/Harvester, ULDVerificationWS, and TC75x scanner infrastructure.",
    status: "Active",
    lastUpdated: "2026 (SupportDoc_AirClic & ULD Scanning KBs)",
    subtitle: "Cargo / Ramp: ULD scanning and the Planeside Tool (Sev 2 Classed)",
    company: "Descartes (formerly AirClic)",
    website: "https://servicedesk.descartes.com/ (registration required)",
    category: "Cargo / Ramp: ULD scanning and the Planeside Tool",
    itsTeam: "ITS Airport Operations (formerly Cargo IT)",
    logo: "public/vendors/cargo-spot.png",
    impactSummary: {
      confirmed: 0,
      potential: 3,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      level: "Critical",
      title: "Key Takeaways: Sev 2 Ramp ULD Scanning & S4A Load Verification",
      message:
        "AirClic scanning issues are classed as Sev 2. The platform links S4A load planning to ramp loading verification."
    },
    impactedSystems: [
      {
        id: "airclic-only-uld-scanning",
        name: "ULD Scanning / Verification",
        subName: "(Handheld Scanners · ULD_Scanning → ULD_History)",
        appTabSubName: "(Handheld Scanners · ULD_Scanning → ULD_History)",
        description:
          "Descartes app on handheld scanners. Pulls load data from ULD_Scanning and writes scan results to ULD_History",
        appTabDescription:
          "Descartes app on handheld scanners. Pulls load data from ULD_Scanning and writes scan results to ULD_History",
        businessFunction: "Assigns ULD positions on freighters and verifies them",
        impact: "Handsets can't download load data",
        dependencies: "ULDVerificationWS, AirClic DB, JBoss on TUKVVAPP17",
        status: "Potential",
        owner: "ITS Airport Operations"
      },
      {
        id: "airclic-only-pst",
        name: "Planeside Tool (PST)",
        subName: "(Scanner App for Final Flight Load Data)",
        appTabSubName: "(Scanner App for Final Flight Load Data)",
        description: "Scanner app for final flight load data",
        appTabDescription: "Scanner app for final flight load data",
        businessFunction:
          "Sends final load data from planeside to CLP and the Departure Coordinator",
        impact: "(Add Impact)",
        dependencies: "S4A, AirClic",
        status: "Potential",
        owner: "ITS Airport Operations"
      },
      {
        id: "airclic-only-uld-avr",
        name: "Igloo Verification Report / ULD AVR",
        subName: "(Match/No Match Report · Hourly into Azure)",
        appTabSubName: "(Match/No Match Report · Hourly into Azure)",
        description: "Match/No Match report, refreshed hourly into Azure",
        appTabDescription: "Match/No Match report, refreshed hourly into Azure",
        businessFunction: "Load verification for DC/CLP",
        impact: "Descartes data missing from the report",
        dependencies: "ULD_HISTORY table, Informix FltRange DB",
        status: "Potential",
        owner: "ITS Airport Operations"
      }
    ],
    upstreamDependencies: [
      "When CLP submits a load plan in S4A, it calls InsertULDScanInfo() on ULDVerificationWS, which writes to the ULD_Scanning table."
    ],
    downstreamConsumers: [
      "Load data and final load summaries go to S4A and the Planeside Tool.",
      "Igloo Verification Report."
    ],
    dependenciesTab: {
      overviewSubtitle:
        "S4A load plan submissions via InsertULDScanInfo() on ULDVerificationWS into ULD_Scanning, handheld scanner verification to ULD_History, and downstream feeds to S4A, Planeside Tool, and the Igloo Verification Report.",
      diagramUpstream: [
        {
          id: "airclic-up-1",
          name: "S4A / CLP Load Plan",
          label: "S4A / CLP Load Plan",
          subtitle: "Calls InsertULDScanInfo() on ULDVerificationWS → ULD_Scanning",
          iconType: "network"
        }
      ],
      diagramServices: [
        "ULD Scanning / Verification",
        "Planeside Tool (PST)",
        "Igloo Verification Report / ULD AVR"
      ],
      diagramDownstream: [
        {
          id: "airclic-down-1",
          name: "S4A & Planeside Tool",
          label: "S4A & Planeside Tool",
          subtitle: "Load data and final load summaries",
          iconType: "nodes"
        },
        {
          id: "airclic-down-2",
          name: "Igloo Verification Report",
          label: "Igloo Verification Report",
          subtitle: "Match/No Match report refreshed hourly into Azure",
          iconType: "chart"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 1, tone: "red" },
        { label: "Downstream Consumers", count: 2, tone: "green" },
        { label: "Applications & Systems", count: 3, tone: "blue" },
        { label: "Infrastructure Dependencies", count: 4, tone: "purple" }
      ],
      keyTakeaways: [
        "AirClic scanning issues are classed as Sev 2. The platform links S4A load planning to ramp loading verification."
      ],
      upstreamTable: [
        {
          id: "airclic-uptbl-1",
          name: "S4A / CLP Load Plan (ULDVerificationWS)",
          subName: "(InsertULDScanInfo() → ULD_Scanning)",
          description:
            "When CLP submits a load plan in S4A, it calls InsertULDScanInfo() on ULDVerificationWS, which writes to the ULD_Scanning table.",
          type: "Internal / Web Service",
          typeBadge: "orange",
          impact: "Handsets can't download load data."
        }
      ],
      downstreamTable: [
        {
          id: "airclic-dwntbl-1",
          name: "S4A and the Planeside Tool",
          subName: "(Load Data & Final Load Summaries)",
          description:
            "Load data and final load summaries go to S4A and the Planeside Tool.",
          type: "Internal Operations",
          dataFlow: "Final flight load data to CLP and Departure Coordinator",
          impact: "Final load summaries delayed from planeside to CLP and DC."
        },
        {
          id: "airclic-dwntbl-2",
          name: "Igloo Verification Report",
          subName: "(ULD AVR · Hourly into Azure)",
          description: "Igloo Verification Report.",
          type: "Internal Reporting",
          dataFlow: "ULD_HISTORY table & Informix FltRange DB → Azure",
          impact: "Descartes data missing from the report."
        }
      ],
      infrastructureTable: [
        {
          id: "airclic-infra-1",
          component: "AirClic DB (TUKVVAAGSSDB01)",
          category: "Database",
          iconType: "database",
          description:
            "AirClic DB on airclic.sql.insideaag.com (TUKVVAAGSSDB01)",
          details:
            "AirClic DB on airclic.sql.insideaag.com (TUKVVAAGSSDB01)",
          owner: "ITS Airport Operations / DBA",
          impact: "JBoss DB errors affecting ULD_Scanning and ULD_History."
        },
        {
          id: "airclic-infra-2",
          component: "JBoss/Harvester on TUKVVAPP17",
          category: "Application Server",
          iconType: "server",
          description: "JBoss/Harvester on TUKVVAPP17",
          details: "JBoss/Harvester on TUKVVAPP17",
          owner: "ITS Airport Operations / ProdOps / Network",
          impact: "Connection Failed or Harvester Shutdown alerts."
        },
        {
          id: "airclic-infra-3",
          component: "ULDVerificationWS (DNA Servers)",
          category: "Web Service",
          iconType: "globe",
          description:
            "ULDVerificationWS on the DNA servers in McGee and Tukwila",
          details:
            "ULDVerificationWS on the DNA servers in McGee and Tukwila",
          owner: "ITS Airport Operations",
          impact: "Load plan data from S4A cannot be written to ULD_Scanning."
        },
        {
          id: "airclic-infra-4",
          component: "TC75x Scanners (WS1)",
          category: "Mobile Scanners",
          iconType: "layers",
          description: "TC75x scanners managed through WS1",
          details: "TC75x scanners managed through WS1",
          owner: "Enterprise Mobile",
          impact: "Handheld scanner issues on the ramp."
        }
      ]
    },
    typicalBusinessImpact: [
      "Handsets can't download load data",
      "Scanners prompt for the wrong ULD position",
      "Scan data never reaches the verification report"
    ],
    knownWorkarounds: ["(Add Known Workarounds)"],
    validationChecklist: [
      "Check that ULDVerificationWS is running.",
      "For JBoss \"Connection Failed\" alerts, ask ProdOps/Network whether there's a network problem affecting TUKVVAPP17. If not, call Descartes; they may ask for server.log.",
      "For Harvester shutdown alerts, check the end of the log for PINGs. If there are none, email server.log to Descartes.",
      "For JBoss DB errors, contact the DBA about TUKVVAAGSSDB01.",
      "For a wrong position prompt, have Enterprise Mobile check the scanner first, then send the ticket to Airport Ops on-call.",
      "Have users log out of the Descartes app after scanning, which shows whether there was a network problem."
    ],
    vendorContacts: {
      supportPhone:
        "877-786-9339 (choose option 0, then ask for AirClic Support) / 877-901-7557 (2026 vendor sheet)",
      supportPhoneNote:
        "AirClic has two support numbers. Most documents list 877-786-9339; the 2026 vendor sheet lists 877-901-7557.",
      supportEmail: "servicedesk@descartes.com",
      supportHours: "(Add Support Service Hours)",
      accountManager:
        "Will King, Manager of Support Services, wking@descartes.com (Possible escalation contact)",
      technicalSupport:
        "Descartes Service Desk: 877-786-9339 (choose option 0, then ask for AirClic Support) / 877-901-7557 (servicedesk@descartes.com) • Possible escalation contact: Will King, Manager of Support Services, wking@descartes.com",
      namedEscalationContact:
        "Will King, Manager of Support Services, wking@descartes.com",
      companyNote: "Descartes (formerly AirClic)",
      categoryNote:
        "Cargo / Ramp: ULD scanning and the Planeside Tool • Portal: https://servicedesk.descartes.com/ (registration required)",
      contactDirectory: [
        {
          role: "Descartes Service Desk",
          name: "Descartes Service Desk (AirClic Support)",
          phone:
            "877-786-9339 (choose option 0, then ask for AirClic Support) / 877-901-7557 (2026 vendor sheet)",
          email: "servicedesk@descartes.com"
        },
        {
          role: "Possible Escalation Contact",
          name: "Will King, Manager of Support Services",
          phone: "—",
          email: "wking@descartes.com"
        }
      ],
      contactWarningNote:
        "⚠️ Check before you publish: AirClic has two support numbers. Most documents list 877-786-9339; the 2026 vendor sheet lists 877-901-7557.",
      escalation:
        "Escalate to Airport Ops before contacting the vendor. Only Cargo Systems Support or CNS should contact Descartes. Descartes Service Desk: 877-786-9339 (choose option 0, then ask for AirClic Support). Possible escalation contact: Will King, Manager of Support Services, wking@descartes.com.",
      communicationGuidelines: [
        "Escalate to Airport Ops before contacting the vendor. Only Cargo Systems Support or CNS should contact Descartes."
      ],
      responseSlas: [
        {
          priority: "Response Targets",
          label: "Response Targets",
          level: "AirClic (Descartes) SLA (Sev 2 Classed)",
          description: "(Add Response Targets)",
          target: "(Add Response Targets)",
          condition: "AirClic scanning issues are classed as Sev 2.",
          value: "(Add Response Targets)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS Airport Operations (formerly Cargo IT)",
      itsTeamNote:
        "Primary ITS Team Owner: ITS Airport Operations (formerly Cargo IT). Cargo Systems Support: Gary Johnson, 573-854-1582. Cargo Network Support: 206-392-7991 / 877-815-8254.",
      applicationOwner: "Gary Johnson, 573-854-1582 (Cargo Systems Support)",
      onCallSupport:
        "ITS Airport Operations On-Call • Cargo Network Support: 206-392-7991 / 877-815-8254",
      systemAdministration:
        "Cargo Systems Support: Gary Johnson, 573-854-1582 • Cargo Network Support: 206-392-7991 / 877-815-8254",
      businessOwner: "Cargo / Ramp Operations",
      everbridgeContacts: "ITS Airport Operations",
      passwordSupport: "Cargo Systems Support / Cargo Network Support",
      internalDirectory: [
        {
          role: "Primary ITS Team Owner",
          contact: "ITS Airport Operations (formerly Cargo IT)"
        },
        {
          role: "Cargo Systems Support",
          contact: "Gary Johnson, 573-854-1582"
        },
        {
          role: "Cargo Network Support",
          contact: "206-392-7991 / 877-815-8254"
        }
      ]
    },
    incidentHistory: [],
    relatedDocuments: [
      {
        title: "SupportDoc_AirClic.docx",
        type: "AirClic Support Document (Word)",
        owner: "ITS Airport Operations / SysDocs",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BF7E2E38D-5CF2-445D-B9F9-2C2B6AEF2B84%7D&file=SupportDoc_AirClic.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ULD KT_Document V1.1.docx",
        type: "ULD Knowledge Transfer Document (Word)",
        owner: "ITS Airport Operations / WAB",
        updated: "V1.1",
        url: "https://alaskaair.sharepoint.com/sites/ASICS/AOS/AO/WAB/_layouts/15/Doc.aspx?sourcedoc=%7B544997FB-A7F1-4AA3-B960-BAB835922527%7D&file=ULD%20KT_Document%20V1.1.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      }
    ]
  },

  smartkargo: {
    id: "smartkargo",
    name: "SmartKargo",
    breadcrumbTrail: ["Vendors", "SmartKargo", "Vendor Impact"],
    pageTitle: "SmartKargo - Vendor Impact Details",
    pageSubtitle:
      "SmartKargo is the customer-facing tool for booking cargo online and it feeds CargoSPOT. HA uses it as its cargo system.",
    applicationsTabTitle: "SmartKargo",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "View SmartKargo online cargo booking and Hawaiian Airlines (HA) cargo system details.",
    applicationsCardSubtitle:
      "Web app for external customers to book cargo online, and HA cargo booking, payments, and settlement via VeriFone.",
    dependenciesTabTitle: "SmartKargo - Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream dependencies, downstream CargoSPOT and Salesforce MQ feeds, and IBM MQ (QMMFP) infrastructure.",
    status: "Active",
    lastUpdated: "2026 (SmartKargo System Summary & Support Guide v8.9 / v8.10)",
    subtitle: "Cargo: online booking. HA uses it as its cargo system",
    company: "SmartKargo",
    website: "(Add Website/Support Portal URL)",
    category: "Cargo: online booking. HA uses it as its cargo system",
    itsTeam: "ITS Airport Operations (AirportOps queue)",
    logo: "public/vendors/cargo-spot.png",
    impactSummary: {
      confirmed: 0,
      potential: 1,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      level: "Warning",
      title: "Key Takeaways: Customer-Facing Online Cargo Booking & HA Cargo System",
      message:
        "SmartKargo is the customer-facing tool for booking cargo online and it feeds CargoSPOT."
    },
    impactedSystems: [
      {
        id: "smartkargo-only-app",
        name: "SmartKargo",
        subName: "(Online Cargo Booking & HA Cargo System)",
        appTabSubName: "(Online Cargo Booking & HA Cargo System)",
        description: "Web app for external customers to book cargo online",
        appTabDescription: "Web app for external customers to book cargo online",
        businessFunction:
          "Cargo booking. For HA, also payments and settlement via VeriFone",
        impact: "(Add Impact)",
        dependencies: "MQ feeds to CargoSPOT and Salesforce",
        status: "Potential",
        owner: "ITS Airport Operations"
      }
    ],
    upstreamDependencies: ["(Add Upstream Dependencies)"],
    downstreamConsumers: [
      "CargoSPOT (QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT)",
      "Salesforce (QMMFP.CG.CUSTOMER.SMARTKARGO.SALESFORCE)"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "SmartKargo online cargo booking feeding CargoSPOT (QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT) and Salesforce (QMMFP.CG.CUSTOMER.SMARTKARGO.SALESFORCE) via IBM MQ (QMMFP).",
      diagramUpstream: [
        {
          id: "smartkargo-up-1",
          name: "(Add Upstream Dependencies)",
          label: "(Add Upstream Dependencies)",
          subtitle: "External customer booking & VeriFone settlement (HA)",
          iconType: "doc"
        }
      ],
      diagramServices: ["SmartKargo"],
      diagramDownstream: [
        {
          id: "smartkargo-down-1",
          name: "CargoSPOT",
          label: "CargoSPOT",
          subtitle: "QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT",
          iconType: "transfer"
        },
        {
          id: "smartkargo-down-2",
          name: "Salesforce",
          label: "Salesforce",
          subtitle: "QMMFP.CG.CUSTOMER.SMARTKARGO.SALESFORCE",
          iconType: "database"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 1, tone: "red" },
        { label: "Downstream Consumers", count: 2, tone: "green" },
        { label: "Applications & Systems", count: 1, tone: "blue" },
        { label: "Infrastructure Dependencies", count: 1, tone: "purple" }
      ],
      keyTakeaways: [
        "SmartKargo is the customer-facing tool for booking cargo online and it feeds CargoSPOT."
      ],
      upstreamTable: [
        {
          id: "smartkargo-uptbl-1",
          name: "(Add Upstream Dependencies)",
          subName: "(SmartKargo Upstream)",
          description: "(Add Upstream Dependencies)",
          type: "External / Vendor",
          typeBadge: "orange",
          impact: "(Add Impact)"
        }
      ],
      downstreamTable: [
        {
          id: "smartkargo-dwntbl-1",
          name: "CargoSPOT",
          subName: "(QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT)",
          description: "CargoSPOT (QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT)",
          type: "Internal Operations",
          dataFlow: "QMMFP.CG.CUSTOMER.SMARTKARGO.CARGOSPOT",
          impact: "Online cargo bookings do not flow into CargoSPOT."
        },
        {
          id: "smartkargo-dwntbl-2",
          name: "Salesforce",
          subName: "(QMMFP.CG.CUSTOMER.SMARTKARGO.SALESFORCE)",
          description: "Salesforce (QMMFP.CG.CUSTOMER.SMARTKARGO.SALESFORCE)",
          type: "CRM Consumer",
          dataFlow: "QMMFP.CG.CUSTOMER.SMARTKARGO.SALESFORCE",
          impact: "Online cargo booking updates do not flow into Salesforce."
        }
      ],
      infrastructureTable: [
        {
          id: "smartkargo-infra-1",
          component: "IBM MQ (QMMFP)",
          category: "Messaging & Infrastructure",
          iconType: "server",
          description:
            "IBM MQ (QMMFP). Anything else: (Add Infrastructure Dependencies).",
          details:
            "IBM MQ (QMMFP). Anything else: (Add Infrastructure Dependencies).",
          owner: "ITS Airport Operations",
          impact: "MQ feeds to CargoSPOT and Salesforce disrupted."
        }
      ]
    },
    typicalBusinessImpact: ["(Add Typical Business Impact)"],
    knownWorkarounds: ["(Add Known Workarounds)"],
    validationChecklist: [
      "Send all SmartKargo or online cargo booking tickets to the AirportOps queue.",
      "For HA users with password, access, browser, printer or network problems, route them to HA ITSC.",
      "For anything else, the QID Help Desk logs a ticket. Include the issue description, steps to reproduce, and the user's contact info."
    ],
    vendorContacts: {
      supportPhone:
        "617-607-4066. The HA guide lists the QID Help Desk at 888-733-0568.",
      supportPhoneNote:
        "SmartKargo has two support numbers. The 2026 vendor sheet lists 617-607-4066. The HA support guide lists the QID Help Desk at 888-733-0568.",
      supportEmail:
        "ha@skglobal.zohodesk.com (v8.10). Earlier versions listed skglobal@smartkargo.com.",
      supportHours: "(Add Support Service Hours)",
      accountManager: "QID Help Desk, 888-733-0568",
      technicalSupport:
        "QID Help Desk, 888-733-0568 • 2026 vendor sheet: 617-607-4066 • Email: ha@skglobal.zohodesk.com (v8.10; earlier skglobal@smartkargo.com)",
      namedEscalationContact: "QID Help Desk, 888-733-0568",
      companyNote: "SmartKargo",
      categoryNote: "Cargo: online booking. HA uses it as its cargo system",
      contactDirectory: [
        {
          role: "QID Help Desk (HA Guide)",
          name: "QID Help Desk",
          phone: "888-733-0568",
          email:
            "ha@skglobal.zohodesk.com (v8.10). Earlier versions listed skglobal@smartkargo.com."
        },
        {
          role: "SmartKargo Support (2026 Vendor Sheet)",
          name: "SmartKargo Support",
          phone: "617-607-4066",
          email:
            "ha@skglobal.zohodesk.com (v8.10). Earlier versions listed skglobal@smartkargo.com."
        }
      ],
      contactWarningNote:
        "⚠️ Check before you publish: SmartKargo has two support numbers. The 2026 vendor sheet lists 617-607-4066. The HA support guide lists the QID Help Desk at 888-733-0568.",
      escalation:
        "Escalate through Airport Operations. QID Help Desk, 888-733-0568 (2026 vendor sheet lists 617-607-4066). Email: ha@skglobal.zohodesk.com (v8.10; earlier skglobal@smartkargo.com).",
      communicationGuidelines: ["Escalate through Airport Operations."],
      responseSlas: [
        {
          priority: "Response Targets",
          label: "Response Targets",
          level: "SmartKargo SLA",
          description: "(Add Response Targets)",
          target: "(Add Response Targets)",
          condition: "(Add Response Targets)",
          value: "(Add Response Targets)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS Airport Operations (AirportOps queue)",
      itsTeamNote:
        "ITS Airport Operations (AirportOps queue) • HA ITSC: 1-800-218-6149 in v8.10 (1-866-701-4143 in the older v8.9)",
      applicationOwner: "ITS Airport Operations",
      onCallSupport: "ITS Airport Operations (AirportOps queue)",
      systemAdministration:
        "HA ITSC: 1-800-218-6149 in v8.10 (1-866-701-4143 in the older v8.9)",
      businessOwner: "Cargo Operations (AS & HA)",
      everbridgeContacts: "ITS Airport Operations",
      passwordSupport:
        "HA ITSC: 1-800-218-6149 in v8.10 (1-866-701-4143 in the older v8.9)",
      internalDirectory: [
        {
          role: "Primary ITS Team Owner",
          contact: "ITS Airport Operations (AirportOps queue)"
        },
        {
          role: "HA ITSC",
          contact: "1-800-218-6149 in v8.10 (1-866-701-4143 in the older v8.9)"
        }
      ]
    },
    incidentHistory: [],
    relatedDocuments: [
      {
        title: "SmartKargo System Summary.docx",
        type: "System Summary (Word)",
        owner: "ITS Knowledge Management",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B3849EC97-55F4-4D13-9611-EA238C17D1F3%7D&file=SmartKargo%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "SmartKargo Product Support Guide v8.9.docx",
        type: "Product Support Guide v8.9 (Word)",
        owner: "Hawaiian Airlines / AS-HA TIMO",
        updated: "v8.9",
        url: "https://alaskaair.sharepoint.com/sites/ashatimo/_layouts/15/Doc.aspx?sourcedoc=%7BF9CD4742-84A9-4171-845D-F6D1B5FF5089%7D&file=SmartKargo%20Product%20Support%20Guide%20v8.9.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "SmartKargo Product Support Guide v8.10.docx",
        type: "Product Support Guide v8.10 (Word)",
        owner: "Hawaiian Airlines / AS-HA TIMO",
        updated: "v8.10",
        url: "https://alaskaair.sharepoint.com/sites/ashatimo/_layouts/15/Doc.aspx?sourcedoc=%7B59C4C917-07C6-4DCA-B850-D53DC1397A8B%7D&file=SmartKargo%20Product%20Support%20Guide%20v8.10.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "SmartKargo_User_Guide_(v2024.01).pdf",
        type: "User Guide v2024.01 (PDF)",
        owner: "Single Cargo Operation / AS-HA TIMO",
        updated: "2024.01",
        url: "https://alaskaair.sharepoint.com/sites/ashatimo/Shared%20Documents/2.%20Operations/Cargo/Single%20Cargo%20Operation/Requirements/SmartKargo_User_Guide_(v2024.01).pdf?web=1"
      }
    ]
  }
};

const KNOWN_VENDOR_LOGOS = {
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
};

const KNOWN_VENDOR_WEBSITES = {
  smart4aviation: "https://www.smart4aviation.aero",
  "aircraft-performance": "https://www.dynamicsource.se",
  aerodata: "https://www.aerodata.co/en-US/",
  "aircraft-performance-aerodata": "https://www.aerodata.co/en-US/",
  sita: "https://www.sita.aero",
  arinc: "https://portal.arinc.net",
  "jeppesen-flight-planning": "https://www.jeppesen.com",
  jcte: "https://www.jeppesen.com",
  "jcte-crew": "https://www.jeppesen.com",
  "ibm-weather": "https://www.weather.com",
  "wsi-fusion": "https://www.weather.com",
  "weather-feed": "https://www.weather.com",
  sabre: "https://www.sabre.com",
  "image-reservations": "https://www.sabre.com",
  "csa-mobile-boarding": "https://www.sabre.com",
  "csa-mobile-lobby": "https://www.sabre.com",
  rain: "https://www.sabre.com",
  boeing: "http://myboeingfleet.com",
  ncr: "https://www.ncr.com",
  tibco: "https://support.tibco.com",
  baggage: "https://www.portofanc.com",
  avtec: "https://www.avtecinc.com",
  "real-time-gates": "https://www.inform-software.com",
  "aims-vendor": "https://www.aimsairlinesoftware.com/",
  "as-trax": "https://www.trax.aero",
  "qx-trax": "https://www.trax.aero",
  icargo: "https://alaska-icargo.ibsplc.aero",
  "cargo-spot": "https://servicedesk.descartes.com/",
  champ: "https://www.champ.aero",
  airclic: "https://servicedesk.descartes.com/",
  smartkargo: "https://www.smartkargo.com",
  "shopping-service": "https://azure.microsoft.com",
  "solar-mileage": "https://www.oracle.com",
  "peoplesoft-financials": "https://www.oracle.com",
  "peoplesoft-hcm": "https://www.oracle.com",
  "information-display": "https://www.nettracer.aero",
  nettracer: "https://www.nettracer.aero",
  accelya: "https://www.accelya.com",
  five9: "https://community.five9.com/s/?language=en_US",
  alvaria: "https://www.alvaria.com/services-and-support/customer-care"
};

function cleanField(value) {
  const text = String(value ?? "")
    .replace(/\s*[--]\s*/g, " - ")
    .trim();
  return text && !/^(?:n\/?a|tbd|none|no)$/i.test(text) ? text : "";
}

function normalizeSingleLine(value) {
  return cleanField(value)
    .split(/\r?\n/)
    .map(part => part.trim())
    .filter(Boolean)
    .join(" / ")
    .replace(/\s*,\s*/g, ", ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractFirstEmail(value) {
  const raw = Array.isArray(value) ? value.join("\n") : String(value ?? "");
  const match = raw.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0].trim() : "";
}

function extractFirstPhone(value) {
  const raw = Array.isArray(value) ? value.join("\n") : String(value ?? "");
  if (!cleanField(raw)) return "";
  const phoneRegex =
    /(?:\+[ \t]*\d{1,4}[ \t.-]*|\b\d{1,4}[ \t.-]+)?(?:\(\d{1,5}\)[ \t.-]*)?\d+(?:[ \t.-]+\d+)*(?:[ \t]*(?:PIN|ext\.?|x)[ \t]*\d+)?/gi;
  let match;
  while ((match = phoneRegex.exec(raw)) !== null) {
    const candidate = match[0].trim();
    const digits = candidate
      .replace(/(?:PIN|ext\.?|x)[ \t]*\d+$/i, "")
      .replace(/\D/g, "");
    if (digits.length >= 7 && digits.length <= 15) {
      return candidate
        .replace(/^\+\s+/, "+")
        .replace(/[ \t]*-[ \t]*/g, "-")
        .replace(/[ \t]+/g, " ")
        .trim();
    }
  }
  const firstLine = raw
    .split(/\r?\n/)
    .map(l => l.trim())
    .find(Boolean);
  if (firstLine && /^contact via\s+/i.test(firstLine)) {
    return firstLine;
  }
  return "";
}

function extractFirstContactName(value) {
  const raw = cleanField(value);
  if (!raw) return "";
  if (/customer care incident manager\s*\(ccim\)/i.test(raw)) {
    return "Customer Care Incident Manager (CCIM)";
  }
  const lines = raw
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);
  for (const line of lines) {
    if (
      /^(?:escalation|for a |customer care|\*|vendor\s+reps?\b[^:]*:\s*$)/i.test(
        line
      )
    ) {
      continue;
    }
    const cleaned = line
      .replace(/^vendor\s+reps?\s*:\s*/i, "")
      .replace(/\s*\([^)]*\)\s*/g, " ")
      .replace(/[,\s;-]*[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "")
      .replace(/[.,:;-]+$/, "")
      .replace(/\s+/g, " ")
      .trim();
    if (
      cleaned &&
      !/^(?:vendor\s+reps?|n\/?a|none|tbd|-+)$/i.test(cleaned) &&
      cleaned.length <= 68
    ) {
      return cleaned;
    }
  }
  return "";
}

function extractEscalationContactName(value) {
  const raw = cleanField(value);
  if (!raw) return "";
  const lines = raw
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);
  for (const line of lines) {
    const match = line.match(
      /^(?:vendor\s+contact\s+name|contact\s+name|vendor\s+rep|rep)\s*:\s*(.+)$/i
    );
    if (match && match[1]) {
      const candidate = extractFirstContactName(match[1]);
      if (candidate) {
        return candidate;
      }
    }
  }
  return "";
}

function resolveLogoForVendor(vendor) {
  const id = String(vendor?.id || "")
    .trim()
    .toLowerCase();
  if (cleanField(vendor?.logo)) return cleanField(vendor.logo);
  if (id && KNOWN_VENDOR_LOGOS[id]) return KNOWN_VENDOR_LOGOS[id];

  const comp = String(
    vendor?.company || vendor?.vendor || vendor?.displayName || ""
  )
    .trim()
    .toLowerCase();
  const sys = String(vendor?.systemName || vendor?.displayName || "")
    .trim()
    .toLowerCase();

  for (const [key, logoPath] of Object.entries(KNOWN_VENDOR_LOGOS)) {
    if (comp.includes(key) || sys.includes(key)) {
      return logoPath;
    }
  }
  return null;
}

function resolveCategoryForVendor(vendor, systemName, itsTeam) {
  const rawCat = normalizeSingleLine(vendor?.category || vendor?.displaySubtitle);
  if (
    rawCat &&
    rawCat.toLowerCase() !== systemName.toLowerCase() &&
    !/operatins\s+partner/i.test(rawCat)
  ) {
    return rawCat;
  }
  const teamLower = itsTeam.toLowerCase();
  const sysLower = systemName.toLowerCase();
  if (teamLower.includes("flight") || sysLower.includes("flight") || sysLower.includes("weather") || sysLower.includes("acars") || sysLower.includes("arinc")) {
    return "Flight Operations";
  }
  if (teamLower.includes("crew") || sysLower.includes("jcte") || sysLower.includes("aims")) {
    return "Crew Systems & Scheduling";
  }
  if (teamLower.includes("sabre") || teamLower.includes("ace") || sysLower.includes("sabre") || sysLower.includes("reservation") || sysLower.includes("csa") || sysLower.includes("gate")) {
    return "Passenger Services & Airport Operations";
  }
  if (teamLower.includes("m&e") || sysLower.includes("trax") || sysLower.includes("boeing")) {
    return "Maintenance & Engineering";
  }
  if (teamLower.includes("airport") || sysLower.includes("baggage") || sysLower.includes("cargo") || sysLower.includes("nettracer")) {
    return "Airport & Cargo Operations";
  }
  if (teamLower.includes("middleware") || sysLower.includes("tibco")) {
    return "Middleware & Enterprise Integration";
  }
  if (teamLower.includes("commerce") || sysLower.includes("shopping") || sysLower.includes("kiosk") || sysLower.includes("mileage")) {
    return "E-Commerce & Guest Products";
  }
  if (teamLower.includes("contact center") || sysLower.includes("five9") || sysLower.includes("alvaria")) {
    return "Contact Center Operations";
  }
  if (teamLower.includes("corporate") || sysLower.includes("peoplesoft")) {
    return "Corporate Enterprise Applications";
  }
  return "Operations & Technology Partner";
}

function resolveWebsiteForVendor(vendor, id, email) {
  const portal = cleanField(vendor?.portalUrl);
  if (portal && /^https?:\/\//i.test(portal)) {
    return portal;
  }
  if (id && KNOWN_VENDOR_WEBSITES[id]) {
    return KNOWN_VENDOR_WEBSITES[id];
  }
  const escalationUrlMatch = String(vendor?.escalation || "").match(
    /https?:\/\/[^\s)]+/i
  );
  if (escalationUrlMatch) {
    return escalationUrlMatch[0];
  }
  if (email && email.includes("@")) {
    const domain = email.split("@")[1].toLowerCase().trim();
    if (domain && !domain.includes("alaskaair.com")) {
      return `https://www.${domain}`;
    }
  }
  const slug =
    String(vendor?.company || vendor?.vendor || vendor?.displayName || id || "vendor")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "") || "vendor";
  return `https://www.${slug}.com`;
}

export function buildTemplateVendorImpactDetails(vendor, allVendors = []) {
  if (!vendor) return null;

  const id =
    cleanField(vendor.id).toLowerCase() ||
    `vendor-${String(vendor.sourceRow || "item").toLowerCase()}`;

  const rawCompany =
    normalizeSingleLine(vendor.company) ||
    normalizeSingleLine(vendor.vendor) ||
    normalizeSingleLine(vendor.displayName) ||
    normalizeSingleLine(vendor.systemName) ||
    "Vendor";

  const systemName =
    normalizeSingleLine(vendor.systemName) ||
    normalizeSingleLine(vendor.displayName) ||
    rawCompany;

  // Use concise name for titles/headers when company is a long descriptive sentence
  const displayName = rawCompany.length > 44 ? systemName : rawCompany;
  const companyFullName = rawCompany;

  const itsTeam =
    normalizeSingleLine(vendor.aagItsTeam) || "ITS Operations Support";
  const category = resolveCategoryForVendor(vendor, systemName, itsTeam);

  const subtitle =
    systemName.toLowerCase() !== displayName.toLowerCase()
      ? `${systemName} / ${category}`
      : `${category} / Operational Platform & Services`;

  const supportEmail =
    extractFirstEmail(vendor.email) ||
    extractFirstEmail(vendor.vendorEmail) ||
    extractFirstEmail(vendor.escalation) ||
    "its.support@alaskaair.com";
  const supportPhone =
    extractFirstPhone(vendor.phone) ||
    extractFirstPhone(vendor.vendorPhone) ||
    extractFirstPhone(vendor.escalation) ||
    "Contact ITS On-Call";

  const website = resolveWebsiteForVendor(vendor, id, supportEmail);
  const logo = resolveLogoForVendor(vendor);
  const lastUpdated = cleanField(vendor.updatedDate) || "Oct 30, 2026";

  const accountManager =
    extractFirstContactName(vendor.vendorPoc || vendor.poc) ||
    extractEscalationContactName(vendor.escalation) ||
    "(Add name)";
  const applicationOwner =
    extractFirstContactName(vendor.aagItsPoc) || "(Add owner name)";

  // Collect sibling systems from allVendors sharing the same vendor company
  const siblingRecords = Array.isArray(allVendors)
    ? allVendors.filter(item => {
        if (!item) return false;
        const itemComp = normalizeSingleLine(
          item.company || item.vendor || item.displayName
        ).toLowerCase();
        return itemComp && itemComp === rawCompany.toLowerCase();
      })
    : [];

  const uniqueSystems = [];
  const seenSystemNames = new Set();

  const addUniqueSystemName = (sysTitle, recordId, recordCategory, recordOwner) => {
    const normalizedTitle = normalizeSingleLine(sysTitle);
    if (!normalizedTitle) return;
    const key = normalizedTitle.toLowerCase();
    if (seenSystemNames.has(key)) return;
    seenSystemNames.add(key);
    uniqueSystems.push({
      id: cleanField(recordId) || `${id}-sys-${uniqueSystems.length + 1}`,
      name: normalizedTitle,
      category: normalizeSingleLine(recordCategory),
      owner: normalizeSingleLine(recordOwner) || itsTeam
    });
  };

  const pushUniqueSystem = record => {
    addUniqueSystemName(
      record?.systemName || record?.displayName,
      record?.id,
      record?.category || record?.displaySubtitle,
      record?.aagItsTeam
    );
    if (Array.isArray(record?.associatedApplications)) {
      record.associatedApplications.forEach((appName, appIdx) => {
        addUniqueSystemName(
          appName,
          `${cleanField(record?.id) || id}-assoc-${appIdx + 1}`,
          record?.category || record?.displaySubtitle,
          record?.aagItsTeam
        );
      });
    }
  };

  pushUniqueSystem(vendor);
  siblingRecords.forEach(pushUniqueSystem);

  const impactedSystems = uniqueSystems.map((sys, idx) => ({
    id: `${sys.id}-core-${idx}`,
    name: sys.name,
    subName: sys.category && sys.category.toLowerCase() !== sys.name.toLowerCase() ? `(${sys.category})` : "",
    appTabSubName: sys.category && sys.category.toLowerCase() !== sys.name.toLowerCase() ? `(${sys.category})` : "(Core Platform)",
    description: `Primary ${displayName} operational application for ${sys.name}`,
    appTabDescription: `Primary ${displayName} operational application and user workflow interface for ${sys.name}`,
    businessFunction: category,
    impact: `${sys.name} workflows unavailable or degraded; manual operational contingency required`,
    dependencies: `${displayName}, Alaska Network, Enterprise Authentication`,
    status: "Potential",
    owner: sys.owner || itsTeam
  }));

  const supplementaryTemplates = [
    {
      suffix: "integration-gateway",
      name: `${systemName} Integration Gateway`,
      subName: "(API / Messaging)",
      appTabSubName: "(API / Messaging)",
      description: `Real-time API and message exchange with ${displayName}`,
      appTabDescription: `Inbound and outbound real-time API/message integration with ${displayName}`,
      businessFunction: "Data Exchange & Integration",
      impact: "Real-time operational updates delayed or queued between Alaska and vendor",
      dependencies: `${displayName}, TIBCO / Middleware, Network`,
      owner: "ITS Middleware Services"
    },
    {
      suffix: "iws-batch-sync",
      name: "IWS Batch & Sync Jobs",
      subName: "(Scheduled Automation)",
      appTabSubName: "(Scheduled Jobs)",
      description: `Scheduled data synchronization and batch jobs for ${systemName}`,
      appTabDescription: `Automated file generation, synchronization, and scheduled batch processing for ${systemName}`,
      businessFunction: "Batch Processing / File Transfer",
      impact: "Scheduled sync jobs may fail or remain incomplete until service recovery",
      dependencies: `${displayName}, IWS, Axway`,
      owner: "ITS Infrastructure Services"
    },
    {
      suffix: "data-transfer-service",
      name: "Enterprise Data Transfer",
      subName: "(SFTP / Service Bus)",
      appTabSubName: "(SFTP / Feed)",
      description: `Secure file and operational feed transfers with ${displayName}`,
      appTabDescription: `Managed secure file and operational feed transfers with ${displayName}`,
      businessFunction: "Data Feed & Transport",
      impact: "Inbound and outbound operational data feeds delayed or held in queue",
      dependencies: `${displayName}, Network / VPN`,
      owner: "ITS Infrastructure Services"
    },
    {
      suffix: "dwh-reporting",
      name: `${systemName} Operational Reporting`,
      subName: "(Analytics / DWH)",
      appTabSubName: "(DWH Feed)",
      description: `Operational metrics and downstream data warehouse reporting for ${systemName}`,
      appTabDescription: `Downstream data warehouse load and operational analytics dashboards for ${systemName}`,
      businessFunction: "Reporting / Analytics",
      impact: "Operational dashboards and downstream data warehouse reports delayed",
      dependencies: `${displayName}, Data Services`,
      owner: "ITS Data Services"
    },
    {
      suffix: "portal-auth",
      name: `${displayName} Portal & SSO`,
      subName: "(Identity & Access)",
      appTabSubName: "(SSO / Portal)",
      description: `Authentication and administrative portal access for ${systemName}`,
      appTabDescription: `User authentication, session management, and vendor portal access for ${systemName}`,
      businessFunction: "Access & Administration",
      impact: "Agent or administrator login and portal self-service may be unavailable",
      dependencies: `${displayName}, Active Directory / SSO`,
      owner: itsTeam
    }
  ];

  for (const extra of supplementaryTemplates) {
    if (impactedSystems.length >= 6) break;
    impactedSystems.push({
      id: `${id}-${extra.suffix}`,
      name: extra.name,
      subName: extra.subName,
      appTabSubName: extra.appTabSubName,
      description: extra.description,
      appTabDescription: extra.appTabDescription,
      businessFunction: extra.businessFunction,
      impact: extra.impact,
      dependencies: extra.dependencies,
      status: "Potential",
      owner: extra.owner
    });
  }

  const diagramServices = impactedSystems
    .slice(0, 5)
    .map(item => item.name);

  const vendorShortDescriptions = {
    smart4aviation:
      "Smart4Aviation supports S4A weight and balance and flight operations workflows.",
    "aircraft-performance":
      "Dynamic Source provides aircraft performance data for Alaska Airlines flight operations.",
    arinc:
      "ARINC provides aircraft-to-ground communications and operational messaging services for Flight Operations.",
    "jeppesen-flight-planning":
      "Jeppesen supports Flight Planning and JCTE crew tracking systems for Flight Operations and Crew Systems.",
    "jcte-crew":
      "Jeppesen supports JCTE crew tracking and flight planning systems for Crew Systems and Flight Operations.",
    "ibm-weather":
      "TWC/The Weather Company provides operational weather data feeds for Flight Operations.",
    "wsi-fusion":
      "WSI Fusion provides weather feed and fusion services for Flight Operations.",
    "weather-feed":
      "WSI Fusion provides weather feed and fusion services for Flight Operations.",
    sabre:
      "SABRE supports passenger reservations, CSA Mobile boarding and lobby applications, and RAIN airport operations.",
    "image-reservations":
      "SABRE supports Image Reservations, passenger reservations, CSA Mobile applications, and RAIN airport operations.",
    "csa-mobile-boarding":
      "SABRE supports CSA Mobile Boarding Agent, lobby applications, passenger reservations, and airport operations.",
    "csa-mobile-lobby":
      "SABRE supports CSA Mobile Lobby, boarding agent applications, passenger reservations, and airport operations.",
    rain:
      "SABRE supports RAIN (Helios / Nimbus), passenger reservations, and CSA Mobile airport applications.",
    boeing:
      "Boeing provides Boeing Toolbox maintenance and engineering documentation services.",
    ncr:
      "NCR Corporation supports Web and Kiosk Check-In self-service guest workflows.",
    tibco:
      "Tibco provides enterprise middleware and integration messaging services.",
    baggage:
      "Supports airport baggage handling operations in coordination with Port of ANC Facilities and POS Service Desk.",
    "real-time-gates":
      "Inform supports Real Time Gates (RTG / Groundstar) gate assignment and airport operations.",
    "as-trax":
      "TRAX provides aircraft maintenance and engineering management for AS TRAX and QX TRAX systems.",
    "qx-trax":
      "TRAX provides aircraft maintenance and engineering management for QX TRAX and AS TRAX systems.",
    icargo:
      "iBS Software, PLC provides the iCargo platform for cargo management and operations.",
    "cargo-spot":
      "CHAMP, Airclic, and SmartKargo support Cargo Spot cargo payment and freight operations.",
    "shopping-service":
      "Microsoft Azure hosts the Shopping Service System (QPX, QPXconnect, QPXReshop, and QPXmerchandising manager) for e-commerce.",
    "solar-mileage":
      "Oracle Corporation supports the SOLAR Mileage Plan (Siebel / LMS) loyalty platform.",
    "peoplesoft-financials":
      "Oracle and ERPA support PeopleSoft Financials (PSFin) corporate financial applications.",
    "information-display":
      "Information Display Applications (Web UI) provide airport flight, gate, lobby, and ramp information displays (FIDS, GIDS, LIDS, RIDS, xIDS).",
    "peoplesoft-hcm":
      "Oracle supports PeopleSoft HCM (PSHCM) corporate human capital management applications.",
    nettracer:
      "NetTracer provides baggage tracking and irregular baggage resolution services for airport operations.",
    five9:
      "Five9 provides the Intelligent Cloud Contact Center platform for contact center agents."
  };

  const rawId = String(vendor.id || "").trim().toLowerCase();
  const resolvedShortDescription =
    vendorShortDescriptions[rawId] ||
    vendorShortDescriptions[id] ||
    (systemName && systemName.toLowerCase() !== displayName.toLowerCase()
      ? `${displayName} supports ${systemName} for ${category} (${itsTeam}).`
      : `${displayName} provides ${category.toLowerCase()} services supported by ${itsTeam}.`);

  return {
    id,
    name: displayName,
    breadcrumbTrail: ["Vendors", displayName, "Vendor Impact"],
    pageTitle: `${displayName} - Vendor Impact Details`,
    pageSubtitle: resolvedShortDescription,
    applicationsTabTitle: displayName,
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle: `View all Alaska applications and systems that depend on ${displayName}, including business function, dependencies, and expected impact if this vendor experiences an outage or degraded service.`,
    applicationsCardSubtitle: `This list shows Alaska applications and systems that use ${displayName} services. Not all systems may be impacted for every incident.`,
    dependenciesTabTitle: `${displayName} - Dependencies`,
    dependenciesTabSubtitle: `View upstream and downstream dependencies, integrations, and infrastructure components for ${displayName}.`,
    status: "Active",
    lastUpdated,
    subtitle,
    company: companyFullName,
    website,
    category,
    itsTeam,
    logo,
    impactSummary: {
      confirmed: 0,
      potential: impactedSystems.length,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title: "Vendor Impact Information",
      message: `The information below shows potential and confirmed impact to Alaska applications and systems if ${displayName} experiences an outage, degraded service, or connectivity issue. Not all systems may be impacted for every incident. Validate impact with the application owner.`
    },
    impactedSystems,
    upstreamDependencies: [
      `Core Alaska Operational Feeds (${systemName} inputs)`,
      "IWS (scheduled job automation and synchronization)",
      "Enterprise Middleware / Integration Bus (API & messaging)",
      "Network connectivity (VPN / Direct Connect / Firewall)"
    ],
    downstreamConsumers: [
      `${itsTeam} & Operational Control Teams`,
      "Alaska Data Warehouse / Operational Reporting",
      `${systemName} Frontline & Back-Office Users`,
      `${category} Downstream Workflows`,
      "Partner & External Integration Endpoints"
    ],
    dependenciesTab: {
      overviewSubtitle: `This diagram shows the key upstream and downstream dependencies for ${displayName} and how it integrates with Alaska systems and external partners.`,
      diagramUpstream: [
        {
          id: `${id}-up-core`,
          name: "Alaska Core Feeds",
          subtitle: `(${systemName} data)`,
          iconType: "ticket"
        },
        {
          id: `${id}-up-iws`,
          name: "IWS / Automation",
          subtitle: "(Scheduled jobs)",
          iconType: "doc"
        },
        {
          id: `${id}-up-mw`,
          name: "Integration Bus",
          subtitle: "(API / File transfer)",
          iconType: "transfer"
        },
        {
          id: `${id}-up-net`,
          name: "Network / VPN",
          subtitle: "(Connectivity)",
          iconType: "network"
        }
      ],
      diagramServices,
      diagramDownstream: [
        {
          id: `${id}-down-ops`,
          name: `${category} Operations`,
          subtitle: "(Core operational workflows)",
          iconType: "team"
        },
        {
          id: `${id}-down-dwh`,
          name: "Alaska Data Warehouse",
          subtitle: "(Reporting / Analytics)",
          iconType: "database"
        },
        {
          id: `${id}-down-its`,
          name: itsTeam,
          subtitle: "(Monitoring & Support)",
          iconType: "nodes"
        },
        {
          id: `${id}-down-ext`,
          name: "Partner Systems",
          subtitle: "(External integrations)",
          iconType: "bank"
        },
        {
          id: `${id}-down-users`,
          name: "Business & Frontline Users",
          subtitle: `(${systemName} operations)`,
          iconType: "users"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 4, tone: "red" },
        { label: "Downstream Consumers", count: 5, tone: "green" },
        { label: "Internal Systems", count: 3, tone: "blue" },
        { label: "External Systems", count: 4, tone: "blue" },
        { label: "Network / Infrastructure", count: 3, tone: "purple" }
      ],
      keyTakeaways: [
        `${displayName} depends on Alaska core operational feeds, middleware integration, and network connectivity.`,
        `${systemName} operational workflows and ${category} teams are critical downstream consumers.`,
        `Downstream operational reporting and analytics rely on timely ${displayName} data feeds.`,
        `Engage ${itsTeam} and follow the documented escalation path during service degradation.`
      ],
      upstreamTable: [
        {
          id: `${id}-upt-1`,
          name: "Alaska Core Systems",
          subName: `(${systemName} source feed)`,
          description: `Provides core operational data feeds to ${displayName}`,
          type: "Internal",
          impact: "Source updates not transmitted to vendor platform"
        },
        {
          id: `${id}-upt-2`,
          name: "IWS / Job Scheduler",
          subName: "(Batch automation)",
          description: "Scheduled batch generation and sync jobs",
          type: "Internal",
          impact: "Scheduled jobs may fail or remain queued"
        },
        {
          id: `${id}-upt-3`,
          name: "Enterprise Middleware",
          subName: "(API / File Gateway)",
          description: `API messaging and file transfers with ${displayName}`,
          type: "Internal",
          impact: "Messages or files not sent or received"
        },
        {
          id: `${id}-upt-4`,
          name: "Network / VPN",
          subName: "",
          description: `Connectivity to ${displayName} endpoints`,
          type: "Infrastructure",
          impact: `No connectivity to ${displayName}`
        }
      ],
      downstreamTable: [
        {
          id: `${id}-dwt-1`,
          name: `${category} Teams`,
          description: `Primary operational workflows using ${systemName}`,
          type: "Internal",
          impact: `${systemName} operational processing delayed`
        },
        {
          id: `${id}-dwt-2`,
          name: "Alaska Data Warehouse",
          description: "Operational reporting and analytics data load",
          type: "Internal",
          impact: "Reports delayed or temporarily unavailable"
        },
        {
          id: `${id}-dwt-3`,
          name: itsTeam,
          description: "Application administration and operational monitoring",
          type: "Internal",
          impact: "Automated alerting and reconciliation impacted"
        },
        {
          id: `${id}-dwt-4`,
          name: "External Partner Endpoints",
          description: `Partner systems consuming ${displayName} transactions`,
          type: "External",
          impact: "Partner updates delayed until recovery"
        },
        {
          id: `${id}-dwt-5`,
          name: "Business & Frontline Users",
          description: `Day-of-operations users of ${systemName}`,
          type: "Internal",
          impact: "Manual contingency procedures required"
        }
      ],
      infrastructureTable: [
        {
          id: `${id}-inf-fw`,
          component: "Firewalls & VPN",
          description: `Firewall rules and secure tunnels for ${displayName} connectivity`,
          owner: "ITS Network",
          impact: "Application connectivity and recovery may be affected"
        },
        {
          id: `${id}-inf-dc`,
          component: "Data Centers (Primary/DR)",
          description: `${displayName} hosted application infrastructure`,
          owner: displayName,
          impact: "Service availability or DR failover delays"
        },
        {
          id: `${id}-inf-db`,
          component: "Databases & Storage",
          description: `${displayName} operational databases and backups`,
          owner: displayName,
          impact: "Potential transaction delay or recovery lag"
        }
      ]
    },
    typicalBusinessImpact: [
      `${systemName} primary workflows unavailable or degraded`,
      `Delayed data synchronization between Alaska systems and ${displayName}`,
      `${category} operational processing delays`,
      "Downstream reporting and analytics data delayed",
      `Frontline or back-office teams unable to access ${systemName} portal`,
      "Manual operational workarounds may be required"
    ],
    knownWorkarounds: [
      `Use last available operational exports or cached ${systemName} reports`,
      "Monitor and re-run failed batch or synchronization jobs after recovery",
      "Queue outbound transactions/files until vendor connectivity is restored",
      `Coordinate with ${itsTeam} for manual contingency procedures`,
      `Engage ${displayName} support for transaction reprocessing and validation`
    ],
    vendorContacts: {
      supportEmail,
      supportPhone,
      accountManager,
      escalation: "Follow vendor escalation process\n(see ITS Vendor Information)"
    },
    internalContacts: {
      itsTeam,
      applicationOwner,
      onCallSupport: `${itsTeam} On-Call`,
      businessOwner: category
    },
    validationChecklist: [
      `Check ${displayName} vendor status or advisory`,
      "Validate impacted applications from list",
      "Confirm API, messaging, and file transfer status",
      `Verify ${systemName} core workflow availability`,
      "Check scheduled job and batch synchronization status",
      "Verify downstream reporting and data load status",
      `Confirm user authentication and portal connectivity for ${systemName}`,
      "Update incident in ServiceNow",
      "Communicate impact to stakeholders"
    ],
    incidentHistory: [
      {
        id: "INC-2026-0914",
        date: "Sep 14, 2026",
        summary: `Intermittent connectivity and delayed response on ${systemName} integration feed`,
        severity: "Severity 3",
        resolution: `Restored integration session and re-queued pending ${systemName} transactions`
      },
      {
        id: "INC-2026-0602",
        date: "Jun 02, 2026",
        summary: `Scheduled maintenance window for ${displayName} (${systemName})`,
        severity: "Planned",
        resolution: "Completed within maintenance window; operational health verified"
      }
    ],
    relatedDocuments: [
      {
        title: `${displayName} (${systemName}) Operational Runbook`,
        type: "SOP / Playbook",
        owner: itsTeam,
        updated: "Oct 2026"
      },
      {
        title: `${systemName} Integration & Recovery Guide`,
        type: "Technical Guide",
        owner: itsTeam,
        updated: "Sep 2026"
      },
      {
        title: `${displayName} Production Operations Escalation Matrix`,
        type: "Escalation Doc",
        owner: itsTeam,
        updated: "Aug 2026"
      }
    ]
  };
}

function readStoredArray(storageKey) {
  if (typeof localStorage === "undefined") return [];
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function applyAdminImpactOverrides(baseDetails, sourceObj, isGroundStop = false) {
  if (!baseDetails) return null;
  let storedMatch = null;
  if (isGroundStop) {
    const key = String(sourceObj?.key || sourceObj?.id || sourceObj?.record?.key || sourceObj?.record?.id || "").trim();
    const storedApps = readStoredArray("productionOperationsApplications");
    storedMatch = storedApps.find(
      (a) => a && (a.key === key || a.id === key || (sourceObj?.record?.id && a.id === sourceObj.record.id))
    );
  } else {
    const id = String(sourceObj?.id || "").trim();
    const sourceRow = sourceObj?.sourceRow;
    const storedVendors = readStoredArray("productionOperationsVendors");
    storedMatch = storedVendors.find(
      (v) =>
        v &&
        ((id && (v.id === id || v.id === `its-application-vendors-${sourceRow}`)) ||
          (sourceRow != null && Number(v.sourceRow) === Number(sourceRow)))
    );
  }

  const record = isGroundStop ? { ...(sourceObj?.record || sourceObj || {}), ...(storedMatch || {}) } : { ...(sourceObj || {}), ...(storedMatch || {}) };
  if (!record.adminEdited && !record.impactOverrides) {
    return baseDetails;
  }

  const cloned = JSON.parse(JSON.stringify(baseDetails));
  const io = record.impactOverrides && typeof record.impactOverrides === "object" ? record.impactOverrides : {};

  if (isGroundStop) {
    if (record.shortName || record.name) cloned.name = record.shortName || record.name;
    if (record.category) cloned.category = record.category;
    if (record.status) cloned.status = record.status;
    if (record.vendor) cloned.company = record.vendor;
    if (record.website) cloned.website = record.website;
    if (record.aagTeam) {
      cloned.itsTeam = record.aagTeam;
      if (cloned.internalContacts) cloned.internalContacts.itsTeam = record.aagTeam;
    }
    if (record.aagPOC && cloned.internalContacts) {
      cloned.internalContacts.applicationOwner = record.aagPOC;
    }
    if (record.phone && cloned.vendorContacts) {
      cloned.vendorContacts.supportPhone = record.phone;
    }
    if (record.email && cloned.vendorContacts) {
      cloned.vendorContacts.supportEmail = record.email;
    }
    if (record.lastUpdated) cloned.lastUpdated = record.lastUpdated;
  } else {
    const vCompany = record.vendorCompanyName || record.company || record.vendor;
    if (vCompany) {
      cloned.company = vCompany;
      cloned.name = vCompany;
    }
    if (record.category) cloned.category = record.category;
    if (record.status) cloned.status = record.status;
    if (record.website || record.portalUrl) cloned.website = record.website || record.portalUrl;
    if (record.aagItsTeam) {
      cloned.itsTeam = record.aagItsTeam;
      if (cloned.internalContacts) cloned.internalContacts.itsTeam = record.aagItsTeam;
    }
    if (record.aagItsPOC && cloned.internalContacts) {
      cloned.internalContacts.applicationOwner = record.aagItsPOC;
    }
    if ((record.contactNumbers || record.phone) && cloned.vendorContacts) {
      cloned.vendorContacts.supportPhone = record.contactNumbers || record.phone;
    }
    if ((record.emailAddress || record.email) && cloned.vendorContacts) {
      cloned.vendorContacts.supportEmail = record.emailAddress || record.email;
    }
    if ((record.vendorPOC || record.vendorPoc) && cloned.vendorContacts) {
      cloned.vendorContacts.accountManager = record.vendorPOC || record.vendorPoc;
    }
    if ((record.prodOpsEscalationProcess || record.escalation) && cloned.vendorContacts) {
      cloned.vendorContacts.escalation = record.prodOpsEscalationProcess || record.escalation;
    }
    if (record.lastUpdated || record.infoUpdatedDate) {
      cloned.lastUpdated = record.lastUpdated || record.infoUpdatedDate;
    }
  }

  if (io.pageTitle) cloned.pageTitle = io.pageTitle;
  if (io.pageSubtitle) cloned.pageSubtitle = io.pageSubtitle;
  if (io.subtitle) cloned.subtitle = io.subtitle;
  if (io.company) cloned.company = io.company;
  if (io.website) cloned.website = io.website;
  if (io.category) cloned.category = io.category;
  if (io.itsTeam) cloned.itsTeam = io.itsTeam;
  if (io.status) cloned.status = io.status;
  if (io.lastUpdated) cloned.lastUpdated = io.lastUpdated;

  if (io.impactCallout && typeof io.impactCallout === "object") {
    cloned.impactCallout = {
      ...(cloned.impactCallout || {}),
      ...io.impactCallout
    };
  }

  if (Array.isArray(io.impactedSystems)) {
    cloned.impactedSystems = io.impactedSystems;
    if (cloned.impactSummary) {
      cloned.impactSummary.potential = io.impactedSystems.length;
    }
  }

  if (Array.isArray(io.typicalBusinessImpact)) {
    cloned.typicalBusinessImpact = io.typicalBusinessImpact;
  }

  if (Array.isArray(io.knownWorkarounds)) {
    cloned.knownWorkarounds = io.knownWorkarounds;
  }

  if (Array.isArray(io.validationChecklist)) {
    cloned.validationChecklist = io.validationChecklist;
  }

  if (Array.isArray(io.upstreamDependencies)) {
    cloned.upstreamDependencies = io.upstreamDependencies;
  }

  if (Array.isArray(io.downstreamConsumers)) {
    cloned.downstreamConsumers = io.downstreamConsumers;
  }

  if (io.dependenciesTab && typeof io.dependenciesTab === "object") {
    cloned.dependenciesTab = {
      ...(cloned.dependenciesTab || {}),
      ...io.dependenciesTab
    };
    if (Array.isArray(io.dependenciesTab.upstreamTable)) {
      cloned.dependenciesTab.upstreamTable = io.dependenciesTab.upstreamTable;
      cloned.dependenciesTab.diagramUpstream = io.dependenciesTab.upstreamTable.slice(0, 4).map((row, idx) => ({
        id: row.id || `dup-${idx + 1}`,
        name: (row.name || "").slice(0, 42),
        subtitle: (row.description || "Upstream Dependency").slice(0, 48),
        iconType: ["network", "transfer", "doc", "ticket"][idx % 4]
      }));
    }
    if (Array.isArray(io.dependenciesTab.downstreamTable)) {
      cloned.dependenciesTab.downstreamTable = io.dependenciesTab.downstreamTable;
      cloned.dependenciesTab.diagramDownstream = io.dependenciesTab.downstreamTable.slice(0, 5).map((row, idx) => ({
        id: row.id || `ddn-${idx + 1}`,
        name: (row.name || "").slice(0, 42),
        subtitle: (row.description || "Operational Consumer").slice(0, 48),
        iconType: ["team", "nodes", "chart", "database", "users"][idx % 5]
      }));
    }
    if (Array.isArray(io.dependenciesTab.infrastructureTable)) {
      cloned.dependenciesTab.infrastructureTable = io.dependenciesTab.infrastructureTable;
    }
    if (Array.isArray(cloned.dependenciesTab.summaryStats)) {
      cloned.dependenciesTab.summaryStats = [
        {
          label: "Upstream Dependencies",
          count: (cloned.dependenciesTab.upstreamTable || []).length,
          tone: "red"
        },
        {
          label: "Downstream Consumers",
          count: (cloned.dependenciesTab.downstreamTable || []).length,
          tone: "green"
        },
        {
          label: "Impacted Applications",
          count: (cloned.impactedSystems || []).length,
          tone: "blue"
        },
        {
          label: "Infrastructure Components",
          count: (cloned.dependenciesTab.infrastructureTable || []).length,
          tone: "purple"
        }
      ];
    }
  }

  if (io.vendorContacts && typeof io.vendorContacts === "object") {
    cloned.vendorContacts = {
      ...(cloned.vendorContacts || {}),
      ...io.vendorContacts
    };
  }

  if (io.internalContacts && typeof io.internalContacts === "object") {
    cloned.internalContacts = {
      ...(cloned.internalContacts || {}),
      ...io.internalContacts
    };
  }

  if (Array.isArray(io.relatedDocuments)) {
    cloned.relatedDocuments = io.relatedDocuments;
  } else if (Array.isArray(io.documents)) {
    cloned.relatedDocuments = io.documents;
  }

  return cloned;
}

export function getVendorImpactDetails(vendor, allVendors = []) {
  if (!vendor) return null;
  const id = String(vendor.id || "").trim().toLowerCase();
  let base = null;
  if (id === "aims" || id === "aims-vendor") {
    base = VENDOR_IMPACT_DETAILS["aims-vendor"];
  } else if (id && VENDOR_IMPACT_DETAILS[id]) {
    base = VENDOR_IMPACT_DETAILS[id];
  } else if (id === "aircraft-performance-aerodata") {
    base = VENDOR_IMPACT_DETAILS.aerodata;
  } else if (id === "acars") {
    base = VENDOR_IMPACT_DETAILS.sita;
  } else {
    const company = String(vendor.company || vendor.vendor || vendor.displayName || vendor.systemName || "")
      .trim()
      .toLowerCase();
    const sysName = String(vendor.systemName || vendor.displayName || "")
      .trim()
      .toLowerCase();
    if (company.includes("accelya")) {
      base = VENDOR_IMPACT_DETAILS.accelya;
    } else if (company.includes("aerodata")) {
      base = VENDOR_IMPACT_DETAILS.aerodata;
    } else if (company.includes("arinc") || sysName.includes("arinc")) {
      base = VENDOR_IMPACT_DETAILS.arinc;
    } else if (company.includes("sita") || sysName.includes("acars")) {
      base = VENDOR_IMPACT_DETAILS.sita;
    } else if (company.includes("aims") || sysName.includes("aims")) {
      base = VENDOR_IMPACT_DETAILS["aims-vendor"];
    } else if (company.includes("alvaria") || sysName.includes("alvaria")) {
      base = VENDOR_IMPACT_DETAILS.alvaria;
    } else if (company.includes("avtec") || sysName.includes("avtec")) {
      base = VENDOR_IMPACT_DETAILS.avtec;
    } else if (company.includes("boeing") || sysName.includes("boeing")) {
      base = VENDOR_IMPACT_DETAILS.boeing;
    } else if (
      company.includes("champ") ||
      company.includes("airclic") ||
      company.includes("descartes") ||
      company.includes("smartkargo") ||
      sysName.includes("cargo spot") ||
      sysName.includes("cargospot")
    ) {
      base = VENDOR_IMPACT_DETAILS["cargo-spot"];
    } else {
      base = buildTemplateVendorImpactDetails(vendor, allVendors);
    }
  }
  return applyAdminImpactOverrides(base, vendor, false);
}

const GROUND_STOP_LOGOS = {
  acars: "public/vendors/sita.png",
  wam: "public/vendors/the-weather-company.webp",
  jetplan: "public/vendors/jeppesen.png",
  "smart4aviation (s4a)": "public/vendors/smart4aviation.jpg",
  jcte: "public/vendors/jeppesen.png",
  "aircraft-maintenance": "public/vendors/trax.jpg",
  aims: "public/vendors/aims.jpg"
};

function normalizeTextValue(value) {
  if (Array.isArray(value)) {
    return value.map(normalizeTextValue).filter(Boolean).join(" • ");
  }
  if (value && typeof value === "object") {
    return JSON.stringify(value);
  }
  return String(value ?? "").trim();
}

function cleanVal(val, fallback = "") {
  const text = cleanField(val);
  return text && !/^(?:n\/?a|none|tbd|no)$/i.test(text) ? text : fallback;
}

function buildGroundStopImpactDetails(appItem) {
  const key = String(appItem.key || appItem.id || appItem.record?.key || appItem.record?.id || "ground-stop-app").trim();
  const lowerKey = key.toLowerCase();
  const profile = appItem.profile || {};
  const record = appItem.record || appItem || {};

  const displayName = cleanVal(
    profile.shortName || record.shortName || record.name,
    key
  );
  const fullName = cleanVal(record.name || profile.shortName, displayName);
  const category = cleanVal(
    record.category || profile.category || record.function,
    "Flight Operations"
  );
  const rawVendor = cleanVal(record.vendor || profile.vendor, "");
  const company =
    rawVendor && !/^(?:n\/?a|none|tbd)$/i.test(rawVendor)
      ? rawVendor
      : "Alaska ITS (Internal)";
  const itsTeam = cleanVal(
    record.aagTeam || profile.team,
    "ITS Flight Operations"
  );
  const applicationOwner = cleanVal(
    record.aagPOC || profile.poc,
    itsTeam
  );
  const supportPhone = cleanVal(
    normalizeTextValue(record.phone || profile.phone),
    "Contact ITS On-Call"
  );
  const supportEmail = cleanVal(
    normalizeTextValue(record.email || profile.email),
    "Engage via ITS On-Call"
  );
  const severity = cleanVal(
    record.severity || profile.severity || record.criticality,
    "Critical"
  );
  const responseTarget = cleanVal(
    record.response || profile.sla,
    "15 minutes"
  );
  const descriptionText = cleanVal(
    normalizeTextValue(record.description || profile.description || record.function),
    `${fullName} operational ground-stop application supporting ${category}.`
  );
  const logo = cleanVal(
    record.vendorLogo || GROUND_STOP_LOGOS[lowerKey],
    ""
  );

  const associatedList =
    Array.isArray(record.associatedApplications) &&
    record.associatedApplications.length > 0
      ? record.associatedApplications
      : [
          {
            name: fullName,
            function: category,
            owner: itsTeam,
            dependencies:
              record.directDependencies ||
              `${company} services, Alaska middleware, and ${itsTeam} infrastructure`,
            impact:
              record.businessImpact ||
              `Degradation or outage of ${displayName} impacts ${category} day-of-operations workflows (${severity} severity; ${responseTarget} response target).`,
            description: descriptionText
          }
        ];

  const impactedSystems = associatedList.map((svc, idx) => ({
    id: `${lowerKey}-sys-${idx + 1}`,
    name: svc.name || fullName,
    subName: svc.subName || `(${category} • ${severity})`,
    appTabSubName: svc.subName || `(${category} • ${severity})`,
    description: svc.description || descriptionText,
    appTabDescription: svc.description || descriptionText,
    businessFunction: svc.function || category,
    impact:
      svc.impact ||
      `Operational disruption to ${svc.name || displayName} workflows`,
    dependencies:
      svc.dependencies ||
      `${company} integration and Alaska internal operational feeds`,
    status: "Potential",
    owner: svc.owner || itsTeam
  }));

  const upstreamDependencies =
    Array.isArray(record.upstreamDependencies) &&
    record.upstreamDependencies.length > 0
      ? record.upstreamDependencies
      : [
          `Alaska Operational Data Feeds (Internal): Provides flight, schedule, or operational inputs to ${displayName}.`,
          `${company} Core Platform / Services: Primary application services supporting ${displayName}.`,
          `Enterprise Middleware & API Gateway (Internal): Real-time messaging and web-service integration for ${displayName}.`,
          `Network & Authentication Infrastructure: Secure connectivity and user authentication for ${displayName}.`
        ];

  const downstreamConsumers =
    Array.isArray(record.downstreamConsumers) &&
    record.downstreamConsumers.length > 0
      ? record.downstreamConsumers
      : [
          `${category} / Flight Operations Teams`,
          `Dispatch & System Operations Control (SOC / NOC)`,
          `Flight Crews & Frontline Operations Personnel`,
          `${itsTeam} Monitoring & Operational Support`
        ];

  const typicalBusinessImpact =
    Array.isArray(record.typicalBusinessImpact) &&
    record.typicalBusinessImpact.length > 0
      ? record.typicalBusinessImpact
      : [
          `${displayName} (${fullName}) is a ${severity} Ground-Stop application with a ${responseTarget} response target.`,
          descriptionText,
          record.escalation && !/^(?:tbd|n\/?a)$/i.test(String(record.escalation).trim())
            ? String(record.escalation).trim()
            : `Outage or severe degradation can delay ${category} workflows and impact flight departure readiness.`,
          `Manual operational workarounds and immediate ${itsTeam} on-call engagement may be required.`
        ];

  const knownWorkarounds =
    Array.isArray(record.knownWorkarounds) && record.knownWorkarounds.length > 0
      ? record.knownWorkarounds
      : [
          `Engage ${itsTeam} on-call (${applicationOwner}) immediately to assess operational impact and initiate recovery.`,
          `Use documented manual dispatch / ${category} contingency procedures while ${displayName} is degraded.`,
          `Coordinate with ${company} support (${supportPhone}) for vendor-side service restoration.`
        ];

  const communicationGuidelines =
    Array.isArray(record.communicationGuidelines) &&
    record.communicationGuidelines.length > 0
      ? record.communicationGuidelines
      : Array.isArray(record.escalationSteps) && record.escalationSteps.length > 0
      ? record.escalationSteps.map(normalizeTextValue)
      : [
          `Validate operational scope and affected flights/users for ${displayName}.`,
          `Engage ${itsTeam} on-call (${applicationOwner}) immediately.`,
          `Contact ${company} support (${supportPhone} / ${supportEmail}) per documented escalation procedure.`
        ];

  const responseSlas =
    Array.isArray(record.responseSlas) && record.responseSlas.length > 0
      ? record.responseSlas.map((item) => {
          if (item && typeof item === "object") return item;
          const str = String(item);
          const parts = str.split(":");
          if (parts.length >= 2) {
            return {
              label: parts[0].trim(),
              value: parts.slice(1).join(":").trim()
            };
          }
          return { label: "SLA / Target", value: str };
        })
      : [
          {
            label: "Severity Classification",
            value: `${severity} (Ground-Stop Eligible Application)`
          },
          {
            label: "Response Target",
            value: responseTarget
          },
          {
            label: "Support Model",
            value: cleanVal(record.supportModel, `${company} + ${itsTeam}`)
          },
          {
            label: "Escalation Policy",
            value: cleanVal(
              record.escalation,
              `Engage ${itsTeam} on-call and ${company} support desk`
            )
          }
        ];

  const validationChecklist =
    Array.isArray(record.escalationSteps) && record.escalationSteps.length > 0
      ? record.escalationSteps.map(normalizeTextValue)
      : [
          `Validate operational impact of ${displayName} across ${category} workflows.`,
          `Contact ${itsTeam} on-call (${applicationOwner}).`,
          `Engage ${company} support (${supportPhone} / ${supportEmail}) if vendor-side issue is suspected.`,
          `Verify upstream data feeds, API/middleware health, and network connectivity.`,
          `Confirm full operational recovery with ${category} stakeholders before closing incident.`
        ];

  const relatedDocuments =
    Array.isArray(record.relatedDocuments) && record.relatedDocuments.length > 0
      ? record.relatedDocuments.map((doc) => ({
          title: doc.title || `${displayName} Operational Runbook`,
          type: doc.type || doc.category || "Operational Runbook",
          owner: doc.owner || itsTeam,
          updated: doc.updated || cleanVal(record.lastUpdated, "2026"),
          url: doc.url || ""
        }))
      : [
          {
            title: `${displayName} (${fullName}) Operational Runbook`,
            type: "SOP / Playbook",
            owner: itsTeam,
            updated: cleanVal(record.lastUpdated, "2026"),
            url: record.operationalRunbookUrl || record.runbookUrl || ""
          },
          {
            title: `${displayName} Escalation & Support Guide`,
            type: "Escalation Doc",
            owner: itsTeam,
            updated: cleanVal(record.lastUpdated, "2026"),
            url: record.escalationProcedureUrl || record.applicationSupportGuideUrl || ""
          }
        ];

  return {
    id: key,
    name: displayName,
    breadcrumbTrail: ["Ground Stop Applications", displayName, "Application Impact"],
    pageTitle: `${displayName} - Impact Details`,
    pageSubtitle: descriptionText,
    applicationsTabTitle: displayName,
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle: descriptionText,
    applicationsCardSubtitle: `This list shows Alaska applications and systems associated with ${fullName} (${company}).`,
    dependenciesTabTitle: `${displayName} - Dependencies`,
    dependenciesTabSubtitle: `Upstream dependencies, downstream consumers, and infrastructure components for ${fullName}.`,
    status: cleanVal(record.status || profile.status, "Active"),
    lastUpdated: cleanVal(record.lastUpdated, "2026"),
    subtitle: `${category} (${fullName} · ${severity} · SLA: ${responseTarget})`,
    company,
    website: cleanVal(record.portalUrl || record.website, "(Add Website/Support Portal URL)"),
    category,
    itsTeam,
    logo,
    impactSummary: {
      confirmed: 0,
      potential: impactedSystems.length,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title: `Potential Impact on ${impactedSystems.length} Alaska System${impactedSystems.length === 1 ? "" : "s"} (${severity} / Ground-Stop Application)`,
      message: descriptionText,
      description: descriptionText,
      updatedAgo: "Updated from Ground Stop Application Inventory"
    },
    impactedSystems,
    upstreamDependencies,
    downstreamConsumers,
    dependenciesTab: {
      overviewSubtitle: `This diagram shows the key upstream dependencies, core services, and downstream operational consumers for ${fullName} (${company}).`,
      diagramUpstream: upstreamDependencies.slice(0, 4).map((item, idx) => {
        const text = typeof item === "string" ? item : item.name || String(item);
        const [titlePart, descPart] = text.split(":");
        return {
          id: `${lowerKey}-dup-${idx + 1}`,
          name: (titlePart || text).slice(0, 42),
          subtitle: descPart ? descPart.trim().slice(0, 48) : "Upstream Dependency",
          iconType: ["network", "transfer", "doc", "ticket"][idx % 4]
        };
      }),
      diagramServices: impactedSystems.map((s) => s.name).slice(0, 5),
      diagramDownstream: downstreamConsumers.slice(0, 5).map((item, idx) => {
        const text = typeof item === "string" ? item : item.name || String(item);
        const [titlePart, descPart] = text.split(":");
        return {
          id: `${lowerKey}-ddn-${idx + 1}`,
          name: (titlePart || text).slice(0, 42),
          subtitle: descPart ? descPart.trim().slice(0, 48) : "Operational Consumer",
          iconType: ["team", "nodes", "chart", "database", "users"][idx % 5]
        };
      }),
      summaryStats: [
        { label: "Upstream Dependencies", count: upstreamDependencies.length, tone: "red" },
        { label: "Downstream Consumers", count: downstreamConsumers.length, tone: "green" },
        { label: "Impacted Applications", count: impactedSystems.length, tone: "blue" },
        { label: "Infrastructure Components", count: 3, tone: "purple" }
      ],
      keyTakeaways: [
        descriptionText,
        cleanVal(
          record.escalation,
          `Engage ${itsTeam} (${applicationOwner}) and ${company} support (${supportPhone}) during service disruptions.`
        )
      ],
      upstreamTable: upstreamDependencies.map((item, idx) => {
        const text = typeof item === "string" ? item : item.name || String(item);
        const [titlePart, descPart] = text.split(":");
        return {
          id: `${lowerKey}-upt-${idx + 1}`,
          name: (titlePart || text).trim(),
          description: descPart ? descPart.trim() : text,
          type: idx === 0 ? "External / Partner" : "Internal / Infrastructure",
          impact: `Disrupts data or service flow into ${displayName}.`
        };
      }),
      downstreamTable: downstreamConsumers.map((item, idx) => {
        const text = typeof item === "string" ? item : item.name || String(item);
        const [titlePart, descPart] = text.split(":");
        return {
          id: `${lowerKey}-dwt-${idx + 1}`,
          name: (titlePart || text).trim(),
          description: descPart ? descPart.trim() : `Operational consumer of ${displayName}`,
          type: "Internal Operations",
          impact: `${category} workflows delayed or require manual contingency.`
        };
      }),
      infrastructureTable: [
        {
          id: `${lowerKey}-inf-1`,
          component: `${displayName} Application Services`,
          description: cleanVal(
            record.infrastructure,
            `Production application infrastructure and endpoints for ${fullName}`
          ),
          owner: itsTeam,
          impact: `Core ${displayName} functionality unavailable or degraded.`
        },
        {
          id: `${lowerKey}-inf-2`,
          component: "Integration & Middleware",
          description: cleanVal(
            record.directDependencies,
            `Web services, APIs, and data feeds connecting ${displayName} with Alaska systems`
          ),
          owner: itsTeam,
          impact: "Upstream or downstream operational data synchronization delayed."
        },
        {
          id: `${lowerKey}-inf-3`,
          component: "Network & Authentication",
          description: `Network routing, firewall rules, and user authentication for ${fullName}`,
          owner: "ITS Network / Infrastructure",
          impact: `Users or partner services unable to reach ${displayName}.`
        }
      ]
    },
    typicalBusinessImpact,
    knownWorkarounds,
    vendorContacts: {
      supportEmail,
      supportPhone,
      technicalSupport: `${company} Support (${supportPhone})`,
      accountManager: cleanVal(record.vendorPOC, company),
      supportHours: `24x7 Critical Operations (Response Target: ${responseTarget})`,
      escalation: cleanVal(
        record.escalation,
        `Contact ${itsTeam} on-call and ${company} support (${supportPhone})`
      ),
      communicationGuidelines,
      responseSlas
    },
    internalContacts: {
      itsTeam,
      itsTeamNote: cleanVal(record.supportModel, `${itsTeam} (${applicationOwner})`),
      applicationOwner,
      onCallSupport: `${itsTeam} On-Call`,
      systemAdministration: cleanVal(record.systemAdmin, itsTeam),
      businessOwner: cleanVal(record.businessOwner, category),
      passwordSupport: cleanVal(record.passwordSupport, "ITS Service Desk, 1-877-238-1077")
    },
    validationChecklist,
    incidentHistory: [],
    relatedDocuments
  };
}

export function getGroundStopImpactDetails(appItem) {
  if (!appItem) return null;
  const key = String(
    appItem.key || appItem.id || appItem.record?.key || appItem.record?.id || ""
  ).trim();
  const lowerKey = key.toLowerCase();
  let base = null;

  if (lowerKey === "acars" || lowerKey === "sita") {
    base = VENDOR_IMPACT_DETAILS.sita;
  } else if (lowerKey === "smart4aviation (s4a)" || lowerKey === "s4a") {
    base = VENDOR_IMPACT_DETAILS["Smart4Aviation (S4A)"];
  } else if (lowerKey === "airtrack" || lowerKey === "airtrak") {
    base = VENDOR_IMPACT_DETAILS.airtrack;
  } else if (lowerKey === "aims") {
    base = VENDOR_IMPACT_DETAILS.aims;
  } else if (lowerKey === "aims-vendor") {
    base = VENDOR_IMPACT_DETAILS["aims-vendor"];
  } else if (key && VENDOR_IMPACT_DETAILS[key]) {
    base = VENDOR_IMPACT_DETAILS[key];
  } else if (lowerKey && VENDOR_IMPACT_DETAILS[lowerKey]) {
    base = VENDOR_IMPACT_DETAILS[lowerKey];
  } else {
    base = buildGroundStopImpactDetails(appItem);
  }
  return applyAdminImpactOverrides(base, appItem, true);
}

export default VENDOR_IMPACT_DETAILS;

