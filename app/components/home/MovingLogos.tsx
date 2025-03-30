const MovingLogos = () => {
  const logos = [
    "/waffletime.jpg",
    "/zafenity.jpg",
    "/ghuddy.jpg",
    "/namimoon.jpg",
    "/kudos.jpg",
    "/masalaking.jpg",
    "/bridgepoint.jpg",
  ];

  // Duplicate only twice for infinite effect (less DOM load)
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex space-x-8 animate-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="w-28 h-28 flex items-center justify-center flex-shrink-0"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800 border border-gray-700 shadow-xl transform hover:scale-110 transition-all duration-300 will-change-transform">
              <img
                src={logo || "/placeholder.svg"}
                alt={`Company logo ${index + 1}`}
                className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scrollAnimation {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          white-space: nowrap;
          min-width: 200%; /* Matches duplication */
          animation: scrollAnimation 25s linear infinite;
          will-change: transform; /* Optimize animation performance */
        }

        /* Adjust speed for mobile */
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 12s; /* Slightly faster on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default MovingLogos;