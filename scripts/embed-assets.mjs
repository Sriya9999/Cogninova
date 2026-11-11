// Bundles the static assets (~1 MB) into the Worker itself and writes the
// Worker entry point, so a deploy is a single script upload.
//
// Why: Cloudflare's separate static-asset upload authenticates with a
// short-lived upload token, which some CI/proxy setups that inject their own
// API credentials overwrite. Embedding avoids that upload entirely.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const root = ".open-next/assets";
const types = {
  ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".html": "text/html; charset=utf-8",
  ".json": "application/json", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".woff": "font/woff",
  ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8", ".xml": "application/xml", ".map": "application/json",
};

const manifest = {};
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else {
      const url = path.slice(root.length).split("\\").join("/");
      manifest[url] = [types[extname(name)] ?? "application/octet-stream", readFileSync(path).toString("base64")];
    }
  }
};
walk(root);

writeFileSync(".open-next/assets-manifest.mjs", `export default ${JSON.stringify(manifest)};\n`);
writeFileSync(
  ".open-next/entry.mjs",
  `import assets from "./assets-manifest.mjs";
import worker from "./worker.js";
export * from "./worker.js";

const decoded = new Map();
function serve(request) {
  if (request.method !== "GET" && request.method !== "HEAD") return null;
  const path = decodeURIComponent(new URL(request.url).pathname);
  const entry = assets[path];
  if (!entry) return null;
  let body = decoded.get(path);
  if (!body) {
    body = Uint8Array.from(atob(entry[1]), (c) => c.charCodeAt(0));
    decoded.set(path, body);
  }
  return new Response(request.method === "HEAD" ? null : body, {
    headers: {
      "content-type": entry[0],
      "cache-control": path.startsWith("/_next/static/") ? "public, max-age=31536000, immutable" : "public, max-age=3600",
      "x-content-type-options": "nosniff",
    },
  });
}

const ASSETS = { fetch: async (request) => serve(new Request(request)) ?? new Response("Not found", { status: 404 }) };

export default {
  fetch(request, env, ctx) {
    return serve(request) ?? worker.fetch(request, { ...env, ASSETS }, ctx);
  },
};
`,
);
console.log(`Embedded ${Object.keys(manifest).length} static assets.`);
