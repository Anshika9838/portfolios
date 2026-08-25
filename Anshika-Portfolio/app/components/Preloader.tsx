"use client";

import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      key="preloader"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal"
      initial={{ borderRadius: 0 }}
      exit={{
        y: "-100%",
        borderRadius: "0 0 48px 48px",
        transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.span
          className="font-light text-bg text-[clamp(2rem,6vw,3.5rem)] tracking-[-0.02em]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          Anshika Singh
        </motion.span>
        <motion.span
          className="h-px bg-sand"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
        />
      </div>
    </motion.div>
  );
}
