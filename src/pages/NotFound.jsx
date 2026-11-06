import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="content-scroll">
      <div
        style={{
          maxWidth: "680px",
          margin: "48px auto",
          background: "#FFFFFF",
          borderRadius: "24px",
          border: "1px solid #E2E8F0",
          boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06), 0 2px 6px rgba(15, 23, 42, 0.03)",
          padding: "44px 40px",
          textAlign: "center"
        }}
      >
        <div
          style={{
            width: "68px",
            height: "68px",
            margin: "0 auto 20px",
            borderRadius: "20px",
            background: "linear-gradient(180deg, #38BDF8 0%, #0284C7 100%)",
            boxShadow: "0 8px 20px rgba(2, 132, 199, 0.24), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF"
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "5px 12px",
            borderRadius: "999px",
            background: "#F0F9FF",
            border: "1px solid #BAE6FD",
            color: "#0284C7",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: "14px"
          }}
        >
          404 · Route Not Found
        </span>

        <h1
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#0F172A",
            letterSpacing: "-0.02em",
            margin: "0 0 10px"
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: "14.5px",
            lineHeight: 1.6,
            color: "#64748B",
            maxWidth: "480px",
            margin: "0 auto 24px"
          }}
        >
          The requested route{" "}
          <code
            style={{
              padding: "2px 8px",
              borderRadius: "6px",
              background: "#F1F5F9",
              color: "#334155",
              fontSize: "13px",
              fontWeight: 600
            }}
          >
            {location.pathname}
          </code>{" "}
          does not match an active dashboard view in Production Operations Connect.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            marginBottom: "28px"
          }}
        >
          <button
            type="button"
            onClick={() => navigate("/")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "11px 20px",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(180deg, #0284C7 0%, #0369A1 100%)",
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(2, 132, 199, 0.24)"
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Back to Home
          </button>

          <button
            type="button"
            onClick={() => navigate("/ground-stops")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "11px 18px",
              borderRadius: "12px",
              border: "1px solid #CBD5E1",
              background: "#FFFFFF",
              color: "#1E293B",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Ground Stop Apps
          </button>

          <button
            type="button"
            onClick={() => navigate("/vendors")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "11px 18px",
              borderRadius: "12px",
              border: "1px solid #CBD5E1",
              background: "#FFFFFF",
              color: "#1E293B",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Vendor Directory
          </button>
        </div>

        <div
          style={{
            borderTop: "1px solid #F1F5F9",
            paddingTop: "18px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            fontSize: "13px",
            color: "#64748B"
          }}
        >
          <span
            role="button"
            tabIndex={0}
            onClick={() => navigate("/categories")}
            onKeyDown={(e) => e.key === "Enter" && navigate("/categories")}
            style={{ cursor: "pointer", fontWeight: 500, color: "#0284C7" }}
          >
            Categories
          </span>
          <span>·</span>
          <span
            role="button"
            tabIndex={0}
            onClick={() => navigate("/vendor-case-status")}
            onKeyDown={(e) => e.key === "Enter" && navigate("/vendor-case-status")}
            style={{ cursor: "pointer", fontWeight: 500, color: "#0284C7" }}
          >
            Vendor Case Status
          </span>
          <span>·</span>
          <span
            role="button"
            tabIndex={0}
            onClick={() => navigate("/reports")}
            onKeyDown={(e) => e.key === "Enter" && navigate("/reports")}
            style={{ cursor: "pointer", fontWeight: 500, color: "#0284C7" }}
          >
            Reports &amp; Analytics
          </span>
        </div>
      </div>
    </div>
  );
}
