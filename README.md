# Production Operations Connect

**Production Operations Connect** is a Flight Operations Control Hub designed to empower 24/7 flight reliability. It connects critical application ecosystems, vendor support networks, and rapid escalation pathways into one intelligent, unified workspace.

## 🚀 Key Features

* **Real-Time Operational Dashboard:** Monitor active operational systems, vendor networks, and escalation SLAs in real-time.
* **Vendor & Partner Management:** Direct 24/7 vendor hotlines and tier-3 engineering escalation paths during critical operational events.
* **Unified System Ecosystem:** Centralized application owners, target SLAs, and domain dependencies across all operational categories (Flight, Ground, & Logistics).
* **Proactive SLA Monitoring:** Live vendor performance tracking and software health visibility to prevent operational ground delays.
* **Admin Control Center:** A secure, React-based administrative interface for managing application statuses, vendor information, and operational workflows.

## 📁 Project Structure

```text
production-operations-connect/
├── public/                       # Static assets served as-is (bypasses Vite bundler)
│   ├── images/
│   └── favicon.ico
│
├── scripts/                      # PowerShell backend for the zero-server architecture
│   ├── Start-Dashboard.ps1       # Hosts localhost:47832 to listen for React saves
│   └── read-vendor-workbook.ps1  # Excel workbook import utilities
│
├── js/                           # Persistent Data Layer (Written to disk by PowerShell)
│   ├── data/
│   │   └── master-data.js        # The single source of truth (seeded into React on load)
│   └── ground-stop-app-keys.js   # Definition list of the 9 mission-critical apps
│
├── css/                          # Legacy Stylesheets (Imported sequentially in main.jsx)
│   ├── design-tokens.css
│   ├── airline-theme.css
│   ├── dashboard.css
│   ├── vendors.css
│   ├── ground-stops.css
│   └── categories.css
│
├── tests/                        # QA & Verification
│   └── vendor-case-status.test.mjs # The 12-point testing suite
│
├── src/                          # Modern React 19 Source Code
│   ├── components/               # Reusable, stateless UI components
│   │   ├── Layout.jsx            # Shell wrapper (manages dynamic body CSS classes)
│   │   ├── Sidebar.jsx           # Global navigation and active states
│   │   ├── VendorCard.jsx        # Vendor display cards (used across multiple pages)
│   │   └── FavoriteToggle.jsx    # Micro-component to prevent heavy re-renders
│   │
│   ├── context/                  # React Context Providers
│   │   └── MasterDataContext.jsx # Handles state, local sync, and the HTTP POST to PowerShell
│   │
│   ├── data/                     # Static React seed files
│   │   └── vendorCasePortals.js  # The recovered portal URLs module
│   │
│   ├── hooks/                    # Custom React Hooks
│   │   └── useFavorites.js       # External store hook for optimized favorites rendering
│   │
│   ├── services/                 # Non-React business logic and LocalStorage wrappers
│   │   └── favoritesService.js   # Manages `poc_favorites_v2` and cross-tab storage events
│   │
│   ├── pages/                    # Route-level Page Components
│   │   ├── Home.jsx              # (/) Main operations dashboard
│   │   ├── Vendors.jsx           # (/vendors) Directory of all 37 vendors
│   │   ├── Categories.jsx        # (/categories) System domains and owners
│   │   ├── GroundStops.jsx       # (/ground-stops) Escalation matrix for critical apps
│   │   ├── VendorCaseStatus.jsx  # (/vendor-case-status) Support portal tracking
│   │   ├── Favorites.jsx         # (/favorites) Bookmarked items
│   │   │
│   │   └── admin/                # (/admin/*) Admin Control Center
│   │       ├── AdminLayout.jsx   # Shell for admin tools
│   │       ├── Login.jsx         # Authentication gate
│   │       └── VendorEditor.jsx  # CRUD editor for vendors and applications
│   │
│   ├── styles/                   # React-specific CSS modules and overrides
│   │   ├── admin.css
│   │   └── react-spa-overrides.css
│   │
│   ├── App.jsx                   # Global HashRouter setup and Route table
│   └── main.jsx                  # React DOM mounting and sequential CSS imports
│
├── index.html                    # Vite entry point for the SPA
├── package.json                  # Dependencies (React 19, React Router 7, Vite 6)
└── vite.config.js                # Vite build config (Sets base: './' for file:// support)
```

## 🛠️ Getting Started

### Running the Main Portal
The main portal is built with static web technologies (HTML, CSS, Vanilla JS) for maximum reliability and speed. 
To view the application, simply open `home.html` in any modern web browser, or serve the directory using a local web server of your choice:

```bash
# Example using Python's built-in HTTP server
python -m http.server 8000
```
Then navigate to `http://localhost:8000/home.html`.

### Admin Control Center
The Admin Control Center is a React application embedded within the portal. The compiled version is already available in the `admin-react-dist` folder and is linked via `admin-react-dist/index.html`.

If you need to make changes to the admin interface:
1. Navigate to the `admin-react` directory.
2. Install dependencies (requires Node.js): `npm install`
3. Run the build script to compile the assets: `npm run build`

## 🔒 Security
Administrative access is restricted to authorized Production Operations members via the Admin Control Center login portal.

---
*PEOPLE. PLANES. A BRIGHTER TOMORROW.*
