# Production Operations Connect

Production Operations Connect is an Alaska Airlines vendor and application directory for operations teams. It brings together ground stop application details, vendor contacts, support portals, escalation information, favorites, and reports.

## Run locally

Requires Node.js and npm. The deployment workflow uses Node.js 20.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. The app uses hash routes, so a page URL looks like `http://localhost:5173/#/vendors`.

```bash
npm test       # Run the vendor case status and data tests
npm run build  # Generate the static site in dist/
npm run preview
```

The Vite build writes the compiled site to `dist/`. Its custom plugins also rewrite the root `index.html` and `404.html` for branch-root or file-based use. Starting Vite restores the development entry HTML. Check the Git diff after running either command if you plan to commit generated files.

## Pages

| Route | Purpose |
| --- | --- |
| `#/` | Operations dashboard and quick links |
| `#/ground-stops` | Critical application support and impact details |
| `#/vendors` | Vendor directory, contacts, and application associations |
| `#/vendor-case-status` | Vendor support portals and portal configuration |
| `#/categories` | Applications grouped by operational domain |
| `#/favorites` | Saved applications and vendors |
| `#/reports` | Application and vendor summaries with exports |
| `#/admin` | Browser-side editor for vendor and application records |

## Project layout

- [src/App.jsx](src/App.jsx) defines the routes.
- [src/pages/](src/pages/) contains page components.
- [src/components/](src/components/) contains shared UI and admin components.
- [src/context/MasterDataContext.jsx](src/context/MasterDataContext.jsx) loads and updates application and vendor data.
- [src/services/](src/services/) contains favorites, reports, and vendor portal logic.
- [js/data/master-data.js](js/data/master-data.js) provides the bundled master catalog.
- [public/](public/) and [css/](css/) contain images and styles.
- [vite.config.js](vite.config.js) configures the static build and local file compatibility.
- [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) builds, tests, and deploys `dist/` to GitHub Pages.

## Data and admin access

The app loads the bundled catalog, then applies browser `localStorage` overrides. Favorites and admin edits are stored in the same browser. If the optional Windows [PowerShell sync server](scripts/master-data-sync-server.ps1) is running at `localhost:47832`, edits can also be written to `js/data/master-data.js`; otherwise they remain local to that browser.

Admin sign-in is implemented in browser code and browser storage. It is a UI access gate, not server-enforced authentication. Do not rely on it to protect sensitive data or a writable service exposed to untrusted users. The dashboard values come from the catalog and browser overrides; the app does not connect to a live operations monitoring feed.
