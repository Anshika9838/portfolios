import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionLabel from './SectionLabel';
import TiltCard from './TiltCard';
import SpotlightCard from './SpotlightCard';
import StaggerText from './StaggerText';
import { skillCategories, techStack } from '../data/skills';

const glowClasses = ['top-glow-green', 'top-glow-blue', 'top-glow-purple', 'top-glow-amber'];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel label="Skills & Expertise" className="justify-center" />
          <StaggerText
            text="Technologies I work with"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
            delay={0.1}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-text-secondary max-w-2xl mx-auto"
          >
            A comprehensive toolkit built over 8+ years of shipping production software 
            across startups and enterprise companies.
          </motion.p>
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.15, y: -4, boxShadow: `0 0 20px ${tech.color}20` }}
              className="px-4 py-2 rounded-lg bg-bg-secondary border border-border-default hover:border-accent-green/30 transition-colors cursor-default"
            >
              <motion.span 
                className="text-sm font-medium"
                style={{ color: tech.color }}
                whileHover={{ filter: 'brightness(1.3)' }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, ci) => (
            <TiltCard key={category.title} tiltAmount={6}>
              <SpotlightCard>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1 }}
                  className={`glass rounded-xl p-6 card-hover group ${glowClasses[ci % glowClasses.length]}`}
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-accent-green"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: ci * 0.3 }}
                    />
                    {category.title}
                  </h3>
                  <div className="space-y-5">
                    {category.skills.map((skill, si) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-text-secondary">{skill.name}</span>
                          <motion.span 
                            className="text-sm text-text-muted font-mono"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: si * 0.1 + 0.5 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="skill-bar-bg relative overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: si * 0.1 + 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="skill-bar-fill relative"
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ repeat: Infinity, duration: 2, delay: si * 0.2, ease: 'linear' }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    ))}
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
