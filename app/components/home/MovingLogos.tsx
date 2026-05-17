"use client";

import Image from "next/image";

const logos = [
  "/waffletime.jpg",
  "/zafenity.jpg",
  "/ghuddy.jpg",
  "/namimoon.jpg",
  "/kudos.jpg",
  "/masalaking.jpg",
  "/bridgepoint.jpg",
];

const MovingLogos = () => {
  return (
    <div className="relative w-full overflow-hidden py-8 mask-fade-x">
      <div className="flex animate-marquee-x">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-3 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center sm:mx-4 sm:h-24 sm:w-24"
          >
            <div className="group relative h-full w-full overflow-hidden rounded-full border border-hairline/60 bg-surface/60 backdrop-blur-sm transition-all duration-500 ease-out-expo hover:border-cobalt-glow/60 hover:scale-105">
              <Image
                src={logo}
                alt={`Client logo ${(index % logos.length) + 1}`}
                fill
                sizes="(max-width: 640px) 80px, 96px"
                className="object-cover opacity-75 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingLogos;
