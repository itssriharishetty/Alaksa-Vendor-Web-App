export const VENDOR_IMPACT_DETAILS = {
  accelya: {
    id: "accelya",
    name: "Accelya",
    breadcrumbTrail: ["Vendors", "Accelya", "Vendor Impact"],
    pageTitle: "Accelya – Vendor Impact Details",
    pageSubtitle:
      "View applications, systems, dependencies and business impact if this vendor experiences an outage or degraded service.",
    applicationsTabTitle: "Accelya",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "View all Alaska applications and systems that depend on Accelya, including business function, dependencies, and expected impact if this vendor experiences an outage or degraded service.",
    applicationsCardSubtitle:
      "This list shows Alaska applications and systems that use Accelya services. Not all systems may be impacted for every incident.",
    dependenciesTabTitle: "Accelya – Dependencies",
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
    pageTitle: "Vendor Impact Details",
    pageSubtitle: "Quickly identify which Alaska systems are affected when a vendor has an issue.",
    applicationsTabTitle: "AeroData",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "AeroData supports takeoff, landing, and runway performance data and is used by QX. The overall Aircraft Performance Data System is classified Tier 1 and ground-stop eligible/critical.",
    applicationsCardSubtitle:
      "This list shows Alaska applications and systems that use AeroData services. Boeing and Airbus performance processing is documented under Dynamic Source rather than AeroData; AeroData is explicitly associated with QX.",
    dependenciesTabTitle: "AeroData – Dependencies",
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
        "Production service availability is documented as 24x7. The AeroData escalation procedure separately says that email sent outside business hours can receive expedited handling by putting URGENT in the subject; documented response is 5–10 minutes. The source does not explicitly state that the AeroData support desk itself is staffed 24x7.",
      escalation:
        "Technical Support: AeroData, 480-443-7740, prompt 3.\nGeneral technical/customer support: support@aerodata.aero\nAirport/runway/NOTAM support: rwydata@aerodata.aero\nOutside business hours: Put URGENT in the email subject for expedited handling (documented target: 5–10 minutes).",
      communicationGuidelines: [
        "IT Service Desk provides initial intake/triage, creates/routes ServiceNow incidents, and escalates to Production Operations through the dedicated Teams channel. Production Operations monitors alerts, participates in P1/P2/RRT0 incident bridges, performs approved recovery actions, and escalates to engineering/vendors.",
        "AeroData support can be contacted by phone or its documented support emails. For expedited handling outside business hours, put URGENT in the email subject; the documented target is 5–10 minutes.",
        "On-call standard: use xMatters/Everbridge, page/call each on-call resource twice within 90 seconds, and escalate to the next tier after 5 minutes without a response.",
        "P1: start/join the bridge immediately. The runbook lists updates every 15–30 minutes, but explicitly marks that cadence TBD, so do not encode it as a finalized SLA.",
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
          value: "5–10 minute response when URGENT is included in the subject."
        },
        {
          label: "Sev 1 update cadence",
          value: "15–30 minutes, TBD/not finalized."
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
    name: "ACARS",
    breadcrumbTrail: ["Vendors", "ACARS", "Vendor Impact"],
    pageTitle: "ACARS – Vendor Impact Details",
    pageSubtitle:
      "View applications, systems, dependencies and business impact if ACARS Ground / AIRCOM (SITA) experiences an outage or degraded service.",
    applicationsTabTitle: "ACARS",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "ACARS Ground (Alias: AIRCOM) is a Tier 1, ground-stop eligible Flight Operations system that transmits messages and information to and from aircraft. Business impact is High if completely down; medium if individual services or data types are affected.",
    applicationsCardSubtitle:
      "This list shows Alaska applications and systems associated with ACARS Ground / AIRCOM (SITA) and ARINC aircraft communications.",
    dependenciesTabTitle: "ACARS – Dependencies",
    dependenciesTabSubtitle:
      "Upstream dependencies, downstream consumers, MQ messaging queues, and infrastructure components for ACARS Ground / AIRCOM.",
    status: "Active",
    lastUpdated: "Nov 02, 2026",
    subtitle: "Flight Operations / Aircraft Communications (ACARS Ground · Alias: AIRCOM · Tier 1 Ground-Stop Eligible)",
    company: "SITA",
    website: "(Add Website/Support Portal URL)",
    category: "Flight Operations / Aircraft Communications",
    itsTeam: "ITS Flight Operations / ITS COG Flight Operations",
    logo: "public/vendors/sita.png",
    impactSummary: {
      confirmed: 0,
      potential: 5,
      notImpacted: 0,
      underReview: 0
    },
    impactCallout: {
      title: "Potential Impact on 5 Alaska Systems (Tier 1 / Ground-Stop Eligible)",
      message:
        "Service classification: Application / Service: ACARS Ground (Alias: AIRCOM) • Tier 1 • Ground-stop eligible: Yes • Business impact: High if completely down; medium if individual services or data types are affected. Primary function: Transmit messages and information to and from aircraft.",
      description:
        "Service classification: Application / Service: ACARS Ground (Alias: AIRCOM) • Tier 1 • Ground-stop eligible: Yes • Business impact: High if completely down; medium if individual services or data types are affected. Primary function: Transmit messages and information to and from aircraft.",
      updatedAgo: "Updated from Primary Internal Runbooks"
    },
    impactedSystems: [
      {
        id: "acars-ground-aircom",
        name: "ACARS Ground / AIRCOM",
        subName: "(Alias: AIRCOM • Tier 1 Ground-Stop Eligible)",
        appTabSubName: "(Alias: AIRCOM • Tier 1 Ground-Stop Eligible)",
        description:
          "Processes Aircraft Communication Addressing and Reporting System messages transmitted through VHF or satellite. Messages include flight information, weather, aircraft telemetry and free text, and travel in both air-to-ground and ground-to-air directions.",
        appTabDescription:
          "Processes Aircraft Communication Addressing and Reporting System messages transmitted through VHF or satellite. Messages include flight information, weather, aircraft telemetry and free text, and travel in both air-to-ground and ground-to-air directions.",
        businessFunction: "Aircraft-to-ground and ground-to-air operational communications.",
        impact:
          "Complete loss is documented as high business impact and ACARS is ground-stop eligible. An actual September incident was escalated to Sev 1 after Dispatch reported complete loss of ACARS communications with crews.",
        dependencies:
          "SITA AIRCOM Server, AIRCOM Server Client, AIRCOM Web Service Invoker and ACARS History Service.",
        status: "Potential",
        owner: "ITS Flight Operations / ITS COG Flight Operations"
      },
      {
        id: "flifo-times-ws",
        name: "FlifoTimesWS",
        subName: "(Flight-Time Web Service)",
        appTabSubName: "(Flight-Time Web Service)",
        description:
          "Web service used by ACARS Ground to process flight times, including OOOI times.",
        appTabDescription:
          "Web service used by ACARS Ground to process flight times, including OOOI times.",
        businessFunction: "Flight-time processing.",
        impact:
          "ACARS flight-time messages may not update correctly. During one documented incident, operations reported no OOOI times during the ACARS outage.",
        dependencies: "ACARS Ground/AIRCOM.",
        status: "Potential",
        owner: "Flight Operations support"
      },
      {
        id: "aircraft-performance-data-wam",
        name: "AircraftPerformanceData / WAM",
        subName: "(Aircraft Performance / Dispatch Release)",
        appTabSubName: "(Aircraft Performance / Dispatch Release)",
        description:
          "AircraftPerformanceData is among the web services used by ACARS Ground. WAM can format and send a dispatch release for upload through ACARS Ground.",
        appTabDescription:
          "AircraftPerformanceData is among the web services used by ACARS Ground. WAM can format and send a dispatch release for upload through ACARS Ground.",
        businessFunction: "Aircraft performance / dispatch release distribution.",
        impact: "Documented incidents show crews being unable to reliably receive performance numbers.",
        dependencies: "AIRCOM / ACARS messaging path.",
        status: "Potential",
        owner: "ITS Flight Operations / ITS COG Flight Operations"
      },
      {
        id: "s4a-acars-mq",
        name: "S4A",
        subName: "(Dedicated MQ Integration)",
        appTabSubName: "(Dedicated MQ Integration)",
        description: "ACARS architecture defines dedicated inbound/outbound MQ integration with S4A.",
        appTabDescription: "ACARS architecture defines dedicated inbound/outbound MQ integration with S4A.",
        businessFunction: "(Add Business Function)",
        impact: "(Add S4A impact if ACARS unavailable)",
        dependencies: "COMM.V1.JMS.EXT_ACARS_INBOUND and COMM.V1.JMS.EXT_ACARS_OUTBOUND.",
        status: "Potential",
        owner: "(Add Internal ITS Owner)"
      },
      {
        id: "acars-history-service",
        name: "ACARS History Service",
        subName: "(React UI → API Management → .NET 8 API → Azure SQL)",
        appTabSubName: "(React UI → API Management → .NET 8 API → Azure SQL)",
        description:
          "In-house web service and part of the ACARS Ground system. ACARSHistory-Runbook.docx additionally documents ACARS History as a React UI → API Management → .NET 8 API → Azure SQL architecture, with West US 2 primary hosting and Central US SQL failover.",
        appTabDescription:
          "In-house web service and part of the ACARS Ground system. ACARSHistory-Runbook.docx additionally documents ACARS History as a React UI → API Management → .NET 8 API → Azure SQL architecture, with West US 2 primary hosting and Central US SQL failover.",
        businessFunction: "ACARS message/history access.",
        impact: "(Add ACARS History impact)",
        dependencies: "AIRCOM/ACARS ecosystem.",
        status: "Potential",
        owner: "(Add Internal ITS Owner)"
      }
    ],
    upstreamDependencies: [
      "Aircraft messages arrive through VHF or satellite.",
      "ARINC is an external aircraft-communications partner documented in the ACARS runbook.",
      "The architecture defines ALASKA.FROM.ARINC as the read queue.",
      "Current Flight Planning testing documentation describes inbound aircraft data following ACARS → ARINC/SITA → AIRCOM, before downstream processing."
    ],
    downstreamConsumers: [
      "Flight Operations / Dispatch",
      "Aircraft and flight crews",
      "FlifoTimesWS / flight-time processing",
      "AircraftPerformanceData",
      "PilotLimitsWS",
      "Weather API",
      "WAM dispatch-release workflow",
      "S4A",
      "TIBCO flight-event integration"
    ],
    dependenciesTab: {
      overviewSubtitle:
        "This diagram shows the key upstream and downstream dependencies for ACARS Ground / AIRCOM (SITA), including VHF/satellite aircraft messaging, ARINC read/write queues, SQL Server persistence, IBM MQ event queues, and Flight Operations downstream services.",
      diagramUpstream: [
        {
          id: "acars-dup-1",
          name: "VHF / Satellite Datalink",
          subtitle: "Aircraft-to-Ground Messages",
          iconType: "network"
        },
        {
          id: "acars-dup-2",
          name: "ARINC Communications",
          subtitle: "External Aircraft Comms Partner",
          iconType: "transfer"
        },
        {
          id: "acars-dup-3",
          name: "ALASKA.FROM.ARINC",
          subtitle: "Inbound Read Queue",
          iconType: "doc"
        },
        {
          id: "acars-dup-4",
          name: "ACARS → ARINC/SITA → AIRCOM",
          subtitle: "Inbound Aircraft Data Flow",
          iconType: "ticket"
        }
      ],
      diagramServices: [
        "SITA AIRCOM Server",
        "AIRCOM Server Client",
        "AIRCOM Web Service Invoker",
        "ACARS History Service",
        "QMAS / IBM MQ & MSMQ"
      ],
      diagramDownstream: [
        {
          id: "acars-ddn-1",
          name: "Flight Ops / Dispatch & Crews",
          subtitle: "Operational & Crew Messaging",
          iconType: "team"
        },
        {
          id: "acars-ddn-2",
          name: "FlifoTimesWS",
          subtitle: "OOOI & Flight-Time Processing",
          iconType: "nodes"
        },
        {
          id: "acars-ddn-3",
          name: "AircraftPerformanceData & WAM",
          subtitle: "Performance & Dispatch Release",
          iconType: "chart"
        },
        {
          id: "acars-ddn-4",
          name: "PilotLimitsWS & Weather API",
          subtitle: "Flight Ops Web Services",
          iconType: "database"
        },
        {
          id: "acars-ddn-5",
          name: "S4A & TIBCO Integration",
          subtitle: "MQ & Flight-Event Consumers",
          iconType: "users"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 4, tone: "red" },
        { label: "Downstream Consumers", count: 9, tone: "green" },
        { label: "Impacted Applications", count: 5, tone: "blue" },
        { label: "Infrastructure Components", count: 5, tone: "purple" }
      ],
      keyTakeaways: [
        "ACARS Ground is a Tier 1, ground-stop eligible Flight Operations system that provides aircraft-to-ground and ground-to-air operational messaging. It carries operational information including flight data, weather, telemetry and free-text messages, processes flight times, handles requests for flight initialization/route information and supports dispatch-release uplinks.",
        "Its architecture crosses SITA AIRCOM, ARINC communications, Windows application servers, SQL Server, MQ messaging and several Flight Operations services, making message flow and queue health particularly important operational dependencies."
      ],
      upstreamTable: [
        {
          id: "acars-upt-1",
          name: "Aircraft VHF / Satellite Datalink",
          description: "Aircraft messages arrive through VHF or satellite.",
          type: "External / Aircraft",
          impact: "Loss or delay of air-to-ground and ground-to-air messages."
        },
        {
          id: "acars-upt-2",
          name: "ARINC",
          description:
            "ARINC is an external aircraft-communications partner documented in the ACARS runbook.",
          type: "External Partner",
          impact: "Aircraft communications link to/from AIRCOM interrupted or degraded."
        },
        {
          id: "acars-upt-3",
          name: "ALASKA.FROM.ARINC",
          description: "The architecture defines ALASKA.FROM.ARINC as the read queue.",
          type: "Internal / MQ Queue",
          impact: "Inbound ARINC messages queue up and are not ingested by AIRCOM."
        },
        {
          id: "acars-upt-4",
          name: "ACARS → ARINC/SITA → AIRCOM Path",
          description:
            "Current Flight Planning testing documentation describes inbound aircraft data following ACARS → ARINC/SITA → AIRCOM, before downstream processing.",
          type: "External / Integration",
          impact: "Downstream Flight Operations services do not receive inbound aircraft data."
        }
      ],
      downstreamTable: [
        {
          id: "acars-dwt-1",
          name: "Flight Operations / Dispatch",
          description: "Dispatch-to-crew operational messaging and flight release uplinks.",
          type: "Internal (Tier 1)",
          impact: "Dispatch-to-crew communication impaired; potential ground-stop concern."
        },
        {
          id: "acars-dwt-2",
          name: "Aircraft and flight crews",
          description: "Crews receiving flight info, weather, performance numbers, and PDCs.",
          type: "Internal Users",
          impact: "Crews unable to reliably receive performance numbers, clearances, or free-text messages."
        },
        {
          id: "acars-dwt-3",
          name: "FlifoTimesWS / flight-time processing",
          description: "Web service used by ACARS Ground to process flight times, including OOOI times.",
          type: "Internal Service",
          impact: "Missing OOOI/flight times during ACARS outage."
        },
        {
          id: "acars-dwt-4",
          name: "AircraftPerformanceData",
          description: "Web service used by ACARS Ground for takeoff/landing performance traffic.",
          type: "Internal (Tier 1)",
          impact: "Takeoff and landing performance request/response traffic delayed or lost."
        },
        {
          id: "acars-dwt-5",
          name: "PilotLimitsWS",
          description: "Flight Operations web service invoked by ACARS Ground.",
          type: "Internal Service",
          impact: "Pilot limits message processing impacted during ACARS disruption."
        },
        {
          id: "acars-dwt-6",
          name: "Weather API",
          description: "Weather data requests and uplinks processed through ACARS Ground.",
          type: "Internal Service",
          impact: "In-flight weather updates to aircraft delayed or unavailable."
        },
        {
          id: "acars-dwt-7",
          name: "WAM dispatch-release workflow",
          description: "WAM formats and sends dispatch releases for upload through ACARS Ground.",
          type: "Internal (Tier 1)",
          impact: "Dispatch release uplinks to aircraft delayed or require manual workaround."
        },
        {
          id: "acars-dwt-8",
          name: "S4A",
          description: "Dedicated inbound/outbound MQ integration (COMM.V1.JMS.EXT_ACARS_INBOUND / OUTBOUND).",
          type: "Internal / Partner",
          impact: "(Add S4A impact if ACARS unavailable)"
        },
        {
          id: "acars-dwt-9",
          name: "TIBCO flight-event integration",
          description: "Downstream flight-event, engine, telemetry, and position MQ event streams.",
          type: "Internal Middleware",
          impact: "Downstream flight-event and telemetry consumers do not receive real-time ACARS events."
        }
      ],
      infrastructureTable: [
        {
          id: "acars-inf-1",
          component: "AIRCOM application servers",
          description:
            "SEAVVACARSAPP03 - IGQ, TUKVVACARSAPP03 - TUK. Platform documented as Windows Server 2016.",
          owner: "ITS Flight Operations / ITS COG Flight Operations",
          impact: "AIRCOM server availability and message processing affected; check AIRCOM Server Status page."
        },
        {
          id: "acars-inf-2",
          component: "Database",
          description:
            "SQL Server 2016: SEAPRACARSSQL02, TUKPRACARSSQL02 (DNS: acars.sql.insideaag.com).",
          owner: "SQL Database team",
          impact: "Database Connector turns red; ACARS message persistence and lookup affected."
        },
        {
          id: "acars-inf-3",
          component: "Application DNS",
          description: "acars.app.insideaag.com (GTM entry: acars.app.int.insideaag.com).",
          owner: "ITS Flight Operations / Infrastructure",
          impact: "Application routing and GTM failover across IGQ and TUK affected."
        },
        {
          id: "acars-inf-4",
          component: "Messaging",
          description:
            "Local Microsoft Message Queuing, QMAS queue manager, ALASKA.FROM.ARINC, ALASKA.TO.ARINC, COMM.V1.JMS.EXT_ACARS_INBOUND, COMM.V1.JMS.EXT_ACARS_OUTBOUND, FO.ENGINE.EVENTS, FO.ACARS.TELEMETRY.EVENTS, FO.ACARS.AIRCRAFT.POSITION.EVENTS, FO.ACARSGW.TO.QXEFBGW, FO.FLIGHT.EVENTS.ACARSTIMES, FO.FLIGHT.LOAD.ACARS.UPLINK, FO.TO.AIRCOM.WEBSERVICES.",
          owner: "IBM MQ team / ITS Flight Operations",
          impact: "MQ link/queue backlog blocks inbound and outbound aircraft and flight-event messages."
        },
        {
          id: "acars-inf-5",
          component: "Specific firewall configuration",
          description: "(Add Specific firewall configuration)",
          owner: "ITS Network",
          impact: "Network / firewall connectivity between AIRCOM, ARINC/SITA, and internal services."
        }
      ]
    },
    typicalBusinessImpact: [
      "Loss or delay of aircraft-to-ground/ground-to-air communications.",
      "Missing OOOI/flight times.",
      "Crews may not receive aircraft performance numbers.",
      "Takeoff performance request/response traffic can be delayed.",
      "Dispatch-to-crew communication can be impaired.",
      "ACARS disruption can become a ground-stop concern because the system is explicitly classified ground-stop eligible.",
      "An October ACARS latency incident affected landing performance retrieval, takeoff numbers and pre-departure clearances across Alaska, Horizon and Hawaiian operations."
    ],
    knownWorkarounds: [
      "A September incident documented the SMART backup system carrying messages more consistently while the primary ACARS path was lagging. Dispatch was also manually emailing performance information to crews during that incident.",
      "SMART backup messaging path, where applicable to the impacted transaction.",
      "Manual performance-information delivery from Dispatch to crews was used during the documented outage.",
      "(Add other Known Workarounds)"
    ],
    vendorContacts: {
      companyNote:
        "SITA, for the AIRCOM application/vendor product. The runbook separately identifies ARINC for aircraft communications.",
      categoryNote:
        "Service classification: Application / Service: ACARS Ground (Alias: AIRCOM) • Tier 1 • Ground-stop eligible: Yes • Business impact: High if completely down; medium if individual services or data types are affected. Primary function: Transmit messages and information to and from aircraft.",
      supportEmail: "Aircom.support@sitaonair.aero",
      supportEmailNote: "SITA Help Desk (AIRCOM Services)",
      secondaryEmail: "AOChelpdesk@collins.com",
      secondaryEmailNote: "ARINC / Collins (Senior On-Duty Ops Manager 24x7 escalation: AOC@collins.com)",
      supportPhone:
        "SITA: 1-866-247-2661, option 4 for AIRCOM Services. ARINC: 800-633-6882.",
      technicalSupport:
        "SITA Help Desk (24/7): 1-866-247-2661, option 4 • ARINC: 800-633-6882",
      accountManager: "(Add Account Manager)",
      namedEscalationContact:
        "ARINC Senior On-Duty Operations Manager (24x7): 410-266-4029 / AOC@collins.com",
      supportHours:
        "ACARS is documented as 24x7 critical to operation. The SITA Help Desk is listed as 24/7. ARINC Senior On-Duty Operations Manager is 24x7.",
      escalation:
        "SITA / AIRCOM:\n• SITA Help Desk: 1-866-247-2661, option 4\n• Email: Aircom.support@sitaonair.aero\n• Hours: 24/7\n• Internal escalation note: An assigned developer follows up with SITA and escalates.\n\nARINC / Collins Aerospace (Aircraft Communications):\n• Phone: 800-633-6882\n• Email: AOChelpdesk@collins.com\n• Escalation: ARINC Senior On-Duty Operations Manager, 24x7, 410-266-4029, AOC@collins.com",
      communicationGuidelines: [
        "Level 1, IT Service Desk: Incident intake, initial troubleshooting, create/route ServiceNow incident, and escalate to Production Operations through the dedicated Teams channel.",
        "Production Operations: Monitor dashboards/alerts, lead or co-lead P1/P2/RRT0 bridges, perform approved recovery actions, and escalate to Engineering, SRE and vendors.",
        "On-call process: Use xMatters or Everbridge. Page/call each on-call resource twice within 90 seconds. If no response within five minutes, escalate to the next tier.",
        "P1: Start/join bridge immediately. P1 update cadence is 15–30 minutes, marked TBD in the runbook (do not treat as a finalized SLA).",
        "P2: Create a Teams channel using the major-incident number and invite resolver groups."
      ],
      responseSlas: [
        {
          label: "System availability",
          value: "24x7 critical operation."
        },
        {
          label: "Tier",
          value: "Tier 1 / ground-stop eligible."
        },
        {
          label: "On-call attempt",
          value: "Twice within 90 seconds."
        },
        {
          label: "No-response escalation",
          value: "Next tier after 5 minutes."
        },
        {
          label: "P1",
          value: "Start/join bridge immediately."
        },
        {
          label: "P1 update cadence",
          value: "15–30 minutes, marked TBD in the runbook; do not treat as a finalized SLA."
        },
        {
          label: "P2",
          value: "Create a Teams channel using the major-incident number and invite resolver groups."
        },
        {
          label: "Sev 1 initial vendor response",
          value: "(Add Sev 1 initial vendor response)"
        },
        {
          label: "Sev 2 initial vendor response",
          value: "(Add Sev 2 initial vendor response)"
        },
        {
          label: "Sev 2 update cadence",
          value: "(Add Sev 2 update cadence)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS Flight Operations / ITS COG Flight Operations",
      itsTeamNote:
        "Technical teams: ITS Flight Operations, ITS COG Flight Operations, SQL Database team and IBM MQ team.",
      applicationOwner: "Ryan Wilkins, 206-972-0228",
      onCallSupport: "ITS Flight Operations / ITS COG Flight Operations On-Call",
      systemAdministration: "Andy Nunez / Arun Sharma, 206-392-8613",
      businessOwner: "James Falen, 425-679-2135 cell / 206-392-6083 desk",
      passwordSupport: "ITS Service Desk, 1-877-238-1077"
    },
    validationChecklist: [
      "Determine who or what system is not receiving messages.",
      "Determine the affected message type.",
      "Establish how many flights/messages are affected and capture flight details, message times and sample messages.",
      "Open the AIRCOM Server Status page and identify the active server.",
      "Verify the required AIRCOM services are green, including Communication Relay, Database Connector, IBM MQ Connector and Message Processor.",
      "Check MQ link/queue health and queue backlog.",
      "Check database connectivity and database alerts/performance if Database Connector is red.",
      "Review errors, latency, traffic, alarms, logs, dependencies, deployments, configuration changes and certificates.",
      "Follow the documented restart procedure based on which AIRCOM component is unhealthy.",
      "Escalate persistent message-processing issues to COG Flight Operations/Flight Operations on-call.",
      "After recovery, confirm error rate, latency, alerts, dependencies, system thresholds and stakeholder validation are normal."
    ],
    incidentHistory: [
      {
        id: "INC-ACARS-OCT",
        date: "October Incident Record",
        summary:
          "ACARS latency incident affected landing performance retrieval, takeoff numbers and pre-departure clearances across Alaska, Horizon and Hawaiian operations.",
        severity: "Major Incident",
        resolution:
          "Restored AIRCOM / MQ message flow and validated performance retrieval and PDC delivery across operations."
      },
      {
        id: "INC-ACARS-SEP",
        date: "September Incident Record",
        summary:
          "Escalated to Sev 1 after Dispatch reported complete loss of ACARS communications with crews and missing OOOI times.",
        severity: "Sev 1",
        resolution:
          "SMART backup system carried messages while primary ACARS path lagged; Dispatch manually emailed performance info to crews until recovery."
      }
    ],
    relatedDocuments: [
      {
        title: "ACARSGround_Aircom_Runbook.docx",
        type: "Operational Runbook (Word)",
        owner: "ITS Flight Operations / ITS COG Flight Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B28053531-3767-408E-B072-918A2307DCA5%7D&file=ACARSGround_Aircom_Runbook.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ITS Operations Runbook_ACARSGround_Aircom_03.2026.pdf",
        type: "Operational Runbook (PDF)",
        owner: "ITS Flight Operations / ITS COG Flight Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/ACARS%20(AS)/ITS%20Operations%20Runbook_ACARSGround_Aircom_03.2026.pdf?web=1"
      },
      {
        title: "ACARS_System_Summary.docx",
        type: "System Summary (Word)",
        owner: "ITS Flight Operations",
        updated: "Additional Related Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BE5D614AD-8759-464D-ABD0-0B87929F4568%7D&file=ACARS_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARSHistory-Runbook.docx",
        type: "Service Runbook (Word)",
        owner: "ITS Flight Operations",
        updated: "Additional Related Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B125C0C1E-4C83-4AE9-B492-DB2525D6378C%7D&file=ACARSHistory-Runbook.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "E2E Test Strategy - Flight Planning System Replacement_V0.1.pptx",
        type: "Architecture & Test Strategy (PowerPoint)",
        owner: "ITS Flight Operations",
        updated: "Additional Related Source",
        url: "https://alaskaair.sharepoint.com/sites/AlaskaE2ETesting/_layouts/15/Doc.aspx?sourcedoc=%7B45417EC3-08B2-46C7-A5DF-AE77AB217C2D%7D&file=E2E%20Test%20Strategy%20-%20Flight%20Planning%20System%20Replacement_V0.1.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1"
      }
    ]
  },
  "aims-vendor": {
    id: "aims-vendor",
    name: "AIMS",
    breadcrumbTrail: ["Vendors", "AIMS", "Vendor Impact"],
    pageTitle: "AIMS – Vendor Impact Details",
    pageSubtitle:
      "View applications, systems, dependencies and business impact if AIMS experiences an outage or degraded service.",
    applicationsTabTitle: "AIMS",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "AIMS is documented internally as a Maintenance & Engineering application with integrations into operational Crew-data workflows, participating in the backend path used to populate Crew information in AirTrAK and the AIMS-to-VisOps feed.",
    applicationsCardSubtitle:
      "This list shows Alaska applications and systems with documented integration/dependency relationships with AIMS.",
    dependenciesTabTitle: "AIMS – Dependencies",
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
  arinc: "https://auth.direct.arinc.net/",
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
  "cargo-spot": "https://www.champ.aero",
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
    .replace(/\s*[—–]\s*/g, " - ")
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

  return {
    id,
    name: displayName,
    breadcrumbTrail: ["Vendors", displayName, "Vendor Impact"],
    pageTitle: `${displayName} – Vendor Impact Details`,
    pageSubtitle:
      "View applications, systems, dependencies and business impact if this vendor experiences an outage or degraded service.",
    applicationsTabTitle: displayName,
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle: `View all Alaska applications and systems that depend on ${displayName}, including business function, dependencies, and expected impact if this vendor experiences an outage or degraded service.`,
    applicationsCardSubtitle: `This list shows Alaska applications and systems that use ${displayName} services. Not all systems may be impacted for every incident.`,
    dependenciesTabTitle: `${displayName} – Dependencies`,
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

export function getVendorImpactDetails(vendor, allVendors = []) {
  if (!vendor) return null;
  const id = String(vendor.id || "").trim().toLowerCase();
  if (id && VENDOR_IMPACT_DETAILS[id]) {
    return VENDOR_IMPACT_DETAILS[id];
  }
  if (id === "aircraft-performance-aerodata") {
    return VENDOR_IMPACT_DETAILS.aerodata;
  }
  if (id === "acars") {
    return VENDOR_IMPACT_DETAILS.sita;
  }
  if (id === "aims") {
    return VENDOR_IMPACT_DETAILS["aims-vendor"];
  }
  const company = String(vendor.company || vendor.vendor || vendor.displayName || vendor.systemName || "")
    .trim()
    .toLowerCase();
  const sysName = String(vendor.systemName || vendor.displayName || "")
    .trim()
    .toLowerCase();
  if (company.includes("accelya")) {
    return VENDOR_IMPACT_DETAILS.accelya;
  }
  if (company.includes("aerodata")) {
    return VENDOR_IMPACT_DETAILS.aerodata;
  }
  if (company.includes("sita") || sysName.includes("acars")) {
    return VENDOR_IMPACT_DETAILS.sita;
  }
  if (company.includes("aims") || sysName.includes("aims")) {
    return VENDOR_IMPACT_DETAILS["aims-vendor"];
  }
  return buildTemplateVendorImpactDetails(vendor, allVendors);
}

export default VENDOR_IMPACT_DETAILS;

