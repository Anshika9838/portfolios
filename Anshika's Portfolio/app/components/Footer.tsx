"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Container from "./Container";
import { socials } from "../lib/content";
import { useISTClock } from "../lib/hooks";

export default function Footer() {
  const { time } = useISTClock();

  return (
    <footer className="relative bg-bg pt-20 pb-10 border-t border-hairline">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-light text-[clamp(2.5rem,5vw,3.5rem)] tracking-[-0.02em] text-charcoal">AS.</span>
            <p className="text-sm text-stone max-w-[36ch]">
              Web Developer &middot; Software Engineer &middot; Problem Solver, based in Gorakhpur, India.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Social links">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                initial="rest"
                whileHover="hover"
                whileFocus="hover"
                className="group inline-flex items-center gap-2 text-lg font-light text-charcoal outline-none w-fit"
              >
                <span>{s.label}</span>
                <motion.span
                  variants={{ rest: { opacity: 0, x: -6 }, hover: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex"
                >
                  <Icon icon="solar:arrow-right-up-linear" width={18} height={18} />
                </motion.span>
              </motion.a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-stone">Local time</span>
            <div className="flex items-center gap-2 text-lg font-light text-charcoal tabular-nums">
              <motion.span
                className="w-2 h-2 rounded-full bg-[#7A8B6F]"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.45, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
              />
              Gorakhpur, IN &mdash; {time} IST
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-hairline text-sm text-faint">
          <p>Designed with structured thinking. Built with Next.js, Framer Motion &amp; Lenis.</p>
          <p>&copy; 2026 Anshika Singh.</p>
        </div>
      </Container>
    </footer>
  );
}
