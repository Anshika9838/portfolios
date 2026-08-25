"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Grain from "./components/Grain";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Nav from "./components/Nav";
import Preloader from "./components/Preloader";
import ProgressBar from "./components/ProgressBar";
import StackDark from "./components/StackDark";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import { CursorProvider } from "./lib/CursorContext";
import { LenisProvider } from "./lib/LenisProvider";

const principles = [
  "Strategy",
  "Discipline",
  "Clarity",
  "Continuous improvement",
  "Security-minded",
  "Product thinking",
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <LenisProvider>
      <CursorProvider>
        <AnimatePresence>{loading ? <Preloader /> : null}</AnimatePresence>
        <Grain />
        <ProgressBar />
        <Cursor />
        <Nav />
        <main id="main-content" className="relative bg-bg">
          <Hero />
          <Marquee items={principles} />
          <About />
          <Stats />
          <Work />
          <StackDark />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </CursorProvider>
    </LenisProvider>
  );
}
