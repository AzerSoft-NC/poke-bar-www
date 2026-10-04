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
  themeColor: '#E8892C',
  branding: {
    mango: '#E8A838',
    avocado: '#5B8C3E',
    orange: '#E8892C',
    sea: '#1F6F7A',
    sand: '#F7F1E6',
    ink: '#1A2A24',
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
