"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaBriefcaseMedical,
  FaLaptopCode,
  FaDumbbell,
  FaShoppingCart,
  FaGamepad,
  FaUtensils,
  FaProjectDiagram,
  FaSuitcaseRolling,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

const EASE = [0.16, 1, 0.3, 1] as const;

const industries = [
  { name: "Dentist", icon: FaBriefcaseMedical },
  { name: "Ecommerce", icon: FaShoppingCart },
  { name: "Entertainment", icon: FaGamepad },
  { name: "Events", icon: FaProjectDiagram },
  { name: "Fitness & Nutrition", icon: FaDumbbell },
  { name: "Food", icon: FaUtensils },
  { name: "Luxury", icon: FaSuitcaseRolling },
  { name: "Retail", icon: FaShoppingCart },
  { name: "SaaS", icon: FaLaptopCode },
  { name: "Small Business", icon: FaBuilding },
  { name: "Technology", icon: FaLaptopCode },
  { name: "Telecom", icon: FaPhoneAlt },
  { name: "Tourism", icon: FaGlobe },
];

export default function IndustriesSection() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col items-center text-center"
      >
        <span className="eyebrow">Sectors · 03</span>
        <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
          <span className="text-stellar">Wherever you build,</span>{" "}
          <span className="italic text-cobalt-grad">we&apos;ve built before.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-dim">
          Vertical-aware strategy from operators who&apos;ve shipped in these categories — not
          generalists guessing at your context.
        </p>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-40px" }}
        variants={{ animate: { transition: { staggerChildren: 0.03 } } }}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline/50 bg-hairline/40 sm:grid-cols-3 lg:grid-cols-4"
      >
        {industries.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            variants={{
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="group relative flex items-center gap-4 bg-ink/80 px-6 py-7 backdrop-blur-sm transition-colors duration-500 hover:bg-surface/80"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-hairline/60 bg-surface-2/60 text-text-dim transition-all duration-500 group-hover:border-cobalt-glow/60 group-hover:text-cobalt-glow">
              <Icon className="text-base" />
            </div>
            <h3 className="text-sm font-medium text-foreground/90 transition-colors group-hover:text-foreground">
              {name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
