"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Rocket, ThumbsUp, Dumbbell, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const CountUp = ({ end, duration = 2, label, icon }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frameId: number
    const interval = 1000 / 60 // 60 frames per second
    const steps = Math.ceil(duration * 60)
    const increment = end / steps

    const animate = () => {
      if (count < end) {
        setCount(Math.min(end, count + increment))
        frameId = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => cancelAnimationFrame(frameId)
  }, [end, duration, count]) // Added count to dependencies

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white">{Math.floor(count)}</div>
      <div className="text-gray-400 text-sm mt-1">{label}</div>
      {icon}
    </div>
  )
}

export default function BrandStrategyAndConsultingPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleLoadedMetadata = () => {
        setIsVideoLoaded(true)
      }
      video.addEventListener("loadedmetadata", handleLoadedMetadata)
      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      }
    }
  }, [])

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      const handleEnded = () => setIsPlaying(false)
      videoElement.addEventListener("ended", handleEnded)
      return () => videoElement.removeEventListener("ended", handleEnded)
    }
  }, [])

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/placeholder.svg')", // Replace with your actual image
            filter: "brightness(0.3)",
          }}
        ></div>
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-center z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 neon-text">
            Brand Strategy & Consulting
          </span>
        </motion.h1>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CountUp end={100} label="Brands transformed" icon={<Rocket className="h-12 w-12" />} />
            <CountUp end={95} label="Client satisfaction rate" icon={<ThumbsUp className="h-12 w-12" />} />
            <CountUp end={10} label="Years of branding expertise" icon={<Dumbbell className="h-12 w-12" />} />
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.span
              className="text-purple-400 font-semibold tracking-wider text-sm uppercase"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ELEVATE YOUR BRAND
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Define.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Differentiate.
              </span>
              <br />
              Dominate.
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At Sirius A Marketing, we believe that a strong brand is the foundation of business success. Our brand
              strategy and consulting services are designed to help you define your unique identity, differentiate
              yourself in the market, and create lasting connections with your audience.
            </motion.p>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              From comprehensive brand audits to strategic positioning and visual identity development, we provide the
              expertise and insights you need to build a powerful, cohesive brand that resonates with your target
              market.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">Get Started</Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/placeholder.svg" // Replace with your actual image
              alt="Brand Strategy & Consulting"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Brand Strategy & Consulting Services
          </motion.h2>
          <Accordion type="single" className="space-y-4">
            <AccordionItem value="brand-identity">
              <AccordionTrigger>
                Brand Identity Development <ArrowRight className="h-4 w-4 ml-2" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-300">
                  We help you create a unique and memorable brand identity that resonates with your target audience.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="market-positioning">
              <AccordionTrigger>
                Market Positioning Strategy <ArrowRight className="h-4 w-4 ml-2" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-300">
                  We develop a strategic market positioning plan to help you stand out from the competition.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="brand-storytelling">
              <AccordionTrigger>
                Brand Storytelling & Messaging <ArrowRight className="h-4 w-4 ml-2" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-300">
                  We craft compelling brand stories and messaging that connect with your audience on an emotional level.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="visual-identity">
              <AccordionTrigger>
                Visual Identity Guidelines <ArrowRight className="h-4 w-4 ml-2" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-300">
                  We create a comprehensive set of visual identity guidelines to ensure brand consistency across all
                  platforms.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="brand-audit">
              <AccordionTrigger>
                Brand Audit & Competitive Analysis <ArrowRight className="h-4 w-4 ml-2" />
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-300">
                  We conduct a thorough brand audit and competitive analysis to identify opportunities for improvement.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

