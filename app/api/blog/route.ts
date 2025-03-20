import { NextResponse } from "next/server"

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with AI in Your SaaS",
    excerpt: "Learn how to integrate AI capabilities into your SaaS product for enhanced user experience.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "AI",
    imageUrl: "/placeholder.svg",
    slug: "getting-started-with-ai-in-your-saas",
  },
  {
    id: 2,
    title: "The Future of Next.js and React",
    excerpt:
      "Explore the latest features and improvements in Next.js and React, and how they shape the future of web development.",
    date: "2025-01-20",
    readTime: "7 min read",
    category: "Web Development",
    imageUrl: "/placeholder.svg",
    slug: "the-future-of-nextjs-and-react",
  },
  {
    id: 3,
    title: "Optimizing Your SaaS for Performance",
    excerpt: "Discover key strategies to improve the performance and scalability of your SaaS application.",
    date: "2025-01-25",
    readTime: "6 min read",
    category: "Performance",
    imageUrl: "/placeholder.svg",
    slug: "optimizing-your-saas-for-performance",
  },
  // Add more blog posts here...
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number.parseInt(searchParams.get("page") || "1", 10)
  const limit = Number.parseInt(searchParams.get("limit") || "6", 10)

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const results = blogPosts.slice(startIndex, endIndex)
  const totalPages = Math.ceil(blogPosts.length / limit)

  return NextResponse.json({
    results,
    currentPage: page,
    totalPages,
    totalPosts: blogPosts.length,
  })
}

