"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function MobileNav({ items }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const handleLinkClick = () => setOpen(false)

  // Use passed items or fallback to default navLinks
  const navLinks = items || [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
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
        className="w-[300px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-gray-200 dark:border-gray-800"
      >
        <SheetHeader>
          <SheetTitle>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo.png"
                    alt="Sirius A Marketing Logo"
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                  Sirius A Marketing
                </span>
              </Link>
            </motion.div>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-10 flex flex-col gap-6">
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
                className={`text-lg font-medium relative group transition-all duration-300 ${
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
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + navLinks.length * 0.07 }}
            className="mt-4"
          >
            <Link href="/contact" onClick={handleLinkClick}>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 flex items-center justify-center gap-2 rounded-full py-6">
                <span>Get in touch</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-6 right-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Need help with your marketing?</p>
            <p className="mt-1">
              <a 
                href="tel:+4407362622636" 
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                +44 07362 622636
              </a>
            </p>
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  )
}