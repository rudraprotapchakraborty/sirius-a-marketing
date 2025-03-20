import type { Metadata } from "next"
import { generateMetadata } from "../lib/metadata"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = generateMetadata({
  title: "Blog",
  description: "Stay updated with the latest trends and insights in digital marketing.",
  path: "/blog",
})

export default function BlogPage() {
  return <BlogClientPage />
}

