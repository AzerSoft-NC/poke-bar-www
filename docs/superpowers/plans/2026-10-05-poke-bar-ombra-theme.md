# Poke Bar Ombra Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current Tailwind landing on branch `OMBRA` with the Ombra one-page Astro 7 shell, Poke Bar FR content, light tropical palette + vivid accents, legal pages kept, no reservation form.

**Architecture:** Vendor Ombra’s `src/` shell (layout, Nav/Footer/SeoHead, `styles.css`, one-page `index.astro`, `site.ts`/`home.ts`) into this repo; keep Poke Bar `loadEnv`/`withBase`/legal Markdown/deploy/pnpm; drop Tailwind, `/menu` page, and Ombra’s mailto form. Recolor CSS variables to cream + orange/magenta/teal.

**Tech Stack:** Astro `^7`, `@astrojs/sitemap`, sharp, Fontsource Cormorant Garamond + Source Sans 3, pnpm, Vitest, ESLint/Prettier

**Spec:** `docs/superpowers/specs/2026-10-05-poke-bar-ombra-theme-design.md`

## Global Constraints

- Branch name: `OMBRA` (already created; work continues here)
- French visitor-facing copy (`lang="fr"`, locale `fr_NC`)
- `SITE_URL` / `BASE_PATH` via `src/lib/env.ts` (defaults `https://apps.azersoft.nc` / `/poke-bar`)
- Contact: `tel:` + WhatsApp `wa.me` + `mailto:` only — no reservation `<form>`
- No Tailwind on this branch; Ombra CSS variables in `src/styles.css`
- Primary location: Les Quais (facts from prior `locations.config.ts`)
- Menu PDF CTA: `withBase('/menu.pdf')` — no `/menu` route
- Keep legal MD under `src/content/legal/`; restyle via thin LegalLayout on Ombra tokens
- Package name stays `poke-bar-www` (private, UNLICENSED); note Ombra MIT in CHANGELOG
- Node `>=22.12.0`, pnpm as package manager

## Review Focus

- Internal links/assets under `BASE_PATH=/poke-bar` must resolve (nav, PDF, legal, logo) — pin via `withBase` tests + build spot-check
- Light theme CTAs (orange on cream) must remain readable — visual check after token swap
- No leftover Ombra English/Michelin/reservation form strings in built HTML — grep build or source
- Legal Markdown links rewritten for `base` (rehype plugin stays wired)
- `robots.txt` / sitemap still emit absolute URLs from configured `site`

## File map

| Path | Responsibility |
|------|----------------|
| `package.json` / lockfile | Astro 7 + Ombra deps; remove Tailwind/astro-icon/CVA/Outfit/DM Sans |
| `astro.config.mjs` | `site`/`base` from `loadEnv`, sitemap, sharp image service, rehype base-url |
| `src/lib/env.ts`, `src/lib/withBase.ts`, `src/plugins/rehype-base-url.ts` | Keep |
| `src/config/site.ts`, `src/config/home.ts` | Ombra-shaped typed config (replace `*.config.ts` consumers) |
| `src/styles.css` | Ombra styles + light tropical tokens |
| `src/layouts/BaseLayout.astro`, `LegalLayout.astro` | Ombra shell + legal wrapper |
| `src/components/Nav.astro`, `Footer.astro`, `SeoHead.astro` | Shell chrome (logo, FR, contact CTA, legal links) |
| `src/pages/index.astro` | One-page sections; contact block replaces form |
| `src/pages/mentions.astro`, `confidentialite.astro`, `404.astro`, `robots.txt.ts` | Keep/adapt; delete `menu.astro` |
| `src/assets/*` | Brand images from `docs/assets/` + drop Michelin SVG |
| `src/content/legal/*`, `src/content.config.ts` | Keep |
| `tests/config.test.ts` | Assert new `site.ts` / `home.ts` invariants |
| `tests/withBase.test.ts` | Keep (+ PDF path case if useful) |
| Delete | Old `src/components/{layout,sections,seo,ui}/*`, `src/styles/global.css`, `postcss.config.mjs`, old `src/config/*.config.ts` once unused |

---

### Task 1: Vendor Ombra shell + Astro 7 dependencies

**Files:**
- Create/overwrite from Ombra: `src/styles.css`, `src/layouts/BaseLayout.astro`, `src/components/{Nav,Footer,SeoHead}.astro`, `src/pages/index.astro`, `src/config/{site,home}.ts`, `src/assets/*` (theme placeholders OK temporarily)
- Modify: `package.json`, `astro.config.mjs`, `tsconfig.json` if needed
- Delete after copy settles: Tailwind-era section/ui components, `src/styles/global.css`, `postcss.config.mjs`, `src/pages/menu.astro`
- Keep untouched this task: `src/lib/*`, `src/plugins/*`, legal content, tests (may fail until Task 3)
- Test: `tests/withBase.test.ts` (must still pass)

**Interfaces:**
- Consumes: Ombra upstream at `/tmp/ombra-peek` or fresh clone of `https://github.com/xocothemes/ombra`
- Produces: buildable Astro 7 tree importing `../styles.css`; `siteConfig` / `homeContent` modules at `src/config/site.ts` and `src/config/home.ts`

- [ ] **Step 1: Copy Ombra `src/` shell files into the repo** (layouts, components, styles, pages/index, config, assets). Do not overwrite `src/lib`, `src/plugins`, `src/content`, or `docs/`.

- [ ] **Step 2: Update `package.json` dependencies**

Keep scripts (`dev`, `build`, `preview`, `astro:check`, `lint`, `format`, `format:check`, `test`). Set dependencies to Astro `^7.1.0`, `@astrojs/sitemap`, `@fontsource/cormorant-garamond`, `@fontsource/source-sans-3`, `sharp`, `dotenv` (for `loadEnv`). DevDeps: keep `@astrojs/check`, ESLint/Prettier/Vitest/TypeScript stack; remove `@tailwindcss/postcss`, `tailwindcss`, `postcss`, `astro-icon`, `class-variance-authority`, `@fontsource/dm-sans`, `@fontsource/outfit`, `@iconify-json/lucide` unless still imported (they should not be).

- [ ] **Step 3: Rewrite `astro.config.mjs`**

```js
// loadEnv → site + base; integrations: sitemap(); image.service sharp;
// markdown.rehypePlugins: rehypeBaseUrl with basePath
```

- [ ] **Step 4: `pnpm install` then run withBase tests**

Run: `pnpm test -- tests/withBase.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "$(cat <<'EOF'
feat : vendor Ombra Astro 7 shell on OMBRA branch

Replace Tailwind landing scaffold with Ombra theme files
and Astro 7 dependencies as the base for Poke Bar restyle.
EOF
)"
```

---

### Task 2: Poke Bar `site.ts` / `home.ts` + config tests

**Files:**
- Modify: `src/config/site.ts`, `src/config/home.ts`
- Modify: `tests/config.test.ts`
- Delete when unused: `src/config/{site,locations,menu,nav,legal}.config.ts`

**Interfaces:**
- Consumes: Les Quais address/hours, phone `+687460808` / display `+687 46.08.08`, email `bureau@pokebar.nc`, WhatsApp `687460808`, Instagram/Facebook URLs from prior site config, `menu.pdf` path
- Produces:
  - `siteConfig` with at least: `name`, `title`, `description`, `locale: "fr_NC"`, `phone`, `email`, `whatsapp`, `nav` (anchors `#concept` `#menu` `#chef` `#interior`), `hours` (+ `schema`), `address`, `social[]`, `effects.reveal`, `menuPdf: "/menu.pdf"`, `restaurant.cuisine` casual poke — **no** `reservation.formAction`
  - `homeContent` FR: hero / marquee / concept / tasting.courses (≥4) / chef (brand story) / interior (lieu) / `contact` (replaces `reservation` key) / footer
  - Contact section id in page will be `#contact` (Task 4); nav CTA targets `#contact`

- [ ] **Step 1: Rewrite failing config tests**

```ts
// tests/config.test.ts
import { siteConfig } from '../src/config/site';
import { homeContent } from '../src/config/home';

it('exposes FR contact channels', () => {
  expect(siteConfig.phone).toMatch(/\d/);
  expect(siteConfig.email).toContain('@');
  expect(siteConfig.whatsapp).toBeTruthy();
  expect(siteConfig.locale).toBe('fr_NC');
});

it('has tasting courses and menu PDF path', () => {
  expect(homeContent.tasting.courses.length).toBeGreaterThanOrEqual(4);
  expect(siteConfig.menuPdf).toBe('/menu.pdf');
});

it('has no reservation form action', () => {
  expect(siteConfig).not.toHaveProperty('reservation');
  expect(homeContent).toHaveProperty('contact');
  expect(homeContent).not.toHaveProperty('reservation');
});
```

- [ ] **Step 2: Run tests — expect FAIL**

Run: `pnpm test -- tests/config.test.ts`
Expected: FAIL (old shape / missing fields)

- [ ] **Step 3: Implement `siteConfig` and `homeContent`** with Poke Bar FR copy per spec section mapping (Create-your-poke style courses; chef = brand story; interior = Les Quais; contact copy without form fields).

- [ ] **Step 4: Run tests — expect PASS**

Run: `pnpm test -- tests/config.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git commit -m "$(cat <<'EOF'
feat : fill Ombra config with Poke Bar FR content

Typed site/home config for Les Quais, menu courses, and
contact channels without a reservation form.
EOF
)"
```

---

### Task 3: Light tropical tokens + brand assets

**Files:**
- Modify: `src/styles.css` (`:root` tokens, `color-scheme`, hero gradients, button colors)
- Create: `src/assets/logo.jpeg` (from `docs/assets/logo.jpeg`); map other slots from `docs/assets/com_recent.jpeg`, `menu.jpeg`, `insta.png` as best-effort hero/concept/menu/interior sources (convert/copy; drop `michelin-stars.svg` usage)
- Modify: `BaseLayout.astro` `theme-color` meta to cream/orange brand (~`#F7F1E6` or `#E8892C`)

**Interfaces:**
- Consumes: token names already in Ombra CSS (`--background`, `--surface`, `--foreground`, `--ember`, etc.)
- Produces: light palette — cream background, ink foreground, `--ember` ≈ `#E8892C`, `--accent-2` magenta, teal/yellow used sparingly; `color-scheme: light`

Exact token values (implementer may tune ± slightly for contrast):

```css
--background: #f7f1e6;
--surface: #fff8ef;
--surface-2: #ffe8d2;
--foreground: #1a2a24;
--cream: #fffdf8;
--muted: #6b5e52;
--muted-foreground: #5c534a;
--border: rgb(26 42 36 / 0.16);
--ember: #e8892c;
--ember-foreground: #1a2a24;
--accent-2: #e23b7c;
--focus: #1f6f7a;
```

Lighten `--grad-vignette` / `--grad-veil` to cream/white translucent overlays (not charcoal).

- [ ] **Step 1: Apply token swap + light gradients in `src/styles.css`**

- [ ] **Step 2: Copy brand assets into `src/assets/`; remove Michelin asset references from Nav**

- [ ] **Step 3: Visual sanity** — `pnpm dev`, open home, confirm light canvas + orange CTAs (manual)

- [ ] **Step 4: Commit**

```bash
git commit -m "$(cat <<'EOF'
feat : recolor Ombra shell to light tropical Poke Bar palette

Swap CSS tokens to cream canvas with vivid orange/magenta
accents and wire brand logo assets.
EOF
)"
```

---

### Task 4: Wire one-page UI (Nav, Footer, index contact, withBase)

**Files:**
- Modify: `src/components/Nav.astro`, `Footer.astro`, `SeoHead.astro`
- Modify: `src/pages/index.astro` (FR structure; replace reservation `<form>` with contact actions; Image imports from new assets; JSON-LD from `siteConfig`)
- Modify: `src/layouts/BaseLayout.astro` (`lang="fr"`, skip-link FR)

**Interfaces:**
- Consumes: `siteConfig`, `homeContent.contact`, `withBase(path: string, base?: string) => string`
- Produces:
  - Nav CTA → `#contact`, label e.g. `Contact` / `Appeler`
  - Brand mark uses logo image, not Michelin stars
  - Contact section `id="contact"`: links `tel:${siteConfig.phone}`, `https://wa.me/${siteConfig.whatsapp}`, `mailto:${siteConfig.email}`, hours facts
  - Menu section note/CTA → `withBase(siteConfig.menuPdf)`
  - Footer: legal `withBase('/mentions')`, `withBase('/confidentialite')`, social from `siteConfig.social`
  - All in-page `href="#..."` unchanged; site-relative paths use `withBase`

- [ ] **Step 1: Adapt Nav/Footer/BaseLayout for FR + logo + `#contact`**

- [ ] **Step 2: Rewrite reservation block in `index.astro` into contact actions** (no `<form>`, no inputs). Keep other Ombra sections; bind copy from `homeContent`.

- [ ] **Step 3: Grep for forbidden leftovers**

Run: `rg -n "Reserve|Michelin|formAction|reservation-form|Elia|Milan" src --glob '!**/docs/**'`
Expected: no matches in active UI/config (CHANGELOG mention of Ombra MIT OK elsewhere)

- [ ] **Step 4: Commit**

```bash
git commit -m "$(cat <<'EOF'
feat : adapt Ombra one-page UI for Poke Bar contact and BASE_PATH

French chrome, logo nav, PDF/menu CTAs via withBase, and
tel/WhatsApp/mailto contact instead of reservation form.
EOF
)"
```

---

### Task 5: Legal routes, 404, robots, cleanup, verify

**Files:**
- Modify: `src/layouts/LegalLayout.astro`, `src/pages/{mentions,confidentialite,404}.astro`, `src/pages/robots.txt.ts`, `src/pages/manifest.webmanifest.ts` (theme colors if present)
- Modify: `README.md`, `docs/architecture.md`, `CHANGELOG.md` (Ombra trial + MIT note)
- Delete leftovers: unused old components/configs/postcss
- Test: full `pnpm test`, `pnpm astro:check`, `pnpm build`

**Interfaces:**
- Consumes: content collection legal MD; Ombra tokens for prose
- Produces: legal pages render under `BASE_PATH`; build output in `dist/`

- [ ] **Step 1: Restyle LegalLayout on Ombra classes/tokens; ensure mentions/confidentialite/404 use `withBase` for home links**

- [ ] **Step 2: Update README stack lines** (Astro 7, Ombra trial branch, no Tailwind; checklist still valid)

- [ ] **Step 3: Verify**

Run:
```bash
pnpm test
pnpm astro:check
BASE_PATH=/poke-bar SITE_URL=https://apps.azersoft.nc pnpm build
```
Expected: all pass / exit 0; `dist/poke-bar/` (or configured base) contains index + legal assets

- [ ] **Step 4: Commit**

```bash
git commit -m "$(cat <<'EOF'
feat : restyle legal pages and verify Ombra Poke Bar build

Keep mentions/confidentialité on Ombra tokens, drop menu
route leftovers, and confirm static build under BASE_PATH.
EOF
)"
```

---

## Spec coverage check

| Spec requirement | Task |
|------------------|------|
| Scaffold Ombra Astro 7 | 1 |
| Keep BASE_PATH / env / pnpm | 1, 4, 5 |
| Poke Bar FR config | 2 |
| Light cream + vivid accents | 3 |
| Section mapping + no form | 2, 4 |
| Legal kept, `/menu` dropped | 1, 5 |
| Brand assets / logo | 3 |
| Build verify | 5 |
