# Poke Bar — www

Site vitrine statique (FR) pour **Poke Bar** (Nouméa), hébergé temporairement sous `apps.azersoft.nc/poke-bar`.

Branche **`OMBRA`** : essai du thème [Ombra](https://astro.build/themes/details/ombra/) (MIT, Andrei Alba / xocothemes) adapté — structure one-page, palette crème + accents vifs.

## Stack

- Astro 7 (`output: 'static'`)
- CSS Ombra (`src/styles.css`) + tokens light tropical
- Fontsource Cormorant Garamond + Source Sans 3
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

Contenu principal dans `src/config/site.ts` et `src/config/home.ts`.

## Go-live checklist

- [ ] Vrai logo (assets brand déjà dans `docs/assets/` / `src/assets/`)
- [ ] Vrai `public/menu.pdf` + courses menu à jour dans `home.ts`
- [ ] Confirmer `SITE_URL` / `BASE_PATH`
- [ ] Remplir TikTok / URLs sociales finales
- [ ] Relire les pages légales
- [ ] Ajouter Cocotiers / Ouen Toro quand les infos sont prêtes
- [ ] Décider merge `OMBRA` → `main` après validation visuelle

## Documentation

- [Architecture](docs/architecture.md)
- [Ombra trial design](docs/superpowers/specs/2026-10-05-poke-bar-ombra-theme-design.md)
- [Original design spec](docs/superpowers/specs/2026-10-04-poke-bar-www-design.md)
- [Glossary](CONTEXT.md)
- [Changelog](CHANGELOG.md)
