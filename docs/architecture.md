# Architecture

## Stack

| Piece | Choice |
|-------|--------|
| Framework | Astro 7, `output: 'static'` |
| CSS | Ombra `src/styles.css` + light tropical CSS variables |
| Package manager | pnpm (`packageManager` pinned), Node `>=22.12` |
| Integrations | `@astrojs/sitemap`, sharp (`astro:assets`) |
| Subpath | `BASE_PATH` via `withBase()` + rehype plugin for Markdown |
| Deploy | `.github/workflows/deploy.yml` → droplet |
| Contact | `tel:`, `mailto:`, WhatsApp `wa.me` (no form) |
| Theme credit | Ombra (MIT) — Andrei Alba / xocothemes |

## Structure

```text
src/
  config/          # site.ts, home.ts
  content/legal/   # Markdown collections
  components/      # Nav, Footer, SeoHead
  layouts/         # BaseLayout, LegalLayout
  lib/             # env, withBase
  pages/           # index (one-page) + legal + robots/manifest
  plugins/         # rehype-base-url
  styles.css       # Ombra shell + Poke Bar tokens
  assets/          # brand + section imagery
public/            # favicon, og, menu.pdf
tests/             # Vitest
```

## Routes

| Route | Role |
|-------|------|
| `/` | One-page landing (Ombra structure) |
| `/mentions`, `/confidentialite` | Légal |
| `/404` | Soft 404 |
| `/robots.txt`, `/manifest.webmanifest` | Générés |

## Also read

- [Glossary](../CONTEXT.md)
- [Changelog](../CHANGELOG.md)
- [Ombra trial design](superpowers/specs/2026-10-05-poke-bar-ombra-theme-design.md)
