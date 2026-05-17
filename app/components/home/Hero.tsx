"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(25);
  const light = useMotionTemplate`radial-gradient(circle 720px at ${mx}% ${my}%, hsl(var(--cobalt) / 0.22), transparent 65%)`;

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      mx.set(((e.clientX - r.left) / r.width) * 100);
      my.set(((e.clientY - r.top) / r.height) * 100);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pb-24 pt-32 sm:pt-40"
    >
      {/* mouse-follow light */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: light }}
      />

      {/* faint grid */}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.08]" />

      {/* orbiting brand mark (decorative) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.6, ease: EASE, delay: 0.4 }}
        className="pointer-events-none absolute right-[-8%] top-[10%] hidden h-[28rem] w-[28rem] md:block"
      >
        <div className="absolute inset-6 rounded-full bg-cobalt/25 blur-[100px]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 rounded-full border border-dashed border-cobalt-glow/15"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, ease: "linear", repeat: Infinity }}
          className="absolute inset-10 rounded-full border border-dashed border-cobalt-glow/10"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image src="/logo.png" alt="" width={260} height={260} className="opacity-95" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
          className="eyebrow mb-10"
        >
          The brightest signal in marketing
        </motion.div>

        <h1 className="font-display text-balance text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95] tracking-[-0.02em]">
          {["Turn", "your", "brand", "into", "a"].map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.06 }}
              className="mr-[0.18em] inline-block text-stellar"
            >
              {w}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
            className="mt-1 block italic"
          >
            <span className="text-cobalt-grad">north star.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
          className="mt-10 max-w-2xl text-balance text-lg leading-relaxed text-text-dim sm:text-xl"
        >
          Sirius A is a performance-led studio building social, content, ads, and creative
          for ambitious brands. Strategy you can measure. Craft you can feel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link href="/contact" className="btn-stellar group">
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
          </Link>
          <Link href="/services" className="btn-ghost group">
            Explore services
            <span className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-24 flex flex-col items-center gap-3 text-text-muted"
        >
          <div className="hairline-v h-12" />
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.28em]">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
