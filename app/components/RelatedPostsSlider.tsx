"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  imageUrl: string
  slug: string
}

interface RelatedPostsSliderProps {
  posts: Post[]
  currentPostId: number
}

export function RelatedPostsSlider({ posts, currentPostId }: RelatedPostsSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const relatedPosts = posts.filter((post) => post.id !== currentPostId)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      const handleScroll = () => {
        setCanScrollLeft(scrollContainer.scrollLeft > 0)
        setCanScrollRight(scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth)
      }

      scrollContainer.addEventListener("scroll", handleScroll)
      handleScroll() // Initial check

      return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      const scrollAmount = direction === "left" ? -320 : 320
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {relatedPosts.map((post) => (
          <Card
            key={post.id}
            className="w-80 flex-shrink-0 border-purple-800/20 bg-purple-900/10 scroll-snap-align-start"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="aspect-video relative">
                <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <Badge className="mb-2 bg-purple-600">{post.category}</Badge>
                <h3 className="mb-2 text-lg font-semibold line-clamp-1">{post.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-purple-900/50 hover:bg-purple-900/75 ${
          canScrollLeft ? "visible" : "invisible"
        }`}
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-purple-900/50 hover:bg-purple-900/75 ${
          canScrollRight ? "visible" : "invisible"
        }`}
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

