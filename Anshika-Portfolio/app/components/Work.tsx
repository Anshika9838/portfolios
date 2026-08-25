"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";
import { work } from "../lib/content";

export default function Work() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start flex flex-col gap-10">
            <SectionHeading
              eyebrow="02 — Selected work"
              title="Products, not prototypes."
              description="A running index of things shipped, deployed, and still being sharpened."
            />
            <ul className="hidden lg:flex flex-col gap-1 mt-2">
              {work.map((w, i) => (
                <li key={w.title}>
                  <button
                    onClick={() => {
                      document.getElementById(`work-${i}`)?.scrollIntoView({ block: "center" });
                    }}
                    className="w-full flex items-center gap-4 py-2.5 text-left outline-none"
                  >
                    <span
                      className={`text-[13px] tabular-nums ${
                        active === i ? "text-charcoal" : "text-faint"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <motion.span
                      animate={{
                        color: active === i ? "#1C1A17" : "#A39B8F",
                        x: active === i ? 4 : 0,
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="text-sm"
                    >
                      {w.title}
                    </motion.span>
                    {active === i ? (
                      <motion.span
                        layoutId="work-index-dot"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-sand"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    ) : null}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            {work.map((item, i) => (
              <div id={`work-${i}`} key={item.title}>
                <WorkCard item={item} index={i} onFocusIndex={setActive} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
