"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const teamMembers = [
  { name: "Topu", role: "Graphics Designer" },
  { name: "Arnob", role: "Graphics Designer" },
  { name: "Mehedee", role: "Meta Marketing Specialist" },
  { name: "Zareef", role: "Frontend Developer" },
  { name: "Yeasin", role: "Backend Developer" },
  { name: "Sakib", role: "Branding Strategist" },
  { name: "Md Nurur Rahman", role: "Founder and Regional Director" },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          Your business growth partners in Digital Marketing
        </motion.h1>

        <motion.section className="mb-12" initial="initial" animate="animate" variants={fadeInUp}>
          <Card className="border-purple-800/20 bg-purple-900/10">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-300">
                Sirius A Marketing was founded with a vision to revolutionize digital marketing. Our journey began with
                a small team of passionate marketers and has grown into a full-service agency, helping businesses across
                various industries to thrive in the digital landscape.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section className="mb-12" initial="initial" animate="animate" variants={fadeInUp}>
          <Card className="border-purple-800/20 bg-purple-900/10">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                "Unlocking Business Potential with limitless and impactful Marketing Strategies!"
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section className="mb-12" initial="initial" animate="animate" variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-purple-800/20 bg-purple-900/10">
                <CardContent className="p-4 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={`/team/${member.name.toLowerCase().replace(" ", "-")}.jpg`} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.div className="text-center" initial="initial" animate="animate" variants={fadeInUp}>
          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">Meet Our Experts</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

