"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import Container from "./Container";
import MagneticButton from "./MagneticButton";
import SplitText from "./SplitText";
import { contact } from "../lib/content";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(contact.email);
    } catch {
      // no-op fallback: selection based copy not required for this flow
    }
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2200);
  }

  return (
    <section id="contact" className="relative py-28 sm:py-40">
      <Container className="flex flex-col items-start gap-12">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] font-semibold tracking-[0.22em] uppercase text-stone"
        >
          {contact.eyebrow}
        </motion.span>

        <h2 className="font-light text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-charcoal max-w-[18ch]">
          <SplitText text={contact.heading} />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex items-center gap-2 text-sm text-stone"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-[#7A8B6F]"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
          />
          Available for select opportunities
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="flex flex-wrap items-center gap-4"
        >
          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            whileFocus={{ boxShadow: "0 0 0 4px rgba(179,162,140,0.3)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-flex items-center gap-3 rounded-full border border-hairline bg-bg-alt px-6 py-3.5 text-sm text-charcoal outline-none"
            aria-label="Copy email address"
          >
            <Icon icon="solar:letter-linear" width={18} height={18} />
            <span className="relative inline-block min-w-[13ch] text-left">
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex items-center gap-1.5"
                  >
                    Copied
                    <Icon icon="solar:check-circle-linear" width={16} height={16} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="email"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {contact.email}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </motion.button>

          <MagneticButton
            href={`mailto:${contact.email}`}
            variant="primary"
            showArrow
            ariaLabel="Send an email to Anshika Singh"
          >
            Send an email
          </MagneticButton>
        </motion.div>
      </Container>
    </section>
  );
}
