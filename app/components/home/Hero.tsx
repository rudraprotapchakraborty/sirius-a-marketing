"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
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

const Hero: React.FC = () => {
  return (
    <motion.section
      className="relative w-full min-h-screen flex items-center justify-center text-center px-4 py-16 md:py-24 overflow-hidden"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-900/20 to-gray-900/90 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-teal-500/20 blur-3xl"
            style={{
              width: `${Math.random() * 30 + 10}rem`,
              height: `${Math.random() * 30 + 10}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl">
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-teal-600 animate-gradient-x"
          variants={fadeInUp}
        >
          <span className="block text-white mb-2">Your Partner for</span>
          <TypeAnimation
            sequence={[
              "Stellar Marketing Campaigns",
              2000,
              "Exponential Growth",
              2000,
              "Next-Level Branding",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-white"
          />
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-8 sm:mt-10 md:mt-12 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          We empower businesses to thrive in today's competitive market. Our cutting-edge strategies,
          data-driven approach, and creative campaigns strategically position your brand for industry leadership.
        </motion.p>
        
        {/* CTA Buttons */}
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
};

export default Hero;