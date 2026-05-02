import { BookOpen, Code2, Layers, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  icon: LucideIcon;
  color: string;
  featured: boolean;
  views: string;
}

export const articles: Article[] = [
  {
    title: 'Building a Real-Time Sync Engine from Scratch',
    excerpt: 'A deep dive into operational transformation, conflict resolution strategies, and how to achieve sub-50ms latency in collaborative applications.',
    date: 'Dec 15, 2024',
    readTime: '12 min read',
    category: 'Engineering',
    icon: Zap,
    color: '#3ecf8e',
    featured: true,
    views: '24.5k',
  },
  {
    title: 'The Art of Design Systems at Scale',
    excerpt: 'Lessons learned from building Vercel\'s design system — from token architecture to component APIs that scale across 12 products.',
    date: 'Nov 28, 2024',
    readTime: '8 min read',
    category: 'Design',
    icon: Layers,
    color: '#8b5cf6',
    featured: false,
    views: '18.2k',
  },
  {
    title: 'Rust for JavaScript Developers: A Practical Guide',
    excerpt: 'Why I rewrote a critical service from Node.js to Rust and the performance gains we achieved. A beginner-friendly introduction to Rust concepts.',
    date: 'Oct 10, 2024',
    readTime: '15 min read',
    category: 'Tutorial',
    icon: Code2,
    color: '#f59e0b',
    featured: false,
    views: '31.7k',
  },
  {
    title: 'Micro-Frontends: Patterns That Actually Work',
    excerpt: 'After 3 years of running micro-frontends in production, here are the patterns that worked and the anti-patterns to avoid at all costs.',
    date: 'Sep 5, 2024',
    readTime: '10 min read',
    category: 'Architecture',
    icon: BookOpen,
    color: '#ec4899',
    featured: false,
    views: '15.3k',
  },
];
