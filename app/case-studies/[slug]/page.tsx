"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle, Calendar, Users, BarChart } from "lucide-react"
import { motion } from "framer-motion"

// This would typically come from a database or API
const caseStudies = [
  {
    title: "Social Media Growth Strategy",
    company: "Bloom Beauty Co.",
    description: "How we helped Bloom Beauty Co. increase their Instagram following by 215% and boost engagement rates by 78% in just 3 months.",
    fullDescription: `
      Bloom Beauty Co., a premium skincare brand, was struggling to gain traction on social media despite having excellent products. Their Instagram account had stagnated at around 5,000 followers with minimal engagement, and their content strategy lacked consistency and direction.

      ## The Challenge

      - Low social media engagement and slow follower growth
      - Inconsistent brand messaging across platforms
      - Limited conversion from social media to their e-commerce store
      - Strong competition in the crowded beauty space

      ## Our Approach

      We developed a comprehensive social media strategy focused on authentic storytelling and community building:

      1. **Content Audit & Strategy Development**: We analyzed their existing content performance and developed a cohesive content calendar that balanced product showcases, educational content, and user-generated content.

      2. **Visual Identity Refinement**: We created a distinctive visual style guide that ensured all content felt premium, cohesive, and instantly recognizable.

      3. **Engagement Campaign**: We launched a series of interactive Instagram Stories, polls, and Q&A sessions to boost community engagement.

      4. **Influencer Partnerships**: We identified and collaborated with micro-influencers in the beauty space who aligned with the brand's values.

      5. **User-Generated Content Strategy**: We implemented a branded hashtag campaign that encouraged customers to share their skincare routines.
    `,
    image: "/images/case-studies/bloom-beauty.jpg",
    slug: "bloom-beauty-co",
    category: "Social Media",
    duration: "3 months",
    clientSize: "Small Business (15 employees)",
    results: [
      "215% increase in Instagram followers (from 5,000 to 15,750)",
      "78% higher engagement rate across all social platforms",
      "43% increase in direct sales from social media referrals",
      "68% improvement in content sharing and user-generated content",
      "Featured in 3 major beauty publications due to social media presence"
    ],
    testimonial: {
      quote: "The Sirius A team transformed our social media presence completely. Not only did we see incredible growth in followers, but the quality of engagement improved dramatically. Our customers are now our biggest advocates online.",
      author: "Emma Richardson",
      position: "Marketing Director, Bloom Beauty Co."
    }
  },
  {
    title: "E-commerce Conversion Optimization",
    company: "Urban Threads Apparel",
    description: "Redesigning the customer journey to increase conversion rates by 65% and reduce cart abandonment for Urban Threads Apparel.",
    fullDescription: `
      Urban Threads Apparel, an online streetwear retailer, was experiencing high traffic to their website but struggling with low conversion rates and high cart abandonment. Despite having a loyal customer base and quality products, their e-commerce performance was underperforming industry standards.

      ## The Challenge

      - High cart abandonment rate of 82% (industry average is around 70%)
      - Low conversion rate of just 1.2% (industry average is 2-3%)
      - Confusing checkout process with multiple steps
      - Mobile experience that wasn't optimized for conversions
      - Limited product recommendations and cross-selling

      ## Our Approach

      We conducted a comprehensive analysis of their customer journey and implemented a data-driven optimization strategy:

      1. **UX Audit & Heatmap Analysis**: We used advanced analytics tools to identify friction points in the user journey and areas where users were dropping off.

      2. **Checkout Simplification**: We streamlined the checkout process from 5 steps to 2 steps and added a progress indicator.

      3. **Mobile-First Redesign**: We completely rebuilt the mobile shopping experience with larger CTAs, simplified navigation, and faster loading times.

      4. **Personalization Engine**: We implemented an AI-powered recommendation system that suggested relevant products based on browsing history and purchase patterns.

      5. **A/B Testing Framework**: We established a continuous testing program for all key pages and elements to constantly improve performance.
    `,
    image: "/images/case-studies/urban-threads.jpg",
    slug: "urban-threads-apparel",
    category: "E-commerce",
    duration: "4 months",
    clientSize: "Medium Business (50 employees)",
    results: [
      "65% increase in overall conversion rate (from 1.2% to 1.98%)",
      "42% reduction in cart abandonment rate",
      "89% increase in average order value through cross-selling",
      "123% improvement in mobile conversion rates",
      "52% increase in returning customer purchases"
    ],
    testimonial: {
      quote: "The results speak for themselves. Sirius A Marketing didn't just make our website look better - they transformed it into a conversion machine. The ROI on this project was evident within weeks.",
      author: "Marcus Chen",
      position: "E-commerce Director, Urban Threads Apparel"
    }
  },
  {
    title: "Local SEO & Google Ads Campaign",
    company: "Riverside Dental Clinic",
    description: "How our targeted local SEO and Google Ads strategy helped Riverside Dental Clinic book 127 new patients in their first month.",
    fullDescription: `
      Riverside Dental Clinic, a newly established dental practice in a competitive urban area, needed to quickly build visibility and attract new patients. With numerous established competitors in the area, they needed a digital strategy that would help them stand out and generate immediate results.

      ## The Challenge

      - New practice with no established online presence or reputation
      - Highly competitive local market with established dental practices
      - Limited initial marketing budget requiring efficient spending
      - Need for both immediate results and long-term sustainable growth
      - Target demographic primarily searching for dental services on mobile devices

      ## Our Approach

      We developed an integrated local SEO and Google Ads strategy focused on capturing high-intent searches:

      1. **Local SEO Foundation**: We optimized their Google Business Profile, built local citations, and created location-specific content to improve organic visibility.

      2. **Keyword Research & Competitive Analysis**: We identified high-converting keywords with lower competition that specifically targeted their service area.

      3. **Google Ads Campaign Structure**: We built a highly targeted campaign structure focusing on specific dental services with the highest profit margins and demand.

      4. **Landing Page Optimization**: We created service-specific landing pages designed to convert visitors into appointment bookings.

      5. **Call Tracking & Conversion Optimization**: We implemented advanced call tracking and form analytics to measure true ROI and continuously improve performance.
    `,
    image: "/images/case-studies/riverside-dental.jpg",
    slug: "riverside-dental-clinic",
    category: "SEO & PPC",
    duration: "6 months",
    clientSize: "Small Business (8 employees)",
    results: [
      "127 new patient bookings in the first month of campaign launch",
      "320% return on ad spend (ROAS) across Google Ads campaigns",
      "#1 Google ranking for key terms like 'emergency dentist [city]' and 'cosmetic dentist [city]'",
      "68% decrease in cost per acquisition over 6 months",
      "95% of new patients mentioned finding the clinic through Google"
    ],
    testimonial: {
      quote: "As a new practice, we needed patients quickly, but we also wanted sustainable growth. Sirius A delivered on both fronts. Their SEO and Google Ads strategy helped us fill our appointment book faster than we ever expected.",
      author: "Dr. Sarah Johnson",
      position: "Founder, Riverside Dental Clinic"
    }
  },
  {
    title: "Brand Refresh & Content Strategy",
    company: "Evergreen Financial Advisors",
    description: "Transforming a traditional financial services firm with a modern brand identity and content strategy that resonated with millennials.",
    fullDescription: `
      Evergreen Financial Advisors, an established financial services firm with 25+ years in the industry, was struggling to connect with younger clients. Their brand was perceived as outdated, and their content strategy wasn't resonating with millennials entering their prime earning years.

      ## The Challenge

      - Traditional brand identity that appeared outdated to younger demographics
      - Content that was overly technical and failed to engage millennial audiences
      - Perception as a "firm for older clients" limiting growth potential
      - Limited digital presence and social media engagement
      - Need to maintain credibility while becoming more approachable

      ## Our Approach

      We developed a comprehensive brand refresh and content strategy:

      1. **Brand Audit & Persona Development**: We conducted extensive research to understand millennial financial concerns and created detailed buyer personas.

      2. **Visual Identity Refresh**: We modernized their logo, color palette, typography, and visual language while maintaining elements of trust and stability.

      3. **Messaging Framework**: We developed a new messaging hierarchy that simplified complex financial concepts without losing sophistication.

      4. **Content Pillars & Editorial Calendar**: We created a content strategy focused on financial wellness, life milestones, and sustainable investing - topics that resonated with their target audience.

      5. **Channel Strategy**: We expanded their presence to platforms where millennials seek financial advice, including Instagram, YouTube, and podcasts.
    `,
    image: "/images/case-studies/evergreen-financial.jpg",
    slug: "evergreen-financial-advisors",
    category: "Branding",
    duration: "5 months",
    clientSize: "Medium Business (35 employees)",
    results: [
      "156% increase in millennial clients within 6 months of rebrand",
      "87% higher website traffic with 42% lower bounce rate",
      "12 media features in publications targeting younger investors",
      "215% increase in social media engagement across platforms",
      "68% of new clients cited content as a key factor in choosing the firm"
    ],
    testimonial: {
      quote: "Sirius A Marketing helped us solve our biggest challenge - how to stay true to our heritage while becoming relevant to younger clients. The brand refresh and content strategy struck exactly the right balance.",
      author: "Jonathan Mercer",
      position: "CEO, Evergreen Financial Advisors"
    }
  },
]

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  // Format the full description with markdown paragraphs
  const formattedDescription = caseStudy.fullDescription
    .split('\n\n')
    .map((paragraph, index) => <p key={index} className="mb-6">{paragraph}</p>)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0D0B21] to-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/case-studies" 
            className="text-purple-400 hover:text-purple-300 mb-8 inline-flex items-center group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
            <Image
              src={caseStudy.image || "/images/placeholder-case-study.jpg"}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-8">
                <span className="bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">
                  {caseStudy.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
                  {caseStudy.title}
                </h1>
                <p className="text-purple-300 text-xl md:text-2xl">{caseStudy.company}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-purple-800/20 bg-purple-900/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-purple-400 mr-2" />
                  <h3 className="text-lg font-medium">Project Duration</h3>
                </div>
                <p className="text-gray-300">{caseStudy.duration}</p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-800/20 bg-purple-900/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-purple-400 mr-2" />
                  <h3 className="text-lg font-medium">Client Size</h3>
                </div>
                <p className="text-gray-300">{caseStudy.clientSize}</p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-800/20 bg-purple-900/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <BarChart className="h-5 w-5 text-purple-400 mr-2" />
                  <h3 className="text-lg font-medium">Key Focus</h3>
                </div>
                <p className="text-gray-300">{caseStudy.category}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-purple-800/20 bg-purple-900/10 mb-12">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-semibold mb-6 text-purple-300">Overview</h2>
                <p className="mb-6 text-lg">{caseStudy.description}</p>
                
                {formattedDescription}
                
                <h3 className="text-2xl font-semibold mb-6 text-purple-300">Key Results</h3>
                <ul className="space-y-4 mb-8">
                  {caseStudy.results.map((result, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">{result}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {caseStudy.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-12"
            >
              <Card className="border-purple-800/20 bg-gradient-to-r from-purple-900/30 to-indigo-900/30">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full bg-purple-700 flex items-center justify-center text-2xl font-bold">
                      {caseStudy.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xl italic mb-4 text-gray-200">"{caseStudy.testimonial.quote}"</p>
                      <p className="font-semibold text-white">{caseStudy.testimonial.author}</p>
                      <p className="text-purple-300">{caseStudy.testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center flex flex-col items-center bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-8 md:p-12 rounded-2xl border border-purple-500/20 shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to achieve similar results?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven strategies can be tailored to your business goals and challenges.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 rounded-full text-lg flex items-center gap-2">
                <span>Schedule a Free Strategy Call</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          <div className="mt-12 flex justify-between">
            <Link href="/case-studies" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}