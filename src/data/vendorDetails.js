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
    name: "ACARS Ground System",
    breadcrumbTrail: ["Ground Stop Applications", "ACARS", "Impact Details"],
    pageTitle: "ACARS Ground System (ACARS / AIRCOM) – Impact Details",
    pageSubtitle:
      "ACARS is the central text link between aircraft and the ground. It carries flight info, flight times, weather, performance data, releases and load closeouts. Rated 24x7 critical and on the Ground Stop list.",
    applicationsTabTitle: "ACARS Ground System",
    applicationsTabSubheading: "Applications & Systems (ACARS Components)",
    applicationsTabSubtitle:
      "ACARS Ground System (also called ACARS / AIRCOM) is on the Ground Stop list as a Flight Ops IT app (ACARS/Aircom), rated 24x7 critical to operations.",
    applicationsCardSubtitle:
      "Applications and components that make up ACARS Ground System (SITA Aircom Server, AIRCOM Web Service Invoker, ACARS History, ACARS Messenger / Ops Messenger, and Flight Ops Web Services).",
    dependenciesTabTitle: "ACARS Ground System – Dependencies Architecture",
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
      title: "Criticality: Ground Stop — 24x7, critical to operations (Triage Time Limit: 15 Minutes)",
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
        subName: "(seavvapp22 / tukvvapp22 — Active/Active)",
        appTabSubName: "(seavvapp22 / tukvvapp22 — Active/Active)",
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
        owner: "(Add owner)"
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
        owner: "(Add owner)"
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
          description: "(Add firewall details)",
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
      "(Add voice/radio fallback procedure)"
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
      accountManager: "(Add Account Manager)",
      namedEscalationContact:
        "ARINC Senior On-Duty Ops Manager (24x7): 410-266-4029 / AOC@arinc.com",
      supportHours: "24x7, critical to operations",
      escalation:
        "Vendor Contacts:\n• SITA Help Desk: 866-247-2661 (24/7)\n• SITA Aircom support: 1-888-247-2661, option 4 / Aircom.support@sitaonair.aero\n• ARINC Help Desk: 800-633-6882 / helpdesk@arinc.com\n• ARINC Senior On-Duty Ops Manager (24x7): 410-266-4029 / AOC@arinc.com\n• Account Manager: (Add Account Manager)\n\nCommunication Guidelines:\n• For SITA issues, an assigned developer follows up with SITA and escalates.\n• When escalating, include the scope: one aircraft (tail), one flight (date, flight, city pair), or the whole fleet, plus which Ops group is affected.",
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
          description: "(Add Sev 1/Sev 2 response times and update cadence)",
          target: "(Add Sev 1/Sev 2 response times and update cadence)",
          value: "(Add Sev 1/Sev 2 response times and update cadence)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS COG FlightOps Support / ITS Flight Operations",
      itsTeamNote:
        "Technical Owners: Ryan Wilkins, Adele Lunde • On-Call: ITS COG FlightOps Support / ITS FltOps on-call",
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
          "ACARS degraded impacting flight operations and planning — Alaska Air Group logged 68 delays totalling 1,075 minutes.",
        severity: "Sev 1",
        resolution:
          "Documented in RCA - Sev1 - MI6516 - ACARS is degraded impacting flight operations and planning.docx"
      }
    ],
    relatedDocuments: [
      {
        title: "ACARS System Summary.docx",
        type: "Main Source — System Summary (Word)",
        owner: "ITS COG FlightOps Support / ITS Flight Operations",
        updated: "Main Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BA9959123-88A9-4875-A445-BDE7EC8095C4%7D&file=ACARS%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARS_Triage_Troubleshooting.docx",
        type: "Main Source — Triage & Troubleshooting (Word)",
        owner: "ITS COG FlightOps Support / ITS Flight Operations",
        updated: "Main Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B781CA6D6-1F42-4C55-BEF2-C5D8C9704290%7D&file=ACARS_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Ground Stop Applications List.docx",
        type: "Main Source — Ground Stop List (Word)",
        owner: "COG Business Impact Mitigation Support",
        updated: "Main Source",
        url: "https://alaskaair.sharepoint.com/sites/CogTeam-BusinessImpactMitigationSupport-CogMIMPOTeams/_layouts/15/Doc.aspx?sourcedoc=%7B93C4FA57-AC4E-4E7A-A5BE-6E1670770D91%7D&file=Ground%20Stop%20Applications%20List.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Service-Offering-Application-Metadata mapping 10-12-2026.xlsx",
        type: "Service Offering Metadata (Excel)",
        owner: "ITS Production Operations",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7BCCA8403B-C46B-47D8-8D7D-58429E9875D6%7D&file=Service-Offering-Application-Metadata%20mapping%2010-12-2026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARSHistory-Runbook.docx",
        type: "Service Runbook (Word)",
        owner: "ITS Flight Operations",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B125C0C1E-4C83-4AE9-B492-DB2525D6378C%7D&file=ACARSHistory-Runbook.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "E2E Test Strategy - Flight Planning System Replacement_V0.1.pptx",
        type: "Architecture & Test Strategy (PowerPoint)",
        owner: "ITS Flight Operations",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/AlaskaE2ETesting/_layouts/15/Doc.aspx?sourcedoc=%7B45417EC3-08B2-46C7-A5DF-AE77AB217C2D%7D&file=E2E%20Test%20Strategy%20-%20Flight%20Planning%20System%20Replacement_V0.1.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ground_stop_apps_dep_matrix.xlsx",
        type: "Ground Stop Dependency Matrix (Excel)",
        owner: "SRE ITS Hub",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SREITSHub/_layouts/15/Doc.aspx?sourcedoc=%7B4A885E79-6862-4AB7-B941-C8A305D14F04%7D&file=ground_stop_apps_dep_matrix.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "RCA - Sev1 - MI6516 - ACARS is degraded impacting flight operations and planning.docx",
        type: "Sev 1 RCA (Word)",
        owner: "ITS Sev1 Response",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSSev1Response/_layouts/15/Doc.aspx?sourcedoc=%7B594EDDF3-1DF8-4F61-8BF9-E2C992B1CBDD%7D&file=RCA%20-%20Sev1%20-%20MI6516%20-%20ACARS%20is%20degraded%20impacting%20flight%20operations%20and%20planning.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARS 2.0 Architecture (ADO Wiki)",
        type: "Architecture Wiki (ADO)",
        owner: "ITS Flight Operations",
        updated: "Additional Source",
        url: "https://itsals.visualstudio.com/FlightOperationsGIT/_wiki/wikis/FlightOperationsGIT.wiki/49438"
      }
    ]
  },
  wam: {
    id: "wam",
    name: "WAM (Flight Planning System / Worksheet)",
    breadcrumbTrail: ["Ground Stop Applications", "WAM", "Impact Details"],
    pageTitle: "WAM (Flight Planning System / Worksheet) – Impact Details",
    pageSubtitle:
      "WAM is the main dispatch tool for AS and QX. It brings together flight plans, weather, performance data and MEL information to produce the dispatch release. If WAM or any of its upstream feeds fails, flights can't be released.",
    applicationsTabTitle: "WAM (Flight Planning System / Worksheet)",
    applicationsTabSubheading: "Applications & Systems (WAM Components)",
    applicationsTabSubtitle:
      "WAM is also called the Flight Planning System or Worksheet. Dispatchers for Alaska (AS) and Horizon (QX) use it to create flight plans and dispatch releases. Listed as \"FlightPlanning-WAM\" among Ground Stop critical apps.",
    applicationsCardSubtitle:
      "Components that make up WAM (WAM Web UI, FlightPlanSvc, FlightPlanningWs / DispatchFlightDetailWs, Aircraft Performance web services, and MEL Service).",
    dependenciesTabTitle: "WAM (Flight Planning System / Worksheet) – Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream systems sending data to WAM, downstream consumers relying on WAM data, and server/DNA farm/IBM MQ/Informix/APIM/monitoring infrastructure.",
    status: "Active",
    lastUpdated: "Nov 04, 2026",
    subtitle:
      "WAM (Flight Planning System / Worksheet) · Criticality: Ground Stop (\"FlightPlanning-WAM\") · 24/7. FlightPlanSvc must run 24/7",
    company: "Jeppesen (owned by Boeing), which runs the JetPlan flight plan server",
    website: "(Add WAM URL)",
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
        "Criticality: Ground Stop (\"FlightPlanning-WAM\") — 24/7 Operations (Sev 1 Triage Time Limit: 15 Minutes)",
      message:
        "WAM is the main dispatch tool for AS and QX. It brings together flight plans, weather, performance data and MEL information to produce the dispatch release. If WAM or any of its upstream feeds fails, flights can't be released.",
      description:
        "WAM is the main dispatch tool for AS and QX. It brings together flight plans, weather, performance data and MEL information to produce the dispatch release. If WAM or any of its upstream feeds fails, flights can't be released.",
      updatedAgo: "Updated from Flight Planning System Summary & WAM Troubleshooting Runbooks"
    },
    impactedSystems: [
      {
        id: "wam-web-ui",
        name: "WAM Web UI",
        subName: "(AngularJS Front End — Chrome Only)",
        appTabSubName: "(AngularJS Front End — Chrome Only)",
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
        subName: "(seavvapp22 / tukvvapp22 — Hot/Hot)",
        appTabSubName: "(seavvapp22 / tukvvapp22 — Hot/Hot)",
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
          impact: "Missing weather in WAM; requires manual flight release with weather entered by hand (+3–8 min per release)."
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
          description: "SEAV3DNA09–16 and TUKV3DNA09–16, behind a load balancer",
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
          description: "(Add firewall details)",
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
      "Manual flight release with weather entered by hand. This adds about 3–5 minutes per release, or 5–8 minutes when packet updates are needed",
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
        "Jeppesen Sev 1 line: 1-800-732-2800, account number 83491 • Jeppesen email: opssupport@jeppesen.com • The Weather Company (weather issues): 1-800-872-2359",
      accountManager: "(Add Account Manager)",
      namedEscalationContact:
        "The Weather Company (weather issues): 1-800-872-2359",
      supportHours: "24/7. FlightPlanSvc must run 24/7",
      escalation:
        "Vendor Contacts:\n• Jeppesen Sev 1 line: 1-800-732-2800, account number 83491\n• Jeppesen email: opssupport@jeppesen.com\n• The Weather Company (weather issues): 1-800-872-2359\n• Account Manager: (Add Account Manager)\n\nCommunication Guidelines:\n• The business focal follows up with Jeppesen and escalates.\n• When escalating to Jeppesen, give: which application (WAM or Flight Planning), the flight and tail number, the RC number, and how many users are affected.\n• Send incident updates about every hour, through Everbridge, xMatters and ServiceNow.",
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
          description: "(Add Jeppesen response SLA)",
          target: "(Add Jeppesen response SLA)",
          value: "(Add Jeppesen response SLA)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS COG Flight Operations. Verified owners: Ryan Wilkins, Adele Lunde",
      itsTeamNote:
        "On-Call: ITS COG Flight Operations • MEL issues: ITS COG M&E App Support",
      applicationOwner: "Ryan Wilkins, Adele Lunde (Technical Owners)",
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
        type: "Main Source — System Summary (Word)",
        owner: "ITS Knowledge Management / ITS COG Flight Operations",
        updated: "Main Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B699F4E53-05D1-46F7-BC0B-DDE61D08A91E%7D&file=Flight%20Planning%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Flight_Planning_System_Summary.docx",
        type: "Main Source — SysDocs Summary (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Main Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B235791B5-2AC8-4E5B-AF7E-F5DCB33C256C%7D&file=Flight_Planning_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "WAM.troubleshooting.docx",
        type: "Main Source — WAM Troubleshooting (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Main Source",
        url: "https://alaskaair.sharepoint.com/sites/ASICS/AOS/FO/_layouts/15/Doc.aspx?sourcedoc=%7B0D9BD242-FDDB-4191-B04F-07B63922C56C%7D&file=WAM.troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "FlightPlanning_JetPlan_WAM_TriageDocument.docx",
        type: "Main Source — JetPlan / WAM Triage (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Main Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BF0F37D42-C602-41A7-AA73-9F3AF09FE00D%7D&file=FlightPlanning_JetPlan_WAM_TriageDocument.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "AircraftPerformanceData_Triage_Troubleshooting.docx",
        type: "Main Source — Aircraft Performance Triage (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Main Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BC758E56D-3E63-4E0C-BB72-B98EEDED3BA0%7D&file=AircraftPerformanceData_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "MELService_Triage_Troubleshooting.docx",
        type: "Additional Source — MEL Service Triage (Word)",
        owner: "ITS COG M&E App Support",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BFE7BC914-ED66-41BA-99E2-704E2D344459%7D&file=MELService_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "WAM Error Please try again. If the issue persists report to application support team..docx",
        type: "Additional Source — Single-User WAM Error Guide (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B7BC9A263-7A94-49B7-AF49-FFE7FF6BBB7D%7D&file=WAM%20Error%20Please%20try%20again.%20If%20the%20issue%20persists%20report%20to%20application%20support%20team..docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Weather_System_Summary.docx",
        type: "Additional Source — Weather System Summary (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B3DCD1721-BA2E-4F47-838A-3C37820DC927%7D&file=Weather_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ITSOperationsRunbook-WorkBench2.0.docx",
        type: "Additional Source — Workbench 2.0 Runbook (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BCFDCDE00-B7D3-46A1-BBAB-16D3A29B7FD3%7D&file=ITSOperationsRunbook-WorkBench2.0.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARS_System_Summary.docx",
        type: "Additional Source — ACARS System Summary (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BE5D614AD-8759-464D-ABD0-0B87929F4568%7D&file=ACARS_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "RRT0-2025-12-26-01-WAM is down facing informix DBA (OneNote)",
        type: "Additional Source — Rapid Response Tier 0 (OneNote)",
        owner: "Rapid Response Tier 0 / Informix DBA",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/RapidResponseTier0-2026/_layouts/15/Doc.aspx?action=edit&mobileredirect=true&wdorigin=Sharepoint&DefaultItemOpen=1&sourcedoc=%7Baa538122-0d0b-4713-aa06-83613809aaf0%7D"
      },
      {
        title: "PilotBriefing legacy support (ADO Work Item 1392599)",
        type: "Additional Source — ADO Work Item",
        owner: "ITS Flight Operations",
        updated: "Additional Source",
        url: "https://dev.azure.com/itsals/8a8c8ebe-3927-41cd-a3a1-0caec270008a/_workitems/edit/1392599"
      }
    ]
  },
  jetplan: {
    id: "jetplan",
    name: "JetPlan (Jeppesen Flight Planning engine)",
    breadcrumbTrail: ["Ground Stop Applications", "JetPlan", "Impact Details"],
    pageTitle:
      "JetPlan (Jeppesen Flight Planning engine) – Impact Details",
    pageSubtitle:
      "JetPlan is the engine that calculates every AS and QX flight plan. If it goes down, WAM can't produce flight plans or releases, ATC filing stops, and flights can't be dispatched. That is why it is on the Ground Stop list.",
    applicationsTabTitle: "JetPlan (Jeppesen Flight Planning engine)",
    applicationsTabSubheading: "Applications & Systems (JetPlan Components)",
    applicationsTabSubtitle:
      "JetPlan is Jeppesen's flight planning engine (also called Flight Plan, Jepp JetPlan, BCJPlan). Alaska hosts it in-house, and WAM sends it requests through FlightPlanSvc. Issues require an RRT0 (Tier 0 rapid response) right away.",
    applicationsCardSubtitle:
      "Components that make up JetPlan (JetPlan Engine (JPE), JetPlan Weather (ingestMTDD / forbind), Tomcat (LJPDC) / JBoss adaptor, and FlightPlanSvc).",
    dependenciesTabTitle:
      "JetPlan (Jeppesen Flight Planning engine) – Dependencies Architecture",
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
        "Criticality: Ground Stop. Issues require an RRT0 (Tier 0 rapid response) right away — 24/7, critical to operations",
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
        subName: "(IGQprJPLANin01 / TUKvvJPLANin01 — Linux Containers)",
        appTabSubName: "(IGQprJPLANin01 / TUKvvJPLANin01 — Linux Containers)",
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
        subName: "(SEAVVAPP22 / TUKVVAPP22 — Hot/Hot)",
        appTabSubName: "(SEAVVAPP22 / TUKVVAPP22 — Hot/Hot)",
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
      accountManager: "(Add Account Manager)",
      namedEscalationContact:
        "Jeppesen Digital Support Operations Center (DSOC): 1-800-JETPLAN (538-7526) • Server help: 1-303-328-4585",
      supportHours: "24/7, critical to operations",
      escalation:
        "Vendor Contacts:\n• Jeppesen Sev 1: 1-800-732-2800, account number 83491\n• Jeppesen general: 1-800-375-4973\n• Jeppesen server help: 1-303-328-4585\n• Email: OpsSupport@jeppesen.com\n• Jeppesen Digital Support Operations Center (DSOC): 1-800-JETPLAN (538-7526)\n• Account Manager: (Add Account Manager)\n\nCommunication Guidelines:\n• The business focal follows up with Jeppesen and escalates.\n• When escalating, give: which application (WAM or Flight Planning), the flight, tail and RC numbers, how many users are affected, and the weather type if it's a weather issue.\n• Forward critical Jeppesen alerts directly to OpsSupport@jeppesen.com.\n• Raise an RRT0 right away for any JetPlan issue.",
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
          description: "(Add Sev 1/Sev 2 response times and update cadence)",
          target: "(Add Sev 1/Sev 2 response times and update cadence)",
          value: "(Add Sev 1/Sev 2 response times and update cadence)"
        },
        {
          label: "Vendor response SLA",
          priority: "Vendor response SLA",
          level: "Jeppesen SLA",
          description: "(Add Jeppesen response SLA)",
          target: "(Add Jeppesen response SLA)",
          value: "(Add Jeppesen response SLA)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "ITS COG Flight Operations. ITS System Owner: Ryan Wilkins",
      itsTeamNote:
        "Technical Owners: Ryan Wilkins, Adele Lunde • On-Call: ITS COG Flight Operations",
      applicationOwner: "Ryan Wilkins (ITS System Owner) • Technical Owners: Ryan Wilkins, Adele Lunde",
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
        type: "Main Source — JetPlan & WAM Triage (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Main Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BF0F37D42-C602-41A7-AA73-9F3AF09FE00D%7D&file=FlightPlanning_JetPlan_WAM_TriageDocument.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Flight_Planning_System_Summary.docx",
        type: "Main Source — System Summary (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Main Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B235791B5-2AC8-4E5B-AF7E-F5DCB33C256C%7D&file=Flight_Planning_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Flight Planning System Summary.docx",
        type: "Main Source — ITS Knowledge Management (Word)",
        owner: "ITS Knowledge Management / ITS COG Flight Operations",
        updated: "Main Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B699F4E53-05D1-46F7-BC0B-DDE61D08A91E%7D&file=Flight%20Planning%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "FlightPlanSvc_Runbook.pdf",
        type: "Main Source — FlightPlanSvc Runbook (PDF)",
        owner: "ITS Flight Ops Runbooks (IOC)",
        updated: "Main Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/ITS%20Flight%20Ops%20Runbooks%20(IOC)/FlightPlanSvc_Runbook.pdf?web=1"
      },
      {
        title: "JetPlan_DRPlan.xlsx",
        type: "Additional Source — JetPlan DR Plan (Excel)",
        owner: "ITS COG Flight Operations",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B3960049C-C827-4F38-A1F6-649E183E60EE%7D&file=JetPlan_DRPlan.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "User Gets FRONTERR PERFORMANCE SERVER ERROR -1.docx",
        type: "Additional Source — FRONTERR Troubleshooting (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B852618A7-D2AA-4D06-ABFC-79BFE7867DA0%7D&file=User%20Gets%20FRONTERR%20PERFORMANCE%20SERVER%20ERROR%20-1.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Service-Offering-Application-Metadata mapping 10-12-2026.xlsx",
        type: "Additional Source — Service Offering Metadata (Excel)",
        owner: "ITS Production Operations",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7BCCA8403B-C46B-47D8-8D7D-58429E9875D6%7D&file=Service-Offering-Application-Metadata%20mapping%2010-12-2026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "ACARS_Physical_View.pdf",
        type: "Additional Source — ACARS Physical View (PDF)",
        owner: "ITS COG Flight Operations",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/ACARS%20(AS)/ACARS_Physical_View.pdf?web=1"
      },
      {
        title: "FlywaysMessaging_FlywaysOptimization_Triage_Troubleshooting.docx",
        type: "Additional Source — Flyways Optimization Triage (Word)",
        owner: "ITS COG Flight Operations",
        updated: "Additional Source",
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
    pageTitle: "S4A SmartSuite – Application Impact Details",
    pageSubtitle:
      "Also called Smart4Aviation, SmartLoad, SmartComm, Weight and Balance. Tier 1 and Ground Stop eligible. View S4A components, dependencies, business impact, workarounds, contacts, SLAs and related documentation.",
    applicationsTabTitle: "S4A SmartSuite (Smart4Aviation / SmartLoad / SmartComm / Weight and Balance)",
    applicationsTabSubheading: "Applications & Systems (S4A components)",
    applicationsTabSubtitle:
      "S4A pulls in flight, passenger, bag, cargo, crew, fuel and MEL data to automate weight and balance. It checks the actual load and sends the Load Closeout to the aircraft. If S4A is down, aircraft can't be safely prepared to depart on time.",
    applicationsCardSubtitle:
      "This list shows the core S4A components, their business functions, operational impact if down, key dependencies, and primary technical owners.",
    dependenciesTabTitle: "S4A SmartSuite – Dependencies Architecture",
    dependenciesTabSubtitle:
      "Upstream data feeds, downstream consumers, and hosting & network infrastructure for S4A SmartSuite.",
    businessImpactTabTitle: "S4A SmartSuite – Business Impact & Workarounds",
    businessImpactTabSubtitle:
      "Operational consequences, documented workarounds, and incident validation steps for S4A outages or degraded service.",
    contactsTabTitle: "S4A SmartSuite – Contacts & SLAs",
    contactsTabSubtitle:
      "Escalation points, communication rules, and response targets for S4A incidents.",
    relatedDocumentsTabTitle: "S4A SmartSuite – Related Documents",
    relatedDocumentsTabSubtitle:
      "Runbooks, triage guides, architecture diagrams, and operational documentation for S4A SmartSuite.",
    company: "Smart4Aviation (based in Poland). Vendor application on in-house Linux servers",
    logo: "public/vendors/smart4aviation.jpg",
    status: "Active",
    tier: "Tier 1 — Ground Stop Eligible",
    criticality:
      "Tier 1 and Ground Stop eligible. Impact is high if fully down, medium if only some services or data types are affected",
    criticalityBannerTitle:
      "Criticality: Tier 1 and Ground Stop eligible — Impact is high if fully down, medium if only some services or data types are affected",
    criticalityHint:
      "S4A pulls in flight, passenger, bag, cargo, crew, fuel and MEL data to automate weight and balance. It checks the actual load and sends the Load Closeout to the aircraft. If S4A is down, aircraft can't be safely prepared to depart on time. Web App URL: https://smartsuite.insideaag.com/",
    impactAlert:
      "S4A pulls in flight, passenger, bag, cargo, crew, fuel and MEL data to automate weight and balance. It checks the actual load and sends the Load Closeout to the aircraft. If S4A is down, aircraft can't be safely prepared to depart on time.",
    website: "https://smartsuite.insideaag.com/",
    supportPortalUrl: "https://smartsuite.insideaag.com/",
    category: "Airport Ops / Flight Ops: weight and balance and load planning",
    itsTeam:
      "ITS Flight Operations. System Owner: Ryan Wilkins. Servers supported by the ITS JCTE System Admins",
    primaryItsOwner: "Ryan Wilkins (ITS Flight Operations)",
    supportPhone: "+48 12 379 3737",
    supportPhoneNote: "Smart4Aviation Support (24x7) — email the support desk first; call if urgent",
    secondaryPhone: "1-877-238-1077",
    secondaryPhoneNote: "Alaska Service Desk",
    supportEmail: "support@smart4aviation.aero",
    supportEmailNote: "Smart4Aviation Support (email details and logs first, then call)",
    supportHours: "24x7",
    escalationText:
      "Email the support desk first (support@smart4aviation.aero). If there's no response or it's urgent, call the help line (+48 12 379 3737)",
    summaryMetrics: {
      totalSystems: 5,
      tier0Count: 5,
      tier1Count: 0,
      upstreamDeps: 4,
      downstreamDeps: 7
    },
    impactedSystems: [
      {
        name: "SmartLoad",
        category: "Load planning, Load Closeout",
        criticality: "Tier 1 / Ground Stop",
        purpose: "Plans the load and calculates weight and balance",
        shortDescription: "Plans the load and calculates weight and balance",
        businessFunction: "Load planning, Load Closeout",
        impactIfDown: "CLP can't produce Load Closeouts",
        keyDependencies: "MQ S4AP, PostgreSQL",
        technicalOwner: "ITS Apps-Airline Ops",
        status: "Operational"
      },
      {
        name: "SmartComm",
        category: "Communications",
        criticality: "Tier 1 / Ground Stop",
        purpose: "Alerts, messaging and message templates",
        shortDescription: "Alerts, messaging and message templates",
        businessFunction: "Communications",
        impactIfDown: "No alerts or messages to stations or aircraft",
        keyDependencies: "MQ, TIBCO, ACARS",
        technicalOwner: "ITS Apps-Airline Ops",
        status: "Operational"
      },
      {
        name: "SmartOps",
        category: "Flight overview",
        criticality: "Tier 1 / Ground Stop",
        purpose: "Gantt view of flight schedules and tail numbers",
        shortDescription: "Gantt view of flight schedules and tail numbers",
        businessFunction: "Flight overview",
        impactIfDown: "No flight view for CLP",
        keyDependencies: "Flight event feeds",
        technicalOwner: "ITS Apps-Airline Ops",
        status: "Operational"
      },
      {
        name: "App / MQ / CS servers",
        category: "Hosting",
        criticality: "Tier 1 / Ground Stop",
        purpose: "Linux servers in IGQ and SE4 (app, MQ and CS tiers)",
        shortDescription: "Linux servers in IGQ and SE4 (app, MQ and CS tiers)",
        businessFunction: "Hosting",
        impactIfDown: "Whole system down",
        keyDependencies: "JBoss, PostgreSQL",
        technicalOwner: "ITS JCTE System Admins",
        status: "Operational"
      },
      {
        name: "PostgreSQL databases",
        category: "Data storage and reporting",
        criticality: "Tier 1 / Ground Stop",
        purpose: "s4a.wbpgdb.insideaag.com, plus reporting database SE4prS4Awbdb02",
        shortDescription: "s4a.wbpgdb.insideaag.com, plus reporting database SE4prS4Awbdb02",
        businessFunction: "Data storage and reporting",
        impactIfDown: "App fails, reporting fails",
        keyDependencies: "Database servers",
        technicalOwner: "ITS JCTE System Admins",
        status: "Operational"
      }
    ],
    upstreamDependencies: [
      {
        name: "MQ S4AP inbound queues: Flight, PAX, Baggage, Cargo, MEL, Crew, Fuel, EXT_ACARS, Assignment, FP_JEPPESEN, COMM_MESSAGE, XML_COMM",
        type: "IBM MQ Inbound Queues (S4AP)",
        protocol: "IBM MQ (S4AP)",
        impactIfUnavailable:
          "Inbound flight, passenger, baggage, cargo, MEL, crew, fuel, ACARS, assignment, flight plan, or comm messages do not reach S4A."
      },
      {
        name: "Aircom (ACARS ground), RSA Mobile, iCargo",
        type: "Aircraft Comms, Ramp & Cargo Systems",
        protocol: "MQ / ACARS / Data Feeds",
        impactIfUnavailable:
          "ACARS ground messages, ramp baggage/loading updates, and cargo weights do not flow into S4A."
      },
      {
        name: "Sabre (reservations and Flight Record Data), Visops, Crew Management, Dispatch (fuel requirements), M&E (MEL through MtxEventPublisher)",
        type: "Core Airline Operations Feeds",
        protocol: "MQ / TIBCO / MtxEventPublisher",
        impactIfUnavailable:
          "Missing passenger counts, flight schedule updates, crew data, fuel requirements, or MEL weight/balance restrictions."
      },
      {
        name: "JetPlan / Jeppesen flight plans",
        type: "Flight Planning Feed",
        protocol: "FP_JEPPESEN Queue",
        impactIfUnavailable:
          "Planned flight weights, fuel, and routing data from JetPlan do not populate automatically in S4A."
      }
    ],
    downstreamConsumers: [
      {
        name: "ACARS / aircraft: Load Closeout and fuel slip, through FO.FLIGHT.LOAD.ACARS.UPLINK",
        type: "Aircraft Uplink",
        criticality: "Ground Stop",
        impactIfVendorFails:
          "No automated Load Closeout or fuel slip sent to the aircraft; stations must print final numbers and read them to the crew."
      },
      {
        name: "FAA Cert database (FINAL_LOAD_OUTBOUND)",
        type: "Regulatory / Final Load Feed",
        criticality: "High",
        impactIfVendorFails:
          "Final load closeout records do not flow to the FAA Cert database (FAACertWS)."
      },
      {
        name: "Estimated zero fuel weight (EZFW) / ZeroFuelWeightWS (fltops)",
        type: "Flight Ops Weight Feed",
        criticality: "High",
        impactIfVendorFails:
          "Estimated zero fuel weight (EZFW) updates are not sent to Flight Ops (ZeroFuelWeightWS)."
      },
      {
        name: "AirClic / ULD Planeside tool (COMM_ALERT_OUTBOUND)",
        type: "Ramp / Planeside Alerts",
        criticality: "High",
        impactIfVendorFails:
          "Outbound load alerts and communications do not reach AirClic / ULD Planeside tools."
      },
      {
        name: "Fuel vendors (fuel slips sent by email through outbound.alaskaair.com)",
        type: "Fuel Vendor Notification",
        criticality: "High",
        impactIfVendorFails:
          "Automated fuel slips are not emailed to fuel vendors through outbound.alaskaair.com."
      },
      {
        name: "Countdown and Ad-Hoc data feeds, PST, Turn Timeline",
        type: "Operational Dashboards & Feeds",
        criticality: "Medium",
        impactIfVendorFails:
          "Downstream operational tracking tools (Countdown, Ad-Hoc data feeds, PST, Turn Timeline) lack load closeout updates."
      },
      {
        name: "CLP, stations and ramp agents",
        type: "Operational End Users",
        criticality: "Ground Stop",
        impactIfVendorFails:
          "Centralized Load Planners (CLP), station agents, and ramp agents cannot automate load planning or closeout."
      }
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
            "IGQprS4Awbap01–03 (app), IGQprS4Awbmq01–02 (MQ), IGQprS4Awbcs01–03 (CS), IGQprS4Awbdb01 (database)",
          owner: "ITS JCTE System Admins",
          impact: "Hosts primary IGQ application, MQ, CS, and database tiers."
        },
        {
          id: "s4a-inf-2",
          component: "SE4 servers",
          description:
            "SE4prS4Awbapp01–03, SE4prS4Amqwb01–02, SE4prS4Awbcs01–03, SE4prS4Awbdb01, plus reporting database SE4prS4Awbdb02",
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
          description: "(Add firewall details)",
          owner: "ITS Network",
          impact: "(Add firewall details)"
        }
      ]
    },
    keyTakeaways:
      "S4A pulls in flight, passenger, bag, cargo, crew, fuel and MEL data to automate weight and balance. It checks the actual load and sends the Load Closeout to the aircraft. If S4A is down, aircraft can't be safely prepared to depart on time.",
    typicalBusinessImpact: [
      "No automated Load Closeouts or final numbers to aircraft",
      "Flight delays. In INC3406923, Flight 305 SEA-MIA was delayed 7–10 minutes because of a bag count issue",
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
      accountManager: "(Add Account Manager)",
      namedEscalationContact:
        "Escalation: email the support desk first. If there's no response or it's urgent, call the help line (+48 12 379 3737)",
      supportHours: "24x7",
      escalation:
        "Vendor Contacts:\n• Smart4Aviation Support: +48 12 379 3737 / support@smart4aviation.aero\n• Escalation: email the support desk first. If there's no response or it's urgent, call the help line\n• Account Manager: (Add Account Manager)\n\nCommunication Guidelines:\n• When escalating, give: user name, role, flight number, flight date, departure city, and a description of the issue.\n• Page or call each on-call contact twice within 90 seconds. If there's no response in 5 minutes, escalate to the next tier.\n• P2: create a Teams channel named with the MI number. RRT0: name the channel RRT0YYYYMMDD0X – Title.\n• For vendor issues, email the details and logs first, then call the help desk.",
      communicationGuidelines: [
        "When escalating, give: user name, role, flight number, flight date, departure city, and a description of the issue.",
        "Page or call each on-call contact twice within 90 seconds. If there's no response in 5 minutes, escalate to the next tier.",
        "P2: create a Teams channel named with the MI number. RRT0: name the channel RRT0YYYYMMDD0X – Title.",
        "For vendor issues, email the details and logs first, then call the help desk."
      ],
      responseSlas: [
        {
          label: "P1 updates",
          priority: "P1 updates",
          level: "Leadership Engaged",
          description:
            "every 15–30 minutes (the runbook marks this as still to be confirmed). Leadership must be engaged for P1",
          target: "Every 15–30 minutes (TBC)",
          value:
            "every 15–30 minutes (the runbook marks this as still to be confirmed). Leadership must be engaged for P1"
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
          description: "(Add Smart4Aviation response SLA)",
          target: "(Add Smart4Aviation response SLA)",
          value: "(Add Smart4Aviation response SLA)"
        }
      ]
    },
    internalContacts: {
      itsTeam:
        "ITS Flight Operations. System Owner: Ryan Wilkins. Servers supported by the ITS JCTE System Admins",
      itsTeamNote:
        "Technical Owners: Ryan Wilkins, Adele Lunde • System Admin: ITS JCTE System Admins on-call, 24/7",
      applicationOwner:
        "ITS System Owner: Ryan Wilkins (ITS Flight Operations) • Technical Owners: Ryan Wilkins, Adele Lunde",
      onCallSupport:
        "Application Admin: Arun Sharma, Ryan Wilkins (ITS Apps-Airline Ops), 07:00–15:30, with on-call 24/7",
      systemAdministration: "ITS JCTE System Admins on-call, 24/7",
      businessOwner: "(Add Business Owner). The runbook lists N/A",
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
        duration: "7–10 min flight delay",
        severity: "RRT0 / Sev 1",
        title: "Middleware change caused missing counts (RRT0); Flight 305 SEA-MIA delayed (INC3406923)",
        rootCause:
          "In INC3406923, Flight 305 SEA-MIA was delayed 7–10 minutes because of a bag count issue. Missing passenger or bag counts force manual workarounds at closeout; RRT0 on 2026-01-21 was caused by a middleware change.",
        resolution:
          "Roll back the middleware change request (CR) and use manual closeout workarounds."
      }
    ],
    relatedDocuments: [
      {
        title: "ITS Operations Runbook_S4A_SmartSuite_v1.1_0406_2026.docx",
        type: "Primary Source — S4A SmartSuite Operations Runbook (Word)",
        owner: "ITS Flight Operations",
        updated: "2026-04-06 (v1.1)",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B97741431-AD50-495E-BF14-0B66DDF51F08%7D&file=ITS%20Operations%20Runbook_S4A_SmartSuite_v1.1_0406_2026.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "S4A_Triage_Troubleshooting.docx",
        type: "Primary Source — S4A Triage & Troubleshooting (Word)",
        owner: "ITS Flight Operations",
        updated: "Current",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B06828A43-BB4C-42CD-870E-C2C4C607C9EC%7D&file=S4A_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "S4A (Smart4Aviation) IT Support Documentation.docx",
        type: "Primary Source — S4A IT Support Documentation (Word)",
        owner: "ITS Knowledge Management",
        updated: "Current",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BC715869B-33B8-41C2-8C4B-B84C73EAEB6C%7D&file=S4A%20(Smart4Aviation)%20IT%20Support%20Documentation.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "S4A (Smart4Aviation) System Summary.docx",
        type: "Primary Source — S4A System Summary (Word)",
        owner: "ITS Flight Operations",
        updated: "Current",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B5DFC0539-A7FA-4D53-AF6D-CDC9720C0F9E%7D&file=S4A%20(Smart4Aviation)%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Monitoring alert for Jboss services for S4A.docx",
        type: "Primary Source — JBoss Services Monitoring Alert for S4A (Word)",
        owner: "ITS Knowledge Management",
        updated: "Current",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BBBAF6694-880E-4D77-8F81-ABC9B9C07818%7D&file=Monitoring%20alert%20for%20Jboss%20services%20for%20S4A.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "S4A System Logical_Orig.pdf",
        type: "Primary Source — S4A System Logical Diagram (PDF)",
        owner: "ITS Flight Operations",
        updated: "Current",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/Aircraft%20Weight%20and%20Balance/Weight%20and%20Balance%20-%20S4A%20Additional%20Docs/Logical%20Diagram/S4A%20System%20Logical_Orig.pdf?web=1"
      },
      {
        title: "MtxEventPublisher Service (M&E) System Summary.docx",
        type: "Additional Source — MtxEventPublisher Service System Summary (Word)",
        owner: "ITS Maintenance & Engineering",
        updated: "Additional Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BC6CC21A6-60FF-425F-8CDD-23CB5752EA51%7D&file=MtxEventPublisher%20Service%20(M%26E)%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Executive Summary of Incidents 2025-12 to Current Date.xlsx",
        type: "Additional Source — Executive Summary of Incidents (Excel)",
        owner: "ITS Production Operations",
        updated: "2025-12 to Current",
        url: "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7BE5D240DC-3123-4D8D-8A59-CF1533D32C5B%7D&file=Executive%20Summary%20of%20Incidents%202025-12%20to%20Current%20Date.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
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
  },
  alvaria: {
    id: "alvaria",
    name: "Alvaria",
    breadcrumbTrail: [
      "Vendors",
      "Call Centers / Workforce Management",
      "Alvaria"
    ],
    pageTitle: "Alvaria – Vendor Impact Details",
    pageSubtitle:
      "View applications, systems, dependencies and business impact if Alvaria experiences an outage or degraded service.",
    applicationsTabTitle: "Applications & Systems Using Alvaria",
    applicationsTabSubheading:
      "Overview of all Alaska Airlines Contact Center workforce-management and employee self-service applications that depend on Alvaria.",
    applicationsTabSubtitle:
      "Detailed breakdown of the 2 documented applications (Alvaria Workforce Management / Aspect WFM and Empower), primary capabilities, direct dependencies, and outage impact.",
    applicationsCardSubtitle:
      "2 documented applications supported by Call Center Technology",
    dependenciesTabTitle: "Alvaria – Dependencies",
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
        "Contact Center agents may be unable to view or modify schedules or pick up/trade shifts, and supervisors cannot properly administer overtime or release agents early—potentially affecting Contact Center staffing and revenue. Remote Desktop access used by Contact Center Operations can also fail independently even when the primary agent web page (https://alaska.via.aspect-cloud.net/WFO) is functional.",
      message:
        "Contact Center agents may be unable to view or modify schedules or pick up/trade shifts, and supervisors cannot properly administer overtime or release agents early—potentially affecting Contact Center staffing and revenue. Remote Desktop access used by Contact Center Operations can also fail independently even when the primary agent web page (https://alaska.via.aspect-cloud.net/WFO) is functional."
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
    pageTitle: "Avtec – Vendor Impact Details",
    pageSubtitle:
      "View applications, systems, dependencies and business impact if Avtec experiences an outage or degraded service.",
    applicationsTabTitle: "Avtec",
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle:
      "View all Alaska applications, dispatch hardware, and operational consumer groups that depend on Avtec.",
    dependenciesTabTitle: "Avtec – Dependencies",
    dependenciesTabSubtitle:
      "View upstream and downstream dependencies, integrations, and infrastructure components for Avtec.",
    company: "Avtec",
    website: "(Add Website/Support Portal URL)",
    category: "Flight Operations / Dispatch Communications / Radio & Telephony",
    itsTeam: "UC Team (Unified Communications)",
    logo: "public/vendors/avtec.jpg",
    status: "Active",
    lastUpdated: "Source-Verified Runbook",
    subtitle:
      "Flight Operations / Dispatch Communications / Radio & Telephony (Avtec Dispatch Radio System / Avtec Scout · Critical System · 24x7)",
    impactCallout: {
      level: "Critical",
      message:
        "Critical System — Avtec is a critical Flight Operations communications system supporting Dispatch and operational groups (AS & QX Dispatch, Bridge, CLP, Maintenance Control) through phone lines, G/G and A/G radios, intercoms, radio remotes, transfers, and broadcasts; unavailability can impede communication with stations/agents (e.g., gate changes and aircraft coordination) and cause potential flight delays. IMPORTANT OPERATIONAL TAKEAWAY: Do not immediately call Avtec for every Avtec issue — contact the UC Team first at 206-688-3800, option 1 (24x7), who determines whether vendor escalation is needed, and isolate CUCM/VPGate configuration and Hub/Lumen voice paths before classifying a broad failure as a vendor outage."
    },
    applicationsCardSubtitle:
      "Applications, dispatch hardware, and operational consumer groups supported by Avtec",
    impactSummary: {
      confirmed: 1,
      potential: 8,
      notImpacted: 0,
      underReview: 0
    },
    impactedSystems: [
      {
        id: "avtec-dispatch-radio-system",
        name: "Avtec Dispatch Radio System / Avtec Scout",
        subName: "(Critical System · AS & QX Dispatch, Bridge, CLP, Maintenance Control)",
        appTabSubName: "(Critical System · AS & QX Dispatch, Bridge, CLP, Maintenance Control)",
        description:
          "Avtec provides a dispatch communications solution supporting radio/LTE endpoints. The internal user guide describes Avtec Scout as purpose-built dispatch hardware supporting up to four radio or LTE endpoints. Operational Consumers validated in the DR plan: AS Dispatch, AS Bridge, AS CLP, AS Maintenance Control, QX Dispatch, QX Bridge, QX CLP, and QX Maintenance Control (explicitly testing inbound/outbound calling for AS and QX operational groups).",
        appTabDescription:
          "Avtec provides a dispatch communications solution supporting radio/LTE endpoints. The internal user guide describes Avtec Scout as purpose-built dispatch hardware supporting up to four radio or LTE endpoints. Operational Consumers validated in the DR plan: AS Dispatch, AS Bridge, AS CLP, AS Maintenance Control, QX Dispatch, QX Bridge, QX CLP, and QX Maintenance Control (explicitly testing inbound/outbound calling for AS and QX operational groups).",
        businessFunction:
          "Provides operational voice communications, including radio and telephone communications used by Flight Operations. It supports phone/radio endpoint selection, outbound calls, call transfer, forwarding, and radio-to-phone or radio-to-radio patching.",
        impact:
          "It is classified internally as a critical system, with possible flight delays.",
        dependencies:
          "Avtec consoles/endpoints, VPGates, phone lines, G/G radios, A/G radios, intercoms, radio remotes, network connectivity, and UC/voice infrastructure.",
        owner: "UC Team"
      }
    ],
    upstreamDependencies: [
      "Avtec VPGates: Provide endpoint handling/failover capability across primary SEA-side (SEACRAVTECOO01A–03B) and IGQ DR (IGQPRAVTEC01A–03B) servers.",
      "Voice / Call-Processing Infrastructure (Hub/Lumen & Data Center Path): Voice/call-processing infrastructure is a dependency. A recent incident (INC 3399523) was restored by manually moving voice traffic away from affected Hub/Lumen voice circuits to the Data Center call-processing path.",
      "CUCM (Cisco Unified Communications Manager): Involved in the Avtec telephony path. One PDX incident (INC 3340834) was associated with a PDX CUCM Subscriber re-IP, and another ticket's closure notes state that the PDX CUCM subscriber was removed from Avtec endpoints.",
      "VPGate Audio Service: Operationally significant service. After IP changes, restarting this service restored Avtec functionality during INC 3340834 before intermittent symptoms briefly recurred.",
      "Authentication — Standard RDP: Standard RDP is used for server access.",
      "Authentication — LDAP: LDAP authentication is used for programming from inside the Alaska network."
    ],
    downstreamConsumers: [
      "Endpoint Categories (5 DR Plan Categories): G/G radios, A/G radios, Phone lines, Intercoms, and Radio remotes.",
      "AS Operational Consumers (DR Validated): AS Dispatch, AS Bridge, AS CLP, and AS Maintenance Control (explicitly tested for console functionality and inbound/outbound calling).",
      "QX Operational Consumers (DR Validated): QX Dispatch, QX Bridge, QX CLP, and QX Maintenance Control (explicitly tested for console functionality and inbound/outbound calling).",
      "Operational Voice & Radio Functions Supported: Inbound calls, Outbound calls, Two-way radio transmission, AS/QX intercoms, Radio dial-up remotes, Calls transferred between consoles, AS Dispatch All Call, and AS Dispatch Broadcast."
    ],
    dependenciesTab: {
      overviewSubtitle:
        "Architecture view of Avtec VPGates, CUCM/voice call-processing paths, RDP/LDAP authentication, and downstream AS/QX Flight Operations radio/telephony consumers",
      diagramUpstream: [
        { id: "avtec-up-vpgate", label: "Avtec VPGates (SEA & IGQ Failover)", iconType: "server" },
        { id: "avtec-up-voice", label: "Voice / Call-Processing (Hub/Lumen & DC)", iconType: "cloud" },
        { id: "avtec-up-cucm", label: "CUCM Telephony Path", iconType: "server" },
        { id: "avtec-up-audio", label: "VPGate Audio Service", iconType: "shield" },
        { id: "avtec-up-auth", label: "Standard RDP & LDAP Auth", iconType: "shield" }
      ],
      diagramServices: [
        "Avtec Dispatch Radio System / Avtec Scout",
        "Phone/Radio Selection, Patching, Transfers & Broadcasts",
        "SEA VPGates (SEACRAVTECOO01A–03B) & IGQ VPGates (IGQPRAVTEC01A–03B)"
      ],
      diagramDownstream: [
        {
          id: "avtec-down-endpoints",
          label: "5 Endpoint Categories (G/G, A/G, Phone, Intercom, Remotes)",
          iconType: "layers"
        },
        {
          id: "avtec-down-as",
          label: "AS Dispatch, AS Bridge, AS CLP, AS Maintenance Control",
          iconType: "users"
        },
        {
          id: "avtec-down-qx",
          label: "QX Dispatch, QX Bridge, QX CLP, QX Maintenance Control",
          iconType: "users"
        },
        {
          id: "avtec-down-funcs",
          label: "Inbound/Outbound Calls, 2-Way Radio, All Call & Broadcast",
          iconType: "chart"
        }
      ],
      summaryStats: [
        { label: "Upstream Dependencies", count: 6, tone: "red" },
        { label: "Downstream Consumer Groups", count: 4, tone: "blue" },
        { label: "VPGate Servers (SEA + IGQ)", count: 12, tone: "purple" }
      ],
      keyTakeaways: [
        "Avtec is a critical Flight Operations communications system, not simply a desktop telephone application. It supports Dispatch and other operational groups through phone lines, ground/ground and air/ground radios, intercoms, radio remotes, transfers, broadcasts, and other operational voice functions.",
        "Loss or degradation can impede communication between operational personnel and stations/agents and has documented potential for flight delays.",
        "A PDX incident specifically documented potential flight delays because operators use Avtec to communicate gate changes and organize aircraft with agents.",
        "Important Operational Takeaway: For Production Operations, do not immediately call Avtec for every Avtec issue. The documented escalation path is to contact UC Team first at 206-688-3800 option 1, and UC determines whether Avtec vendor involvement is necessary.",
        "Broad Failure Isolation: A broad Avtec failure does not necessarily mean the Avtec vendor itself is down. Recent incidents show dependencies on CUCM/VPGate configuration and Hub/Lumen voice paths, so those internal/infrastructure layers should be isolated before classifying the problem as a vendor outage."
      ],
      upstreamTable: [
        {
          id: "avtec-uptbl-1",
          name: "Avtec VPGates",
          subName: "(SEA Primary SEACRAVTECOO01A–03B / IGQ DR IGQPRAVTEC01A–03B)",
          description:
            "Avtec VPGates provide endpoint handling/failover capability across the 5 endpoint categories (G/G radios, A/G radios, Phone lines, Intercoms, Radio remotes).",
          type: "Endpoint Handling & Failover",
          typeBadge: "purple",
          impact: "Loss of endpoint registration or audio routing; requires failover of Avtec endpoints to IGQ VPGates."
        },
        {
          id: "avtec-uptbl-2",
          name: "Voice / Call-Processing Infrastructure",
          subName: "(Hub/Lumen Voice Circuits & Data Center Call-Processing Path)",
          description:
            "Voice/call-processing infrastructure is a dependency. A recent incident (INC 3399523) was restored by manually moving voice traffic away from affected Hub/Lumen voice circuits to the Data Center call-processing path.",
          type: "Voice & Circuit Infrastructure",
          typeBadge: "orange",
          impact: "Degraded or failed inbound/outbound voice calls across HUB/NOC until traffic is failed over to the Data Center call-processing path."
        },
        {
          id: "avtec-uptbl-3",
          name: "CUCM (Cisco Unified Communications Manager)",
          subName: "(Avtec Telephony Path)",
          description:
            "CUCM is involved in the Avtec telephony path. One PDX incident (INC 3340834) was associated with a PDX CUCM Subscriber re-IP, and another ticket's closure notes state that the PDX CUCM subscriber was removed from Avtec endpoints.",
          type: "Telephony Call Control",
          typeBadge: "blue",
          impact: "CUCM subscriber IP or configuration changes can disrupt Avtec phone line registration and call handling."
        },
        {
          id: "avtec-uptbl-4",
          name: "VPGate Audio Service",
          subName: "(Windows / VPGate Server Audio Service)",
          description:
            "VPGate Audio Service is operationally significant. After IP changes, restarting this service restored Avtec functionality during INC 3340834 before intermittent symptoms briefly recurred.",
          type: "Core Application Service",
          typeBadge: "purple",
          impact: "No audio or failed call completion on Avtec consoles until the VPGate Audio Service is restarted."
        },
        {
          id: "avtec-uptbl-5",
          name: "Standard RDP",
          subName: "(Server Access Authentication)",
          description: "Standard RDP is used for server access to Avtec / VPGate infrastructure.",
          type: "Authentication",
          typeBadge: "blue",
          impact: "Administrative and DR server access requires Standard RDP."
        },
        {
          id: "avtec-uptbl-6",
          name: "LDAP Authentication",
          subName: "(Internal Alaska Network Programming)",
          description: "LDAP authentication is used for programming from inside the Alaska network.",
          type: "Authentication",
          typeBadge: "blue",
          impact: "Unable to authenticate for Avtec system programming from inside the Alaska network."
        }
      ],
      downstreamTable: [
        {
          id: "avtec-dwntbl-1",
          name: "Five Endpoint Categories (DR Plan)",
          subName: "(G/G Radios, A/G Radios, Phone Lines, Intercoms, Radio Remotes)",
          description:
            "The DR plan identifies five endpoint categories managed by Avtec: G/G radios, A/G radios, Phone lines, Intercoms, and Radio remotes.",
          dataFlow: "Real-Time Voice & Radio Audio / Signaling",
          impact: "Radio/phone lines may appear greyed out, offline, or unavailable; loss of handset/headset or speaker audio."
        },
        {
          id: "avtec-dwntbl-2",
          name: "AS Operational Consumers",
          subName: "(AS Dispatch, AS Bridge, AS CLP, AS Maintenance Control)",
          description:
            "Operational consumers explicitly validated in DR testing for Alaska Airlines (AS), including console functionality and inbound/outbound calling.",
          dataFlow: "Dispatch Voice, Radio & Telephone Patching",
          impact: "Impedes dispatch, bridge, CLP, and maintenance control communications; potential flight delays."
        },
        {
          id: "avtec-dwntbl-3",
          name: "QX Operational Consumers",
          subName: "(QX Dispatch, QX Bridge, QX CLP, QX Maintenance Control)",
          description:
            "Operational consumers explicitly validated in DR testing for Horizon Air (QX), including console functionality and inbound/outbound calling.",
          dataFlow: "Dispatch Voice, Radio & Telephone Patching",
          impact: "Impedes QX dispatch, bridge, CLP, and maintenance control communications; potential flight delays."
        },
        {
          id: "avtec-dwntbl-4",
          name: "Supported Operational Voice & Dispatch Functions",
          subName: "(Calls, Two-Way Radio, Intercoms, Remotes, Transfers, All Call, Broadcast)",
          description:
            "Avtec functionality supports Inbound calls, Outbound calls, Two-way radio transmission, AS/QX intercoms, Radio dial-up remotes, Calls transferred between consoles, AS Dispatch All Call, and AS Dispatch Broadcast.",
          dataFlow: "End-to-End Operational Voice & Broadcasts",
          impact: "Operators may have difficulty communicating gate changes, coordinating aircraft with agents, or issuing dispatch broadcasts."
        }
      ],
      infrastructureTable: [
        {
          id: "avtec-infra-1",
          category: "VPGate Servers (Primary / SEA-Side Documented Systems)",
          iconType: "server",
          details:
            "SEACRAVTECOO01A, SEACRAVTECOO01B, SEACRAVTECOO02A, SEACRAVTECOO02B, SEACRAVTECOO03A, SEACRAVTECOO03B."
        },
        {
          id: "avtec-infra-2",
          category: "VPGate Servers (IGQ Systems / DR Failover)",
          iconType: "server",
          details:
            "IGQPRAVTEC01A, IGQPRAVTEC01B, IGQPRAVTEC02A, IGQPRAVTEC02B, IGQPRAVTEC03A, IGQPRAVTEC03B."
        },
        {
          id: "avtec-infra-3",
          category: "Critical Network Dependency",
          iconType: "globe",
          details:
            "The DR document explicitly identifies connectivity between IGQ and HUB/PUY as a critical operational dependency."
        },
        {
          id: "avtec-infra-4",
          category: "Authentication (Server Access & Programming)",
          iconType: "shield",
          details:
            "Standard RDP is used for server access. LDAP authentication is used for programming from inside the Alaska network."
        },
        {
          id: "avtec-infra-5",
          category: "Monitoring (Zenoss Real Time Services)",
          iconType: "layers",
          details:
            "Zenoss Real Time Services monitoring is part of the DR procedure. It is disabled for the primary during failover preparation and re-enabled following recovery."
        },
        {
          id: "avtec-infra-6",
          category: "Database Dependency",
          iconType: "database",
          details: "(Add Database Dependencies)"
        },
        {
          id: "avtec-infra-7",
          category: "Firewall Dependencies",
          iconType: "shield",
          details: "(Add Firewall Dependencies)"
        }
      ]
    },
    typicalBusinessImpact: [
      "Unable to make outbound calls.",
      "Unable to answer calls reliably or requiring multiple attempts.",
      "Radio/phone lines may appear greyed out, offline, or unavailable.",
      "No audio transmitted or received through handset/headset.",
      "No audio from Avtec speakers.",
      "Operational teams may have difficulty communicating gate changes and coordinating aircraft with agents.",
      "Potential flight delays."
    ],
    knownWorkarounds: [
      "Personal phones have been used when Avtec outbound calls were unavailable.",
      "Radios can provide limited backup communication.",
      "Microsoft Teams has also been used operationally as a workaround for outbound communication.",
      "For a single Avtec endpoint/line stuck IN USE or OFFLINE, calls to the impacted line automatically route to the Rollover/Backup line.",
      "The DR architecture supports moving Avtec endpoints to IGQ VPGates.",
      "After recovery, if one of the five endpoint groups fails, the DR plan says that specific group can be moved back."
    ],
    validationChecklist: [
      "1. Determine scope: Ask whether the problem affects one workstation/endpoint, one line, multiple endpoints, entire station/location, or AS, QX, or both. For multiple endpoint failures, document all impacted endpoint names and contact UC On-Call at 206-688-3800.",
      "2. Determine failing functionality: Check separately inbound phone calls, outbound phone calls, radio transmission/receive, intercom, transfers, audio output/input, and whether endpoints show offline/grey/in-use (mirrors the validation categories in the DR plan).",
      "3. For handset/headset audio problems: Disconnect/reconnect handset or headset, test using known-good hardware, reset the Avtec Jackbox by disconnecting USB, waiting 5 seconds, then reconnecting, and reboot the workstation if necessary.",
      "4. For speaker problems: Check speaker volume, check Windows audio/mute, reset USB speaker, verify there are no unauthorized/additional USB audio devices, confirm output is Realtek Audio, and confirm Intel Display Audio is disabled.",
      "5. Check whether another phone path works: During the PDX incident, the team compared Avtec behavior with a supervisor desk phone to help isolate the issue.",
      "6. Check UC/voice infrastructure: If multiple endpoints are affected, engage the UC Team. Check VPGate/voice infrastructure and relevant CUCM changes. A documented outage followed a PDX CUCM Subscriber re-IP.",
      "7. Check VPGate Audio Service: A documented PDX resolution required restarting the VPGate Audio Service after IP changes.",
      "8. Check voice circuit/path health: If symptoms span HUB/NOC or suggest a wider voice-path problem, validate Hub/Lumen circuits and Data Center call processing. A September incident was recovered by manually failing voice traffic to the Data Center call-processing path.",
      "9. Validate recovery: Test AS/QX inbound calls, AS/QX outbound calls, two-way radio audio, intercoms, radio remotes, console-to-console transfer, and Dispatch All Call/Broadcast, where applicable.",
      "10. Escalate if necessary: Contact UC Team first at 206-688-3800, option 1. UC determines whether vendor escalation to Avtec is needed."
    ],
    vendorContacts: {
      supportPhone: "800-545-3034",
      supportEmail: "customersupport@avtecinc.com",
      supportHours: "24x7",
      accountManager: "Avtec On-Call",
      technicalSupport:
        "Avtec Support / Avtec On-Call: 800-545-3034 • customersupport@avtecinc.com (24x7) • Account Manager: (Add Account Manager)",
      namedEscalationContact:
        "(Add Vendor Escalation Contact) • Account Manager: (Add Account Manager)",
      companyNote:
        "Avtec. The internal documentation names the vendor as Avtec but does not provide a longer legal company name.",
      categoryNote:
        "Flight Operations / Dispatch Communications / Radio & Telephony. Avtec is documented as the Avtec Dispatch Radio System and as a critical system.",
      escalation:
        "IMPORTANT OPERATIONAL TAKEAWAY: Do not immediately call Avtec for every Avtec issue. Contact the UC Team first at 206-688-3800, option 1 (24x7); UC determines whether Avtec vendor involvement is necessary. Isolate internal/infrastructure layers (CUCM/VPGate configuration, VPGate Audio Service, and Hub/Lumen voice paths) before classifying a broad failure as a vendor outage. If vendor escalation is required, contact Avtec Support / Avtec On-Call at 800-545-3034 or customersupport@avtecinc.com (24x7). Account Manager: (Add Account Manager). Named Vendor Escalation Contact: (Add Vendor Escalation Contact).",
      communicationGuidelines: [
        "Determine whether the impact is one or multiple endpoints.",
        "Capture the PC/endpoint name(s) before escalation to ITS support.",
        "Document whether phone, radio, audio, intercom, or multiple communication methods are affected.",
        "Document whether inbound calls, outbound calls, or both are impacted.",
        "Confirm whether Flight Operations has a viable workaround such as radio, personal phone, Teams, or rollover line. Existing incidents demonstrate these fallback methods.",
        "For multiple endpoints, engage UC On-Call at 206-688-3800.",
        "Before engaging Avtec directly, contact the UC Team at 206-688-3800 option 1. UC determines whether vendor escalation is required.",
        "If escalation is required, contact Avtec On-Call: 800-545-3034 / customersupport@avtecinc.com.",
        "For planned DR activities, communications include Production Operations, DR Program, NOC/SOC System Operations, AS Flight Operations and QX Flight Operations.",
        "Important Operational Takeaway: Do not immediately call Avtec for every Avtec issue. Contact UC Team first at 206-688-3800 option 1. Also, a broad Avtec failure does not necessarily mean the Avtec vendor itself is down — recent incidents show dependencies on CUCM/VPGate configuration and Hub/Lumen voice paths, so isolate those internal/infrastructure layers before classifying the problem as a vendor outage."
      ],
      responseSlas: [
        {
          priority: "System Criticality",
          level: "System Criticality",
          description: "Internal system criticality classification in Avtec System Summary",
          target: "Critical System.",
          condition: "Critical System."
        },
        {
          priority: "Potential Impact",
          level: "Potential Impact",
          description: "Operational impact if Avtec is unavailable or degraded",
          target: "Flight delays possible.",
          condition: "Flight delays possible."
        },
        {
          priority: "Internal UC Support Coverage",
          level: "Internal UC Support Coverage",
          description: "UC Team (Unified Communications) on-call support coverage (206-688-3800, option 1)",
          target: "24x7.",
          condition: "24x7."
        },
        {
          priority: "Vendor Avtec Coverage",
          level: "Vendor Avtec Coverage",
          description: "Avtec Support / Avtec On-Call coverage (800-545-3034 / customersupport@avtecinc.com)",
          target: "24x7.",
          condition: "24x7."
        },
        {
          priority: "Sev 1 Initial Response Target",
          level: "Sev 1 Initial Response Target",
          description: "Vendor initial response target for Severity 1 incidents",
          target: "(Add Sev 1 Initial Response Target)",
          condition: "(Add Sev 1 Initial Response Target)"
        },
        {
          priority: "Sev 1 Update Cadence",
          level: "Sev 1 Update Cadence",
          description: "Vendor update cadence for Severity 1 incidents",
          target: "(Add Sev 1 Update Cadence)",
          condition: "(Add Sev 1 Update Cadence)"
        },
        {
          priority: "Sev 2 Initial Response Target",
          level: "Sev 2 Initial Response Target",
          description: "Vendor initial response target for Severity 2 incidents",
          target: "(Add Sev 2 Initial Response Target)",
          condition: "(Add Sev 2 Initial Response Target)"
        },
        {
          priority: "Sev 2 Update Cadence",
          level: "Sev 2 Update Cadence",
          description: "Vendor update cadence for Severity 2 incidents",
          target: "(Add Sev 2 Update Cadence)",
          condition: "(Add Sev 2 Update Cadence)"
        }
      ]
    },
    internalContacts: {
      itsTeam: "UC Team (Unified Communications)",
      itsTeamNote:
        "Primary ITS Team Owner: UC Team (Unified Communications), 206-688-3800, option 1 (24x7). DR / Production Monitoring: ITS Production Operations (Production Monitoring and Service restarts); Scott Heilman (application/UC validation activities); Dan Olson (DR plan owner).",
      applicationOwner:
        "UC Team (Dan Olson - DR plan owner; Scott Heilman - application/UC validation activities)",
      onCallSupport: "UC Team, 206-688-3800, option 1 (24x7)",
      systemAdministration:
        "UC Team, 206-688-3800, option 1 (24x7) • DR / Production Monitoring: ITS Production Operations (Production Monitoring and Service restarts); Scott Heilman (application/UC validation activities); Dan Olson (DR plan owner)",
      businessOwner: "Flight Operations / ERBC Team, ERBC.Team@alaskaair.com (24x7)",
      passwordSupport: "ITS Service Desk, 877-238-1077"
    },
    incidentHistory: [
      {
        id: "INC 3399523",
        date: "Documented Incident",
        severity: "High",
        duration: "Voice Path Failover",
        summary:
          "Voice/call-processing infrastructure impact across Hub/Lumen voice circuits affecting Avtec communications.",
        rootCause:
          "Degraded/affected Hub/Lumen voice circuits along the primary voice path.",
        resolution:
          "Restored by manually moving voice traffic away from affected Hub/Lumen voice circuits to the Data Center call-processing path."
      },
      {
        id: "INC 3340834",
        date: "Documented Incident",
        severity: "High",
        duration: "PDX Avtec Outage",
        summary:
          "PDX Avtec endpoints not working following a PDX CUCM Subscriber re-IP; team compared Avtec behavior with a supervisor desk phone to help isolate the issue.",
        rootCause:
          "Associated with a PDX CUCM Subscriber re-IP impacting the Avtec telephony path and VPGate Audio Service state.",
        resolution:
          "Restarting the VPGate Audio Service restored Avtec functionality after IP changes before intermittent symptoms briefly recurred; closure notes also state that the PDX CUCM subscriber was removed from Avtec endpoints."
      },
      {
        id: "INC 3358692",
        date: "Documented Incident",
        severity: "Medium",
        duration: "PDX Outbound Calling",
        summary:
          "Outbound calling issue on Avtec at PDX with documented potential for flight delays because operators use Avtec to communicate gate changes and organize aircraft with agents.",
        rootCause:
          "Avtec outbound call path unavailable at PDX.",
        resolution:
          "Operators utilized fallback communication workarounds (personal phones, radios, Microsoft Teams, or rollover/backup lines) while UC restored outbound calling."
      }
    ],
    relatedDocuments: [
      {
        title: "Avtec System Summary.docx",
        type: "System Summary (Word)",
        owner: "UC Team (Unified Communications)",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B022159B6-DF16-494D-8673-4C66F7D83A12%7D&file=Avtec%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Avtec User Guide.docx",
        type: "User Guide (Word)",
        owner: "UC Team / Flight Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B4D9A6045-1784-449E-9C6C-649731C53AE5%7D&file=Avtec%20User%20Guide.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "2026_Avtec_DR_Plan.xlsx",
        type: "Disaster Recovery Plan (Excel)",
        owner: "Dan Olson / Scott Heilman / UC Team",
        updated: "2026",
        url: "https://alaskaair.sharepoint.com/sites/sc/DR/_layouts/15/Doc.aspx?sourcedoc=%7BB4A9DD5B-16D0-4A62-9A31-339721511A8F%7D&file=2026_Avtec_DR_Plan.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "Avtec Common Troubleshooting Steps.docx",
        type: "Troubleshooting Guide (Word)",
        owner: "UC Team / Production Operations",
        updated: "Primary Internal Source",
        url: "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B0B10D599-8648-4557-8B73-CB5D67CF8676%7D&file=Avtec%20Common%20Troubleshooting%20Steps.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
      },
      {
        title: "INC 3399523 - MEL Update (Teams)",
        type: "Incident Thread (Teams)",
        owner: "Production Operations / UC Team",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:c160606227ea4a639e17b4bdb4b42b8c@thread.v2/1790288933262?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "INC 3340834 - PDX Avtec Not Working (Teams)",
        type: "Incident Thread (Teams)",
        owner: "Production Operations / UC Team",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:e25edb72a12542d381b9da31051749bc@thread.v2/1785396628764?context=%7B%22contextType%22:%22chat%22%7D"
      },
      {
        title: "INC 3340834 - Ticket Closure Notes (Outlook)",
        type: "Incident Closure Email (Outlook)",
        owner: "Production Operations / UC Team",
        updated: "Incident Reference",
        url: "https://outlook.office365.com/owa/?ItemID=AAMkADQ3NmM0N2MxLThlMDktNDcwMC1iNGUzLWUwNjcwOGE2YmVjMQBGAAAAAAAHZJq3IE%2fqR7PNFWEcMesaBwCHiomNgAhoTr%2bjmuA%2fjTbyAAAAAAEMAACHiomNgAhoTr%2bjmuA%2fjTbyAADPVNV5AAA%3d&exvsurl=1&viewmodel=ReadMessageItem"
      },
      {
        title: "INC 3358692 - PDX Outbound Calling & Gate Changes (Teams)",
        type: "Incident Thread (Teams)",
        owner: "Production Operations / UC Team",
        updated: "Incident Reference",
        url: "https://teams.microsoft.com/l/message/19:bf724af558204d20b3d815b4f12783c2@thread.v2/1786759783078?context=%7B%22contextType%22:%22chat%22%7D"
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
  if (company.includes("alvaria") || sysName.includes("alvaria")) {
    return VENDOR_IMPACT_DETAILS.alvaria;
  }
  if (company.includes("avtec") || sysName.includes("avtec")) {
    return VENDOR_IMPACT_DETAILS.avtec;
  }
  return buildTemplateVendorImpactDetails(vendor, allVendors);
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
    pageTitle: `${displayName} – Vendor Impact Details`,
    pageSubtitle: `View applications, systems, dependencies and business impact if ${fullName} (${company}) experiences an outage or degraded service.`,
    applicationsTabTitle: displayName,
    applicationsTabSubheading: "Applications & Systems",
    applicationsTabSubtitle: descriptionText,
    applicationsCardSubtitle: `This list shows Alaska applications and systems associated with ${fullName} (${company}).`,
    dependenciesTabTitle: `${displayName} – Dependencies`,
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

  if (lowerKey === "acars" || lowerKey === "sita") {
    return VENDOR_IMPACT_DETAILS.sita;
  }
  if (lowerKey === "smart4aviation (s4a)" || lowerKey === "s4a") {
    return VENDOR_IMPACT_DETAILS["Smart4Aviation (S4A)"];
  }
  if (lowerKey === "aims" || lowerKey === "aims-vendor") {
    return VENDOR_IMPACT_DETAILS["aims-vendor"];
  }
  if (key && VENDOR_IMPACT_DETAILS[key]) {
    return VENDOR_IMPACT_DETAILS[key];
  }
  if (lowerKey && VENDOR_IMPACT_DETAILS[lowerKey]) {
    return VENDOR_IMPACT_DETAILS[lowerKey];
  }
  return buildGroundStopImpactDetails(appItem);
}

export default VENDOR_IMPACT_DETAILS;

