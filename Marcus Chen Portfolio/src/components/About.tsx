import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionLabel from './SectionLabel';
import CountUp from './CountUp';
import TiltCard from './TiltCard';
import SpotlightCard from './SpotlightCard';
import StaggerText from './StaggerText';
import RevealLine from './RevealLine';
import { stats, highlights, expertise } from '../data/about';

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <div>
            <SectionLabel label="About Me" />
            <StaggerText
              text="Crafting digital experiences with precision & passion"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
              delay={0.1}
            />

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <RevealLine delay={0.2}>
                <p>
                  I'm a senior software engineer and designer with over 8 years of experience 
                  building products that scale. My journey began with a curiosity for how things 
                  work under the hood, which evolved into a career building systems that serve 
                  millions of users daily.
                </p>
              </RevealLine>
              <RevealLine delay={0.3}>
                <p>
                  Currently, I'm leading the frontend architecture at <span className="text-text-primary font-medium">Vercel</span>, 
                  where I design and implement the next generation of developer tools. Previously, 
                  I spent 3 years at <span className="text-text-primary font-medium">Stripe</span> building 
                  payment infrastructure and 2 years at <span className="text-text-primary font-medium">GitHub</span>{' '}
                  working on code review and collaboration features.
                </p>
              </RevealLine>
              <RevealLine delay={0.4}>
                <p>
                  I believe great software is born at the intersection of robust engineering and 
                  thoughtful design. When I'm not coding, you'll find me contributing to open source, 
                  writing technical articles, or mentoring early-career developers.
                </p>
              </RevealLine>
            </div>

            {/* Expertise Cards */}
            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {expertise.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-4 rounded-xl bg-bg-secondary/50 border border-border-default hover:border-accent-green/20 transition-all cursor-default"
                >
                  <item.icon className="w-5 h-5 text-accent-green mb-2" />
                  <div className="text-text-primary font-medium text-sm">{item.title}</div>
                  <div className="text-text-muted text-xs mt-1">{item.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-6 flex flex-wrap gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary border border-border-default hover:border-accent-green/20 transition-colors cursor-default"
                >
                  <item.icon className="w-4 h-4 text-accent-green" />
                  <span className="text-sm text-text-secondary">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Stats + Cards */}
          <div className="space-y-6">
            {/* Stats Grid with Tilt */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <TiltCard key={i} tiltAmount={8}>
                  <SpotlightCard>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass rounded-xl p-6 card-hover group top-glow-green"
                    >
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <stat.icon className="w-5 h-5 text-accent-green mb-3" />
                      </motion.div>
                      <div className="text-3xl font-bold text-text-primary">
                        <CountUp end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-text-muted mt-1">{stat.label}</div>
                    </motion.div>
                  </SpotlightCard>
                </TiltCard>
              ))}
            </div>

            {/* Philosophy Card */}
            <TiltCard tiltAmount={5}>
              <SpotlightCard>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="glass rounded-xl p-6 border-l-4 border-l-accent-green relative overflow-hidden group top-glow-blue"
                >
                  <motion.div
                    className="absolute -top-2 -right-2 text-8xl font-serif text-accent-green/5 select-none"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 8 }}
                  >
                    &ldquo;
                  </motion.div>
                  <p className="text-text-secondary italic leading-relaxed relative z-10">
                    Code is read far more often than it's written. I strive to write software 
                    that tells a story — clear, maintainable, and a joy to work with. Every line 
                    is an opportunity to make someone's day better.
                  </p>
                  <div className="mt-4 flex items-center gap-3 relative z-10">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-green to-[#58a6ff] flex items-center justify-center text-bg-primary font-bold text-sm"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      MC
                    </motion.div>
                    <div>
                      <div className="text-text-primary font-medium text-sm">Marcus Chen</div>
                      <div className="text-text-muted text-xs">Senior Software Engineer</div>
                    </div>
                  </div>
                </motion.div>
              </SpotlightCard>
            </TiltCard>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
