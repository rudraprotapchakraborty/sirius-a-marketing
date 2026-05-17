"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    company: "Tech Innovators Inc.",
    position: "Marketing Director",
    avatar: "/placeholder.svg",
    rating: 5,
    review:
      "Sirius A transformed our presence in eight weeks. The work was sharp, the meetings were short, and the numbers moved every cycle.",
  },
  {
    id: 2,
    name: "Bob Smith",
    company: "Global Solutions Ltd.",
    position: "CEO",
    avatar: "/placeholder.svg",
    rating: 5,
    review:
      "Their data discipline is rare in this industry. We finally understand what's working and why — and the creative is the best we've shipped.",
  },
  {
    id: 3,
    name: "Carol Davis",
    company: "Eco Friendly Co.",
    position: "Brand Manager",
    avatar: "/placeholder.svg",
    rating: 5,
    review:
      "They came in with a point of view, not a slide deck. Twelve months later we're the category leader in our segment.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl overflow-hidden px-4 py-28 sm:px-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: true, margin: "-60px" }}
          className="md:col-span-5"
        >
          <span className="eyebrow">Operators · 04</span>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            <span className="text-stellar">In their</span>
            <span className="block italic text-cobalt-grad">own words.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-text-dim">
            Founders, marketers, and operators who trusted us with the next chapter. The
            shortest path to knowing what we&apos;re like is to hear from them.
          </p>

          <Link href="/reviews" className="btn-ghost group mt-10 inline-flex">
            Read all reviews
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
          </Link>
        </motion.div>

        <div className="md:col-span-7">
          <motion.div
            key={reviews[active].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="surface-card relative p-10 sm:p-12"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[1.25rem] [background:radial-gradient(circle_at_top_right,hsl(var(--cobalt)/0.12),transparent_60%)]"
            />
            <div className="relative">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < reviews[active].rating
                        ? "fill-gold text-gold"
                        : "text-text-muted"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="mt-8 font-display text-3xl leading-[1.2] text-foreground sm:text-4xl">
                &ldquo;{reviews[active].review}&rdquo;
              </blockquote>
              <div className="mt-10 flex items-center gap-4">
                <Avatar className="h-12 w-12 border border-hairline/60">
                  <AvatarImage src={reviews[active].avatar} alt={reviews[active].name} />
                  <AvatarFallback className="bg-cobalt/20 text-cobalt-glow">
                    {reviews[active].name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-foreground">{reviews[active].name}</div>
                  <div className="text-sm text-text-dim">
                    {reviews[active].position} · {reviews[active].company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setActive(i)}
                className="group relative flex-1 py-3"
                aria-label={`Show review from ${r.name}`}
              >
                <span className="absolute inset-x-0 top-3 h-px bg-hairline" />
                <span
                  className={`absolute inset-x-0 top-3 h-px bg-gradient-to-r from-cobalt-glow to-ice transition-transform duration-700 ease-out-expo ${
                    active === i ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                />
                <span
                  className={`mt-2 block text-left font-mono text-[0.7rem] uppercase tracking-[0.2em] transition-colors ${
                    active === i ? "text-foreground" : "text-text-muted group-hover:text-text-dim"
                  }`}
                >
                  0{i + 1} · {r.name.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
