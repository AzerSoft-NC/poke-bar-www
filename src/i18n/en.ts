import type { Messages } from './types';

export const en: Messages = {
  meta: {
    title: 'Poke Bar — Nouméa',
    description:
      'Poke Bar in Nouméa — build-your-own poké bowls, smoothies, and more at Les Quais.',
    ogLocale: 'en_NC',
    htmlLang: 'en',
  },
  ui: {
    skipToContent: 'Skip to content',
    navAria: 'Main navigation',
    mobileNavAria: 'Mobile navigation',
    menuToggle: 'Menu',
    contact: 'Contact',
    brandHomeAria: 'Poke Bar — home',
  },
  nav: [
    { label: 'Concept', href: '#concept' },
    { label: 'Menu', href: '#menu' },
    { label: 'Story', href: '#chef' },
    { label: 'Instagram', href: '#interior' },
  ],
  home: {
    hero: {
      eyebrow: 'Les Quais — Nouméa',
      title: ['Poké moment', 'by the sea,', 'yours to build.'],
      body: 'Fresh · Healthy · Tasty. Build your bowl, sip a smoothie, and enjoy the spot at Les Quais.',
      action: 'View the menu',
      secondaryAction: 'Call',
      imageAlt: 'Poke Bar Nouméa poké bowl and smoothie',
    },
    marquee: [
      'Poké',
      'Fresh',
      'Healthy',
      'Tasty',
      'Smoothie',
      'Wrap',
      'Waffle',
      'Bowl',
      'House sauce',
      'Nouméa',
    ],
    marqueeAria: 'Poke Bar values',
    concept: {
      eyebrow: '01 — Concept',
      heading: ['Build your bowl,', 'pick your sauce,', 'leave with a smile.'],
      body: [
        'At Poke Bar, it starts with you: a base, a protein, bold toppings, and the sauce that makes it. Fresh daily, casual pace.',
        'Smoothies, wraps, bowls, waffles, and coffee round out the menu — for a quick lunch or a sunny break at Les Quais.',
      ],
      caption: 'Fig. 01 — Signature bowl',
      quote: 'Fresh · Healthy · Tasty — that’s the whole program.',
      quoteByline: 'Poke Bar Nouméa',
      imageAlt: 'Poke Bar chicken poké',
    },
    tasting: {
      eyebrow: '02 — Menu',
      heading: ['Create your poke,', 'in four moves,', 'full of color.'],
      note: 'A quick look at the steps and categories. Full detail is in the menu PDF.',
      caption: 'Setting — Les Quais',
      pdfLabel: 'Download the menu PDF',
      asideAria: 'Menu notes',
      menuImageAlt: 'Create your poke menu in four steps',
      courses: [
        { number: 'I', title: 'Base it', accent: 'the bowl foundation' },
        { number: 'II', title: 'Poke it', accent: 'the protein' },
        { number: 'III', title: 'Sauce it', accent: 'the punch' },
        { number: 'IV', title: 'Finish it', accent: 'the toppings' },
        { number: 'V', title: 'On the side', accent: 'smoothies & more' },
      ],
    },
    chef: {
      eyebrow: '03 — Story',
      heading: {
        line1: 'Poke Bar Nouméa.',
        accent: 'A fresh spot,',
        rest: 'made for building.',
      },
      quote:
        'We wanted somewhere simple: colorful bowls, house sauces, and the sea nearby.',
      imageAlt: 'Poke Bar Nouméa tuna poké',
      timeline: [
        {
          year: 'Quais',
          text: 'Opening at Les Quais — shopping gallery, ground floor.',
        },
        {
          year: 'Menu',
          text: 'Build-your-own poké, smoothies, wraps, waffles, and sweets.',
        },
        {
          year: 'Vibe',
          text: 'Fresh · Healthy · Tasty — bright colors, casual service.',
        },
        {
          year: 'Next',
          text: 'More locations to come (Cocotiers, Ouen Toro) when ready.',
        },
      ],
    },
    interior: {
      eyebrow: '04 — Instagram',
      heading: {
        lead: 'On the feed',
        accent: '@pokebar_cocotiers',
        rest: '— 18 fresh moments.',
      },
      profileCta: 'View Instagram profile',
      gridAria: 'Recent Instagram posts @pokebar_cocotiers',
      postAria: (index) => `Instagram post ${index + 1}`,
    },
  },
  footer: {
    tagline: 'Poké by the sea — Les Quais, Nouméa.',
    signal: 'Fresh · Healthy · Tasty',
    findUs: 'Find us',
    hours: 'Hours',
    networks: 'Social',
    closed: 'Sunday',
    closedPrefix: 'Closed',
    mapsAria: 'Open in Maps',
    rights: 'All rights reserved.',
    hourLines: [
      { label: 'Mon–Wed', value: '10am–3pm' },
      { label: 'Thu–Fri', value: '10am–3pm & 6pm–9pm' },
      { label: 'Sat', value: '9am–3pm & 6pm–9pm' },
    ],
    legal: [
      { label: 'Legal notice', href: '/mentions' },
      { label: 'Privacy', href: '/confidentialite' },
    ],
  },
  legalPage: {
    backHome: '← Home',
    updated: 'Updated',
  },
  notFound: {
    title: 'Page not found',
    description: 'This page does not exist.',
    heading: 'Oops, this bowl is empty',
    body: 'The page you asked for does not exist. Head home or call us directly.',
    home: 'Back to home',
    call: 'Call',
  },
};
