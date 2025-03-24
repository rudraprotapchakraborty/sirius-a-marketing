"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Palette, MessageCircle, Search, DollarSign, FileText, Globe, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TypeAnimation } from "react-type-animation"
import { useState, useRef } from "react"
import MovingLogos from "./components/MovingLogos"
import OurStory from "./components/OurStory"
import SocialFirstAgency from "./components/SocialFirstAgency"
import OurServiceOffering from "./components/OurServiceOfferings"
import Testimonials from "./components/Testimonials"
import WhatsNextForYourMarketing from "./components/WhatsNextForYourMarketing"
import TrustedByCompanies from "./components/TrustedByCompanies"
import Hero from "./components/Hero"

const blogPosts = [
  {
    title: "Getting Started with AI in Your SaaS",
    excerpt: "Learn how to integrate AI capabilities into your SaaS product for enhanced user experience.",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    category: "AI",
    slug: "getting-started-with-ai-in-your-saas",
  },
  {
    title: "The Future of Next.js and React",
    excerpt:
      "Explore the latest features and improvements in Next.js and React, and how they shape the future of web development.",
    date: "Jan 20, 2025",
    readTime: "7 min read",
    category: "Web Development",
    slug: "the-future-of-nextjs-and-react",
  },
  {
    title: "Optimizing Your SaaS for Performance",
    excerpt: "Discover key strategies to improve the performance and scalability of your SaaS application.",
    date: "Jan 25, 2025",
    readTime: "6 min read",
    category: "Performance",
    slug: "optimizing-your-saas-for-performance",
  },
]

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    company: "Tech Innovators Inc.",
    avatar: "/placeholder.svg",
    review:
      "Sirius A Marketing transformed our online presence. Their strategic approach and creative solutions helped us reach new heights in customer engagement.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bob Smith",
    company: "Global Solutions Ltd.",
    avatar: "/placeholder.svg",
    review:
      "The team at Sirius A Marketing is exceptional. Their data-driven strategies and innovative campaigns have significantly boosted our ROI.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carol Davis",
    company: "Eco Friendly Co.",
    avatar: "/placeholder.svg",
    review:
      "Working with Sirius A Marketing has been a game-changer for our brand. Their expertise in digital marketing is unparalleled.",
    rating: 4,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
}

export default function ClientPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play().catch((error) => {
          console.error("Error attempting to play video:", error)
        })
        setIsPlaying(true)
      }
    }
  }
  return (
    <div className="min-h-screen text-white max-w-full overflow-x-hidden">
      <Hero></Hero>
      <TrustedByCompanies></TrustedByCompanies>
      <OurServiceOffering></OurServiceOffering>
      <WhatsNextForYourMarketing></WhatsNextForYourMarketing>
      <Testimonials />
      <OurStory></OurStory>
      <SocialFirstAgency></SocialFirstAgency>

      {/* Blog Section - Scale In */}
      <motion.section
        className="container mx-auto px-4 py-20 max-w-full bg-white/70 dark:bg-transparent"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white" variants={scaleIn}>
          Latest Blogs & News
        </motion.h2>
        <motion.div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-full" variants={staggerChildren}>
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card className="border-purple-800/20 bg-[#e1e1eb] dark:bg-purple-900/10 overflow-hidden">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative overflow-hidden">
                    <Image
                      src="/placeholder.svg"
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-purple-600 text-white">{post.category}</Badge>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="text-center mt-8" variants={fadeInUp}>
          <Link href="/blog">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
              Read All Posts
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Final CTA - No Animation */}
      <section className="container mx-auto px-4 py-20 max-w-full bg-white/70 dark:bg-transparent">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Call to Action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Partner with Sirius A Marketing to elevate your business. Schedule a complimentary consultation to discuss
            your marketing transformation.
          </p>
          <div className="mt-8 space-y-2">
            <p className="text-lg text-gray-900 dark:text-white">
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              Call us:{" "}
              <a href="tel:+4407362622636" className="text-purple-600 dark:text-purple-400 hover:underline">
                +4407362622636
              </a>
            </p>
            <p className="text-lg text-gray-900 dark:text-white">
              <span role="img" aria-label="email">
                📧
              </span>{" "}
              Email:{" "}
              <a href="mailto:siriusmarketing@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                siriusmarketing@gmail.com
              </a>
            </p>
          </div>
          <Button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white">Schedule Consultation</Button>
        </div>
      </section>
      <style jsx global>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(138, 43, 226, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(138, 43, 226, 0.8);
          }
          100% {
            box-shadow: 0 0 5px rgba(138, 43, 226, 0.5);
          }
        }

        .feature-card {
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          animation: glow 1.5s infinite;
        }

        .bg-gradient-to-br {
          transition: all 0.3s ease;
        }

        .bg-gradient-to-br:hover {
          box-shadow: 0 0 15px rgba(138, 43, 226, 0.5);
        }
        .hero-content h1 {
          line-height: 1.2;
        }
        .hero-content h1 > span {
          display: block;
        }
        .hero-content h1 > span:first-child {
          margin-bottom: 0.5rem;
        }
      `}</style>
      <style jsx global>{`
  @keyframes gradient-x {
    0%, 100% {
      background-size: 200% 200%;
      background-position: left center;
    }
    50% {
      background-size: 200% 200%;
      background-position: right center;
    }
  }
  .animate-gradient-x {
    animation: gradient-x 15s ease infinite;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  .hero-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 0, 128, 0.2) 0%, transparent 50%);
    z-index: -1;
    opacity: 0.7;
    animation: float 10s ease-in-out infinite;
  }
  .hover\:scale-110:hover {
    transform: scale(1.1);
  }
`}</style>
      <style jsx>{`
  .logo-scroll-container {
    overflow: hidden;
    padding: 20px 0;
    width: 100%;
  }

  .logo-scroll {
    display: flex;
    animation: scrollLogos 30s linear infinite;
    width: fit-content;
  }

  .logo-scroll:hover {
    animation-play-state: paused;
  }

  .logo-item {
    flex: none;
    width: 120px;
    height: 60px;
    margin: 0 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes scrollLogos {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-50% - 0px)); /* Exactly half the width for seamless looping */
    }
  }
`}</style>
    </div>
  )
}

