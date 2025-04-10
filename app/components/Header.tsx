"use client"

import "@/styles/globals.css"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { MobileNav } from "./MobileNav"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`sticky top-0 z-[9999] ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg shadow-purple-900/20" : "bg-black/80"} transition-all duration-300 py-4`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between space-x-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.img
                src="/logo.png"
                alt="Sirius A Marketing Logo"
                className="w-8 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, 5, -5, 0] }}
              />
              <span className="font-merriweather text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight text-blue-400 group-hover:text-blue-500 transition-colors">
                Sirius A Marketing
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { name: "Home", href: "/" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Sirius A Visual", href: "/sirius-a-visual" },
              ].map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="text-foreground hover:text-purple-400 relative group transition-all duration-300"
                >
                  {name}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}

              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:shadow-xl shadow-purple-500/30 flex items-center space-x-2">
                  <span>Get in touch</span>
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </Button>
              </Link>

              {/* <ThemeSwitcher /> */}
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden flex items-center space-x-4">
              <MobileNav />
            </div>
          </nav>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}
