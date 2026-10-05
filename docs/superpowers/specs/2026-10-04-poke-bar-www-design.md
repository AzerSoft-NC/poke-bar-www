# Poke Bar www — Design Spec

**Date:** 2026-10-04  
**Status:** Approved in brainstorming (approach + §§1–4)  
**Repo:** `poke-bar/www`

## Intent

Ship a French static marketing site for **Poke Bar** (Nouméa), modeled on `plein-cap/www` stack and conventions. Primary visitor action: **see the menu** (on-site summary + PDF). Temporary hosting under `apps.azersoft.nc` with a `BASE_PATH`, same deploy story as Plein Cap.

### Success criteria

- Astro 6 static site builds with pnpm; check/lint/test scripts match sibling repos.
- Landing communicates brand, offer, location (Les Quais), and contact (tel / mailto / WhatsApp).
- `/menu` shows category summary and links to a full PDF.
- Config is ready for more locations later; **v1 content = Les Quais only**.
- Visual theme = **Lagoon** palette (deep teal / reef / coral CTA).

### Out of scope (v1)

- Online ordering / payment
- CMS, blog, React islands
- Multi-location UI (data model only)
- Final logo / real menu PDF (placeholders + README checklist)
- Contact form / azr-mailer

---

## Approach

**Clone plein-cap shape** (not fork azr-www, not greenfield Astro): copy patterns for tokens, layouts, config-as-data, legal Markdown collection, `withBase`, `deploy.yml`, tooling. Replace content, sections, and theme for a food brand.

---

## Architecture

| Piece | Choice |
|-------|--------|
| Framework | Astro `^6.x`, `output: 'static'` |
| CSS | Tailwind v4 (`@tailwindcss/vite`) + CSS design tokens + `data-theme="poke-bar"` |
| Package manager | pnpm (`packageManager` pinned like siblings), Node `>=22.12` |
| Language | French only (`lang="fr"`) |
| Integrations | `@astrojs/sitemap`, `astro-icon` (Lucide); no React |
| Subpath | `BASE_PATH` (default `/poke-bar`) via `withBase()` + rehype base-url plugin for Markdown links |
| Deploy | `deploy.yml` → droplet `ubuntu-azr-1`; env `.env.local` / `.env.prod` |
| Contact | `tel:`, `mailto:`, WhatsApp `wa.me` — no form |
| Schema | Restaurant / LocalBusiness JSON-LD from site + primary location |

### Routes

| Route | Role |
|-------|------|
| `/` | Landing: Hero → Offre → Menu teaser → Lieu → Contact |
| `/menu` | Category summary + sticky PDF CTA |
| `/mentions` | Mentions légales |
| `/confidentialite` | Politique de confidentialité |
| `/404` | Soft 404 → home + tel |
| `/robots.txt`, `/manifest.webmanifest` | Generated |

---

## Pages & components

### Landing sections

1. **Hero** — Brand name dominant; one supporting line (“instant poké face à la mer”); primary CTA “Voir le menu”, secondary “Appeler”. Full-bleed food/sea visual. No cards, stats, or overlays in the first viewport.
2. **Offre** — Short narrative from Les Quais copy (pokés personnalisables + smoothies, bowls, jus, gaufres, wraps, glaces, cafés).
3. **Menu teaser** — Sample categories/items → `/menu` and PDF.
4. **Lieu** — Les Quais address, hours, optional maps link (`locations[0]`).
5. **Contact** — Phone, email, WhatsApp, social icons (URLs when known).

### Shell

- `BaseLayout.astro` — HTML shell, SEO, fonts, header/footer, scroll-reveal.
- `LegalLayout.astro` — Prose wrapper for legal MD.
- Components under `layout/`, `sections/`, `seo/`, `ui/` (Button, Icon, Logo with light CVA).
- Motion: scroll-reveal + 1–2 intentional hero motions.

### Visual / brand

- **Palette Lagoon:** cool mist surfaces, lagoon teal dominant, reef mint accent, coral CTA (`themeColor` ≈ lagoon).
- Fonts (self-hosted Fontsource): **Syne** (display/brand) + **Figtree** (body).
- Logo: placeholder until assets provided.

---

## Content & data

| Source | Content |
|--------|---------|
| `src/config/site.config.ts` | Name, SEO, email, phone, WhatsApp, OG, branding colors, social URLs |
| `src/config/locations.config.ts` | Array of locations; v1 = Les Quais only |
| `src/config/menu.config.ts` | Categories + sample items for teaser + `/menu` |
| `src/config/nav.config.ts` | In-page anchors + Menu link |
| `src/config/legal.config.ts` | Legal footer links |
| `src/content/legal/*.md` | Mentions, confidentialité |
| `public/menu.pdf` | Full menu file (stub until real PDF) |
| `public/`, `src/assets/` | Favicon, OG, hero, logo placeholders |

### Les Quais (v1 location facts)

- **Address:** Bâtiment A — Rez-de-chaussée, Galerie Commerciale Les Quais, 8 rue Jules Ferry, 98800 Nouméa
- **Hours:** Lun–Mer 10h–15h; Jeu–Ven 10h–15h & 18h–21h; Sam 9h–15h & 18h–21h
- **Phone:** +687 46.08.08
- **Email:** bureau@pokebar.nc
- **WhatsApp:** same number via `wa.me` unless overridden later
- **Social (known):** Instagram `pokebar_cocotiers`; Facebook `pokebarouentoro`; TikTok TBD

### Future locations

Config array supports Cocotiers and Ouen Toro later. No multi-location UI in v1.

### Environment (`.env.example`)

- `SITE_URL` — e.g. `https://apps.azersoft.nc` (prod temp)
- `BASE_PATH` — `/poke-bar`
- Optional `GOOGLE_SITE_VERIFICATION`

No client secrets. Do not commit `.env.prod` / `.env.local`.

---

## Quality & tooling

| Area | Choice |
|------|--------|
| Scripts | `dev`, `build`, `preview`, `astro:check`, `lint`, `format`, `format:check`, `test`; optional `og` |
| Tests | Vitest: `withBase` behavior; config sanity (≥1 location, menu categories non-empty) |
| Lint / format | ESLint + Prettier with Astro plugins |
| A11y | Semantic links/buttons; focus rings; CTA contrast checked against coral on mist |
| Package name | `poke-bar-www` (private, UNLICENSED) |

### Repo init

- Scaffold by adapting `plein-cap/www` into this repository.
- Keep existing glossary/changelog scaffolds; rewrite `README.md` and `docs/architecture.md` with factual stack/structure after scaffold.
- Ignore `.superpowers/` (brainstorm companion artifacts).

### Go-live checklist (README)

- [ ] Real logo
- [ ] Real `menu.pdf` + accurate `menu.config.ts`
- [ ] Confirm `SITE_URL` / `BASE_PATH`
- [ ] Fill TikTok / final social URLs
- [ ] Legal copy reviewed
- [ ] Add Cocotiers / Ouen Toro when facts ready

---

## Implementation notes (for planning)

1. Copy/adapt plein-cap tree (configs, layouts, styles pipeline, plugins, tooling).
2. Replace theme with lagoon tokens; swap fonts.
3. Build food sections + `/menu`; wire locations[0] + contact channels.
4. Stub legal MD and PDF/logo placeholders.
5. Wire `deploy.yml` + `.env.example`.
6. Verify `pnpm build` under `BASE_PATH=/poke-bar`.

---

## Decisions log

| Decision | Choice |
|----------|--------|
| Locations v1 | Les Quais only; array ready for more |
| Primary CTA | Menu (page + PDF) |
| Hosting v1 | Temp subpath like plein-cap |
| Contact | tel + mailto + WhatsApp |
| Palette | Lagoon (teal / reef / coral) |
| Build approach | Adapt plein-cap www |
