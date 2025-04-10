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
    },
    {
      icon: Search,
      title: "Meta & Google Ads",
      description: "High-converting ad campaigns",
      link: "/services/meta-and-google-ads",
    },
    {
      icon: DollarSign,
      title: "Brand Strategy & Consulting",
      description:
        "Brand positioning, storytelling, and identity building.",
      link: "/services/brand-strategy-and-consulting",
    },
    {
      icon: Globe,
      title: "Website & Funnel Optimization",
      description: "Landing pages that convert",
      link: "/services/website-and-funnel-optimization",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "SEO-driven blogs, video content, audio content.",
      link: "/services/content-marketing",
    },
    {
      icon: Palette,
      title: "Photography & Video",
      description: "High-quality visual content for your brand",
      link: "/services/photography-video",
    },
  ];

  return (
    <motion.section
      id="features"
      className="relative z-10 py-20 px-4 sm:px-8 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md max-w-7xl mx-auto"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold mb-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        variants={fadeIn}
      >
        Our Service Offerings
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Link href={service.link} passHref>
              <Card className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardContent className="p-6 flex flex-col items-start">
                  <motion.div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <service.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
