import React from "react";
import { createRoot } from "react-dom/client";
import "../css/design-tokens.css";
import "../css/dashboard.css";
import "../css/airline-theme.css";
import "../css/home-welcome.css";
import "../css/vendors.css";
import "../css/categories.css";
import "../css/ground-stops.css";
import "../css/favorites.css";
import "../css/vendor-case-status.css";
import "../css/reports.css";
import "../css/motion.css";
import "./styles/admin-scoped.css";
import "../css/unified-home-theme.css";
import "../css/mobile-responsive.css";
import App from "./App.jsx";

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
