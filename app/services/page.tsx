"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Plus, ArrowUpRight, ChevronRight } from "lucide-react"
import Link from "next/link"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  expandedContent?: string[]
  slug: string
}

const services: Service[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-message-square h-12 w-12 text-white"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "SOCIAL MEDIA MANAGEMENT",
    description: "Content creation, scheduling, and engagement",
    expandedContent: ["Platform-specific strategies for:", "• Facebook", "• Instagram", "• TikTok", "• LinkedIn"],
    slug: "social-media-management",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-target h-12 w-12 text-white"
      >
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="8" />
        <path d="M12 2v2M12 20v2M22 12h-2M4 12h2" />
      </svg>
    ),
    title: "META & GOOGLE ADS",
    description: "High-converting ad campaigns",
    expandedContent: ["• Audience targeting", "• Budget optimization", "• Performance tracking", "• ROI maximization"],
    slug: "meta-and-google-ads",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-briefcase h-12 w-12 text-white"
      >
        <rect width="20" height="12" x="2" y="7" rx="2" ry="2" />
        <rect width="16" height="5" x="4" y="2" rx="2" ry="2" />
      </svg>
    ),
    title: "BRAND STRATEGY & CONSULTING",
    description: "Brand positioning, storytelling, and identity building",
    expandedContent: [
      "• Brand identity development",
      "• Market positioning",
      "• Brand storytelling",
      "• Visual identity guidelines",
    ],
    slug: "brand-strategy-and-consulting",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-layout-dashboard h-12 w-12 text-white"
      >
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="3" y="12" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
      </svg>
    ),
    title: "WEBSITE & FUNNEL OPTIMIZATION",
    description: "Landing pages that convert",
    expandedContent: [
      "• UX/UI improvements",
      "• Conversion rate optimization",
      "• Sales funnel development",
      "• Performance analytics",
    ],
    slug: "website-and-funnel-optimization",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-file-text h-12 w-12 text-white"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" />
        <line x1="16" x2="8" y1="17" y2="17" />
        <path d="M10 9H8" />
      </svg>
    ),
    title: "CONTENT MARKETING",
    description: "SEO-driven blogs, video content, audio content",
    expandedContent: [
      "• SEO-optimized blog posts",
      "• Video content creation",
      "• Podcast production",
      "• Content strategy development",
    ],
    slug: "content-marketing",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-camera h-12 w-12 text-white"
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
    title: "SIRIUS A VISUAL",
    description: "High-quality visual content for your brand",
    expandedContent: [
      "• Professional photography services",
      "• Video production and editing",
      "• Drone photography and videography",
      "• 360° virtual tours",
    ],
    slug: "photography-video",
  },
]

export default function ServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [activeService, setActiveService] = useState<number | null>(null)
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleExpand = (index: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const handleServiceHover = (index: number | null) => {
    setActiveService(index)
  }

  // Scroll to expanded service
  useEffect(() => {
    if (expandedIndex !== null && serviceRefs.current[expandedIndex]) {
      serviceRefs.current[expandedIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }, [expandedIndex])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-8 sm:pt-40">
        <motion.div
          className="mb-20 max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Services · 01</span>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-[-0.02em]">
            <span className="text-stellar">Marketing built for</span>{" "}
            <span className="italic text-cobalt-grad">real impact.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-dim">
            Six disciplines that compound: from positioning to paid, content to creative.
            Designed to move every metric that matters.
          </p>
        </motion.div>

        <div className="space-y-3">
          {services.map((service, index) => {
            const open = expandedIndex === index;
            return (
              <motion.div
                key={index}
                ref={(el) => {
                  serviceRefs.current[index] = el;
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
                onMouseEnter={() => handleServiceHover(index)}
                onMouseLeave={() => handleServiceHover(null)}
                className={`surface-card overflow-hidden transition-all duration-700 ease-out-expo ${
                  open ? "border-cobalt-glow/40" : ""
                }`}
              >
                <div className="flex flex-col gap-6 p-7 md:flex-row md:items-center md:p-9">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex flex-1 flex-col gap-6 md:flex-row md:items-center"
                  >
                    <span className="hidden font-mono text-sm font-medium text-cobalt-glow md:block md:w-12">
                      0{index + 1}
                    </span>

                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-hairline/60 bg-surface-2/60 text-cobalt-glow transition-all duration-500 group-hover:border-cobalt-glow/60 group-hover:bg-cobalt/15">
                      <span className="[&_svg]:h-6 [&_svg]:w-6 [&_svg]:text-current">
                        {service.icon}
                      </span>
                    </div>

                    <div className="flex-grow">
                      <h2 className="font-display text-2xl tracking-tight text-foreground transition-colors duration-500 group-hover:text-cobalt-glow md:text-3xl">
                        {service.title.toLowerCase().replace(/(^|\s)\S/g, (s) => s.toUpperCase())}
                      </h2>
                      <p className="mt-2 max-w-2xl text-text-dim">{service.description}</p>
                    </div>

                    <ArrowUpRight
                      className="hidden h-5 w-5 text-text-muted transition-all duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cobalt-glow md:block"
                    />
                  </Link>

                  <Button
                    variant="ghost"
                    size="icon"
                    aria-expanded={open}
                    aria-controls={`service-expand-${index}`}
                    onClick={(e) => toggleExpand(index, e)}
                    className="flex-shrink-0 self-end rounded-full border border-hairline/60 bg-surface-2/40 text-foreground hover:bg-surface-2 md:self-center"
                  >
                    <Plus
                      className={`h-5 w-5 transition-transform duration-500 ease-out-expo ${
                        open ? "rotate-45" : ""
                      }`}
                    />
                    <span className="sr-only">Expand details</span>
                  </Button>
                </div>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      id={`service-expand-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-hairline/50 px-7 pb-9 pt-7 md:px-9">
                        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                          <div className="space-y-2 border-l border-cobalt-glow/30 pl-5">
                            {service.expandedContent?.map((content, i) => (
                              <motion.p
                                key={i}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                className="text-text-dim"
                              >
                                {content}
                              </motion.p>
                            ))}
                          </div>
                          <div className="flex items-end justify-start md:justify-end">
                            <Link href={`/services/${service.slug}`} className="btn-ghost group">
                              View service details
                              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="surface-card relative overflow-hidden p-12 text-center md:p-20">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cobalt/30 blur-[100px]" />
            </div>
            <span className="eyebrow relative">Ready when you are</span>
            <h2 className="relative mt-5 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              <span className="text-stellar">Ready to transform</span>{" "}
              <span className="italic text-cobalt-grad">your marketing?</span>
            </h2>
            <p className="relative mx-auto mt-6 max-w-xl text-text-dim">
              We&apos;ll analyze your business, surface the real constraint, and propose a
              90-day plan with measurable bets. Complimentary.
            </p>
            <Link href="/contact" className="btn-stellar group relative mt-10 inline-flex">
              Get a custom plan
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}