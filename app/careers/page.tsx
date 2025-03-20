"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, ChevronUp, Send } from "lucide-react"

interface JobPost {
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
}

const jobPosts: JobPost[] = [
  {
    title: "Senior Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for an experienced digital marketer to lead our client campaigns and drive results.",
    requirements: [
      "5+ years of experience in digital marketing",
      "Proficiency in SEO, PPC, and social media marketing",
      "Strong analytical and problem-solving skills",
      "Excellent communication and project management abilities",
    ],
  },
  {
    title: "Content Creator",
    department: "Creative",
    location: "London, UK",
    type: "Full-time",
    description: "Join our creative team to produce engaging content for various digital platforms.",
    requirements: [
      "3+ years of experience in content creation",
      "Strong writing and editing skills",
      "Familiarity with SEO best practices",
      "Experience with video editing and graphic design tools",
    ],
  },
  {
    title: "Web Developer",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
    description: "We're seeking a talented web developer to build and maintain cutting-edge websites for our clients.",
    requirements: [
      "3+ years of experience in web development",
      "Proficiency in HTML, CSS, JavaScript, and React",
      "Experience with responsive design and mobile-first approaches",
      "Familiarity with SEO and web performance optimization",
    ],
  },
]

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)

  const toggleJobExpansion = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join Our Team
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Shape the future of digital marketing with Sirius A Marketing
        </motion.p>

        <div className="space-y-6 mb-12">
          {jobPosts.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/50 border-purple-800/20">
                <CardHeader className="cursor-pointer" onClick={() => toggleJobExpansion(index)}>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl font-bold text-white">{job.title}</CardTitle>
                    {expandedJob === index ? (
                      <ChevronUp className="text-purple-400" />
                    ) : (
                      <ChevronDown className="text-purple-400" />
                    )}
                  </div>
                  <CardDescription className="text-gray-300">
                    {job.department} • {job.location} • {job.type}
                  </CardDescription>
                </CardHeader>
                {expandedJob === index && (
                  <CardContent>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <h3 className="text-lg font-semibold text-white mb-2">Requirements:</h3>
                    <ul className="list-disc list-inside text-gray-300">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                    <Button className="mt-4 bg-purple-600 hover:bg-purple-700">Apply Now</Button>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="bg-gray-800/50 border-purple-800/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Apply for a Position</CardTitle>
              <CardDescription className="text-gray-300">
                Send us your CV and cover letter to apply for any of our open positions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    className="bg-gray-700 text-white border-purple-800/20"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="bg-gray-700 text-white border-purple-800/20"
                  />
                </div>
                <div>
                  <Label htmlFor="position" className="text-white">
                    Position
                  </Label>
                  <Input
                    id="position"
                    placeholder="Position you're applying for"
                    className="bg-gray-700 text-white border-purple-800/20"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">
                    Cover Letter
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us why you're a great fit for this position"
                    className="bg-gray-700 text-white border-purple-800/20"
                  />
                </div>
                <div>
                  <Label htmlFor="cv" className="text-white">
                    CV/Resume
                  </Label>
                  <Input id="cv" type="file" className="bg-gray-700 text-white border-purple-800/20" />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  <Send className="mr-2 h-4 w-4" /> Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

