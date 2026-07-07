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
    'Trust & Safety and Integrity Systems',
    'Agentic AI Tools, Workflows & Platforms',
    'Reskilling Engineers on Agentic AI',
    'Code Quality & Developer Productivity',
    'Technical Leadership & Community Building',
  ],

  // Press & public work — newest first. topic drives the badge color.
  press: [
    {
      outlet: 'Integrity Workshop · KDD 2026',
      date: 'Aug 2026',
      topic: 'Invited Talk',
      title: 'Agentic AI Integrity Support: conversational assistance at scale',
      blurb: 'Deployed on Facebook and Messenger to help users affected by enforcement understand policies and navigate remediation.',
      url: 'https://sites.google.com/view/integrity-workshop-2026',
    },
    {
      outlet: 'Astryx Blog',
      date: 'Jun 2026',
      topic: 'AI · Design Systems',
      title: 'Introducing Astryx: an open source design system built for how we build now',
      blurb: 'Meta’s open source, AI-fluent design system — now available in Beta.',
      url: 'https://astryx.atmeta.com/blog/introducing-astryx',
    },
    {
      outlet: 'TechCrunch',
      date: 'Dec 2025',
      topic: 'AI',
      title: 'Meta centralizes Facebook and Instagram support, tests AI support assistant',
      blurb: 'A new support hub connecting users to security tools, account recovery, and an AI assistant.',
      url: 'https://techcrunch.com/2025/12/04/meta-centralizes-facebook-and-instagram-support-tests-ai-support-assistant/',
    },
    {
      outlet: 'TechCrunch',
      date: 'Dec 2024',
      topic: 'Trust & Safety',
      title: 'Meta eases up on issuing ‘first strikes’ for Facebook users and Instagram creators',
      blurb: 'Expanding a more forgiving enforcement policy for creators after over-moderation.',
      url: 'https://techcrunch.com/2024/12/05/meta-eases-up-on-issuing-strikes-for-facebook-users-and-instagram-creators/',
    },
    {
      outlet: 'TechCrunch',
      date: 'Aug 2024',
      topic: 'Trust & Safety',
      title: 'Facebook creators have a new way to avoid ‘jail’',
      blurb: 'A new option that helps creators avoid restrictions on a first violation.',
      url: 'https://techcrunch.com/2024/08/07/facebook-creators-have-a-new-way-to-avoid-jail/',
    },
    {
      outlet: 'TechCrunch',
      date: 'Aug 2017',
      topic: 'Integrity',
      title: 'Facebook downranks video clickbait and fake play buttons',
      blurb: 'Cracking down on deceptive fake play buttons and clickbait in News Feed.',
      url: 'https://techcrunch.com/2017/08/17/facebook-fake-play-buttons/',
    },
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
