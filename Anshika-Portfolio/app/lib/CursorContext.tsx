"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type CursorVariant = "default" | "view" | "link";

interface CursorContextValue {
  variant: CursorVariant;
  setVariant: (v: CursorVariant) => void;
}

const CursorContext = createContext<CursorContextValue>({
  variant: "default",
  setVariant: () => {},
});

export function useCursor() {
  return useContext(CursorContext);
}

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>("default");
  return <CursorContext.Provider value={{ variant, setVariant }}>{children}</CursorContext.Provider>;
}
