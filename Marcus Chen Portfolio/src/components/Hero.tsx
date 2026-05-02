import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Copy, Check, Star, GitFork, Zap, Sparkles } from 'lucide-react';
import TextScramble from './TextScramble';
import MagneticButton from './MagneticButton';
import StaggerText from './StaggerText';
import ASCIIGallery from './ASCIIGallery';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [scrambleTrigger, setScrambleTrigger] = useState(false);

  useEffect(() => {
    const scrambleTimer = setTimeout(() => setScrambleTrigger(true), 1200);
    return () => {
      clearTimeout(scrambleTimer);
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install marcus-chen');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="glow-orb w-[500px] h-[500px] bg-accent-green/10 -top-40 -right-40" />
      <div className="glow-orb w-[400px] h-[400px] bg-[#58a6ff]/10 -bottom-20 -left-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-green/20 to-transparent" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary z-[2]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green-glow border border-accent-green/20 hover:border-accent-green/40 transition-colors shadow-[0_0_40px_rgba(62,207,142,0.08)]"
            >
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              <span className="text-accent-green text-sm font-medium">Available for new opportunities</span>
              <Sparkles className="w-3.5 h-3.5 text-accent-green/60" />
            </motion.div>

            {/* Name with scramble */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-text-primary">Marcus</span>
                <br />
                <span className="gradient-text">
                  <TextScramble text="Chen" trigger={scrambleTrigger} />
                </span>
              </h1>
            </motion.div>

            {/* Title with stagger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <StaggerText
                text="Senior Software Engineer & UI/UX Designer"
                className="text-xl sm:text-2xl text-text-secondary font-light"
                delay={0.4}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-text-muted max-w-lg leading-relaxed"
              >
                Building scalable distributed systems and crafting pixel-perfect interfaces. 
                8+ years of experience shipping products used by millions.
              </motion.p>
            </motion.div>

            {/* Stats with hover glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Star, value: '2.4k', label: 'GitHub Stars', color: 'text-yellow-500' },
                { icon: GitFork, value: '480', label: 'Forks', color: 'text-accent-green' },
                { icon: Zap, value: '50M+', label: 'Users Reached', color: 'text-[#58a6ff]' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors cursor-default"
                >
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <span className="text-text-primary font-semibold">{stat.value}</span>
                  <span className="text-text-muted text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA with magnetic buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton strength={0.2} className="magnetic-wrap">
                <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 text-base group">
                  <span>Let's Work Together</span>
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </motion.span>
                </a>
              </MagneticButton>
              <MagneticButton strength={0.15} className="magnetic-wrap">
                <button
                  onClick={handleCopy}
                  className="btn-secondary inline-flex items-center justify-center gap-2 font-mono text-sm group"
                >
                  <motion.span
                    className="text-text-muted"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    $
                  </motion.span>
                  <span>npm install marcus-chen</span>
                  <motion.span
                    animate={copied ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {copied ? <Check className="w-4 h-4 text-accent-green" /> : <Copy className="w-4 h-4 text-text-muted group-hover:text-accent-green transition-colors" />}
                  </motion.span>
                </button>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right - 3D Tech Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
            className="hidden lg:flex items-center justify-center"
          >
            <ASCIIGallery />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs font-mono">scroll</span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-text-muted/30 flex justify-center pt-1.5"
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-accent-green"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
