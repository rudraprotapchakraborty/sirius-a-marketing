import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SocialFirstAgency = () => {
  return (
    <div className="flex flex-col bg-white/70 dark:bg-transparent md:flex-row px-4 sm:px-8 md:px-16 lg:px-32 justify-between items-center py-10 min-h-screen">
      {/* Text Content */}
      <div className="max-w-full md:max-w-2xl mb-8 md:mb-0 text-center md:text-left">
        <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-300 mb-4">
          Sirius A Marketing
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight">
          The results-driven<br />
          <span className="text-purple-400">Social first agency</span><br />
          you've been looking<br /> for
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <Button className="bg-black dark:bg-gray-800 text-white dark:text-gray-200 px-6 py-3 rounded-full w-full sm:w-auto">
            Browse Our Services
          </Button>
          <Button className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 w-full sm:w-auto">
            Meet The Team →
          </Button>
        </div>
      </div>

      {/* Video Phone Frame */}
      <div className="relative w-64 sm:w-72 md:w-80 h-[400px] sm:h-[460px] md:h-[512px]">
        <Image
          src="/phone.png"
          alt="Phone Frame"
          fill
          style={{ objectFit: "contain" }}
          className="relative z-10"
        />
        <iframe
          src="https://player.vimeo.com/video/1068853374?autoplay=1&muted=1&loop=1"
          title="Promotional video showing our agency's work"
          className="absolute top-[20%] left-[17.5%] w-[60%] h-[68%] rounded-xl z-20 pointer-events-auto"
          allow="autoplay; fullscreen"
        />
      </div>
    </div>
  );
};

export default SocialFirstAgency;
