import React from "react";

const OurStory = () => {
  return (
    <section
      className="relative py-16 px-6 md:px-8 text-center bg-[url('https://static.wixstatic.com/media/597a93f9b45d40dfb08c8ea244d0dfca.png/v1/fill/w_1901,h_1013,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/597a93f9b45d40dfb08c8ea244d0dfca.png')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#e1e1eb] dark:bg-gray-900 opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12">
          OUR STORY
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16 lg:gap-32 items-center">
          {[...Array(2)].map((_, idx) => {
            const isFirst = idx === 0;
            return (
              <div
                key={idx}
                className="relative w-full max-w-xs h-[400px] rounded-t-full overflow-hidden shadow-2xl group bg-white dark:bg-gray-800"
              >
                <video
                  src={
                    isFirst
                      ? "https://videos.pexels.com/video-files/5170597/5170597-hd_1920_1080_24fps.mp4"
                      : "https://videos.pexels.com/video-files/3251846/3251846-uhd_2560_1440_25fps.mp4"
                  }
                  autoPlay
                  loop
                  muted
                  preload="none"
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
                ></video>
                <div className="absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 text-center p-6">
                  <h3 className={`text-4xl merriweather font-bold ${isFirst ? "text-white" : "text-black"} group-hover:hidden`}>
                    {isFirst ? "Nature" : "Nurture"}
                  </h3>
                  <p className={`text-base merriweather ${isFirst ? "text-white" : "text-black"} group-hover:hidden`}>
                    {isFirst ? "OF OUR BUSINESS" : "IS OUR BUSINESS"}
                  </p>
                  <p className={`text-[12px] merriweather opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isFirst ? "text-white" : "text-black"} text-left`}>
                    {isFirst ? (
                      <>
                        <strong>'Sirius' (noun)</strong><br />
                        The Brightest of All stars in the universe.
                        <br /><br />
                        Human interaction remains vital in our digital world where technology should be used to facilitate, not replace.
                        <br />
                        This is reflected in the Sales & Marketing services we provide to the wide array of Brands we represent.
                        <br /><br />
                        Creating personal and face-to-face sales experiences for consumers, in turn helps Brands to increase their market share and brand awareness.
                      </>
                    ) : (
                      <>
                        "Give a man a fish<br />
                        and you feed him for a day.<br />
                        Teach a man to fish<br />
                        and you feed him for a lifetime."
                        <br /><br />
                        The learning process is instrumental in shaping one's personality and the way they deal with life’s situations.
                        <br />
                        Knowledge and skills acquired today, will drive productivity and value in the long run.
                        <br /><br />
                        Achieving learning for all will be challenging, but it is our top priority for the next decade.
                      </>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
