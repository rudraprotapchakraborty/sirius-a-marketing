"use client"

import { useEffect, useState, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import LoadingBar from "react-top-loading-bar"

function LoadingBarComponent() {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setProgress(30) // Start loading
    const timer = setTimeout(() => setProgress(100), 500) // Simulate loading completion

    return () => clearTimeout(timer) // Cleanup timer on unmount
  }, [pathname, searchParams.toString()]) // Run effect on route change

  return (
    <LoadingBar 
      color="#8B5CF6" 
      progress={progress} 
      onLoaderFinished={() => setProgress(0)} 
      shadow={true} 
      height={3} 
    />
  )
}

export function TopLoadingBar() {
  return (
    <Suspense fallback={null}>
      <LoadingBarComponent />
    </Suspense>
  )
}
