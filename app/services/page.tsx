"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

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

  const toggleExpand = (index: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Marketing Solutions That Deliver Real Impact!
        </motion.h1>

        <div className="space-y-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg transition-all duration-300 ${
                expandedIndex === index
                  ? "bg-gradient-to-r from-purple-900/90 to-blue-900/90"
                  : "bg-gradient-to-r from-gray-800/90 to-slate-800/90 hover:from-purple-900/70 hover:to-blue-900/70"
              }`}
            >
              <div className="flex items-start gap-6">
                <Link href={`/services/${service.slug}`} className="flex-grow block">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-white mb-2 font-display tracking-wider">
                        {service.title}
                      </h2>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                    </div>
                  </div>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex-shrink-0 text-white hover:bg-white/10"
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
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-gray-300 pl-4 border-l-2 border-purple-500 mt-4"
                >
                  {service.expandedContent?.map((content, i) => (
                    <p key={i} className="mb-2">
                      {content}
                    </p>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
              Get a Custom Marketing Plan for Free
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

