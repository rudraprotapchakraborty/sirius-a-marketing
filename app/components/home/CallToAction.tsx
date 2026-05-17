"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Calendar, ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CallToAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 mx-auto w-full max-w-5xl px-4 py-28 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          viewport={{ once: true, margin: "-60px" }}
          className="surface-card relative overflow-hidden p-10 text-center sm:p-16 md:p-20"
        >
          {/* Backdrop ornaments */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cobalt/30 blur-[100px]" />
            <div className="starfield opacity-50" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
              className="absolute -right-40 -top-40 h-80 w-80 rounded-full border border-dashed border-cobalt-glow/15"
            />
          </div>

          {/* Floating brand mark */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: EASE }}
            viewport={{ once: true }}
            className="relative mx-auto mb-8 h-16 w-16"
          >
            <div className="absolute inset-0 rounded-full bg-cobalt/40 blur-2xl" />
            <Image
              src="/logo.png"
              alt=""
              fill
              className="relative animate-float object-contain"
            />
          </motion.div>

          <span className="eyebrow relative">Ready when you are</span>

          <h2 className="relative mt-6 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-stellar">Let&apos;s build the</span>{" "}
            <span className="italic text-cobalt-grad">next chapter.</span>
          </h2>

          <p className="relative mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-dim">
            A 30-minute call. No pitch deck, no pressure — just a sharp first read on what would
            move the needle for you.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <button onClick={() => setIsModalOpen(true)} className="btn-stellar group">
              <Calendar className="h-4 w-4" />
              Schedule consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
            </button>
            <Link href="/contact" className="btn-ghost group">
              Send a message
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10"
          >
            <a
              href="tel:+4407362622636"
              className="group flex items-center gap-2.5 text-sm text-text-dim transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-cobalt-glow" />
              <span className="font-mono">+44 07362 622636</span>
            </a>
            <span className="hidden h-4 w-px bg-hairline sm:block" />
            <a
              href="mailto:contact@siriusamarketing.com"
              className="group flex items-center gap-2.5 text-sm text-text-dim transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-cobalt-glow" />
              <span>contact@siriusamarketing.com</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[99999] bg-ink/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-3xl rounded-2xl border border-hairline/60 bg-ink-2 p-6 shadow-2xl"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.96 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-2xl">Book your discovery call</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-full p-2 text-text-dim hover:bg-surface-2 hover:text-foreground"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <iframe
                  src="https://calendly.com/contact-siriusamarketing/30min"
                  width="100%"
                  height="600"
                  className="rounded-lg border border-hairline/60"
                  frameBorder="0"
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
