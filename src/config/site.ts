export const siteConfig = {
  name: 'Poke Bar',
  defaultImage: '/og.png',
  address: {
    street: 'Bâtiment A — Rez-de-chaussée, Galerie Commerciale Les Quais, 8 rue Jules Ferry',
    locality: 'Nouméa',
    postalCode: '98800',
    country: 'NC',
  },
  phone: '+687 46.08.08',
  phoneTel: '+687460808',
  email: 'bureau@pokebar.nc',
  whatsapp: '687460808',
  menuPdf: '/menu.pdf',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Galerie+Commerciale+Les+Quais+8+rue+Jules+Ferry+Noum%C3%A9a',
  hours: {
    schema: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'],
        opens: '10:00',
        closes: '15:00',
      },
      {
        dayOfWeek: ['Thursday', 'Friday'],
        opens: '10:00',
        closes: '15:00',
      },
      {
        dayOfWeek: ['Thursday', 'Friday'],
        opens: '18:00',
        closes: '21:00',
      },
      {
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '15:00',
      },
      {
        dayOfWeek: ['Saturday'],
        opens: '18:00',
        closes: '21:00',
      },
    ],
  },
  restaurant: {
    priceRange: '$$',
    cuisine: ['Poké', 'Bowls', 'Smoothies', 'Hawaiian'],
  },
  effects: {
    reveal: true,
  },
  social: [
    { id: 'instagram' as const, href: 'https://www.instagram.com/pokebar_cocotiers/' },
    { id: 'facebook' as const, href: 'https://www.facebook.com/pokebarouentoro/' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
