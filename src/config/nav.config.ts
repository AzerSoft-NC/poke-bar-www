export type NavItem = {
  label: string;
  href: string;
};

/** Landing in-page anchors + dedicated menu route */
export const navItems: NavItem[] = [
  { label: 'Offre', href: '/#offre' },
  { label: 'Menu', href: '/menu' },
  { label: 'Lieu', href: '/#lieu' },
  { label: 'Contact', href: '/#contact' },
];
