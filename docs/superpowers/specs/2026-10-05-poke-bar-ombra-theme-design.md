# Poke Bar www — Ombra theme design

**Date:** 2026-10-05  
**Status:** Draft for review (brainstorming complete)  
**Branch:** `OMBRA`  
**Repo:** `poke-bar/www`  
**Theme source:** [Ombra](https://astro.build/themes/details/ombra/) ([xocothemes/ombra](https://github.com/xocothemes/ombra), MIT)

## Intent

Ship a **trial branch** that replaces the current Mango/Tailwind landing with the **Ombra one-page restaurant structure**, recolored for **Poke Bar Nouméa**: light tropical canvas + vivid accents drawn from brand assets in `docs/assets/` (logo, menu board, com poster, Instagram grid).

### Said by partner

- Approach: scaffold Ombra into the repo (not a CSS-only port).
- Branch name: `OMBRA`.
- Structure: Ombra sections; colors: vivid (not stock Ombra charcoal/ember).
- Canvas: **light / cream tropical** (option B).
- Routes: one-page home + keep **mentions / confidentialité** restyled (option A); drop dedicated `/menu` page for this trial — PDF via CTA.
- Contact: **tel + WhatsApp + mailto** — no Ombra reservation form (option A).
- Integration approach: scaffold Ombra Astro 7 + keep Poke Bar tooling/`BASE_PATH` (option 1).

### Assumptions

- French visitor-facing copy stays.
- Primary location remains Les Quais; config may still hold a locations array for later.
- Brand assets in `docs/assets/` are inspiration + source files to copy into `src/assets` / `public` (not left only under docs).
- This branch is for visual/product evaluation; merge to `main` is a later decision.

### Success criteria

- Branch `OMBRA` builds static site with pnpm under `BASE_PATH=/poke-bar`.
- Home reads as Ombra layout (hero → concept → menu movements → story → lieu → contact → footer) with Poke Bar content.
- Light background + vivid teal / magenta / orange / yellow accents; logo used as brand mark.
- Legal pages reachable and restyled; no reservation form.
- Primary CTAs: Voir le menu (PDF) + Appeler / WhatsApp.

### Out of scope (this branch)

- Online ordering / payment / CMS
- Multi-location UI
- Restoring `/menu` as a full page (can return later)
- Perfect final photography set (use available assets + sensible placeholders)
- Merging to `main` / production cutover

---

## Approach

**1 — Scaffold Ombra (Astro 7) + rebase Poke Bar** (chosen)

1. Create branch `OMBRA` from `main`.
2. Bring in Ombra `src/` shell (layout, Nav, Footer, SeoHead, `styles.css`, `index.astro`, config shape) and Astro 7 deps.
3. Re-wire `astro.config.mjs` for `SITE_URL` / `BASE_PATH`, sitemap, sharp images; keep `withBase` + rehype base-url for legal Markdown.
4. Replace Ombra demo copy/images with Poke Bar config + `docs/assets` where useful.
5. Invert palette to light tropical + vivid accents (CSS variables in `styles.css`).
6. Swap `#reserve` form block for contact actions (tel / WhatsApp / mailto).
7. Re-add `/mentions`, `/confidentialite`, `/404` with a thin legal layout on Ombra tokens.
8. Keep pnpm, deploy workflow, Vitest smoke tests adapted to new paths/config.

---

## Architecture

| Piece | Choice |
|-------|--------|
| Branch | `OMBRA` from `main` |
| Framework | Astro `^7` (Ombra), `output: 'static'` |
| CSS | Ombra single `src/styles.css` + CSS variables (no Tailwind on this branch) |
| Package manager | pnpm (repo standard); regenerate lockfile for Astro 7 |
| Language | French (`lang="fr"`) |
| Config | Ombra-style `src/config/site.ts` + `src/config/home.ts`; fold in phone/WhatsApp/social/locations/menu PDF path |
| Integrations | `@astrojs/sitemap`; sharp for `astro:assets`; drop `astro-icon` / Tailwind unless a leftover is cheaper to keep |
| Subpath | Keep `loadEnv` → `site` + `base`; all internal links via `withBase` |
| Contact | `tel:`, `mailto:`, `wa.me` — no form |
| Schema | Restaurant JSON-LD from site + Les Quais address/hours |
| License note | Ombra MIT upstream; app remains private/UNLICENSED — retain MIT attribution in CHANGELOG or NOTICE for theme files |

### Routes

| Route | Role |
|-------|------|
| `/` | One-page Ombra structure, Poke Bar content |
| `/mentions` | Mentions légales (existing MD, restyled) |
| `/confidentialite` | Politique de confidentialité |
| `/404` | Soft 404 → home + tel |
| `/robots.txt`, sitemap | Generated; aligned to `site` + `base` |
| ~~`/menu`~~ | Removed on this branch; PDF CTA from home menu section |

---

## Pages & section mapping

Ombra stock sections → Poke Bar meaning:

| Ombra | Poke Bar |
|-------|----------|
| Hero | Brand + “Instant poké face à la mer”; CTAs PDF menu + Appeler |
| Marquee | Fresh / Healthy / Tasty + offer words (poké, smoothie, wrap, gaufre…) |
| Concept (`#concept`) | Offre: compose ton poké, smoothies, vibe Quais |
| Tasting (`#menu`) | “Create your poke” / categories as “courses” (bases → protéines → sauces → toppings + douceurs); note + link `menu.pdf` |
| Chef (`#chef`) | Brand story (not a Michelin chef bio): Nouméa, fresh, customizable — short timeline optional (ouverture Quais, etc.) or quote-led block from com copy |
| Interior / Sala (`#interior`) | Lieu Les Quais: address, hours, maps link; interior features = ambiance galerie / face mer if copy exists |
| Reserve (`#reserve`) | **Contact** (rename): phone, WhatsApp, email — no form fields |
| Footer | Tagline FR + legal links + social |

Shell: Ombra `Nav` / `Footer` / `SeoHead` / `BaseLayout`, adapted for `base` path and FR labels.

---

## Visual / brand

### Palette (light tropical + vivid accents)

Inspired by `docs/assets/com_recent.jpeg`, `menu.jpeg`, `insta.png`, `logo.jpeg`:

| Token (CSS) | Role | Direction |
|-------------|------|-----------|
| `--background` | Page | Warm cream / soft sand (light) |
| `--surface` / `--surface-2` | Panels | Slightly warmer white / pale peach |
| `--foreground` | Body text | Near-black / deep ink (readable on cream) |
| `--muted` / `--muted-foreground` | Secondary | Soft brown-gray |
| `--ember` (accent primary) | CTA / italic accent | Vivid orange (`~#E8892C` / com orange bar) |
| `--accent-2` | Secondary pop | Hot magenta/pink |
| Extra accents | Chips / marquee / highlights | Teal, sunny yellow, lime — sparingly |
| Hero overlays | Gradients | Lightened / cream-tinted veils (not charcoal vignette) |
| `color-scheme` | | `light` |

Primary CTA fill: vivid orange on cream; magenta for secondary highlights. Check button contrast on light surfaces.

### Typography

- Keep Ombra pairing for v1 of this branch: Cormorant Garamond (display) + Source Sans 3 (body). Brand script energy comes from logo mark + accent color, not a third font.
- Logo: circular B&W mark from `docs/assets/logo.jpeg` in header/hero.

### Imagery

- Copy usable brand files from `docs/assets/` into `src/assets/` / `public/` as needed.
- Replace Ombra stock webps; if a slot lacks a photo, use best available food/com asset rather than Michelin leftovers.
- OG image: generate or reuse a vivid crop; update `public/og.png` when possible.

### Motion

- Keep Ombra reveal + header scroll behavior; respect `prefers-reduced-motion` (already in theme).

---

## Content & data

| Source | Content |
|--------|---------|
| `src/config/site.ts` | Name, title, description FR, locale `fr_NC`, Les Quais address, phone, email, WhatsApp, nav anchors, hours schema, social, effects, cuisine/priceRange adapted (casual poke, not EUR245 tasting) |
| `src/config/home.ts` | All section copy FR + menu “courses” from current `menuCategories` / create-your-poke steps |
| Legal MD | Keep `src/content/legal/*` (or equivalent path) wired through LegalLayout |
| `public/menu.pdf` | Keep stub/real PDF; CTA targets `withBase('/menu.pdf')` |
| Env | Unchanged `.env.example`: `SITE_URL`, `BASE_PATH`, optional `GOOGLE_SITE_VERIFICATION` |

Drop Ombra `reservation.formAction` / form markup. Hours from `locations.config` Les Quais.

---

## Tooling & quality

| Area | Choice |
|------|--------|
| Scripts | Keep `dev`, `build`, `preview`, `astro:check`, `lint`, `format`, `format:check`, `test` |
| Tests | Adapt Vitest: `withBase`; config sanity (location/hours or menu courses non-empty) |
| Lint/format | Keep ESLint + Prettier Astro; fix config if Astro 7 needs plugin bumps |
| Deploy | Keep existing `deploy.yml` story |
| README | Note branch is Ombra trial; update stack line (Astro 7, no Tailwind on this branch) |

---

## Implementation notes (for planning)

1. `git checkout -b OMBRA`.
2. Vendor Ombra source (clone/copy) into working tree; resolve conflicts with existing `src/` by preferring Ombra shell + re-adding Poke Bar legal/env utilities.
3. Bump `package.json` to Astro 7 + Ombra fonts/sharp; `pnpm install`.
4. Restore `loadEnv`, `withBase`, rehype plugin, legal routes/layout.
5. Recolor `:root` tokens; set `color-scheme: light`; tune hero overlays/buttons.
6. Rewrite `site.ts` / `home.ts` in French for Poke Bar; map menu courses; contact section without form.
7. Swap assets; wire logo; remove Michelin SVG usage.
8. Update JSON-LD, SEO, robots, README checklist.
9. Verify: `pnpm build`, `pnpm test`, `pnpm astro:check`, spot-check `/poke-bar/` base path.

---

## Decisions log

| Decision | Choice |
|----------|--------|
| Integration | Scaffold Ombra Astro 7 + keep BASE_PATH/tooling |
| Branch | `OMBRA` |
| Canvas | Light cream tropical |
| Accents | Vivid teal / magenta / orange / yellow |
| `/menu` page | Dropped; PDF CTA on home |
| Legal pages | Kept, restyled |
| Contact | tel + WhatsApp + mailto; no form |
| CSS system | Ombra CSS variables (Tailwind removed on branch) |
| Primary CTA | Menu PDF + call/WhatsApp |
