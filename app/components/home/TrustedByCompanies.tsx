"use client";

import { motion } from "framer-motion";
import MovingLogos from "./MovingLogos";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function TrustedByCompanies() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col items-center gap-3 text-center"
      >
        <span className="eyebrow">In good company</span>
        <h2 className="max-w-3xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
          <span className="text-stellar">Trusted by</span>{" "}
          <span className="text-cobalt-grad italic">50+ brands</span>{" "}
          <span className="text-stellar">worldwide.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <MovingLogos />
      </motion.div>
    </section>
  );
}
