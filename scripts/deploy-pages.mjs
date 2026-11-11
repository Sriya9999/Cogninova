// Deploys the built site to the Cloudflare Pages project (cogninova.pages.dev).
// Run via `npm run deploy`. Needs CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN.
//
// The whole site (server code + embedded static assets) is bundled into one
// Worker module and uploaded as a Pages "_worker.js" deployment in a single
// API call.
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const project = process.env.CLOUDFLARE_PAGES_PROJECT ?? "cogninova";
const account = process.env.CLOUDFLARE_ACCOUNT_ID;
const token = process.env.CLOUDFLARE_API_TOKEN;
if (!account || !token) throw new Error("Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN.");

const dir = mkdtempSync(join(tmpdir(), "cogninova-pages-"));
execFileSync("npx", ["wrangler", "deploy", "--dry-run", "--outdir", dir], { stdio: "inherit" });

const inner = new FormData();
inner.set("metadata", JSON.stringify({ main_module: "index.js" }));
inner.set("index.js", new File([readFileSync(join(dir, "entry.js"))], "index.js", { type: "application/javascript+module" }));
const innerRes = new Response(inner);

const outer = new FormData();
outer.set("manifest", "{}");
outer.set("branch", "main");
outer.set("_worker.bundle", new Blob([await innerRes.arrayBuffer()], { type: innerRes.headers.get("content-type") }), "_worker.bundle");
const outerRes = new Response(outer);
const body = join(dir, "body.bin");
writeFileSync(body, Buffer.from(await outerRes.arrayBuffer()));

// curl (rather than fetch) so HTTPS proxy settings are honoured.
const out = execFileSync("curl", [
  "-sS", "-X", "POST",
  `https://api.cloudflare.com/client/v4/accounts/${account}/pages/projects/${project}/deployments`,
  "-H", `Authorization: Bearer ${token}`,
  "-H", `Content-Type: ${outerRes.headers.get("content-type")}`,
  "--data-binary", `@${body}`,
], { encoding: "utf8", maxBuffer: 1 << 26 });
const res = JSON.parse(out);
if (!res.success) throw new Error(`Pages deployment failed: ${JSON.stringify(res.errors)}`);
console.log(`Deployed: https://${project}.pages.dev (this version: ${res.result.url})`);
