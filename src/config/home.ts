export const homeContent = {
  hero: {
    eyebrow: 'Les Quais — Nouméa',
    title: ['Instant poké', 'face à la mer', 'à composer.'],
    body: 'Fresh · Healthy · Tasty. Composez votre bol, sippez un smoothie, et profitez du spot aux Quais.',
    action: 'Voir le menu',
    secondaryAction: 'Appeler',
  },
  marquee: [
    'Poké',
    'Fresh',
    'Healthy',
    'Tasty',
    'Smoothie',
    'Wrap',
    'Gaufre',
    'Bowl',
    'Sauce maison',
    'Nouméa',
  ],
  concept: {
    eyebrow: '01 — Concept',
    heading: ['Compose ton bol,', 'choisis ta sauce,', 'pars avec le smile.'],
    body: [
      'Chez Poke Bar, tout part de vous : une base, une protéine, des toppings qui claquent, et la sauce qui fait la différence. Fraîcheur du jour, rythme casual.',
      'Smoothies, wraps, bowls, gaufres et cafés complètent le menu — pour un déjeuner express ou une pause ensoleillée aux Quais.',
    ],
    caption: 'Fig. 01 — Bol signature',
    quote: 'Fresh · Healthy · Tasty — c’est tout le programme.',
    quoteByline: 'Poke Bar Nouméa',
  },
  tasting: {
    eyebrow: '02 — Menu',
    heading: ['Create your poke,', 'en quatre gestes,', 'plein de couleurs.'],
    note: 'Aperçu des étapes et catégories. Le détail complet est dans le PDF menu.',
    caption: 'Mise — Les Quais',
    pdfLabel: 'Télécharger le menu PDF',
    courses: [
      {
        number: 'I',
        title: 'Base it',
        accent: 'le fond du bol',
        body: 'Riz vinaigré, riz nature, ou salade — la base de votre poké.',
        pairing: 'Étape 1',
      },
      {
        number: 'II',
        title: 'Poke it',
        accent: 'la protéine',
        body: 'Saumon, thon, poulet, tofu… les cubes qui font le bol.',
        pairing: 'Étape 2',
      },
      {
        number: 'III',
        title: 'Sauce it',
        accent: 'le punch',
        body: 'Roasted sesame, wasabi aioli, tropical coco, sriracha mayo, ponzu citron…',
        pairing: 'Étape 3',
      },
      {
        number: 'IV',
        title: 'Finish it',
        accent: 'les toppings',
        body: 'Edamame, avocat, mangue, gingembre, betterave et tout le reste.',
        pairing: 'Étape 4',
      },
      {
        number: 'V',
        title: 'À côté',
        accent: 'smoothies & plus',
        body: 'Smoothies tropicaux, wraps, gaufres, glaces et cafés pour varier.',
        pairing: 'Extras',
      },
    ],
  },
  chef: {
    eyebrow: '03 — Histoire',
    heading: {
      line1: 'Poke Bar Nouméa.',
      accent: 'Un spot frais,',
      rest: 'fait pour composer.',
    },
    quote:
      'On voulait un endroit simple : des bols colorés, des sauces maison, et la mer pas loin.',
    timeline: [
      { year: 'Quais', text: 'Ouverture du spot Les Quais — galerie commerciale, rez-de-chaussée.' },
      { year: 'Menu', text: 'Pokés à composer, smoothies, wraps, gaufres et douceurs.' },
      { year: 'Vibe', text: 'Fresh · Healthy · Tasty — couleurs vives, service casual.' },
      { year: 'Suite', text: 'D’autres adresses à venir (Cocotiers, Ouen Toro) quand ce sera prêt.' },
    ],
  },
  interior: {
    eyebrow: '04 — Lieu',
    heading: {
      lead: 'Les Quais,',
      accent: 'Nouméa,',
      rest: 'face à la mer.',
    },
    features: [
      {
        title: 'Adresse',
        body: 'Bâtiment A — Rez-de-chaussée, Galerie Commerciale Les Quais, 8 rue Jules Ferry, 98800 Nouméa.',
      },
      {
        title: 'Horaires',
        body: 'Lun–Mer 10h–15h · Jeu–Ven 10h–15h & 18h–21h · Sam 9h–15h & 18h–21h · Fermé dimanche.',
      },
      {
        title: 'Ambiance',
        body: 'Un comptoir coloré pour emporter ou savourer sur place, entre deux courses en ville.',
      },
    ],
  },
  contact: {
    eyebrow: '05 — Contact',
    heading: ['Une question ?', 'Un bol à emporter ?', 'Appelez-nous.'],
    body: 'Pas de réservation en ligne — passez nous voir aux Quais, ou contactez-nous directement.',
    confirmation: 'On répond vite par téléphone, WhatsApp ou e-mail.',
  },
  footer: {
    tagline: 'Instant poké face à la mer — Les Quais, Nouméa.',
    signal: 'Fresh · Healthy · Tasty',
  },
} as const;

export type HomeContent = typeof homeContent;
