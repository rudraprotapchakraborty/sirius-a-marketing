"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

const storyCards = [
  {
    n: "01",
    title: "Nature",
    subtitle: "of our business",
    videoSrc:
      "https://videos.pexels.com/video-files/5170597/5170597-hd_1920_1080_24fps.mp4",
    quote: "'Sirius' — the brightest of all stars in the universe.",
    body: "We use technology to facilitate connection, never to replace it. Every program we run is anchored in real conversation, face-to-face craft, and the kind of human nuance that algorithms miss.",
  },
  {
    n: "02",
    title: "Nurture",
    subtitle: "is our business",
    videoSrc:
      "https://videos.pexels.com/video-files/3251846/3251846-uhd_2560_1440_25fps.mp4",
    quote: "Give a brand a campaign, you feed it for a quarter. Teach it to compound, you feed it for a decade.",
    body: "We invest in operator capability — playbooks, dashboards, and the institutional knowledge your team keeps long after we leave. The work outlasts the engagement.",
  },
];

export default function OurStory() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col items-center text-center"
      >
        <span className="eyebrow">Our story · 05</span>
        <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
          <span className="text-stellar">Two principles.</span>{" "}
          <span className="italic text-cobalt-grad">One studio.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-dim">
          Sirius A was built on a belief: marketing is human work, made measurable. Here&apos;s
          how we hold that line.
        </p>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {storyCards.map((card, i) => (
          <motion.div
            key={card.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.12 }}
            viewport={{ once: true, margin: "-60px" }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="surface-card group relative h-[28rem] overflow-hidden md:h-[32rem]"
          >
            <video
              src={card.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1500ms] ease-out-expo ${
                active === i ? "scale-105 opacity-30" : "opacity-50"
              }`}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/55 to-ink/95"
            />
            <div
              aria-hidden
              className={`absolute inset-0 bg-gradient-to-tr from-cobalt/20 to-transparent opacity-0 transition-opacity duration-700 ${
                active === i ? "opacity-100" : ""
              }`}
            />

            <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm font-medium text-cobalt-glow">{card.n}</span>
                <ArrowUpRight
                  className={`h-5 w-5 transition-all duration-500 ${
                    active === i ? "translate-x-1 -translate-y-1 text-cobalt-glow" : "text-text-dim"
                  }`}
                />
              </div>

              <div>
                <h3 className="font-display text-6xl tracking-tight text-foreground sm:text-7xl">
                  {card.title}
                </h3>
                <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-text-dim">
                  {card.subtitle}
                </p>

                <div
                  className={`grid overflow-hidden transition-all duration-700 ease-out-expo ${
                    active === i ? "mt-6 grid-rows-[1fr]" : "mt-0 grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="font-display text-lg italic leading-snug text-foreground">
                      {card.quote}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-text-dim">{card.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-14 flex justify-center"
      >
        <Link href="/about" className="btn-ghost group">
          Read our manifesto
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
        </Link>
      </motion.div>
    </section>
  );
}
