# Handoff — Instagram grid for interior zone

**Date:** 2026-10-05  
**Repo:** `poke-bar/www` (Astro static site, branch context: Ombra trial)  
**Status:** Design choice pending — not implemented

## Goal

Replace the static screenshot `src/assets/insta.png` (also mirrored at `docs/assets/insta.png`) used in the `#interior` section with a real **18-thumbnail Instagram-style grid** of recent posts from [pokebar_cocotiers](https://www.instagram.com/pokebar_cocotiers/).

User said “stories” but the reference image is the **profile post grid** (6×3 squares), not ephemeral Stories.

## Current code

- `src/pages/index.astro` imports `interiorImage` from `../assets/insta.png` and renders it as a single full-bleed `<Image>` inside `#interior` / `.interior-hero`.
- Copy for that section: `homeContent.interior` in `src/config/home.ts`.
- Profile URL already in `siteConfig.social` (`src/config/site.ts`).

## Feasibility note

Live scrape of Instagram failed: `WebFetch` → **403 Forbidden**. Do not plan on runtime scraping.

## Agreed understanding (pending user correction)

- Keep site static (Astro `output: 'static'`).
- Recreate a visual grid like the Instagram profile thumbnails (1:1 cells).
- Link out to the Instagram profile (and/or individual posts if URLs available).

## Options presented (user has not chosen yet)

| Option | Approach | Notes |
|--------|----------|--------|
| **A (recommended)** | Download 18 thumbs → `src/assets/insta/*`, CSS grid in `#interior` | Offline, design control, content goes stale |
| **B** | Official Instagram embed widget | Always fresh, less CSS control, third-party script |
| **C** | Meta Graph API | Auto-refresh; needs Business account + token; overkill for vitrine |

Last question to user: **A or B?**

## Suggested next steps (after A or B)

1. If **A**: obtain 18 square images (manual export / user-provided / one-shot download they approve), commit under `src/assets/insta/`, replace `.interior-hero` single image with responsive grid (match existing Ombra CSS language in `src/styles.css`), keep caption overlay or adapt it, remove or keep `insta.png` as fallback only if still useful.
2. If **B**: embed official widget; verify CSP / static hosting; style wrapper only.
3. Record durable decision (static assets vs live embed) via `grill-me` → ADR under `context/adr/` if the 3-gate rule applies.
4. Verify visually desktop + mobile; run existing tests / `pnpm build`.

## Out of scope / do not assume

- No Instagram API credentials in repo.
- No secret files (`.env*`, etc.).
- No merge `OMBRA` → `main` unless asked.

## Related docs

- `README.md` — stack + go-live checklist (social URLs still TBD)
- `docs/superpowers/specs/2026-10-05-poke-bar-ombra-theme-design.md` — Ombra trial
- `CONTEXT.md` — glossary only

## Suggested skills

1. **brainstorming** — short in-chat design after A/B choice; wait for explicit yes before coding  
2. **grill-me** — if static assets vs embed is treated as a durable architecture fork → ADR  
3. **test-driven-development** — if config/list of thumbs is tested  
4. **verification-before-completion** — before claiming the grid ships  
5. **caveman** — already default via workspace rule  
