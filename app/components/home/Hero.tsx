"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero: React.FC = () => {
  return (
    <motion.section className="relative w-full min-h-[80vh] text-center hero-content">
      <div className="relative z-10">
        <motion.h1
          className="mx-auto max-w-5xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-teal-600 animate-gradient-x pt-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <span className="block text-white">Your Partner for</span>
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
            className="block text-white pb-24"
          />
        </motion.h1>
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg text-gray-100 px-2"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          We empower businesses to thrive in today's competitive market. Our cutting-edge strategies, data-driven
          approach, and creative campaigns strategically position your brand for industry leadership.
        </motion.p>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <Button className="my-8 bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
            Meet the Team
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
