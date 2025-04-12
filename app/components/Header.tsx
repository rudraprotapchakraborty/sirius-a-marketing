"use client"

import "@/styles/globals.css"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu } from "lucide-react"
import { MobileNav } from "./MobileNav"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Sirius A Visual", href: "/sirius-a-visual" },
  ]

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`sticky top-0 z-[9999] ${
          isScrolled 
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg shadow-purple-900/10" 
            : "bg-transparent"
        } transition-all duration-300 py-3`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative w-10 h-10"
              >
                <Image
                  src="/logo.png"
                  alt="Sirius A Marketing Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <span className="font-merriweather text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight text-blue-400 transition-colors">
                Sirius A Marketing
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className={`relative group transition-all duration-300 ${
                    pathname === href 
                      ? "text-purple-600 dark:text-purple-400" 
                      : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
                >
                  {name}
                  <span 
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 transform ${
                      pathname === href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    } transition-transform duration-300 origin-left`}
                  ></span>
                </Link>
              ))}

              <Link href="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all duration-300 hover:shadow-xl shadow-purple-500/30 flex items-center space-x-2 rounded-full px-6">
                  <span>Get in touch</span>
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </Button>
              </Link>
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden flex items-center">
              <MobileNav items={navItems} />
            </div>
          </nav>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}