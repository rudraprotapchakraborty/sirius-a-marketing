"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Sirius A Visual", href: "/sirius-a-visual" },
  ]

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
        className="w-[300px] bg-white/90 dark:bg-[#0D0B21]/80 backdrop-blur-md border-gray-200 dark:border-purple-800/20"
      >
        <SheetHeader>
          <SheetTitle>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
                <img
                  src="/logo.png"
                  alt="Sirius A Marketing Logo"
                  className="w-16 transition-transform duration-300 hover:scale-110"
                />
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  Sirius A Marketing
                </span>
              </Link>
            </motion.div>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-4">
          {navLinks.map(({ name, href }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
            >
              <Link
                href={href}
                onClick={handleLinkClick}
                className="text-foreground hover:text-purple-400 relative group transition-all duration-300"
              >
                {name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact" onClick={handleLinkClick}>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 flex items-center space-x-2">
                <span>Get in touch</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
