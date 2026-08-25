"use client";

import { motion } from "framer-motion";
import SplitText from "./SplitText";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`text-[11px] font-semibold tracking-[0.22em] uppercase ${
          dark ? "text-faint" : "text-stone"
        }`}
      >
        {eyebrow}
      </motion.span>
      <h2
        className={`font-light text-[clamp(2rem,4vw,3.25rem)] tracking-[-0.02em] leading-[1.1] max-w-[20ch] ${
          dark ? "text-bg" : "text-charcoal"
        }`}
      >
        <SplitText text={title} />
      </h2>
      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className={`text-[1.0625rem] leading-[1.7] max-w-[62ch] ${dark ? "text-faint" : "text-stone"}`}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
