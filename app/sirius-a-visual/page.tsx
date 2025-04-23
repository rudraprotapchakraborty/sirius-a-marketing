"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Camera, Film, Instagram, Award } from "lucide-react";

const services = [
  {
    title: "Brand & Commercial Videos",
    description: "Show the heart of your brand in a way that people connect with.",
    image: "/images/commercial.jpg",
    icon: <Film className="w-6 h-6 text-purple-500" />,
    features: ["Storytelling-focused approach", "High production value", "Brand message alignment"],
  },
  {
    title: "Social Media Content",
    description: "Short, engaging videos that stop the scroll and make an impact.",
    image: "/images/social.jpg",
    icon: <Instagram className="w-6 h-6 text-purple-500" />,
    features: ["Platform-optimized content", "Trend-aware creation", "Engagement-driving formats"],
  },
  {
    title: "Product Photography & Videography",
    description: "Bringing out the best in your products with creativity and detail.",
    image: "/images/product.jpg",
    icon: <Camera className="w-6 h-6 text-purple-500" />,
    features: ["Studio-quality lighting", "Creative compositions", "Detail-focused shots"],
  },
  {
    title: "Event Filming & Photography",
    description: "Capturing real emotions, energy, and unforgettable moments. (Including culture-based weddings)",
    image: "/images/event.jpg",
    icon: <Award className="w-6 h-6 text-purple-500" />,
    features: ["Candid moment capture", "Multi-camera setups", "Same-day highlight edits"],
  },
  {
    title: "Corporate Storytelling",
    description: "Turning your journey into a story people want to follow.",
    image: "/images/corporate.jpg",
    icon: <Film className="w-6 h-6 text-purple-500" />,
    features: ["Interview-based narratives", "Company culture showcase", "Vision-aligned messaging"],
  },
];

const testimonials = [
  {
    quote: "The team at Sirius A Visual captured our brand essence perfectly. The video they created has been our most effective marketing asset to date.",
    author: "Sarah Johnson",
    position: "Marketing Director, Elevate Fitness",
    image: "/images/testimonial1.jpg",
  },
  {
    quote: "Working with Sirius A Visual transformed how we present our products. The quality of their photography is unmatched.",
    author: "Michael Chen",
    position: "CEO, Artisan Goods",
    image: "/images/testimonial2.jpg",
  },
  {
    quote: "Our wedding video exceeded all expectations. They captured moments we didn't even know happened. Worth every penny.",
    author: "Priya & Raj Patel",
    position: "Wedding Clients",
    image: "/images/testimonial3.jpg",
  },
];

export default function SiriusAVisual() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    document.title = "Sirius A Visual - Capture Your Story";

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950/20 text-gray-900 dark:text-white">

      <div className="relative flex flex-col md:flex-row px-4 sm:px-8 md:px-16 lg:px-32 justify-between items-center py-16 md:py-24 min-h-screen max-w-7xl mx-auto">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-full md:max-w-2xl mb-16 md:mb-0 text-center md:text-left z-10"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full">
            Sirius A Visual
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            The results-driven<br />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              Visuals
            </span><br />
            you've been looking for
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
          We use cinematic-grade cameras and equipment that deliver international-standard results for businesses of all sizes.
          </p>
        
        </motion.div>

        {/* Video Phone Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative w-72 sm:w-80 md:w-96 h-[500px] sm:h-[550px] md:h-[600px] z-10"
        >
          <motion.div
            className="relative w-full h-full"
          >
            <Image
              src="/phone.png"
              alt="Phone Frame"
              fill
              style={{ objectFit: "contain" }}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
            <div className="absolute top-[12%] left-[10%] right-[10%] bottom-[12%] bg-black rounded-[32px] z-0"></div>
            <iframe
              src="https://player.vimeo.com/video/1068853374?autoplay=1&muted=1&loop=1&background=1"
              title="Promotional video showing our agency's work"
              className="absolute top-[15%] left-[13%] w-[74%] h-[70%] rounded-3xl z-20"
              allow="autoplay; fullscreen"
            />
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl z-0"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl z-0"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Visual Services
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden border-0">
                  <div className="relative">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
                      {service.icon}
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>

                    <div className="mt-auto">
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link href={`/sirius-a-visual/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button variant="ghost" className="text-purple-600 dark:text-purple-400 p-0 hover:bg-transparent hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 text-sm">
                          Learn more <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-purple-950/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We've helped businesses and individuals tell their stories through powerful visuals.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative h-80">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeTestimonial === index ? 1 : 0,
                    x: activeTestimonial === index ? 0 : (activeTestimonial > index ? -100 : 100)
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  style={{ display: activeTestimonial === index ? 'block' : 'none' }}
                >
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-6 h-full">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                      <Image
                        src={testimonial.image || "/images/avatar-placeholder.jpg"}
                        alt={testimonial.author}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-6">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                        <p className="text-purple-600 dark:text-purple-400">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index
                    ? 'bg-purple-600 w-6'
                    : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-transparent rounded-3xl overflow-hidden shadow-2xl shadow-purple-600/20"
          >
            <div className="relative p-12 md:p-16">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to bring your story to life?</h2>
                <p className="text-lg text-purple-100 mb-8">
                  Let's create visual content that captures your brand's essence and connects with your audience on a deeper level.
                </p>
                <Link href="/contact">
                  <Button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-6 rounded-full text-lg shadow-lg">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}