"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const brandLogos = [
  "/waffletime.jpg",
  "/zafenity.jpg",
  "/ghuddy.jpg",
  "/namimoon.jpg",
  "/kudos.jpg",
  "/masalaking.jpg",
  "/bridgepoint.jpg",
];

export default function SocialFirstAgency() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl overflow-hidden px-4 py-28 sm:px-8">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-12">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: EASE }}
          viewport={{ once: true, margin: "-80px" }}
          className="md:col-span-7"
        >
          <span className="eyebrow">Studio · 06</span>
          <h2 className="mt-5 font-display text-5xl leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="text-stellar">The results-driven</span>{" "}
            <span className="italic text-cobalt-grad">social-first studio</span>{" "}
            <span className="text-stellar">you&apos;ve been looking for.</span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-dim">
            We build social as a system — not as a content treadmill. Hooks, frames, formats,
            and feedback loops that move from awareness to acquisition in measurable steps.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="btn-stellar group">
              Browse our services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
            </Link>
            <Link href="/sirius-a-visual" className="btn-ghost group">
              See Sirius A Visual
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
            </Link>
          </div>

          <div className="mt-14">
            <p className="eyebrow">Partners</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {brandLogos.map((logo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="h-12 w-12 overflow-hidden rounded-full border border-hairline/60 bg-surface transition-all duration-500 hover:border-cobalt-glow/60 hover:scale-110"
                >
                  <Image
                    src={logo}
                    alt={`Partner ${i + 1}`}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover opacity-80 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Phone visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
          viewport={{ once: true, margin: "-80px" }}
          className="md:col-span-5"
        >
          <div className="relative mx-auto h-[520px] w-72 sm:h-[580px] sm:w-80">
            {/* Glow */}
            <div
              aria-hidden
              className="absolute inset-0 -m-10 rounded-full bg-cobalt/25 blur-[80px]"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative h-full w-full"
            >
              <Image
                src="/phone.png"
                alt="Phone frame"
                fill
                style={{ objectFit: "contain" }}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
              <div className="absolute left-[10%] right-[10%] top-[12%] bottom-[12%] z-0 rounded-[32px] bg-black" />
              <iframe
                src="https://player.vimeo.com/video/1068853374?autoplay=1&muted=1&loop=1&background=1"
                title="Agency promo"
                className="absolute left-[13%] top-[15%] z-20 h-[70%] w-[74%] rounded-3xl"
                allow="autoplay; fullscreen"
              />
            </motion.div>

            {/* Floating annotation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 -left-4 z-30 hidden md:block"
            >
              <div className="surface-card flex items-center gap-3 px-4 py-3">
                <div className="h-2 w-2 rounded-full bg-cobalt-glow shadow-[0_0_10px_hsl(var(--cobalt-glow))]" />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-foreground">
                  Live · in market
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
