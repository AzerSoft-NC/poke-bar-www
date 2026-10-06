# i18n: French default without prefix, English under `/en`

The site is bilingual. We use Astro `i18n` with `defaultLocale: 'fr'` and `prefixDefaultLocale: false`, so French stays at the root (`/poke-bar`, `/poke-bar/mentions`) and English is served under `/en`. Copy lives in typed TS dictionaries plus legal markdown per locale; the language switcher is in the nav. Prefixed-both and cookie-only routing were rejected to keep Nouméa FR URLs short and SEO-friendly.
