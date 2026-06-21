export const profile = {
  name: "Siphiwayinkhosi Mahlalela",
  shortName: "Siphiwo",
  role: "Software Engineer · Web Developer · AI Automation Builder",
  location: "Eswatini",
  email: "siphiwayinkhosi.mahlalela9646@gmail.com",
  linkedIn: "https://www.linkedin.com/in/siphiwayinkhosi-mahlalela-4a3539274/",
  github: "https://github.com/Siphiwayinkhosi",
  cv: "/files/siphiwayinkhosi-mahlalela-cv.pdf",
  phoneNumbers: [
    {
      label: "Phone",
      display: "+268 7847 3557",
      href: "tel:+26878473557",
    },
    {
      label: "Alternate phone",
      display: "+268 7939 5882",
      href: "tel:+26879395882",
    },
  ],
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    number: "01",
    title: "Websites & Landing Pages",
    description:
      "Modern, responsive, SEO-aware websites designed to build trust and turn attention into action.",
    tags: ["Responsive UX", "Performance", "Conversion"],
  },
  {
    number: "02",
    title: "Internal Business Systems",
    description:
      "Dashboards, inventory tools, finance flows, and operational systems that make day-to-day work clearer.",
    tags: ["Dashboards", "Workflows", "Operations"],
  },
  {
    number: "03",
    title: "AI Automation",
    description:
      "Practical automations for meetings, email, reporting, AI agents, and connected developer workflows.",
    tags: ["OpenAI", "Agents", "MCP"],
  },
  {
    number: "04",
    title: "SEO & Online Presence",
    description:
      "Technical SEO, structured content, local search strategy, and performance improvements built into the product.",
    tags: ["Local SEO", "Content", "Web quality"],
  },
];

export const projects = [
  {
    number: "01",
    name: "Kintscher Immobilien",
    category: "Real estate platform · SEO",
    summary:
      "A clearer, faster property website supported by city-specific landing pages and a stronger content structure.",
    problem:
      "Improve a growing real estate platform without losing sight of search visibility, conversion, and a simple customer journey.",
    contribution:
      "Built and refined React/Vite pages, local SEO landing pages, blog structure, forms, cookie flows, and performance details.",
    stack: ["React", "Vite", "SEO", "Performance"],
    value: "Improving visibility, usability, and the path from search to enquiry.",
    status: "Client platform",
    tone: "amber",
    preview: {
      src: "/images/project-kintscher-preview.png",
      alt: "Preview of the Kintscher Immobilien property offers website",
    },
    links: {
      live: "https://kintscher-immobilien.de/",
    },
  },
  {
    number: "02",
    name: "Mtseku Transport",
    category: "Local SEO · Web strategy",
    summary:
      "A location-led transport website built to position shuttle, airport transfer, private hire, and business travel services clearly.",
    problem:
      "Compete for relevant local searches and turn online visibility into qualified transport enquiries across Cape Town and Johannesburg.",
    contribution:
      "Designed and built a polished landing experience with service messaging, WhatsApp booking paths, contact flows, and local SEO positioning.",
    stack: ["React", "Vite", "Local SEO", "Conversion UX"],
    value: "Helps customers understand the service quickly and start a booking conversation.",
    status: "Live website",
    tone: "rose",
    preview: {
      src: "/images/project-mtseku-preview.png",
      alt: "Preview of the Mtseku Transport Services website",
    },
    links: {
      live: "https://www.mtsekutransport.co.za/",
    },
  },
  {
    number: "03",
    name: "MicroFlow",
    category: "Small business system · Offline sync",
    summary:
      "A simple app that helps small shops run sales, invoices, stock, customers, and reports without complicated accounting software.",
    problem:
      "Small shops need a practical business system that works on a phone or browser, keeps records safe, and does not require heavy accounting tools.",
    contribution:
      "Built the product flow around local-first usage, offline support, sales tracking, inventory, reports, and cloud sync for safer records.",
    stack: ["React", "PWA", "Offline sync", "Cloud backup"],
    value: "Gives a small business a lightweight operating system for daily records and decisions.",
    status: "Live application",
    tone: "slate",
    preview: {
      src: "/images/project-microflow-preview.svg",
      alt: "Preview of the MicroFlow small business dashboard",
    },
    links: {
      live: "https://microflow.16.28.64.165.sslip.io/",
    },
  },
  {
    number: "04",
    name: "Internal Phone Application",
    category: "Internal tool · Global calling",
    summary:
      "An internal calling tool that can call numbers worldwide while using a selected caller number from different countries.",
    problem:
      "The company needed a controlled way to place international calls through configurable numbers without switching between separate tools.",
    contribution:
      "Connected the calling interface to telephony APIs, caller ID routing, call controls, recent calls, and operational logging.",
    stack: ["VoIP APIs", "Caller ID routing", "React", "Internal tooling"],
    value: "Improves communication workflows with one internal interface for controlled global calling.",
    status: "Internal application",
    tone: "blue",
    preview: {
      src: "/images/project-phone-app-preview.svg",
      alt: "Preview of the internal global phone application",
    },
    links: {},
  },
  {
    number: "05",
    name: "OpenClaw Automation Gateway",
    category: "Automation · VPS operations",
    summary:
      "An OpenClaw automation gateway running 24/7 on a VPS to connect company workflows, notifications, reports, and monitoring.",
    problem:
      "Important company tasks needed to run automatically across email, reports, website checks, notifications, and files without manual follow-up.",
    contribution:
      "Configured OpenClaw with cron jobs, Python scripts, Gmail, Google Drive, Slack, Telegram, website monitoring, meeting summary alerts, and Friday PDF reports.",
    stack: ["OpenClaw", "VPS", "Cron", "Python", "Slack", "Gmail"],
    value: "Keeps repeated operational checks and reports running in the background with alerts pushed to the right channels.",
    status: "Internal automation",
    tone: "amber",
    preview: {
      images: [
        "/images/project-openclaw-drive-preview.svg",
        "/images/project-openclaw-search-preview.svg",
        "/images/project-openclaw-report-preview.svg",
      ],
      alt: "Preview of OpenClaw automation notifications and reports",
    },
    links: {},
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Vite",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive design",
      "UI design",
      "Design systems",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "MongoDB",
      "PostgreSQL basics",
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      "OpenAI API",
      "Whisper",
      "AI agents",
      "Meeting summarization",
      "MCP workflows",
      "Codex",
      "Cursor",
      "Claude Code",
      "OpenCode",
      "OpenClaw",
    ],
  },
  {
    title: "Tools & Delivery",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Linux / Ubuntu",
      "AWS",
      "VPS hosting",
      "Hostinger",
      "Vercel",
    ],
  },
  {
    title: "SEO & Web Quality",
    skills: [
      "Technical SEO",
      "Page speed",
      "Structured content",
      "Accessible UX",
      "Local SEO",
    ],
  },
  {
    title: "Product Practice",
    skills: [
      "Problem solving",
      "Product thinking",
      "Product design",
      "Client communication",
      "Debugging",
      "Documentation",
      "Business understanding",
    ],
  },
];

export const experience = [
  {
    period: "Now",
    title: "Software Engineer / Web Developer",
    context: "Independent projects & client work",
    description:
      "I work across websites, internal tools, SEO, deployment, and full-stack product foundations, adapting the solution to the real business need.",
  },
  {
    period: "Current focus",
    title: "AI & Automation Builder",
    context: "Applied AI workflows",
    description:
      "I build practical systems around transcription, summarization, email, MCP connections, and AI-assisted developer workflows.",
  },
  {
    period: "Product work",
    title: "Operations & Workflow Design",
    context: "Internal business applications",
    description:
      "I help shape transaction-heavy flows with attention to permissions, usability, data integrity, and clear operational states.",
  },
];

export const recruiterPoints = [
  "I build real projects, not only tutorials.",
  "I understand both code and business goals.",
  "I can work across frontend, backend, automation, SEO, and deployment.",
  "I learn fast, debug methodically, and document the work.",
  "I care about usability, performance, and maintainable structure.",
];

export const clientServices = [
  "Business websites",
  "Landing pages",
  "Internal dashboards",
  "AI workflow automation",
  "Meeting summary systems",
  "SEO & online visibility",
];
