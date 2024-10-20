import React from "react";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import framer-motion

function HomeSection1() {
  return (
    <div className="w-full font-mont overflow-hidden md:px-10 lg:px-20 px-4">
      <div className="grid grid-cols-12 gap-14 mt-16 items-center ">
        <motion.div
          className="md:col-span-7 col-span-12 flex flex-col gap-8  px-4"
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and moved down
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
          viewport={{ once: false }} // Keeps the animation active when in view
          transition={{ duration: 0.8 }} // Duration of the animation
        >
          <div>
            <p className="text-accent font-poppins md:text-2xl text-lg uppercase">
              Your Next Adventure Awaits You
            </p>
          </div>
          <div className=" ">
            <p className="md:text-3xl lg:text-4xl font-poppins  text-lg font-bold uppercase ">
              Discover the <span className="text-accent">world</span> with our guide
            </p>
          </div>
          <div>
            <p className="md:text-[16px] text-[15px] text-tertiary font-Montserrat max-w-[80%]">
              At Honey Guide, we believe that every journey should be more than
              just a vacation – it should be an experience that leaves you with
              memories for a lifetime. Whether you're seeking the thrill of
              adventure, the calm of nature, or the excitement of discovering
              new cultures, we are here to craft the perfect trip for you.
            </p>
            <p className="md:text-[16px] text-[15px] text-tertiary max-w-[80%] mt-4 font-Montserrat">
              Explore our hand-picked destinations, designed for travelers just
              like you. Discover hidden gems, indulge in local cuisines, and
              immerse yourself in unique cultures – all with the convenience and
              peace of mind that our expertly curated packages provide.
            </p>
          </div>
          <div className="flex flex-col gap-4 font-poppins">
            <p className="flex items-center gap-3">
              <span className="py-3 px-3 rounded-full bg-accent text-secondary text-xl">
                <FaCheck />
              </span>
              <span className="md:text-lg text-[16px]">150+ Tours Destination</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="py-3 px-3 rounded-full bg-accent text-secondary text-xl">
                <FaCheck />
              </span>
              <span className="md:text-lg text-[16px]">20 Years Of Experience</span>
            </p>
          </div>
          <div></div>
        </motion.div>

        <motion.div
          className="md:col-span-5 col-span-12 md:px-0 px-6"
          initial={{ opacity: 0, scale: 0.9 }} // Start with scale 0.9 and opacity 0
          whileInView={{ opacity: 1, scale: 1 }} // Animate to full scale and opacity
          viewport={{ once: false }} // Keeps the animation active when in view
          transition={{ duration: 0.8 }} // Duration of the animation
        >
          <div className="bg-accent w-full h-[65vh] relative ">
            <img
              src="/images/h1.jpeg"
              alt="image"
              className="w-[90%] h-[95%] hover:scale-95 duration-300 ease-in absolute object-cover md:-top-10 -top-8 -left-10"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeSection1;
