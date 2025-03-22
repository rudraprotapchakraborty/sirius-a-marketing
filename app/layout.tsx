import type React from "react"
import type { Metadata } from "next"
import { generateMetadata } from "./lib/metadata"
import { Inter } from "next/font/google"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { CookieConsent } from "./components/CookieConsent"
import { TopLoadingBar } from "./components/TopLoadingBar"
import { ThemeProvider } from "./components/theme-provider"
import { GoogleAnalytics } from "./components/GoogleAnalytics"
import ScrollToTopLayout from "./components/ScrollToTopLayout"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = generateMetadata({})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden bg-[#e1e1eb] dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <GoogleAnalytics />
          <TopLoadingBar />
          <Header />
          <ScrollToTopLayout>
            <main>{children}</main>
          </ScrollToTopLayout>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'