"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OurStory = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const storyCards = [
    {
      title: "Nature",
      subtitle: "OF OUR BUSINESS",
      videoSrc: "https://videos.pexels.com/video-files/5170597/5170597-hd_1920_1080_24fps.mp4",
      textColor: "text-white",
      content: (
        <>
          <strong className="text-lg font-bold">'Sirius' (noun)</strong><br />
          <span className="text-lg">The Brightest of All stars in the universe.</span>
          <br /><br />
          Human interaction remains vital in our digital world where technology should be used to facilitate, not replace.
          <br />
          This is reflected in the Sales & Marketing services we provide to the wide array of Brands we represent.
          <br /><br />
          Creating personal and face-to-face sales experiences for consumers, in turn helps Brands to increase their market share and brand awareness.
        </>
      )
    },
    {
      title: "Nurture",
      subtitle: "IS OUR BUSINESS",
      videoSrc: "https://videos.pexels.com/video-files/3251846/3251846-uhd_2560_1440_25fps.mp4",
      textColor: "text-black dark:text-white",
      content: (
        <>
          <span className="text-lg italic font-medium">
            "Give a man a fish and you feed him for a day.<br />
            Teach a man to fish and you feed him for a lifetime."
          </span>
          <br /><br />
          The learning process is instrumental in shaping one's personality and the way they deal with life's situations.
          <br />
          Knowledge and skills acquired today, will drive productivity and value in the long run.
          <br /><br />
          Achieving learning for all will be challenging, but it is our top priority for the next decade.
        </>
      )
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-24 px-6 md:px-8 overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-transparent bg-clip-text mb-6">
            Our Story
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Discover the philosophy and values that drive our approach to marketing and client success
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16 lg:gap-24 items-center">
          {storyCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm"
              onHoverStart={() => setActiveCard(idx)}
              onHoverEnd={() => setActiveCard(null)}
            >
              <div className="relative h-[450px] rounded-t-full overflow-hidden shadow-2xl group bg-transparent border border-gray-200/50 dark:border-gray-700/50">
                {/* Video background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-t-full">
                  <video
                    src={card.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      activeCard === idx ? "scale-110 brightness-[0.4] dark:brightness-[0.4]" : "scale-100"
                    }`}
                  ></video>
                </div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 transition-all duration-500">
                  {/* Title visible when not hovered */}
                  <motion.div 
                    className={`flex flex-col items-center transition-all duration-500 ${
                      activeCard === idx ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <h3 className={`text-5xl font-bold mb-2 ${card.textColor}`}>
                      {card.title}
                    </h3>
                    <p className={`text-lg font-medium ${card.textColor}`}>
                      {card.subtitle}
                    </p>
                  </motion.div>
                  
                  {/* Content visible when hovered */}
                  <motion.div 
                    className={`text-gray-800 dark:text-gray-200 text-left transition-all duration-500 ${
                      activeCard === idx ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  >
                    {card.content}
                  </motion.div>
                </div>
                
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
              </div>
              
              {/* Card label */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-lg">
                <span className="font-medium">{card.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a href="/about" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
            Learn more about us
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurStory;