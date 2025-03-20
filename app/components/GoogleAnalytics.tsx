"use client"

import { useEffect, Suspense } from "react"
import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag: (command: string, action: string, params: any) => void
  }
}

function GoogleAnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  useEffect(() => {
    if (measurementId && window.gtag) {
      const url = pathname + searchParams.toString()
      window.gtag("config", measurementId, {
        page_path: url,
      })
    }
  }, [pathname, searchParams, measurementId])

  if (!measurementId) {
    return null
  }

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

export function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner />
    </Suspense>
  )
}
