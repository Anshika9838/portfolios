"use client";

import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import { useCursor } from "../lib/CursorContext";
import { usePointerFine } from "../lib/hooks";
import type { WorkItem } from "../lib/content";

const cardVariants: Variants = {
  rest: { y: 0, boxShadow: "0 1px 2px rgba(28,26,23,.04), 0 12px 32px rgba(28,26,23,.06)" },
  hover: {
    y: -6,
    boxShadow: "0 1px 2px rgba(28,26,23,.05), 0 22px 46px rgba(28,26,23,.10)",
  },
};

const iconVariants: Variants = {
  rest: { backgroundColor: "rgba(0,0,0,0)", color: "#1C1A17" },
  hover: { backgroundColor: "#1C1A17", color: "#FAF8F4" },
};

const linkVariants: Variants = {
  rest: { opacity: 0, x: -8 },
  hover: { opacity: 1, x: 0 },
};

export default function WorkCard({
  item,
  index,
  onFocusIndex,
}: {
  item: WorkItem;
  index: number;
  onFocusIndex: (i: number) => void;
}) {
  const { setVariant } = useCursor();
  const isFine = usePointerFine();
  const isLink = Boolean(item.link);

  const cardBody = (
    <>
      <div className="flex items-start justify-between gap-6">
        <motion.span
          variants={iconVariants}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center justify-center w-11 h-11 shrink-0 rounded-full border border-hairline"
        >
          <Icon icon={item.icon} width={20} height={20} />
        </motion.span>

        {item.status ? (
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-stone">
            {item.status === "LIVE" ? (
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-[#7A8B6F]"
                animate={{ opacity: [1, 0.35, 1], scale: [1, 0.85, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : (
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-sand"
                animate={{ rotate: 360 }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
              />
            )}
            {item.status === "LIVE" ? "Live" : "Building"}
          </span>
        ) : (
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-faint">{item.tag}</span>
        )}
      </div>

      <h3 className="mt-6 text-[clamp(1.4rem,2.4vw,1.85rem)] font-light text-charcoal tracking-[-0.01em]">
        {item.title}
      </h3>
      <p className="mt-3 text-[1rem] leading-[1.7] text-stone max-w-[56ch]">{item.description}</p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-hairline">
        <span className="text-[13px] text-faint tracking-wide">{item.tech}</span>
        {isLink ? (
          <motion.span
            variants={linkVariants}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1.5 text-sm text-charcoal shrink-0"
          >
            {item.linkLabel}
            <Icon icon="solar:arrow-right-up-linear" width={16} height={16} />
          </motion.span>
        ) : null}
      </div>
    </>
  );

  const sharedProps = {
    onMouseEnter: () => isFine && isLink && setVariant("view" as const),
    onMouseLeave: () => isFine && setVariant("default" as const),
    onFocus: () => onFocusIndex(index),
    initial: "rest" as const,
    whileHover: "hover",
    whileFocus: "hover",
    variants: cardVariants,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    className:
      "group block rounded-[20px] border border-hairline bg-bg p-7 sm:p-9 outline-none focus-visible:border-charcoal",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px", amount: 0.4 }}
      onViewportEnter={() => onFocusIndex(index)}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {isLink ? (
        <motion.a href={item.link} target="_blank" rel="noreferrer" {...sharedProps}>
          {cardBody}
        </motion.a>
      ) : (
        <motion.div {...sharedProps}>{cardBody}</motion.div>
      )}
    </motion.div>
  );
}
