"use client";

import { motion } from "framer-motion";

export default function SplitText({
  text,
  delay = 0,
  once = true,
  className = "",
}: {
  text: string;
  delay?: number;
  once?: boolean;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once, margin: "-12% 0px -12% 0px" }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.045,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
