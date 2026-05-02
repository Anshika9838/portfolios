import { Mail, MapPin, Calendar, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
}

export interface Social {
  icon: LucideIcon;
  label: string;
  href: string;
  handle: string;
}

export const contactInfo: ContactInfo[] = [
  { icon: Mail, label: 'Email', value: 'hello@marcuschen.dev', href: 'mailto:hello@marcuschen.dev' },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: null },
  { icon: Calendar, label: 'Availability', value: 'Open to opportunities', href: null },
];

export const socials: Social[] = [
  { icon: Github, label: 'GitHub', href: 'https://github.com', handle: '@marcuschen' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', handle: '/in/marcuschen' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', handle: '@marcus_dev' },
  { icon: MessageSquare, label: 'Discord', href: '#', handle: 'marcus#1234' },
];
