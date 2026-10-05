export const siteConfig = {
  name: 'Poke Bar',
  tagline: 'Instant poké face à la mer',
  description:
    'Poke Bar à Nouméa — pokés personnalisables, smoothies, bowls et plus encore, aux Quais.',
  lang: 'fr',
  locale: 'fr_NC',
  email: 'bureau@pokebar.nc',
  phone: {
    display: '+687 46.08.08',
    tel: '+687460808',
    whatsapp: '687460808',
  },
  themeColor: '#0A5C68',
  branding: {
    lagoon: '#0A5C68',
    lagoonDeep: '#073A44',
    reef: '#1FA8A0',
    coral: '#E85D4C',
    leaf: '#2F9E6B',
    mist: '#F3F8F9',
    ink: '#0C2428',
  },
  social: {
    instagram: 'https://www.instagram.com/pokebar_cocotiers/',
    facebook: 'https://www.facebook.com/pokebarouentoro/',
    tiktok: '',
  },
  og: {
    title: 'Poke Bar — Nouméa',
    description:
      'Pokés frais face à la mer aux Quais. Consultez le menu et passez nous voir.',
    image: '/og.png',
  },
  menuPdf: '/menu.pdf',
} as const;

export type SiteConfig = typeof siteConfig;
