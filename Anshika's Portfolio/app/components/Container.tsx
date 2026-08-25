"use client";

import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1160px] px-[clamp(20px,6vw,96px)] ${className}`}>
      {children}
    </div>
  );
}
