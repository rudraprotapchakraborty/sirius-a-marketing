"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useFormStatus } from "react-dom"
import SubscriptionForm from "../SubscriptionForm"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

function SubscribeButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      size="icon"
      className="bg-purple-600 hover:bg-purple-700 rounded-full shrink-0 text-white"
      disabled={pending}
    >
      {pending ? <span className="animate-spin">↻</span> : <ArrowRight className="h-4 w-4" />}
    </Button>
  )
}

const StickyIcons = () => (
  <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
    {[
      {
        name: "facebook",
        url: "https://www.facebook.com/share/1CG8CPCm9s/",
        bgColor: "bg-[#1877F2]",
        icon: <FaFacebookF className="sm:w-[24px] sm:h-[24px] w-[18px] h-[18px] text-white" />,
      },
      {
        name: "linkedin",
        url: "https://linkedin.com",
        bgColor: "bg-[#0A66C2]",
        icon: <FaLinkedinIn className="sm:w-[24px] sm:h-[24px] w-[18px] h-[18px] text-white" />,
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/sirius_a_marketing?igsh=MXVncTJ5dTBscmVwbQ==",
        bgColor: "bg-gradient-to-r from-[#FCAF45] via-[#E1306C] to-[#C13584]",
        icon: <FaInstagram className="sm:w-[24px] sm:h-[24px] w-[18px] h-[18px] text-white" />,
      },
      {
        name: "x",
        url: "https://twitter.com",
        bgColor: "bg-black",
        icon: <FaXTwitter className="sm:w-[24px] sm:h-[24px] w-[18px] h-[18px] text-white" />,
      },
    ].map((social) => (
      <Link
        key={social.name}
        href={social.url}
        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${social.bgColor} hover:opacity-80`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">{social.name}</span>
        {social.icon}
      </Link>
    ))}
  </div>
);

export default StickyIcons;

export function Footer() {
  return (
    <footer className="text-gray-900 dark:text-white z-50 bg-white/80 dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-2 sm:mb-4 text-center md:text-left">
          {/* Newsletter Section */}
          <SubscriptionForm />

          {/* Services and Company Sections */}
          <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-8">
            {/* Explore section */}
            <div>
              <h4 className="text-sm text-gray-600 dark:text-gray-400 mb-4">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/case-studies" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company section */}
            <div>
              <h4 className="text-sm text-gray-600 dark:text-gray-400 mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-sm text-gray-600 dark:text-gray-400 mb-4">Don't be a stranger</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400">UK –</span>
                <a href="mailto:hello@siriusamarketing.com" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                  hello@siriusamarketing.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400">BD –</span>
                <a href="mailto:bd@siriusamarketing.com" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                  bd@siriusamarketing.com
                </a>
              </p>
              <Link href="/careers">
                <Button variant="outline" className="mt-4 border-purple-800/20 text-gray-900 dark:text-white hover:bg-purple-900/50 dark:hover:bg-purple-900/50">
                  We're Hiring
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 pb-0 border-t border-purple-800/20 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Sirius A Marketing. All rights reserved.
            </p>
            <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
      <StickyIcons />

      {/* Chat Widget */}
      <Link href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
        <Button
          size="icon"
          className="fixed bottom-4 right-4 w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg sm:bottom-8 sm:right-8 sm:w-12 sm:h-12 text-white"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="sr-only">Chat on WhatsApp</span>
        </Button>
      </Link>
    </footer>
  )
}