"use client";

import { Icon } from "@iconify/react";
import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useRef } from "react";
import Container from "./Container";
import MagneticButton from "./MagneticButton";
import SplitText from "./SplitText";
import { hero } from "../lib/content";
import { useAppLenis } from "../lib/LenisProvider";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useAppLenis();
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { stiffness: 120, damping: 30 });
  const metaDip = useTransform(smoothVelocity, [-1800, 0, 1800], [16, 0, -16]);

  const blobY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  function handle(id: string) {
    const el = document.getElementById(id);
    if (el) scrollTo(el, { offset: -20 });
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-28 pb-16"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: blobY }}
        className="pointer-events-none absolute -top-40 right-[-10%] w-[60vw] h-[60vw] max-w-[720px] max-h-[720px] rounded-full opacity-40"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(179,162,140,0.35), rgba(179,162,140,0) 70%)",
          }}
        />
      </motion.div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="w-full">
        <Container className="flex flex-col gap-10">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.35 }}
            className="text-[11px] font-semibold tracking-[0.22em] uppercase text-stone"
          >
            {hero.eyebrow}
          </motion.span>

          <h1 className="font-light text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.03em] text-charcoal max-w-[16ch]">
            <SplitText text={hero.name} delay={1.45} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.9 }}
            className="text-[1.0625rem] leading-[1.7] text-stone max-w-[58ch]"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            style={{ y: metaDip }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 2.05 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone"
          >
            <span className="inline-flex items-center gap-2">
              <Icon icon="solar:map-point-linear" width={18} height={18} />
              {hero.location}
            </span>
            <span className="hidden sm:inline text-faint">&middot;</span>
            <span className="inline-flex items-center gap-2">
              <Icon icon="solar:diploma-linear" width={18} height={18} />
              {hero.education}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 2.2 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton onClick={() => handle("work")} variant="primary" showArrow>
              {hero.ctaPrimary}
            </MagneticButton>
            <MagneticButton onClick={() => handle("contact")} variant="ghost">
              {hero.ctaSecondary}
            </MagneticButton>
          </motion.div>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-faint"
        aria-hidden="true"
      >
        <span className="text-[11px] tracking-[0.22em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
        >
          <Icon icon="solar:arrow-down-linear" width={18} height={18} />
        </motion.span>
      </motion.div>
    </section>
  );
}
