"use client";

import { animate, motion, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { stats } from "../lib/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useMotionValueEvent(mv, "change", (latest) => {
    setDisplay(Math.round(latest).toLocaleString("en-IN"));
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, mv, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 sm:py-28 border-y border-hairline bg-bg-alt/60">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className="flex flex-col gap-2"
            >
              <span className="font-light text-[clamp(3rem,6vw,4.5rem)] tabular-nums text-charcoal leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-sm text-stone">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
