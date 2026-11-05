/* Single default source of truth for Production Operations Connect. */
(function () {
    "use strict";

    const defaultData = {
  "applications": {
    "acars": {
      "id": "acars",
      "key": "acars",
      "appDataVersion": 2,
      "name": "ACARS Ground System (also called ACARS / AIRCOM)",
      "shortName": "ACARS",
      "alias": "ACARS / AIRCOM",
      "icon": "public/applications/acars.png",
      "function": "Central text link between aircraft and the ground carrying flight info, flight times, weather, performance data, releases and load closeouts",
      "category": "Flight Ops: aircraft-to-ground communications",
      "vendor": "SITA for the Aircom Server product. ARINC (Collins Aerospace) for messages to the aircraft",
      "portalUrl": "http://acars.app.insideaag.com/StatusReport.htm",
      "vendorPOC": "ARINC Senior On-Duty Ops Manager (24x7): 410-266-4029 / AOC@arinc.com • Account Manager: Not verified (blank in ITS Vendor Information - 2026.xlsx; ARINC lists rotating Senior On-Duty Ops Manager 24x7)",
      "aagPOC": "Ryan Wilkins, 206-972-0228",
      "aagTeam": "ITS COG FlightOps Support / ITS Flight Operations",
      "systemAdmin": "Rick Cahoon, Arun Sharma, 206-392-8613",
      "businessOwner": "James Falen, 425-679-2135 cell / 206-392-6083 desk",
      "everbridgeBackup": "Charles Ostick, 877-238-1077",
      "technicalOwners": "Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified)",
      "onCall": "ITS COG FlightOps Support / ITS FltOps on-call",
      "passwordSupport": "Service Desk: 1-877-238-1077",
      "additionalSupportTeams": "Technical Owners: Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified) • Everbridge Backup: Charles Ostick, 877-238-1077 • DBA On-Call (SQL) • Middleware (IBM MQ)",
      "environment": "Production",
      "tier": "Ground Stop",
      "groundStopEligible": "Yes",
      "criticality": "Ground Stop",
      "severity": "Critical",
      "status": "Operational",
      "businessImpact": "ACARS is the central text link between aircraft and the ground. It carries flight info, flight times, weather, performance data, releases and load closeouts. It is rated 24x7 critical and is on the Ground Stop list.",
      "response": "15 minutes",
      "resolution": "24x7, critical to operations",
      "escalation": "Ground Stop - 24x7, critical to operations (Triage time limit: 15 minutes)",
      "supportModel": "24x7, critical to operations (SITA Aircom Support + ARINC Help Desk / 24x7 Senior On-Duty Ops Manager + ITS COG FlightOps Support / ITS Flight Operations)",
      "phone": "SITA: 1-888-247-2661, option 4 (Aircom). ARINC: 800-633-6882",
      "phoneNote": "SITA Help Desk: 866-247-2661 (24/7) • ARINC Senior On-Duty Ops Manager (24x7): 410-266-4029",
      "email": "SITA: Aircom.support@sitaonair.aero. ARINC: helpdesk@arinc.com",
      "description": "ACARS is the central text link between aircraft and the ground. It carries flight info, flight times, weather, performance data, releases and load closeouts. It is rated 24x7 critical and is on the Ground Stop list. Aircom Server Status page: http://acars.app.insideaag.com/StatusReport.htm",
      "supportDescription": "24x7, critical to operations. SITA Help Desk: 866-247-2661 (24/7); SITA Aircom support: 1-888-247-2661, option 4 / Aircom.support@sitaonair.aero; ARINC Help Desk: 800-633-6882 / helpdesk@arinc.com; ARINC Senior On-Duty Ops Manager (24x7): 410-266-4029 / AOC@arinc.com. Internal: ITS System Owner Ryan Wilkins (206-972-0228), Business Owner & Everbridge focal James Falen (425-679-2135 cell / 206-392-6083 desk), Everbridge Backup Charles Ostick (877-238-1077), System Administration Rick Cahoon & Arun Sharma (206-392-8613), Technical Owners Ryan Wilkins (206-972-0228) & Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified), On-Call ITS COG FlightOps Support / ITS FltOps on-call.",
      "directDependencies": "SQL (SEAPRACARSSQL02 / TUKPRACARSSQL02), IBM MQ (QMAS, QMMFP), MSMQ, FO.TO.AIRCOM.WEBSERVICES queue, Azure SQL, APIM, PingFederate, Aircom Server, 2012 DNA farm",
      "infrastructure": "App servers: SEAVVACARSAPP03 (IGQ) and TUKVVACARSAPP03 (TUK), Windows Server 2016 • Database servers: SEAPRACARSSQL02 (159.49.43.93) and TUKPRACARSSQL02 (10.70.106.5), SQL Server 2016 • DNS: acars.app.insideaag.com, acars.sql.insideaag.com, and the CNAME acars.app.int.insideaag.com • IBM MQ queue managers QMAS and QMMFP, plus local MSMQ queues • Monitoring: AlarmsOne, Dynatrace, Zenoss • Firewall / network rules: Not verified (documented connections: SEAVVACARSAPP03 / TUKVVACARSAPP03, SEAPRACARSSQL02 / TUKPRACARSSQL02 via acars.sql.insideaag.com, QMAS queues ALASKA.FROM.ARINC / ALASKA.TO.ARINC; exact firewall rule IDs, ports, and external VIPs not verified)",
      "associatedApplications": [
        {
          "name": "SITA Aircom Server",
          "function": "Aircraft message routing",
          "owner": "Ryan Wilkins",
          "dependencies": "SQL (SEAPRACARSSQL02 / TUKPRACARSSQL02), IBM MQ, MSMQ",
          "impact": "No ACARS messages go to or from aircraft",
          "description": "Vendor message server running on SEAVVACARSAPP03 / TUKVVACARSAPP03"
        },
        {
          "name": "AIRCOM Web Service Invoker",
          "function": "Message logic and web service calls",
          "owner": "ITS Flight Ops",
          "dependencies": "FO.TO.AIRCOM.WEBSERVICES queue",
          "impact": "Flight times (OUT/OFF/ON/IN) and replies don't process",
          "description": "In-house Windows service on seavvapp22 / tukvvapp22, both active at the same time"
        },
        {
          "name": "ACARS History (Service/UI/API)",
          "function": "Message history and audit",
          "owner": "Team Wilkins (Team_Wilkins@alaskaair.com) / Flight Operations Engineering (unreviewed runbook)",
          "dependencies": "Azure SQL, APIM, PingFederate",
          "impact": "Users can't search ACARS history",
          "description": "Search of recent and archived ACARS messages"
        },
        {
          "name": "ACARS Messenger / Ops Messenger",
          "function": "Ops-to-crew messaging",
          "owner": "Flight Operations / ITS COG Flight Ops Support (ACARS Messenger; separate Ops Messenger owner: Not verified)",
          "dependencies": "Aircom Server",
          "impact": "No free-text messages to crews",
          "description": "Free-text message clients for Operations"
        },
        {
          "name": "FlifoTimesWS, PilotLimitsWS, AircraftPerformanceData, Weather API",
          "function": "Flight times, pilot duty limits, performance, weather",
          "owner": "FltOps / Crew Scheduling",
          "dependencies": "2012 DNA farm",
          "impact": "Those message types fail",
          "description": "Web services that process specific message types"
        }
      ],
      "upstreamDependencies": [
        "ARINC/SITA -> ALASKA.FROM.ARINC / ALASKA.FROM.SITA -> Aircom",
        "S4A (COMM.V1.JMS.EXT_ACARS_OUTBOUND)",
        "WAM (dispatch release uplink)",
        "FlightKeys/FPS briefing data (through AS OpsCom CyberJet)",
        "AeroData (AD.TO.AAG) for performance and loadsheet data"
      ],
      "downstreamConsumers": [
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
      "typicalBusinessImpact": [
        "Takeoff numbers, landing performance data and pre-departure clearances are delayed",
        "Flight times (OUT/OFF/ON/IN) don't arrive, so Dispatch and CLP have to enter them by hand",
        "Crews don't receive load closeouts or final numbers",
        "Flight delays. In the MI6516 outage (1/9/2026), Alaska Air Group logged 68 delays totalling 1,075 minutes",
        "Hawaiian (HA) and Horizon (QX) operations can be affected too"
      ],
      "knownWorkarounds": [
        "Enter flight times and flight plans manually",
        "CLP calls in final numbers manually",
        "CLP re-sends the load closeout after a few minutes",
        "Manually generate performance data and email it to crews (documented in MI6579); exact approved voice/VHF/SATCOM fallback procedure: Not verified"
      ],
      "communicationGuidelines": [
        "For SITA issues, an assigned developer follows up with SITA and escalates.",
        "When escalating, include the scope: one aircraft (tail), one flight (date, flight, city pair), or the whole fleet, plus which Ops group is affected."
      ],
      "responseSlas": [
        "Sev 1: ARINC MQ channel alert, required services down and not clearing, or queue depth over 500",
        "Sev 2: queue depth over 100, multiple flights affected, or critical messages (releases, performance data) failing",
        "Sev 3: single flight, single station, or non-critical messages",
        "Initial response and update cadence: Internal triage limit: 15 minutes. P1 bridge update cadence: every 15-30 minutes - TBD in runbook (not confirmed). Contractual SITA / ARINC Sev 1 and Sev 2 response times: Not verified"
      ],
      "escalationSteps": [
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
      "operationalRunbookUrl": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BA9959123-88A9-4875-A445-BDE7EC8095C4%7D&file=ACARS%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1",
      "escalationProcedureUrl": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B781CA6D6-1F42-4C55-BEF2-C5D8C9704290%7D&file=ACARS_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1",
      "applicationSupportGuideUrl": "https://alaskaair.sharepoint.com/sites/CogTeam-BusinessImpactMitigationSupport-CogMIMPOTeams/_layouts/15/Doc.aspx?sourcedoc=%7B93C4FA57-AC4E-4E7A-A5BE-6E1670770D91%7D&file=Ground%20Stop%20Applications%20List.docx&action=default&mobileredirect=true&DefaultItemOpen=1",
      "vendorSupportUrl": "http://acars.app.insideaag.com/StatusReport.htm",
      "relatedDocuments": [
        {
          "title": "ACARS System Summary.docx",
          "category": "Main Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BA9959123-88A9-4875-A445-BDE7EC8095C4%7D&file=ACARS%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "ACARS_Triage_Troubleshooting.docx",
          "category": "Main Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B781CA6D6-1F42-4C55-BEF2-C5D8C9704290%7D&file=ACARS_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "Ground Stop Applications List.docx",
          "category": "Main Source",
          "url": "https://alaskaair.sharepoint.com/sites/CogTeam-BusinessImpactMitigationSupport-CogMIMPOTeams/_layouts/15/Doc.aspx?sourcedoc=%7B93C4FA57-AC4E-4E7A-A5BE-6E1670770D91%7D&file=Ground%20Stop%20Applications%20List.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "Service-Offering-Application-Metadata mapping 10-12-2026.xlsx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7BCCA8403B-C46B-47D8-8D7D-58429E9875D6%7D&file=Service-Offering-Application-Metadata%20mapping%2010-12-2026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "ACARSHistory-Runbook.docx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B125C0C1E-4C83-4AE9-B492-DB2525D6378C%7D&file=ACARSHistory-Runbook.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "E2E Test Strategy - Flight Planning System Replacement_V0.1.pptx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/AlaskaE2ETesting/_layouts/15/Doc.aspx?sourcedoc=%7B45417EC3-08B2-46C7-A5DF-AE77AB217C2D%7D&file=E2E%20Test%20Strategy%20-%20Flight%20Planning%20System%20Replacement_V0.1.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "ground_stop_apps_dep_matrix.xlsx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/SREITSHub/_layouts/15/Doc.aspx?sourcedoc=%7B4A885E79-6862-4AB7-B941-C8A305D14F04%7D&file=ground_stop_apps_dep_matrix.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "RCA - Sev1 - MI6516 - ACARS is degraded impacting flight operations and planning.docx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/ITSSev1Response/_layouts/15/Doc.aspx?sourcedoc=%7B594EDDF3-1DF8-4F61-8BF9-E2C992B1CBDD%7D&file=RCA%20-%20Sev1%20-%20MI6516%20-%20ACARS%20is%20degraded%20impacting%20flight%20operations%20and%20planning.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "ACARS 2.0 Architecture (ADO Wiki)",
          "category": "Additional Source",
          "url": "https://itsals.visualstudio.com/FlightOperationsGIT/_wiki/wikis/FlightOperationsGIT.wiki/49438"
        }
      ],
      "lastUpdated": "Nov 04, 2026 (ACARS System Summary & Triage Runbooks)"
    },
    "wam": {
      "id": "wam",
      "key": "wam",
      "appDataVersion": 2,
      "name": "WAM (Flight Planning System / Worksheet)",
      "shortName": "WAM",
      "alias": "FlightPlanning-WAM / Flight Planning System / Worksheet",
      "icon": "public/applications/wam.png",
      "function": "Main dispatch tool for AS and QX bringing together flight plans, weather, performance data and MEL information to produce the dispatch release",
      "category": "Flight Ops / Dispatch: flight planning and releases",
      "vendor": "Jeppesen (owned by Boeing), which runs the JetPlan flight plan server",
      "portalUrl": "https://worksheet.webui.alaskaair.com/foworksheetui/index.html?airline=AS&desk=B&shift=3",
      "vendorPOC": "Jeppesen Sev 1 line: 1-800-732-2800, account number 83491 • The Weather Company (weather issues): 1-800-872-2359, option 4 / fieldandfacilities@weather.com (secondary: 1-978-983-6352 / metops@weather.com; Aviation API primary: aviationapi@weather.com; phone conflict in Weather_System_Summary.docx: +1 978-983-6325 option 4) • Account Manager: Not verified (vendor-contact-name field is blank in current summaries)",
      "aagPOC": "Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified)",
      "aagTeam": "ITS COG Flight Operations. Verified owners: Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified)",
      "systemAdmin": "MEL issues: ITS COG M&E App Support",
      "businessOwner": "AS Business Focals: Leo Blanco and David Caraballo, 206-688-3213 / 206-688-3216 • QX Business Focal: Mike Timpe, 206-574-4789 / 503-702-3463",
      "alternateBusinessContacts": "AS business contacts (alternate list): Katie Pagel, Leo Blanco",
      "technicalOwners": "Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified)",
      "onCall": "ITS COG Flight Operations",
      "environment": "Production",
      "tier": "Ground Stop",
      "groundStopEligible": "Yes",
      "criticality": "Ground Stop. Listed as \"FlightPlanning-WAM\" among critical apps",
      "severity": "Critical",
      "status": "Operational",
      "businessImpact": "WAM is the main dispatch tool for AS and QX. It brings together flight plans, weather, performance data and MEL information to produce the dispatch release. If WAM or any of its upstream feeds fails, flights can't be released.",
      "response": "15 minutes",
      "resolution": "24/7. FlightPlanSvc must run 24/7",
      "escalation": "The business focal follows up with Jeppesen and escalates. When escalating to Jeppesen, give: which application (WAM or Flight Planning), the flight and tail number, the RC number, and how many users are affected. Send incident updates about every hour, through Everbridge, xMatters and ServiceNow.",
      "supportModel": "24/7. FlightPlanSvc must run 24/7 (Jeppesen + The Weather Company + ITS COG Flight Operations + ITS COG M&E App Support)",
      "phone": "Jeppesen: 1-800-732-2800. Say \"Flight Planning\" and give account number 83491",
      "phoneNote": "The Weather Company (weather issues): 1-800-872-2359, option 4 / fieldandfacilities@weather.com (secondary: 1-978-983-6352 / metops@weather.com; Aviation API primary: aviationapi@weather.com; phone conflict in Weather_System_Summary.docx: +1 978-983-6325 option 4)",
      "email": "opssupport@jeppesen.com",
      "description": "WAM is the main dispatch tool for AS and QX. It brings together flight plans, weather, performance data and MEL information to produce the dispatch release. If WAM or any of its upstream feeds fails, flights can't be released.",
      "supportDescription": "24/7. FlightPlanSvc must run 24/7. Jeppesen Sev 1 line: 1-800-732-2800, account number 83491; Jeppesen email: opssupport@jeppesen.com; The Weather Company (weather issues): 1-800-872-2359, option 4 / fieldandfacilities@weather.com (secondary: 1-978-983-6352 / metops@weather.com; Aviation API primary: aviationapi@weather.com; phone conflict in Weather_System_Summary.docx: +1 978-983-6325 option 4); Account Manager: Not verified (vendor-contact-name field is blank in current summaries). Internal: Technical Owners Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified); AS Business Focals Leo Blanco and David Caraballo (206-688-3213 / 206-688-3216); QX Business Focal Mike Timpe (206-574-4789 / 503-702-3463); Alternate AS business contacts Katie Pagel, Leo Blanco; On-Call ITS COG Flight Operations; MEL issues ITS COG M&E App Support.",
      "directDependencies": "FlightPlanningWs, DNA farm, Jeppesen JetPlan, MQ (QMMFP), fltops DB, MelsWs, Weather API, FlightPlanSvc, Dynamic Source (Boeing/Airbus), AeroData (QX), APIM (primary SDP, secondary DNA), MEL DB",
      "infrastructure": "App servers: seavvapp22 / tukvvapp22 (FlightPlanSvc); DNA web farm: SEAV3DNA09-16 and TUKV3DNA09-16, behind a load balancer; IBM MQ: QMMFP on wmq1as.alaskaair.com, port 1425 (FO.FLIGHTPLAN.REQUEST.QUEUE, FO.TANKER.REQUEST.QUEUE, FO.FLIGHT.LOAD.ACARS.UPLINK); Databases: fltops (Informix) and VisOps; Azure API Management (APIM) and Front Door for the MEL Service; Monitoring: AlarmsOne, Sumo Logic, Application Insights, Dynatrace; Firewall / network rules: Not verified (IBM MQ QMMFP on wmq1as.alaskaair.com:1425, Informix fltops, APIM/Front Door, and WAM UI/DNA tiers IGQprFLTOPSdwn1/2, SE4prFLTOPSdwn1/2, IGQprFLTOPSdna1/2, SE4prFLTOPSdna1/2 documented; approved firewall rule set, ports, and load-balancer VIPs not verified)",
      "associatedApplications": [
        {
          "name": "WAM Web UI",
          "description": "AngularJS front end that talks only to web services. Chrome only",
          "function": "Dispatcher workflow",
          "impact": "Dispatchers can't plan or release flights",
          "dependencies": "FlightPlanningWs, DNA farm",
          "owner": "ITS COG Flight Ops"
        },
        {
          "name": "FlightPlanSvc",
          "description": "Windows service, hot/hot on seavvapp22 / tukvvapp22",
          "function": "Requests flight plans from Jeppesen and updates fltops",
          "impact": "No flight plans, or plans \"REJECTED\" / \"JEP DOWN\"",
          "dependencies": "Jeppesen JetPlan, MQ (QMMFP), fltops DB",
          "owner": "ITS COG Flight Ops"
        },
        {
          "name": "FlightPlanningWs / DispatchFlightDetailWs",
          "description": "Web services on the DNA farm",
          "function": "Flight plan request and release",
          "impact": "WAM errors, can't release flights",
          "dependencies": "MelsWs, Weather API, FlightPlanSvc",
          "owner": "ITS COG Flight Ops"
        },
        {
          "name": "Aircraft Performance (AircraftPerformanceData, DispatchAircraftPerformance, LocationMapsAPI)",
          "description": "Takeoff and landing performance web services",
          "function": "Performance data for releases",
          "impact": "Releases can't be completed, which leads to delays",
          "dependencies": "Dynamic Source (Boeing/Airbus), AeroData (QX)",
          "owner": "ITS COG Flight Ops"
        },
        {
          "name": "MEL Service",
          "description": "Minimum Equipment List (MEL) data called by WAM",
          "function": "MEL checks on releases",
          "impact": "\"Mels Request Exception\" errors in WAM",
          "dependencies": "APIM (primary SDP, secondary DNA), MEL DB",
          "owner": "ITS COG M&E App Support"
        }
      ],
      "upstreamDependencies": [
        "Jeppesen JetPlan, which supplies flight plans",
        "Weather API (The Weather Company FlightFX). WAM relies only on this for weather",
        "Dynamic Source and AeroData performance data",
        "MEL Service",
        "Workbench 2.0, which launches WAM"
      ],
      "downstreamConsumers": [
        "Dispatch releases. Released flights feed pilot briefing packets",
        "ACARS, which uplinks the dispatch release to the aircraft",
        "fltops database",
        "Pilot Briefing API",
        "AS and QX Dispatch teams"
      ],
      "typicalBusinessImpact": [
        "Dispatchers can't pull flight plans or release flights",
        "Performance data is missing from flight packets",
        "Flight delays. In INC00020700 (11/3/2026), about 50% of dispatchers were affected",
        "Horizon (QX) delays were reported during the weather outage MI-6584"
      ],
      "knownWorkarounds": [
        "Manual flight release with weather entered by hand. This adds about 3-5 minutes per release, or 5-8 minutes when packet updates are needed",
        "Get aircraft performance manually through Dynamic Source (limited workaround)",
        "Single-user errors: use Chrome, check the URL is https, and clear the browser cache",
        "Release screen locked: delete the lock record in the wam_release_locks table"
      ],
      "communicationGuidelines": [
        "The business focal follows up with Jeppesen and escalates.",
        "When escalating to Jeppesen, give: which application (WAM or Flight Planning), the flight and tail number, the RC number, and how many users are affected.",
        "Send incident updates about every hour, through Everbridge, xMatters and ServiceNow."
      ],
      "responseSlas": [
        "Sev 1: ProdOps triage within 15 minutes",
        "Sev 2 / Sev 3: Sev 2: multiple flights or users affected. Sev 3: single flight or single user",
        "Update cadence: hourly, per bridge practice",
        "Vendor response SLA: Not verified (24/7 vendor support and account 83491 documented; numerical contractual Jeppesen response/resolution SLAs not verified)"
      ],
      "escalationSteps": [
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
      "applicationSupportGuideUrl": "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B699F4E53-05D1-46F7-BC0B-DDE61D08A91E%7D&file=Flight%20Planning%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1",
      "escalationProcedureUrl": "https://alaskaair.sharepoint.com/sites/ASICS/AOS/FO/_layouts/15/Doc.aspx?sourcedoc=%7B0D9BD242-FDDB-4191-B04F-07B63922C56C%7D&file=WAM.troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1",
      "operationalRunbookUrl": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BF0F37D42-C602-41A7-AA73-9F3AF09FE00D%7D&file=FlightPlanning_JetPlan_WAM_TriageDocument.docx&action=default&mobileredirect=true&DefaultItemOpen=1",
      "vendorSupportUrl": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B235791B5-2AC8-4E5B-AF7E-F5DCB33C256C%7D&file=Flight_Planning_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1",
      "relatedDocuments": [
        {
          "title": "Flight Planning System Summary.docx",
          "category": "Main Source",
          "url": "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B699F4E53-05D1-46F7-BC0B-DDE61D08A91E%7D&file=Flight%20Planning%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "Flight_Planning_System_Summary.docx",
          "category": "Main Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B235791B5-2AC8-4E5B-AF7E-F5DCB33C256C%7D&file=Flight_Planning_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "WAM.troubleshooting.docx",
          "category": "Main Source",
          "url": "https://alaskaair.sharepoint.com/sites/ASICS/AOS/FO/_layouts/15/Doc.aspx?sourcedoc=%7B0D9BD242-FDDB-4191-B04F-07B63922C56C%7D&file=WAM.troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "FlightPlanning_JetPlan_WAM_TriageDocument.docx",
          "category": "Main Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BF0F37D42-C602-41A7-AA73-9F3AF09FE00D%7D&file=FlightPlanning_JetPlan_WAM_TriageDocument.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "AircraftPerformanceData_Triage_Troubleshooting.docx",
          "category": "Main Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BC758E56D-3E63-4E0C-BB72-B98EEDED3BA0%7D&file=AircraftPerformanceData_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "MELService_Triage_Troubleshooting.docx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BFE7BC914-ED66-41BA-99E2-704E2D344459%7D&file=MELService_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "WAM Error Please try again. If the issue persists report to application support team..docx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B7BC9A263-7A94-49B7-AF49-FFE7FF6BBB7D%7D&file=WAM%20Error%20Please%20try%20again.%20If%20the%20issue%20persists%20report%20to%20application%20support%20team..docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "Weather_System_Summary.docx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B3DCD1721-BA2E-4F47-838A-3C37820DC927%7D&file=Weather_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "ITSOperationsRunbook-WorkBench2.0.docx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BCFDCDE00-B7D3-46A1-BBAB-16D3A29B7FD3%7D&file=ITSOperationsRunbook-WorkBench2.0.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "ACARS_System_Summary.docx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BE5D614AD-8759-464D-ABD0-0B87929F4568%7D&file=ACARS_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "RRT0-2025-12-26-01-WAM is down facing informix DBA (OneNote)",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/RapidResponseTier0-2026/_layouts/15/Doc.aspx?action=edit&mobileredirect=true&wdorigin=Sharepoint&DefaultItemOpen=1&sourcedoc=%7Baa538122-0d0b-4713-aa06-83613809aaf0%7D"
        },
        {
          "title": "PilotBriefing legacy support (ADO Work Item 1392599)",
          "category": "Additional Source",
          "url": "https://dev.azure.com/itsals/8a8c8ebe-3927-41cd-a3a1-0caec270008a/_workitems/edit/1392599"
        }
      ],
      "lastUpdated": "Nov 04, 2026 (Flight Planning System Summary & WAM Troubleshooting Runbooks)"
    },
    "jetplan": {
      "id": "jetplan",
      "key": "jetplan",
      "appDataVersion": 2,
      "name": "JetPlan",
      "fullName": "JetPlan (Jeppesen Flight Planning engine). Also called Flight Plan, Jepp JetPlan, BCJPlan",
      "shortName": "JetPlan",
      "alias": "Flight Plan / Jepp JetPlan / BCJPlan",
      "icon": "public/applications/jetplan.png",
      "function": "Engine that calculates every AS and QX flight plan",
      "category": "Flight Ops / Dispatch: flight plan calculation",
      "vendor": "Jeppesen (owned by Boeing). Vendor application hosted in-house",
      "portalUrl": "https://asflightplan.alaskaair.com/jetplan/",
      "vendorPOC": "Jeppesen Sev 1: 1-800-732-2800, account number 83491 • Jeppesen general: 1-800-375-4973 • Jeppesen server help: 1-303-328-4585 • DSOC: 1-800-JETPLAN (538-7526) • Account Manager: Not verified (vendor-contact-name field is blank in current summaries)",
      "aagPOC": "Ryan Wilkins",
      "aagTeam": "ITS COG Flight Operations. ITS System Owner: Ryan Wilkins",
      "systemAdmin": "AS Business Owners / System Admins: Leo Blanco, David Caraballo, 206-688-3213 / 206-688-3216",
      "businessOwner": "AS Business Owners / System Admins: Leo Blanco, David Caraballo, 206-688-3213 / 206-688-3216 • QX Business Owner: Mike Timpe, 206-574-4789 / 503-702-3463",
      "technicalOwners": "Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified)",
      "onCall": "ITS COG Flight Operations",
      "passwordSupport": "Service Desk: 1-877-238-1077",
      "environment": "Production",
      "tier": "Ground Stop",
      "groundStopEligible": "Yes",
      "criticality": "Ground Stop. Issues require an RRT0 (Tier 0 rapid response) right away",
      "severity": "Critical",
      "status": "Operational",
      "businessImpact": "JetPlan is the engine that calculates every AS and QX flight plan. If it goes down, WAM can't produce flight plans or releases, ATC filing stops, and flights can't be dispatched. That is why it is on the Ground Stop list.",
      "response": "15 minutes",
      "resolution": "24/7, critical to operations",
      "escalation": "The business focal follows up with Jeppesen and escalates. When escalating, give: which application (WAM or Flight Planning), the flight, tail and RC numbers, how many users are affected, and the weather type if it's a weather issue. Forward critical Jeppesen alerts directly to OpsSupport@jeppesen.com. Raise an RRT0 right away for any JetPlan issue.",
      "supportModel": "24/7, critical to operations (Jeppesen + ITS COG Flight Operations)",
      "phone": "Sev 1: 1-800-732-2800. Say \"Flight Planning\" and give account number 83491. Other issues: 1-800-375-4973. Server help: 1-303-328-4585",
      "phoneNote": "Jeppesen Digital Support Operations Center (DSOC): 1-800-JETPLAN (538-7526)",
      "email": "OpsSupport@jeppesen.com",
      "description": "JetPlan is the engine that calculates every AS and QX flight plan. If it goes down, WAM can't produce flight plans or releases, ATC filing stops, and flights can't be dispatched. That is why it is on the Ground Stop list. Support Portal URL: https://asflightplan.alaskaair.com/jetplan/",
      "supportDescription": "24/7, critical to operations. Jeppesen Sev 1: 1-800-732-2800, account number 83491; Jeppesen general: 1-800-375-4973; Jeppesen server help: 1-303-328-4585; Email: OpsSupport@jeppesen.com; Jeppesen Digital Support Operations Center (DSOC): 1-800-JETPLAN (538-7526); Account Manager: Not verified (vendor-contact-name field is blank in current summaries). Internal: ITS System Owner Ryan Wilkins (206-972-0228); Technical Owners Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified); AS Business Owners / System Admins Leo Blanco, David Caraballo (206-688-3213 / 206-688-3216); QX Business Owner Mike Timpe (206-574-4789 / 503-702-3463); On-Call ITS COG Flight Operations; Service Desk 1-877-238-1077.",
      "directDependencies": "Jeppesen weather and winds uploads, Jeppesen file transfer (SFTP) from DENCOM2, JetPlan Engine, IBM MQ (QMMFP), Informix fltops",
      "infrastructure": "JetPlan servers: IGQprJPLANin01 (159.49.43.6) and TUKvvJPLANin01 (10.70.104.189); Weather servers: IGQprJPWXD01 (159.49.41.22) and TUKvvJPWXD01 (10.70.104.45); DNS (GTM WideIP): asflightplan.alaskaair.com and jpdc.alaskaair.com (159.49.246.70 / 159.49.88.47), jetplandatafeed.alaskaair.com; External NAT IP 159.49.252.30; IBM MQ QMMFP (wmq1as.alaskaair.com, port 1425); Informix fltops database on Visops 2000; Monitoring: Sysdig, AlarmsOne, Grafana, Sumo Logic; Cloud fallback endpoint: soap-grays-east.cloud.jetplan.com",
      "associatedApplications": [
        {
          "name": "JetPlan Engine (JPE)",
          "description": "Linux containers on IGQprJPLANin01 / TUKvvJPLANin01",
          "function": "Calculates flight plans",
          "impact": "\"JEP DOWN\" or \"REJECTED\" plans, no flight plans",
          "dependencies": "Jeppesen weather and winds uploads",
          "owner": "ITS COG Flight Ops"
        },
        {
          "name": "JetPlan Weather (ingestMTDD / forbind)",
          "description": "Local weather database on IGQprJPWXD01 / TUKvvJPWXD01",
          "function": "Winds aloft and TAFs used in plans",
          "impact": "\"INSUFFICIENT WX DATA\", old TAF data",
          "dependencies": "Jeppesen file transfer (SFTP) from DENCOM2",
          "owner": "Jeppesen / ITS COG Flight Ops"
        },
        {
          "name": "Tomcat (LJPDC) / JBoss adaptor",
          "description": "Communication layer and database link inside JetPlan",
          "function": "Request handling",
          "impact": "\"FRONTERR PERFORMANCE SERVER ERROR -1\"",
          "dependencies": "JetPlan Engine",
          "owner": "Jeppesen"
        },
        {
          "name": "FlightPlanSvc",
          "description": "Windows service, hot/hot on SEAVVAPP22 / TUKVVAPP22",
          "function": "Sends requests to JetPlan and writes plans to fltops",
          "impact": "No plans reach WAM",
          "dependencies": "IBM MQ (QMMFP), Informix fltops",
          "owner": "ITS COG Flight Ops"
        }
      ],
      "upstreamDependencies": [
        "WAM, through FlightPlanSvc and FO.FLIGHTPLAN.REQUEST.QUEUE",
        "Jeppesen weather and winds aloft files sent by file transfer (SFTP), about every 7 hours",
        "Tanker requests (FO.TANKER.REQUEST.QUEUE)",
        "Aircraft data loaded by business users"
      ],
      "downstreamConsumers": [
        "WAM / Dispatch (AS and QX)",
        "Dispatch releases and pilot briefing packets",
        "ATC filing through jobs in the IWS job scheduler: FOASATCPlans and FOQXATCPlans",
        "Tankering batch (FOTANKERPLANS)",
        "ACARS, which uplinks the FMC route string to the aircraft",
        "Flyways Optimization"
      ],
      "typicalBusinessImpact": [
        "All flights get \"JEP DOWN\" or \"REJECTED\" flight plans",
        "Plans use old weather data (TAFs, winds aloft)",
        "Flight plans aren't filed with ATC, so Dispatch has to file them manually",
        "Flight releases are delayed, which leads to departure delays"
      ],
      "knownWorkarounds": [
        "Single user or a few users: change the request settings and try again",
        "File flight plans with ATC manually",
        "Fail over between IGQ and TUK using the JetPlan DR plan (requires an RC number gap of about 100)",
        "Switch to the Jeppesen cloud endpoint",
        "Boeing MAX ETOPS flights on OW routes: pick a different route"
      ],
      "communicationGuidelines": [
        "The business focal follows up with Jeppesen and escalates.",
        "When escalating, give: which application (WAM or Flight Planning), the flight, tail and RC numbers, how many users are affected, and the weather type if it's a weather issue.",
        "Forward critical Jeppesen alerts directly to OpsSupport@jeppesen.com.",
        "Raise an RRT0 right away for any JetPlan issue."
      ],
      "responseSlas": [
        "Sev 1: all flights or multiple users getting \"REJECTED\" or \"ERROR\"",
        "Sev 2: more than 2 dispatchers affected, or constant FRONTERR errors",
        "Sev 3: single user, or intermittent FRONTERR errors",
        "Initial response and update cadence: Not verified (immediate RRT0 escalation required for critical alerts; numerical internal Sev 1 and Sev 2 response times and bridge update cadence not verified)",
        "Vendor response SLA: Not verified (24/7 vendor support and account 83491 documented; numerical contractual Jeppesen response/resolution SLAs not verified)"
      ],
      "escalationSteps": [
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
      "applicationSupportGuideUrl": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B235791B5-2AC8-4E5B-AF7E-F5DCB33C256C%7D&file=Flight_Planning_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1",
      "escalationProcedureUrl": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BF0F37D42-C602-41A7-AA73-9F3AF09FE00D%7D&file=FlightPlanning_JetPlan_WAM_TriageDocument.docx&action=default&mobileredirect=true&DefaultItemOpen=1",
      "operationalRunbookUrl": "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/ITS%20Flight%20Ops%20Runbooks%20(IOC)/FlightPlanSvc_Runbook.pdf?web=1",
      "vendorSupportUrl": "https://asflightplan.alaskaair.com/jetplan/",
      "relatedDocuments": [
        {
          "title": "FlightPlanning_JetPlan_WAM_TriageDocument.docx",
          "category": "Main Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BF0F37D42-C602-41A7-AA73-9F3AF09FE00D%7D&file=FlightPlanning_JetPlan_WAM_TriageDocument.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "Flight_Planning_System_Summary.docx",
          "category": "Main Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B235791B5-2AC8-4E5B-AF7E-F5DCB33C256C%7D&file=Flight_Planning_System_Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "Flight Planning System Summary.docx",
          "category": "Main Source",
          "url": "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7B699F4E53-05D1-46F7-BC0B-DDE61D08A91E%7D&file=Flight%20Planning%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "FlightPlanSvc_Runbook.pdf",
          "category": "Main Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/ITS%20Flight%20Ops%20Runbooks%20(IOC)/FlightPlanSvc_Runbook.pdf?web=1"
        },
        {
          "title": "JetPlan_DRPlan.xlsx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B3960049C-C827-4F38-A1F6-649E183E60EE%7D&file=JetPlan_DRPlan.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "User Gets FRONTERR PERFORMANCE SERVER ERROR -1.docx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B852618A7-D2AA-4D06-ABFC-79BFE7867DA0%7D&file=User%20Gets%20FRONTERR%20PERFORMANCE%20SERVER%20ERROR%20-1.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "Service-Offering-Application-Metadata mapping 10-12-2026.xlsx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7BCCA8403B-C46B-47D8-8D7D-58429E9875D6%7D&file=Service-Offering-Application-Metadata%20mapping%2010-12-2026.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "title": "ACARS_Physical_View.pdf",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/ACARS%20(AS)/ACARS_Physical_View.pdf?web=1"
        },
        {
          "title": "FlywaysMessaging_FlywaysOptimization_Triage_Troubleshooting.docx",
          "category": "Additional Source",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BE6109FA6-1741-4020-B2D6-E29C9DF7AF1A%7D&file=FlywaysMessaging_FlywaysOptimization_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        }
      ],
      "lastUpdated": "Nov 04, 2026 (FlightPlanning_JetPlan_WAM_TriageDocument & Flight_Planning_System_Summary)"
    },
    "Smart4Aviation (S4A)": {
      "id": "Smart4Aviation (S4A)",
      "name": "Smart4Aviation (S4A)",
      "fullName": "S4A SmartSuite. Also called Smart4Aviation, SmartLoad, SmartComm, Weight and Balance",
      "icon": "public/applications/s4a.png",
      "function": "Airport Ops / Flight Ops: weight and balance and load planning",
      "category": "Airport Ops / Flight Ops: weight and balance and load planning",
      "vendor": "Smart4Aviation (based in Poland). Vendor application on in-house Linux servers",
      "vendorPOC": "Smart4Aviation Support (+48 12 379 3737 / support@smart4aviation.aero) | Account Manager: N/A in current source; named account manager not verified.",
      "aagPOC": "Ryan Wilkins",
      "aagTeam": "ITS Flight Operations. System Owner: Ryan Wilkins. Servers supported by the ITS JCTE System Admins",
      "environment": "Production (In-house Linux servers in IGQ and SE4)",
      "criticality": "Tier 1 and Ground Stop eligible. Impact is high if fully down, medium if only some services or data types are affected",
      "severity": "High",
      "status": "Operational",
      "response": "P1 updates: every 15-30 minutes - TBD in runbook (not confirmed). Leadership must be engaged for P1 | Sev 1: all CLP users down, or the URL is down | Sev 2: some users, or a critical inbound queue alert | Vendor response SLA: Not verified (24x7 vendor support documented; numerical contractual Smart4Aviation response and resolution targets not verified)",
      "resolution": "24x7 Support",
      "escalation": "email the support desk first. If there's no response or it's urgent, call the help line",
      "supportModel": "24x7 (Application Admin: Arun Sharma, Ryan Wilkins 07:00-15:30 with on-call 24/7; System Admin: ITS JCTE System Admins on-call 24/7)",
      "phone": "+48 12 379 3737",
      "phoneNote": "Smart4Aviation Support (24x7) | Service Desk: 1-877-238-1077",
      "email": "support@smart4aviation.aero",
      "portalUrl": "https://smartsuite.insideaag.com/",
      "description": "S4A pulls in flight, passenger, bag, cargo, crew, fuel and MEL data to automate weight and balance. It checks the actual load and sends the Load Closeout to the aircraft. If S4A is down, aircraft can't be safely prepared to depart on time.",
      "supportDescription": "When escalating, give: user name, role, flight number, flight date, departure city, and a description of the issue. Page or call each on-call contact twice within 90 seconds; if no response in 5 minutes, escalate to the next tier. For vendor issues, email the details and logs first, then call the help desk.",
      "escalationSteps": [
        "Open the S4A URL (https://smartsuite.insideaag.com/) and click SAML Login. A \"no access\" page means the site is up; any other error means it's down. If it's down: open a Sev 1, call the JCTE System Admin on-call, and notify the FltOps on-call and the S4A Product Admin.",
        "Confirm scope. All CLP users down is Sev 1; otherwise start at Sev 2.",
        "Check S4AP inbound queue alerts. A warning is Sev 3; a critical alert is Sev 2. Contact the JCTE System Admin on-call.",
        "Check outbound queue backups. Reassign to Middleware, then check the receiving service (FAACertWS, ZeroFuelWeightWS, RealTimeAlertsWS).",
        "Green \"unrecoverable error\" message: this is a network or infrastructure problem. One station is Sev 2; multiple stations is Sev 1.",
        "JBoss alert: if the JCTE admin doesn't respond within 5 minutes, follow the S4A instructions for ProdOps.",
        "Flights missing from desks: check the FOVerifySked job and contact COG FltOps.",
        "MEL data not updating: check that MtxEventPublisher is running on TUKVVAPP22, then check MQ and TIBCO.",
        "Check for recent changes to Middleware or TIBCO."
      ],
      "key": "Smart4Aviation (S4A)",
      "overview": {
        "purpose": "S4A pulls in flight, passenger, bag, cargo, crew, fuel and MEL data to automate weight and balance. It checks the actual load and sends the Load Closeout to the aircraft. If S4A is down, aircraft can't be safely prepared to depart on time.",
        "HostingEnvironment": "Linux servers in IGQ and SE4 (app, MQ and CS tiers) + PostgreSQL databases (s4a.wbpgdb.insideaag.com, SE4prS4Awbdb02) | Firewall / network rules: Not verified (server tiers IGQprS4Awb* / SE4prS4Awb*, MQ S4AP and QMMFP, and database alias s4a.wbpgdb.insideaag.com documented; specific approved firewall rules, ports, and load-balancer VIPs not verified)",
        "PrimaryFunctionalAreas": [
          "SmartLoad: Plans the load and calculates weight and balance (Load planning, Load Closeout)",
          "SmartComm: Alerts, messaging and message templates (Communications)",
          "SmartOps: Gantt view of flight schedules and tail numbers (Flight overview)",
          "App / MQ / CS servers: Linux servers in IGQ and SE4 (Hosting)",
          "PostgreSQL databases: s4a.wbpgdb.insideaag.com, plus reporting database SE4prS4Awbdb02 (Data storage and reporting)"
        ]
      },
      "triageChecklist": [
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
      "dependencies": {
        "upstream": [
          "MQ S4AP inbound queues: Flight, PAX, Baggage, Cargo, MEL, Crew, Fuel, EXT_ACARS, Assignment, FP_JEPPESEN, COMM_MESSAGE, XML_COMM",
          "Aircom (ACARS ground), RSA Mobile, iCargo",
          "Sabre (reservations and Flight Record Data), Visops, Crew Management, Dispatch (fuel requirements), M&E (MEL through MtxEventPublisher)",
          "JetPlan / Jeppesen flight plans"
        ],
        "downstream": [
          "ACARS / aircraft: Load Closeout and fuel slip, through FO.FLIGHT.LOAD.ACARS.UPLINK",
          "FAA Cert database (FINAL_LOAD_OUTBOUND)",
          "Estimated zero fuel weight (EZFW) / ZeroFuelWeightWS (fltops)",
          "AirClic / ULD Planeside tool (COMM_ALERT_OUTBOUND)",
          "Fuel vendors (fuel slips sent by email through outbound.alaskaair.com)",
          "Countdown and Ad-Hoc data feeds, PST, Turn Timeline",
          "CLP, stations and ramp agents"
        ]
      },
      "supportContacts": [
        {
          "team": "Smart4Aviation Support",
          "contact": "+48 12 379 3737 / support@smart4aviation.aero",
          "notes": "Escalation: email the support desk first. If there's no response or it's urgent, call the help line | Account Manager: N/A in current source; named account manager not verified."
        },
        {
          "team": "ITS System Owner & Technical Owners",
          "contact": "Ryan Wilkins (206-972-0228, ITS Flight Operations) | Technical Owners: Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified)",
          "notes": "Application Admin: Arun Sharma (206-392-8613), Ryan Wilkins (206-972-0228) (ITS Apps-Airline Ops), 07:00-15:30, with on-call 24/7"
        },
        {
          "team": "System Admin & Service Desk",
          "contact": "ITS JCTE System Admins on-call, 24/7 | Service Desk: 1-877-238-1077",
          "notes": "Business Owner Primary group: ITS Flight Operations; contact: N/A (named CLP/Airport Operations business focal: Not verified)"
        }
      ],
      "links": [
        {
          "label": "ITS Operations Runbook_S4A_SmartSuite_v1.1_0406_2026.docx",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B97741431-AD50-495E-BF14-0B66DDF51F08%7D&file=ITS%20Operations%20Runbook_S4A_SmartSuite_v1.1_0406_2026.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "label": "S4A_Triage_Troubleshooting.docx",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B06828A43-BB4C-42CD-870E-C2C4C607C9EC%7D&file=S4A_Triage_Troubleshooting.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "label": "S4A (Smart4Aviation) IT Support Documentation.docx",
          "url": "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BC715869B-33B8-41C2-8C4B-B84C73EAEB6C%7D&file=S4A%20(Smart4Aviation)%20IT%20Support%20Documentation.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "label": "S4A (Smart4Aviation) System Summary.docx",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B5DFC0539-A7FA-4D53-AF6D-CDC9720C0F9E%7D&file=S4A%20(Smart4Aviation)%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "label": "Monitoring alert for Jboss services for S4A.docx",
          "url": "https://alaskaair.sharepoint.com/sites/ITSKnowledgeManagement/_layouts/15/Doc.aspx?sourcedoc=%7BBBAF6694-880E-4D77-8F81-ABC9B9C07818%7D&file=Monitoring%20alert%20for%20Jboss%20services%20for%20S4A.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "label": "S4A System Logical_Orig.pdf",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/SysDoc/Aircraft%20Weight%20and%20Balance/Weight%20and%20Balance%20-%20S4A%20Additional%20Docs/Logical%20Diagram/S4A%20System%20Logical_Orig.pdf?web=1"
        },
        {
          "label": "MtxEventPublisher Service (M&E) System Summary.docx",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7BC6CC21A6-60FF-425F-8CDD-23CB5752EA51%7D&file=MtxEventPublisher%20Service%20(M%26E)%20System%20Summary.docx&action=default&mobileredirect=true&DefaultItemOpen=1"
        },
        {
          "label": "S4A_Smartload_DR.xlsx",
          "url": "https://alaskaair.sharepoint.com/sites/SysDocs/_layouts/15/Doc.aspx?sourcedoc=%7B6151C57B-2D9B-44F2-A1FC-0DDD3B901ED5%7D&file=S4A_Smartload_DR.xlsx&action=default&mobileredirect=true"
        },
        {
          "label": "Executive Summary of Incidents 2025-12 to Current Date.xlsx",
          "url": "https://alaskaair.sharepoint.com/sites/ITSProductionOperations169-ProdOpsTeamChannel/_layouts/15/Doc.aspx?sourcedoc=%7BE5D240DC-3123-4D8D-8A59-CF1533D32C5B%7D&file=Executive%20Summary%20of%20Incidents%202025-12%20to%20Current%20Date.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1"
        }
      ],
      "lastUpdated": "Nov 04, 2026 (ITS Operations Runbook_S4A_SmartSuite_v1.1_0406_2026)"
    },
    "brockSmartsuite": {
      "id": "brockSmartsuite",
      "name": "Brock SmartSuite",
      "icon": "public/applications/aircraft-maintenance.png",
      "function": "Brock SmartSuite",
      "category": "Brock SmartSuite",
      "vendor": "Brock Solutions",
      "vendorPOC": "NA",
      "aagPOC": "Meredith Park",
      "aagTeam": "ITS Baggage",
      "environment": "Production",
      "criticality": "High",
      "severity": "High",
      "status": "Operational",
      "response": "20 minutes",
      "resolution": "TBD",
      "escalation": "TBD",
      "supportModel": "Brock Solutions + ITS COG AirportOps Support / ITS Baggage",
      "phone": "+1-877-710-6857",
      "phoneNote": "NA",
      "email": "NA",
      "description": "Brock SmartSuite is a SaaS application hosted by Brock Solutions which is comprised of a web client and mobile (scanner) client used to scan and track checked-in baggage.",
      "supportDescription": "Support follows the approved vendor and AAG ITS operational escalation model.",
      "escalationSteps": [
        "Validate operational impact.",
        "Contact the on-call from ITS COG AirportOps Support.",
        "Notify to ITS FS Field Services Support / Reach out to Vendor Brock Solutions if needed.",
        "Escalate according to the documented support process."
      ]
    },
    "jcte": {
      "id": "jcte",
      "name": "JCTE",
      "fullName": "JCTE (Jeppesen Crew Tracking Enterprise). Also called Crew Access, Crew Exchange, Crew Scheduling System, CMS",
      "icon": "public/applications/jcte.png",
      "function": "Crew: crew scheduling and tracking for about 10,100 crew members",
      "category": "Crew: crew scheduling and tracking for about 10,100 crew members",
      "vendor": "Jeppesen",
      "vendorPOC": "Jeppesen 24x7: +1-303-328-6412 (effective 01 Apr 2026; replaces +1-562-797-6193 which expired March 31, 2026; ITS Vendor Information - 2026.xlsx still lists 1-562-797-6193) / opssupport@jeppesen.com (Don't share the number; ProdOps uses it only for Sev 1) | Account Manager: Not verified (blank in JCTE system summaries)",
      "aagPOC": "Sue Rawlings",
      "aagTeam": "ITS JCTE System Admins. Tech Owner: Sue Rawlings",
      "environment": "Production (Linux server Tukv3cmsinf01, Oracle DB Tukvvcmsdb01, W3 / DMZ domain SEAVVW3.local)",
      "criticality": "Tier 1. Standard ITS Tier 1 SLAs apply",
      "severity": "Critical",
      "status": "Operational",
      "response": "Standard ITS Tier 1 SLAs | Sev 1: flight delays, all users down, or multiple users can't log in | Sev 2: Crew Access fully down (both servers), or Alert Monitor problems causing delays | Update cadence & numerical SLAs: Not verified",
      "resolution": "24x7 Support",
      "escalation": "The JCTE System Admins contact Jeppesen. Don't open tickets to the Crew team for crew questions. Send FAs to their scheduling committees, and pilots to the MEC Scheduling Chair.",
      "supportModel": "24x7 (System Administration and Everbridge Focal: Sue Rawlings, 253-341-1173; Everbridge Backups: Nathan McFerren (253-455-5119), Terrance Chariandy (phone: Not verified), Keenan Faatea (phone: Not verified))",
      "phone": "+1-303-328-6412, effective 01 Apr 2026 (replaces +1-562-797-6193). For ProdOps Sev 1 use only. Otherwise the System Admins contact Jeppesen",
      "phoneNote": "For ProdOps Sev 1 use only. Otherwise the System Admins contact Jeppesen | Service Desk: 1-877-238-1077",
      "email": "opssupport@jeppesen.com",
      "portalUrl": "http://crewtracking.alaskaair.com/",
      "description": "JCTE is the system of record for Alaska crew scheduling and tracking. If it goes down, schedulers can't manage crews and crew members can't see schedules or check in. When it causes flight delays, it is treated as Sev 1.",
      "supportDescription": "Don't open tickets to the Crew team for crew questions. Send FAs to their scheduling committees, and pilots to the MEC Scheduling Chair. When escalating, give: user name, PeopleSoft ID, which app they're using, how they're accessing it, steps to reproduce, and screenshots. The JCTE System Admins contact Jeppesen. Disaster Recovery: Disaster Recovery Plan - JCTE.xls (SharePoint).",
      "escalationSteps": [
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
      "key": "jcte",
      "lastUpdated": "Nov 04, 2026 (JCTE System Summary 3 19 26 & JCTE_Triage_Troubleshooting_6.10.25)"
    },
    "airtrack": {
      "id": "airtrack",
      "name": "Airtrak",
      "fullName": "AirTrak. Also called AOC App, Ops360, Irrops",
      "icon": "public/applications/airtrack.png",
      "function": "Flight Ops: real-time control of the operation (aircraft assignments, Irrops, flight status)",
      "category": "Flight Ops: real-time control of the operation (aircraft assignments, Irrops, flight status)",
      "vendor": "In-house (no vendor)",
      "vendorPOC": "Not applicable (built in-house). For outside platforms: Microsoft Azure Support, Ping Identity, Split.io",
      "aagPOC": "GK Maganty",
      "aagTeam": "ITS Ops 360 AirtrAK (Team.Maganty@alaskaair.com)",
      "environment": "Production (Azure Front Door Premium, AKS in West US 2 & West Central US, App Service, Ops360 Azure SQL)",
      "criticality": "Tier 1 and Ground Stop eligible. Business impact: High",
      "severity": "High",
      "status": "Operational",
      "response": "Recovery target: 1 hour or less | 15 minutes if multiple machines are affected or no backup machine is available. Otherwise Sev 3 | Sev 1: flights missing within 24 hours. Sev 2: all users can't access, or Irrops fail within 24 hours | Update cadence: P1 every 15-30 minutes (aoc-runbook.docx); P2/RRT0: Not verified",
      "resolution": "1 hour or less (24x7)",
      "escalation": "On-call is through xMatters or Everbridge. Page or call twice within 90 seconds, and escalate if there's no response in 5 minutes.",
      "supportModel": "24x7. Target recovery: 1 hour or less (On-Call: ITS Ops 360 AirtrAK. AKS issues: ITS Automated Services. Business Owners: Sean Duggan (Sean.Duggan@alaskaair.com; phone: Not verified), Reid Childress (Reid.Childress@alaskaair.com; phone: Not verified), Michael Dunn (email/phone: Not verified))",
      "phone": "206-227-1134 (GK Maganty)",
      "phoneNote": "Everbridge Focal: TJ Banakes, 253-653-5097 | Backup: Katie Michel, 971-235-0986 | Service Desk: 877-238-1077",
      "email": "Team.Maganty@alaskaair.com",
      "portalUrl": "https://airtrak.alaskasworld.com",
      "description": "AirTrak is the AOC's real-time control tool for AS and QX. Teams use it for aircraft swaps, aircraft movement, Irrops and watching the whole system. If it goes down, the AOC loses real-time visibility and can't take action across the network.",
      "supportDescription": "On-call is through xMatters or Everbridge. Page or call twice within 90 seconds, and escalate if there's no response in 5 minutes. ProdOps leads or co-leads P1, P2 and RRT0 bridges. When escalating, give: flight number, flight date, Irrops type attempted, and number of users affected.",
      "escalationSteps": [
        "Confirm scope: one user, multiple users, or all users, and whether the users are AS, QX or HA.",
        "Single user: check the URL, the login redirect, and browser cache and filters. This is Sev 4.",
        "All users locked out: restart the Auth API and Assignments API in both regions. If that doesn't fix it, open a Sev 2 and page the ITS Ops 360 AirtrAK on-call.",
        "503 or other 500-series errors: restart the UI App Services in both regions.",
        "No flights showing: restart the Flights API. Some flights missing: restart ScheduleFlightAddFunction.",
        "Ground events or Irrops reasons missing: check the AKS pods. If pods are down, call ITS Automated Services. If pods are up, call the AirtrAK on-call.",
        "Check Application Insights, the Front Door health probe, and changes from the last 48 hours.",
        "Check PingFederate, Azure/ExpressRoute and network health. Engage Identity, Network or Cloud teams as needed."
      ],
      "key": "airtrack",
      "lastUpdated": "Nov 04, 2026 (aoc-runbook, Airtrak_System_Summary & Airtrak_Triage_Troubleshooting)"
    },
    "pilot-briefing": {
      "id": "pilot-briefing",
      "name": "Pilot Briefing",
      "fullName": "Pilot Briefing. Also called JetStream, Briefing Packets. JetPack is a separate pilot mobile app, not another name for it",
      "icon": "public/applications/pilot-briefing.png",
      "function": "Flight Ops: briefing packets (flight paperwork). Printing them before takeoff is an FAA requirement",
      "category": "Flight Ops: briefing packets (flight paperwork). Printing them before takeoff is an FAA requirement",
      "vendor": "None; built in-house. Weather data comes from The Weather Company",
      "vendorPOC": "The Weather Company (weather only): 1-800-872-2359 (option 3) or 1-800-USA-2FLY (option 3) / PilotBrief@weather.com. They rate all stations affected as Sev 1, and some stations as Sev 2 | Account Manager: Not verified (Weather_System_Summary.docx lists Tom Bulluck, Customer Support Manager, +1 603-459-4027, and Elizabeth Reti, North America Sales, +1 978-409-8335 / Elizabeth.reti@weather.com)",
      "aagPOC": "Ben Shocki (425-273-1560), Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified)",
      "aagTeam": "ITS Flight Operations / ITS COG Flight Operations. Technical Owners: Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified)",
      "environment": "Production (SDP platform pods in IGQ and TUK behind Azure Front Door, 2012 DNA farm SEAV3DNA09-16 / TUKV3DNA09-16)",
      "criticality": "Ground Stop. 24x7, critical to operations",
      "severity": "Critical",
      "status": "Operational",
      "response": "Sev 2: multiple users or flights, or a single user when it could cause a delay. Sev 3: single user and single flight | Initial response and update cadence: Not verified (PilotBriefingWs-Runbook.docx lists P1 updates every 15-30 minutes, but explicitly states the runbook is not approved for operational use)",
      "resolution": "24x7 Support",
      "escalation": "If the problem continues, page the ITS COG Flight Operations on-call: Sev 2 if multiple users or delays, Sev 3 for a single user.",
      "supportModel": "24x7 (ITS System Owner: Ben Shocki, 425-273-1560 (8-5) | Technical Owners: Ryan Wilkins (206-972-0228), Adele Lunde (Adele.Lunde@AlaskaAir.com; phone: Not verified) | AS Dispatch Admin: Leo Blanco, 206-688-3213 | QX Business Owner & AS/QX Everbridge Focal: Mike Timpe, 206-574-4789 / 503-702-3463 (separate AS Business Owner: Not verified) | On-Call: ITS COG Flight Operations)",
      "phone": "206-972-0228 (ITS POC Ryan Wilkins). Weather vendor: 1-800-872-2359 (option 3)",
      "phoneNote": "Weather vendor: 1-800-872-2359 (option 3) or 1-800-USA-2FLY (option 3) | Service Desk: 1-877-238-1077",
      "email": "ITS.Service.Desk@alaskaair.com (Troubleshooting contact) | PilotBrief@weather.com (Weather vendor)",
      "portalUrl": "http://fogsweb.insideaag.com/jetstreamwebsite/jetstream.aspx",
      "description": "Pilot Briefing produces the FAA-required briefing packet for every flight. If a major part fails, the whole system goes down. If a minor part fails, packets come out incomplete or won't print.",
      "supportDescription": "When escalating, give: server name, error message, airline, flight number, origin, and the station printer name. Share flight details only through approved channels.",
      "escalationSteps": [
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
      "key": "pilot-briefing",
      "lastUpdated": "Nov 05, 2026 (Pilot_Briefing_System_Summary, Pilot_Briefing_Triage_Troubleshooting & SOP Review and Closure Tracker - 2026)"
    },
    "aircraft-maintenance": {
      "id": "aircraft-maintenance",
      "name": "Aircraft Maintenance",
      "fullName": "Aircraft Maintenance Status (AMS). Also called ME Portal, Out of Service Recovery, OTS Recovery",
      "icon": "public/applications/aircraft-maintenance.png",
      "function": "Maintenance & Engineering: tracks aircraft from removal from service to return to service",
      "category": "Maintenance & Engineering: tracks aircraft from removal from service to return to service",
      "vendor": "None; built in-house. Uses Twilio for its chat and timeline features",
      "vendorPOC": "Not applicable (built in-house). Support hours: ITS COG M&E APP Support: 24x7",
      "aagPOC": "Brad Dufour, +1 614-779-1493 (Card POC) | ITS System Owner: Jerred Slavata (Jerred.Slavata@alaskaair.com)",
      "aagTeam": "ITS COG M&E App Support (24x7). ITS System Owner: Jerred Slavata",
      "environment": "Production (SDP Azure and on-premises, Informix fltops.alaskaair.com, Cosmos DB outofservicerecoveryDB, IBM MQ wmq1as.alaskaair.com:1425)",
      "criticality": "On the Ground Stop list in the SOP tracker (not listed in Ground Stop Applications List.docx 2026-08-18). The system summary rates it Sev 2",
      "severity": "High",
      "status": "Operational",
      "response": "Sev 2 system | System administration support hours: ITS COG M&E APP Support: 24x7 | MtxEventPublisher OTS alert: open a Sev 2, with resolution expected within 1 hour | Update cadence: Not verified",
      "resolution": "ITS COG M&E APP Support: 24x7 (MtxEventPublisher OTS alert: resolution expected within 1 hour)",
      "escalation": "On-Call: ITS COG M&E App Support (24x7). Escalate to the product team (Griffin)",
      "supportModel": "ITS COG M&E APP Support: 24x7 (ITS System Owner: Jerred Slavata (Jerred.Slavata@alaskaair.com; phone: Not verified) | Card POC: Brad Dufour (Bradley.Dufour@alaskaair.com, +1 614-779-1493, Manager, Software Engineering; AMS-specific role: Not verified) | Ownership discrepancy: MEPortal_System_Summary.docx (2026-09-21) lists Business Owners Tim Lyons (AS) & Shawn Warnat (QX) and System Admin ITS COG M&E APP Support (24x7), while ME PortalAircraft Maintenance Status Application System Summary.docx lists Catherine Harris (phone: Not verified) as Business Owner & System Admin with Tim Lyons (AS) and Shawn Warnat (QX) for access approvals. The MOM on duty grants permissions | On-Call: ITS COG M&E App Support. Escalate to the product team (Griffin))",
      "phone": "+1 614-779-1493",
      "phoneNote": "Built in-house (ITS COG M&E APP Support: 24x7) | Service Desk: 877-238-1077",
      "email": "Jerred.Slavata@alaskaair.com",
      "portalUrl": "https://me-meportal.alaskaair.com/",
      "description": "AMS is the system of record for which aircraft are out of service. When AMS and Informix fall out of sync, other systems show the wrong OTS status, including AirTrak. URL: https://me-meportal.alaskaair.com/",
      "supportDescription": "Service Desk does not change AD groups or AMS permissions. Send access requests to the business. Include the time and aircraft details in tickets. M&E support shares out-of-sync findings with Maintenance Controllers and MOMs.",
      "escalationSteps": [
        "Confirm scope: one tail number, multiple tails, or the whole app. A single mismatch is a local sync problem, not an outage; check with SOC/MOM first.",
        "Page not loading: clear cookies. If it still fails, assign to M&E support (Sev 2).",
        "Check that Informix (fltops.alaskaair.com) is up. If it isn't, call the Informix DBA on-call (XTIVIA).",
        "Out-of-sync banner: check Cosmos DB SyncCompareResponse (AircraftToAdd, AircraftToClose, AircraftToUpdate) and the Informix OUTSERV table.",
        "Check for locked records in Informix. Engage the DBA to release the locks.",
        "Check Application Insights for exceptions in the sync functions.",
        "AirTrak OTS stale: look for the \"MtxEventPublisherService for OTS Prod failed\" alert, check the pod in ArgoCD, and check the MQ connection. Open a Sev 2 and engage the M&E on-call."
      ],
      "key": "aircraft-maintenance",
      "lastUpdated": "Nov 05, 2026 (ME PortalAircraft Maintenance Status Application System Summary, MEPortal_Triage_Troubleshooting & SOP Review and Closure Tracker - 2026)"
    },
    "aims": {
      "id": "aims",
      "name": "AIMS",
      "fullName": "AIMS (Aviation Information Management System). Also called Horizon Crew Scheduling / Tracking, and eCrew for the web app",
      "icon": "public/applications/aims.png",
      "function": "Crew: scheduling pilots and flight attendants (FAs) for Horizon, including bids and trip trades. QX only",
      "category": "Crew: scheduling pilots and flight attendants (FAs) for Horizon, including bids and trip trades. QX only",
      "vendor": "AIMS, based in Athens, Greece",
      "vendorPOC": "AIMS (Athens): +30 210 940 2300 (00-30-210-940-2300). Voicemail: 1-305-468-6336 | Email conflict across sources: aims@aims.aero, Support247@aims.aero, aims@aimsmail.com | The Business Focal handles all escalation to the vendor | Account Manager: Not verified (blank in vendor workbook and system summaries)",
      "aagPOC": "Sue Rawlings (253-341-1173), Adam Kalb (425-578-4570)",
      "aagTeam": "ITS COG Crew Support (Sue Rawlings, 253-341-1173). Technical Owner: Adam Kalb (425-578-4570). Shared AIMS Support: aims.support@horizonair.com",
      "environment": "Production (SQL Server aims.sql.insideaag.com,1450, App servers seapraimsapp21/22 & tukpraimsapp20/21/22, Job Scheduler SEAPRAIMSJS10, Citrix & DMZ web servers)",
      "criticality": "Ground Stop. The scheduler app (through Citrix) is Sev 1; the eCrew web app is Sev 2",
      "severity": "Critical",
      "status": "Operational",
      "response": "Sev 1: AIMS scheduler app down. Sev 2: eCrew, or the crew feed to VisOps failing | Sev 3: upload or download data issues | Support hours, response times, and update cadence: Not verified (4-hour statement in summary is operational impact tolerance, not a contractual SLA)",
      "resolution": "Not verified (vendor & internal support hours and numerical SLAs not verified)",
      "escalation": "The Business Focal (Mick Niemann) handles all escalation to the vendor",
      "supportModel": "Support hours: Not verified (Technical Owner: Adam Kalb, 425-578-4570 | ITS COG Crew Support: Sue Rawlings, 253-341-1173 | Shared AIMS Support: aims.support@horizonair.com | AIMS Admins / Business SMEs: Bethany Dundon (503-866-4664 cell, Bethany.dundon@alaskaair.com), Shannon McCarthy (Shannon.mccarthy@alaskaair.com; phone: Not verified) | Listed with Adam Kalb in Critical Apps: Kirk Phippen | Accountable Director: Guillermo Todd | Business Focal: Mick Niemann, cell 360-241-6902 (work-phone conflict: 206-225-2859 in 2026-09-14 summary vs 503-384-4557 in older summary) | On-Call: ITS COG Crew Support)",
      "phone": "+30 210 940 2300. Voicemail: 1-305-468-6336",
      "phoneNote": "AIMS (Athens): +30 210 940 2300 (00-30-210-940-2300). Voicemail: 1-305-468-6336 | Business Focal: Mick Niemann, cell 360-241-6902 (work-phone conflict: 206-225-2859 vs 503-384-4557)",
      "email": "aims@aims.aero (source conflict: aims@aims.aero, Support247@aims.aero, and aims@aimsmail.com appear across sources; internal shared mailbox: aims.support@horizonair.com)",
      "portalUrl": "https://ecrew.horizonair.com",
      "description": "AIMS is the system of record for Horizon crew schedules. If it goes down, QX schedulers can't manage crews, and crew data stops flowing to VisOps, AirTrak and payroll.",
      "supportDescription": "The Business Focal (Mick Niemann) decides when to contact AIMS support. When escalating, give: browser version, whether it's eCrew or AIMS, and for AIMS, whether the user is on desktop or Citrix, plus their user ID and IP address. For functional issues, collect screenshots, steps to reproduce and error messages, then email the System Admin.",
      "escalationSteps": [
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
      "key": "aims",
      "lastUpdated": "Nov 05, 2026 (AIMS HorizonCrewTracking_System_Summary_6.10.25 & Triage_Troubleshooting_6.10.25)"
    }
  },
  "vendors": [
    {
      "sourceRow": 2,
      "systemName": "S4A - Smart4Aviation/Weight and Balance",
      "category": "",
      "vendor": "Smart4Aviation",
      "escalation": "Vendor Company Name:  \tSmart4Aviation\nVendor Phone:  \t\t\t+ 48 12 379 3737\nVendor Email:  \t\t\tsupport@smart4aviation.aero\nVendor Contact Name:\t\t N/A\nEscalation Procedure Steps: Email support desk.  If no response or urgent matter, call help line to escalate.",
      "phone": "48 12 379 3737",
      "email": "support@smart4aviation.aero",
      "vendorPoc": "NA",
      "aagItsPoc": "Arun Sharma / Ryan Wilkins",
      "aagItsTeam": "ITS Flight Operations",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "S4A - Smart4Aviation/Weight and Balance",
      "displaySubtitle": "S4A - Smart4Aviation/Weight and Balance",
      "id": "smart4aviation",
      "logo": "public/vendors/smart4aviation.jpg",
      "company": "Smart4Aviation",
      "poc": "NA"
    },
    {
      "sourceRow": 3,
      "systemName": "Aircraft performance data",
      "category": "AS",
      "vendor": "Dynamic Source",
      "escalation": "Vendor Company Name: \tDynamic Source \nVendor Phone: \t\t011 46 8 410 781 77\n\t\t\t(011  International prefix, 46 is Sweden)\nVendor Email: \t\tSupport@dynamicsource.se\nRep\t\t\tChristopher Martinsson or Mattias Forsberg\nRep Email\t\tml@dynamicsource.se\nRep Phone\t\t+61 487 432 884",
      "phone": "46 8 25 38 68 (International Call)",
      "email": "support@dynamicsource.se",
      "vendorPoc": "Thomas Strand, ts@dynamicsource.se ( +46 709 900 652)\nChristopher Martinsson, cm@dynamicsource.se\nMattias Forsberg, mf@dynamicsource.se (+46 709 900 177)\nClaes Merin, claes@dynamicsource.se",
      "aagItsPoc": "",
      "aagItsTeam": "DSO (Director of Systems Operations/ ITS COG FlightOps Support / ITS Flight Operations)",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Aircraft performance data",
      "displaySubtitle": "AS",
      "id": "aircraft-performance",
      "logo": "public/vendors/dynamic-source.png",
      "company": "Dynamic Source",
      "poc": "Thomas Strand, ts@dynamicsource.se ( +46 709 900 652)\nChristopher Martinsson, cm@dynamicsource.se\nMattias Forsberg, mf@dynamicsource.se (+46 709 900 177)\nClaes Merin, claes@dynamicsource.se"
    },
    {
      "sourceRow": 4,
      "systemName": "AeroData",
      "category": "Flight Operations / Aircraft Performance Data",
      "vendor": "AeroData",
      "escalation": "1. Call 480-443-7740, prompt 3 for Technical Support.\n2. Email:\ni) support@aerodata.aero (general technical/customer support)\nii) rwydata@aerodata.aero (airport, runway, and NOTAM inquiries)\n3. Support Service Hours: Production service availability is documented as 24x7. Email sent outside business hours can receive expedited handling by putting URGENT in the subject; documented response is 5-10 minutes.\n4. Primary ITS Team Owner: ITS COG Flight Operations (unresolved/multi-flight issues).",
      "phone": "480-443-7740, prompt 3 for Technical Support.",
      "email": "support@aerodata.aero (general technical/customer support)\nrwydata@aerodata.aero (airport, runway, and NOTAM inquiries)",
      "vendorPoc": "(Add Account Manager)",
      "aagItsPoc": "ITS COG Flight Operations / on-call",
      "aagItsTeam": "ITS COG Flight Operations",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "AeroData",
      "displaySubtitle": "Flight Operations / Aircraft Performance Data (QX)",
      "id": "aerodata",
      "logo": "public/vendors/aerodata.jpg",
      "company": "AeroData",
      "poc": "(Add Account Manager)",
      "portalUrl": "https://www.aerodata.co/en-US/"
    },
    {
      "sourceRow": 5,
      "systemName": "ACARS",
      "category": "Flight Ops: aircraft-to-ground communications",
      "vendor": "SITA",
      "escalation": "Vendor Contacts:\n• SITA Help Desk: 866-247-2661 (24/7)\n• SITA Aircom support: 1-888-247-2661, option 4 / Aircom.support@sitaonair.aero\n• ARINC Help Desk: 800-633-6882 / helpdesk@arinc.com\n• ARINC Senior On-Duty Ops Manager (24x7): 410-266-4029 / AOC@arinc.com\n• Account Manager: (Add Account Manager)\n\nCommunication Guidelines:\n• For SITA issues, an assigned developer follows up with SITA and escalates.\n• When escalating, include the scope: one aircraft (tail), one flight (date, flight, city pair), or the whole fleet, plus which Ops group is affected.",
      "phone": "SITA: 1-888-247-2661, option 4 (Aircom). ARINC: 800-633-6882",
      "email": "SITA: Aircom.support@sitaonair.aero. ARINC: helpdesk@arinc.com",
      "vendorPoc": "(Add Account Manager)",
      "aagItsPoc": "Ryan Wilkins, 206-972-0228",
      "aagItsTeam": "ITS COG FlightOps Support / ITS Flight Operations",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "ACARS",
      "displaySubtitle": "Flight Ops: aircraft-to-ground communications (ACARS Ground System / AIRCOM)",
      "id": "sita",
      "logo": "public/vendors/sita.png",
      "company": "SITA",
      "poc": "(Add Account Manager)"
    },
    {
      "sourceRow": 6,
      "systemName": "ARINC",
      "category": "communication to aircraft",
      "vendor": "ARINC",
      "escalation": "Vendor Company Name: \tARINC \nVendor Phone: \t\t\t800-633-6882 \nVendor Email: \t\t\thelpdesk@arinc.com \nVendor Contact Name: \nEscalation Procedure Steps:  \tARINC Senior On-Duty Operations Manager (Rotating) 24x7 \n410.266.4029  \nAOC@arinc.com",
      "phone": "800-633-6882",
      "email": "helpdesk@arinc.com",
      "vendorPoc": "ARINC Senior On-Duty Operations Manager (Rotating) 24x7\n410.266.4029\nAOC@arinc.com",
      "aagItsPoc": "Ryan Wilkins",
      "aagItsTeam": "ITS COG FlightOps Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "ARINC",
      "displaySubtitle": "Aircraft communication",
      "id": "arinc",
      "logo": "public/vendors/arinc.png",
      "company": "ARINC",
      "poc": "ARINC Senior On-Duty Operations Manager (Rotating) 24x7\n410.266.4029\nAOC@arinc.com",
      "portalUrl": "https://auth.direct.arinc.net/"
    },
    {
      "sourceRow": 7,
      "systemName": "Flight Planning",
      "category": "",
      "vendor": "Jeppesen",
      "escalation": "1. Call the 1- 800- 732- 2800\n2. State - “Flight planning”  for product when prompted\n3. Remain on line \n4. When asked for account number provide the following # 83491\nEmail : OpsSupport@jeppesen.com\n\nNormal Contact:\nVendor Email: OpsSupport@jeppesen.com \nVendor Contact Name:  \nContact AAG Business focals: Katie Pagel or Leo Blanco (AS) /Mike Timpe (QX) \nEscalation Procedure Steps: The Business Focal will follow-up with Jeppesen and will escalate",
      "phone": "1- 800- 732- 2800",
      "email": "OpsSupport@jeppesen.com",
      "vendorPoc": "",
      "aagItsPoc": "Ryan Wilkins",
      "aagItsTeam": "ITS COG FlightOps Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Flight Planning",
      "displaySubtitle": "Operatins Partner",
      "id": "jeppesen-flight-planning",
      "logo": "public/vendors/jeppesen.png",
      "company": "Jeppesen",
      "poc": ""
    },
    {
      "sourceRow": 9,
      "systemName": "Weather",
      "category": "Weather Issues",
      "vendor": "TWC/The Weather Company",
      "escalation": "Vendor Primary Contact Information:\nVendor Company Name: \tTWC/ The Weather Company\nVendor Phone: \t\t\t1-800-872-2359 (option 4) for Weather Issues\nVendor Email:\t\t\t fieldandfacilities@weather.com\n\nVendor Secondary Option:\nVendor Company Name: \tIBM/ The Weather Company\nVendor Phone: \t\t\t1- 978-983-6352 (direct line to Meteorological Operations team) \nVendor Email:\t\t\t metops@weather.com",
      "phone": "Vendor Primary Contact Information:\nVendor Phone: 1-800-872-2359 (option 4) for Weather Issues\n\nVendor Secondary Option:\nVendor Phone: 1- 978-983-6352 (direct line to Meteorological Operations team)",
      "email": "Vendor Primary Contact Information:\nVendor Email:\t\t\t fieldandfacilities@weather.com\n\nVendor Secondary Option:\nVendor Email:\t\t\t metops@weather.com",
      "vendorPoc": "Vendor  Reps (roles and contact information):\n  \nVendor Rep: \tTom Bulluck - Customer Support Manager \nPhone: \t\t+1  603-459-4027 (cell) \n\nVendor Rep: \tElizabeth Reti - North America Sales \nPhone: \t\t+1  978-409-8335 (cell) \nEmail:\t\tElizabeth.reti@weather.com\t\n \nVendor Rep:\t Ravi Vanmali - Head of Aviation \nPhone: \t\t+1  678-472-1990 (cell) \n\nVendor Rep: \tBill Dow - Head of Product \nPhone: \t\t+1  603-303-0437 (cell) \n\nVendor Rep: \tNick Servetas - North America Sales #2 \nEmail: \t\tNicholas.servetas@weather.com",
      "aagItsPoc": "",
      "aagItsTeam": "ITS COG FlightOps Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Weather",
      "displaySubtitle": "Weather Issues",
      "id": "ibm-weather",
      "logo": "public/vendors/the-weather-company.webp",
      "company": "TWC/The Weather Company",
      "poc": "Vendor  Reps (roles and contact information):\n  \nVendor Rep: \tTom Bulluck - Customer Support Manager \nPhone: \t\t+1  603-459-4027 (cell) \n\nVendor Rep: \tElizabeth Reti - North America Sales \nPhone: \t\t+1  978-409-8335 (cell) \nEmail:\t\tElizabeth.reti@weather.com\t\n \nVendor Rep:\t Ravi Vanmali - Head of Aviation \nPhone: \t\t+1  678-472-1990 (cell) \n\nVendor Rep: \tBill Dow - Head of Product \nPhone: \t\t+1  603-303-0437 (cell) \n\nVendor Rep: \tNick Servetas - North America Sales #2 \nEmail: \t\tNicholas.servetas@weather.com"
    },
    {
      "sourceRow": 10,
      "systemName": "WSI Fusion",
      "category": "WSI Fusion",
      "vendor": "WSI Fusion",
      "escalation": "1. Call the 1-800-872-2359 (option 2) for WSI Fusion\n2. Email - fusion@weather.com\nVendor Customer ID\nAS : 42119\nQX : 45321",
      "phone": "1-800-872-2359 (option 2) for WSI Fusion",
      "email": "fusion@weather.com",
      "vendorPoc": "",
      "aagItsPoc": "Ryan Wilkins",
      "aagItsTeam": "ITS COG FlightOps Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "WSI Fusion",
      "displaySubtitle": "Weather feed / fusion services",
      "id": "wsi-fusion",
      "logo": "public/vendors/wsi-fusion.webp",
      "company": "WSI Fusion",
      "poc": ""
    },
    {
      "sourceRow": 11,
      "systemName": "JCTE",
      "category": "",
      "vendor": "Jeppesen",
      "escalation": "JCTE System Administrators should be contacted.  They will reach out to the vendor as needed. \nVendor Company Name: Jeppesen \nVendor Phone: Please reach out to the JCTE System Administrators",
      "phone": "1-562-797-6193 (Only for Sev 1)",
      "email": "OpsSupport@jeppesen.com",
      "vendorPoc": "",
      "aagItsPoc": "Sue Rawlings, Russell Ruiz",
      "aagItsTeam": "ITS Crew Systems Product",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "JCTE",
      "displaySubtitle": "JCTE",
      "id": "jcte",
      "logo": "public/vendors/jeppesen.png",
      "company": "Jeppesen",
      "poc": ""
    },
    {
      "sourceRow": 12,
      "systemName": "Sabre",
      "category": "",
      "vendor": "SABRE",
      "escalation": "Vendor Company Name: SABRE \nVendor Phone: 888-421-8889 \nVendor Email: SabreSonic.HelpDesk@Sabre.com \nVendor Contact Name: On-call Help Desk \n\nEscalation Procedure Steps:  \nEscalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged. \nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com  \nCustomer Care Incident Manager Phone: +1 682 605 3570",
      "phone": "888-421-8889",
      "email": "SabreSonic.HelpDesk@Sabre.com",
      "vendorPoc": "Escalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged. \nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com \nCustomer Care Incident Manager Phone: +1 682 605 3570  \n*For a SABRE Sev1, and Sev2:  They will assign a Customer Care Incident Manager (CCIM) automatically to us when a high severity ticket is assigned.",
      "aagItsPoc": "Benjamin Supnet",
      "aagItsTeam": "ITS ACE - Sabre",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Sabre",
      "displaySubtitle": "Sabre",
      "id": "sabre",
      "logo": "public/vendors/sabre.png",
      "company": "SABRE",
      "poc": "Escalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged. \nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com \nCustomer Care Incident Manager Phone: +1 682 605 3570  \n*For a SABRE Sev1, and Sev2:  They will assign a Customer Care Incident Manager (CCIM) automatically to us when a high severity ticket is assigned."
    },
    {
      "sourceRow": 13,
      "systemName": "Image Reservations",
      "category": "",
      "vendor": "SABRE",
      "escalation": "Vendor Company Name: SABRE \nVendor Phone: 888-421-8889 \nVendor Email: SabreSonic.HelpDesk@Sabre.com \nVendor Contact Name: On-call Help Desk \n\nEscalation Procedure Steps:  \nEscalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged. \nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com  \nCustomer Care Incident Manager Phone: +1 682 605 3570",
      "phone": "888-421-8889",
      "email": "SabreSonic.HelpDesk@Sabre.com",
      "vendorPoc": "Escalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged. \nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com \nCustomer Care Incident Manager Phone: +1 682 605 3570  \n*For a SABRE Sev1, and Sev2:  They will assign a Customer Care Incident Manager (CCIM) automatically to us when a high severity ticket is assigned.",
      "aagItsPoc": "Benjamin Supnet",
      "aagItsTeam": "ITS ACE Sabre",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Image Reservations",
      "displaySubtitle": "Image Reservations",
      "id": "image-reservations",
      "logo": "public/vendors/sabre.png",
      "company": "SABRE",
      "poc": "Escalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged. \nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com \nCustomer Care Incident Manager Phone: +1 682 605 3570  \n*For a SABRE Sev1, and Sev2:  They will assign a Customer Care Incident Manager (CCIM) automatically to us when a high severity ticket is assigned."
    },
    {
      "sourceRow": 14,
      "systemName": "Boeing Toolbox",
      "category": "",
      "vendor": "Boeing",
      "escalation": "Vendor Escalation Procedures: \n\nCall Boeing e-Enabled Digital Data Customer Support @ 206-544-9990, after connecting select option 1. Requires MBF account / BEMS ID, n#######.  \nIf e-Enabled is busy, call Boeing Operations @ 206-544-7500, after connecting select option 2, specify “Toolbox” issue not aircraft-related. \n\nNon Sev 1 or 2 issues submit Boeing Service Request http://myboeingfleet.com (account required). \nEscalation: Boeing is communicating via email every 15 minutes to 1 hour.  If this communication is not happening, escalate to Rob Lowy.",
      "phone": "206-544-9990 (24/7) select option 1. Requires MBF account / BEMS ID, n#######.  \nIf e-Enabled is busy, call Boeing Operations @ 206-544-7500,select option 2, specify “Toolbox” issue not aircraft-related",
      "email": "boeingpartpage@exchange.boeing.com",
      "vendorPoc": "Rob Lowy.",
      "aagItsPoc": "",
      "aagItsTeam": "ITS M&E and Safety",
      "updatedDate": "10/26/2026",
      "updatedBy": "Srihari.Gangisetti@alaskaair.com",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Boeing Toolbox",
      "displaySubtitle": "Boeing Toolbox",
      "id": "boeing",
      "logo": "public/vendors/boeing.png",
      "company": "Boeing",
      "poc": "Rob Lowy.",
      "portalUrl": "http://myboeingfleet.com",
      "portalStatus": "Configured",
      "portalNotes": "",
      "lastVerifiedDate": "",
      "lastVerifiedBy": "",
      "associatedApplications": []
    },
    {
      "sourceRow": 15,
      "systemName": "Web / Kiosk Check-In",
      "category": "",
      "vendor": "NCR Corporation",
      "escalation": "Vendor Company Name: NCR Corporation \n\nVendor Email: SW230098@ncr.com \n\nEscalation Procedure Steps: \n\nContact emails \nSubject: Global Software Support - Alaska Airline - CheckIn - Critical Escalation Request \nBody: Provide detailed explanation and Bridge information.  \n\nVendor Phone: 1-800-531-222 PIN 9773 \n\nVendor Contact Name: GS2 Support Team 24x7 \nTim.Reisner@ncr.com \nTrudy.Reiser@ncr.com\nJoel.Uriodain@ncr.com",
      "phone": "1-800-531-222 PIN 9773",
      "email": "SW230098@ncr.com",
      "vendorPoc": "GS2 Support Team 24x7 \nTim.Reisner@ncr.com\nTrudy.Reiser@ncr.com\nJoel.Uriodain@ncr.com",
      "aagItsPoc": "",
      "aagItsTeam": "E commerce Self Service Team",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Web / Kiosk Check-In",
      "displaySubtitle": "Web / Kiosk Check-In",
      "id": "ncr",
      "logo": "public/vendors/ncr.png",
      "company": "NCR Corporation",
      "poc": "GS2 Support Team 24x7 \nTim.Reisner@ncr.com\nTrudy.Reiser@ncr.com\nJoel.Uriodain@ncr.com"
    },
    {
      "sourceRow": 16,
      "systemName": "TIBCO",
      "category": "",
      "vendor": "Tibco",
      "escalation": "If/when the response from TIBCO Support is not coming as fast as expected and the project that needs resolution is running a risk, do the following 2 steps:\n1. Put an entry in the SR requesting the severity to be raised to 2 (or 1 if production).\n2. Call 650 846 5724 (for TAC 24x7 Silver clients). If no one answers then call 650-846-5789 (Support escalation) and leave a message.",
      "phone": "650 846 5724 (for TAC 24x7 Silver clients). If no one answers then call 650-846-5789 (Support escalation)",
      "email": " icc.support@alaskaair.com",
      "vendorPoc": "NA",
      "aagItsPoc": "Guillmero Todd",
      "aagItsTeam": "ITS Middleware Services Integrations",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "TIBCO",
      "displaySubtitle": "TIBCO",
      "id": "tibco",
      "company": "Tibco",
      "poc": "NA"
    },
    {
      "sourceRow": 17,
      "systemName": "Baggage",
      "category": "",
      "vendor": "Port of ANC Facilities Desk\nPOS Service Desk",
      "escalation": "Vendor Company Name: Port of ANC Facilities Desk\nVendor Phone: 907-266-2432\nVendor Email:\nVendor Contact Name:\nEscalation Procedure Steps: This should be the first number to call to assess the state of the ANC sortation with regards to the sortation of the Alaska Airlines baggage. During the Major Incident response, the WAR room will direct Prod Ops on when to escalate or follow-up with the Port.\n\nVendor Company Name: POS Service Desk\nVendor Phone: 206-787-5406\nVendor Email:\nVendor Contact Name:\nEscalation Procedure Steps: During the Major Incident response, the WAR room will direct Prod Ops on when to escalate or follow-up with the Port.",
      "phone": "Port of ANC Facilities Desk: 907-266-2432\nPOS Service Desk: 206-787-5406",
      "email": "",
      "vendorPoc": "",
      "aagItsPoc": "Rick Nagy",
      "aagItsTeam": "ITS COG Airport Operations",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Baggage",
      "displaySubtitle": "Baggage",
      "id": "baggage",
      "company": "Port of ANC Facilities Desk\nPOS Service Desk",
      "poc": ""
    },
    {
      "sourceRow": 18,
      "systemName": "CSA Mobile - Boarding Agent",
      "category": "Boarding app",
      "vendor": "SABRE",
      "escalation": "1. Call the 888-421-8889\n2. Email - SabreSonic.HelpDesk@Sabre.com",
      "phone": "888-421-8889",
      "email": "888-421-8889\nSabreSonic.HelpDesk@Sabre.com",
      "vendorPoc": "Escalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged.\nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com\nCustomer Care Incident Manager Phone: +1 682 605 3570\n*For a SABRE Sev1, and Sev2: They will assign a Customer Care Incident Manager (CCIM) automatically to us when a high severity ticket is assigned.",
      "aagItsPoc": "Rupali Giri",
      "aagItsTeam": "ITS COG ACE Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "CSA Mobile - Boarding Agent",
      "displaySubtitle": "Boarding app",
      "id": "csa-mobile-boarding",
      "logo": "public/vendors/sabre.png",
      "company": "SABRE",
      "poc": "Escalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged.\nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com\nCustomer Care Incident Manager Phone: +1 682 605 3570\n*For a SABRE Sev1, and Sev2: They will assign a Customer Care Incident Manager (CCIM) automatically to us when a high severity ticket is assigned."
    },
    {
      "sourceRow": 19,
      "systemName": "CSA Mobile - Lobby",
      "category": "Lobby app",
      "vendor": "SABRE",
      "escalation": "Vendor Company Name: Sabre\nVendor Phone: 888-421-8889\nVendor Email: SabreSonic.HelpDesk@Sabre.com\nVendor Contact Name: On-call Help Desk\n\nEscalation Procedure Steps:\nEscalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged.\nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com\nCustomer Care Incident Manager Phone: +1 682 605 3570\nFor a Sabre Sev1, and Sev2: a new role was implemented in December. They will assign a Customer Care Incident Manager (CCIM) automatically to us when a high severity ticket is assigned.",
      "phone": "888-421-8889",
      "email": "888-421-8889\nSabreSonic.HelpDesk@Sabre.com",
      "vendorPoc": "Escalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged.\nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com\nCustomer Care Incident Manager Phone: +1 682 605 3570\n*For a SABRE Sev1, and Sev2: They will assign a Customer Care Incident Manager (CCIM) automatically to us when a high severity ticket is assigned.",
      "aagItsPoc": "",
      "aagItsTeam": "ITS COG ACE Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "CSA Mobile - Lobby",
      "displaySubtitle": "Lobby app",
      "id": "csa-mobile-lobby",
      "logo": "public/vendors/sabre.png",
      "company": "SABRE",
      "poc": "Escalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged.\nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com\nCustomer Care Incident Manager Phone: +1 682 605 3570\n*For a SABRE Sev1, and Sev2: They will assign a Customer Care Incident Manager (CCIM) automatically to us when a high severity ticket is assigned."
    },
    {
      "sourceRow": 20,
      "systemName": "Weather Feed",
      "category": "TWC, WSI, Weather Company",
      "vendor": "WSI Fusion",
      "escalation": "Required Information for escalation\n\nWhat type(s) of weather data are missing or too old? This could be:\nMETAR (or, also known as Hourly)\nTAF (or, also referred to as Forecast)\nPIREP (Pilot Report)\nNOTAM (Notice to Airmen)\nFDC NOTAM\nSIGMET (Significant Meteorological Weather)\nVolcano\nAirmet\nCenter Advisory (Center Weather Advisory)\nTsunami\nTurbulence Plots\nWinds Aloft\n\nWhat stations are missing or have out-of-date weather data?\n\nHow old is data? When was it last updated?\n\nWhich applications are failing to show weather?\n\nHow many users are affected? One, multiple, or all users?",
      "phone": "1-800-872-2359 (option 2) for WSI Fusion",
      "email": "fusion@weather.com",
      "vendorPoc": "",
      "aagItsPoc": "Ryan Wilkins",
      "aagItsTeam": "ITS COG FlightOps Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Weather Feed",
      "displaySubtitle": "TWC, WSI, The Weather Company",
      "id": "weather-feed",
      "logo": "public/vendors/wsi-fusion.webp",
      "company": "WSI Fusion",
      "poc": ""
    },
    {
      "sourceRow": 21,
      "systemName": "JCTE",
      "category": "Crew Tracking",
      "vendor": "Jeppesen",
      "escalation": "1. Call the 1- 800- 732- 2800\n2. State - “Flight planning” for product when prompted\n3. Remain on line\n4. When asked for account number provide the following # 83491\nEmail: OpsSupport@jeppesen.com",
      "phone": "Emergency contact info +1-562-797-6193\nCall the 1-800-732-2800",
      "email": "OpsSupport@jeppesen.com",
      "vendorPoc": "",
      "aagItsPoc": "Sue Rawlings",
      "aagItsTeam": "ITS Crew Systems Product",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "JCTE",
      "displaySubtitle": "Crew Tracking",
      "id": "jcte-crew",
      "logo": "public/vendors/jeppesen.png",
      "company": "Jeppesen",
      "poc": ""
    },
    {
      "sourceRow": 22,
      "systemName": "Aircraft Performance",
      "category": "Dynamic Source, Performance data",
      "vendor": "Dynamic Source(AS) & AeroData(QX)",
      "escalation": "Vendor Escalation Procedures:\n\nVendor Company Name: AeroData\nVendor Phone: 480-443-7740, prompt 3 for Technical Support.\nEmail rwydata@aerodata.aero: For all airport, runway, or NOTAM-related inquiries.\nEmail support@aerodata.aero: For all other technical and customer support questions and issues.",
      "phone": "480-443-7740, prompt 3 for Technical Support.",
      "email": "rwydata@aerodata.aero: For all airport, runway, or NOTAM-related inquiries.\nsupport@aerodata.aero: For all other technical and customer support questions",
      "vendorPoc": "",
      "aagItsPoc": "Ryan Wilkins",
      "aagItsTeam": "ITS COG FlightOps Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Aircraft Performance",
      "displaySubtitle": "Dynamic Source, Performance data",
      "id": "aircraft-performance-aerodata",
      "logo": "public/vendors/aerodata.jpg",
      "company": "Dynamic Source(AS) & AeroData(QX)",
      "poc": ""
    },
    {
      "sourceRow": 23,
      "systemName": "Avtec Dispatch Radio System / Avtec Scout",
      "category": "Flight Operations / Dispatch Communications / Radio & Telephony",
      "vendor": "Avtec",
      "escalation": "Vendor Escalation Procedures:\n\nVendor Company Name: Avtec\nVendor Phone: 800-545-3034 (24x7)\nVendor Email: customersupport@avtecinc.com\nVendor Contact Name: Avtec On-Call\nAccount Manager: (Add Account Manager)\nNamed Vendor Escalation Contact: (Add Vendor Escalation Contact)\n\nImportant Operational Takeaway:\n• Do not immediately call Avtec for every Avtec issue. Contact UC Team first at 206-688-3800, option 1 (24x7); UC determines whether Avtec vendor escalation is required.\n• Isolate CUCM/VPGate configuration (including VPGate Audio Service) and Hub/Lumen voice paths before classifying a broad failure as a vendor outage.\n• For multiple endpoint failures, capture all impacted PC/endpoint names and engage UC On-Call at 206-688-3800.\n• If vendor escalation is required, contact Avtec On-Call at 800-545-3034 / customersupport@avtecinc.com.",
      "phone": "800-545-3034",
      "email": "customersupport@avtecinc.com",
      "vendorPoc": "Avtec On-Call",
      "aagItsPoc": "UC Team, 206-688-3800, option 1 (24x7)\nFlight Operations / ERBC Team, ERBC.Team@alaskaair.com (24x7)\nITS Service Desk, 877-238-1077 (Password Support)\nITS Production Operations (Production Monitoring and Service restarts); Scott Heilman (application/UC validation activities); Dan Olson (DR plan owner)",
      "aagItsTeam": "UC Team (Unified Communications)",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Avtec",
      "displaySubtitle": "Flight Operations / Dispatch Communications / Radio & Telephony (Avtec Dispatch Radio System / Avtec Scout · Critical System)",
      "id": "avtec",
      "logo": "public/vendors/avtec.jpg",
      "company": "Avtec",
      "poc": "Avtec On-Call"
    },
    {
      "sourceRow": 24,
      "systemName": "Real Time Gates",
      "category": "RTG, Groundstar, INFORM,The New GateSheet, Inform RealTime",
      "vendor": "Inform",
      "escalation": "ITS COG ACE Support / ITS ACE GATE Management",
      "phone": "No",
      "email": "No",
      "vendorPoc": "",
      "aagItsPoc": "Heather Moeva / Keith Allen",
      "aagItsTeam": "ITS COG ACE Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Real Time Gates",
      "displaySubtitle": "RTG, Groundstar, INFORM,The New GateSheet, Inform RealTime",
      "id": "real-time-gates",
      "logo": "public/vendors/inform.jpg",
      "company": "Inform",
      "poc": ""
    },
    {
      "sourceRow": 25,
      "systemName": "RAIN",
      "category": "RAIN, Helios, Nimbus",
      "vendor": "SABRE",
      "escalation": "Vendor Company Name: Sabre\nVendor Phone: 888-421-8889\nVendor Email: SabreSonic.HelpDesk@Sabre.com\nVendor Contact Name: On-call Help Desk\n\nEscalation Procedure Steps:\nEscalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged.\nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com\nCustomer Care Incident Manager Phone: +1 682 605 3570\nFor a Sabre Sev1, and Sev2: a new role was implemented in December. They will assign a Customer Care Incident Manager (CCIM) automatically to us when a high severity ticket is assigned.",
      "phone": "888-421-8889",
      "email": "SabreSonic.HelpDesk@Sabre.com",
      "vendorPoc": "Escalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged.\nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com\nCustomer Care Incident Manager Phone: +1 682 605 3570\n*For a SABRE Sev1, and Sev2: They will assign a Customer Care Incident Manager (CCIM) automatically to us when a high severity ticket is assigned.",
      "aagItsPoc": "Edina Dande",
      "aagItsTeam": "ACE - RAIN",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "RAIN",
      "displaySubtitle": "RAIN, Helios, Nimbus",
      "id": "rain",
      "logo": "public/vendors/sabre.png",
      "company": "SABRE",
      "poc": "Escalation will be handled by the Business Focal, but for Sev1 make sure CCIM* is engaged.\nCustomer Care Incident Manager (CCIM)* Email: customercareim@sabre.com\nCustomer Care Incident Manager Phone: +1 682 605 3570\n*For a SABRE Sev1, and Sev2: They will assign a Customer Care Incident Manager (CCIM) automatically to us when a high severity ticket is assigned."
    },
    {
      "sourceRow": 26,
      "systemName": "AIMS",
      "category": "Maintenance & Engineering",
      "vendor": "AIMS",
      "escalation": "Vendor Support Desk: (Add Vendor Support Desk)\nVendor Support Phone: (Add Vendor Support Phone)\nVendor Support Email: (Add Vendor Support Email)\nEscalation Contact: (Add Escalation Contact)\nInternal Escalation: AIMS MQ/TRAX issues should be directed to COG Crew on-call. Crew dependency support: ITS Cog Crew Team. AirTrAK dependency support: ITS OPS 360 AirTrAK Team.",
      "phone": "(Add Vendor Support Phone Number)",
      "email": "(Add Vendor Support Email)",
      "vendorPoc": "(Add Account Manager)",
      "aagItsPoc": "(Add Named Application Owner)",
      "aagItsTeam": "COG Crew on-call",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "AIMS",
      "displaySubtitle": "Maintenance & Engineering (Crew & AirTrAK / VisOps Integration)",
      "id": "aims-vendor",
      "logo": "public/vendors/aims.jpg",
      "company": "AIMS",
      "poc": "(Add Account Manager)",
      "portalUrl": "https://www.aimsairlinesoftware.com/"
    },
    {
      "sourceRow": 27,
      "systemName": "AS TRAX System",
      "category": "AS TRAX",
      "vendor": "TRAX",
      "escalation": "Vendor Escalation Procedures:\n\nVendor Company Name: Trax\nVendor Phone: 305-662-7400\nVendor Email: Jairo.arias@trax.aero\nVendor Contact Name: Jairo Arias\nVendor Contact Phone: 305-622-7400",
      "phone": "305-662-7400",
      "email": "Jairo.arias@trax.aero",
      "vendorPoc": "Jairo Arias\n305-622-7400",
      "aagItsPoc": "Brad Dufour",
      "aagItsTeam": "ITS COG M&E App Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "AS TRAX System",
      "displaySubtitle": "AS TRAX",
      "id": "as-trax",
      "logo": "public/vendors/trax.jpg",
      "company": "TRAX",
      "poc": "Jairo Arias\n305-622-7400"
    },
    {
      "sourceRow": 28,
      "systemName": "QX TRAX System",
      "category": "QX TRAX",
      "vendor": "TRAX",
      "escalation": "Vendor Escalation Procedures:\n\nVendor Company Name: Trax\nVendor Phone: 877-264-8729\nVendor Email: Camilo.Sarmiento@trax.aero\nVendor Contact Name: Camilo Sarmiento\nVendor Contact Phone: 305-622-7400 ext. 156\n\nEscalation Procedure Steps: Vendor will be contacted by M&E Team",
      "phone": "877-264-8729",
      "email": "Camilo.Sarmiento@trax.aero",
      "vendorPoc": "Camilo Sarmiento\n305-622-7400 ext. 156",
      "aagItsPoc": "Brad Duofor",
      "aagItsTeam": "ITS COG M&E App Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "QX TRAX System",
      "displaySubtitle": "QX TRAX",
      "id": "qx-trax",
      "logo": "public/vendors/trax.jpg",
      "company": "TRAX",
      "poc": "Camilo Sarmiento\n305-622-7400 ext. 156"
    },
    {
      "sourceRow": 29,
      "systemName": "iCargo System",
      "category": "Cargo, New CargoSpot",
      "vendor": "iBS Software, PLC",
      "escalation": "Description:\niCargo is a vendor produced and hosted application to handle all operational and accounting aspects of Alaska Air Cargo. The primary application is agent facing and is accessed via Chrome or Edge browsers. There is also a public facing customer portal for customers to book shipments and check the shipment status. There is also a mobile app that runs on TC78 handheld devices that is used by sales and cargo agents.\n\nAliases:\niCargo\n\nAuthentication:\n• Agent facing desktop application: Authenticated for SSO using OIDC (OpenID Connect)\n• Mobile application (TC78 handheld devices): Authenticated for SSO using OIDC (OpenID Connect)\n• Public-facing customer booking/tracking portal: Authenticated using login/password on the site\n\nSLA:\nThis is a critical system for the Cargo operation. Issues with this system shouldn’t cause delays, except in the State of Alaska. Issues that affect multiple users across multiple stations should be reported as a Severity 2 issue. Issues affecting individual stations should be reported as a Severity 2 issue if multiple users are impacted. Issues affecting individual users should be reported to the ITS Service Desk as a Severity 3 issue.\n\nTechnical Owners:\n• System Administration and Account Support: Cargo System Support - Gary Johnson (Gary.johnson@alaskaair.com)\n• ITS System Owner: ITS COG Airport Ops Support - COGAirportOpsSupport@alaskaair.com (24/7)\n• Product Owner: ITS Product Management - Roni Schuetz, Vanny Thavixay\n• Business Owner Primary: Alaska Air Cargo - Tony Dimeglio\n• Vendor: iBS Software PLC - Must communicate with iBS via Gary Johnson.\n\nVendor Escalation Procedures:\n• Vendor Company Name: iBS Software, PLC\n• Vendor Phone: TBD (Must communicate with iBS via Gary Johnson)\n• Vendor Email: TBD (Escalate via Gary.johnson@alaskaair.com / COGAirportOpsSupport@alaskaair.com)\n• Vendor Contact Name: TBD\n• Escalation Procedure Steps: Contact Gary Johnson for escalating to iBS support. If you can’t reach Gary, contact Maddie Charlesworth.\n\nEverbridge Contacts:\n• Focal Name: Gary Johnson | Group: Cargo System Support | Contact: Gary.johnson@alaskaair.com\n• Focal Name: Maddie Charlesworth | Group: Cargo System Support | Contact: Madelyn.Charlesworth@alaskaair.com\n• Focal Name: on-call for ITS COG Airport Ops Support | Group: ITS COG Airport Ops Support | Contact: COGAirportOpsSupport@alaskaair.com\n• Focal Name: Ryan Li | Group: ITS Cargo | Contact: Ryan.li@alaskaair.com\n• Focal Name: Michael Tipton | Group: ITS Cargo | Contact: Michael.Tipton@alaskaair.com\n\nRequired Information for Escalation:\n• Workstation Name\n• Browser (Should be Edge or Chrome)\n• Username\n• iCargo screen identifier (ex. CAP018, OPR064, etc.)\n\nSystem Specifications & Client/Workstation Configuration:\n• Windows workstation preferred; Chrome (preferred) or Edge browser must be installed\n• Must have iCargo Browser Extension installed in browser\n• Browser popup blocker disabled for Edge: [*.]ibsplc.aero and Chrome: https://alaska-icargo.ibsplc.aero\n• Components needed for Printing: iCargo Print Extension v 1.8 or higher; icoprint.exe and supporting files installed on workstation (Managed by ITS Endpoint Platforms)\n\nSpecial Notes / Revision History:\n• 6Oct2023 (rneill): Initial Release\n• 6Sept2024 (Hakeem Clark): Transition from ITS Airport Operations to ITS COG AirportOps Support\n• 28May2026 (rneill): Updated contact info and escalation procedure.",
      "phone": "Contact via Gary Johnson (Backup: Maddie Charlesworth)",
      "email": "Gary.johnson@alaskaair.com (Primary Focal - Cargo System Support)\nCOGAirportOpsSupport@alaskaair.com (24/7 ITS COG Airport Ops Support)\nMadelyn.Charlesworth@alaskaair.com (Backup Focal - Cargo System Support)\nRyan.li@alaskaair.com (ITS Cargo)\nMichael.Tipton@alaskaair.com (ITS Cargo)",
      "vendorPoc": "Must communicate with iBS via Gary Johnson (Gary.johnson@alaskaair.com)\nBackup Focal: Maddie Charlesworth (Madelyn.Charlesworth@alaskaair.com)",
      "aagItsPoc": "Gary Johnson (Cargo System Support)\nMaddie Charlesworth (Cargo System Support)\nRoni Schuetz, Vanny Thavixay (Product Owners - ITS Product Management)\nTony Dimeglio (Business Owner Primary - Alaska Air Cargo)\nRyan Li, Michael Tipton (ITS Cargo)",
      "aagItsTeam": "ITS COG Airport Ops Support",
      "updatedDate": "28May2026",
      "updatedBy": "rneill",
      "approvedDate": "6Sept2024",
      "approvedBy": "Hakeem Clark",
      "portalUrl": "https://alaska-icargo.ibsplc.aero",
      "portalStatus": "Configured",
      "portalNotes": "Agent desktop & mobile (TC78) use SSO OIDC. Public customer portal uses login/password. Disable popup blocker for [*.]ibsplc.aero (Edge) and https://alaska-icargo.ibsplc.aero (Chrome).",
      "displayName": "iCargo System",
      "displaySubtitle": "Cargo, New CargoSpot",
      "id": "icargo",
      "logo": "public/vendors/ibs-software.jpg",
      "company": "iBS Software, PLC",
      "poc": "Must communicate with iBS via Gary Johnson (Gary.johnson@alaskaair.com)\nBackup Focal: Maddie Charlesworth (Madelyn.Charlesworth@alaskaair.com)"
    },
    {
      "sourceRow": 30,
      "systemName": "Cargo Spot",
      "category": "Cargo Payment",
      "vendor": "CHAMP , Airclic  , SmartKargo",
      "escalation": "Escalate through Airport Operations team",
      "phone": "CHAMP\n+44 20 8587 8080\n\nAirclic\n877-901-7557\n\nSmartKargo\n617 607 4066",
      "email": "Cognizant.ACE.Support@alaskaair.com",
      "vendorPoc": "",
      "aagItsPoc": "John-Antony Dubreuil",
      "aagItsTeam": "ITS COG Airport Ops Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Cargo Spot",
      "displaySubtitle": "Cargo Payment",
      "id": "cargo-spot",
      "logo": "public/vendors/cargo-spot.png",
      "company": "CHAMP , Airclic  , SmartKargo",
      "poc": ""
    },
    {
      "sourceRow": 31,
      "systemName": "Shopping Service System",
      "category": "QPX, QPXconnect, QPXReshop, QPXmerchandising manager",
      "vendor": "Microsoft Azure",
      "escalation": "",
      "phone": "1-800-936-3100",
      "email": "NA",
      "vendorPoc": "",
      "aagItsPoc": "Diana DiPalma",
      "aagItsTeam": "E-Commerce / E-Commerce Shopping",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Shopping Service System",
      "displaySubtitle": "QPX, QPXconnect, QPXReshop, QPXmerchandising manager",
      "id": "shopping-service",
      "logo": "public/vendors/microsoft.png",
      "company": "Microsoft Azure",
      "poc": ""
    },
    {
      "sourceRow": 32,
      "systemName": "SOLAR - Mileage Plan",
      "category": "Siebel, MP, Solar, LMS",
      "vendor": "Oracle Corporation",
      "escalation": "Escalation will be handled by LCC",
      "phone": "425-945-8348",
      "email": "",
      "vendorPoc": "",
      "aagItsPoc": "Matt Hahnfeld",
      "aagItsTeam": "E-Commerce",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "SOLAR - Mileage Plan",
      "displaySubtitle": "Siebel, MP, Solar, LMS",
      "id": "solar-mileage",
      "logo": "public/vendors/oracle.png",
      "company": "Oracle Corporation",
      "poc": ""
    },
    {
      "sourceRow": 33,
      "systemName": "PeopleSoft Financials",
      "category": "PSFin",
      "vendor": "Oracle (Software Vendor) / ERPA (Contracted Support Vendor)",
      "escalation": "Corporate Apps on call will contact the vendor",
      "phone": "",
      "email": "",
      "vendorPoc": "",
      "aagItsPoc": "Anh Shade",
      "aagItsTeam": "Corporate Apps",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "PeopleSoft Financials",
      "displaySubtitle": "PSFin",
      "id": "peoplesoft-financials",
      "logo": "public/vendors/oracle.png",
      "company": "Oracle (Software Vendor) / ERPA (Contracted Support Vendor)",
      "poc": ""
    },
    {
      "sourceRow": 34,
      "systemName": "Information Display Applications (Web UI)",
      "category": "Web [FIDS/GIDS, LIDS, RIDS, xIDS]",
      "vendor": "FIDS at the Airport are either owned by the Airport or by a Common Use Vendor",
      "escalation": "",
      "phone": "NetTracer Help Desk\nEmail: support@nettracer.aero\nPhone: 770-635-2845\nHours of Operation: 365 x 24 x 7 Availability",
      "email": "support@nettracer.aero",
      "vendorPoc": "",
      "aagItsPoc": "John-Antony Dubreuil",
      "aagItsTeam": "ITS COG Airport Ops Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Information Display Applications (Web UI)",
      "displaySubtitle": "Web [FIDS/GIDS, LIDS, RIDS, xIDS]",
      "id": "information-display",
      "logo": "public/vendors/nettracer.png",
      "company": "FIDS at the Airport are either owned by the Airport or by a Common Use Vendor",
      "poc": ""
    },
    {
      "sourceRow": 35,
      "systemName": "PeopleSoft HCM",
      "category": "PSHCM",
      "vendor": "Oracle (Software Vendor)",
      "escalation": "Corporate Apps on call will contact vendor",
      "phone": "NA",
      "email": "NA",
      "vendorPoc": "",
      "aagItsPoc": "Anh Shade",
      "aagItsTeam": "Corporate Apps",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "PeopleSoft HCM",
      "displaySubtitle": "PSHCM",
      "id": "peoplesoft-hcm",
      "logo": "public/vendors/oracle.png",
      "company": "Oracle (Software Vendor)",
      "poc": ""
    },
    {
      "sourceRow": 36,
      "systemName": "NetTracer System",
      "category": "baggage tracking",
      "vendor": "NetTracer",
      "escalation": "Vendor Company Name: NetTracer\nVendor Phone: 1-877-892-1077\nVendor Email: support@nettracer.aero\nVendor Contact Name: Rob Sutton\n\nAll questions from the stations/CBS should be directed to the ITS Service Desk.\n1-877-892-1077\nNetTracer Help Desk: support@nettracer.aero\nPhone: 770-635-2845\nHours of Operation: 365 x 24 x 7 Availability",
      "phone": "770-635-2845",
      "email": "support@nettracer.aero",
      "vendorPoc": "",
      "aagItsPoc": "Rick Nagy",
      "aagItsTeam": "ITS COG Airport Ops Support",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "NetTracer System",
      "displaySubtitle": "baggage tracking",
      "id": "nettracer",
      "logo": "public/vendors/nettracer.png",
      "company": "NetTracer",
      "poc": ""
    },
    {
      "sourceRow": 37,
      "systemName": "Accelya",
      "category": "Revera suite",
      "vendor": "Accelya",
      "escalation": "",
      "phone": "Service Desk Contact Number:\n+91 20 6608 3750\n+91 20 6608 3751\n+91 20 6608 3800",
      "email": "customersupport@accelya.com",
      "vendorPoc": "Subhash A Kotian\nsubhash.kotian@accelya.com",
      "aagItsPoc": "Tyler Sonnen",
      "aagItsTeam": "ITS Corporate Applications",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Accelya",
      "displaySubtitle": "Revera suite",
      "id": "accelya",
      "logo": "public/vendors/accelya.jpg",
      "company": "Accelya",
      "poc": "Subhash A Kotian\nsubhash.kotian@accelya.com",
      "portalUrl": "https://customercare-mastercard.my.salesforce-sites.com/chat"
    },
    {
      "sourceRow": 38,
      "systemName": "Intelligent Cloud Contact Center",
      "category": "",
      "vendor": "Five9",
      "escalation": "",
      "phone": "No",
      "email": "cases@five9.com",
      "vendorPoc": "",
      "aagItsPoc": "Matt Smallwood",
      "aagItsTeam": "Contact Center Agents",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Intelligent Cloud Contact Center",
      "displaySubtitle": "Intelligent Cloud Contact Center",
      "id": "five9",
      "logo": "public/vendors/five9.png",
      "company": "Five9",
      "poc": "",
      "portalUrl": "https://community.five9.com/s/?language=en_US",
    },
    {
      "sourceRow": 39,
      "systemName": "Alvaria",
      "category": "Call Centers / Workforce Management",
      "vendor": "Alvaria",
      "escalation": "Vendor Company Name: Alvaria\nVendor Phone: 800-999-4455, Alvaria Enterprise Help Desk\nVendor Email: (Add Vendor Support Email)\nVendor Contact Name: Enterprise Help Desk\nVendor Asset: 00015817 - Alvaria Cloud Workforce (Legacy Asset ID: 94236)\nAlaska Application URL: https://alaska.via.aspect-cloud.net/WFO\n\n1. Alaska Airlines restarts the server suite (SEAPRASPCTAPP01, SEAPRASPCTAPP02, SEAPRASPCTEMP01; do not include Jump or SQL servers).\n2. Validate whether Alvaria is healthy.\n3. If the application remains unhealthy, contact Darlene Harbeson, Matt Smallwood, or Lori Well to begin vendor escalation.\n4. Alvaria Enterprise Help Desk is the vendor contact at 800-999-4455.\n5. When opening the vendor case, provide the affected function, users/locations, symptoms/errors, application and database validation results, and maintenance status.\n6. The dedicated troubleshooting document classifies “Accessing the application presents an error” as Severity 2 with a 30-minute internal troubleshooting time limit.",
      "phone": "800-999-4455, Alvaria Enterprise Help Desk",
      "email": "(Add Vendor Support Email)",
      "vendorPoc": "Enterprise Help Desk",
      "aagItsPoc": "Adam Wallraff, Call Centers\nTeam email: call.center.technology@alaskaair.com\nEscalation contacts: Darlene Harbeson, Matt Smallwood, Lori Well",
      "aagItsTeam": "Call Center Technology",
      "updatedDate": "",
      "updatedBy": "",
      "approvedDate": "",
      "approvedBy": "",
      "displayName": "Alvaria",
      "displaySubtitle": "Call Centers / Workforce Management (Alvaria, Aspect WFM, Aspect WFO, Aspect)",
      "id": "alvaria",
      "logo": "public/vendors/alvaria.jpg",
      "company": "Alvaria",
      "poc": "Enterprise Help Desk",
      "portalUrl": "https://www.alvaria.com/services-and-support/customer-care"
    }
  ]
};

    window.baseMasterData = JSON.parse(JSON.stringify(defaultData));

    function applyApplicationOverrides() {
        try {
            const overrides = JSON.parse(localStorage.getItem("productionOperationsApplications"));
            if (!Array.isArray(overrides)) return;
            overrides.forEach(function (override) {
                if ((override.id === "acars" || override.key === "acars") && override.appDataVersion !== 2 && !override.adminEdited) return;
                const app = Object.values(defaultData.applications).find(function (item) {
                    return item.id === override.id || item.name === override.name || item.shortName === override.name;
                });
                if (!app) return;
                Object.assign(app, override);
                app.function = override.function || override.description || app.function;
                app.aagTeam = override.team || app.aagTeam;
                app.response = override.sla || override.response || app.response;
            });
        } catch (error) {
            console.warn("Unable to load Admin application data:", error);
        }
    }

    function applyVendorOverrides() {
        const fieldMap = {
            systemName: "systemName", category: "category", vendorCompanyName: "vendor",
            vendorPOC: "vendorPoc", contactNumbers: "phone", emailAddress: "email",
            aagItsPOC: "aagItsPoc", aagItsTeam: "aagItsTeam",
            prodOpsEscalationProcess: "escalation", infoUpdatedDate: "updatedDate",
            infoUpdatedBy: "updatedBy", infoApprovedDate: "approvedDate", infoApprovedBy: "approvedBy",
            company: "vendor", poc: "vendorPoc", phone: "phone", email: "email",
            aagItsPoc: "aagItsPoc", escalation: "escalation", updatedDate: "updatedDate",
            updatedBy: "updatedBy", approvedDate: "approvedDate", approvedBy: "approvedBy", portalUrl: "portalUrl", portalStatus: "portalStatus", portalNotes: "portalNotes", lastVerifiedDate: "lastVerifiedDate", lastVerifiedBy: "lastVerifiedBy", associatedApplications: "associatedApplications"
        };
        try {
            const overrides = JSON.parse(localStorage.getItem("productionOperationsVendors"));
            if (!Array.isArray(overrides)) return;
            overrides.forEach(function (override) {
                if (override.vendorDataVersion !== 3 && (override.sourceRow === 3 || override.sourceRow === 9)) return;
                const vendor = defaultData.vendors.find(function (item) {
                    return item.id === override.id || item.sourceRow === override.sourceRow;
                });
                if (!vendor || !Array.isArray(override.editedFields)) return;
                override.editedFields.forEach(function (field) {
                    const target = fieldMap[field];
                    if (target) {
                        if (target === "portalUrl" && !override[field] && vendor.portalUrl) {
                            return;
                        }
                        vendor[target] = Array.isArray(override[field]) ? override[field] : (override[field] || "");
                    }
                });
                vendor.company = vendor.vendor;
                vendor.poc = vendor.vendorPoc;
                if (override.editedFields.includes("systemName")) vendor.displayName = vendor.systemName;
            });
        } catch (error) {
            console.warn("Unable to load Admin vendor data:", error);
        }
    }

    window.syncMasterDataOverrides = function () {
        applyApplicationOverrides();
        applyVendorOverrides();
        window.masterData = defaultData;
    };

    window.persistMasterDataToFile = async function () {
        applyApplicationOverrides();
        applyVendorOverrides();
        window.baseMasterData = JSON.parse(JSON.stringify(defaultData));
        window.masterData = defaultData;
        const fileContent = "/* Single default source of truth for Production Operations Connect. */\n(function () {\n    \"use strict\";\n\n    const defaultData = " +
            JSON.stringify(defaultData, null, 2) +
            ";\n\n    window.baseMasterData = JSON.parse(JSON.stringify(defaultData));\n\n    " +
            applyApplicationOverrides.toString() + "\n\n    " +
            applyVendorOverrides.toString() + "\n\n    window.syncMasterDataOverrides = " +
            window.syncMasterDataOverrides.toString() + ";\n\n    window.persistMasterDataToFile = " +
            window.persistMasterDataToFile.toString() + ";\n\n    applyApplicationOverrides();\n    applyVendorOverrides();\n    window.masterData = defaultData;\n}());\n";
        try {
            const response = await fetch("http://localhost:47832/save-master-data", {
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: fileContent
            });
            return response.ok;
        } catch (error) {
            console.warn("Unable to sync master-data.js to local service:", error);
            return false;
        }
    };

    applyApplicationOverrides();
    applyVendorOverrides();
    window.masterData = defaultData;
}());
