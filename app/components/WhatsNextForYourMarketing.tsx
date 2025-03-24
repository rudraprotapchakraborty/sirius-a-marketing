import React from "react";

const WhatsNextForYourMarketing: React.FC = () => {
  return (
    <div className="relative bg-white/70 dark:bg-transparent border border-purple-800/20 flex items-center justify-center h-[400px] w-full shadow-[0_0_15px_rgba(138,43,226,0.5)] rounded-xl">
      {/* Background Text */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white merriweather">
          What's next for your marketing?
        </h2>
        <a
          href="#"
          className="text-gray-700 dark:text-gray-300 underline mt-8 font-semibold inline-block hover:text-purple-600 dark:hover:text-purple-400"
        >
          Get in touch →
        </a>
      </div>

      {/* Images */}
      <div className="absolute left-0 -bottom-10 w-[100px] md:w-[125px] lg:w-[200px]">
        <img src="/img2.webp" alt="People" />
      </div>
      <div className="absolute right-0 top-0 w-[100px] md:w-[125px] lg:w-[200px]">
        <img src="/img1.jpg" alt="Red Appliances" />
      </div>
    </div>
  );
};

export default WhatsNextForYourMarketing;
