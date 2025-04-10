"use client";

import React from "react";
import { motion } from "framer-motion";

const WhatsNextForYourMarketing: React.FC = () => {
  return (
    <div className="relative my-20 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-12 py-24 sm:py-28 border-t border-b border-purple-500/40 shadow-[0_0_40px_rgba(128,0,255,0.5)]"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          What's next for your marketing?
        </h2>
        <a
          href="#"
          className="mt-10 inline-block px-6 py-3 rounded-full bg-purple-600 text-white font-semibold text-sm tracking-wide shadow-md hover:bg-purple-700 transition"
        >
          Get in touch →
        </a>
      </motion.div>

      {/* Floating Images */}
      <motion.img
        src="/img2.webp"
        alt="People"
        className="absolute left-0 bottom-[2px] w-[120px] sm:w-[160px] lg:w-[180px] opacity-90 z-0 rounded-lg"
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="/img1.jpg"
        alt="Red Appliances"
        className="absolute right-0 top-[2px] w-[120px] sm:w-[160px] lg:w-[180px] opacity-90 z-0 rounded-lg"
        initial={{ y: 0 }}
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

    </div>
  );
};

export default WhatsNextForYourMarketing;
