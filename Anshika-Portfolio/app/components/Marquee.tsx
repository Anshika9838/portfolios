"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../lib/hooks";

export default function Marquee({ items, speed = 36 }: { items: string[]; speed?: number }) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [halfWidth, setHalfWidth] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (trackRef.current) {
      setHalfWidth(trackRef.current.scrollWidth / 2);
    }
  }, [items]);

  useAnimationFrame((_, delta) => {
    if (hovered || reduced || !halfWidth) return;
    let next = x.get() - (speed * delta) / 1000;
    if (next <= -halfWidth) next += halfWidth;
    x.set(next);
  });

  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y border-hairline py-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div ref={trackRef} style={{ x }} className="flex whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-[13px] font-medium tracking-[0.2em] uppercase text-stone inline-flex items-center gap-6"
          >
            {item}
            <span className="text-sand" aria-hidden="true">
              &#9670;
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
