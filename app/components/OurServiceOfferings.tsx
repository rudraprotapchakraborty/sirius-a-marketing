"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Search, DollarSign, Globe, FileText, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const staggerChildren = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function OurServiceOffering() {
  const services = [
    { icon: MessageCircle, title: "Social Media Management", description: "Content creation, scheduling, and engagement", link: "/services/social-media-management" },
    { icon: Search, title: "Meta & Google Ads", description: "High-converting ad campaigns", link: "/services/meta-and-google-ads" },
    { icon: DollarSign, title: "Brand Strategy & Consulting", description: "Brand positioning, storytelling, and identity building.", link: "/services/brand-strategy-and-consulting" },
    { icon: Globe, title: "Website & Funnel Optimization", description: "Landing pages that convert", link: "/services/website-and-funnel-optimization" },
    { icon: FileText, title: "Content Marketing", description: "SEO-driven blogs, video content, audio content.", link: "/services/content-marketing" },
    { icon: Palette, title: "Sirius A Visual", description: "High-quality visual content for your brand", link: "/services/photography-video" },
  ];

  return (
    <motion.section
      id="features"
      className="container mx-auto px-6 py-20 max-w-full bg-[#e1e1eb] dark:bg-gray-900 shadow-lg"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <motion.h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white" variants={fadeIn}>
        Our Service Offerings
      </motion.h2>

      <motion.div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={staggerChildren}>
        {services.map((service, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Link href={service.link} passHref>
              <Card className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-start">
                  <motion.div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 transition-all duration-300 group-hover:scale-110"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <service.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
