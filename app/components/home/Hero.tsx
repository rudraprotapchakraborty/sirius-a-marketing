"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero: React.FC = () => {
  return (
    <motion.section
      className="relative w-full min-h-screen flex items-start justify-center text-center px-4 pt-[20vh] pb-12"
    >
      <div className="relative z-10 max-w-5xl">
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-teal-600 animate-gradient-x"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
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
          initial="initial"
          animate="animate"
        >
          We empower businesses to thrive in today's competitive market. Our cutting-edge strategies,
          data-driven approach, and creative campaigns strategically position your brand for industry leadership.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;
