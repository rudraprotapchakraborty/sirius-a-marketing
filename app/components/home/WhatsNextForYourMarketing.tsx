"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const WhatsNextForYourMarketing: React.FC = () => {
  return (
    <div className="relative my-24 w-full max-w-7xl mx-auto px-4 sm:px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-3xl"></div>
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-12 py-24 sm:py-28 rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-sm shadow-[0_0_40px_rgba(128,0,255,0.2)]"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/40 via-indigo-500/40 to-purple-500/40"></div>
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Sparkle icon */}
        <motion.div
          className="mb-6 p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Sparkles className="w-6 h-6 text-purple-500" />
        </motion.div>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 leading-tight max-w-3xl">
          What's next for your marketing?
        </h2>
        
        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          Ready to transform your brand's digital presence? Let's create a strategy that drives real results.
        </p>
        
        <Link href="/contact" className="group mt-10">
          <motion.button
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-base tracking-wide shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </Link>
      </motion.div>

      {/* Floating Images */}
      <motion.div
        className="absolute left-0 bottom-0 sm:-left-5 md:-left-10 w-[140px] sm:w-[180px] lg:w-[220px] aspect-square z-0 rounded-2xl overflow-hidden shadow-xl"
        initial={{ y: 0, rotate: -5 }}
        animate={{ y: [0, -15, 0], rotate: [-5, -3, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/img2.webp"
          alt="People"
          fill
          sizes="(max-width: 768px) 140px, (max-width: 1200px) 180px, 220px"
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
      </motion.div>

      <motion.div
        className="absolute right-0 top-0 sm:-right-5 md:-right-10 w-[140px] sm:w-[180px] lg:w-[220px] aspect-square z-0 rounded-2xl overflow-hidden shadow-xl"
        initial={{ y: 0, rotate: 5 }}
        animate={{ y: [0, 15, 0], rotate: [5, 3, 5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/img1.jpg"
          alt="Red Appliances"
          fill
          sizes="(max-width: 768px) 140px, (max-width: 1200px) 180px, 220px"
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default WhatsNextForYourMarketing;