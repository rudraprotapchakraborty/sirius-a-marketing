"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const teamMembers = [
  { name: "Md Nurur Rahman", role: "Founder & Regional Director" },
  { name: "Sakib", role: "Branding Strategist" },
  { name: "Mehedee", role: "Meta Marketing Specialist" },
  { name: "Topu", role: "Graphics Designer" },
  { name: "Arnob", role: "Graphics Designer" },
  { name: "Zareef", role: "Frontend Developer" },
  { name: "Yeasin", role: "Backend Developer" },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE },
  viewport: { once: true, margin: "-60px" },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-8 sm:pt-40">
        <motion.div {...fadeUp} className="max-w-4xl">
          <span className="eyebrow">About · 01</span>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
            <span className="text-stellar">Your business growth</span>{" "}
            <span className="italic text-cobalt-grad">partners.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-dim">
            Sirius A is a small studio of operators, strategists, and craftspeople. We&apos;ve
            built brands for SaaS founders, hospitality groups, retailers, and ambitious teams
            who want their marketing to feel like a competitive edge — not a cost center.
          </p>
        </motion.div>
      </section>

      {/* Story + Mission split */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-hairline/60 bg-hairline/40 md:grid-cols-2">
          <motion.div {...fadeUp} className="bg-ink/80 p-10 backdrop-blur-sm sm:p-14">
            <span className="eyebrow">Story</span>
            <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight">
              <span className="text-stellar">Built by operators,</span>{" "}
              <span className="italic text-cobalt-grad">for operators.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-text-dim">
              We started as a small team of marketers helping founder-led businesses do more
              with less. Today we&apos;re a full-service studio shipping campaigns, content,
              and creative for clients across the UK and Bangladesh — but the bias for
              operator-grade thinking hasn&apos;t changed.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="bg-ink/80 p-10 backdrop-blur-sm sm:p-14"
          >
            <span className="eyebrow">Mission</span>
            <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight">
              <span className="text-stellar">Unlock business potential</span>{" "}
              <span className="italic text-cobalt-grad">with marketing that compounds.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-text-dim">
              No vanity metrics. No theatrical decks. Just programs that move the needle on
              revenue, brand equity, and operator capability — measured in cycles, not
              campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
        <motion.div {...fadeUp} className="mb-16 max-w-2xl">
          <span className="eyebrow">The team · 02</span>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            <span className="text-stellar">A studio of</span>{" "}
            <span className="italic text-cobalt-grad">specialists.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-dim">
            Strategy, design, engineering, paid media, and brand — under one roof, working in
            short loops.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
              viewport={{ once: true, margin: "-40px" }}
              className="surface-card group p-6 text-center"
            >
              <Avatar className="mx-auto mb-5 h-20 w-20 border border-hairline/60 transition-all duration-500 group-hover:border-cobalt-glow/60">
                <AvatarImage
                  src={`/team/${member.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                />
                <AvatarFallback className="bg-surface-2 font-display text-2xl text-cobalt-glow">
                  {member.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-display text-xl tracking-tight">{member.name}</h3>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-dim">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-28 sm:px-8">
        <motion.div
          {...fadeUp}
          className="surface-card relative overflow-hidden p-12 text-center sm:p-20"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cobalt/30 blur-[100px]" />
          </div>
          <span className="eyebrow relative">Meet the team</span>
          <h2 className="relative mt-5 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            <span className="text-stellar">Ready to work</span>{" "}
            <span className="italic text-cobalt-grad">together?</span>
          </h2>
          <Link href="/contact" className="btn-stellar group relative mt-8 inline-flex">
            Meet our experts
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
