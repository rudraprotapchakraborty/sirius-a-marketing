"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

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
  // Add more reviews as needed
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

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <motion.div className="container mx-auto px-4" initial="initial" animate="animate" variants={staggerChildren}>
        <motion.h1 className="text-4xl font-bold text-center mb-12" variants={fadeInUp}>
          Client Reviews
        </motion.h1>
        <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" variants={staggerChildren}>
          {reviews.map((review) => (
            <motion.div key={review.id} variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-500/20 overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(138,43,226,0.5)]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-gray-300">{review.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-200 mb-4">{review.review}</p>
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
      </motion.div>
    </div>
  )
}

