import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useMasterData } from "../context/MasterDataContext";

function resolveBodyClass(pathname) {
  if (pathname.startsWith("/vendors")) {
    return "scroll-shell vendors-page";
  }
  if (pathname.startsWith("/categories")) {
    return "scroll-shell categories-page";
  }
  if (pathname.startsWith("/ground-stops")) {
    return "scroll-shell ground-stops-page";
  }
  if (pathname.startsWith("/favorites")) {
    return "scroll-shell ias-shell favorites-page";
  }
  if (pathname.startsWith("/vendor-case-status")) {
    return "ias-portal vendors-page";
  }
  if (pathname.startsWith("/reports")) {
    return "scroll-shell ias-shell reports-page reports-ready";
  }
  return "scroll-shell ias-shell home-page";
}

export default function Layout({ children }) {
  const location = useLocation();
  const pathname = location.pathname || "/";
  const { applications, vendors, groundStopKeys } = useMasterData();

  const groundStopsCount = Array.isArray(applications)
    ? applications.length
    : applications && typeof applications === "object" && Object.keys(applications).length > 0
    ? Object.keys(applications).length
    : Array.isArray(groundStopKeys)
    ? groundStopKeys.length
    : 0;

  const vendorsCount = Array.isArray(vendors) ? vendors.length : 0;

  useEffect(() => {
    document.body.className = resolveBodyClass(pathname);

    const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

    switch (normalizedPath) {
      case "/":
        document.title = "AS | Vendor Dashboard";
        break;
      case "/ground-stops":
        document.title = "AS | Ground Stop Apps";
        break;
      case "/vendors":
        document.title = "AS | Vendor Matrix";
        break;
      case "/vendor-case-status":
        document.title = "AS | Vendor Case Status";
        break;
      case "/categories":
        document.title = "AS | System Map";
        break;
      case "/favorites":
        document.title = "AS | Quick Access";
        break;
      case "/reports":
        document.title = "AS | Ops Metrics";
        break;
      case "/admin":
        document.title = "AS | Control Panel";
        break;
      default:
        document.title = "AS | Vendor Dashboard";
        break;
    }

    window.scrollTo(0, 0);
  }, [pathname, groundStopsCount, vendorsCount]);

  return (
    <>
      <Sidebar />
      {children || <Outlet />}
    </>
  );
}
