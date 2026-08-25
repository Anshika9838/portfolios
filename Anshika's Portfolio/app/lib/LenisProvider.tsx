"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";

interface LenisContextValue {
  scrollTo: (target: string | number | HTMLElement, options?: Record<string, unknown>) => void;
}

const LenisContext = createContext<LenisContextValue>({ scrollTo: () => {} });

export function useAppLenis() {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      lerp: prefersReduced ? 1 : 0.09,
      duration: prefersReduced ? 0 : 1.1,
      smoothWheel: !prefersReduced,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  function scrollTo(target: string | number | HTMLElement, options: Record<string, unknown> = {}) {
    lenisRef.current?.scrollTo(target, {
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      ...options,
    });
  }

  return <LenisContext.Provider value={{ scrollTo }}>{children}</LenisContext.Provider>;
}
