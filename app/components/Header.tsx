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
      className={`sticky top-0 z-50 ${isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background"} transition-colors duration-300 py-4`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between transition-colors duration-300">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold">Sirius A Marketing</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/services" className="text-foreground hover:text-purple-400 relative group">
              Services
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link href="/case-studies" className="text-foreground hover:text-purple-400 relative group">
              Case Studies
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link href="/blog" className="text-foreground hover:text-purple-400 relative group">
              Blog
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300">
                Get in touch
              </Button>
            </Link>
            <ThemeSwitcher />
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

