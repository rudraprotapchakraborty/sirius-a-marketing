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
    const animate = () => {
      if (count < end) {
        setCount(Math.ceil(count + end / (duration * 60)))
        frameId = requestAnimationFrame(animate)
      } else {
        cancelAnimationFrame(frameId)
      }
    }
    animate()
  }, [count, end, duration])

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-6xl font-bold text-white">{count}</div>
      <div className="text-gray-300 text-lg">{label}</div>
      {icon}
    </div>
  )
}

export default function MetaAndGoogleAdsPage() {
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
            Meta & Google Ads
          </span>
        </motion.h1>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CountUp end={10000000} label="Ad impressions served" icon={<Rocket className="h-12 w-12" />} />
            <CountUp end={98} label="Client satisfaction rate" icon={<ThumbsUp className="h-12 w-12" />} />
            <CountUp end={7} label="Years of PPC expertise" icon={<Dumbbell className="h-12 w-12" />} />
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
              MAXIMIZE YOUR AD SPEND
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Target.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Convert.
              </span>
              <br />
              Scale.
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At Sirius A Marketing, we specialize in creating high-performing ad campaigns on Meta and Google
              platforms. Our data-driven approach ensures your ads reach the right audience at the right time,
              maximizing your ROI.
            </motion.p>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              From precise audience targeting to compelling ad creatives and continuous optimization, we handle every
              aspect of your paid advertising campaigns to drive results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg group transition-all duration-300 transform hover:translate-y-[-2px]">
                  <span className="mr-2 inline-block transition-transform group-hover:rotate-[20deg]">💰</span>
                  Boost Your Ad Performance
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
                alt="Meta and Google Ads management"
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

      {/* Ad Platforms Section */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Dominate Every Ad Platform 🎯
              </h2>
              <p className="text-gray-300 text-lg">
                We leverage the power of both Meta and Google ad platforms to create a comprehensive advertising
                strategy that reaches your audience across multiple touchpoints.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">📘</span> Facebook Ads
                  </h3>
                  <p className="text-gray-300">
                    Leverage Facebook's powerful targeting capabilities to reach your ideal customers with precision.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">📸</span> Instagram Ads
                  </h3>
                  <p className="text-gray-300">
                    Showcase your products and services with visually appealing ads on Instagram's highly engaged
                    platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">🔍</span> Google Search Ads
                  </h3>
                  <p className="text-gray-300">
                    Capture high-intent users actively searching for your products or services on Google.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">📺</span> YouTube Ads
                  </h3>
                  <p className="text-gray-300">
                    Engage your audience with compelling video ads on the world's largest video platform.
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
              COMPREHENSIVE AD SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">Our Ad Services</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              From strategy development to campaign management and optimization, we've got all your paid advertising
              needs covered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Campaign Strategy",
                description: "Tailored ad strategies aligned with your business goals and target audience.",
                image: "/placeholder.svg",
                alt: "Campaign strategy illustration",
              },
              {
                title: "Ad Creation",
                description: "Compelling ad creatives that capture attention and drive action.",
                image: "/placeholder.svg",
                alt: "Ad creation process",
              },
              {
                title: "Performance Optimization",
                description: "Continuous monitoring and optimization to maximize your ad spend ROI.",
                image: "/placeholder.svg",
                alt: "Performance optimization illustration",
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
                  question: "How much should I budget for Meta and Google Ads?",
                  answer:
                    "The ideal budget varies depending on your goals, industry, and competition. We typically recommend starting with a minimum of $1000 per month for each platform to gather meaningful data. We'll work with you to determine the most effective budget allocation based on your specific needs and objectives.",
                },
                {
                  question: "How long does it take to see results from paid advertising?",
                  answer:
                    "While you may see initial results quickly, it typically takes 2-3 months to optimize campaigns fully. During this time, we gather data, test different ad variations, and refine targeting to maximize performance. We provide regular updates and reports to keep you informed of progress.",
                },
                {
                  question: "Can you handle both B2B and B2C advertising?",
                  answer:
                    "Yes, we have extensive experience in both B2B and B2C advertising across various industries. Our team tailors strategies to suit the unique needs of each business type, leveraging platform-specific features like LinkedIn Ads for B2B and Instagram Shopping for B2C e-commerce.",
                },
                {
                  question: "How do you measure the success of ad campaigns?",
                  answer:
                    "We use a variety of metrics to measure success, including ROAS (Return on Ad Spend), CPA (Cost Per Acquisition), CTR (Click-Through Rate), and conversion rates. We also track custom goals specific to your business objectives. Our reports provide clear insights into campaign performance and areas for improvement.",
                },
                {
                  question: "Can you integrate my ads with my CRM or marketing automation tools?",
                  answer:
                    "Absolutely! We can integrate your ad campaigns with various CRM and marketing automation tools to ensure seamless data flow and attribution. This integration allows for more accurate tracking of the customer journey and helps in creating more targeted remarketing campaigns.",
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

