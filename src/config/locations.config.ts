export type LocationHours = {
  label: string;
  value: string;
};

export type Location = {
  id: string;
  name: string;
  addressLines: string[];
  city: string;
  postalCode: string;
  country: string;
  hours: LocationHours[];
  mapsUrl?: string;
  phoneDisplay?: string;
  phoneTel?: string;
};

export const locations: Location[] = [
  {
    id: 'les-quais',
    name: 'Les Quais',
    addressLines: [
      'Bâtiment A — Rez-de-chaussée',
      'Galerie Commerciale Les Quais',
      '8 rue Jules Ferry',
    ],
    city: 'Nouméa',
    postalCode: '98800',
    country: 'Nouvelle-Calédonie',
    hours: [
      { label: 'Lun–Mer', value: '10h–15h' },
      { label: 'Jeu–Ven', value: '10h–15h & 18h–21h' },
      { label: 'Sam', value: '9h–15h & 18h–21h' },
    ],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Galerie+Commerciale+Les+Quais+8+rue+Jules+Ferry+Noum%C3%A9a',
  },
];

export const primaryLocation = locations[0];
