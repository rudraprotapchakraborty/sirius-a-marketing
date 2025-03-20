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

export default function PhotographyVideoPage() {
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
            Photography & Video
          </span>
        </motion.h1>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CountUp end={1000000} label="Video views" icon={<Rocket className="h-12 w-12" />} />
            <CountUp end={97} label="Of our clients recommend us" icon={<ThumbsUp className="h-12 w-12" />} />
            <CountUp end={4} label="Years of meeting client needs" icon={<Dumbbell className="h-12 w-12" />} />
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
              FROM STRATEGY TO CREATIVITY
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Bold Ideas.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Clear Vision.
              </span>
              <br />
              Digital-First.
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Sirius A Marketing is a dynamic, creative video production team, redefining how brands connect with their
              audience through creative video content. From eye-catching social media reels to compelling brand stories
              and impactful promotional videos, we bring fresh ideas to every project.
            </motion.p>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Our in-house team of creatives takes your vision from concept to completion, ensuring every piece of
              content hits the mark. Whether it's long-form content, client testimonials, or social media videos, we're
              here to elevate your brand with creativity, passion, and precision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg group transition-all duration-300 transform hover:translate-y-[-2px]">
                  <span className="mr-2 inline-block transition-transform group-hover:rotate-[20deg]">⚡</span>
                  Get a quote now
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
                alt="Video production team at work"
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

      {/* New Social Media Section */}
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
                WE MAKE SOCIAL MEDIA WORK FOR YOU
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                We're Obsessed with Social Media! 🚀
              </h2>
              <p className="text-gray-300 text-lg">
                Our goal is not to make "pretty videos". Instead, we create videos that are designed to impact key
                metrics of your business, including sales, signups & conversions.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">📈</span> Engagement that Speaks for Itself
                  </h3>
                  <p className="text-gray-300">
                    Our clients typically see a <span className="text-purple-400 font-semibold">300%-1000%</span>{" "}
                    increase in engagement in just the first couple months. We know what works.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">🎣</span> Crafted to Hook and Engage
                  </h3>
                  <p className="text-gray-300">
                    We know how to grab attention on mobile—using creative hooks, eye-catching visuals, and
                    attention-grabbing sound effects that stop the scroll and keep your audience hooked from the first
                    second.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">🎯</span> Tailored Social Strategy
                  </h3>
                  <p className="text-gray-300">
                    Before we shoot anything we conduct a deep-dive on your business. This allows us to craft a strategy
                    that's built around your goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">🚀</span> We're Your In-House Social Media Team
                  </h3>
                  <p className="text-gray-300">
                    From brainstorming and filming to editing and optimising, we handle everything. All you have to do
                    is post—and we'll even advise you on the best time to do so.
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

      {/* Video Packages Section */}
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
              BEAUTIFUL VISUALS. POWERFUL STORY.
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">Our Video Packages</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              From scroll-stopping reels to engaging brand stories, our packages cover it all.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Promotional Videos",
                description:
                  "Humans connect with stories. We can help you tell yours in an engaging & impactful way through video.",
                image: "/placeholder.svg",
                alt: "Promotional video production",
              },
              {
                title: "Social Media Content",
                description:
                  "From channel building to short-form content, we can help you grow on Instagram, YouTube & TikTok.",
                image: "/placeholder.svg",
                alt: "Social media content creation",
              },
              {
                title: "Sports Videos",
                description:
                  "Whether promoting partnerships or launching products, your sports videos should capture your brand's essence.",
                image: "/placeholder.svg",
                alt: "Sports video production",
              },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.alt} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>
                  <p className="text-gray-300 mb-6">{pkg.description}</p>
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
            <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase">
              HERE ARE SOME OF OUR MOST
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">Frequently asked questions.</h2>
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
                  question: "What types of video production services do you offer?",
                  answer:
                    "We offer a comprehensive range of video production services including promotional videos, social media content, corporate videos, event coverage, product demonstrations, testimonials, and brand storytelling. Our team specializes in both short-form content for platforms like TikTok and Instagram, as well as longer format videos for websites and YouTube.",
                },
                {
                  question: "How much does a video production project typically cost?",
                  answer:
                    "Project costs vary depending on factors such as production complexity, shooting duration, location requirements, and post-production needs. We offer packages starting from £1,500 for basic social media content up to £15,000+ for premium corporate videos. We'll provide a detailed quote after understanding your specific requirements.",
                },
                {
                  question: "Can you help with video strategy?",
                  answer:
                    "Absolutely! We offer comprehensive video strategy services including content planning, platform optimization, audience targeting, and performance analytics. Our team will work with you to develop a video strategy that aligns with your business goals and maximizes ROI.",
                },
                {
                  question: "Who do you work with?",
                  answer:
                    "We work with businesses of all sizes, from startups to established enterprises, across various industries including tech, retail, healthcare, education, and more. Our clients include both B2B and B2C companies looking to enhance their digital presence through video content.",
                },
                {
                  question: "How long does it take to complete a video production project?",
                  answer:
                    "Timeline varies by project scope. Simple social media videos can be completed in 1-2 weeks, while more complex corporate videos might take 4-6 weeks. We'll provide a detailed timeline during our initial consultation and keep you updated throughout the production process.",
                },
                {
                  question: "Can you help with scriptwriting and concept development?",
                  answer:
                    "Yes! Our creative team includes experienced scriptwriters and content strategists who can help develop your video concept from scratch. We'll work closely with you to ensure the message aligns with your brand voice and effectively communicates your key points.",
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

