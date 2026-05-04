"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Hero() {
  return (
    <motion.section
      className="relative w-full min-h-screen flex items-end justify-center text-center px-4 py-16 md:py-24 overflow-hidden"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/55" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[calc(100vh-7rem)] max-w-5xl flex-col items-center justify-center pt-16">
        <motion.div
          className="mb-6 inline-flex items-center rounded-full border border-purple-400/30 bg-black/30 px-4 py-2 text-sm font-medium text-purple-100 shadow-lg backdrop-blur-md"
          variants={fadeInUp}
        >
          Digital marketing that moves brands forward
        </motion.div>

        <motion.h1
          className="max-w-5xl text-balance text-5xl font-extrabold leading-tight tracking-normal text-white sm:text-6xl md:text-7xl lg:text-8xl"
          variants={fadeInUp}
        >
          Turn your brand into the brightest signal online.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-balance text-lg leading-8 text-gray-200 sm:text-xl"
          variants={fadeInUp}
        >
          Sirius A Marketing builds performance-led social, content, ads, and creative strategies for brands ready to grow with clarity.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeInUp}
        >
          <Link href="/contact" className="group">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.button>
          </Link>
          <Link href="/services" className="group">
            <motion.button
              className="px-8 py-3 bg-transparent border border-gray-400 text-white font-medium rounded-full hover:border-purple-400 hover:bg-purple-900/20 transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
