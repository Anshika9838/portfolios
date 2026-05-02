import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight, Briefcase } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionLabel from './SectionLabel';
import TiltCard from './TiltCard';
import SpotlightCard from './SpotlightCard';
import StaggerText from './StaggerText';
import RevealLine from './RevealLine';
import { experiences } from '../data/experience';

const glowClasses = ['top-glow-green', 'top-glow-blue', 'top-glow-purple', 'top-glow-amber'];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel label="Work Experience" className="justify-center" />
          <StaggerText
            text="Where I've made impact"
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
            A track record of shipping high-quality software at industry-leading companies, 
            from fast-growing startups to established tech giants.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-border-default">
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2"
                  style={{ borderColor: exp.color, backgroundColor: '#0d1117' }}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                />
                <motion.div
                  className="absolute top-0 left-0 w-full"
                  style={{ backgroundColor: exp.color }}
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                />
              </div>

              <TiltCard tiltAmount={4}>
                <SpotlightCard>
                  <div className={`glass rounded-xl p-6 card-hover ${glowClasses[i % glowClasses.length]}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shrink-0"
                          style={{ backgroundColor: `${exp.color}15`, color: exp.color }}
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {exp.logo}
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary">{exp.role}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-accent-green font-medium">{exp.company}</span>
                            <span className="text-text-muted">·</span>
                            <span className="text-text-muted text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <motion.span
                        className="text-sm font-mono text-text-muted bg-bg-secondary px-3 py-1 rounded-full shrink-0"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(62,207,142,0.1)' }}
                      >
                        {exp.period}
                      </motion.span>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {exp.achievements.map((achievement, ai) => (
                        <motion.li
                          key={ai}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: ai * 0.08 + 0.2 }}
                          className="flex items-start gap-2 text-sm text-text-secondary group/item"
                        >
                          <motion.span whileHover={{ x: 3 }} className="shrink-0">
                            <ChevronRight className="w-4 h-4 text-accent-green group-hover/item:text-accent-green-dim transition-colors" />
                          </motion.span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, ti) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: ti * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-bg-tertiary text-text-secondary border border-border-muted hover:border-accent-green/30 transition-colors cursor-default"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/resume.pdf"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Briefcase className="w-4 h-4" />
            Download Full Resume
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
