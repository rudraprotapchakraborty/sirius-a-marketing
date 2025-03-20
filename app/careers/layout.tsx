import type React from "react"
import type { Metadata } from "next"
import { generateMetadata } from "../lib/metadata"

export const metadata: Metadata = generateMetadata({
  title: "Careers at Sirius A Marketing",
  description: "Join our team of digital marketing experts and shape the future of online business growth.",
  path: "/careers",
})

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

