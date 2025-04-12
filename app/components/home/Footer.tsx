"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { motion } from "framer-motion"
import SubscriptionForm from "../SubscriptionForm"

const socialLinks = [
  {
    name: "facebook",
    url: "https://www.facebook.com/share/1CG8CPCm9s/",
    bgColor: "bg-[#1877F2]",
    icon: <FaFacebookF />,
  },
  {
    name: "linkedin",
    url: "https://linkedin.com",
    bgColor: "bg-[#0A66C2]",
    icon: <FaLinkedinIn />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/sirius_a_marketing",
    bgColor: "bg-gradient-to-r from-[#FCAF45] via-[#E1306C] to-[#C13584]",
    icon: <FaInstagram />,
  },
  {
    name: "x",
    url: "https://twitter.com",
    bgColor: "bg-black",
    icon: <FaXTwitter />,
  },
]

const StickyIcons = () => (
  <motion.div
    className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 hidden md:flex"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
  >
    {socialLinks.map((s, i) => (
      <motion.a
        key={s.name}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full w-10 h-10 flex items-center justify-center text-white shadow-md transition-transform hover:scale-110 ${s.bgColor}`}
        whileHover={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 0.5 }}
      >
        {s.icon}
      </motion.a>
    ))}
  </motion.div>
)

export function Footer() {
  return (
    <footer className="relative bg-white/80 dark:bg-black/80 text-gray-900 dark:text-white z-50 overflow-hidden backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* ✨ Background Glow */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-transparent to-indigo-500/10 blur-2xl z-0"
          animate={{ opacity: [0, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
        />

        {/* Logo and tagline */}
        <div className="flex flex-col items-center mb-12">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Sirius A Marketing" 
              width={120} 
              height={40} 
              className="mb-3"
            />
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-md">
            Elevating brands through strategic digital marketing and creative solutions
          </p>
        </div>

        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SubscriptionForm />

          {/* Explore + Company */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            {[
              { title: "Explore", links: ["Case Studies", "Resources", "Blog", "Events", "Careers"] },
              { title: "Company", links: ["About Us", "Blog", "Case Studies", "Reviews", "Contact"] },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold text-gray-500 mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((label) => (
                    <li key={label}>
                      <Link
                        href={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-4">Don't be a stranger</h4>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-purple-600 dark:text-purple-400">UK –</span>{" "}
                <a href="mailto:contact@siriusamarketing.com" className="hover:underline">
                  contact@siriusamarketing.com
                </a>
              </p>
              <p>
                <span className="text-purple-600 dark:text-purple-400">BD –</span>{" "}
                <a href="mailto:contact@siriusamarketing.com" className="hover:underline">
                  contact@siriusamarketing.com
                </a>
              </p>
              <Link href="/careers">
                <Button variant="outline" className="mt-4 border-purple-800/20 hover:bg-purple-900/50">
                  We're Hiring
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Social Media - Mobile Only */}
        <div className="mt-10 flex justify-center md:hidden">
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full w-10 h-10 flex items-center justify-center text-white shadow-md ${s.bgColor}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-10 border-t border-purple-800/20 pt-6 flex flex-col md:flex-row justify-between text-center md:text-left items-center text-sm gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>© {new Date().getFullYear()} Sirius A Marketing. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400">
              Terms and Conditions
            </Link>
          </div>
        </motion.div>
      </div>

      <StickyIcons />

      {/* WhatsApp Chat */}
      <motion.div
        className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 120 }}
      >
        <Link href="https://wa.me/447362622636" target="_blank">
          <Button size="icon" className="bg-purple-600 hover:bg-purple-700 rounded-full shadow-xl text-white">
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Chat on WhatsApp</span>
          </Button>
        </Link>
      </motion.div>
    </footer>
  )
}