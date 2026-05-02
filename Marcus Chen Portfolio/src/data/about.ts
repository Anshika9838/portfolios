import { MapPin, Calendar, Coffee, Award, BookOpen, Heart, Code2, Palette, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

export interface Highlight {
  icon: LucideIcon;
  text: string;
}

export interface Expertise {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const stats: Stat[] = [
  { icon: Calendar, value: 8, suffix: '+', label: 'Years Experience' },
  { icon: Award, value: 47, suffix: '', label: 'Projects Shipped' },
  { icon: Coffee, value: 12000, suffix: '+', label: 'Cups of Coffee' },
  { icon: BookOpen, value: 35, suffix: '+', label: 'Tech Articles' },
];

export const highlights: Highlight[] = [
  { icon: MapPin, text: 'Based in San Francisco, CA' },
  { icon: Heart, text: 'Passionate about open source' },
  { icon: Award, text: 'Google Developer Expert' },
];

export const expertise: Expertise[] = [
  { icon: Code2, title: 'Engineering', desc: 'Scalable architectures, clean code, performance optimization' },
  { icon: Palette, title: 'Design', desc: 'Design systems, user research, pixel-perfect interfaces' },
  { icon: Rocket, title: 'Leadership', desc: 'Team mentorship, technical strategy, cross-functional collaboration' },
];
