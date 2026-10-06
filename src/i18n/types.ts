export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export type NavItem = { label: string; href: string };

export type Course = {
  number: string;
  title: string;
  accent?: string;
};

export type Messages = {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
    htmlLang: string;
  };
  ui: {
    skipToContent: string;
    navAria: string;
    mobileNavAria: string;
    menuToggle: string;
    contact: string;
    brandHomeAria: string;
  };
  nav: NavItem[];
  home: {
    hero: {
      eyebrow: string;
      title: [string, string, string];
      body: string;
      action: string;
      secondaryAction: string;
      imageAlt: string;
    };
    marquee: string[];
    marqueeAria: string;
    concept: {
      eyebrow: string;
      heading: [string, string, string];
      body: string[];
      caption: string;
      quote: string;
      quoteByline: string;
      imageAlt: string;
    };
    tasting: {
      eyebrow: string;
      heading: [string, string, string];
      note: string;
      caption: string;
      pdfLabel: string;
      asideAria: string;
      menuImageAlt: string;
      courses: Course[];
    };
    chef: {
      eyebrow: string;
      heading: { line1: string; accent: string; rest: string };
      quote: string;
      imageAlt: string;
      timeline: { year: string; text: string }[];
    };
    interior: {
      eyebrow: string;
      heading: { lead: string; accent: string; rest: string };
      profileCta: string;
      gridAria: string;
      postAria: (index: number) => string;
    };
  };
  footer: {
    tagline: string;
    signal: string;
    findUs: string;
    hours: string;
    networks: string;
    closed: string;
    closedPrefix: string;
    mapsAria: string;
    rights: string;
    hourLines: { label: string; value: string }[];
    legal: { label: string; href: string }[];
  };
  legalPage: {
    backHome: string;
    updated: string;
  };
  notFound: {
    title: string;
    description: string;
    heading: string;
    body: string;
    home: string;
    call: string;
  };
};
