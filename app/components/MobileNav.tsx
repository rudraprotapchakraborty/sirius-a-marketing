"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sparkles } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] bg-white dark:bg-[#0D0B21] border-gray-200 dark:border-purple-800/20"
      >
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <img
                src="/logo.png"
                alt="Sirius A Marketing Logo"
                className="w-16 transition-transform duration-300 hover:scale-110"
              />
              <span className="text-lg font-bold text-gray-900 dark:text-white">Sirius A Marketing</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-4">
          <Link href="/" className="text-foreground hover:text-purple-400 relative group">
            Home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="/services" className="text-foreground hover:text-purple-400 relative group">
            Services
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="/case-studies" className="text-foreground hover:text-purple-400 relative group">
            Case Studies
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="/blog" className="text-foreground hover:text-purple-400 relative group">
            Blog
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="/contact">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 flex items-center space-x-2">
              <span>Get in touch</span>
              <Sparkles className="w-4 h-4 animate-pulse" />
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}