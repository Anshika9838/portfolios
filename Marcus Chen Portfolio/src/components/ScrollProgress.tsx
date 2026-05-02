import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[100] pointer-events-none w-[min(42rem,calc(100vw-1.5rem))]">
      <div className="relative h-[3px] overflow-hidden rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_24px_rgba(62,207,142,0.08)]">
        <motion.div
          className="absolute inset-y-0 left-0 origin-left rounded-full bg-gradient-to-r from-accent-green via-[#58a6ff] to-accent-green"
          style={{ scaleX }}
        />
        <motion.div
          className="absolute inset-y-0 left-0 w-24 rounded-full bg-white/25 blur-sm"
          style={{ scaleX }}
          animate={{ opacity: [0.45, 0.95, 0.45] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}
