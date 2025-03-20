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

export default function ContentMarketingPage() {
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
            Content Marketing
          </span>
        </motion.h1>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CountUp end={5000000} label="Content views" icon={<Rocket className="h-12 w-12" />} />
            <CountUp end={98} label="Client satisfaction rate" icon={<ThumbsUp className="h-12 w-12" />} />
            <CountUp end={6} label="Years of content expertise" icon={<Dumbbell className="h-12 w-12" />} />
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
              CONTENT THAT CONVERTS
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Engage.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Educate.
              </span>
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
              At Sirius A Marketing, we believe that great content is the cornerstone of successful digital marketing.
              Our content marketing strategies are designed to attract, engage, and convert your target audience through
              valuable, relevant, and consistent content.
            </motion.p>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              From SEO-optimized blog posts to engaging video content and comprehensive whitepapers, we create content
              that establishes your brand as a thought leader and drives meaningful results for your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg group transition-all duration-300 transform hover:translate-y-[-2px]">
                  <span className="mr-2 inline-block transition-transform group-hover:rotate-[20deg]">📝</span>
                  Start Your Content Journey
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
                alt="Content marketing strategy session"
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

      {/* Content Types Section */}
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
                DIVERSE CONTENT FORMATS
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Content for Every Stage of the Funnel 🎯
              </h2>
              <p className="text-gray-300 text-lg">
                We create a wide range of content types to engage your audience at every stage of the buyer's journey,
                from awareness to decision.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">📝</span> Blog Posts & Articles
                  </h3>
                  <p className="text-gray-300">
                    SEO-optimized content that attracts organic traffic and establishes your brand as an industry
                    authority.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">🎥</span> Video Content
                  </h3>
                  <p className="text-gray-300">
                    Engaging video content that explains complex topics, showcases your products, or tells your brand
                    story.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">📊</span> Infographics & Visual Content
                  </h3>
                  <p className="text-gray-300">
                    Eye-catching visuals that make complex data easy to understand and share.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">📘</span> Ebooks & Whitepapers
                  </h3>
                  <p className="text-gray-300">
                    In-depth content that generates leads and positions your brand as a thought leader.
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
              OUR CONTENT MARKETING SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">Content That Drives Results</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              From strategy to creation and distribution, we offer comprehensive content marketing services to help your
              brand succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Content Strategy",
                description: "Tailored content strategies aligned with your business goals and target audience.",
                image: "/placeholder.svg",
                alt: "Content strategy illustration",
              },
              {
                title: "Content Creation",
                description: "High-quality, engaging content across various formats to captivate your audience.",
                image: "/placeholder.svg",
                alt: "Content creation process",
              },
              {
                title: "Content Distribution",
                description:
                  "Strategic distribution to ensure your content reaches the right audience at the right time.",
                image: "/placeholder.svg",
                alt: "Content distribution illustration",
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
                  question: "How often should we publish new content?",
                  answer:
                    "The ideal publishing frequency depends on your industry, audience, and resources. Generally, we recommend publishing at least 1-2 high-quality pieces of content per week. However, we'll work with you to develop a content calendar that aligns with your goals and capabilities.",
                },
                {
                  question: "How do you measure the success of content marketing?",
                  answer:
                    "We use various metrics to measure content marketing success, including website traffic, engagement rates, lead generation, conversion rates, and SEO rankings. We provide regular reports that break down these metrics and offer insights on how to improve performance.",
                },
                {
                  question: "Can you help with content for technical or specialized industries?",
                  answer:
                    "We have experience creating content for a wide range of industries, including technical and specialized fields. Our team of writers and subject matter experts can produce accurate, informative content that resonates with your target audience.",
                },
                {
                  question: "How long does it take to see results from content marketing?",
                  answer:
                    "Content marketing is a long-term strategy, and results can vary. Typically, you may start seeing improvements in website traffic and engagement within 3-6 months. However, significant results in terms of lead generation and conversions often take 6-12 months or more. We'll provide regular updates on progress and adjust strategies as needed.",
                },
                {
                  question: "Do you offer content audits for existing websites?",
                  answer:
                    "Yes, we offer comprehensive content audits as part of our services. We'll analyze your existing content, identify gaps and opportunities, and provide recommendations for improvement. This audit serves as a foundation for developing a more effective content strategy.",
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

