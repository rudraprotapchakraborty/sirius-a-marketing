"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Camera, Film, Instagram, Award } from "lucide-react";

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

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="aspect-video relative">
        <Image 
          src="/video-thumb.png" 
          alt="Video Thumbnail" 
          fill
          className={`object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
        />
        <video 
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          src="/video.mp4"
          playsInline
          onEnded={() => setIsPlaying(false)}
        />
        
        {/* Main play button (visible when video is not playing) */}
        {!isPlaying && (
          <button 
            onClick={handlePlayClick}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-purple-600/90 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 hover:scale-110">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </button>
        )}
        
        {/* Video controls bar */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 transition-opacity duration-300 ${
            (showControls || !isPlaying) ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-3">
            {/* Play/Pause button */}
            <button 
              onClick={handlePlayClick}
              className="text-white hover:text-purple-300 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
            
            {/* Volume controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={handleMuteToggle}
                className="text-white hover:text-purple-300 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-x w-5 h-5">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" x2="17" y1="9" y2="15" />
                    <line x1="17" x2="23" y1="9" y2="15" />
                  </svg>
                ) : volume < 0.5 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-1 w-5 h-5">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-2 w-5 h-5">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                )}
              </button>
              
              <div className="w-20 md:w-32 relative group">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer relative z-10
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 
                    [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500
                    [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 
                    [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-purple-500 [&::-moz-range-thumb]:border-0
                    [&::-ms-thumb]:appearance-none [&::-ms-thumb]:h-3 [&::-ms-thumb]:w-3 
                    [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-purple-500"
                  style={{
                    background: `linear-gradient(to right, #a855f7 0%, #a855f7 ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.3) ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.3) 100%)`
                  }}
                  aria-label="Volume"
                />
              </div>
            </div>
            
            <div className="ml-auto text-xs text-white/80">
              HD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SiriusAVisual() {
  const router = useRouter();
  const { theme } = useTheme();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.2]);

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
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-60 -left-20 w-60 h-60 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ opacity: headerOpacity }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                Visual Storytelling
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Sirius A Visual
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
              Everyone has a story, and people connect with stories that feel real. We don't just create videos and photos—we capture emotions, moments, and the essence of what makes your brand unique.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12"
          >
            <VideoShowcase />
          </motion.div>
        </div>
      </section>
      
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              We use cinematic-grade cameras and equipment that deliver international-standard results for businesses of all sizes.
            </motion.p>
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
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
            className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl shadow-purple-600/20"
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