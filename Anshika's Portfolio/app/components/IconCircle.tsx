"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function IconCircle({
  icon,
  size = 20,
  className = "",
  dark = false,
}: {
  icon: string;
  size?: number;
  className?: string;
  dark?: boolean;
}) {
  const restColor = dark ? "#FAF8F4" : "#1C1A17";
  const hoverBg = dark ? "#FAF8F4" : "#1C1A17";
  const hoverColor = dark ? "#1C1A17" : "#FAF8F4";
  return (
    <motion.span
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      whileTap={{ scale: 0.94 }}
      variants={{
        rest: { backgroundColor: "rgba(0,0,0,0)", color: restColor },
        hover: { backgroundColor: hoverBg, color: hoverColor },
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-flex items-center justify-center w-11 h-11 rounded-full border ${
        dark ? "border-white/15" : "border-hairline"
      } ${className}`}
    >
      <Icon icon={icon} width={size} height={size} />
    </motion.span>
  );
}
