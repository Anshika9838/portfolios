import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.25, 1, 1, 0.25]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [28, 0, -28]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.985, 1, 0.985]);
  const glowX = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const glowRotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ opacity, y, scale }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-[78%] bg-gradient-to-r from-transparent via-accent-green/20 to-transparent"
        style={{ opacity, x: glowX, rotate: glowRotate }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-[-4rem] h-48 w-48 rounded-full bg-accent-green/10 blur-3xl"
        style={{ x: glowX, opacity }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-[-3rem] h-40 w-40 rounded-full bg-[#58a6ff]/10 blur-3xl"
        style={{ x: glowX, opacity }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
