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

// Sample blog post data
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

const slideInFromLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
}

const slideInFromRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
}

const rotateIn = {
  initial: { rotate: -10, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  transition: { duration: 0.5 },
}

// Add this new component for the moving logos
const MovingLogos = () => {
  const logos = [
    "/waffletime.jpg",
    "/zafenity.jpg",
    "/ghuddy.jpg",
    "/namimoon.jpg",
    "/kudos.jpg",
    "/masalaking.jpg",
    "/bridgepoint.jpg",
  ];

  // Duplicate the logos array for seamless scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="logo-scroll-container">
      <div className="logo-scroll-track">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img
              src={logo || "/placeholder.svg"}
              alt={`Company logo ${index + 1}`}
              width={100}
              height={100}
              className="object-cover rounded-full"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .logo-scroll-container {
          width: 100vw;
          position: absolute;
          left: 0;
          right: 0;
          overflow: hidden;
          padding: 25px 0;
        }

        .logo-scroll-track {
          display: flex;
          animation: scrollLogos 20s linear infinite;
          will-change: transform;
        }

        .logo-item {
          flex-shrink: 0;
          width: 160px;
          height: 60px;
          margin: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${logos.length * 180}px); /* Move by the original set's width */
          }
        }
      `}</style>
    </div>
  );
};

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
    <div className="min-h-screen bg-[#0D0B21] text-white max-w-full overflow-x-hidden">
      {/* Hero Section - Fade In Up */}
      <motion.section className="relative w-full min-h-[80vh] text-center hero-bg hero-content">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://media-hosting.imagekit.io//b9316ab06c7543a3/CosmosR4.mp4?Expires=1837116088&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hyYm1G0Ia-bl9H4zBf60O51IhphrGOrw9Xb~6ttKOo-o07DIWKzKltvFMQQL8XI~0PdPLxDdhBI8rurkLtVsUEm1ZLhguQ1Uw4uJxeZRsxn8wPrMCKAkMTSD8BQQtT1bRrcl2eeR0s6WY55zj6X0c08GTNnudk-lY1VdDLVZm-QnCX11KOp4T-c6Y5CyxIph-qL3PhkT081jxvXmYL4VmXrBLMlyB39BqoMjpO15~yFjIACkheh~LiLqg4ZblaPqXSEHZhddOy2MGpjF9uT8~IHz4c6El-WT-UIBIVQCRhWRPTyn2WGq~iVVzRN-wg5Hc7tYlWBHNr2-dHPk61sVMg__"
            type="video/mp4"
          />
        </video>

        <div className="relative z-10">
          <motion.h1
            className="mx-auto max-w-5xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-teal-600 animate-gradient-x pt-8"
            variants={fadeInUp}
          >
            <span className="block text-white">Your Partner for</span>
            <TypeAnimation
              sequence={["Stellar Marketing Campaigns", 2000, "Exponential Growth", 2000, "Next-Level Branding", 2000]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="block text-white pb-24"
            />
          </motion.h1>
          <motion.p className="mx-auto mt-8 max-w-2xl text-lg text-gray-100 px-2" variants={fadeInUp}>
            We empower businesses to thrive in today's competitive market. Our cutting-edge strategies, data-driven
            approach, and creative campaigns strategically position your brand for industry leadership.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button className="my-8 bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
              Meet the Team
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Trusted by Companies Section */}
      <section className="bg-[#e1e1eb] dark:bg-gray-900 py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Trusted by Companies Worldwide
          </h2>
          <MovingLogos />
        </div>
      </section>

      {/* Features Grid - Scale In */}
      <motion.section
        id="features"
        className="container mx-auto px-4 py-20 max-w-full bg-[#e1e1eb] dark:bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white" variants={scaleIn}>
          Our Service Offerings
        </motion.h2>
        <motion.div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-full" variants={staggerChildren}>
          {[
            {
              icon: <MessageCircle className="h-6 w-6" />,
              title: "Social Media Management",
              description:
                "We develop and implement impactful social media strategies to cultivate audience engagement and expand your online presence.",
            },
            {
              icon: <Search className="h-6 w-6" />,
              title: "Search Engine Optimization (SEO)",
              description:
                "We optimize your online visibility and search engine rankings on Google to generate high-converting organic traffic.",
            },
            {
              icon: <DollarSign className="h-6 w-6" />,
              title: "Meta & Google Ads",
              description:
                "We manage and optimize Google Ads, social media advertising, and display campaigns to maximize your return on investment (ROI).",
            },
            {
              icon: <Palette className="h-6 w-6" />,
              title: "Brand Strategy & Consulting",
              description:
                "We assist in defining your unique brand identity and crafting a compelling and consistent brand narrative.",
            },
            {
              icon: <FileText className="h-6 w-6" />,
              title: "Content Marketing",
              description:
                "We produce engaging visual, video, and written content tailored to resonate with your target audience.",
            },
            {
              icon: <Globe className="h-6 w-6" />,
              title: "Web Design & Development",
              description:
                "We design and develop visually appealing, highly functional websites for an optimal user experience.",
            },
          ].map((service, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card
                className={`feature-card border-purple-800/20 bg-[#e1e1eb] dark:bg-gradient-to-br ${index % 3 === 0
                  ? "dark:from-purple-900/40 dark:to-blue-900/40"
                  : index % 3 === 1
                    ? "dark:from-blue-900/40 dark:to-green-900/40"
                    : "dark:from-green-900/40 dark:to-purple-900/40"
                  }`}
              >
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-purple-600/20 dark:bg-purple-600/30 p-3 w-fit">{service.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* What's next for your marketing? */}
      <div className="relative border border-purple-800/20 bg-[#e1e1eb] dark:bg-gray-900 flex items-center justify-center h-[400px] w-full shadow-[0_0_15px_rgba(138,43,226,0.5)]">
        {/* Background Text */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white merriweather">
            What's next for your marketing?
          </h2>
          <a href="#" className="text-gray-700 dark:text-gray-300 underline mt-8 font-semibold inline-block hover:text-purple-600 dark:hover:text-purple-400">
            Get in touch →
          </a>
        </div>

        {/* Images */}
        <div className="absolute left-0 -bottom-10 w-[100px] md:w-[125px] lg:w-[200px]">
          <img
            src="/img2.webp"
            alt="People"
            className=""
          />
        </div>
        <div className="absolute right-0 top-0 w-[100px] md:w-[125px] lg:w-[200px]">
          <img
            src="/img1.jpg"
            alt="Red Appliances"
            className=""
          />
        </div>
      </div>

      {/* Reviews Section - Fade In Up */}
      <motion.section
        className="container mx-auto px-4 py-20 max-w-full bg-[#e1e1eb] dark:bg-[#0D0B21]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2 className="text-center text-3xl font-bold mb-8 text-gray-900 dark:text-white" variants={fadeInUp}>
          What Our Users Say
        </motion.h2>
        <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12" variants={staggerChildren}>
          {reviews.map((review) => (
            <motion.div key={review.id} variants={fadeInUp}>
              <Card
                className="bg-[#e1e1eb] dark:bg-gradient-to-br dark:from-purple-900/40 dark:to-blue-900/40 border-purple-500/20 overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(138,43,226,0.5)]"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{review.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{review.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-200 mb-4">{review.review}</p>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="text-center" variants={fadeInUp}>
          <Link href="/reviews">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
              Read All Reviews
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Blog Section - Scale In */}
      <motion.section
        className="container mx-auto px-4 py-20 max-w-full bg-[#e1e1eb] dark:bg-[#0D0B21]"
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
      <section className="container mx-auto px-4 py-20 max-w-full bg-[#e1e1eb] dark:bg-[#0D0B21]">
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

