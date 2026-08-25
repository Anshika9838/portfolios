"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { currentlySharpening, timeline } from "../lib/content";

export default function Timeline() {
  return (
    <section id="journey" className="relative py-28 sm:py-36 bg-charcoal-dark text-bg">
      <Container className="flex flex-col gap-20">
        <SectionHeading
          eyebrow="04 — Journey"
          title="A year of shipping, not stalling."
          dark
        />

        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-[3px] sm:left-[7px] top-2 bottom-2 w-px bg-white/12" aria-hidden="true" />

          <div className="flex flex-col gap-14">
            {timeline.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                className="relative"
              >
                <span
                  className="absolute -left-8 sm:-left-12 top-1.5 w-2 h-2 rounded-full bg-sand"
                  aria-hidden="true"
                />
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-faint">
                  {event.year}
                </span>
                <h3 className="mt-3 text-[clamp(1.3rem,2.2vw,1.7rem)] font-light text-bg">{event.title}</h3>
                <p className="mt-2 text-[1rem] leading-[1.7] text-faint max-w-[56ch]">{event.body}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center gap-3 pt-2"
            >
              <span className="absolute -left-8 sm:-left-12 top-1.5 flex items-center justify-center w-2 h-2">
                <motion.span
                  className="w-2 h-2 rounded-full bg-[#7A8B6F]"
                  animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              <p className="text-[1rem] leading-[1.7] text-faint max-w-[56ch]">{currentlySharpening}</p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
