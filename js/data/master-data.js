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
      "vendorPOC": "ARINC Senior On-Duty Ops Manager (24x7): 410-266-4029 / AOC@arinc.com • Account Manager: (Add Account Manager)",
      "aagPOC": "Ryan Wilkins, 206-972-0228",
      "aagTeam": "ITS COG FlightOps Support / ITS Flight Operations",
      "systemAdmin": "Rick Cahoon, Arun Sharma, 206-392-8613",
      "businessOwner": "James Falen, 425-679-2135 cell / 206-392-6083 desk",
      "everbridgeBackup": "Charles Ostick, 877-238-1077",
      "technicalOwners": "Ryan Wilkins, Adele Lunde",
      "onCall": "ITS COG FlightOps Support / ITS FltOps on-call",
      "passwordSupport": "Service Desk: 1-877-238-1077",
      "additionalSupportTeams": "Technical Owners: Ryan Wilkins, Adele Lunde • Everbridge Backup: Charles Ostick, 877-238-1077 • DBA On-Call (SQL) • Middleware (IBM MQ)",
      "environment": "Production",
      "tier": "Ground Stop",
      "groundStopEligible": "Yes",
      "criticality": "Ground Stop",
      "severity": "Critical",
      "status": "Operational",
      "businessImpact": "ACARS is the central text link between aircraft and the ground. It carries flight info, flight times, weather, performance data, releases and load closeouts. It is rated 24x7 critical and is on the Ground Stop list.",
      "response": "15 minutes",
      "resolution": "24x7, critical to operations",
      "escalation": "Ground Stop — 24x7, critical to operations (Triage time limit: 15 minutes)",
      "supportModel": "24x7, critical to operations (SITA Aircom Support + ARINC Help Desk / 24x7 Senior On-Duty Ops Manager + ITS COG FlightOps Support / ITS Flight Operations)",
      "phone": "SITA: 1-888-247-2661, option 4 (Aircom). ARINC: 800-633-6882",
      "phoneNote": "SITA Help Desk: 866-247-2661 (24/7) • ARINC Senior On-Duty Ops Manager (24x7): 410-266-4029",
      "email": "SITA: Aircom.support@sitaonair.aero. ARINC: helpdesk@arinc.com",
      "description": "ACARS is the central text link between aircraft and the ground. It carries flight info, flight times, weather, performance data, releases and load closeouts. It is rated 24x7 critical and is on the Ground Stop list. Aircom Server Status page: http://acars.app.insideaag.com/StatusReport.htm",
      "supportDescription": "24x7, critical to operations. SITA Help Desk: 866-247-2661 (24/7); SITA Aircom support: 1-888-247-2661, option 4 / Aircom.support@sitaonair.aero; ARINC Help Desk: 800-633-6882 / helpdesk@arinc.com; ARINC Senior On-Duty Ops Manager (24x7): 410-266-4029 / AOC@arinc.com. Internal: ITS System Owner Ryan Wilkins (206-972-0228), Business Owner & Everbridge focal James Falen (425-679-2135 cell / 206-392-6083 desk), Everbridge Backup Charles Ostick (877-238-1077), System Administration Rick Cahoon & Arun Sharma (206-392-8613), Technical Owners Ryan Wilkins & Adele Lunde, On-Call ITS COG FlightOps Support / ITS FltOps on-call.",
      "directDependencies": "SQL (SEAPRACARSSQL02 / TUKPRACARSSQL02), IBM MQ (QMAS, QMMFP), MSMQ, FO.TO.AIRCOM.WEBSERVICES queue, Azure SQL, APIM, PingFederate, Aircom Server, 2012 DNA farm",
      "infrastructure": "App servers: SEAVVACARSAPP03 (IGQ) and TUKVVACARSAPP03 (TUK), Windows Server 2016 • Database servers: SEAPRACARSSQL02 (159.49.43.93) and TUKPRACARSSQL02 (10.70.106.5), SQL Server 2016 • DNS: acars.app.insideaag.com, acars.sql.insideaag.com, and the CNAME acars.app.int.insideaag.com • IBM MQ queue managers QMAS and QMMFP, plus local MSMQ queues • Monitoring: AlarmsOne, Dynatrace, Zenoss • Firewall / network rules: (Add firewall details)",
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
          "owner": "(Add owner)",
          "dependencies": "Azure SQL, APIM, PingFederate",
          "impact": "Users can't search ACARS history",
          "description": "Search of recent and archived ACARS messages"
        },
        {
          "name": "ACARS Messenger / Ops Messenger",
          "function": "Ops-to-crew messaging",
          "owner": "(Add owner)",
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
        "ARINC/SITA → ALASKA.FROM.ARINC / ALASKA.FROM.SITA → Aircom",
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
        "(Add voice/radio fallback procedure)"
      ],
      "communicationGuidelines": [
        "For SITA issues, an assigned developer follows up with SITA and escalates.",
        "When escalating, include the scope: one aircraft (tail), one flight (date, flight, city pair), or the whole fleet, plus which Ops group is affected."
      ],
      "responseSlas": [
        "Sev 1: ARINC MQ channel alert, required services down and not clearing, or queue depth over 500",
        "Sev 2: queue depth over 100, multiple flights affected, or critical messages (releases, performance data) failing",
        "Sev 3: single flight, single station, or non-critical messages",
        "Initial response and update cadence: (Add Sev 1/Sev 2 response times and update cadence)"
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
      "portalUrl": "(Add WAM URL)",
      "vendorPOC": "Jeppesen Sev 1 line: 1-800-732-2800, account number 83491 • The Weather Company (weather issues): 1-800-872-2359 • Account Manager: (Add Account Manager)",
      "aagPOC": "Ryan Wilkins, Adele Lunde",
      "aagTeam": "ITS COG Flight Operations. Verified owners: Ryan Wilkins, Adele Lunde",
      "systemAdmin": "MEL issues: ITS COG M&E App Support",
      "businessOwner": "AS Business Focals: Leo Blanco and David Caraballo, 206-688-3213 / 206-688-3216 • QX Business Focal: Mike Timpe, 206-574-4789 / 503-702-3463",
      "alternateBusinessContacts": "AS business contacts (alternate list): Katie Pagel, Leo Blanco",
      "technicalOwners": "Ryan Wilkins, Adele Lunde",
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
      "phoneNote": "The Weather Company (weather issues): 1-800-872-2359",
      "email": "opssupport@jeppesen.com",
      "description": "WAM is the main dispatch tool for AS and QX. It brings together flight plans, weather, performance data and MEL information to produce the dispatch release. If WAM or any of its upstream feeds fails, flights can't be released.",
      "supportDescription": "24/7. FlightPlanSvc must run 24/7. Jeppesen Sev 1 line: 1-800-732-2800, account number 83491; Jeppesen email: opssupport@jeppesen.com; The Weather Company (weather issues): 1-800-872-2359; Account Manager: (Add Account Manager). Internal: Technical Owners Ryan Wilkins, Adele Lunde; AS Business Focals Leo Blanco and David Caraballo (206-688-3213 / 206-688-3216); QX Business Focal Mike Timpe (206-574-4789 / 503-702-3463); Alternate AS business contacts Katie Pagel, Leo Blanco; On-Call ITS COG Flight Operations; MEL issues ITS COG M&E App Support.",
      "directDependencies": "FlightPlanningWs, DNA farm, Jeppesen JetPlan, MQ (QMMFP), fltops DB, MelsWs, Weather API, FlightPlanSvc, Dynamic Source (Boeing/Airbus), AeroData (QX), APIM (primary SDP, secondary DNA), MEL DB",
      "infrastructure": "App servers: seavvapp22 / tukvvapp22 (FlightPlanSvc); DNA web farm: SEAV3DNA09–16 and TUKV3DNA09–16, behind a load balancer; IBM MQ: QMMFP on wmq1as.alaskaair.com, port 1425 (FO.FLIGHTPLAN.REQUEST.QUEUE, FO.TANKER.REQUEST.QUEUE, FO.FLIGHT.LOAD.ACARS.UPLINK); Databases: fltops (Informix) and VisOps; Azure API Management (APIM) and Front Door for the MEL Service; Monitoring: AlarmsOne, Sumo Logic, Application Insights, Dynatrace; Firewall / network rules: (Add firewall details)",
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
        "Manual flight release with weather entered by hand. This adds about 3–5 minutes per release, or 5–8 minutes when packet updates are needed",
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
        "Vendor response SLA: (Add Jeppesen response SLA)"
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
      "vendorPOC": "Jeppesen Sev 1: 1-800-732-2800, account number 83491 • Jeppesen general: 1-800-375-4973 • Jeppesen server help: 1-303-328-4585 • DSOC: 1-800-JETPLAN (538-7526) • Account Manager: (Add Account Manager)",
      "aagPOC": "Ryan Wilkins",
      "aagTeam": "ITS COG Flight Operations. ITS System Owner: Ryan Wilkins",
      "systemAdmin": "AS Business Owners / System Admins: Leo Blanco, David Caraballo, 206-688-3213 / 206-688-3216",
      "businessOwner": "AS Business Owners / System Admins: Leo Blanco, David Caraballo, 206-688-3213 / 206-688-3216 • QX Business Owner: Mike Timpe, 206-574-4789 / 503-702-3463",
      "technicalOwners": "Ryan Wilkins, Adele Lunde",
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
      "supportDescription": "24/7, critical to operations. Jeppesen Sev 1: 1-800-732-2800, account number 83491; Jeppesen general: 1-800-375-4973; Jeppesen server help: 1-303-328-4585; Email: OpsSupport@jeppesen.com; Jeppesen Digital Support Operations Center (DSOC): 1-800-JETPLAN (538-7526); Account Manager: (Add Account Manager). Internal: ITS System Owner Ryan Wilkins; Technical Owners Ryan Wilkins, Adele Lunde; AS Business Owners / System Admins Leo Blanco, David Caraballo (206-688-3213 / 206-688-3216); QX Business Owner Mike Timpe (206-574-4789 / 503-702-3463); On-Call ITS COG Flight Operations; Service Desk 1-877-238-1077.",
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
        "Initial response and update cadence: (Add Sev 1/Sev 2 response times and update cadence)",
        "Vendor response SLA: (Add Jeppesen response SLA)"
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
      "icon": "public/applications/s4a.png",
      "function": "Weight and Balance Management",
      "category": "Weight and Balance",
      "vendor": "Smart4Aviation",
      "vendorPOC": "NA",
      "aagPOC": "Arun Sharma / Ryan Wilkins",
      "aagTeam": "ITS Flight Operations",
      "environment": "Production",
      "criticality": "High",
      "severity": "High",
      "status": "Operational",
      "response": "15 minutes",
      "resolution": "TBD",
      "escalation": "Email Support Desk. If no response or urgent matter, call help line to escalate.",
      "supportModel": "S4A + ITS Flight Operations",
      "phone": "+48 12 379 3737",
      "phoneNote": "NA",
      "email": "support@smart4aviation.com",
      "description": "S4A Incorporates data from other systems in order to automate the load management process. The system continually monitors the planned load and informs CLP (Centralized Load Planner) when they may need to investigate and take action. \n When the actual load is submitted, S4A evaluates it to ensure the aircraft is within weight and balance limits and sends a Load Closeout to the aircraft.",
      "supportDescription": "Support follows the approved vendor and AAG ITS operational escalation model.",
      "escalationSteps": [
        "Validate operational impact.",
        "Contact the on-call from ITS Flight Operations support team on-call.",
        "Notify the Vendor S4A Smartsuite: support@smart4aviation.com, via e-mail or phone +48 12 379 3737.",
        "Escalate according to the documented support process."
      ],
      "key": "Smart4Aviation (S4A)"
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
      "icon": "public/applications/jcte.png",
      "function": "JCTE",
      "category": "Crew / Technical Engineering",
      "vendor": "Jeppesen",
      "vendorPOC": "NA",
      "aagPOC": "Sue Rawlings",
      "aagTeam": "ITS Crew System Product",
      "environment": "Production",
      "criticality": "Critical",
      "severity": "Critical",
      "status": "Operational",
      "response": "15 minutes",
      "resolution": "TBD",
      "escalation": "JCTE is a Tier-1 System and all standard ITS Tier 1 System SLAs are applicable for JCTE",
      "supportModel": "Jeppesen + ITS Cog Crew Support /  ITS Crew Systems Product",
      "phone": "Please reach out to on-call from ITS JCTE System Admins, (only for Sev-1) 1-562-797-6193",
      "phoneNote": "NA",
      "email": "NA",
      "description": [
        "JCTE Used by Alaska Crew Scheduling, In-flight, Drug Testing, payroll groups and approx 6300 members",
        "The Crew Scheduling System Features scheduling applications for both the Frontline Crew and Back office",
        "Frontline Crew will soon have a sleek and simple mobile experience through Crew Access and Crew Exchange",
        "The System also features Alert Monitor, Tracking editor and Crew editor - responsive web tools built to streamline operations in the back office"
      ],
      "supportDescription": "Application support is coordinated through the appropriate vendor and AAG ITS teams.",
      "escalationSteps": [
        "JCTE System Administrators should be contacted. They will reach out to vendor as needed"
      ],
      "key": "jcte"
    },
    "airtrack": {
      "id": "airtrack",
      "name": "Airtrak",
      "icon": "public/applications/airtrack.png",
      "function": "Aircraft Tracking",
      "category": "Aircraft Tracking",
      "vendor": "NA",
      "vendorPOC": "NA",
      "aagPOC": "GK Maganty",
      "aagTeam": "ITS Ops 360 AirtrAK",
      "environment": "Production",
      "criticality": "High",
      "severity": "High",
      "status": "Operational",
      "response": "15 minutes",
      "resolution": "TBD",
      "escalation": "24x7 - critical to flight operations",
      "supportModel": "ITS Ops 360 AirtrAK",
      "phone": "NA",
      "phoneNote": "NA",
      "email": "NA",
      "description": "Airtrak is an aviation tracking system that provides real-time visibility into aircraft movement. Allows NOC, SOC & Dispatch to conduct Flight operations. It lets them allocate Aircraft to flights or move flights to differenct aircraft. It allows them to execute IrregularOps like adding flights, Delay flights, Divert, Cancel etc. ",
      "supportDescription": "Support follows the approved operational support model.",
      "escalationSteps": [
        "Validate tracking impact.",
        "Contact the on-call from ITS Ops 360 AirtrAk team.",
        "Notify the cross-teams if required.",
        "Escalate through the documented process when required."
      ],
      "key": "airtrack"
    },
    "pilot-briefing": {
      "id": "pilot-briefing",
      "name": "Pilot Briefing",
      "icon": "public/applications/pilot-briefing.png",
      "function": "JetPack (Pilot Mobile) / Pilot Briefing application used by AS and QX pilots for pre-flight procedures and while en-route.",
      "category": "Pilot Briefing",
      "vendor": "NA",
      "vendorPOC": "NA",
      "aagPOC": "Ryan Wilkins",
      "aagTeam": "ITS Flight Operations",
      "environment": "Production",
      "criticality": "High",
      "severity": "High",
      "status": "Operational",
      "response": "15 minutes",
      "resolution": "TBD",
      "escalation": "TBD",
      "supportModel": "ITS COG Flight Operations / ITS Flight Operations",
      "phone": "NA",
      "phoneNote": "NA",
      "email": "NA",
      "description": [
        "JetPack (Pilot Mobile) / Pilot Briefing is an iPad app for AS and QX pilots. Pilots use JetPack for their pre-flight procedures and while en-route.",
        "Displays the pilot's schedule, flight status, and passenger details.",
        "Downloads the flight's briefing packet",
        "Provides the ability to sign fit for duty.",
        "Parses and reformats brefing packet data to simplify the aircraft setup and pre-flight procedures.",
        "Displays final weight and balance numbers from Central Load Planning(CLP)",
        "Tracks fuel and time while enroute"
      ],
      "supportDescription": "Support is coordinated through the responsible operational and technical teams.",
      "escalationSteps": [
        "Validate pilot briefing impact.",
        "Contact the ITS COG Flight Operations/ Flight Operations support team.",
        "Notify the ITS Flight Operations team on-call Immediately if the system is down.",
        "Escalate according to the approved operational process."
      ],
      "key": "pilot-briefing"
    },
    "aircraft-maintenance": {
      "id": "aircraft-maintenance",
      "name": "Aircraft Maintenance",
      "icon": "public/applications/aircraft-maintenance.png",
      "function": "Maintenance Tracking and Management",
      "category": "Aircraft Maintenance",
      "vendor": "Trax",
      "vendorPOC": "AS: Jairo Arias, QX: Camilo Sarmiento",
      "aagPOC": "Brad Dufour",
      "aagTeam": "ITS COG M&E App Support",
      "environment": "Production",
      "criticality": "High",
      "severity": "High",
      "status": "Operational",
      "response": "15 minutes",
      "resolution": "TBD",
      "escalation": "24x7 - critical to flight operations",
      "supportModel": "Trax + ITS M&E",
      "phone": "305-622-7400, TRAX 24x7Support (877-264-8729)",
      "phoneNote": "Approved vendor support",
      "email": "AS Trax: Jairo.arias@trax.aero, QX Trax: Camilo.Sarmiento@trax.aero",
      "description": "Trax is the core application for the Mainatenace division. Trax provides modules for Inventory Management, Order Management, Engineering Controls, Planning Financials, Work Orders, and Defect Tracking etc...",
      "supportDescription": "Support follows the approved maintenance application support process.",
      "escalationSteps": [
        "Validate Aircraft Maintenance system impact.",
        "Contact the on-call from ITS COG M&E App Support team.",
        "Escalate through the approved vendor process."
      ],
      "key": "aircraft-maintenance"
    },
    "aims": {
      "id": "aims",
      "name": "AIMS",
      "icon": "public/applications/aims.png",
      "function": "Airline Information Management System",
      "category": "AIMS, Horizon Crew Tracking, eCrew",
      "vendor": "AIMS (in Athens Greece)",
      "vendorPOC": "NA",
      "aagPOC": "Sue R",
      "aagTeam": "ITS COG Crew Support",
      "environment": "Production",
      "criticality": "Critical",
      "severity": "Critical",
      "status": "Operational",
      "response": "15 minutes",
      "resolution": "TBD",
      "escalation": "The business focal will handle all escalation to AIMS",
      "supportModel": "AIMS + ITS Crew Systems",
      "phone": "00-30-210-960-6000",
      "phoneNote": "Approved vendor support",
      "email": "aims@aims.aero / Support247@aims.aero",
      "description": "AIMS/Horizon Crew Scheduling is used for scheduling pilots and flight attendants on Horizon flights. There is a web appliction used by the crews to access information, bid for lines and trade trips. AIMS, Horizon Crew Scheduling is a Sev1. Used by schedulers to ensure crew is on the plane. AIMS cannot be down for more than 4 hours(normally) without adversely impacting Horizon operation",
      "supportDescription": "Support is coordinated between Production Operations, AAG ITS and the responsible vendor.",
      "escalationSteps": [
        "Validate the operational impact.",
        "Contact the on-call from ITS COG Crew Support team.",
        "Notify ITS Crew Systems team if needed.",
        "Escalate through the approved vendor process when required."
      ],
      "key": "aims"
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
      "escalation": "1. Call 480-443-7740, prompt 3 for Technical Support.\n2. Email:\ni) support@aerodata.aero (general technical/customer support)\nii) rwydata@aerodata.aero (airport, runway, and NOTAM inquiries)\n3. Support Service Hours: Production service availability is documented as 24x7. Email sent outside business hours can receive expedited handling by putting URGENT in the subject; documented response is 5–10 minutes.\n4. Primary ITS Team Owner: ITS COG Flight Operations (unresolved/multi-flight issues).",
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
      "escalation": "Description:\niCargo is a vendor produced and hosted application to handle all operational and accounting aspects of Alaska Air Cargo. The primary application is agent facing and is accessed via Chrome or Edge browsers. There is also a public facing customer portal for customers to book shipments and check the shipment status. There is also a mobile app that runs on TC78 handheld devices that is used by sales and cargo agents.\n\nAliases:\niCargo\n\nAuthentication:\n• Agent facing desktop application: Authenticated for SSO using OIDC (OpenID Connect)\n• Mobile application (TC78 handheld devices): Authenticated for SSO using OIDC (OpenID Connect)\n• Public-facing customer booking/tracking portal: Authenticated using login/password on the site\n\nSLA:\nThis is a critical system for the Cargo operation. Issues with this system shouldn’t cause delays, except in the State of Alaska. Issues that affect multiple users across multiple stations should be reported as a Severity 2 issue. Issues affecting individual stations should be reported as a Severity 2 issue if multiple users are impacted. Issues affecting individual users should be reported to the ITS Service Desk as a Severity 3 issue.\n\nTechnical Owners:\n• System Administration and Account Support: Cargo System Support — Gary Johnson (Gary.johnson@alaskaair.com)\n• ITS System Owner: ITS COG Airport Ops Support — COGAirportOpsSupport@alaskaair.com (24/7)\n• Product Owner: ITS Product Management — Roni Schuetz, Vanny Thavixay\n• Business Owner Primary: Alaska Air Cargo — Tony Dimeglio\n• Vendor: iBS Software PLC — Must communicate with iBS via Gary Johnson.\n\nVendor Escalation Procedures:\n• Vendor Company Name: iBS Software, PLC\n• Vendor Phone: TBD (Must communicate with iBS via Gary Johnson)\n• Vendor Email: TBD (Escalate via Gary.johnson@alaskaair.com / COGAirportOpsSupport@alaskaair.com)\n• Vendor Contact Name: TBD\n• Escalation Procedure Steps: Contact Gary Johnson for escalating to iBS support. If you can’t reach Gary, contact Maddie Charlesworth.\n\nEverbridge Contacts:\n• Focal Name: Gary Johnson | Group: Cargo System Support | Contact: Gary.johnson@alaskaair.com\n• Focal Name: Maddie Charlesworth | Group: Cargo System Support | Contact: Madelyn.Charlesworth@alaskaair.com\n• Focal Name: on-call for ITS COG Airport Ops Support | Group: ITS COG Airport Ops Support | Contact: COGAirportOpsSupport@alaskaair.com\n• Focal Name: Ryan Li | Group: ITS Cargo | Contact: Ryan.li@alaskaair.com\n• Focal Name: Michael Tipton | Group: ITS Cargo | Contact: Michael.Tipton@alaskaair.com\n\nRequired Information for Escalation:\n• Workstation Name\n• Browser (Should be Edge or Chrome)\n• Username\n• iCargo screen identifier (ex. CAP018, OPR064, etc.)\n\nSystem Specifications & Client/Workstation Configuration:\n• Windows workstation preferred; Chrome (preferred) or Edge browser must be installed\n• Must have iCargo Browser Extension installed in browser\n• Browser popup blocker disabled for Edge: [*.]ibsplc.aero and Chrome: https://alaska-icargo.ibsplc.aero\n• Components needed for Printing: iCargo Print Extension v 1.8 or higher; icoprint.exe and supporting files installed on workstation (Managed by ITS Endpoint Platforms)\n\nSpecial Notes / Revision History:\n• 6Oct2023 (rneill): Initial Release\n• 6Sept2024 (Hakeem Clark): Transition from ITS Airport Operations to ITS COG AirportOps Support\n• 28May2026 (rneill): Updated contact info and escalation procedure.",
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
