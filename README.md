# Poke Bar — www

Site vitrine statique (FR) pour **Poke Bar** (Nouméa), hébergé temporairement sous `apps.azersoft.nc/poke-bar`.

## Stack

- Astro 6 (`output: 'static'`)
- Tailwind CSS v4 (`@tailwindcss/postcss`) + tokens `data-theme="poke-bar"`
- pnpm, Node `>=22.12`
- Vitest, ESLint, Prettier

## Développement

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

Scripts : `dev`, `build`, `preview`, `astro:check`, `lint`, `format`, `format:check`, `test`.

## Configuration

| Variable | Exemple | Rôle |
|----------|---------|------|
| `SITE_URL` | `https://apps.azersoft.nc` | Origine publique |
| `BASE_PATH` | `/poke-bar` | Sous-chemin de déploiement |
| `GOOGLE_SITE_VERIFICATION` | (optionnel) | Search Console |

Contenu principal dans `src/config/` (site, lieux, menu, nav, légal).

## Go-live checklist

- [ ] Vrai logo
- [ ] Vrai `public/menu.pdf` + `menu.config.ts` à jour
- [ ] Confirmer `SITE_URL` / `BASE_PATH`
- [ ] Remplir TikTok / URLs sociales finales
- [ ] Relire les pages légales
- [ ] Ajouter Cocotiers / Ouen Toro quand les infos sont prêtes

## Documentation

- [Architecture](docs/architecture.md)
- [Design spec](docs/superpowers/specs/2026-10-04-poke-bar-www-design.md)
- [Glossary](CONTEXT.md)
- [Changelog](CHANGELOG.md)
