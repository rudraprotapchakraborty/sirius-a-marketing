"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    company: "Tech Innovators Inc.",
    avatar: "/placeholder.svg",
    review:
      "Sirius A Marketing transformed our online presence. Their strategic approach and creative solutions helped us reach new heights in customer engagement.",
    rating: 5,
    position: "Marketing Director",
  },
  {
    id: 2,
    name: "Bob Smith",
    company: "Global Solutions Ltd.",
    avatar: "/placeholder.svg",
    review:
      "The team at Sirius A Marketing is exceptional. Their data-driven strategies and innovative campaigns have significantly boosted our ROI.",
    rating: 5,
    position: "CEO",
  },
  {
    id: 3,
    name: "Carol Davis",
    company: "Eco Friendly Co.",
    avatar: "/placeholder.svg",
    review:
      "Working with Sirius A Marketing has been a game-changer for our brand. Their expertise in digital marketing is unparalleled.",
    rating: 4,
    position: "Brand Manager",
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

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <motion.section
      ref={sectionRef}
      className="relative container mx-auto px-6 py-24 md:py-32 max-w-7xl overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren}
    >
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 -z-10 rounded-3xl overflow-hidden"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/40 dark:from-black/60 dark:to-black/40 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/40 via-indigo-500/40 to-purple-500/40"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </motion.div>
      
      <div className="relative z-10">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <span className="inline-block px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
            Client Success Stories
          </span>
          <motion.h2
            className="text-center text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-transparent bg-clip-text"
            variants={fadeInUp}
          >
            What Our Clients Say
          </motion.h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with Sirius A Marketing.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerChildren}
        >
          {reviews.map((review) => (
            <motion.div key={review.id} variants={fadeInUp}>
              <Card className="group h-full bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-purple-400/30 mb-4" />
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      "{review.review}"
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700/50">
                    <div className="flex items-center">
                      <Avatar className="h-14 w-14 mr-4 shadow-md ring-2 ring-purple-500/40 group-hover:ring-purple-500/60 transition-all duration-300">
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                          {review.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          {review.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {review.position}, {review.company}
                        </p>
                        <div className="flex gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star 
                              key={index} 
                              className={`h-4 w-4 ${
                                index < review.rating 
                                  ? "text-yellow-400 fill-current" 
                                  : "text-gray-300 dark:text-gray-600"
                              }`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-16" variants={fadeInUp}>
          <Link href="/reviews">
            <Button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium text-base rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300">
              Read All Reviews
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;