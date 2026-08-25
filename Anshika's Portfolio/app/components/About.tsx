"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { about } from "../lib/content";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.heading}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
          className="flex flex-col gap-8"
        >
          {about.paragraphs.map((p, i) => (
            <motion.p key={i} variants={item} className="text-[1.0625rem] leading-[1.7] text-stone max-w-[62ch]">
              {p}
            </motion.p>
          ))}

          <motion.blockquote
            variants={item}
            className="border-l border-sand pl-6 py-1 text-[clamp(1.3rem,2.4vw,1.75rem)] font-light leading-snug text-charcoal max-w-[36ch]"
          >
            &ldquo;{about.pullQuote}&rdquo;
          </motion.blockquote>

          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            {about.chips.map((chip) => (
              <motion.span
                key={chip}
                whileHover={{ y: -3, backgroundColor: "#1C1A17", color: "#FAF8F4" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-full border border-hairline px-4 py-2 text-sm text-charcoal cursor-default select-none"
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
