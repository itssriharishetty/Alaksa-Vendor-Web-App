
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Custom plugin that ensures the built `dist/` bundle works directly over
 * the `file://` protocol (without CORS blocks on `<script type="module">` or
 * `crossorigin` attributes) and preserves `public/...` and `js/data/master-data.js`
 * relative paths for zero-server local execution.
 */
const DEV_INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>AS | Vendor Dashboard</title>
    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="shortcut icon" type="image/png" href="/favicon.png">
    <link rel="apple-touch-icon" href="/favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
</head>
<body class="scroll-shell ias-shell home-page">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
</body>
</html>
`;

function rootEntryNormalizePlugin() {
  return {
    name: "root-entry-normalize",
    enforce: "pre",
    config() {
      fs.writeFileSync(path.resolve(__dirname, "index.html"), DEV_INDEX_HTML, "utf8");
    }
  };
}

function fileProtocolPlugin() {
  return {
    name: "file-protocol-compatibility",
    apply: "build",
    enforce: "post",
    transformIndexHtml(html) {
      return html
        .replace(/<script\s+type="module"\s+crossorigin\s+src="([^"]+)"><\/script>/g, '<script defer src="$1"></script>')
        .replace(/<script\s+type="module"\s+src="([^"]+)"><\/script>/g, '<script defer src="$1"></script>')
        .replace(/<link\s+rel="stylesheet"\s+crossorigin\s+href="([^"]+)">/g, '<link rel="stylesheet" href="$1">');
    },
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const srcPublicDir = path.resolve(__dirname, "public");
      const destPublicDir = path.resolve(distDir, "public");
      if (fs.existsSync(srcPublicDir)) {
        fs.cpSync(srcPublicDir, destPublicDir, { recursive: true, force: true });
      }

      const srcMasterData = path.resolve(__dirname, "js", "data", "master-data.js");
      const destMasterDataDir = path.resolve(distDir, "js", "data");
      if (fs.existsSync(srcMasterData)) {
        fs.mkdirSync(destMasterDataDir, { recursive: true });
        fs.copyFileSync(srcMasterData, path.resolve(destMasterDataDir, "master-data.js"));
      }

      // GitHub Pages SPA fallback (404.html) & .nojekyll marker in dist/
      const distIndex = path.resolve(distDir, "index.html");
      if (fs.existsSync(distIndex)) {
        fs.copyFileSync(distIndex, path.resolve(distDir, "404.html"));

        // Also update root index.html & 404.html so branch-root GitHub Pages deployments
        // load ./dist/assets/* instead of requesting uncompiled /src/main.jsx (404)
        const distHtml = fs.readFileSync(distIndex, "utf8");
        const rootHtml = distHtml
          .replace(/href="\.\/favicon\.png"/g, 'href="./public/favicon.png"')
          .replace(/src="\.\/assets\//g, 'src="./dist/assets/')
          .replace(/href="\.\/assets\//g, 'href="./dist/assets/');
        fs.writeFileSync(path.resolve(__dirname, "index.html"), rootHtml, "utf8");
        fs.writeFileSync(path.resolve(__dirname, "404.html"), rootHtml, "utf8");
      }
      fs.writeFileSync(path.resolve(distDir, ".nojekyll"), "");
      fs.writeFileSync(path.resolve(__dirname, ".nojekyll"), "");
    }
  };
}

const MIME_TYPES = {
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon"
};

function publicPathRewritePlugin() {
  const servePublicPrefix = (req, res, next) => {
    const normalizedUrl = req.url ? req.url.replace(/^\/Alaska-Vendor-Web-App\//, "/") : "";
    if (normalizedUrl && normalizedUrl.startsWith("/public/")) {
      const cleanPath = decodeURIComponent(normalizedUrl.split("?")[0]).replace(/^\/+/, "");
      const filePath = path.resolve(__dirname, cleanPath);
      if (filePath.startsWith(path.resolve(__dirname, "public")) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.statusCode = 200;
        res.setHeader("Content-Type", MIME_TYPES[ext] || "application/octet-stream");
        fs.createReadStream(filePath).pipe(res);
        return;
      }
    }
    next();
  };
  return {
    name: "public-path-rewrite",
    configureServer(server) {
      server.middlewares.use(servePublicPrefix);
    },
    configurePreviewServer(server) {
      server.middlewares.use(servePublicPrefix);
    }
  };
}

export default defineConfig({
  base: "./",
  plugins: [ rootEntryNormalizePlugin(), react(), publicPathRewritePlugin(), fileProtocolPlugin()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: "iife",
        name: "ProductionOperationsConnect",
        inlineDynamicImports: true
      }
    }
  }
});

