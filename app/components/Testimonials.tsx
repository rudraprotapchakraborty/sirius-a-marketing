import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    company: "Tech Innovators Inc.",
    avatar: "/placeholder.svg",
    review:
      "Sirius A Marketing transformed our online presence. Their strategic approach and creative solutions helped us reach new heights in customer engagement.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bob Smith",
    company: "Global Solutions Ltd.",
    avatar: "/placeholder.svg",
    review:
      "The team at Sirius A Marketing is exceptional. Their data-driven strategies and innovative campaigns have significantly boosted our ROI.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carol Davis",
    company: "Eco Friendly Co.",
    avatar: "/placeholder.svg",
    review:
      "Working with Sirius A Marketing has been a game-changer for our brand. Their expertise in digital marketing is unparalleled.",
    rating: 4,
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
  return (
    <motion.section
      className="container mx-auto px-6 py-24 max-w-7xl bg-white/70 dark:bg-transparent rounded-3xl shadow-lg"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <motion.h2
        className="text-center text-4xl font-extrabold mb-10 text-gray-900 dark:text-white"
        variants={fadeInUp}
      >
        What Our Users Say
      </motion.h2>
      <motion.div
        className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerChildren}
      >
        {reviews.map((review) => (
          <motion.div key={review.id} variants={fadeInUp}>
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Avatar className="h-14 w-14 mr-4">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {review.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  "{review.review}"
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="text-center mt-12" variants={fadeInUp}>
        <Link href="/reviews">
          <Button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-lg rounded-full shadow-md transition-transform duration-300 hover:scale-105">
            Read All Reviews
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
