// ---------------------------------------------------------------------------
// Site content — edit this file to update the website copy.
// Everything the page renders comes from here, so no component changes are
// needed to tweak text, links, or focus areas.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Baraa Hamodi',
  role: 'Principal Software Engineer at Meta',

  // Hero profile photo (lives in public/img/). `name` is used as the alt text.
  avatar: '/img/baraa.jpg',

  // Short line under the name in the hero.
  tagline:
    'I help drive the vision and strategy for AI-powered developer productivity at Meta.',

  // Keyword pills shown in the hero.
  keywords: ['Agentic AI', 'Developer Productivity', 'AI Enablement', 'Web Foundation'],

  about: [
    'I’m a Principal Software Engineer at Meta, where I help drive the vision and strategy for AI-powered developer productivity. I architect agentic AI tools, workflows, and platforms, and partner with teams across the company to weave AI into how engineers work every day.',
    'Beyond building, I lead cross-functional initiatives to reskill thousands of engineers on AI adoption — creating educational content, defining best practices, and shaping how Meta’s engineering organization leverages AI at scale. I’m energized by the intersection of artificial intelligence, code quality, and developer productivity.',
    'Previously, I spent eight years on Trust & Safety at Meta, building integrity systems and user-facing safety products at scale, and founding engineering communities that raised the bar for product quality across the organization.',
  ],

  // Focus areas — AI-forward, leading with the AI-native transformation work.
  focus: [
    'Driving AI-Native Transformation at Meta',
    'Championing Agentic AI Across Teams',
    'Agentic AI Tools, Workflows & Platforms',
    'Reskilling Engineers on AI Adoption',
    'Code Quality & Developer Productivity',
    'Technical Leadership & Community Building',
  ],

  email: 'baraa.r.hamodi@gmail.com',

  socials: {
    github: 'https://github.com/bhamodi',
    linkedin: 'https://www.linkedin.com/in/baraahamodi/',
  },

  copyrightYear: 2026,
} as const;

// In-page section anchors, used by the header nav and scroll targets.
export const sections = [
  {id: 'about', label: 'About'},
  {id: 'focus', label: 'Focus'},
  {id: 'contact', label: 'Contact'},
] as const;
