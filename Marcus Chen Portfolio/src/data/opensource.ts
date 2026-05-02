import { GitCommit, GitPullRequest, Activity } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Contribution {
  day: string;
  count: number;
}

export interface Repo {
  name: string;
  org: string;
  description: string;
  type: string;
  impact: string;
  stats: { stars: string; prs: number };
}

export interface ContributionStat {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const contributions: Contribution[] = [
  { day: 'Mon', count: 12 },
  { day: 'Tue', count: 18 },
  { day: 'Wed', count: 8 },
  { day: 'Thu', count: 24 },
  { day: 'Fri', count: 15 },
  { day: 'Sat', count: 6 },
  { day: 'Sun', count: 4 },
];

export const repos: Repo[] = [
  {
    name: 'react-query',
    org: 'TanStack',
    description: 'Added optimistic updates support and improved TypeScript inference',
    type: 'PR Merged',
    impact: '+2.3k downloads/day',
    stats: { stars: '38k', prs: 3 },
  },
  {
    name: 'next.js',
    org: 'vercel',
    description: 'Implemented edge runtime caching strategy and middleware improvements',
    type: 'PR Merged',
    impact: 'Used by 200k+ apps',
    stats: { stars: '120k', prs: 7 },
  },
  {
    name: 'shadcn-ui',
    org: 'shadcn',
    description: 'Contributed new components: Timeline, Stepper, and File Upload',
    type: 'PR Merged',
    impact: '+15k stars',
    stats: { stars: '52k', prs: 5 },
  },
  {
    name: 'prisma',
    org: 'prisma',
    description: 'Fixed connection pool exhaustion bug and improved query planner',
    type: 'Issue Fixed',
    impact: 'Critical fix',
    stats: { stars: '35k', prs: 2 },
  },
  {
    name: 'trpc',
    org: 'trpc',
    description: 'Added WebSocket subscription batching and improved error formatting',
    type: 'PR Merged',
    impact: 'Performance +40%',
    stats: { stars: '31k', prs: 4 },
  },
  {
    name: 'tailwindcss',
    org: 'tailwindlabs',
    description: 'Contributed JIT engine optimizations and new utility variants',
    type: 'PR Merged',
    impact: 'Build time -30%',
    stats: { stars: '78k', prs: 6 },
  },
];

export const contributionStats: ContributionStat[] = [
  { icon: GitCommit, label: 'Commits', value: '2,847' },
  { icon: GitPullRequest, label: 'PRs Merged', value: '156' },
  { icon: Activity, label: 'Issues Closed', value: '423' },
];
