import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import SectionLabel from './SectionLabel';
import StaggerText from './StaggerText';
import MagneticButton from './MagneticButton';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'VP of Engineering',
    company: 'Vercel',
    avatar: 'SM',
    color: '#ff6b6b',
    text: "Marcus is one of the most talented engineers I've had the pleasure of working with. His ability to bridge the gap between design and engineering is rare. He led our design system initiative and transformed how our teams build products. The component library he architected is now used across 12 products.",
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'CTO',
    company: 'Stripe',
    avatar: 'DP',
    color: '#635bff',
    text: "When we needed to rebuild our dashboard with sub-100ms load times, Marcus delivered. His deep understanding of React internals and performance optimization saved us months of work. Beyond technical skills, he's an exceptional mentor who elevates everyone around him.",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Lead',
    company: 'GitHub',
    avatar: 'ER',
    color: '#2dba4e',
    text: "Marcus doesn't just write code — he crafts experiences. The pull request review flow he redesigned increased reviewer engagement by 40%. He has an eye for detail that most engineers lack, combined with the technical chops to implement complex features flawlessly.",
    rating: 5,
  },
  {
    name: 'James Liu',
    role: 'Founder & CEO',
    company: 'TechStart',
    avatar: 'JL',
    color: '#f59e0b',
    text: "We hired Marcus as a consultant to architect our frontend from scratch. In 3 months, he built a foundation that scaled us from 0 to 100k users. His pragmatic approach to engineering — balancing speed with quality — was exactly what a startup needs.",
    rating: 5,
  },
  {
    name: 'Anna Kowalski',
    role: 'Design Director',
    company: 'Figma',
    avatar: 'AK',
    color: '#f24e1e',
    text: "As a designer, working with Marcus was a dream. He actually cares about design details — spacing, typography, animations. He built a Figma-to-code pipeline that cut our handoff time in half. Every pixel matters to him, and it shows in the final product.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      rotateY: dir > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      rotateY: dir > 0 ? -15 : 15,
    }),
  };

  return (
    <SectionWrapper className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel label="Testimonials" className="justify-center" />
          <StaggerText
            text="What people say"
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
            Feedback from colleagues, managers, and clients I've had the privilege to work with.
          </motion.p>
        </div>

        <div className="relative" style={{ perspective: 1000 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 25 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="glass rounded-2xl p-8 sm:p-12 border border-border-default relative overflow-hidden top-glow-green"
            >
              {/* Background glow */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10"
                style={{ backgroundColor: t.color }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />

              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
              >
                <Quote className="w-10 h-10 text-accent-green/30 mb-6" />
              </motion.div>

              <p className="text-lg sm:text-xl text-text-primary leading-relaxed mb-8 relative z-10">
                "{t.text}"
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-bg-primary font-bold"
                    style={{ backgroundColor: t.color }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {t.avatar}
                  </motion.div>
                  <div>
                    <div className="text-text-primary font-semibold">{t.name}</div>
                    <div className="text-text-muted text-sm">
                      {t.role} at <span className="text-accent-green">{t.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <MagneticButton strength={0.3}>
              <motion.button
                onClick={prev}
                className="p-3 rounded-full glass hover:border-accent-green/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-text-secondary" />
              </motion.button>
            </MagneticButton>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-accent-green' : 'w-2 bg-text-muted hover:bg-text-secondary'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <MagneticButton strength={0.3}>
              <motion.button
                onClick={next}
                className="p-3 rounded-full glass hover:border-accent-green/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-text-secondary" />
              </motion.button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
