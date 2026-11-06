import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import "../../js/ground-stop-app-keys.js";
import "../../js/data/master-data.js";
import { mergeVendorCasePortals, VENDOR_CASE_PORTALS } from "../data/vendorCasePortals.js";

const MASTER_DATA_STORAGE_KEY = "alaska_master_data_v1";
const VENDOR_STORAGE_KEY = "productionOperationsVendors";
const APPLICATION_STORAGE_KEY = "productionOperationsApplications";
const HISTORY_STORAGE_KEY = "productionOperationsAdminHistory";
const SESSION_STORAGE_KEY = "productionOperationsAdminSession";
const APP_FAVORITES_STORAGE_KEY = "productionOperationsGroundStopFavorites";
const APP_FAVORITES_SHORT_KEY = "productionOpsGroundStopFavorites";
const VENDOR_FAVORITES_STORAGE_KEY = "productionOperationsVendorFavorites";
const VENDOR_FAVORITES_SHORT_KEY = "productionOpsVendorFavorites";
const POC_FAVORITES_V2_KEY = "poc_favorites_v2";
const POWERSHELL_SYNC_URL = "http://localhost:47832/save-master-data";

export const DEFAULT_GROUND_STOP_KEYS = Object.freeze([
  "acars",
  "wam",
  "jetplan",
  "Smart4Aviation (S4A)",
  "jcte",
  "airtrack",
  "pilot-briefing",
  "aircraft-maintenance",
  "aims"
]);

const VENDOR_FIELD_MAP = {
  systemName: "systemName",
  category: "category",
  vendorCompanyName: "vendor",
  vendorPOC: "vendorPoc",
  contactNumbers: "phone",
  emailAddress: "email",
  aagItsPOC: "aagItsPoc",
  aagItsTeam: "aagItsTeam",
  prodOpsEscalationProcess: "escalation",
  infoUpdatedDate: "updatedDate",
  infoUpdatedBy: "updatedBy",
  infoApprovedDate: "approvedDate",
  infoApprovedBy: "approvedBy",
  company: "vendor",
  poc: "vendorPoc",
  phone: "phone",
  email: "email",
  aagItsPoc: "aagItsPoc",
  escalation: "escalation",
  updatedDate: "updatedDate",
  updatedBy: "updatedBy",
  approvedDate: "approvedDate",
  approvedBy: "approvedBy",
  portalUrl: "portalUrl",
  portalStatus: "portalStatus",
  portalNotes: "portalNotes",
  lastVerifiedDate: "lastVerifiedDate",
  lastVerifiedBy: "lastVerifiedBy",
  associatedApplications: "associatedApplications",
  status: "status",
  supportAvailability: "supportAvailability",
  sla: "sla",
  website: "website",
  lastUpdated: "lastUpdated",
  pageTitle: "pageTitle",
  pageSubtitle: "pageSubtitle",
  adminEdited: "adminEdited",
  impactOverrides: "impactOverrides"
};

function cloneDeep(value) {
  return JSON.parse(JSON.stringify(value));
}

function readJsonStorage(key, fallback) {
  if (typeof localStorage === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch (error) {
    console.warn(`Unable to read ${key} from localStorage:`, error);
    return fallback;
  }
}

function normalizeIdSet(list) {
  if (!Array.isArray(list)) return [];
  return Array.from(
    new Set(
      list
        .map(item => String(item || "").trim())
        .filter(Boolean)
    )
  );
}

function readFavoriteAppKeysFromStorage() {
  const fromFull = readJsonStorage(APP_FAVORITES_STORAGE_KEY, []);
  const fromShort = readJsonStorage(APP_FAVORITES_SHORT_KEY, []);
  const fromV2 = readJsonStorage(POC_FAVORITES_V2_KEY, null);
  const v2Apps =
    fromV2 && typeof fromV2 === "object" && Array.isArray(fromV2.appKeys)
      ? fromV2.appKeys
      : Array.isArray(fromV2)
      ? fromV2
          .filter(t => String(t || "").toLowerCase().startsWith("app:"))
          .map(t => String(t).slice(4))
      : [];
  return normalizeIdSet([...(Array.isArray(fromFull) ? fromFull : []), ...(Array.isArray(fromShort) ? fromShort : []), ...v2Apps]);
}

function readFavoriteVendorIdsFromStorage() {
  const fromFull = readJsonStorage(VENDOR_FAVORITES_STORAGE_KEY, []);
  const fromShort = readJsonStorage(VENDOR_FAVORITES_SHORT_KEY, []);
  const fromV2 = readJsonStorage(POC_FAVORITES_V2_KEY, null);
  const v2Vendors =
    fromV2 && typeof fromV2 === "object" && Array.isArray(fromV2.vendorIds)
      ? fromV2.vendorIds
      : Array.isArray(fromV2)
      ? fromV2
          .filter(t => String(t || "").toLowerCase().startsWith("vendor:"))
          .map(t => String(t).slice(7))
      : [];
  return normalizeIdSet([
    ...(Array.isArray(fromFull) ? fromFull : []),
    ...(Array.isArray(fromShort) ? fromShort : []),
    ...v2Vendors
  ]);
}

function writeUnifiedFavoritesToStorage(appKeys, vendorIds) {
  if (typeof localStorage === "undefined") return;
  const cleanApps = normalizeIdSet(appKeys);
  const cleanVendors = normalizeIdSet(vendorIds);
  const combinedTyped = [
    ...cleanApps.map(k => `app:${k}`),
    ...cleanVendors.map(v => `vendor:${v}`)
  ];
  try {
    localStorage.setItem(APP_FAVORITES_STORAGE_KEY, JSON.stringify(cleanApps));
    localStorage.setItem(APP_FAVORITES_SHORT_KEY, JSON.stringify(cleanApps));
    localStorage.setItem(VENDOR_FAVORITES_STORAGE_KEY, JSON.stringify(cleanVendors));
    localStorage.setItem(VENDOR_FAVORITES_SHORT_KEY, JSON.stringify(cleanVendors));
    localStorage.setItem("productionOperationsFavorites", JSON.stringify(combinedTyped));
    localStorage.setItem(
      POC_FAVORITES_V2_KEY,
      JSON.stringify({ appKeys: cleanApps, vendorIds: cleanVendors, items: combinedTyped })
    );
  } catch (err) {
    console.warn("Unable to write unified favorites to localStorage:", err);
  }
}

function mergeApplicationOverridesIntoDictionary(targetApps = {}, appOverrides = null) {
  const result = cloneDeep(targetApps || {});
  if (!appOverrides || typeof appOverrides !== "object") return result;

  if (Array.isArray(appOverrides)) {
    appOverrides.forEach(override => {
      if (!override || typeof override !== "object") return;
      if (
        (override.id === "acars" || override.key === "acars") &&
        override.appDataVersion !== 2 &&
        !override.adminEdited
      ) {
        return;
      }
      const matchingKey = Object.keys(result).find(key => {
        const item = result[key];
        return (
          key === override.id ||
          key === override.key ||
          (item && (item.id === override.id || item.name === override.name || item.shortName === override.name))
        );
      });
      if (matchingKey && result[matchingKey]) {
        const target = result[matchingKey];
        Object.assign(target, override);
        target.function = override.function || override.description || target.function;
        target.aagTeam = override.team || override.aagTeam || target.aagTeam;
        target.response = override.sla || override.response || target.response;
      }
    });
  } else {
    Object.keys(appOverrides).forEach(key => {
      // Guard against accidental numeric index keys from serialized arrays
      if (/^\d+$/.test(key)) return;
      const override = appOverrides[key];
      if (
        (key === "acars" || (override && (override.id === "acars" || override.key === "acars"))) &&
        (!override || (override.appDataVersion !== 2 && !override.adminEdited))
      ) {
        return;
      }
      if (result[key]) {
        Object.assign(result[key], override);
      } else {
        result[key] = cloneDeep(override);
      }
    });
  }

  return result;
}

function mergeVendorOverridesIntoCatalog(baseVendors = [], vendorOverrides = null) {
  const result = cloneDeep(Array.isArray(baseVendors) ? baseVendors : []);
  if (!Array.isArray(vendorOverrides) || vendorOverrides.length === 0) {
    return mergeVendorCasePortals(result);
  }

  vendorOverrides.forEach(override => {
    if (!override || typeof override !== "object") return;
    if (override.vendorDataVersion !== 3 && (override.sourceRow === 3 || override.sourceRow === 9)) {
      return;
    }

    const vendor = result.find(
      item =>
        (item.id && override.id && item.id === override.id) ||
        (item.sourceRow && override.sourceRow && Number(item.sourceRow) === Number(override.sourceRow))
    );

    if (!vendor) return;

    const canonicalId = vendor.id;
    const editedFields = Array.isArray(override.editedFields) ? override.editedFields : null;

    if (editedFields && editedFields.length > 0) {
      editedFields.forEach(field => {
        const targetField = VENDOR_FIELD_MAP[field];
        if (targetField) {
          if (targetField === "portalUrl" && !override[field] && vendor.portalUrl) {
            return;
          }
          vendor[targetField] = Array.isArray(override[field])
            ? override[field]
            : override[field] ?? "";
        }
      });
    } else if (!String(override.id || "").startsWith("its-application-vendors-")) {
      // Direct canonical vendor object
      Object.keys(override).forEach(field => {
        if (field === "id") return;
        const targetField = VENDOR_FIELD_MAP[field] || field;
        if (override[field] !== undefined) {
          vendor[targetField] = override[field];
        }
      });
    }

    vendor.id = canonicalId;
    vendor.company = vendor.vendor || vendor.company || "";
    vendor.poc = vendor.vendorPoc || vendor.poc || "";
    if (override.adminEdited) {
      vendor.adminEdited = true;
    }
    if (override.impactOverrides && typeof override.impactOverrides === "object") {
      vendor.impactOverrides = cloneDeep(override.impactOverrides);
    }
    if (editedFields && editedFields.includes("systemName")) {
      vendor.displayName = vendor.systemName;
    }
  });

  return mergeVendorCasePortals(result);
}

function getInitialMasterData() {
  if (typeof window !== "undefined" && typeof window.syncMasterDataOverrides === "function") {
    try {
      window.syncMasterDataOverrides();
    } catch (err) {
      console.warn("Unable to sync master data overrides on init:", err);
    }
  }

  const base =
    (typeof window !== "undefined" && (window.baseMasterData || window.masterData)) || {
      applications: {},
      vendors: [],
      categories: []
    };

  const data = cloneDeep(base);

  // Merge saved alaska_master_data_v1 snapshot if present
  const savedSnapshot = readJsonStorage(MASTER_DATA_STORAGE_KEY, null);
  if (savedSnapshot && typeof savedSnapshot === "object") {
    if (savedSnapshot.applications && typeof savedSnapshot.applications === "object") {
      data.applications = mergeApplicationOverridesIntoDictionary(
        data.applications,
        savedSnapshot.applications
      );
    }
    if (Array.isArray(savedSnapshot.vendors) && savedSnapshot.vendors.length > 0) {
      data.vendors = mergeVendorOverridesIntoCatalog(data.vendors, savedSnapshot.vendors);
    }
  }

  // Ensure localStorage application overrides are merged without corrupting dictionary keys
  const appOverrides = readJsonStorage(APPLICATION_STORAGE_KEY, null);
  if (appOverrides) {
    data.applications = mergeApplicationOverridesIntoDictionary(data.applications, appOverrides);
  }

  // Ensure localStorage vendor overrides are merged while preserving canonical vendor IDs & fields
  const vendorOverrides = readJsonStorage(VENDOR_STORAGE_KEY, null);
  data.vendors = mergeVendorOverridesIntoCatalog(data.vendors, vendorOverrides);

  if (typeof window !== "undefined") {
    window.masterData = data;
  }

  return data;
}

/**
 * Serializes the master-data.js file content and posts it to the local PowerShell
 * sync server at http://localhost:47832/save-master-data.
 */
export async function syncMasterDataToPowerShellServer(customMasterData) {
  const targetData =
    customMasterData ||
    (typeof window !== "undefined" && window.masterData) || {
      applications: {},
      vendors: [],
      categories: []
    };

  if (typeof window !== "undefined" && typeof window.persistMasterDataToFile === "function") {
    return window.persistMasterDataToFile(targetData);
  }

  const serializedData = JSON.stringify(targetData, null, 4);
  const fileContent = `const defaultData = ${serializedData};\n\nwindow.baseMasterData = JSON.parse(JSON.stringify(defaultData));\nwindow.masterData = defaultData;\n`;

  try {
    const response = await fetch(POWERSHELL_SYNC_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: fileContent
    });
    return response.ok;
  } catch {
    return false;
  }
}

const MasterDataContext = createContext(null);

export function MasterDataProvider({ children }) {
  const [masterData, setMasterData] = useState(() => getInitialMasterData());
  const [history, setHistory] = useState(() => readJsonStorage(HISTORY_STORAGE_KEY, []));
  const [favoriteAppKeys, setFavoriteAppKeys] = useState(() => readFavoriteAppKeysFromStorage());
  const [favoriteVendorIds, setFavoriteVendorIds] = useState(() =>
    readFavoriteVendorIdsFromStorage()
  );
  const [syncVersion, setSyncVersion] = useState(0);

  const groundStopKeys = useMemo(() => {
    if (
      typeof window !== "undefined" &&
      Array.isArray(window.groundStopApplicationKeys) &&
      window.groundStopApplicationKeys.length
    ) {
      return window.groundStopApplicationKeys;
    }
    return DEFAULT_GROUND_STOP_KEYS;
  }, []);

  const refreshFromGlobals = useCallback(() => {
    const nextData = getInitialMasterData();
    setMasterData(nextData);
    setHistory(readJsonStorage(HISTORY_STORAGE_KEY, []));
    setFavoriteAppKeys(readFavoriteAppKeysFromStorage());
    setFavoriteVendorIds(readFavoriteVendorIdsFromStorage());
    setSyncVersion(v => v + 1);
  }, []);

  useEffect(() => {
    const handleStorage = event => {
      if (
        !event ||
        !event.key ||
        event.key === MASTER_DATA_STORAGE_KEY ||
        event.key === VENDOR_STORAGE_KEY ||
        event.key === APPLICATION_STORAGE_KEY ||
        event.key === HISTORY_STORAGE_KEY ||
        event.key === APP_FAVORITES_STORAGE_KEY ||
        event.key === APP_FAVORITES_SHORT_KEY ||
        event.key === VENDOR_FAVORITES_STORAGE_KEY ||
        event.key === VENDOR_FAVORITES_SHORT_KEY ||
        event.key === POC_FAVORITES_V2_KEY ||
        event.key === "productionOperationsFavorites" ||
        event.key === "productionOperationsVendorPortals"
      ) {
        refreshFromGlobals();
      }
    };

    const handleCustomFavorites = () => {
      setFavoriteAppKeys(readFavoriteAppKeysFromStorage());
      setFavoriteVendorIds(readFavoriteVendorIdsFromStorage());
    };

    const handleMasterDataUpdated = () => {
      refreshFromGlobals();
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("favorites:updated", handleCustomFavorites);
    window.addEventListener("poc:favorites-updated", handleCustomFavorites);
    window.addEventListener("masterdata:updated", handleMasterDataUpdated);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("favorites:updated", handleCustomFavorites);
      window.removeEventListener("poc:favorites-updated", handleCustomFavorites);
      window.removeEventListener("masterdata:updated", handleMasterDataUpdated);
    };
  }, [refreshFromGlobals]);

  /**
   * Saves updated applications/vendors to React state, window.masterData, localStorage
   * (alaska_master_data_v1 + legacy keys), and issues an HTTP POST to
   * http://localhost:47832/save-master-data (the PowerShell sync server).
   */
  const saveMasterData = useCallback(
    async ({ applications, vendors, categories, historyEntries, historyItem } = {}) => {
      setMasterData(prev => {
        const nextApplications = applications
          ? mergeApplicationOverridesIntoDictionary(prev.applications || {}, applications)
          : cloneDeep(prev.applications || {});

        const nextVendors = vendors
          ? mergeVendorOverridesIntoCatalog(prev.vendors || [], vendors)
          : cloneDeep(prev.vendors || []);

        const nextCategories = categories
          ? cloneDeep(categories)
          : cloneDeep(prev.categories || []);

        const nextData = {
          ...prev,
          applications: nextApplications,
          vendors: nextVendors,
          categories: nextCategories
        };

        try {
          if (applications) {
            localStorage.setItem(APPLICATION_STORAGE_KEY, JSON.stringify(applications));
          }
          if (vendors) {
            localStorage.setItem(VENDOR_STORAGE_KEY, JSON.stringify(vendors));
          }
          localStorage.setItem(MASTER_DATA_STORAGE_KEY, JSON.stringify(nextData));

          if (Array.isArray(historyEntries)) {
            localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(historyEntries));
            setHistory(historyEntries);
          } else if (historyItem && typeof historyItem === "object") {
            const existingHistory = readJsonStorage(HISTORY_STORAGE_KEY, []);
            const updatedHistory = [
              historyItem,
              ...(Array.isArray(existingHistory) ? existingHistory : [])
            ].slice(0, 50);
            localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updatedHistory));
            setHistory(updatedHistory);
          }
        } catch (err) {
          console.warn("Unable to write master data to localStorage:", err);
        }

        if (typeof window !== "undefined") {
          window.masterData = nextData;
          if (typeof window.syncMasterDataOverrides === "function") {
            try {
              window.syncMasterDataOverrides();
            } catch {
              // Keep nextData intact
            }
          }
        }

        syncMasterDataToPowerShellServer(nextData);
        return nextData;
      });

      setSyncVersion(v => v + 1);
    },
    []
  );

  const toggleAppFavorite = useCallback(appKey => {
    const normalizedKey = String(appKey || "").trim();
    if (!normalizedKey) return false;
    let isNowFavorite = false;

    setFavoriteAppKeys(prev => {
      const set = new Set(prev);
      if (set.has(normalizedKey)) {
        set.delete(normalizedKey);
        isNowFavorite = false;
      } else {
        set.add(normalizedKey);
        isNowFavorite = true;
      }
      const next = Array.from(set);
      const currentVendors = readFavoriteVendorIdsFromStorage();
      writeUnifiedFavoritesToStorage(next, currentVendors);

      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("favorites:updated", {
            detail: { type: "application", key: normalizedKey, appKeys: next, vendorIds: currentVendors }
          })
        );
        window.dispatchEvent(
          new CustomEvent("poc:favorites-updated", {
            detail: { type: "application", key: normalizedKey, appKeys: next, vendorIds: currentVendors }
          })
        );
      }
      return next;
    });

    return isNowFavorite;
  }, []);

  const toggleVendorFavorite = useCallback(vendorId => {
    const normalizedId = String(vendorId || "").trim();
    if (!normalizedId) return false;
    let isNowFavorite = false;

    setFavoriteVendorIds(prev => {
      const set = new Set(prev);
      if (set.has(normalizedId)) {
        set.delete(normalizedId);
        isNowFavorite = false;
      } else {
        set.add(normalizedId);
        isNowFavorite = true;
      }
      const next = Array.from(set);
      const currentApps = readFavoriteAppKeysFromStorage();
      writeUnifiedFavoritesToStorage(currentApps, next);

      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("favorites:updated", {
            detail: { type: "vendor", id: normalizedId, appKeys: currentApps, vendorIds: next }
          })
        );
        window.dispatchEvent(
          new CustomEvent("poc:favorites-updated", {
            detail: { type: "vendor", id: normalizedId, appKeys: currentApps, vendorIds: next }
          })
        );
      }
      return next;
    });

    return isNowFavorite;
  }, []);

  const isAppFavorite = useCallback(
    appKey => favoriteAppKeys.includes(String(appKey || "").trim()),
    [favoriteAppKeys]
  );

  const isVendorFavorite = useCallback(
    vendorId => favoriteVendorIds.includes(String(vendorId || "").trim()),
    [favoriteVendorIds]
  );

  const value = useMemo(
    () => ({
      masterData,
      applications: masterData.applications || {},
      vendors: masterData.vendors || [],
      categories: masterData.categories || [],
      vendorCasePortals: VENDOR_CASE_PORTALS,
      groundStopKeys,
      history,
      syncVersion,
      favoriteAppKeys,
      favoriteVendorIds,
      isAppFavorite,
      isVendorFavorite,
      toggleAppFavorite,
      toggleVendorFavorite,
      saveMasterData,
      refreshFromGlobals,
      syncMasterDataToPowerShellServer,
      storageKeys: {
        MASTER_DATA_STORAGE_KEY,
        VENDOR_STORAGE_KEY,
        APPLICATION_STORAGE_KEY,
        HISTORY_STORAGE_KEY,
        SESSION_STORAGE_KEY,
        APP_FAVORITES_STORAGE_KEY,
        VENDOR_FAVORITES_STORAGE_KEY,
        POC_FAVORITES_V2_KEY
      }
    }),
    [
      masterData,
      groundStopKeys,
      history,
      syncVersion,
      favoriteAppKeys,
      favoriteVendorIds,
      isAppFavorite,
      isVendorFavorite,
      toggleAppFavorite,
      toggleVendorFavorite,
      saveMasterData,
      refreshFromGlobals
    ]
  );

  return <MasterDataContext.Provider value={value}>{children}</MasterDataContext.Provider>;
}

export function useMasterData() {
  const context = useContext(MasterDataContext);
  if (!context) {
    throw new Error("useMasterData must be used within a MasterDataProvider");
  }
  return context;
}

export default MasterDataContext;
