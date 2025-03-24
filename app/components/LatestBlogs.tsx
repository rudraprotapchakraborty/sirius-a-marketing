"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    slug: "marketing-trends-2025",
    title: "Top Marketing Trends in 2025",
    category: "Marketing",
    excerpt: "Discover the latest trends shaping the future of digital marketing in 2025.",
    date: "March 20, 2025",
    readTime: "5 min read",
  },
  {
    slug: "branding-strategies",
    title: "Branding Strategies for Startups",
    category: "Branding",
    excerpt: "How to create a strong brand identity that captivates your audience.",
    date: "March 18, 2025",
    readTime: "6 min read",
  },
  {
    slug: "seo-secrets",
    title: "SEO Secrets to Rank Higher on Google",
    category: "SEO",
    excerpt: "Unlock the best SEO practices to skyrocket your website rankings.",
    date: "March 15, 2025",
    readTime: "7 min read",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const LatestBlogs: React.FC = () => {
  return (
    <motion.section
      className="container mx-auto px-6 py-20 max-w-7xl bg-white/70 dark:bg-transparent backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <motion.h2
        className="text-center text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        variants={fadeInUp}
      >
        Latest Blogs & News
      </motion.h2>
      <motion.div
        className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerChildren}
      >
        {blogPosts.map((post, index) => (
          <motion.div key={index} variants={scaleIn} className="flex">
            <Card className="group border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col min-h-full">
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg`} // Replace with actual images later
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <Badge className="mb-4 bg-purple-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                    {post.category}
                  </Badge>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">{post.excerpt}</p>
                  <div className="mt-4 flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="text-center mt-12" variants={fadeInUp}>
        <Link href="/blog">
          <Button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-lg rounded-full shadow-md transition-transform duration-300 hover:scale-105">
            Read All Posts
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default LatestBlogs;
