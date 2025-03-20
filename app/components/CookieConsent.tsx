"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    // Initialize GA after consent
    if (window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      })
    }
    setShowConsent(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "false")
    // Deny GA tracking
    if (window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      })
    }
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#0D0B21]/80 backdrop-blur-md">
      <Card className="border-purple-800/20 bg-purple-900/10 max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-300">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
              traffic. By clicking "Accept All", you consent to our use of cookies.
              <Link href="/privacy" className="text-purple-400 hover:text-purple-300 ml-1">
                Cookie Policy
              </Link>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-purple-800/20 hover:bg-purple-900/50" onClick={rejectCookies}>
                Reject All
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700" onClick={acceptCookies}>
                Accept All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

