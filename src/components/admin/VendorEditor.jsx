import React, { useState } from "react";
import { getVendorImpactDetails, getGroundStopImpactDetails } from "../../data/vendorDetails.js";

function linesToArray(text) {
  return String(text || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function arrayToLines(arr) {
  if (!Array.isArray(arr)) return String(arr || "");
  return arr
    .map((item) => (typeof item === "string" ? item : item?.name || item?.value || JSON.stringify(item)))
    .join("\n");
}

function buildInitialImpactState(baseImpact = {}, existingOverrides = {}) {
  const merged = {
    ...baseImpact,
    ...(existingOverrides || {})
  };
  const depTab = {
    ...(baseImpact?.dependenciesTab || {}),
    ...(existingOverrides?.dependenciesTab || {})
  };
  const vContacts = {
    ...(baseImpact?.vendorContacts || {}),
    ...(existingOverrides?.vendorContacts || {})
  };
  const iContacts = {
    ...(baseImpact?.internalContacts || {}),
    ...(existingOverrides?.internalContacts || {})
  };
  const callout = {
    ...(baseImpact?.impactCallout || {}),
    ...(existingOverrides?.impactCallout || {})
  };

  return {
    pageTitle: merged.pageTitle || "",
    pageSubtitle: merged.pageSubtitle || "",
    subtitle: merged.subtitle || "",
    company: merged.company || "",
    website: merged.website || "",
    category: merged.category || "",
    itsTeam: merged.itsTeam || "",
    status: merged.status || "Active",
    lastUpdated: merged.lastUpdated || "2026",
    calloutTitle: callout.title || callout.level || "Impact Information",
    calloutMessage: callout.message || callout.description || "",
    typicalBusinessImpactText: arrayToLines(merged.typicalBusinessImpact),
    knownWorkaroundsText: arrayToLines(merged.knownWorkarounds),
    validationChecklistText: arrayToLines(merged.validationChecklist),
    upstreamDependenciesText: arrayToLines(merged.upstreamDependencies),
    downstreamConsumersText: arrayToLines(merged.downstreamConsumers),
    impactedSystems: Array.isArray(merged.impactedSystems)
      ? merged.impactedSystems.map((s, idx) => ({
          id: s.id || `sys-${idx + 1}`,
          name: s.name || "",
          subName: s.subName || s.appTabSubName || "",
          businessFunction: s.businessFunction || "",
          description: s.description || s.appTabDescription || "",
          impact: s.impact || "",
          dependencies: s.dependencies || "",
          owner: s.owner || "",
          status: s.status || "Potential"
        }))
      : [],
    depOverviewSubtitle: depTab.overviewSubtitle || depTab.diagramSubtitle || "",
    depKeyTakeawaysText: arrayToLines(depTab.keyTakeaways),
    upstreamTable: Array.isArray(depTab.upstreamTable)
      ? depTab.upstreamTable.map((r, idx) => ({
          id: r.id || `up-${idx + 1}`,
          name: r.name || "",
          description: r.description || "",
          type: r.type || r.dataFlow || "External / Partner",
          impact: r.impact || ""
        }))
      : [],
    downstreamTable: Array.isArray(depTab.downstreamTable)
      ? depTab.downstreamTable.map((r, idx) => ({
          id: r.id || `down-${idx + 1}`,
          name: r.name || "",
          description: r.description || "",
          type: r.type || r.dataFlow || "Internal Operations",
          impact: r.impact || ""
        }))
      : [],
    infrastructureTable: Array.isArray(depTab.infrastructureTable)
      ? depTab.infrastructureTable.map((r, idx) => ({
          id: r.id || `inf-${idx + 1}`,
          component: r.component || r.name || "",
          description: r.description || "",
          owner: r.owner || "",
          impact: r.impact || ""
        }))
      : [],
    vendorContacts: {
      supportEmail: vContacts.supportEmail || "",
      supportEmailNote: vContacts.supportEmailNote || "",
      secondaryEmail: vContacts.secondaryEmail || "",
      secondaryEmailNote: vContacts.secondaryEmailNote || "",
      supportPhone: vContacts.supportPhone || "",
      technicalSupport: vContacts.technicalSupport || "",
      accountManager: vContacts.accountManager || "",
      supportHours: vContacts.supportHours || "",
      escalation: vContacts.escalation || "",
      communicationGuidelinesText: arrayToLines(vContacts.communicationGuidelines),
      responseSlas: Array.isArray(vContacts.responseSlas)
        ? vContacts.responseSlas.map((sla) => ({
            label: sla.label || "SLA Target",
            value: sla.value || ""
          }))
        : []
    },
    internalContacts: {
      itsTeam: iContacts.itsTeam || "",
      itsTeamNote: iContacts.itsTeamNote || "",
      applicationOwner: iContacts.applicationOwner || "",
      onCallSupport: iContacts.onCallSupport || "",
      systemAdministration: iContacts.systemAdministration || "",
      businessOwner: iContacts.businessOwner || "",
      passwordSupport: iContacts.passwordSupport || "",
      everbridgeContacts: iContacts.everbridgeContacts || ""
    },
    relatedDocuments: Array.isArray(merged.relatedDocuments)
      ? merged.relatedDocuments.map((doc) => ({
          title: doc.title || "",
          type: doc.type || doc.category || "Operational Runbook",
          owner: doc.owner || "",
          updated: doc.updated || "2026",
          url: doc.url || ""
        }))
      : []
  };
}

function serializeImpactOverrides(impactState) {
  return {
    pageTitle: impactState.pageTitle,
    pageSubtitle: impactState.pageSubtitle,
    subtitle: impactState.subtitle,
    company: impactState.company,
    website: impactState.website,
    category: impactState.category,
    itsTeam: impactState.itsTeam,
    status: impactState.status,
    lastUpdated: impactState.lastUpdated,
    impactCallout: {
      title: impactState.calloutTitle,
      message: impactState.calloutMessage,
      description: impactState.calloutMessage
    },
    typicalBusinessImpact: linesToArray(impactState.typicalBusinessImpactText),
    knownWorkarounds: linesToArray(impactState.knownWorkaroundsText),
    validationChecklist: linesToArray(impactState.validationChecklistText),
    upstreamDependencies: linesToArray(impactState.upstreamDependenciesText),
    downstreamConsumers: linesToArray(impactState.downstreamConsumersText),
    impactedSystems: impactState.impactedSystems.map((s, idx) => ({
      id: s.id || `sys-${idx + 1}`,
      name: s.name || "System",
      subName: s.subName || "",
      appTabSubName: s.subName || "",
      description: s.description || "",
      appTabDescription: s.description || "",
      businessFunction: s.businessFunction || "Operations",
      impact: s.impact || "Operational disruption",
      dependencies: s.dependencies || "",
      owner: s.owner || impactState.itsTeam || "ITS Operations",
      status: s.status || "Potential"
    })),
    dependenciesTab: {
      overviewSubtitle: impactState.depOverviewSubtitle,
      keyTakeaways: linesToArray(impactState.depKeyTakeawaysText),
      upstreamTable: impactState.upstreamTable,
      downstreamTable: impactState.downstreamTable,
      infrastructureTable: impactState.infrastructureTable
    },
    vendorContacts: {
      supportEmail: impactState.vendorContacts.supportEmail,
      supportEmailNote: impactState.vendorContacts.supportEmailNote,
      secondaryEmail: impactState.vendorContacts.secondaryEmail,
      secondaryEmailNote: impactState.vendorContacts.secondaryEmailNote,
      supportPhone: impactState.vendorContacts.supportPhone,
      technicalSupport: impactState.vendorContacts.technicalSupport,
      accountManager: impactState.vendorContacts.accountManager,
      supportHours: impactState.vendorContacts.supportHours,
      escalation: impactState.vendorContacts.escalation,
      communicationGuidelines: linesToArray(impactState.vendorContacts.communicationGuidelinesText),
      responseSlas: impactState.vendorContacts.responseSlas
    },
    internalContacts: {
      ...impactState.internalContacts
    },
    relatedDocuments: impactState.relatedDocuments
  };
}

export function ApplicationEditor({ application, onClose, onSave }) {
  const baseImpact = getGroundStopImpactDetails({
    key: application.key || application.id,
    record: application
  });

  const [activeTab, setActiveTab] = useState("overview");
  const [draft, setDraft] = useState(() => ({
    ...application,
    shortName: application.shortName || application.name || "",
    name: application.name || application.shortName || "",
    category: application.category || baseImpact?.category || "",
    status: application.status || baseImpact?.status || "Active",
    response: application.response || application.sla || "15 min",
    severity: application.severity || "Critical",
    vendor: application.vendor || baseImpact?.company || "",
    website: application.website || baseImpact?.website || "",
    aagPOC: application.aagPOC || baseImpact?.internalContacts?.applicationOwner || "",
    phone: application.phone || baseImpact?.vendorContacts?.supportPhone || "",
    email: application.email || baseImpact?.vendorContacts?.supportEmail || "",
    aagTeam: application.aagTeam || baseImpact?.itsTeam || "",
    lastUpdated: application.lastUpdated || baseImpact?.lastUpdated || "2026",
    description: Array.isArray(application.description)
      ? application.description.join(" ")
      : application.description || ""
  }));

  const [impact, setImpact] = useState(() =>
    buildInitialImpactState(baseImpact, application.impactOverrides)
  );

  const tabs = [
    ["overview", "Card & Overview"],
    ["systems", `Impacted Systems (${impact.impactedSystems.length})`],
    ["dependencies", "Dependencies"],
    ["contacts", "Contacts & SLAs"],
    ["documents", `Documents (${impact.relatedDocuments.length})`]
  ];

  function handleSubmit(e) {
    e.preventDefault();
    const syncedImpact = {
      ...impact,
      company: draft.vendor || impact.company,
      website: draft.website || impact.website,
      category: draft.category || impact.category,
      itsTeam: draft.aagTeam || impact.itsTeam,
      status: draft.status || impact.status,
      lastUpdated: draft.lastUpdated || impact.lastUpdated,
      vendorContacts: {
        ...impact.vendorContacts,
        supportPhone: draft.phone || impact.vendorContacts.supportPhone,
        supportEmail: draft.email || impact.vendorContacts.supportEmail
      },
      internalContacts: {
        ...impact.internalContacts,
        itsTeam: draft.aagTeam || impact.internalContacts.itsTeam,
        applicationOwner: draft.aagPOC || impact.internalContacts.applicationOwner
      }
    };
    const impactOverrides = serializeImpactOverrides(syncedImpact);
    onSave({
      ...draft,
      name: draft.shortName || draft.name,
      shortName: draft.shortName || draft.name,
      sla: draft.response,
      adminEdited: true,
      appDataVersion: 2,
      impactOverrides
    });
  }

  return (
    <div className="modal" onClick={(e) => e.target.classList.contains("modal") && onClose()}>
      <form className="editor vendor-editor admin-full-editor" onSubmit={handleSubmit}>
        <header>
          <div>
            <small>EDIT GROUND STOP APPLICATION · FULL RUNBOOK &amp; CARD</small>
            <h2>{draft.shortName || draft.name || "Edit Application"}</h2>
            <p className="vendor-modal-description">{draft.category || "Ground Stop Operational System"}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close editor">
            ×
          </button>
        </header>

        <nav className="editor-tabs">
          {tabs.map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={activeTab === key ? "active" : ""}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="admin-editor-body">
          {activeTab === "overview" && (
            <>
              <div className="admin-editor-section-title">Card &amp; Hero Summary Fields</div>
              <div className="form-grid">
                <label>
                  Card Short Name
                  <input
                    type="text"
                    value={draft.shortName || ""}
                    onChange={(e) => setDraft({ ...draft, shortName: e.target.value, name: e.target.value })}
                  />
                </label>
                <label>
                  Detail Page Title
                  <input
                    type="text"
                    value={impact.pageTitle || ""}
                    onChange={(e) => setImpact({ ...impact, pageTitle: e.target.value })}
                  />
                </label>
                <label>
                  Operational Category
                  <input
                    type="text"
                    value={draft.category || ""}
                    onChange={(e) => setDraft({ ...draft, category: e.target.value })}
                  />
                </label>
                <label>
                  Vendor / Provider
                  <input
                    type="text"
                    value={draft.vendor || ""}
                    onChange={(e) => setDraft({ ...draft, vendor: e.target.value })}
                  />
                </label>
                <label>
                  Criticality / Severity
                  <select
                    value={draft.severity || "Critical"}
                    onChange={(e) => setDraft({ ...draft, severity: e.target.value })}
                  >
                    <option value="Critical">Critical</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                  </select>
                </label>
                <label>
                  Response SLA Badge
                  <input
                    type="text"
                    value={draft.response || ""}
                    onChange={(e) => setDraft({ ...draft, response: e.target.value })}
                  />
                </label>
                <label>
                  Operational Status
                  <select
                    value={draft.status || "Active"}
                    onChange={(e) => setDraft({ ...draft, status: e.target.value })}
                  >
                    <option value="Active">Active</option>
                    <option value="Operational">Operational</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </label>
                <label>
                  Last Updated Label
                  <input
                    type="text"
                    value={draft.lastUpdated || ""}
                    onChange={(e) => setDraft({ ...draft, lastUpdated: e.target.value })}
                  />
                </label>
                <label>
                  Website / Portal URL
                  <input
                    type="text"
                    value={draft.website || ""}
                    onChange={(e) => setDraft({ ...draft, website: e.target.value })}
                  />
                </label>
                <label>
                  Responsible ITS Team
                  <input
                    type="text"
                    value={draft.aagTeam || ""}
                    onChange={(e) => setDraft({ ...draft, aagTeam: e.target.value })}
                  />
                </label>
                <label>
                  Primary ITS POC (Card)
                  <input
                    type="text"
                    value={draft.aagPOC || ""}
                    onChange={(e) => setDraft({ ...draft, aagPOC: e.target.value })}
                  />
                </label>
                <label>
                  Primary Support Phone (Card)
                  <input
                    type="text"
                    value={draft.phone || ""}
                    onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Primary Support Email (Card)
                  <input
                    type="text"
                    value={draft.email || ""}
                    onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Card Summary Description
                  <textarea
                    rows={2}
                    value={draft.description || ""}
                    onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Detail Page Subtitle
                  <textarea
                    rows={2}
                    value={impact.pageSubtitle || ""}
                    onChange={(e) => setImpact({ ...impact, pageSubtitle: e.target.value })}
                  />
                </label>
              </div>

              <div className="admin-editor-section-title">Impact Overview Callout &amp; Runbook Lists</div>
              <div className="form-grid">
                <label className="full-width">
                  Impact Alert Banner Title
                  <input
                    type="text"
                    value={impact.calloutTitle || ""}
                    onChange={(e) => setImpact({ ...impact, calloutTitle: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Impact Alert Banner Message
                  <textarea
                    rows={2}
                    value={impact.calloutMessage || ""}
                    onChange={(e) => setImpact({ ...impact, calloutMessage: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Typical Business Impact (one bullet per line)
                  <textarea
                    rows={4}
                    value={impact.typicalBusinessImpactText || ""}
                    onChange={(e) => setImpact({ ...impact, typicalBusinessImpactText: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Known Workarounds &amp; Recovery Actions (one bullet per line)
                  <textarea
                    rows={4}
                    value={impact.knownWorkaroundsText || ""}
                    onChange={(e) => setImpact({ ...impact, knownWorkaroundsText: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Validation Checklist Steps (one step per line)
                  <textarea
                    rows={5}
                    value={impact.validationChecklistText || ""}
                    onChange={(e) => setImpact({ ...impact, validationChecklistText: e.target.value })}
                  />
                </label>
              </div>
            </>
          )}

          {activeTab === "systems" && (
            <div className="admin-editor-list-section">
              <div className="admin-editor-list-header">
                <div className="admin-editor-section-title">Impacted Applications &amp; Systems</div>
                <button
                  type="button"
                  className="admin-add-row-btn"
                  onClick={() =>
                    setImpact({
                      ...impact,
                      impactedSystems: [
                        ...impact.impactedSystems,
                        {
                          id: `sys-${Date.now()}`,
                          name: "",
                          subName: "",
                          businessFunction: draft.category || "Flight Operations",
                          description: "",
                          impact: "",
                          dependencies: "",
                          owner: draft.aagTeam || "ITS Flight Operations",
                          status: "Potential"
                        }
                      ]
                    })
                  }
                >
                  + Add Impacted System
                </button>
              </div>
              {impact.impactedSystems.map((sys, idx) => (
                <div key={sys.id || idx} className="admin-editor-item-card">
                  <div className="admin-editor-item-top">
                    <strong>System #{idx + 1}: {sys.name || "Untitled System"}</strong>
                    <button
                      type="button"
                      className="admin-remove-row-btn"
                      onClick={() =>
                        setImpact({
                          ...impact,
                          impactedSystems: impact.impactedSystems.filter((_, i) => i !== idx)
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-grid">
                    <label>
                      System / Component Name
                      <input
                        type="text"
                        value={sys.name || ""}
                        onChange={(e) => {
                          const next = [...impact.impactedSystems];
                          next[idx] = { ...sys, name: e.target.value };
                          setImpact({ ...impact, impactedSystems: next });
                        }}
                      />
                    </label>
                    <label>
                      Subtitle / Tag
                      <input
                        type="text"
                        value={sys.subName || ""}
                        onChange={(e) => {
                          const next = [...impact.impactedSystems];
                          next[idx] = { ...sys, subName: e.target.value };
                          setImpact({ ...impact, impactedSystems: next });
                        }}
                      />
                    </label>
                    <label>
                      Business Function
                      <input
                        type="text"
                        value={sys.businessFunction || ""}
                        onChange={(e) => {
                          const next = [...impact.impactedSystems];
                          next[idx] = { ...sys, businessFunction: e.target.value };
                          setImpact({ ...impact, impactedSystems: next });
                        }}
                      />
                    </label>
                    <label>
                      Owner Team
                      <input
                        type="text"
                        value={sys.owner || ""}
                        onChange={(e) => {
                          const next = [...impact.impactedSystems];
                          next[idx] = { ...sys, owner: e.target.value };
                          setImpact({ ...impact, impactedSystems: next });
                        }}
                      />
                    </label>
                    <label className="full-width">
                      Description
                      <input
                        type="text"
                        value={sys.description || ""}
                        onChange={(e) => {
                          const next = [...impact.impactedSystems];
                          next[idx] = { ...sys, description: e.target.value };
                          setImpact({ ...impact, impactedSystems: next });
                        }}
                      />
                    </label>
                    <label className="full-width">
                      Operational Impact if Unavailable
                      <input
                        type="text"
                        value={sys.impact || ""}
                        onChange={(e) => {
                          const next = [...impact.impactedSystems];
                          next[idx] = { ...sys, impact: e.target.value };
                          setImpact({ ...impact, impactedSystems: next });
                        }}
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "dependencies" && (
            <div className="admin-editor-list-section">
              <div className="admin-editor-section-title">Dependencies Overview &amp; Takeaways</div>
              <div className="form-grid">
                <label className="full-width">
                  Dependencies Diagram Subtitle
                  <input
                    type="text"
                    value={impact.depOverviewSubtitle || ""}
                    onChange={(e) => setImpact({ ...impact, depOverviewSubtitle: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Key Takeaways (one bullet per line)
                  <textarea
                    rows={3}
                    value={impact.depKeyTakeawaysText || ""}
                    onChange={(e) => setImpact({ ...impact, depKeyTakeawaysText: e.target.value })}
                  />
                </label>
                <label>
                  Upstream Dependency Summary Bullets (one per line)
                  <textarea
                    rows={4}
                    value={impact.upstreamDependenciesText || ""}
                    onChange={(e) => setImpact({ ...impact, upstreamDependenciesText: e.target.value })}
                  />
                </label>
                <label>
                  Downstream Consumer Summary Bullets (one per line)
                  <textarea
                    rows={4}
                    value={impact.downstreamConsumersText || ""}
                    onChange={(e) => setImpact({ ...impact, downstreamConsumersText: e.target.value })}
                  />
                </label>
              </div>

              <div className="admin-editor-list-header">
                <div className="admin-editor-section-title">Upstream Dependencies Table ({impact.upstreamTable.length})</div>
                <button
                  type="button"
                  className="admin-add-row-btn"
                  onClick={() =>
                    setImpact({
                      ...impact,
                      upstreamTable: [
                        ...impact.upstreamTable,
                        { id: `up-${Date.now()}`, name: "", description: "", type: "External / Partner", impact: "" }
                      ]
                    })
                  }
                >
                  + Add Upstream Row
                </button>
              </div>
              {impact.upstreamTable.map((row, idx) => (
                <div key={row.id || idx} className="admin-editor-item-card">
                  <div className="admin-editor-item-top">
                    <strong>Upstream #{idx + 1}: {row.name || "New Dependency"}</strong>
                    <button
                      type="button"
                      className="admin-remove-row-btn"
                      onClick={() =>
                        setImpact({
                          ...impact,
                          upstreamTable: impact.upstreamTable.filter((_, i) => i !== idx)
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-grid">
                    <label>
                      System / Vendor
                      <input
                        type="text"
                        value={row.name || ""}
                        onChange={(e) => {
                          const next = [...impact.upstreamTable];
                          next[idx] = { ...row, name: e.target.value };
                          setImpact({ ...impact, upstreamTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Type
                      <input
                        type="text"
                        value={row.type || ""}
                        onChange={(e) => {
                          const next = [...impact.upstreamTable];
                          next[idx] = { ...row, type: e.target.value };
                          setImpact({ ...impact, upstreamTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Description
                      <input
                        type="text"
                        value={row.description || ""}
                        onChange={(e) => {
                          const next = [...impact.upstreamTable];
                          next[idx] = { ...row, description: e.target.value };
                          setImpact({ ...impact, upstreamTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Impact if Unavailable
                      <input
                        type="text"
                        value={row.impact || ""}
                        onChange={(e) => {
                          const next = [...impact.upstreamTable];
                          next[idx] = { ...row, impact: e.target.value };
                          setImpact({ ...impact, upstreamTable: next });
                        }}
                      />
                    </label>
                  </div>
                </div>
              ))}

              <div className="admin-editor-list-header">
                <div className="admin-editor-section-title">Downstream Consumers Table ({impact.downstreamTable.length})</div>
                <button
                  type="button"
                  className="admin-add-row-btn"
                  onClick={() =>
                    setImpact({
                      ...impact,
                      downstreamTable: [
                        ...impact.downstreamTable,
                        { id: `down-${Date.now()}`, name: "", description: "", type: "Internal Operations", impact: "" }
                      ]
                    })
                  }
                >
                  + Add Downstream Row
                </button>
              </div>
              {impact.downstreamTable.map((row, idx) => (
                <div key={row.id || idx} className="admin-editor-item-card">
                  <div className="admin-editor-item-top">
                    <strong>Downstream #{idx + 1}: {row.name || "New Consumer"}</strong>
                    <button
                      type="button"
                      className="admin-remove-row-btn"
                      onClick={() =>
                        setImpact({
                          ...impact,
                          downstreamTable: impact.downstreamTable.filter((_, i) => i !== idx)
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-grid">
                    <label>
                      System / Team
                      <input
                        type="text"
                        value={row.name || ""}
                        onChange={(e) => {
                          const next = [...impact.downstreamTable];
                          next[idx] = { ...row, name: e.target.value };
                          setImpact({ ...impact, downstreamTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Type
                      <input
                        type="text"
                        value={row.type || ""}
                        onChange={(e) => {
                          const next = [...impact.downstreamTable];
                          next[idx] = { ...row, type: e.target.value };
                          setImpact({ ...impact, downstreamTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Description
                      <input
                        type="text"
                        value={row.description || ""}
                        onChange={(e) => {
                          const next = [...impact.downstreamTable];
                          next[idx] = { ...row, description: e.target.value };
                          setImpact({ ...impact, downstreamTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Impact if Unavailable
                      <input
                        type="text"
                        value={row.impact || ""}
                        onChange={(e) => {
                          const next = [...impact.downstreamTable];
                          next[idx] = { ...row, impact: e.target.value };
                          setImpact({ ...impact, downstreamTable: next });
                        }}
                      />
                    </label>
                  </div>
                </div>
              ))}

              <div className="admin-editor-list-header">
                <div className="admin-editor-section-title">Infrastructure &amp; Integration Components ({impact.infrastructureTable.length})</div>
                <button
                  type="button"
                  className="admin-add-row-btn"
                  onClick={() =>
                    setImpact({
                      ...impact,
                      infrastructureTable: [
                        ...impact.infrastructureTable,
                        { id: `inf-${Date.now()}`, component: "", description: "", owner: draft.aagTeam || "", impact: "" }
                      ]
                    })
                  }
                >
                  + Add Infrastructure Row
                </button>
              </div>
              {impact.infrastructureTable.map((row, idx) => (
                <div key={row.id || idx} className="admin-editor-item-card">
                  <div className="admin-editor-item-top">
                    <strong>Component #{idx + 1}: {row.component || "New Component"}</strong>
                    <button
                      type="button"
                      className="admin-remove-row-btn"
                      onClick={() =>
                        setImpact({
                          ...impact,
                          infrastructureTable: impact.infrastructureTable.filter((_, i) => i !== idx)
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-grid">
                    <label>
                      Component
                      <input
                        type="text"
                        value={row.component || ""}
                        onChange={(e) => {
                          const next = [...impact.infrastructureTable];
                          next[idx] = { ...row, component: e.target.value };
                          setImpact({ ...impact, infrastructureTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Owner
                      <input
                        type="text"
                        value={row.owner || ""}
                        onChange={(e) => {
                          const next = [...impact.infrastructureTable];
                          next[idx] = { ...row, owner: e.target.value };
                          setImpact({ ...impact, infrastructureTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Description
                      <input
                        type="text"
                        value={row.description || ""}
                        onChange={(e) => {
                          const next = [...impact.infrastructureTable];
                          next[idx] = { ...row, description: e.target.value };
                          setImpact({ ...impact, infrastructureTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Impact
                      <input
                        type="text"
                        value={row.impact || ""}
                        onChange={(e) => {
                          const next = [...impact.infrastructureTable];
                          next[idx] = { ...row, impact: e.target.value };
                          setImpact({ ...impact, infrastructureTable: next });
                        }}
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "contacts" && (
            <div className="admin-editor-list-section">
              <div className="admin-editor-section-title">Vendor Support Contacts</div>
              <div className="form-grid">
                <label>
                  Support Phone
                  <input
                    type="text"
                    value={draft.phone || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDraft({ ...draft, phone: val });
                      setImpact({
                        ...impact,
                        vendorContacts: { ...impact.vendorContacts, supportPhone: val }
                      });
                    }}
                  />
                </label>
                <label>
                  Support Email
                  <input
                    type="text"
                    value={draft.email || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDraft({ ...draft, email: val });
                      setImpact({
                        ...impact,
                        vendorContacts: { ...impact.vendorContacts, supportEmail: val }
                      });
                    }}
                  />
                </label>
                <label>
                  Secondary Email
                  <input
                    type="text"
                    value={impact.vendorContacts.secondaryEmail || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        vendorContacts: { ...impact.vendorContacts, secondaryEmail: e.target.value }
                      })
                    }
                  />
                </label>
                <label>
                  Technical Support / Portal
                  <input
                    type="text"
                    value={impact.vendorContacts.technicalSupport || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        vendorContacts: { ...impact.vendorContacts, technicalSupport: e.target.value }
                      })
                    }
                  />
                </label>
                <label className="full-width">
                  Support Service Hours
                  <input
                    type="text"
                    value={impact.vendorContacts.supportHours || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        vendorContacts: { ...impact.vendorContacts, supportHours: e.target.value }
                      })
                    }
                  />
                </label>
              </div>

              <div className="admin-editor-section-title">Alaska Internal Contacts</div>
              <div className="form-grid">
                <label>
                  ITS Team
                  <input
                    type="text"
                    value={draft.aagTeam || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDraft({ ...draft, aagTeam: val });
                      setImpact({
                        ...impact,
                        internalContacts: { ...impact.internalContacts, itsTeam: val }
                      });
                    }}
                  />
                </label>
                <label>
                  Application Owner / ITS POC
                  <input
                    type="text"
                    value={draft.aagPOC || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDraft({ ...draft, aagPOC: val });
                      setImpact({
                        ...impact,
                        internalContacts: { ...impact.internalContacts, applicationOwner: val }
                      });
                    }}
                  />
                </label>
                <label>
                  ITS Team Scope / Note
                  <input
                    type="text"
                    value={impact.internalContacts.itsTeamNote || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        internalContacts: { ...impact.internalContacts, itsTeamNote: e.target.value }
                      })
                    }
                  />
                </label>
                <label>
                  System Administration
                  <input
                    type="text"
                    value={impact.internalContacts.systemAdministration || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        internalContacts: { ...impact.internalContacts, systemAdministration: e.target.value }
                      })
                    }
                  />
                </label>
                <label>
                  Business Owner
                  <input
                    type="text"
                    value={impact.internalContacts.businessOwner || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        internalContacts: { ...impact.internalContacts, businessOwner: e.target.value }
                      })
                    }
                  />
                </label>
                <label>
                  Password Support
                  <input
                    type="text"
                    value={impact.internalContacts.passwordSupport || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        internalContacts: { ...impact.internalContacts, passwordSupport: e.target.value }
                      })
                    }
                  />
                </label>
                <label className="full-width">
                  Everbridge Focal Contacts
                  <input
                    type="text"
                    value={impact.internalContacts.everbridgeContacts || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        internalContacts: { ...impact.internalContacts, everbridgeContacts: e.target.value }
                      })
                    }
                  />
                </label>
                <label className="full-width">
                  Communication &amp; Escalation Guidelines (one step per line)
                  <textarea
                    rows={4}
                    value={impact.vendorContacts.communicationGuidelinesText || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        vendorContacts: {
                          ...impact.vendorContacts,
                          communicationGuidelinesText: e.target.value
                        }
                      })
                    }
                  />
                </label>
              </div>

              <div className="admin-editor-list-header">
                <div className="admin-editor-section-title">Response SLAs ({impact.vendorContacts.responseSlas.length})</div>
                <button
                  type="button"
                  className="admin-add-row-btn"
                  onClick={() =>
                    setImpact({
                      ...impact,
                      vendorContacts: {
                        ...impact.vendorContacts,
                        responseSlas: [
                          ...impact.vendorContacts.responseSlas,
                          { label: "SLA Metric", value: "" }
                        ]
                      }
                    })
                  }
                >
                  + Add SLA Row
                </button>
              </div>
              {impact.vendorContacts.responseSlas.map((sla, idx) => (
                <div key={idx} className="admin-editor-item-card">
                  <div className="admin-editor-item-top">
                    <strong>SLA #{idx + 1}: {sla.label}</strong>
                    <button
                      type="button"
                      className="admin-remove-row-btn"
                      onClick={() =>
                        setImpact({
                          ...impact,
                          vendorContacts: {
                            ...impact.vendorContacts,
                            responseSlas: impact.vendorContacts.responseSlas.filter((_, i) => i !== idx)
                          }
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-grid">
                    <label>
                      SLA Label
                      <input
                        type="text"
                        value={sla.label || ""}
                        onChange={(e) => {
                          const next = [...impact.vendorContacts.responseSlas];
                          next[idx] = { ...sla, label: e.target.value };
                          setImpact({
                            ...impact,
                            vendorContacts: { ...impact.vendorContacts, responseSlas: next }
                          });
                        }}
                      />
                    </label>
                    <label>
                      SLA Target / Details
                      <input
                        type="text"
                        value={sla.value || ""}
                        onChange={(e) => {
                          const next = [...impact.vendorContacts.responseSlas];
                          next[idx] = { ...sla, value: e.target.value };
                          setImpact({
                            ...impact,
                            vendorContacts: { ...impact.vendorContacts, responseSlas: next }
                          });
                        }}
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "documents" && (
            <div className="admin-editor-list-section">
              <div className="admin-editor-list-header">
                <div className="admin-editor-section-title">Related Documents &amp; Runbooks ({impact.relatedDocuments.length})</div>
                <button
                  type="button"
                  className="admin-add-row-btn"
                  onClick={() =>
                    setImpact({
                      ...impact,
                      relatedDocuments: [
                        ...impact.relatedDocuments,
                        {
                          title: "",
                          type: "Operational Runbook",
                          owner: draft.aagTeam || "ITS Flight Operations",
                          updated: draft.lastUpdated || "2026",
                          url: ""
                        }
                      ]
                    })
                  }
                >
                  + Add Document
                </button>
              </div>
              {impact.relatedDocuments.map((doc, idx) => (
                <div key={idx} className="admin-editor-item-card">
                  <div className="admin-editor-item-top">
                    <strong>Document #{idx + 1}: {doc.title || "Untitled Document"}</strong>
                    <button
                      type="button"
                      className="admin-remove-row-btn"
                      onClick={() =>
                        setImpact({
                          ...impact,
                          relatedDocuments: impact.relatedDocuments.filter((_, i) => i !== idx)
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-grid">
                    <label>
                      Document Title
                      <input
                        type="text"
                        value={doc.title || ""}
                        onChange={(e) => {
                          const next = [...impact.relatedDocuments];
                          next[idx] = { ...doc, title: e.target.value };
                          setImpact({ ...impact, relatedDocuments: next });
                        }}
                      />
                    </label>
                    <label>
                      Type / Category
                      <input
                        type="text"
                        value={doc.type || ""}
                        onChange={(e) => {
                          const next = [...impact.relatedDocuments];
                          next[idx] = { ...doc, type: e.target.value };
                          setImpact({ ...impact, relatedDocuments: next });
                        }}
                      />
                    </label>
                    <label>
                      Owner Team
                      <input
                        type="text"
                        value={doc.owner || ""}
                        onChange={(e) => {
                          const next = [...impact.relatedDocuments];
                          next[idx] = { ...doc, owner: e.target.value };
                          setImpact({ ...impact, relatedDocuments: next });
                        }}
                      />
                    </label>
                    <label>
                      Last Updated / Reference
                      <input
                        type="text"
                        value={doc.updated || ""}
                        onChange={(e) => {
                          const next = [...impact.relatedDocuments];
                          next[idx] = { ...doc, updated: e.target.value };
                          setImpact({ ...impact, relatedDocuments: next });
                        }}
                      />
                    </label>
                    <label className="full-width">
                      Document URL (optional)
                      <input
                        type="text"
                        value={doc.url || ""}
                        onChange={(e) => {
                          const next = [...impact.relatedDocuments];
                          next[idx] = { ...doc, url: e.target.value };
                          setImpact({ ...impact, relatedDocuments: next });
                        }}
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <footer>
          <button type="button" className="secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Save All Application Changes</button>
        </footer>
      </form>
    </div>
  );
}

export default function VendorEditor({ vendor, allVendors = [], onClose, onSave }) {
  const baseImpact = getVendorImpactDetails(
    {
      ...vendor,
      company: vendor.vendorCompanyName || vendor.company || vendor.vendor,
      vendor: vendor.vendorCompanyName || vendor.vendor || vendor.company,
      phone: vendor.contactNumbers || vendor.phone,
      email: vendor.emailAddress || vendor.email,
      vendorPoc: vendor.vendorPOC || vendor.vendorPoc,
      aagItsPoc: vendor.aagItsPOC || vendor.aagItsPoc,
      escalation: vendor.prodOpsEscalationProcess || vendor.escalation
    },
    allVendors
  );

  const [activeTab, setActiveTab] = useState("overview");
  const [draft, setDraft] = useState(() => ({
    ...vendor,
    vendorCompanyName: vendor.vendorCompanyName || vendor.company || vendor.vendor || "",
    systemName: vendor.systemName || vendor.displayName || "",
    category: vendor.category || baseImpact?.category || "",
    status: vendor.status || baseImpact?.status || "Active",
    supportAvailability: vendor.supportAvailability || "24x7",
    sla: vendor.sla || vendor.responseSla || "",
    website: vendor.website || vendor.portalUrl || baseImpact?.website || "",
    lastUpdated: vendor.lastUpdated || vendor.infoUpdatedDate || baseImpact?.lastUpdated || "2026",
    vendorPOC: vendor.vendorPOC || vendor.vendorPoc || baseImpact?.vendorContacts?.accountManager || "",
    contactNumbers: vendor.contactNumbers || vendor.phone || baseImpact?.vendorContacts?.supportPhone || "",
    emailAddress: vendor.emailAddress || vendor.email || baseImpact?.vendorContacts?.supportEmail || "",
    aagItsPOC: vendor.aagItsPOC || vendor.aagItsPoc || baseImpact?.internalContacts?.applicationOwner || "",
    aagItsTeam: vendor.aagItsTeam || baseImpact?.itsTeam || "",
    prodOpsEscalationProcess: vendor.prodOpsEscalationProcess || vendor.escalation || baseImpact?.vendorContacts?.escalation || "",
    portalUrl: vendor.portalUrl || "",
    portalStatus: vendor.portalStatus || "Not Configured",
    lastVerifiedDate: vendor.lastVerifiedDate || "",
    portalNotes: vendor.portalNotes || "",
    infoUpdatedDate: vendor.infoUpdatedDate || "",
    infoUpdatedBy: vendor.infoUpdatedBy || "",
    infoApprovedDate: vendor.infoApprovedDate || "",
    infoApprovedBy: vendor.infoApprovedBy || ""
  }));

  const [impact, setImpact] = useState(() =>
    buildInitialImpactState(baseImpact, vendor.impactOverrides)
  );

  const tabs = [
    ["overview", "Card & Overview"],
    ["systems", `Impacted Systems (${impact.impactedSystems.length})`],
    ["dependencies", "Dependencies"],
    ["contacts", "Contacts & Escalation"],
    ["portal", "Portal & Case Status"],
    ["documents", `Documents & Audit (${impact.relatedDocuments.length})`]
  ];

  function handleSubmit(event) {
    event.preventDefault();
    const syncedImpact = {
      ...impact,
      company: draft.vendorCompanyName || impact.company,
      website: draft.website || draft.portalUrl || impact.website,
      category: draft.category || impact.category,
      itsTeam: draft.aagItsTeam || impact.itsTeam,
      status: draft.status || impact.status,
      lastUpdated: draft.lastUpdated || draft.infoUpdatedDate || impact.lastUpdated,
      vendorContacts: {
        ...impact.vendorContacts,
        supportPhone: draft.contactNumbers || impact.vendorContacts.supportPhone,
        supportEmail: draft.emailAddress || impact.vendorContacts.supportEmail,
        accountManager: draft.vendorPOC || impact.vendorContacts.accountManager,
        escalation: draft.prodOpsEscalationProcess || impact.vendorContacts.escalation
      },
      internalContacts: {
        ...impact.internalContacts,
        itsTeam: draft.aagItsTeam || impact.internalContacts.itsTeam,
        applicationOwner: draft.aagItsPOC || impact.internalContacts.applicationOwner
      }
    };
    const impactOverrides = serializeImpactOverrides(syncedImpact);
    onSave({
      ...draft,
      pageTitle: syncedImpact.pageTitle,
      pageSubtitle: syncedImpact.pageSubtitle,
      adminEdited: true,
      impactOverrides
    });
  }

  return (
    <div className="modal" onClick={(e) => e.target.classList.contains("modal") && onClose()}>
      <form className="editor vendor-editor admin-full-editor" onSubmit={handleSubmit}>
        <header>
          <div>
            <small>EDIT VENDOR PARTNER · FULL RUNBOOK &amp; CARD</small>
            <h2>{draft.vendorCompanyName || draft.systemName || "Edit Vendor Information"}</h2>
            <p className="vendor-modal-description">{draft.category || "Operations Partner"}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close editor">
            ×
          </button>
        </header>

        <nav className="editor-tabs">
          {tabs.map(([tabKey, tabLabel]) => (
            <button
              key={tabKey}
              className={activeTab === tabKey ? "active" : ""}
              type="button"
              onClick={() => setActiveTab(tabKey)}
            >
              {tabLabel}
            </button>
          ))}
        </nav>

        <div className="admin-editor-body">
          {activeTab === "overview" && (
            <>
              <div className="admin-editor-section-title">Vendor Card &amp; Hero Header Information</div>
              <div className="form-grid">
                <label>
                  Vendor Company Name
                  <input
                    type="text"
                    value={draft.vendorCompanyName || ""}
                    onChange={(e) => setDraft({ ...draft, vendorCompanyName: e.target.value })}
                  />
                </label>
                <label>
                  Supported System / Application Name
                  <input
                    type="text"
                    value={draft.systemName || ""}
                    onChange={(e) => setDraft({ ...draft, systemName: e.target.value })}
                  />
                </label>
                <label>
                  Operational Category
                  <input
                    type="text"
                    value={draft.category || ""}
                    onChange={(e) => setDraft({ ...draft, category: e.target.value })}
                  />
                </label>
                <label>
                  Responsible AAG ITS Team
                  <input
                    type="text"
                    value={draft.aagItsTeam || ""}
                    onChange={(e) => setDraft({ ...draft, aagItsTeam: e.target.value })}
                  />
                </label>
                <label>
                  Operational Status Badge
                  <select
                    value={draft.status || "Active"}
                    onChange={(e) => setDraft({ ...draft, status: e.target.value })}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </label>
                <label>
                  Support Availability Badge
                  <select
                    value={draft.supportAvailability || "24x7"}
                    onChange={(e) => setDraft({ ...draft, supportAvailability: e.target.value })}
                  >
                    <option value="24x7">24×7 Support Available</option>
                    <option value="Business Hours">Business Hours (8×5)</option>
                  </select>
                </label>
                <label>
                  Response SLA Badge (optional, e.g. 15 min)
                  <input
                    type="text"
                    value={draft.sla || ""}
                    onChange={(e) => setDraft({ ...draft, sla: e.target.value })}
                  />
                </label>
                <label>
                  Website URL
                  <input
                    type="text"
                    value={draft.website || ""}
                    onChange={(e) => setDraft({ ...draft, website: e.target.value })}
                  />
                </label>
                <label>
                  Detail Page Title
                  <input
                    type="text"
                    value={impact.pageTitle || ""}
                    onChange={(e) => setImpact({ ...impact, pageTitle: e.target.value })}
                  />
                </label>
                <label>
                  Last Updated Label
                  <input
                    type="text"
                    value={draft.lastUpdated || ""}
                    onChange={(e) => setDraft({ ...draft, lastUpdated: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Detail Page Subtitle
                  <textarea
                    rows={2}
                    value={impact.pageSubtitle || ""}
                    onChange={(e) => setImpact({ ...impact, pageSubtitle: e.target.value })}
                  />
                </label>
              </div>

              <div className="admin-editor-section-title">Impact Overview Callout &amp; Runbook Lists</div>
              <div className="form-grid">
                <label className="full-width">
                  Impact Banner Title
                  <input
                    type="text"
                    value={impact.calloutTitle || ""}
                    onChange={(e) => setImpact({ ...impact, calloutTitle: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Impact Banner Message
                  <textarea
                    rows={2}
                    value={impact.calloutMessage || ""}
                    onChange={(e) => setImpact({ ...impact, calloutMessage: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Typical Business Impact (one bullet per line)
                  <textarea
                    rows={4}
                    value={impact.typicalBusinessImpactText || ""}
                    onChange={(e) => setImpact({ ...impact, typicalBusinessImpactText: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Known Workarounds &amp; Recovery Actions (one bullet per line)
                  <textarea
                    rows={4}
                    value={impact.knownWorkaroundsText || ""}
                    onChange={(e) => setImpact({ ...impact, knownWorkaroundsText: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Validation Checklist Steps (one step per line)
                  <textarea
                    rows={5}
                    value={impact.validationChecklistText || ""}
                    onChange={(e) => setImpact({ ...impact, validationChecklistText: e.target.value })}
                  />
                </label>
              </div>
            </>
          )}

          {activeTab === "systems" && (
            <div className="admin-editor-list-section">
              <div className="admin-editor-list-header">
                <div className="admin-editor-section-title">Impacted Applications &amp; Systems</div>
                <button
                  type="button"
                  className="admin-add-row-btn"
                  onClick={() =>
                    setImpact({
                      ...impact,
                      impactedSystems: [
                        ...impact.impactedSystems,
                        {
                          id: `sys-${Date.now()}`,
                          name: "",
                          subName: "",
                          businessFunction: draft.category || "Operations",
                          description: "",
                          impact: "",
                          dependencies: "",
                          owner: draft.aagItsTeam || "ITS Operations",
                          status: "Potential"
                        }
                      ]
                    })
                  }
                >
                  + Add Impacted System
                </button>
              </div>
              {impact.impactedSystems.map((sys, idx) => (
                <div key={sys.id || idx} className="admin-editor-item-card">
                  <div className="admin-editor-item-top">
                    <strong>System #{idx + 1}: {sys.name || "Untitled System"}</strong>
                    <button
                      type="button"
                      className="admin-remove-row-btn"
                      onClick={() =>
                        setImpact({
                          ...impact,
                          impactedSystems: impact.impactedSystems.filter((_, i) => i !== idx)
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-grid">
                    <label>
                      System / Application Name
                      <input
                        type="text"
                        value={sys.name || ""}
                        onChange={(e) => {
                          const next = [...impact.impactedSystems];
                          next[idx] = { ...sys, name: e.target.value };
                          setImpact({ ...impact, impactedSystems: next });
                        }}
                      />
                    </label>
                    <label>
                      Subtitle / Tag
                      <input
                        type="text"
                        value={sys.subName || ""}
                        onChange={(e) => {
                          const next = [...impact.impactedSystems];
                          next[idx] = { ...sys, subName: e.target.value };
                          setImpact({ ...impact, impactedSystems: next });
                        }}
                      />
                    </label>
                    <label>
                      Business Function
                      <input
                        type="text"
                        value={sys.businessFunction || ""}
                        onChange={(e) => {
                          const next = [...impact.impactedSystems];
                          next[idx] = { ...sys, businessFunction: e.target.value };
                          setImpact({ ...impact, impactedSystems: next });
                        }}
                      />
                    </label>
                    <label>
                      Owner Team
                      <input
                        type="text"
                        value={sys.owner || ""}
                        onChange={(e) => {
                          const next = [...impact.impactedSystems];
                          next[idx] = { ...sys, owner: e.target.value };
                          setImpact({ ...impact, impactedSystems: next });
                        }}
                      />
                    </label>
                    <label className="full-width">
                      Description
                      <input
                        type="text"
                        value={sys.description || ""}
                        onChange={(e) => {
                          const next = [...impact.impactedSystems];
                          next[idx] = { ...sys, description: e.target.value };
                          setImpact({ ...impact, impactedSystems: next });
                        }}
                      />
                    </label>
                    <label className="full-width">
                      Operational Impact if Unavailable
                      <input
                        type="text"
                        value={sys.impact || ""}
                        onChange={(e) => {
                          const next = [...impact.impactedSystems];
                          next[idx] = { ...sys, impact: e.target.value };
                          setImpact({ ...impact, impactedSystems: next });
                        }}
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "dependencies" && (
            <div className="admin-editor-list-section">
              <div className="admin-editor-section-title">Dependencies Overview &amp; Takeaways</div>
              <div className="form-grid">
                <label className="full-width">
                  Dependencies Diagram Subtitle
                  <input
                    type="text"
                    value={impact.depOverviewSubtitle || ""}
                    onChange={(e) => setImpact({ ...impact, depOverviewSubtitle: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Key Takeaways (one bullet per line)
                  <textarea
                    rows={3}
                    value={impact.depKeyTakeawaysText || ""}
                    onChange={(e) => setImpact({ ...impact, depKeyTakeawaysText: e.target.value })}
                  />
                </label>
                <label>
                  Upstream Dependency Summary Bullets (one per line)
                  <textarea
                    rows={4}
                    value={impact.upstreamDependenciesText || ""}
                    onChange={(e) => setImpact({ ...impact, upstreamDependenciesText: e.target.value })}
                  />
                </label>
                <label>
                  Downstream Consumer Summary Bullets (one per line)
                  <textarea
                    rows={4}
                    value={impact.downstreamConsumersText || ""}
                    onChange={(e) => setImpact({ ...impact, downstreamConsumersText: e.target.value })}
                  />
                </label>
              </div>

              <div className="admin-editor-list-header">
                <div className="admin-editor-section-title">Upstream Dependencies Table ({impact.upstreamTable.length})</div>
                <button
                  type="button"
                  className="admin-add-row-btn"
                  onClick={() =>
                    setImpact({
                      ...impact,
                      upstreamTable: [
                        ...impact.upstreamTable,
                        { id: `up-${Date.now()}`, name: "", description: "", type: "External / Partner", impact: "" }
                      ]
                    })
                  }
                >
                  + Add Upstream Row
                </button>
              </div>
              {impact.upstreamTable.map((row, idx) => (
                <div key={row.id || idx} className="admin-editor-item-card">
                  <div className="admin-editor-item-top">
                    <strong>Upstream #{idx + 1}: {row.name || "New Dependency"}</strong>
                    <button
                      type="button"
                      className="admin-remove-row-btn"
                      onClick={() =>
                        setImpact({
                          ...impact,
                          upstreamTable: impact.upstreamTable.filter((_, i) => i !== idx)
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-grid">
                    <label>
                      System / Vendor
                      <input
                        type="text"
                        value={row.name || ""}
                        onChange={(e) => {
                          const next = [...impact.upstreamTable];
                          next[idx] = { ...row, name: e.target.value };
                          setImpact({ ...impact, upstreamTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Type
                      <input
                        type="text"
                        value={row.type || ""}
                        onChange={(e) => {
                          const next = [...impact.upstreamTable];
                          next[idx] = { ...row, type: e.target.value };
                          setImpact({ ...impact, upstreamTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Description
                      <input
                        type="text"
                        value={row.description || ""}
                        onChange={(e) => {
                          const next = [...impact.upstreamTable];
                          next[idx] = { ...row, description: e.target.value };
                          setImpact({ ...impact, upstreamTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Impact if Unavailable
                      <input
                        type="text"
                        value={row.impact || ""}
                        onChange={(e) => {
                          const next = [...impact.upstreamTable];
                          next[idx] = { ...row, impact: e.target.value };
                          setImpact({ ...impact, upstreamTable: next });
                        }}
                      />
                    </label>
                  </div>
                </div>
              ))}

              <div className="admin-editor-list-header">
                <div className="admin-editor-section-title">Downstream Consumers Table ({impact.downstreamTable.length})</div>
                <button
                  type="button"
                  className="admin-add-row-btn"
                  onClick={() =>
                    setImpact({
                      ...impact,
                      downstreamTable: [
                        ...impact.downstreamTable,
                        { id: `down-${Date.now()}`, name: "", description: "", type: "Internal Operations", impact: "" }
                      ]
                    })
                  }
                >
                  + Add Downstream Row
                </button>
              </div>
              {impact.downstreamTable.map((row, idx) => (
                <div key={row.id || idx} className="admin-editor-item-card">
                  <div className="admin-editor-item-top">
                    <strong>Downstream #{idx + 1}: {row.name || "New Consumer"}</strong>
                    <button
                      type="button"
                      className="admin-remove-row-btn"
                      onClick={() =>
                        setImpact({
                          ...impact,
                          downstreamTable: impact.downstreamTable.filter((_, i) => i !== idx)
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-grid">
                    <label>
                      System / Team
                      <input
                        type="text"
                        value={row.name || ""}
                        onChange={(e) => {
                          const next = [...impact.downstreamTable];
                          next[idx] = { ...row, name: e.target.value };
                          setImpact({ ...impact, downstreamTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Type
                      <input
                        type="text"
                        value={row.type || ""}
                        onChange={(e) => {
                          const next = [...impact.downstreamTable];
                          next[idx] = { ...row, type: e.target.value };
                          setImpact({ ...impact, downstreamTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Description
                      <input
                        type="text"
                        value={row.description || ""}
                        onChange={(e) => {
                          const next = [...impact.downstreamTable];
                          next[idx] = { ...row, description: e.target.value };
                          setImpact({ ...impact, downstreamTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Impact if Unavailable
                      <input
                        type="text"
                        value={row.impact || ""}
                        onChange={(e) => {
                          const next = [...impact.downstreamTable];
                          next[idx] = { ...row, impact: e.target.value };
                          setImpact({ ...impact, downstreamTable: next });
                        }}
                      />
                    </label>
                  </div>
                </div>
              ))}

              <div className="admin-editor-list-header">
                <div className="admin-editor-section-title">Infrastructure &amp; Integration Components ({impact.infrastructureTable.length})</div>
                <button
                  type="button"
                  className="admin-add-row-btn"
                  onClick={() =>
                    setImpact({
                      ...impact,
                      infrastructureTable: [
                        ...impact.infrastructureTable,
                        { id: `inf-${Date.now()}`, component: "", description: "", owner: draft.aagItsTeam || "", impact: "" }
                      ]
                    })
                  }
                >
                  + Add Infrastructure Row
                </button>
              </div>
              {impact.infrastructureTable.map((row, idx) => (
                <div key={row.id || idx} className="admin-editor-item-card">
                  <div className="admin-editor-item-top">
                    <strong>Component #{idx + 1}: {row.component || "New Component"}</strong>
                    <button
                      type="button"
                      className="admin-remove-row-btn"
                      onClick={() =>
                        setImpact({
                          ...impact,
                          infrastructureTable: impact.infrastructureTable.filter((_, i) => i !== idx)
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-grid">
                    <label>
                      Component
                      <input
                        type="text"
                        value={row.component || ""}
                        onChange={(e) => {
                          const next = [...impact.infrastructureTable];
                          next[idx] = { ...row, component: e.target.value };
                          setImpact({ ...impact, infrastructureTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Owner
                      <input
                        type="text"
                        value={row.owner || ""}
                        onChange={(e) => {
                          const next = [...impact.infrastructureTable];
                          next[idx] = { ...row, owner: e.target.value };
                          setImpact({ ...impact, infrastructureTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Description
                      <input
                        type="text"
                        value={row.description || ""}
                        onChange={(e) => {
                          const next = [...impact.infrastructureTable];
                          next[idx] = { ...row, description: e.target.value };
                          setImpact({ ...impact, infrastructureTable: next });
                        }}
                      />
                    </label>
                    <label>
                      Impact
                      <input
                        type="text"
                        value={row.impact || ""}
                        onChange={(e) => {
                          const next = [...impact.infrastructureTable];
                          next[idx] = { ...row, impact: e.target.value };
                          setImpact({ ...impact, infrastructureTable: next });
                        }}
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "contacts" && (
            <div className="admin-editor-list-section">
              <div className="admin-editor-section-title">Primary Card &amp; Vendor Support Contacts</div>
              <div className="form-grid">
                <label>
                  Vendor POC / Account Manager
                  <input
                    type="text"
                    value={draft.vendorPOC || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDraft({ ...draft, vendorPOC: val });
                      setImpact({
                        ...impact,
                        vendorContacts: { ...impact.vendorContacts, accountManager: val }
                      });
                    }}
                  />
                </label>
                <label>
                  AAG ITS POC (Card &amp; Detail)
                  <input
                    type="text"
                    value={draft.aagItsPOC || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDraft({ ...draft, aagItsPOC: val });
                      setImpact({
                        ...impact,
                        internalContacts: { ...impact.internalContacts, applicationOwner: val }
                      });
                    }}
                  />
                </label>
                <label>
                  Support Phone Numbers
                  <textarea
                    rows={2}
                    value={draft.contactNumbers || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDraft({ ...draft, contactNumbers: val });
                      setImpact({
                        ...impact,
                        vendorContacts: { ...impact.vendorContacts, supportPhone: val }
                      });
                    }}
                  />
                </label>
                <label>
                  Support Email Addresses
                  <textarea
                    rows={2}
                    value={draft.emailAddress || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDraft({ ...draft, emailAddress: val });
                      setImpact({
                        ...impact,
                        vendorContacts: { ...impact.vendorContacts, supportEmail: val }
                      });
                    }}
                  />
                </label>
                <label>
                  Secondary Email (Detail View)
                  <input
                    type="text"
                    value={impact.vendorContacts.secondaryEmail || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        vendorContacts: { ...impact.vendorContacts, secondaryEmail: e.target.value }
                      })
                    }
                  />
                </label>
                <label>
                  Technical Support / Portal Info
                  <input
                    type="text"
                    value={impact.vendorContacts.technicalSupport || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        vendorContacts: { ...impact.vendorContacts, technicalSupport: e.target.value }
                      })
                    }
                  />
                </label>
                <label className="full-width">
                  Support Service Hours
                  <input
                    type="text"
                    value={impact.vendorContacts.supportHours || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        vendorContacts: { ...impact.vendorContacts, supportHours: e.target.value }
                      })
                    }
                  />
                </label>
                <label className="full-width">
                  ProdOps Escalation Process
                  <textarea
                    rows={3}
                    value={draft.prodOpsEscalationProcess || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      setDraft({ ...draft, prodOpsEscalationProcess: val });
                      setImpact({
                        ...impact,
                        vendorContacts: { ...impact.vendorContacts, escalation: val }
                      });
                    }}
                  />
                </label>
              </div>

              <div className="admin-editor-section-title">Alaska Internal Contacts (Detail View)</div>
              <div className="form-grid">
                <label>
                  ITS Team Scope / Note
                  <input
                    type="text"
                    value={impact.internalContacts.itsTeamNote || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        internalContacts: { ...impact.internalContacts, itsTeamNote: e.target.value }
                      })
                    }
                  />
                </label>
                <label>
                  System Administration
                  <input
                    type="text"
                    value={impact.internalContacts.systemAdministration || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        internalContacts: { ...impact.internalContacts, systemAdministration: e.target.value }
                      })
                    }
                  />
                </label>
                <label>
                  Business Owner
                  <input
                    type="text"
                    value={impact.internalContacts.businessOwner || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        internalContacts: { ...impact.internalContacts, businessOwner: e.target.value }
                      })
                    }
                  />
                </label>
                <label>
                  Password Support
                  <input
                    type="text"
                    value={impact.internalContacts.passwordSupport || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        internalContacts: { ...impact.internalContacts, passwordSupport: e.target.value }
                      })
                    }
                  />
                </label>
                <label className="full-width">
                  Communication &amp; Escalation Guidelines (one step per line)
                  <textarea
                    rows={4}
                    value={impact.vendorContacts.communicationGuidelinesText || ""}
                    onChange={(e) =>
                      setImpact({
                        ...impact,
                        vendorContacts: {
                          ...impact.vendorContacts,
                          communicationGuidelinesText: e.target.value
                        }
                      })
                    }
                  />
                </label>
              </div>

              <div className="admin-editor-list-header">
                <div className="admin-editor-section-title">Response SLAs ({impact.vendorContacts.responseSlas.length})</div>
                <button
                  type="button"
                  className="admin-add-row-btn"
                  onClick={() =>
                    setImpact({
                      ...impact,
                      vendorContacts: {
                        ...impact.vendorContacts,
                        responseSlas: [
                          ...impact.vendorContacts.responseSlas,
                          { label: "SLA Metric", value: "" }
                        ]
                      }
                    })
                  }
                >
                  + Add SLA Row
                </button>
              </div>
              {impact.vendorContacts.responseSlas.map((sla, idx) => (
                <div key={idx} className="admin-editor-item-card">
                  <div className="admin-editor-item-top">
                    <strong>SLA #{idx + 1}: {sla.label}</strong>
                    <button
                      type="button"
                      className="admin-remove-row-btn"
                      onClick={() =>
                        setImpact({
                          ...impact,
                          vendorContacts: {
                            ...impact.vendorContacts,
                            responseSlas: impact.vendorContacts.responseSlas.filter((_, i) => i !== idx)
                          }
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-grid">
                    <label>
                      SLA Label
                      <input
                        type="text"
                        value={sla.label || ""}
                        onChange={(e) => {
                          const next = [...impact.vendorContacts.responseSlas];
                          next[idx] = { ...sla, label: e.target.value };
                          setImpact({
                            ...impact,
                            vendorContacts: { ...impact.vendorContacts, responseSlas: next }
                          });
                        }}
                      />
                    </label>
                    <label>
                      SLA Target / Details
                      <input
                        type="text"
                        value={sla.value || ""}
                        onChange={(e) => {
                          const next = [...impact.vendorContacts.responseSlas];
                          next[idx] = { ...sla, value: e.target.value };
                          setImpact({
                            ...impact,
                            vendorContacts: { ...impact.vendorContacts, responseSlas: next }
                          });
                        }}
                      />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "portal" && (
            <div className="admin-editor-list-section">
              <div className="admin-editor-section-title">Vendor Case Portal Configuration</div>
              <div className="form-grid">
                <label className="full-width">
                  Support / Case Portal URL
                  <input
                    type="text"
                    placeholder="https://support.example.com"
                    value={draft.portalUrl || ""}
                    onChange={(e) => setDraft({ ...draft, portalUrl: e.target.value })}
                  />
                </label>
                <label>
                  Portal Verification Status
                  <select
                    value={draft.portalStatus || "Not Configured"}
                    onChange={(e) => setDraft({ ...draft, portalStatus: e.target.value })}
                  >
                    <option value="Verified">Verified</option>
                    <option value="Configured">Configured</option>
                    <option value="Not Configured">Not Configured</option>
                  </select>
                </label>
                <label>
                  Last Verified Date
                  <input
                    type="date"
                    value={draft.lastVerifiedDate || ""}
                    onChange={(e) => setDraft({ ...draft, lastVerifiedDate: e.target.value })}
                  />
                </label>
                <label className="full-width">
                  Portal Access Notes &amp; Instructions
                  <textarea
                    rows={4}
                    value={draft.portalNotes || ""}
                    onChange={(e) => setDraft({ ...draft, portalNotes: e.target.value })}
                  />
                </label>
              </div>
            </div>
          )}

          {activeTab === "documents" && (
            <div className="admin-editor-list-section">
              <div className="admin-editor-list-header">
                <div className="admin-editor-section-title">Related Documents &amp; Runbooks ({impact.relatedDocuments.length})</div>
                <button
                  type="button"
                  className="admin-add-row-btn"
                  onClick={() =>
                    setImpact({
                      ...impact,
                      relatedDocuments: [
                        ...impact.relatedDocuments,
                        {
                          title: "",
                          type: "Operational Runbook",
                          owner: draft.aagItsTeam || "ITS Operations",
                          updated: draft.lastUpdated || "2026",
                          url: ""
                        }
                      ]
                    })
                  }
                >
                  + Add Document
                </button>
              </div>
              {impact.relatedDocuments.map((doc, idx) => (
                <div key={idx} className="admin-editor-item-card">
                  <div className="admin-editor-item-top">
                    <strong>Document #{idx + 1}: {doc.title || "Untitled Document"}</strong>
                    <button
                      type="button"
                      className="admin-remove-row-btn"
                      onClick={() =>
                        setImpact({
                          ...impact,
                          relatedDocuments: impact.relatedDocuments.filter((_, i) => i !== idx)
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="form-grid">
                    <label>
                      Document Title
                      <input
                        type="text"
                        value={doc.title || ""}
                        onChange={(e) => {
                          const next = [...impact.relatedDocuments];
                          next[idx] = { ...doc, title: e.target.value };
                          setImpact({ ...impact, relatedDocuments: next });
                        }}
                      />
                    </label>
                    <label>
                      Type / Category
                      <input
                        type="text"
                        value={doc.type || ""}
                        onChange={(e) => {
                          const next = [...impact.relatedDocuments];
                          next[idx] = { ...doc, type: e.target.value };
                          setImpact({ ...impact, relatedDocuments: next });
                        }}
                      />
                    </label>
                    <label>
                      Owner Team
                      <input
                        type="text"
                        value={doc.owner || ""}
                        onChange={(e) => {
                          const next = [...impact.relatedDocuments];
                          next[idx] = { ...doc, owner: e.target.value };
                          setImpact({ ...impact, relatedDocuments: next });
                        }}
                      />
                    </label>
                    <label>
                      Last Updated / Reference
                      <input
                        type="text"
                        value={doc.updated || ""}
                        onChange={(e) => {
                          const next = [...impact.relatedDocuments];
                          next[idx] = { ...doc, updated: e.target.value };
                          setImpact({ ...impact, relatedDocuments: next });
                        }}
                      />
                    </label>
                    <label className="full-width">
                      Document URL (optional)
                      <input
                        type="text"
                        value={doc.url || ""}
                        onChange={(e) => {
                          const next = [...impact.relatedDocuments];
                          next[idx] = { ...doc, url: e.target.value };
                          setImpact({ ...impact, relatedDocuments: next });
                        }}
                      />
                    </label>
                  </div>
                </div>
              ))}

              <div className="admin-editor-section-title">Source Workbook Audit Metadata</div>
              <div className="form-grid">
                <label>
                  Info Updated Date
                  <input
                    type="text"
                    value={draft.infoUpdatedDate || ""}
                    onChange={(e) => setDraft({ ...draft, infoUpdatedDate: e.target.value })}
                  />
                </label>
                <label>
                  Info Updated By
                  <input
                    type="text"
                    value={draft.infoUpdatedBy || ""}
                    onChange={(e) => setDraft({ ...draft, infoUpdatedBy: e.target.value })}
                  />
                </label>
                <label>
                  Info Approved Date
                  <input
                    type="text"
                    value={draft.infoApprovedDate || ""}
                    onChange={(e) => setDraft({ ...draft, infoApprovedDate: e.target.value })}
                  />
                </label>
                <label>
                  Info Approved By
                  <input
                    type="text"
                    value={draft.infoApprovedBy || ""}
                    onChange={(e) => setDraft({ ...draft, infoApprovedBy: e.target.value })}
                  />
                </label>
              </div>
            </div>
          )}
        </div>

        <footer>
          <button type="button" className="secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Save All Vendor Changes</button>
        </footer>
      </form>
    </div>
  );
}
