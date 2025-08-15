export const SITE_CONFIG = {
  name: 'Abdullah Fahim',
  title: 'Abdullah Fahim - Personal Website',
  description: 'Personal website with gallery, routine, and contact features',
  url: 'https://your-domain.com',
  email: 'abdullahfahim139549@gmail.com',
  social: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    github: '#'
  }
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', labelBn: 'হোম', href: '/home.html' },
  { id: 'gallery', label: 'Gallery', labelBn: 'গ্যালারি', href: '/gallery.html' },
  { id: 'contact', label: 'Contact', labelBn: 'যোগাযোগ', href: '/contact.html' },
  { id: 'routine', label: 'Routine', labelBn: 'রুটিন', href: '/routine.html' }
];

export const SUPPORTED_LANGUAGES = ['en', 'bn'] as const;
export type Language = typeof SUPPORTED_LANGUAGES[number];

export const DEFAULT_LANGUAGE: Language = 'en';