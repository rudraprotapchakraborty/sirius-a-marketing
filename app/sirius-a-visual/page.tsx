"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Brand & Commercial Videos",
    description: "Show the heart of your brand in a way that people connect with.",
    image: "/images/commercial.jpg",
  },
  {
    title: "Social Media Content",
    description: "Short, engaging videos that stop the scroll and make an impact.",
    image: "/images/social.jpg",
  },
  {
    title: "Product Photography & Videography",
    description: "Bringing out the best in your products with creativity and detail.",
    image: "/images/product.jpg",
  },
  {
    title: "Event Filming & Photography",
    description: "Capturing real emotions, energy, and unforgettable moments. (Including culture-based weddings)",
    image: "/images/event.jpg",
  },
  {
    title: "Corporate Storytelling",
    description: "Turning your journey into a story people want to follow.",
    image: "/images/corporate.jpg",
  },
];

export default function SiriusAVisual() {
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    document.title = "Sirius A Visual - Capture Your Story";
  }, []);

  return (
    <div className="min-h-screen px-6 py-12 transition-all duration-300 
      bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Sirius A Visual</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Everyone has a story, and people connect with stories that feel real. At Sirius A Visual, we don’t just create videos and photos—we capture emotions, moments, and the essence of what makes your brand unique. We use cinematic-grade cameras and equipment that deliver international-standard results.
        </p>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden">
              <motion.img 
                src={service.image} 
                alt={service.title} 
                className="w-full aspect-[16/9] object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <CardContent className="p-4 flex-grow flex flex-col justify-between">
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center mt-12">
        People remember what makes them feel something. Let’s create a visual story together.
      </p>
    </div>
  );
}
