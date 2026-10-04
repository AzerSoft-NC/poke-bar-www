# Architecture

## Stack

| Piece | Choice |
|-------|--------|
| Framework | Astro 6, `output: 'static'` |
| CSS | Tailwind v4 (`@tailwindcss/postcss`) + CSS tokens (`data-theme="poke-bar"`) |
| Package manager | pnpm (`packageManager` pinned), Node `>=22.12` |
| Integrations | `@astrojs/sitemap`, `astro-icon` (Lucide) |
| Subpath | `BASE_PATH` via `withBase()` + rehype plugin for Markdown |
| Deploy | `.github/workflows/deploy.yml` → droplet |
| Contact | `tel:`, `mailto:`, WhatsApp `wa.me` |

## Structure

```text
src/
  config/          # site, locations, menu, nav, legal
  content/legal/   # Markdown collections
  components/      # layout, sections, seo, ui
  layouts/         # BaseLayout, LegalLayout
  lib/             # env, withBase
  pages/           # routes + robots/manifest endpoints
  plugins/         # rehype-base-url
  styles/          # global.css + theme tokens
public/            # favicon, hero, og, menu.pdf
tests/             # Vitest
```

## Routes

| Route | Role |
|-------|------|
| `/` | Landing |
| `/menu` | Catégories + CTA PDF |
| `/mentions`, `/confidentialite` | Légal |
| `/404` | Soft 404 |
| `/robots.txt`, `/manifest.webmanifest` | Générés |

## Also read

- [Glossary](../CONTEXT.md)
- [Changelog](../CHANGELOG.md)
- [Design spec](superpowers/specs/2026-10-04-poke-bar-www-design.md)
