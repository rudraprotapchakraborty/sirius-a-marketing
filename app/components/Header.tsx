"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { MobileNav } from "./MobileNav"
import { ThemeSwitcher } from "./theme-switcher"
import { useState, useEffect } from "react"
import Link from "next/link"

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
    <header
      className={`sticky top-0 z-50 ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-black/80"} transition-all duration-300 py-4`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Sirius A Marketing Logo"
              className="w-16 transition-transform duration-300 hover:scale-110"
            />
            <span className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight merriweather text-blue-400">Sirius A Marketing</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-purple-400 relative group">
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            {/* <Link href="/services" className="text-foreground hover:text-purple-400 relative group">
              Services
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link> */}
            <Link href="/case-studies" className="text-foreground hover:text-purple-400 relative group">
              Case Studies
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link href="/blog" className="text-foreground hover:text-purple-400 relative group">
              Blog
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link href="/sirius-a-visual" className="text-foreground hover:text-purple-400 relative group">
              Sirius A Visual
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 flex items-center space-x-2">
                <span>Get in touch</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </Button>
            </Link>
            {/* <ThemeSwitcher /> */}
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeSwitcher />
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  )
}