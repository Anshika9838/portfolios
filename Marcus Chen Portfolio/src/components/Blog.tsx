import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Tag, TrendingUp, BookOpen, Code2, Layers, Zap } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionLabel from './SectionLabel';
import TiltCard from './TiltCard';
import SpotlightCard from './SpotlightCard';
import StaggerText from './StaggerText';

const articles = [
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

export default function Blog() {
  const featured = articles.find(a => a.featured)!;
  const regular = articles.filter(a => !a.featured);

  return (
    <SectionWrapper id="blog" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel label="Blog & Articles" className="justify-center" />
          <StaggerText
            text="Thoughts on engineering"
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
            Sharing knowledge on system design, frontend architecture, and the craft of building 
            great software. 35+ articles with 500k+ total reads.
          </motion.p>
        </div>

        {/* Featured Article */}
        <TiltCard tiltAmount={4}>
          <SpotlightCard>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden mb-8 card-hover border border-border-default group top-glow-green"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                <div
                  className="lg:col-span-2 h-64 lg:h-auto relative flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${featured.color}20, ${featured.color}05)` }}
                >
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <featured.icon className="w-20 h-20 opacity-20" style={{ color: featured.color }} />
                  </motion.div>
                  <div className="absolute top-4 left-4">
                    <motion.span
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent-green text-bg-primary"
                      whileHover={{ scale: 1.1 }}
                    >
                      Featured
                    </motion.span>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.span
                      className="px-2.5 py-1 text-xs font-medium rounded-md"
                      style={{ backgroundColor: `${featured.color}15`, color: featured.color }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {featured.category}
                    </motion.span>
                    <motion.span
                      className="flex items-center gap-1 text-xs text-text-muted"
                      whileHover={{ scale: 1.05 }}
                    >
                      <TrendingUp className="w-3 h-3" />
                      {featured.views} views
                    </motion.span>
                  </div>
                  <motion.h3
                    className="text-2xl font-bold text-text-primary mb-3 hover:text-accent-green transition-colors cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    {featured.title}
                  </motion.h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <span>{featured.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featured.readTime}
                      </span>
                    </div>
                    <motion.button
                      className="flex items-center gap-1 text-accent-green text-sm font-medium hover:underline"
                      whileHover={{ x: 4, scale: 1.05 }}
                    >
                      Read Article
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </SpotlightCard>
        </TiltCard>

        {/* Article Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {regular.map((article, i) => (
            <TiltCard key={article.title} tiltAmount={6}>
              <SpotlightCard>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group glass rounded-xl p-6 card-hover border border-border-default flex flex-col h-full top-glow-purple"
                >
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${article.color}15` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <article.icon className="w-5 h-5" style={{ color: article.color }} />
                    </motion.div>
                    <motion.span
                      className="flex items-center gap-1 text-xs text-text-muted"
                      whileHover={{ scale: 1.05 }}
                    >
                      <TrendingUp className="w-3 h-3" />
                      {article.views}
                    </motion.span>
                  </div>

                  <motion.span
                    className="px-2 py-0.5 text-xs font-medium rounded-md w-fit mb-3"
                    style={{ backgroundColor: `${article.color}15`, color: article.color }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {article.category}
                  </motion.span>

                  <motion.h3
                    className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-green transition-colors cursor-pointer line-clamp-2"
                    whileHover={{ x: 4 }}
                  >
                    {article.title}
                  </motion.h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border-default">
                    <div className="flex items-center gap-3 text-xs text-text-muted">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <motion.div whileHover={{ x: 4, rotate: 15 }}>
                      <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent-green transition-colors" />
                    </motion.div>
                  </div>
                </motion.article>
              </SpotlightCard>
            </TiltCard>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="w-4 h-4" />
            View All Articles
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
