"use client";

import { Icon } from "@iconify/react";
import { motion, useSpring, type Variants } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { usePointerFine } from "../lib/hooks";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost" | "dark-ghost";
  className?: string;
  ariaLabel?: string;
  external?: boolean;
  showArrow?: boolean;
  type?: "button" | "submit";
}

const buttonVariants: Variants = {
  rest: { scale: 1, boxShadow: "0 0 0 0 rgba(179,162,140,0)" },
  hover: { scale: 1.03, boxShadow: "0 0 0 6px rgba(179,162,140,0.22)" },
  pressed: { scale: 0.97 },
};

const arrowVariants: Variants = {
  rest: { x: 0, y: 0 },
  hover: { x: 3, y: -3 },
};

export default function MagneticButton({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  ariaLabel,
  external,
  showArrow = false,
  type = "button",
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const isFine = usePointerFine();
  const x = useSpring(0, { stiffness: 180, damping: 22 });
  const y = useSpring(0, { stiffness: 180, damping: 22 });
  const [pressed, setPressed] = useState(false);

  function handleMouseMove(e: React.MouseEvent) {
    if (!isFine || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.3);
    y.set(relY * 0.3);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "relative inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium select-none outline-none";
  const styles =
    variant === "primary"
      ? "bg-charcoal text-bg"
      : variant === "dark-ghost"
      ? "bg-transparent text-bg border border-white/20"
      : "bg-transparent text-charcoal border border-hairline";

  const sharedProps = {
    onClick,
    "aria-label": ariaLabel,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: { x, y },
    initial: "rest" as const,
    animate: pressed ? "pressed" : "rest",
    whileHover: "hover",
    whileFocus: "hover",
    whileTap: { scale: 0.97 },
    variants: buttonVariants,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    className: `${base} ${styles} ${className}`,
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <motion.span className="inline-flex" variants={arrowVariants} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
          <Icon icon="solar:arrow-right-up-linear" width={16} height={16} />
        </motion.span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as never}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        {...sharedProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button ref={ref as never} type={type} {...sharedProps}>
      {content}
    </motion.button>
  );
}
