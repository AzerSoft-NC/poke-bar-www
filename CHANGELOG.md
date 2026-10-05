# Changelog

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Changed

- Interior section: replace static `insta.png` screenshot with an 18-thumbnail grid from `@pokebar_cocotiers`
- Branch `OMBRA`: replace Tailwind landing with Ombra Astro 7 one-page shell (MIT theme by Andrei Alba / xocothemes), light tropical palette, Poke Bar FR content
- Drop `/menu` route on this trial; PDF CTA from home menu section
- Contact via tel / WhatsApp / mailto only (no reservation form)

### Added

- `src/config/instagram.ts` + `src/assets/insta/*` for the Instagram grid
- Scaffold Astro static marketing site for Poke Bar (Les Quais)
- Legal pages, 404, robots.txt, web manifest
- Vitest coverage for `withBase` and config sanity
- Deploy workflow and `.env.example`
