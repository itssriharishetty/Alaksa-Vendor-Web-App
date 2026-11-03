import React, { useEffect } from "react";
import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { MasterDataProvider } from "./context/MasterDataContext.jsx";
import Layout from "./components/Layout.jsx";
import AdminLayout from "./components/AdminLayout.jsx";
import Home from "./pages/Home.jsx";
import Vendors from "./pages/Vendors.jsx";
import Categories from "./pages/Categories.jsx";
import GroundStops from "./pages/GroundStops.jsx";
import VendorCaseStatus from "./pages/VendorCaseStatus.jsx";
import Favorites from "./pages/Favorites.jsx";
import Reports from "./pages/Reports.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <MasterDataProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/ground-stops" element={<GroundStops />} />
            <Route path="/vendor-case-status" element={<VendorCaseStatus />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </MasterDataProvider>
  );
}

