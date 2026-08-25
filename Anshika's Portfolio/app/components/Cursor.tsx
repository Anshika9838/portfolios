"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useCursor } from "../lib/CursorContext";
import { usePointerFine } from "../lib/hooks";

export default function Cursor() {
  const isFine = usePointerFine();
  const { variant } = useCursor();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 200, damping: 26 });
  const ringY = useSpring(y, { stiffness: 200, damping: 26 });

  useEffect(() => {
    if (!isFine) return;
    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isFine, x, y]);

  if (!isFine) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90]" aria-hidden="true">
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-charcoal"
        style={{ x, y, width: 6, height: 6, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: variant === "view" ? 0 : 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-charcoal flex items-center justify-center overflow-hidden"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: variant === "view" ? 88 : 34,
          height: variant === "view" ? 88 : 34,
          backgroundColor: variant === "view" ? "#1C1A17" : "rgba(28,26,23,0)",
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="text-[11px] tracking-[0.12em] uppercase text-bg"
          animate={{ opacity: variant === "view" ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          View
        </motion.span>
      </motion.div>
    </div>
  );
}
