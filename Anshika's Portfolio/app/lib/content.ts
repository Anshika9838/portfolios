export const hero = {
  eyebrow: "Portfolio — 2026",
  name: "Anshika Singh",
  sub: "Web Developer · Software Engineer · Problem Solver. Building scalable solutions, crafting clean code, engineering impact — I don't just code, I craft experiences.",
  location: "Gorakhpur, India",
  education: "B.Tech CSE",
  ctaPrimary: "View selected work",
  ctaSecondary: "Get in touch",
};

export const about = {
  eyebrow: "01 — About",
  heading: "Structured thinking, quietly engineered.",
  paragraphs: [
    "Anshika is a product-minded full-stack engineer with a frontend heart and a security conscience — someone who thinks in TypeScript interfaces, builds Python backends, and reaches for applied AI only where it earns its place.",
    "She is a member of Team Paradox, shipping real products rather than prototypes that never leave the lab — from disposable email infrastructure running in production to fraud-detection tooling built for the browser.",
  ],
  pullQuote: "Code is not just syntax — it's structured thinking.",
  chips: ["Strategy", "Discipline", "Clarity", "Continuous improvement"],
};

export const stats = [
  { value: 19, suffix: "", label: "Public repositories" },
  { value: 15, suffix: "", label: "Original projects" },
  { value: 52, suffix: "", label: "Contributions / yr" },
  { value: 2, suffix: "", label: "Live deployments" },
  { value: 6, suffix: "+", label: "Languages used" },
  { value: 2025, suffix: "", label: "Building since" },
];

export type WorkItem = {
  title: string;
  description: string;
  tech: string;
  status: "LIVE" | "BUILDING" | null;
  icon: string;
  link?: string;
  linkLabel?: string;
  tag: string;
};

export const work: WorkItem[] = [
  {
    title: "Temp-Mail",
    description:
      "A disposable email service built for privacy-first workflows — 24-hour inboxes, UUID session isolation, sandboxed HTML rendering, XSS sanitization, forwarding, and rate limiting.",
    tech: "React · TypeScript · Vite",
    status: "LIVE",
    icon: "solar:letter-linear",
    link: "https://anshika.teamparadox.in",
    linkLabel: "anshika.teamparadox.in",
    tag: "Infrastructure",
  },
  {
    title: "Phishing & Fraud Detection Extension",
    description:
      "A browser extension performing depth analysis and scoring against phishing and fraud patterns, built with Team Paradox and currently in active development.",
    tech: "Flutter · Dart · Python · JS · C++",
    status: "BUILDING",
    icon: "solar:shield-check-linear",
    tag: "Team Paradox",
  },
  {
    title: "BlueAlert",
    description:
      "Built for Smart India Hackathon 2025 — a coordinated alerting system carried from prototype to a deployed production build.",
    tech: "React · TypeScript",
    status: "LIVE",
    icon: "solar:rocket-linear",
    link: "https://bluealert.vercel.app",
    linkLabel: "bluealert.vercel.app",
    tag: "Smart India Hackathon",
  },
  {
    title: "StudyBuddy",
    description:
      "A calm, focused student dashboard for planning, tracking, and studying with intention rather than noise.",
    tech: "React 19 · Tailwind 4 · Framer Motion · Supabase · Zustand",
    status: null,
    icon: "solar:widget-linear",
    tag: "Product",
  },
  {
    title: "OpenPulse",
    description:
      "A social platform designed around open-source contribution — visibility, recognition, and momentum for maintainers.",
    tech: "FastAPI · SQLite · TypeScript",
    status: null,
    icon: "solar:code-linear",
    tag: "Platform",
  },
  {
    title: "Crop Disease Detection",
    description:
      "An applied-AI tool identifying species and disease from a photograph, then recommending treatment and estimating yield loss.",
    tech: "Streamlit · Google Gemini",
    status: null,
    icon: "solar:cpu-linear",
    tag: "Applied AI",
  },
];

export const stackBars = [
  { label: "TypeScript", pct: 40 },
  { label: "HTML", pct: 25 },
  { label: "Python", pct: 11 },
  { label: "Dart", pct: 8 },
  { label: "JavaScript", pct: 7 },
  { label: "CSS", pct: 6 },
  { label: "Other", pct: 3 },
];

export const stackGroups = [
  {
    title: "Frontend",
    icon: "solar:widget-linear",
    items: ["React 19", "TypeScript", "Vite", "Tailwind 4", "Framer Motion", "Zustand", "Iconify"],
  },
  {
    title: "Backend",
    icon: "solar:server-linear",
    items: ["Python", "FastAPI", "Flask", "Supabase", "SQLite", "Socket.IO"],
  },
  {
    title: "AI",
    icon: "solar:cpu-linear",
    items: ["Gemini", "DeepFace", "Streamlit"],
  },
  {
    title: "Craft & Ops",
    icon: "solar:shield-check-linear",
    items: ["Git", "Vercel", "Google Cloud", "XSS sanitization", "Session isolation", "Rate limiting", "Fraud scoring"],
  },
];

export const timeline = [
  {
    year: "2025",
    title: "First commits & SIH stage",
    body: "Early open-source commits alongside a Smart India Hackathon stage — the starting line.",
  },
  {
    year: "Mar 2026",
    title: "Eleven repos in a month",
    body: "A dense sprint that produced Temp-Mail, OpenPulse, and the early StudyBuddy era.",
  },
  {
    year: "Apr – May 2026",
    title: "Sandboxes & dashboards",
    body: "An openUPI checkout sandbox, StudyBuddy, and a run of portfolio explorations.",
  },
  {
    year: "Aug 2026 — Now",
    title: "Phishing & fraud detection",
    body: "Building browser-depth security tooling with Team Paradox.",
  },
];

export const currentlySharpening = "Currently sharpening: DSA with Java, testing, and documentation.";

export const contact = {
  eyebrow: "05 — Contact",
  heading: "Let's build something trustworthy.",
  email: "anshikasinghclg@gmail.com",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Anshika9838" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anshika-singh-aa6a7a330" },
  { label: "Instagram", href: "https://www.instagram.com/anshikasingh_215" },
  { label: "Email", href: "mailto:anshikasinghclg@gmail.com" },
  { label: "Temp-Mail", href: "https://anshika.teamparadox.in" },
];

export const navLinks = [
  { id: "about", label: "About", number: "01" },
  { id: "work", label: "Work", number: "02" },
  { id: "stack", label: "Stack", number: "03" },
  { id: "journey", label: "Journey", number: "04" },
  { id: "contact", label: "Contact", number: "05" },
];
