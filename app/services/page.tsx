"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Plus, ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Service {
  icon: JSX.Element
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Marketing Solutions That Deliver Real Impact
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored strategies to help your business grow, engage customers, and increase revenue.
          </p>
        </motion.div>

        <div className="space-y-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={el => serviceRefs.current[index] = el}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 md:p-8 rounded-xl transition-all duration-500 shadow-lg ${
                expandedIndex === index
                  ? "bg-gradient-to-r from-purple-900/90 to-blue-900/90 shadow-purple-500/20"
                  : "bg-gradient-to-r from-gray-800/90 to-slate-800/90 hover:from-purple-900/70 hover:to-blue-900/70"
              }`}
              onMouseEnter={() => handleServiceHover(index)}
              onMouseLeave={() => handleServiceHover(null)}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <Link href={`/services/${service.slug}`} className="flex-grow block group">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <motion.div 
                      className="flex-shrink-0 p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg mx-auto md:mx-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {service.icon}
                    </motion.div>
                    <div className="flex-grow text-center md:text-left">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-3 font-display tracking-wider group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-gray-300 mb-4 md:pr-8">{service.description}</p>
                      <div className="hidden md:block">
                        <span className="text-purple-400 text-sm font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                          Learn more <ChevronRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex-shrink-0 text-white hover:bg-white/10 self-center md:self-start"
                  onClick={(e) => toggleExpand(index, e)}
                >
                  <Plus
                    className={`h-5 w-5 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-45" : ""
                    }`}
                  />
                  <span className="sr-only">Expand</span>
                </Button>
              </div>
              
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-purple-500/30"
                  >
                    <div className="text-gray-200 pl-4 border-l-2 border-purple-500 space-y-3">
                      {service.expandedContent?.map((content, i) => (
                        <motion.p 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-base md:text-lg"
                        >
                          {content}
                        </motion.p>
                      ))}
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 flex justify-end"
                    >
                      <Link href={`/services/${service.slug}`}>
                        <Button className="bg-white/10 hover:bg-white/20 text-white flex items-center gap-2">
                          View service details
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl rounded-full"></div>
          <div className="relative bg-gradient-to-r from-purple-900/80 to-blue-900/80 p-8 md:p-12 rounded-2xl shadow-xl border border-purple-500/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your marketing?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts will analyze your business needs and create a customized marketing strategy to help you achieve your goals.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-900/30 flex items-center gap-2 mx-auto">
                <span>Get a Custom Marketing Plan for Free</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}