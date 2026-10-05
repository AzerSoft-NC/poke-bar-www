export const siteConfig = {
  name: 'Poke Bar',
  title: 'Poke Bar — Nouméa',
  description:
    'Poke Bar à Nouméa — pokés personnalisables, smoothies, bowls et plus encore, aux Quais.',
  locale: 'fr_NC',
  defaultImage: '/og.png',
  address: {
    street: 'Bâtiment A — Rez-de-chaussée, Galerie Commerciale Les Quais, 8 rue Jules Ferry',
    locality: 'Nouméa',
    postalCode: '98800',
    country: 'Nouvelle-Calédonie',
  },
  phone: '+687 46.08.08',
  phoneTel: '+687460808',
  email: 'bureau@pokebar.nc',
  whatsapp: '687460808',
  menuPdf: '/menu.pdf',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Galerie+Commerciale+Les+Quais+8+rue+Jules+Ferry+Noum%C3%A9a',
  nav: [
    { label: 'Concept', href: '#concept' },
    { label: 'Menu', href: '#menu' },
    { label: 'Histoire', href: '#chef' },
    { label: 'Lieu', href: '#interior' },
  ],
  hours: {
    serviceDays: 'Lun–Sam',
    seatings: 'Déjeuner & dîner (selon jour)',
    closed: 'Dimanche',
    lines: [
      { label: 'Lun–Mer', value: '10h–15h' },
      { label: 'Jeu–Ven', value: '10h–15h & 18h–21h' },
      { label: 'Sam', value: '9h–15h & 18h–21h' },
    ],
    schema: {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '21:00',
    },
  },
  restaurant: {
    priceRange: '$$',
    cuisine: ['Poké', 'Bowls', 'Smoothies', 'Cuisine hawaïenne'],
  },
  effects: {
    reveal: true,
  },
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/pokebar_cocotiers/' },
    { label: 'Facebook', href: 'https://www.facebook.com/pokebarouentoro/' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions' },
    { label: 'Confidentialité', href: '/confidentialite' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
