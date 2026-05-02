import { Layers, Globe, Database, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  stats: { stars: number; forks: number };
  links: { demo: string; github: string };
  featured: boolean;
  icon: LucideIcon;
  color: string;
}

export const categories = ['All', 'SaaS', 'Open Source', 'Design System', 'Infrastructure'];

export const projects: Project[] = [
  {
    title: 'Prisma Studio',
    category: 'SaaS',
    description: 'A visual database management tool for Prisma ORM. Built with React, TypeScript, and a custom canvas rendering engine for handling 100k+ row datasets smoothly.',
    tech: ['React', 'TypeScript', 'Canvas API', 'Prisma', 'GraphQL'],
    stats: { stars: 1240, forks: 180 },
    links: { demo: '#', github: '#' },
    featured: true,
    icon: Database,
    color: '#5a67d8',
  },
  {
    title: 'Vercel Design System',
    category: 'Design System',
    description: 'A comprehensive design system powering Vercel\'s products. Includes 60+ components, theming engine, and accessibility-first patterns used by 12 internal teams.',
    tech: ['React', 'TypeScript', 'Storybook', 'Radix UI', 'Tailwind'],
    stats: { stars: 3400, forks: 420 },
    links: { demo: '#', github: '#' },
    featured: true,
    icon: Layers,
    color: '#ffffff',
  },
  {
    title: 'RealSync',
    category: 'Infrastructure',
    description: 'Real-time data synchronization engine for collaborative applications. Handles conflict resolution, offline support, and sub-50ms latency across global regions.',
    tech: ['Go', 'WebSocket', 'Redis', 'PostgreSQL', 'Kubernetes'],
    stats: { stars: 890, forks: 95 },
    links: { demo: '#', github: '#' },
    featured: false,
    icon: Cpu,
    color: '#3ecf8e',
  },
  {
    title: 'AuthFlow',
    category: 'Open Source',
    description: 'Zero-config authentication library for Next.js applications. Supports OAuth 2.0, SAML, magic links, and biometric auth with automatic session management.',
    tech: ['Next.js', 'TypeScript', 'OAuth 2.0', 'WebAuthn', 'JWT'],
    stats: { stars: 5600, forks: 680 },
    links: { demo: '#', github: '#' },
    featured: true,
    icon: Globe,
    color: '#f59e0b',
  },
  {
    title: 'DashMetrics',
    category: 'SaaS',
    description: 'Developer analytics platform providing real-time insights into application performance, user behavior, and error tracking with customizable dashboards.',
    tech: ['Vue.js', 'Python', 'FastAPI', 'ClickHouse', 'Grafana'],
    stats: { stars: 720, forks: 110 },
    links: { demo: '#', github: '#' },
    featured: false,
    icon: Database,
    color: '#ec4899',
  },
  {
    title: 'ComponentForge',
    category: 'Design System',
    description: 'AI-powered component generator that converts Figma designs into production-ready React components with TypeScript, tests, and Storybook stories.',
    tech: ['React', 'OpenAI API', 'Figma API', 'AST', 'Babel'],
    stats: { stars: 2100, forks: 250 },
    links: { demo: '#', github: '#' },
    featured: false,
    icon: Layers,
    color: '#8b5cf6',
  },
];
