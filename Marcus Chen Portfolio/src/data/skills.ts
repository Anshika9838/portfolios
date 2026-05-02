export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface TechItem {
  name: string;
  color: string;
  category: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 98 },
      { name: 'TypeScript', level: 95 },
      { name: 'Vue.js / Nuxt', level: 85 },
      { name: 'Tailwind CSS', level: 96 },
      { name: 'Framer Motion', level: 90 },
      { name: 'Three.js / WebGL', level: 78 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 94 },
      { name: 'Go / Gin', level: 88 },
      { name: 'Rust / Actix', level: 75 },
      { name: 'Python / FastAPI', level: 82 },
      { name: 'PostgreSQL', level: 92 },
      { name: 'Redis', level: 86 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'AWS / GCP', level: 90 },
      { name: 'Docker / Kubernetes', level: 88 },
      { name: 'Terraform', level: 82 },
      { name: 'CI/CD (GitHub Actions)', level: 94 },
      { name: 'Linux / Bash', level: 90 },
      { name: 'Monitoring (Grafana)', level: 80 },
    ],
  },
  {
    title: 'Design & Tools',
    skills: [
      { name: 'Figma', level: 92 },
      { name: 'UI/UX Design', level: 88 },
      { name: 'Design Systems', level: 95 },
      { name: 'Git / GitHub', level: 96 },
      { name: 'Jest / Testing', level: 90 },
      { name: 'Storybook', level: 87 },
    ],
  },
];

export const techStack: TechItem[] = [
  { name: 'React', color: '#61dafb', category: 'Frontend' },
  { name: 'TypeScript', color: '#3178c6', category: 'Frontend' },
  { name: 'Next.js', color: '#ffffff', category: 'Frontend' },
  { name: 'Node.js', color: '#339933', category: 'Backend' },
  { name: 'Go', color: '#00ADD8', category: 'Backend' },
  { name: 'PostgreSQL', color: '#336791', category: 'Backend' },
  { name: 'Redis', color: '#dc382d', category: 'Backend' },
  { name: 'Docker', color: '#2496ed', category: 'DevOps' },
  { name: 'Kubernetes', color: '#326ce5', category: 'DevOps' },
  { name: 'AWS', color: '#ff9900', category: 'DevOps' },
  { name: 'Figma', color: '#f24e1e', category: 'Design' },
  { name: 'GitHub', color: '#ffffff', category: 'Tools' },
];
