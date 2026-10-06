import type { Messages } from './types';

export const fr: Messages = {
  meta: {
    title: 'Poke Bar — Nouméa',
    description:
      'Poke Bar à Nouméa — pokés personnalisables, smoothies, bowls et plus encore, aux Quais.',
    ogLocale: 'fr_NC',
    htmlLang: 'fr',
  },
  ui: {
    skipToContent: 'Aller au contenu',
    navAria: 'Navigation principale',
    mobileNavAria: 'Navigation mobile',
    menuToggle: 'Menu',
    contact: 'Contact',
    brandHomeAria: 'Poke Bar — accueil',
  },
  nav: [
    { label: 'Concept', href: '#concept' },
    { label: 'Menu', href: '#menu' },
    { label: 'Histoire', href: '#chef' },
    { label: 'Instagram', href: '#interior' },
  ],
  home: {
    hero: {
      eyebrow: 'Les Quais — Nouméa',
      title: ['Instant poké', 'face à la mer', 'à composer.'],
      body: 'Fresh · Healthy · Tasty. Composez votre bol, sippez un smoothie, et profitez du spot aux Quais.',
      action: 'Voir le menu',
      secondaryAction: 'Appeler',
      imageAlt: 'Poké bowl et smoothie Poke Bar Nouméa',
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
    marqueeAria: 'Valeurs Poke Bar',
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
      imageAlt: 'Poké au poulet Poke Bar',
    },
    tasting: {
      eyebrow: '02 — Menu',
      heading: ['Create your poke,', 'en quatre gestes,', 'plein de couleurs.'],
      note: 'Aperçu des étapes et catégories. Le détail complet est dans le PDF menu.',
      caption: 'Mise — Les Quais',
      pdfLabel: 'Télécharger le menu PDF',
      asideAria: 'Notes menu',
      menuImageAlt: 'Menu Create your poke en quatre étapes',
      courses: [
        { number: 'I', title: 'Base it', accent: 'le fond du bol' },
        { number: 'II', title: 'Poke it', accent: 'la protéine' },
        { number: 'III', title: 'Sauce it', accent: 'le punch' },
        { number: 'IV', title: 'Finish it', accent: 'les toppings' },
        { number: 'V', title: 'À côté', accent: 'smoothies & plus' },
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
      imageAlt: 'Poké thon Poke Bar Nouméa',
      timeline: [
        {
          year: 'Quais',
          text: 'Ouverture du spot Les Quais — galerie commerciale, rez-de-chaussée.',
        },
        {
          year: 'Menu',
          text: 'Pokés à composer, smoothies, wraps, gaufres et douceurs.',
        },
        {
          year: 'Vibe',
          text: 'Fresh · Healthy · Tasty — couleurs vives, service casual.',
        },
        {
          year: 'Suite',
          text: 'D’autres adresses à venir (Cocotiers, Ouen Toro) quand ce sera prêt.',
        },
      ],
    },
    interior: {
      eyebrow: '04 — Instagram',
      heading: {
        lead: 'Sur le fil',
        accent: '@pokebar_cocotiers',
        rest: '— 18 moments frais.',
      },
      profileCta: 'Voir le profil Instagram',
      gridAria: 'Publications Instagram récentes @pokebar_cocotiers',
      postAria: (index) => `Publication Instagram ${index + 1}`,
    },
  },
  footer: {
    tagline: 'Instant poké face à la mer — Les Quais, Nouméa.',
    signal: 'Fresh · Healthy · Tasty',
    findUs: 'Nous trouver',
    hours: 'Horaires',
    networks: 'Réseaux',
    closed: 'Dimanche',
    closedPrefix: 'Fermé',
    mapsAria: 'Ouvrir dans Maps',
    rights: 'Tous droits réservés.',
    hourLines: [
      { label: 'Lun–Mer', value: '10h–15h' },
      { label: 'Jeu–Ven', value: '10h–15h & 18h–21h' },
      { label: 'Sam', value: '9h–15h & 18h–21h' },
    ],
    legal: [
      { label: 'Mentions légales', href: '/mentions' },
      { label: 'Confidentialité', href: '/confidentialite' },
    ],
  },
  legalPage: {
    backHome: '← Accueil',
    updated: 'Mise à jour',
  },
  notFound: {
    title: 'Page introuvable',
    description: 'Cette page n’existe pas.',
    heading: 'Oups, ce bol est vide',
    body: 'La page demandée n’existe pas. Revenez à l’accueil ou appelez-nous directement.',
    home: 'Retour à l’accueil',
    call: 'Appeler',
  },
};
