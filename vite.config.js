
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
    if (req.url && req.url.startsWith("/public/")) {
      const cleanPath = decodeURIComponent(req.url.split("?")[0]).replace(/^\/+/, "");
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
  plugins: [react(), publicPathRewritePlugin(), fileProtocolPlugin()],
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

