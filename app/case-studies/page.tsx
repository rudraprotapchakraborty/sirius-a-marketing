"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Search } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const caseStudies = [
  {
    title: "Social Media Growth Strategy",
    company: "Bloom Beauty Co.",
    description: "How we helped Bloom Beauty Co. increase their Instagram following by 215% and boost engagement rates by 78% in just 3 months.",
    image: "/images/case-studies/bloom-beauty.jpg",
    category: "Social Media",
    results: ["215% Instagram growth", "78% higher engagement", "43% increase in sales"],
    slug: "bloom-beauty-co",
  },
  {
    title: "E-commerce Conversion Optimization",
    company: "Urban Threads Apparel",
    description: "Redesigning the customer journey to increase conversion rates by 65% and reduce cart abandonment for Urban Threads Apparel.",
    image: "/images/case-studies/urban-threads.jpg",
    category: "E-commerce",
    results: ["65% higher conversion rate", "42% lower cart abandonment", "89% increase in AOV"],
    slug: "urban-threads-apparel",
  },
  {
    title: "Local SEO & Google Ads Campaign",
    company: "Riverside Dental Clinic",
    description: "How our targeted local SEO and Google Ads strategy helped Riverside Dental Clinic book 127 new patients in their first month.",
    image: "/images/case-studies/riverside-dental.jpg",
    category: "SEO & PPC",
    results: ["127 new patients", "320% ROI on ad spend", "#1 Google ranking for key terms"],
    slug: "riverside-dental-clinic",
  },
  {
    title: "Brand Refresh & Content Strategy",
    company: "Evergreen Financial Advisors",
    description: "Transforming a traditional financial services firm with a modern brand identity and content strategy that resonated with millennials.",
    image: "/images/case-studies/evergreen-financial.jpg",
    category: "Branding",
    results: ["156% increase in millennial clients", "87% higher website traffic", "12 media features"],
    slug: "evergreen-financial-advisors",
  },
  {
    title: "Video Marketing Campaign",
    company: "Summit Outdoor Gear",
    description: "Creating a viral video series that generated over 2.5 million views and established Summit Outdoor Gear as an industry thought leader.",
    image: "/images/case-studies/summit-outdoor.jpg",
    category: "Video Marketing",
    results: ["2.5M+ video views", "18K new email subscribers", "35% increase in brand awareness"],
    slug: "summit-outdoor-gear",
  },
  {
    title: "Email Marketing Automation",
    company: "Gourmet Subscription Box",
    description: "Implementing a sophisticated email automation system that reduced churn by 32% and increased customer lifetime value for a subscription service.",
    image: "/images/case-studies/gourmet-box.jpg",
    category: "Email Marketing",
    results: ["32% reduction in churn", "47% higher customer LTV", "28% increase in referrals"],
    slug: "gourmet-subscription-box",
  },
]

export default function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(caseStudies.map(study => study.category)))]
  
  // Filter case studies based on search and category
  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          study.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === "All" || study.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0D0B21] to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Our Success Stories
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Explore how we've helped businesses across various industries achieve remarkable growth through strategic marketing solutions.
          </p>
          
          {/* Search and filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-[20px] transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search case studies..."
                className="pl-10 bg-gray-800/50 border-gray-700 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-purple-600 hover:bg-purple-700 border-none" 
                    : "border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredStudies.length > 0 ? (
            filteredStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-purple-800/20 bg-gray-800/30 backdrop-blur-sm transition-all duration-300 hover:bg-purple-900/20 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden group h-full">
                  <Link href={`/case-studies/${study.slug}`} className="block h-full">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden h-56">
                        <Image
                          src={study.image || "/images/placeholder-case-study.jpg"}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                          {study.category}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl mb-2 text-white group-hover:text-purple-300 transition-colors">
                        {study.title}
                      </CardTitle>
                      <p className="text-purple-400 mb-3 font-medium">{study.company}</p>
                      <p className="text-gray-300 mb-4 line-clamp-3">{study.description}</p>
                      
                      {/* Results highlights */}
                      <div className="mb-4 space-y-1">
                        {study.results.map((result, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></div>
                            {result}
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-purple-400 group-hover:text-purple-300 inline-flex items-center font-medium transition-all duration-300 group-hover:translate-x-1">
                        View Case Study
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No case studies found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4 border-purple-800/30 text-purple-400 hover:bg-purple-900/20"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
              >
                Reset filters
              </Button>
            </div>
          )}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-8 md:p-12 rounded-2xl border border-purple-500/20 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to become our next success story?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven marketing strategies can help your business achieve similar results.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-6 rounded-full text-lg">
              Schedule a Free Strategy Call
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}