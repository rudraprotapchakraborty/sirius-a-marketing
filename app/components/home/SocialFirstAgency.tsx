"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const SocialFirstAgency = () => {
  const logos = [
    "/waffletime.jpg",
    "/zafenity.jpg",
    "/ghuddy.jpg",
    "/namimoon.jpg",
    "/kudos.jpg",
    "/masalaking.jpg",
    "/bridgepoint.jpg",
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-70"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl"></div>
      
      <div className="relative flex flex-col md:flex-row px-4 sm:px-8 md:px-16 lg:px-32 justify-between items-center py-16 md:py-24 min-h-screen max-w-7xl mx-auto">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-full md:max-w-2xl mb-16 md:mb-0 text-center md:text-left z-10"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full">
            Digital Marketing Experts
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            The results-driven<br />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              Social first agency
            </span><br />
            you've been looking for
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
            We help brands connect with their audience through strategic digital marketing that drives real business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 w-full sm:w-auto"
              >
                Browse Our Services
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
            
            <Link href="/sirius-a-visual">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
              >
                Sirius A Visual
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
          </div>
          
          {/* Brand logos */}
          <div className="mt-12">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Trusted by 50+ leading brands worldwide</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="w-14 h-14 rounded-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md transform hover:scale-110 transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Brand logo ${index + 1}`}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Video Phone Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative w-72 sm:w-80 md:w-96 h-[500px] sm:h-[550px] md:h-[600px] z-10"
        >
          <motion.div
            className="relative w-full h-full"
          >
            <Image
              src="/phone.png"
              alt="Phone Frame"
              fill
              style={{ objectFit: "contain" }}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
            <div className="absolute top-[12%] left-[10%] right-[10%] bottom-[12%] bg-black rounded-[32px] z-0"></div>
            <iframe
              src="https://player.vimeo.com/video/1068853374?autoplay=1&muted=1&loop=1&background=1"
              title="Promotional video showing our agency's work"
              className="absolute top-[15%] left-[13%] w-[74%] h-[70%] rounded-3xl z-20"
              allow="autoplay; fullscreen"
            />
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl z-0"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl z-0"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialFirstAgency;