"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { stackBars, stackGroups } from "../lib/content";

export default function StackDark() {
  return (
    <motion.section
      id="stack"
      initial={{ y: 90 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-20 -mt-10 sm:-mt-16 rounded-t-[40px] bg-charcoal-dark text-bg overflow-hidden"
    >
      <div className="py-28 sm:py-36">
        <Container className="flex flex-col gap-20">
          <SectionHeading
            eyebrow="03 — Stack"
            title="The engineering surface."
            description="A language mix shaped by shipping — frontend depth, backend range, and a security habit that never really switches off."
            dark
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16">
            <div className="flex flex-col gap-6">
              {stackBars.map((bar, i) => (
                <motion.div
                  key={bar.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-bg">{bar.label}</span>
                    <span className="text-faint tabular-nums">{bar.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${bar.pct}%` }}
                      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.06 }}
                      className="h-full rounded-full bg-sand"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {stackGroups.map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-bg">
                      <Icon icon={group.icon} width={17} height={17} />
                    </span>
                    <h4 className="text-sm font-semibold tracking-[0.08em] uppercase text-bg">{group.title}</h4>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {group.items.map((it) => (
                      <li key={it} className="text-[0.95rem] text-faint">
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </motion.section>
  );
}
