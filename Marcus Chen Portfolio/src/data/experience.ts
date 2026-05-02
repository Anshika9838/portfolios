export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
  color: string;
  logo: string;
}

export const experiences: Experience[] = [
  {
    company: 'Vercel',
    role: 'Staff Software Engineer',
    period: '2022 — Present',
    location: 'San Francisco, CA (Remote)',
    description: 'Leading the frontend platform team responsible for the Vercel Dashboard and design system. Architecting the next generation of developer tools used by millions of developers worldwide.',
    achievements: [
      'Redesigned the entire Vercel Dashboard, improving load times by 60%',
      'Built a component library used across 12 internal products',
      'Led migration from Pages Router to App Router for 40+ services',
      'Mentored 5 junior engineers to senior level',
    ],
    tech: ['Next.js', 'TypeScript', 'Rust', 'PostgreSQL', 'Tailwind'],
    color: '#000000',
    logo: '▲',
  },
  {
    company: 'Stripe',
    role: 'Senior Software Engineer',
    period: '2019 — 2022',
    location: 'San Francisco, CA',
    description: 'Worked on the Payments team building high-throughput financial infrastructure. Designed and implemented real-time fraud detection systems and payment orchestration layers.',
    achievements: [
      'Built real-time fraud detection reducing chargebacks by 34%',
      'Designed API gateway handling 50M+ requests/day',
      'Created internal design system adopted by 8 teams',
      'Spearheaded migration to microservices architecture',
    ],
    tech: ['React', 'Go', 'Ruby', 'Kafka', 'Redis'],
    color: '#635bff',
    logo: 'S',
  },
  {
    company: 'GitHub',
    role: 'Software Engineer II',
    period: '2017 — 2019',
    location: 'San Francisco, CA',
    description: 'Contributed to the Code Review and Collaboration team. Built features that improved the code review experience for 40M+ developers. Focused on performance and accessibility.',
    achievements: [
      'Shipped the new Pull Request review interface',
      'Improved accessibility score from 72 to 98 across core flows',
      'Reduced bundle size by 45% through code splitting',
      'Open sourced 3 internal tools with 5k+ stars',
    ],
    tech: ['Ruby on Rails', 'React', 'GraphQL', 'Elasticsearch'],
    color: '#2dba4e',
    logo: 'G',
  },
  {
    company: 'DigitalOcean',
    role: 'Software Engineer',
    period: '2016 — 2017',
    location: 'New York, NY',
    description: 'Full-stack engineer on the Cloud Platform team. Built customer-facing features for the cloud control panel and internal tooling for infrastructure management.',
    achievements: [
      'Built the Kubernetes cluster provisioning UI',
      'Implemented real-time monitoring dashboards',
      'Reduced API latency by 30% through query optimization',
    ],
    tech: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
    color: '#0080ff',
    logo: 'D',
  },
];
