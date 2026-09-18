import profileImage from './images/profile.png';
import homelabLogo from './images/homelab-logo.png';
import secondBrainLogo from './images/second-brain-logo.png';
import voyageLogo from './images/voyage-logo.svg';
import voyageLogoLight from './images/voyage-logo-light.svg';

const contactEmail = 'mohamedhafdiidrissi@gmail.com';

export const content = {
  site: {
    name: 'Mohamed Hafdi Idrissi',
    role: 'Software Developer',
    email: contactEmail,
    resumeUrl: '',
    logo: 'MHI',
  },

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#jobs' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],

  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-h-idrissi/', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/mhd-hi/', icon: 'github' },
    { label: 'Email', href: `mailto:${contactEmail}`, icon: 'mail' },
    { label: 'Devpost', href: 'https://devpost.com/mhd-hi', icon: 'devpost' },
  ],

  hero: {
    greeting: "Hey, I'm",
    description: {
      before: 'I’m a software engineering student at ',
      linkLabel: 'ÉTS',
      link: 'https://www.etsmtl.ca/',
      after: ' who enjoys turning messy problems into useful products.',
    },
    resumeLabel: 'View Resume',
  },

  about: {
    title: 'About Me',
    introduction: {
      before: 'I’m a software developer and ',
      linkLabel: 'Génie+',
      link: 'https://www.etsmtl.ca/en/student-experience/clubs-etudiants/genie',
      between: ' student at ',
      schoolLabel: 'ÉTS',
      schoolLink: 'https://www.etsmtl.ca/',
      after: '. I like working close to the problem: understanding what people need, shaping a simple solution, and making it reliable in production.',
    },
    paragraphs: [
      'My experience spans dashboards, security tooling, payroll logic, backup monitoring, and internal SaaS platforms. Across those projects, I’ve learned that good software should feel clear to the person using it and dependable to the team maintaining it.',
      'Outside of work, I build products that help students and busy people think a little more clearly, including a course-planning platform and an AI-assisted personal productivity tool.',
    ],
    technologyIntro: 'A few tools I reach for often:',
    technologies: ['TypeScript', 'React / Next.js', 'Angular', 'C# / .NET', 'Docker', 'Kubernetes', 'PostgreSQL'],
    imageSrc: profileImage,
    imageAlt: 'Portrait of Mohamed Hafdi Idrissi',
    imagePlaceholder: 'MHI',
  },

  experience: {
    title: 'Experience',
    jobs: [
      {
        company: 'Sherweb',
        role: 'Software Developer',
        period: 'Winter 2025 · Remote',
        companyUrl: 'https://www.sherweb.com/',
        details: [
          'Built an Angular dashboard that brought Microsoft 365 tenant status, subscriptions, and actionable insights into one view.',
          'Centralized user activity for faster security monitoring with PowerShell, C# services, and MongoDB.',
          'Reduced Angular hot-reload time from roughly 10 seconds to 1 second by optimizing the development environment.',
        ],
      },
      {
        company: 'Civalgo',
        role: 'Full-Stack Web Developer',
        period: 'Winter 2023 · Hybrid',
        companyUrl: 'https://civalgo.com/',
        details: [
          'Maintained a production platform with Next.js, React, and Twilio by diagnosing issues and improving reliability.',
          'Refactored pay-rule logic with Math.js to better enforce provincial compliance and reduce payroll errors.',
        ],
      },
      {
        company: 'Groupe IDF',
        role: 'Full-Stack Web Developer',
        period: 'Jan 2022 – Jan 2023 · Hybrid',
        companyUrl: 'https://groupeidf.com/',
        details: [
          'Created a Laravel, Redis, and MinIO backup-monitoring app with proactive Microsoft Teams alerts.',
          'Built an IT-asset management tool with Laravel and MariaDB, connected to the CRM to streamline support workflows.',
        ],
      },
    ],
  },

  projects: {
    title: 'Selected Projects',
    items: [
      {
        name: 'PlanifETS',
        logo: { prefix: 'Planif', accent: 'ETS' },
        description: 'A course-planning platform for ÉTS students. It combines university data from PDFs and APIs with real-time scheduling, and includes a RAG-powered chatbot that uses semantic embeddings to recommend courses based on interests and academic goals.',
        technologies: ['Next.js', 'NestJS', 'RAG', 'Embeddings', 'Docker', 'Kubernetes'],
        url: 'https://planifets.clubapplets.ca/',
        githubUrl: 'https://github.com/ApplETS/planifETS-frontend',
        links: [
          { label: 'Live Demo', href: 'https://planifets.clubapplets.ca/' },
          { label: 'Frontend', href: 'https://github.com/ApplETS/planifETS-frontend' },
          { label: 'Backend', href: 'https://github.com/ApplETS/planifETS-backend/' },
        ],
      },
      {
        name: 'Voyage',
        logoSrc: voyageLogo,
        logoLightSrc: voyageLogoLight,
        logoWidth: 90,
        logoHeight: 40,
        description: 'An AI-assisted travel planner that turns a few interests into a trip you can actually use: places to stay, things to do, restaurants, and a day-by-day plan. Trips can be shared and planned together.',
        technologies: ['React', 'TypeScript', 'Vite', 'C#', 'MongoDB', 'Docker', 'Terraform'],
        links: [
          { label: 'Live Demo', href: 'https://voyage.mohamedhi.com' },
        ],
      },
      {
        name: 'Second Brain',
        logoSrc: secondBrainLogo,
        logoWidth: 512,
        logoHeight: 512,
        description: 'A personal productivity app that turns unstructured thoughts into scheduled tasks, with a tool-enabled chatbot for planning in natural language.',
        technologies: ['AI tools', 'TypeScript', 'Scheduling'],
        url: 'https://secondbrainets.mohamedhi.com/',
        githubUrl: 'https://github.com/mhd-hi/SecondBrain',
      },
      {
        name: 'Homelab',
        logoSrc: homelabLogo,
        logoWidth: 256,
        logoHeight: 256,
        description: 'My home infrastructure lab, built on Proxmox with LXCs and Docker Compose. I use it to run and maintain real services while working through networking, storage, monitoring, recovery, and automation, with the configuration and runbooks kept in Git.',
        technologies: ['Proxmox', 'Linux', 'LXC', 'Docker Compose', 'Terraform', 'WireGuard', 'Python'],
      },
    ],
  },

  contact: {
    eyebrow: "What's Next?",
    title: 'Get In Touch',
    paragraphs: [
      'As a full-time student, I’m open to new opportunities and looking for an internship that could grow into a permanent role.',
      'If you’re interested in working together, feel free to reach out.',
    ],
    actionLabel: 'Say Hello',
  },

  footer: {
    hostedLabel: 'Hosted on GitHub',
    hostedUrl: 'https://pages.github.com/',
    adaptedLabel: "Adapted from Brittany Chiang's v4 design",
    adaptedUrl: 'https://github.com/bchiang7/v4',
  },
};
