import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, GitCommit, GitPullRequest, Activity, Flame } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionLabel from './SectionLabel';
import TiltCard from './TiltCard';
import SpotlightCard from './SpotlightCard';
import StaggerText from './StaggerText';

const contributions = [
  { day: 'Mon', count: 12 },
  { day: 'Tue', count: 18 },
  { day: 'Wed', count: 8 },
  { day: 'Thu', count: 24 },
  { day: 'Fri', count: 15 },
  { day: 'Sat', count: 6 },
  { day: 'Sun', count: 4 },
];

const repos = [
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

const contributionStats = [
  { icon: GitCommit, label: 'Commits', value: '2,847' },
  { icon: GitPullRequest, label: 'PRs Merged', value: '156' },
  { icon: Activity, label: 'Issues Closed', value: '423' },
];

export default function OpenSource() {
  return (
    <SectionWrapper id="opensource" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel label="Open Source" className="justify-center" />
          <StaggerText
            text="Giving back to the community"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
            delay={0.1}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-text-secondary max-w-2xl mx-auto"
          >
            Active contributor to tools and libraries I use daily. Believing that 
            open source is how we collectively push the web forward.
          </motion.p>
        </div>

        {/* GitHub Activity Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 mb-8 border border-border-default top-glow-green"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Github className="w-6 h-6 text-text-primary" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">@marcuschen</h3>
                <p className="text-sm text-text-muted">GitHub Activity — Last 7 Days</p>
              </div>
            </div>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm py-2 px-4 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Profile
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Activity Bars */}
          <div className="flex items-end gap-2 h-32 mb-4">
            {contributions.map((c, i) => (
              <motion.div
                key={c.day}
                initial={{ height: 0 }}
                whileInView={{ height: `${(c.count / 24) * 100}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                className="flex-1 rounded-t-md bg-accent-green/20 hover:bg-accent-green/40 transition-colors relative group cursor-default"
                whileHover={{ scaleY: 1.1 }}
              >
                <motion.div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-bg-secondary border border-border-default text-xs text-text-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  initial={{ y: 5 }}
                  whileHover={{ y: 0 }}
                >
                  {c.count} commits
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-text-muted">
            {contributions.map(c => (
              <span key={c.day} className="flex-1 text-center">{c.day}</span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border-default">
            {contributionStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <stat.icon className="w-5 h-5 text-accent-green mx-auto mb-2" />
                </motion.div>
                <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                <div className="text-xs text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contribution Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <TiltCard key={repo.name} tiltAmount={6}>
              <SpotlightCard>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-xl p-5 card-hover border border-border-default group h-full top-glow-blue"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-text-primary font-semibold">{repo.org}</span>
                        <span className="text-text-muted">/</span>
                        <motion.span
                          className="text-accent-green font-medium"
                          whileHover={{ x: 2 }}
                        >
                          {repo.name}
                        </motion.span>
                      </div>
                    </div>
                    <motion.span
                      className="px-2 py-0.5 text-xs rounded-full bg-accent-green-glow text-accent-green border border-accent-green/20"
                      whileHover={{ scale: 1.1 }}
                    >
                      {repo.type}
                    </motion.span>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {repo.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-text-muted">
                      <motion.span className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                        <Star className="w-3.5 h-3.5" />
                        {repo.stats.stars}
                      </motion.span>
                      <motion.span className="flex items-center gap-1" whileHover={{ scale: 1.1 }}>
                        <GitPullRequest className="w-3.5 h-3.5" />
                        {repo.stats.prs} PRs
                      </motion.span>
                    </div>
                    <motion.span
                      className="text-xs text-accent-green font-medium flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Flame className="w-3 h-3" />
                      {repo.impact}
                    </motion.span>
                  </div>
                </motion.div>
              </SpotlightCard>
            </TiltCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
