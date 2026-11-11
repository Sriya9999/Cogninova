# Cogninova website

Corporate website for Cogninova, the AI product studio. Built with Next.js (App Router), React, TypeScript and Tailwind CSS.

## Develop

```bash
npm install
npm run dev
```

`npm run build` creates the production build; `npm run typecheck` runs TypeScript.

## Structure

- `src/app` — routes: home, about, products (+ detail pages), solutions, industries (+ detail pages), contact, `/api/contact`, sitemap and robots.
- `src/components` — shared UI.
- `src/content` — all copy and data. Add a product or industry by adding an entry to `products.ts` or `industries.ts`; its page, listing card, cross-links and sitemap entry are generated.

## Configuration

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used in metadata and the sitemap. |
| `CONTACT_WEBHOOK_URL` | Endpoint that receives enquiries as JSON. Required in production; without it the form shows an error rather than dropping enquiries. |
| `NEXT_PUBLIC_GA_ID` | Optional Google Analytics 4 ID. |

## Deploy (Cloudflare Pages)

Live at https://cogninova.pages.dev.

```bash
npm run deploy
```

This builds with the OpenNext Cloudflare adapter, bundles the static assets into the Worker (`scripts/embed-assets.mjs`) and uploads it to the `cogninova` Pages project (`scripts/deploy-pages.mjs`). It needs `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` in the shell, plus `NEXT_PUBLIC_SITE_URL=https://cogninova.pages.dev` at build time. Set `CONTACT_WEBHOOK_URL` in the Pages project's settings (Variables and Secrets).

## Before launch

- Replace the placeholder products in `src/content/products.ts` with the real portfolio.
- Replace the placeholder email and LinkedIn URL in `src/content/site.ts`.
