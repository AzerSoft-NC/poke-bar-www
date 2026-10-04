export type MenuItem = {
  name: string;
  description?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  blurb: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'pokes',
    name: 'Pokés',
    blurb: 'Composez votre bol : base, protéine, toppings et sauce.',
    items: [
      { name: 'Poké Signature', description: 'Saumon, avocat, edamame, sauce sesame' },
      { name: 'Poké Thon', description: 'Thon, mangue, concombre, mayo épicée' },
      { name: 'Poké Veggie', description: 'Tofu, avocat, algues, sauce soja' },
    ],
  },
  {
    id: 'bowls',
    name: 'Bowls & wraps',
    blurb: 'Alternatives généreuses pour varier les plaisirs.',
    items: [
      { name: 'Bowl Buddha', description: 'Légumes grillés, quinoa, tahini' },
      { name: 'Wrap Poulet', description: 'Poulet croustillant, crudités, sauce maison' },
    ],
  },
  {
    id: 'boissons',
    name: 'Smoothies & jus',
    blurb: 'Fraîcheur tropicale pressée ou mixée.',
    items: [
      { name: 'Smoothie Mango Green', description: 'Mangue, épinard, banane' },
      { name: 'Jus Ananas Citron Vert', description: 'Pressé du jour' },
    ],
  },
  {
    id: 'douceurs',
    name: 'Gaufres & glaces',
    blurb: 'Une touche sucrée pour finir en beauté.',
    items: [
      { name: 'Gaufre Choco Banane' },
      { name: 'Glace coco vanille' },
    ],
  },
  {
    id: 'cafes',
    name: 'Cafés',
    blurb: 'Expresso et boissons chaudes pour accompagner.',
    items: [{ name: 'Café expresso' }, { name: 'Cappuccino' }],
  },
];
