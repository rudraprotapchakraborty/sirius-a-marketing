import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { RelatedPostsSlider } from "@/app/components/RelatedPostsSlider"

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with AI in Your SaaS",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "AI",
    imageUrl: "/placeholder.svg",
    slug: "getting-started-with-ai-in-your-saas",
    excerpt: "Learn how to integrate AI capabilities into your SaaS product for enhanced user experience.",
  },
  {
    id: 2,
    title: "The Future of Next.js and React",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2025-01-20",
    readTime: "7 min read",
    category: "Web Development",
    imageUrl: "/placeholder.svg",
    slug: "the-future-of-nextjs-and-react",
    excerpt:
      "Explore the latest features and improvements in Next.js and React, and how they shape the future of web development.",
  },
  {
    id: 3,
    title: "Optimizing Your SaaS for Performance",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2025-01-25",
    readTime: "6 min read",
    category: "Performance",
    imageUrl: "/placeholder.svg",
    slug: "optimizing-your-saas-for-performance",
    excerpt: "Discover key strategies to improve the performance and scalability of your SaaS application.",
  },
]

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0D0B21] text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 mb-8 inline-block">
          ← Back to Blog
        </Link>
        <div className="relative w-full mx-auto aspect-video mb-8">
          <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
        </div>
        <Card className="border-purple-800/20 bg-purple-900/10 mb-12">
          <CardContent className="p-8">
            <Badge className="mb-4 bg-purple-600">{post.category}</Badge>
            <CardTitle className="mb-4 text-3xl">{post.title}</CardTitle>
            <div className="flex items-center justify-between text-sm text-gray-400 mb-8">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <div className="prose prose-invert">
              <p>{post.content}</p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 px-4 py-8 bg-purple-900/10 rounded-lg">
          <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
          <RelatedPostsSlider posts={blogPosts} currentPostId={post.id} />
        </div>
      </div>
    </div>
  )
}

