import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">404</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-full">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

