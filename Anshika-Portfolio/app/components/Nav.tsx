"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useAppLenis } from "../lib/LenisProvider";
import { navLinks } from "../lib/content";

export default function Nav() {
  const [shrink, setShrink] = useState(false);
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { scrollTo } = useAppLenis();
  const menuRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (v) => {
    setShrink(v > 120);
  });

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function handleAnchor(id: string) {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) scrollTo(el, { offset: -20 });
  }

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 focus:translate-y-0 bg-charcoal text-bg text-sm px-4 py-2 rounded-full outline-none"
      >
        Skip to content
      </a>

      <div className="fixed top-0 left-0 right-0 z-[85] flex justify-center px-4 pt-4 sm:pt-6">
        <motion.nav
          initial={false}
          animate={{
            maxWidth: shrink ? 640 : 1160,
            paddingLeft: shrink ? 10 : 0,
            paddingRight: shrink ? 10 : 0,
            paddingTop: shrink ? 8 : 0,
            paddingBottom: shrink ? 8 : 0,
            backgroundColor: shrink ? "rgba(250,248,244,0.85)" : "rgba(250,248,244,0)",
            boxShadow: shrink
              ? "0 1px 2px rgba(28,26,23,.04), 0 12px 32px rgba(28,26,23,.08)"
              : "0 0 0 0 rgba(28,26,23,0)",
            borderRadius: shrink ? 999 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex items-center justify-between backdrop-blur-sm"
          aria-label="Primary"
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleAnchor("hero");
            }}
            className="font-medium text-charcoal text-lg tracking-tight pl-2 outline-none"
          >
            AS.
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id} className="relative">
                <button
                  onClick={() => handleAnchor(link.id)}
                  className="relative px-4 py-2 text-sm text-stone outline-none focus-visible:text-charcoal"
                  aria-current={active === link.id ? "true" : undefined}
                >
                  <span className={active === link.id ? "text-charcoal" : ""}>{link.label}</span>
                  {active === link.id ? (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute left-1/2 -bottom-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-sand"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  <motion.span
                    className="absolute left-4 right-4 -bottom-0.5 h-px bg-charcoal origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    whileFocus={{ scaleX: 1 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block pr-1">
            <motion.button
              onClick={() => handleAnchor("contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-full bg-charcoal text-bg text-sm px-5 py-2.5 outline-none"
            >
              Get in touch
            </motion.button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-charcoal outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <Icon icon={menuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width={24} height={24} />
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[95] bg-bg flex flex-col justify-between md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="font-medium text-lg text-charcoal">AS.</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full text-charcoal outline-none"
                aria-label="Close menu"
              >
                <Icon icon="solar:close-circle-linear" width={24} height={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleAnchor(link.id)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 * i }}
                  className="text-left py-3 border-b border-hairline outline-none"
                >
                  <span className="text-[11px] tracking-[0.22em] text-faint mr-4">{link.number}</span>
                  <span className="text-3xl font-light text-charcoal">{link.label}</span>
                </motion.button>
              ))}
            </nav>
            <div className="px-6 pb-10">
              <motion.button
                onClick={() => handleAnchor("contact")}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                whileTap={{ scale: 0.97 }}
                className="w-full rounded-full bg-charcoal text-bg text-sm px-5 py-4 outline-none"
              >
                Get in touch
              </motion.button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
