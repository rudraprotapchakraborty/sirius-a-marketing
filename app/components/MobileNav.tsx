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
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] bg-[#0D0B21] border-purple-800/20">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <Sparkles className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold text-white">Sirius A Marketing</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-4">
          <Link href="/services" className="text-white hover:text-purple-400 py-2" onClick={handleLinkClick}>
            Services
          </Link>
          <Link href="#features" className="text-white hover:text-purple-400 py-2" onClick={handleLinkClick}>
            Features
          </Link>
          <Link href="#pricing" className="text-white hover:text-purple-400 py-2" onClick={handleLinkClick}>
            Pricing
          </Link>
          <Link href="/blog" className="text-white hover:text-purple-400 py-2" onClick={handleLinkClick}>
            Blog
          </Link>
          <Link href="/contact" className="text-white hover:text-purple-400 py-2" onClick={handleLinkClick}>
            Contact
          </Link>
          <Link href="/contact" onClick={handleLinkClick}>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Get in touch</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

