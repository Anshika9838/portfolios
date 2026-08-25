import { useEffect, useState } from "react";

function matches(query: string): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(query).matches;
}

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => matches("(prefers-reduced-motion: reduce)"));
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function usePointerFine(): boolean {
  const [fine, setFine] = useState(() => matches("(pointer: fine)"));
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const handler = (e: MediaQueryListEvent) => setFine(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return fine;
}

function formatIST(): { time: string; date: string } {
  const now = new Date();
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);
  const date = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
  }).format(now);
  return { time, date };
}

export function useISTClock(): { time: string; date: string } {
  const [state, setState] = useState(() => formatIST());
  useEffect(() => {
    const id = setInterval(() => setState(formatIST()), 1000 * 15);
    return () => clearInterval(id);
  }, []);
  return state;
}
