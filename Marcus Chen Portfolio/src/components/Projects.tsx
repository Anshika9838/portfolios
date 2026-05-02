import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, GitFork, ArrowUpRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionLabel from './SectionLabel';
import TiltCard from './TiltCard';
import SpotlightCard from './SpotlightCard';
import StaggerText from './StaggerText';
import { projects, categories } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const featured = projects.filter(p => p.featured);

  return (
    <SectionWrapper id="projects" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel label="Featured Projects" className="justify-center" />
          <StaggerText
            text="Things I've built"
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
            A selection of projects spanning SaaS platforms, open source libraries,
            design systems, and infrastructure tools.
          </motion.p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {featured.slice(0, 2).map((project, i) => (
            <TiltCard key={project.title} tiltAmount={5}>
              <SpotlightCard>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group glass rounded-xl overflow-hidden card-hover border border-border-default top-glow-green relative"
                >
                  <div className="absolute -top-6 -right-6 pointer-events-none z-0">
                    <project.icon
                      className="w-40 h-40 transition-transform duration-500 group-hover:scale-110"
                      style={{ color: project.color, opacity: 0.06 }}
                      strokeWidth={1}
                    />
                  </div>

                  <div
                    className="h-40 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${project.color}08, ${project.color}02)` }}
                  >
                    <div className="absolute inset-0 grid-pattern opacity-20" />
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-black/50 text-white backdrop-blur-sm border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <motion.h3
                        className="text-xl font-semibold text-text-primary group-hover:text-accent-green transition-colors cursor-pointer"
                        whileHover={{ x: 4 }}
                      >
                        {project.title}
                      </motion.h3>
                      <div className="flex gap-2">
                        <motion.a
                          href={project.links.github}
                          className="p-2 rounded-lg hover:bg-white/5 text-text-muted hover:text-text-primary transition-colors"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.links.demo}
                          className="p-2 rounded-lg hover:bg-white/5 text-text-muted hover:text-text-primary transition-colors"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-bg-tertiary text-text-muted border border-border-muted hover:border-accent-green/30 hover:text-accent-green transition-colors cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" />
                        {project.stats.stars.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" />
                        {project.stats.forks.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </SpotlightCard>
            </TiltCard>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-accent-green text-bg-primary shadow-lg shadow-accent-green/20'
                  : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <TiltCard key={project.title} tiltAmount={6}>
                <SpotlightCard>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="group glass rounded-xl p-6 card-hover border border-border-default h-full flex flex-col top-glow-purple relative overflow-hidden"
                  >
                    <div className="absolute -top-4 -right-4 pointer-events-none z-0">
                      <project.icon
                        className="w-28 h-28 transition-transform duration-500 group-hover:scale-110"
                        style={{ color: project.color, opacity: 0.05 }}
                        strokeWidth={1}
                      />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <span
                          className="px-2 py-0.5 text-xs font-medium rounded-md"
                          style={{ backgroundColor: `${project.color}12`, color: project.color }}
                        >
                          {project.category}
                        </span>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <a href={project.links.github} className="p-1.5 rounded-md hover:bg-white/5 text-text-muted hover:text-text-primary transition-colors">
                            <Github className="w-4 h-4" />
                          </a>
                          <a href={project.links.demo} className="p-1.5 rounded-md hover:bg-white/5 text-text-muted hover:text-text-primary transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-green transition-colors cursor-pointer">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 3).map(t => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-xs font-mono rounded bg-bg-tertiary text-text-muted border border-border-muted hover:border-accent-green/30 hover:text-accent-green transition-colors cursor-default"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-0.5 text-xs font-mono rounded bg-bg-tertiary text-text-muted">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-xs text-text-muted pt-4 border-t border-border-default">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {project.stats.stars.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3" />
                          {project.stats.forks.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </SpotlightCard>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
