"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    n: "01",
    title: "Diagnose",
    body: "We audit your funnel, brand, and category — surfacing what's actually limiting growth.",
  },
  {
    n: "02",
    title: "Architect",
    body: "Positioning, message map, and a 90-day plan with measurable bets.",
  },
  {
    n: "03",
    title: "Build",
    body: "Creative, content, ads, and site work — produced in-studio, shipped weekly.",
  },
  {
    n: "04",
    title: "Compound",
    body: "Each cycle informs the next. We trade vanity for velocity.",
  },
];

export default function WhatsNextForYourMarketing() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: true, margin: "-60px" }}
          className="md:col-span-5"
        >
          <span className="eyebrow">How we work · 02</span>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            <span className="text-stellar">What&apos;s next</span>
            <span className="block italic text-cobalt-grad">for your marketing?</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-text-dim">
            A clear, four-phase engagement. No theatre, no fluff — just the path from where you
            are to where you should be.
          </p>

          <Link href="/contact" className="btn-stellar group mt-10 inline-flex">
            Book a discovery call
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
          </Link>

          <motion.div
            aria-hidden
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: EASE }}
            viewport={{ once: true }}
            className="mt-12 hidden md:block"
          >
            <div className="relative h-40 w-40">
              <div className="absolute inset-0 rounded-full bg-cobalt/20 blur-2xl" />
              <Image src="/logo.png" alt="" fill className="relative object-contain opacity-90 animate-float" />
            </div>
          </motion.div>
        </motion.div>

        <ol className="relative md:col-span-7 md:col-start-6">
          <div aria-hidden className="absolute left-[1.85rem] top-2 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cobalt-glow/40 via-hairline to-transparent md:block" />
          {steps.map((step, i) => (
            <motion.li
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-40px" }}
              className="relative flex gap-6 border-b border-hairline/40 py-8 first:pt-0 last:border-b-0"
            >
              <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-hairline/60 bg-surface/80 font-mono text-sm font-medium text-cobalt-glow backdrop-blur-sm">
                {step.n}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-display text-3xl tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md text-text-dim">{step.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
