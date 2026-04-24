export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export const profile = {
  name: 'dani Janw',
  headline: 'CS student & web developer in the making',
  location: 'Singapore',
  email: 'dani.janw@example.com'
};

export const socials = {
  github: 'https://github.com/unknown-user-status',
  linkedin: 'https://www.linkedin.com/in/',
  twitter: 'https://x.com/',
  email: 'mailto:dani.janw@example.com'
};

export const projects: Project[] = [
  {
    title: 'StudyLoop',
    description:
      'A minimalist study timer with focus streaks, synced tasks, and weekly analytics. My first full-stack side project.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    href: '#'
  },
  {
    title: 'Campus Compass',
    description:
      'A small campus navigation PWA that helps freshmen find classrooms, cafes, and study spots via a searchable map.',
    tags: ['React', 'Leaflet', 'PWA'],
    href: '#'
  },
  {
    title: 'Dorm Dinner',
    description:
      'Recipe generator that takes what you have in your fridge and suggests 3 quick meals — built during a 24h hackathon.',
    tags: ['Next.js', 'OpenAI API', 'Tailwind'],
    href: '#'
  },
  {
    title: 'ByteNotes',
    description:
      'Tiny markdown note app with keyboard-first navigation and local-first storage. Great for class notes.',
    tags: ['React', 'IndexedDB', 'Vite'],
    href: '#'
  }
];

export const skills = [
  'JavaScript / TypeScript',
  'React / Next.js',
  'HTML + CSS / Tailwind',
  'Node.js',
  'Python',
  'Git + GitHub',
  'REST APIs',
  'Figma'
];

export const education = [
  {
    school: 'National University',
    degree: 'BSc Computer Science',
    time: '2024 — 2028 (expected)',
    details: [
      'Relevant coursework: Data Structures, Algorithms, Web Development, Databases, Operating Systems.',
      'GPA: 3.8 / 4.0 · Dean’s List 2024, 2025.'
    ]
  },
  {
    school: 'Riverside Junior College',
    degree: 'High School Diploma, STEM track',
    time: '2022 — 2024',
    details: ['Graduated with distinction in Mathematics and Computing.']
  }
];

export const certifications = [
  { name: 'Meta Front-End Developer', issuer: 'Coursera · Meta', time: '2025' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', time: '2025' },
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp', time: '2024' }
];

export const achievements = [
  'Top 5 Finalist — NUSHack ’25 (120+ teams).',
  'Dean’s List — National University, 2024 & 2025.',
  'Winner, Best UI — University Web Dev Jam 2024.',
  'Open-source contributor — 20+ merged PRs across small OSS projects.'
];

export const experience = [
  {
    title: 'Frontend Intern',
    org: 'Acme Startup',
    time: 'Summer 2025',
    details: [
      'Shipped 6 reusable React components adopted across 3 product pages.',
      'Improved Lighthouse performance score from 72 → 94 on the marketing site.'
    ]
  },
  {
    title: 'Hackathon Finalist',
    org: 'NUSHack ’25',
    time: 'Mar 2025',
    details: [
      'Top 5 of 120 teams with Dorm Dinner, an AI recipe assistant for students.',
      'Led frontend and shipped a working demo in under 24 hours.'
    ]
  }
];
