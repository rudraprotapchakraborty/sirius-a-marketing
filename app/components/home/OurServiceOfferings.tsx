"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Search,
  DollarSign,
  Globe,
  FileText,
  Palette,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function OurServiceOffering() {
  const services = [
    {
      icon: MessageCircle,
      title: "Social Media Management",
      description: "Content creation, scheduling, and engagement",
      link: "/services/social-media-management",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Search,
      title: "Meta & Google Ads",
      description: "High-converting ad campaigns",
      link: "/services/meta-and-google-ads",
      color: "from-purple-500 to-fuchsia-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: DollarSign,
      title: "Brand Strategy & Consulting",
      description:
        "Brand positioning, storytelling, and identity building.",
      link: "/services/brand-strategy-and-consulting",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Globe,
      title: "Website & Funnel Optimization",
      description: "Landing pages that convert",
      link: "/services/website-and-funnel-optimization",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-100 dark:bg-amber-900/20",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "SEO-driven blogs, video content, audio content.",
      link: "/services/content-marketing",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-100 dark:bg-pink-900/20",
      iconColor: "text-pink-600 dark:text-pink-400",
    },
    {
      icon: Palette,
      title: "Photography & Video",
      description: "High-quality visual content for your brand",
      link: "/services/photography-video",
      color: "from-cyan-500 to-sky-600",
      bgColor: "bg-cyan-100 dark:bg-cyan-900/20",
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
  ];

  return (
    <motion.section
      id="features"
      className="relative z-10 py-20 px-4 sm:px-8 bg-gradient-to-b from-white/40 to-white/20 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-md rounded-2xl shadow-md max-w-7xl mx-auto overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div
        className="flex flex-col items-center mb-16"
        variants={fadeIn}
      >
        <span className="px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
          Our Expertise
        </span>
        <motion.h2
          className="text-center text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text max-w-2xl"
          variants={fadeIn}
        >
          Our Service Offerings
        </motion.h2>
        <motion.p 
          className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl"
          variants={fadeIn}
        >
          Comprehensive marketing solutions tailored to elevate your brand and drive measurable results
        </motion.p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Link href={service.link} className="block h-full" passHref>
              <Card className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 dark:group-hover:opacity-10 rounded-2xl"></div>
                <div className="absolute h-1 top-0 left-0 right-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
                <CardContent className="p-6 flex flex-col h-full">
                  <motion.div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${service.bgColor} ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    animate={{ opacity: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <service.icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-auto">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-16 text-center"
        variants={fadeIn}
      >
        <Link href="/services" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1">
          View all services
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </motion.div>
    </motion.section>
  );
}