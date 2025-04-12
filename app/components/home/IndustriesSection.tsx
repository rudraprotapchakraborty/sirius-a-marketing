"use client";

import { FC } from "react";
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

const industries = [
  { name: "Dentist", icon: FaBriefcaseMedical, color: "from-blue-400 to-cyan-400" },
  { name: "Ecommerce", icon: FaShoppingCart, color: "from-green-400 to-emerald-400" },
  { name: "Entertainment", icon: FaGamepad, color: "from-pink-400 to-rose-400" },
  { name: "Events", icon: FaProjectDiagram, color: "from-amber-400 to-yellow-400" },
  { name: "Fitness & Nutrition", icon: FaDumbbell, color: "from-red-400 to-orange-400" },
  { name: "Food", icon: FaUtensils, color: "from-orange-400 to-amber-400" },
  { name: "Luxury", icon: FaSuitcaseRolling, color: "from-yellow-400 to-amber-400" },
  { name: "Retail", icon: FaShoppingCart, color: "from-teal-400 to-green-400" },
  { name: "SaaS", icon: FaLaptopCode, color: "from-indigo-400 to-blue-400" },
  { name: "Small Business", icon: FaBuilding, color: "from-purple-400 to-indigo-400" },
  { name: "Technology", icon: FaLaptopCode, color: "from-blue-400 to-indigo-400" },
  { name: "Telecom", icon: FaPhoneAlt, color: "from-cyan-400 to-teal-400" },
  { name: "Tourism", icon: FaGlobe, color: "from-emerald-400 to-green-400" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const IndustriesSection: FC = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-purple-400 bg-purple-900/30 rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 text-transparent bg-clip-text">
            Industries We Work With
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At Sirius A, we extend our Digital Marketing expertise across a diverse range of industries,
            tailoring strategies to meet the unique demands and opportunities each sector presents.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {industries.map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-5 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r ${color} bg-opacity-10 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="text-sm text-gray-400">
                  Specialized marketing strategies for {name.toLowerCase()} businesses
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;