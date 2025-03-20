"use client"

import type React from "react"
import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function ScrollHandler() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, searchParams.toString()]) // Run effect when pathname or searchParams change

  return null
}

export default function ScrollToTopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      {children}
    </>
  )
}
