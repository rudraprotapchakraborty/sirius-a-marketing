"use client"

import { Suspense } from "react"
import useSWR from "swr"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  imageUrl: string
  slug: string
}

interface PaginatedResponse {
  results: BlogPost[]
  currentPage: number
  totalPages: number
  totalPosts: number
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function useBlogPosts(page: number) {
  const { data, error } = useSWR<PaginatedResponse>(`/api/blog?page=${page}&limit=6`, fetcher)

  return {
    posts: data?.results ?? [],
    currentPage: data?.currentPage ?? page,
    totalPages: data?.totalPages ?? 0,
    isLoading: !error && !data,
    isError: error,
  }
}

function BlogContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = Number.parseInt(searchParams.get("page") || "1", 10)
  const { posts, currentPage, totalPages, isLoading, isError } = useBlogPosts(page)

  const handlePageChange = (newPage: number) => {
    router.push(`/blog?page=${newPage}`)
    window.scrollTo(0, 0)
  }

  if (isLoading) {
    return <div className="min-h-screen bg-[#0D0B21] text-white py-12 flex justify-center items-center">Loading...</div>
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-[#0D0B21] text-white py-12 flex justify-center items-center">
        Error loading posts
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Blog</h1>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-full">
          {posts.map((post) => (
            <Card key={post.id} className="border-purple-800/20 bg-purple-900/10 overflow-hidden">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative overflow-hidden">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-purple-600">{post.category}</Badge>
                  <h2 className="mb-2 text-xl font-semibold line-clamp-2">{post.title}</h2>
                  <p className="text-gray-400 mb-4 text-sm md:text-base line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs md:text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex justify-center items-center space-x-4">
          <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} variant="outline">
            Previous
          </Button>
          <span className="text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="outline"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function BlogClientPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0D0B21] text-white py-12 flex justify-center items-center">Loading...</div>}>
      <BlogContent />
    </Suspense>
  )
}
