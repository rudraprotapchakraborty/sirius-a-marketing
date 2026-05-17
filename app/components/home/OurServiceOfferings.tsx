"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Search,
  Compass,
  Globe,
  FileText,
  Camera,
  ArrowUpRight,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    icon: MessageCircle,
    title: "Social Media Management",
    description:
      "Content systems, calendars, and community — engineered for compounding reach.",
    link: "/services/social-media-management",
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: Search,
    title: "Meta & Google Ads",
    description: "Paid acquisition with attribution discipline.",
    link: "/services/meta-and-google-ads",
    span: "md:col-span-2",
  },
  {
    icon: Compass,
    title: "Brand Strategy & Consulting",
    description: "Positioning, narrative, and identity that compounds.",
    link: "/services/brand-strategy-and-consulting",
    span: "md:col-span-2",
  },
  {
    icon: Globe,
    title: "Website & Funnel",
    description: "Landing pages that convert.",
    link: "/services/website-and-funnel-optimization",
    span: "md:col-span-2",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "SEO blogs, video, audio — surface area for trust.",
    link: "/services/content-marketing",
    span: "md:col-span-2",
  },
  {
    icon: Camera,
    title: "Photography & Video",
    description: "Production with craft you can feel.",
    link: "/services/photography-video",
    span: "md:col-span-2",
  },
];

const item = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE },
  viewport: { once: true, margin: "-60px" },
};

export default function OurServiceOffering() {
  return (
    <section
      id="services"
      className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-8"
    >
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: true, margin: "-60px" }}
          className="md:col-span-5"
        >
          <span className="eyebrow">What we do · 01</span>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-[4.5rem]">
            <span className="text-stellar">Six disciplines.</span>{" "}
            <span className="italic text-cobalt-grad">One orbit.</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          viewport={{ once: true, margin: "-60px" }}
          className="self-end text-lg leading-relaxed text-text-dim md:col-span-6 md:col-start-7"
        >
          We don&apos;t sell tactics — we run integrated programs that move every metric that
          matters. From positioning to paid, content to creative, each service compounds the
          others.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:auto-rows-[180px] md:grid-cols-4 md:gap-4">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              {...item}
              transition={{ ...item.transition, delay: i * 0.06 }}
              className={service.span}
            >
              <Link href={service.link} className="group block h-full">
                <div className="surface-card relative flex h-full flex-col justify-between overflow-hidden p-7">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cobalt/0 blur-3xl transition-all duration-700 ease-out-expo group-hover:bg-cobalt/30"
                  />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-hairline/60 bg-surface-2/70 text-cobalt-glow transition-all duration-500 group-hover:border-cobalt-glow/50 group-hover:bg-cobalt/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 -translate-x-2 translate-y-2 text-text-muted opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-cobalt-glow group-hover:opacity-100" />
                  </div>

                  <div className="relative mt-8">
                    {service.featured && (
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cobalt-glow/80">
                        Flagship
                      </span>
                    )}
                    <h3
                      className={`mt-1 font-display tracking-tight text-foreground ${
                        service.featured ? "text-4xl sm:text-5xl" : "text-2xl"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`mt-3 text-text-dim ${
                        service.featured ? "text-base max-w-md" : "text-sm"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-14 flex justify-center"
      >
        <Link href="/services" className="btn-ghost group">
          View all services
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
        </Link>
      </motion.div>
    </section>
  );
}
