import React from "react";

const OurStory = () => {
  return (
    <section
      className="relative bg-[#e1e1eb] dark:bg-gray-900 py-16 px-8 text-center bg-[url('https://static.wixstatic.com/media/597a93f9b45d40dfb08c8ea244d0dfca.png/v1/fill/w_1901,h_1013,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/597a93f9b45d40dfb08c8ea244d0dfca.png')] bg-cover bg-center"
    >
      {/* Overlay to maintain background color */}
      <div className="absolute inset-0 bg-[#e1e1eb] dark:bg-gray-900 opacity-80"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          OUR STORY
        </h2>
        <div className="flex flex-wrap justify-center gap-32">
          <div className="relative w-80 h-96 rounded-t-full overflow-hidden shadow-2xl group bg-white dark:bg-gray-800">
            <video
              src="https://videos.pexels.com/video-files/5170597/5170597-hd_1920_1080_24fps.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
            ></video>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-900 dark:text-gray-100 transition-opacity duration-300 text-center p-6">
              <h3 className="text-4xl merriweather font-bold text-white group-hover:hidden">Nature</h3>
              <p className="text-base merriweather text-white group-hover:hidden">OF OUR BUSINESS</p>
              <p className="text-[12px] text-left merriweather text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <strong>'Sirius' (noun)</strong><br />
                The Brightest of All stars in the universe.
                <br />
                <br />
                Human interaction remains vital in our digital world where technology should be used to facilitate, not replace.<br />
                This is reflected in the Sales & Marketing services we provide to the wide array of Brands we represent.
                <br />
                <br />
                Creating personal and face-to-face sales experiences for consumers, in turn helps Brands to increase their market share and brand awareness.
              </p>
            </div>
          </div>
          <div className="relative w-80 h-96 rounded-t-full overflow-hidden shadow-2xl group bg-white dark:bg-gray-800">
            <video
              src="https://videos.pexels.com/video-files/3251846/3251846-uhd_2560_1440_25fps.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
            ></video>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-900 dark:text-gray-100 transition-opacity duration-300 text-center p-6">
              <h3 className="text-4xl merriweather text-black font-bold group-hover:hidden">Nurture</h3>
              <p className="text-base merriweather text-black group-hover:hidden">IS OUR BUSINESS</p>
              <p className="text-[12px] merriweather text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                "Give a man a fish<br />
                and you feed him for a day.<br />
                Teach a man to fish<br />
                and you feed him for a lifetime."
                <br />
                <br />
                The learning process is instrumental in shaping one's personality and the way they deal with life’s situations.<br />
                Knowledge and skills acquired today, will drive productivity and value in the long run.<br />
                That’s why, proper guidance is necessary for the success of every individual.
                <br />
                <br />
                Achieving learning for all will be challenging, but it is our top priority for the next decade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
