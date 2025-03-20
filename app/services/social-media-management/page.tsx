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
  const countRef = useRef(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const timer = setInterval(() => {
      const timePassed = Date.now() - startTime
      const progress = Math.min(timePassed / (duration * 1000), 1)
      countRef.current = progress * end
      setCount(Math.floor(countRef.current))

      if (progress === 1) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration, isInView])

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => setIsInView(true)}
    >
      <div className="mb-4 text-purple-500">{icon}</div>
      <h3 className="text-4xl md:text-5xl font-bold mb-2">{count}</h3>
      <p className="text-gray-400 text-center">{label}</p>
    </motion.div>
  )
}

export default function SocialMediaManagementPage() {
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
            Social Media Management
          </span>
        </motion.h1>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CountUp end={500000} label="Social media impressions" icon={<Rocket className="h-12 w-12" />} />
            <CountUp end={95} label="Client satisfaction rate" icon={<ThumbsUp className="h-12 w-12" />} />
            <CountUp end={5} label="Years of social media expertise" icon={<Dumbbell className="h-12 w-12" />} />
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
              ELEVATE YOUR SOCIAL PRESENCE
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Engage.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Grow.</span>
              <br />
              Convert.
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At Sirius A Marketing, we understand that social media is more than just posting content. It's about
              creating meaningful connections, driving engagement, and ultimately, converting followers into customers.
            </motion.p>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Our expert team crafts tailored strategies for each platform, ensuring your brand voice is consistent,
              compelling, and reaches the right audience at the right time.
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
                  Boost Your Social Presence
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
                alt="Social media management team at work"
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

      {/* Social Media Platforms Section */}
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
                MULTI-PLATFORM EXPERTISE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Dominate Every Platform 🌟</h2>
              <p className="text-gray-300 text-lg">
                We specialize in creating tailored strategies for each social media platform, ensuring your brand shines
                everywhere your audience is.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">📘</span> Facebook
                  </h3>
                  <p className="text-gray-300">
                    Engage your community with compelling content and targeted ads that drive conversions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">📸</span> Instagram
                  </h3>
                  <p className="text-gray-300">
                    Captivate your audience with stunning visuals and stories that showcase your brand's personality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">🐦</span> Twitter
                  </h3>
                  <p className="text-gray-300">
                    Stay at the forefront of real-time conversations and trends relevant to your industry.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">💼</span> LinkedIn
                  </h3>
                  <p className="text-gray-300">
                    Build your professional network and establish thought leadership in your field.
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
              COMPREHENSIVE SOCIAL MEDIA SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">Our Social Media Services</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              From strategy development to content creation and analytics, we've got all your social media needs
              covered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategy Development",
                description: "Tailored social media strategies aligned with your business goals and target audience.",
                image: "/placeholder.svg",
                alt: "Strategy development illustration",
              },
              {
                title: "Content Creation",
                description:
                  "Engaging, platform-specific content that resonates with your audience and drives engagement.",
                image: "/placeholder.svg",
                alt: "Content creation process",
              },
              {
                title: "Community Management",
                description:
                  "Active engagement with your followers, building relationships and managing your online reputation.",
                image: "/placeholder.svg",
                alt: "Community management illustration",
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
                  question: "How often should I post on social media?",
                  answer:
                    "The ideal posting frequency varies by platform and audience. Generally, we recommend 1-2 posts per day on platforms like Facebook and Instagram, 3-5 tweets per day on Twitter, and 2-5 posts per week on LinkedIn. However, we'll develop a custom posting schedule based on your specific audience and goals.",
                },
                {
                  question: "How do you measure the success of social media campaigns?",
                  answer:
                    "We use a variety of metrics to measure success, including engagement rates, reach, impressions, click-through rates, conversions, and ROI. We provide regular reports that break down these metrics and offer insights on how to improve performance.",
                },
                {
                  question: "Can you handle crisis management on social media?",
                  answer:
                    "Yes, we offer crisis management as part of our social media services. We'll work with you to develop a crisis communication plan and can quickly respond to any issues that arise on your social media channels.",
                },
                {
                  question: "Do you create all the content for social media posts?",
                  answer:
                    "We can create all your social media content or work with your existing content creation team. Our services are flexible and can be tailored to your needs. We specialize in creating engaging, platform-specific content that resonates with your audience.",
                },
                {
                  question: "How long does it take to see results from social media marketing?",
                  answer:
                    "While some results can be seen immediately (like increased engagement), significant growth typically takes 3-6 months. Social media marketing is about building relationships and brand awareness over time. We'll provide regular updates on progress and adjust strategies as needed.",
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

