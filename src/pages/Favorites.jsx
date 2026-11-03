import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useMasterData } from "../context/MasterDataContext.jsx";
import {
  getFavoritesSnapshot,
  removeFavoriteItem,
  toggleFavoriteItem
} from "../services/favoritesService.js";
import { FavoritesSummaryCards } from "../components/favorites/FavoritesSummaryCards.jsx";
import { FavoriteResourceCard } from "../components/favorites/FavoriteResourceCard.jsx";
import { FavoritesEmptyState } from "../components/favorites/FavoritesEmptyState.jsx";
import {
  FavoriteDetailsModal,
  QuickManageFavoritesModal
} from "../components/favorites/FavoriteDetailsModal.jsx";

export function Favorites() {
  const { masterData, favoriteAppKeys, favoriteVendorIds } = useMasterData();
  const [snapshot, setSnapshot] = useState(() => getFavoritesSnapshot());
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all"); // "all" | "application" | "vendor"
  const [statusFilter, setStatusFilter] = useState("all"); // "all" | "critical" | "high" | "operational" | "24x7"
  const [sortBy, setSortBy] = useState("name-asc"); // "name-asc" | "name-desc" | "critical-first"
  const [selectedItem, setSelectedItem] = useState(null);
  const [isQuickManageOpen, setIsQuickManageOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const refreshSnapshot = useCallback(() => {
    setSnapshot(getFavoritesSnapshot());
  }, []);

  useEffect(() => {
    refreshSnapshot();
  }, [masterData, favoriteAppKeys, favoriteVendorIds, refreshSnapshot]);

  useEffect(() => {
    const handleStorageOrCustom = () => {
      refreshSnapshot();
    };
    window.addEventListener("storage", handleStorageOrCustom);
    window.addEventListener("focus", handleStorageOrCustom);
    window.addEventListener("poc:favorites-updated", handleStorageOrCustom);
    return () => {
      window.removeEventListener("storage", handleStorageOrCustom);
      window.removeEventListener("focus", handleStorageOrCustom);
      window.removeEventListener("poc:favorites-updated", handleStorageOrCustom);
    };
  }, [refreshSnapshot]);

  useEffect(() => {
    if (!toastMessage) return undefined;
    const timer = window.setTimeout(() => {
      setToastMessage("");
    }, 2800);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const handleRemoveFavorite = useCallback(
    (resourceType, idOrKey, displayName) => {
      removeFavoriteItem(resourceType, idOrKey);
      refreshSnapshot();
      setToastMessage(`Removed "${displayName || idOrKey}" from My Favorites.`);
    },
    [refreshSnapshot]
  );

  const handleToggleCatalogItem = useCallback(
    (resourceType, idOrKey, displayName) => {
      const next = toggleFavoriteItem(resourceType, idOrKey);
      refreshSnapshot();
      const isNowSaved =
        resourceType === "application"
          ? next.appKeys.includes(idOrKey)
          : next.vendorIds.includes(idOrKey);
      setToastMessage(
        isNowSaved
          ? `Added "${displayName || idOrKey}" to My Favorites.`
          : `Removed "${displayName || idOrKey}" from My Favorites.`
      );
    },
    [refreshSnapshot]
  );

  const handleClearFilters = useCallback(() => {
    setSearchQuery("");
    setTypeFilter("all");
    setStatusFilter("all");
    setSortBy("name-asc");
  }, []);

  // Summary card click handlers
  const handleSelectSystemsCard = useCallback(() => {
    setTypeFilter("application");
    setStatusFilter("all");
  }, []);

  const handleSelectVendorsCard = useCallback(() => {
    setTypeFilter("vendor");
    setStatusFilter("all");
  }, []);

  const handleSelectCriticalCard = useCallback(() => {
    setTypeFilter("application");
    setStatusFilter("critical");
    setSortBy("critical-first");
  }, []);

  const handleSelectQuickAccessCard = useCallback(() => {
    setSearchQuery("");
    setTypeFilter("all");
    setStatusFilter("all");
  }, []);

  const activeCardKey = useMemo(() => {
    if (typeFilter === "application" && statusFilter === "critical") return "critical";
    if (typeFilter === "application" && statusFilter === "all") return "systems";
    if (typeFilter === "vendor" && statusFilter === "all") return "vendors";
    if (typeFilter === "all" && statusFilter === "all" && !searchQuery.trim()) return "all";
    return "";
  }, [typeFilter, statusFilter, searchQuery]);

  const hasActiveFilters =
    Boolean(searchQuery.trim()) ||
    typeFilter !== "all" ||
    statusFilter !== "all" ||
    sortBy !== "name-asc";

  const filteredAndSortedFavorites = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = (snapshot.allFavorites || []).filter(item => {
      if (typeFilter !== "all" && item.resourceType !== typeFilter) {
        return false;
      }

      if (statusFilter === "critical") {
        if (item.severity !== "Critical") return false;
      } else if (statusFilter === "high") {
        if (item.severity !== "High") return false;
      } else if (statusFilter === "operational") {
        if (!item.isOperational) return false;
      } else if (statusFilter === "24x7") {
        if (!item.is24x7) return false;
      }

      if (query) {
        const haystacks = [
          item.name,
          item.category,
          item.shortDescription,
          item.fullDescription,
          item.vendor,
          item.supportedSystemsText,
          item.primaryContactName,
          item.aagPOC,
          item.aagTeam,
          item.status,
          item.severity
        ]
          .filter(Boolean)
          .map(v => String(v).toLowerCase());

        const matchesQuery = haystacks.some(text => text.includes(query));
        if (!matchesQuery) return false;
      }

      return true;
    });

    const severityRank = item => {
      if (item.resourceType === "application" && item.severity === "Critical") return 3;
      if (item.resourceType === "application" && item.severity === "High") return 2;
      if (item.is24x7) return 1;
      return 0;
    };

    return [...filtered].sort((a, b) => {
      if (sortBy === "critical-first") {
        const rankDiff = severityRank(b) - severityRank(a);
        if (rankDiff !== 0) return rankDiff;
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      return a.name.localeCompare(b.name);
    });
  }, [snapshot.allFavorites, searchQuery, typeFilter, statusFilter, sortBy]);

  const savedAppKeys = useMemo(
    () => (snapshot.favoriteApplications || []).map(a => a.key),
    [snapshot.favoriteApplications]
  );
  const savedVendorIds = useMemo(
    () => (snapshot.favoriteVendors || []).map(v => v.id),
    [snapshot.favoriteVendors]
  );

  const totalCount = snapshot.counts?.totalFavoritesCount || 0;

  return (
    <main className="favorites-main ias-main-content" id="favoritesRoot">
      <div className="fav-dashboard-shell">
        {/* 2B. Four Interactive Summary Cards */}
        <FavoritesSummaryCards
          counts={snapshot.counts}
          activeCardKey={activeCardKey}
          onSelectSystems={handleSelectSystemsCard}
          onSelectVendors={handleSelectVendorsCard}
          onSelectCritical={handleSelectCriticalCard}
          onSelectQuickAccess={handleSelectQuickAccessCard}
        />

        {/* 2C. Dedicated Favorites Workspace Panel */}
        <section className="fav-workspace-panel" aria-labelledby="favWorkspaceHeading">
          <div className="fav-workspace-header">
            <div className="fav-workspace-title-group">
              <h2 id="favWorkspaceHeading" className="fav-workspace-heading">
                My Favorites ({totalCount})
              </h2>
              <p className="fav-workspace-subtitle">
                Saved operational applications and vendor support contacts for rapid dispatch and incident response.
              </p>
            </div>

            <div className="fav-workspace-header-right">
              {totalCount > 0 && (
                <span className="fav-showing-badge">
                  Showing <strong>{filteredAndSortedFavorites.length}</strong> of{" "}
                  <strong>{totalCount}</strong> saved {totalCount === 1 ? "resource" : "resources"}
                </span>
              )}
              <button
                type="button"
                className="fav-manage-header-btn"
                onClick={() => setIsQuickManageOpen(true)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>Manage Saved Items ({totalCount})</span>
              </button>
            </div>
          </div>

          {/* Filter & Search Controls */}
          <div className="fav-controls-bar" role="region" aria-label="Filter and sort favorites">
            {/* 1. Search Input */}
            <div className="fav-search-field">
              <svg
                className="fav-search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="search"
                id="favoritesSearchInput"
                className="fav-search-input"
                placeholder="Search by application, vendor, category, or description..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                aria-label="Search favorites by application name, vendor name, category, or system description"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="fav-search-clear"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search query"
                >
                  ✕
                </button>
              )}
            </div>

            {/* 2. Resource Type Segmented Filter */}
            <div className="fav-type-tabs" role="group" aria-label="Resource type filter">
              <button
                type="button"
                className={`fav-type-tab ${typeFilter === "all" ? "active" : ""}`}
                onClick={() => setTypeFilter("all")}
              >
                All Favorites ({totalCount})
              </button>
              <button
                type="button"
                className={`fav-type-tab ${typeFilter === "application" ? "active" : ""}`}
                onClick={() => setTypeFilter("application")}
              >
                Applications ({snapshot.counts?.favoriteSystemsCount || 0})
              </button>
              <button
                type="button"
                className={`fav-type-tab ${typeFilter === "vendor" ? "active" : ""}`}
                onClick={() => setTypeFilter("vendor")}
              >
                Vendors ({snapshot.counts?.favoriteVendorsCount || 0})
              </button>
            </div>

            {/* 3. Status / Severity Filter */}
            <div className="fav-select-group">
              <label htmlFor="favStatusFilter" className="sr-only">
                Status or Severity Filter
              </label>
              <select
                id="favStatusFilter"
                className="fav-select-control"
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses &amp; Severities</option>
                <option value="critical">Critical Severity</option>
                <option value="high">High Severity</option>
                <option value="operational">Operational / Active</option>
                <option value="24x7">24x7 Support Coverage</option>
              </select>
            </div>

            {/* 4. Sort Options */}
            <div className="fav-select-group">
              <label htmlFor="favSortSelect" className="sr-only">
                Sort Favorites
              </label>
              <select
                id="favSortSelect"
                className="fav-select-control"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
              >
                <option value="name-asc">Sort: Name A–Z</option>
                <option value="name-desc">Sort: Name Z–A</option>
                <option value="critical-first">Sort: Critical first</option>
              </select>
            </div>

            {/* 5. Clear Filters Button */}
            <button
              type="button"
              className="fav-clear-filters-btn"
              onClick={handleClearFilters}
              disabled={!hasActiveFilters}
            >
              Clear Filters
            </button>
          </div>

          {/* 2D / 2F. Resource Cards Grid or Empty State */}
          {totalCount === 0 ? (
            <FavoritesEmptyState
              variant="zero-favorites"
              onClearFilters={handleClearFilters}
              onOpenQuickManage={() => setIsQuickManageOpen(true)}
            />
          ) : filteredAndSortedFavorites.length === 0 ? (
            <FavoritesEmptyState
              variant="no-matches"
              onClearFilters={handleClearFilters}
              onOpenQuickManage={() => setIsQuickManageOpen(true)}
            />
          ) : (
            <div className="fav-cards-grid">
              {filteredAndSortedFavorites.map(item => (
                <FavoriteResourceCard
                  key={item.favoriteId}
                  item={item}
                  onRemoveFavorite={handleRemoveFavorite}
                  onOpenDetails={setSelectedItem}
                />
              ))}
            </div>
          )}
        </section>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="fav-toast" role="status" aria-live="polite">
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Resource Details Modal */}
        <FavoriteDetailsModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onRemoveFavorite={handleRemoveFavorite}
        />

        {/* Quick Manage Favorites Modal */}
        <QuickManageFavoritesModal
          isOpen={isQuickManageOpen}
          onClose={() => setIsQuickManageOpen(false)}
          catalogApplications={snapshot.catalogApplications}
          catalogVendors={snapshot.catalogVendors}
          savedAppKeys={savedAppKeys}
          savedVendorIds={savedVendorIds}
          onToggleItem={handleToggleCatalogItem}
        />
      </div>
    </main>
  );
}
export default Favorites;

