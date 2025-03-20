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
  const nodeRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / (duration * 1000), 1)

      if (end > 1000) {
        // For large numbers like 1,000,000
        setCount(Math.floor(percentage * end))
      } else {
        // For percentages or small numbers
        setCount(Math.floor(percentage * end * 10) / 10)
      }

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, isInView])

  return (
    <motion.div
      ref={nodeRef}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => setIsInView(true)}
    >
      <div className="mb-4 text-purple-500">{icon}</div>
      <h3 className="text-4xl md:text-5xl font-bold mb-2">
        {end > 1000000
          ? `${Math.floor(count / 1000000).toLocaleString()}M+`
          : end > 1000
            ? `${Math.floor(count).toLocaleString()}+`
            : `${count}${end === Math.floor(end) ? "" : "%"}`}
      </h3>
      <p className="text-gray-400 text-center">{label}</p>
    </motion.div>
  )
}

export default function WebsiteAndFunnelOptimizationPage() {
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
            Website & Funnel Optimization
          </span>
        </motion.h1>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CountUp end={200} label="Websites optimized" icon={<Rocket className="h-12 w-12" />} />
            <CountUp end={35} label="Average conversion rate increase" icon={<ThumbsUp className="h-12 w-12" />} />
            <CountUp end={8} label="Years of optimization expertise" icon={<Dumbbell className="h-12 w-12" />} />
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
              MAXIMIZE YOUR ONLINE POTENTIAL
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Optimize.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Convert.
              </span>
              <br />
              Grow.
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At Sirius A Marketing, we understand that a great website is more than just aesthetics. It's about
              creating a seamless user experience that guides visitors through your sales funnel and converts them into
              loyal customers.
            </motion.p>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Our website and funnel optimization services are designed to enhance every aspect of your online presence,
              from improving page load times to crafting compelling calls-to-action that drive conversions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg group transition-all duration-300 transform hover:translate-y-[-2px]">
                  <span className="mr-2 inline-block transition-transform group-hover:rotate-[20deg]">🚀</span>
                  Boost Your Conversions
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-video"
          >
            <div className="relative overflow-hidden rounded-lg w-full h-full">
              <Image
                src="/placeholder.svg"
                alt="Website optimization process"
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-purple-600/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Optimization Strategies Section */}
      <div className="bg-gray-900/50 py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase">
                COMPREHENSIVE OPTIMIZATION
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Strategies for Success 🎯</h2>
              <p className="text-gray-300 text-lg">
                We employ a range of proven strategies to optimize your website and sales funnel, ensuring maximum
                performance and conversions.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">🔍</span> UX/UI Improvements
                  </h3>
                  <p className="text-gray-300">
                    Enhance user experience with intuitive navigation and visually appealing designs that guide visitors
                    through your funnel.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">⚡</span> Page Speed Optimization
                  </h3>
                  <p className="text-gray-300">
                    Improve loading times to reduce bounce rates and increase engagement across all devices.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">📊</span> Conversion Rate Optimization (CRO)
                  </h3>
                  <p className="text-gray-300">
                    Implement data-driven strategies to increase the percentage of visitors who take desired actions on
                    your site.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">🔬</span> A/B Testing
                  </h3>
                  <p className="text-gray-300">
                    Continuously test and refine elements of your website and funnel to maximize performance.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-[300px] h-[600px] mx-auto">
                <div className="absolute inset-0 bg-black rounded-[40px] shadow-lg"></div>
                <div className="absolute inset-2 bg-gray-800 rounded-[36px] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-[36px] flex items-center justify-center">
                    <div className="w-20 h-4 bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover rounded-[32px]"
                      poster="/placeholder.svg"
                      playsInline
                      onClick={toggleVideo}
                    >
                      <source src="/placeholder-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={toggleVideo}
                    >
                      {!isPlaying && (
                        <div className="bg-black/50 text-white text-4xl w-16 h-16 rounded-full flex items-center justify-center">
                          ▶️
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase">
              OUR OPTIMIZATION SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">Elevate Your Online Presence</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              From technical optimizations to conversion-focused design, we offer comprehensive services to enhance your
              website and funnel performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Website Audit & Analysis",
                description:
                  "Comprehensive review of your website's performance, user experience, and conversion potential.",
                image: "/placeholder.svg",
                alt: "Website audit illustration",
              },
              {
                title: "Funnel Optimization",
                description:
                  "Strategic improvements to your sales funnel to guide visitors smoothly through the conversion process.",
                image: "/placeholder.svg",
                alt: "Funnel optimization process",
              },
              {
                title: "Conversion Rate Optimization",
                description:
                  "Data-driven strategies to increase the percentage of visitors who take desired actions on your site.",
                image: "/placeholder.svg",
                alt: "Conversion rate optimization illustration",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.alt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link href="/contact">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase">GOT QUESTIONS?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-300">
              Can't find what you're looking for?{" "}
              <Link href="/contact" className="text-purple-400 hover:text-purple-300 underline">
                Reach out to us directly
              </Link>{" "}
              and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How long does it take to see results from website optimization?",
                  answer:
                    "The timeline for seeing results can vary depending on the scope of optimization and your current website performance. Generally, you may start seeing improvements in metrics like page load time and user engagement within a few weeks. More significant improvements in conversion rates typically become apparent within 2-3 months of implementing changes.",
                },
                {
                  question: "Will optimizing my website affect its current design?",
                  answer:
                    "Our optimization process aims to enhance your website's performance while maintaining its core design elements. We focus on improving user experience, load times, and conversion paths, which may involve some design adjustments. However, we always work closely with you to ensure any changes align with your brand identity and preferences.",
                },
                {
                  question: "How do you measure the success of website and funnel optimization?",
                  answer:
                    "We use a variety of metrics to measure success, including page load times, bounce rates, time on site, conversion rates, and overall ROI. We provide regular reports that break down these metrics and offer insights on how to continually improve performance.",
                },
                {
                  question: "Can you optimize my e-commerce website and checkout process?",
                  answer:
                    "We have extensive experience in optimizing e-commerce websites and checkout processes. Our strategies include streamlining the user journey, reducing cart abandonment, and implementing trust signals to increase conversions. We'll work with you to identify and address any pain points in your current e-commerce funnel.",
                },
                {
                  question: "Do you offer ongoing optimization services?",
                  answer:
                    "Yes, we offer ongoing optimization services to ensure your website and funnel continue to perform at their best. This includes regular performance monitoring, A/B testing of new elements, and implementing updates based on the latest best practices and technologies. We recommend ongoing optimization to stay ahead of changing user behaviors and search engine algorithms.",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-purple-400">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

