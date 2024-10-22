import React from "react";
import data2 from "../Data/data2.json";
import { FaStar, FaBicycle, FaPlane, FaSuitcase, FaMapMarkerAlt } from 'react-icons/fa';
import ReadMoreButton from "./ReadMoreButton";
import { motion } from "framer-motion"; // Import Framer Motion

import { Link } from "react-router-dom";

const HomeSection4 = () => {
  return (
    <>
   

      <section className="bg-[#f0f0f0] mt-0 py-16">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-primary font-poppins">
            Explore More Amazing Destinations
          </h2>
          <p className="text-lg text-gray-600 mt-2 font-Montserrat">
            Discover a variety of travel destinations and exciting tours tailored just for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-14 py-16">
          {/* Use slice to limit the number of items */}
          {data2.slice(0, 4).map((item, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 grid-cols-1 gap-4"
              initial={{ opacity: 0, y: 50 }} // Initial animation state
              animate={{ opacity: 1, y: 0 }} // Final animation state
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect
            >
              <div className="relative max-h-[60vh]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover h-full w-full rounded-lg shadow-lg" // Added rounded corners and shadow for image
                />
                <h1 className="absolute bottom-8 text-primary left-6 font-poppins md:text-xl text-lg bg-secondary  bg-opacity-75 p-2 rounded"> {/* Added background for better visibility */}
                  {item.name}
                </h1>
              </div>
              <div className="font-Montserrat flex flex-col gap-3 bg-secondary bg-opacity-25 shadow p-4 rounded-lg"> {/* Padding and rounded corners for the card */}
                <h3 className="text-xl font-bold text-hoverGreen mt-6">
                  {item.amount}
                </h3>
                <h2 className="flex gap-2 my-2 md:text-xl text-lg">
                  {[...Array(4)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-primary" />
                  ))}
                  <FaStar className="text-accent" />
                </h2>
                <h3>{item.shortDescription}</h3>
                <div className="flex space-x-4 mb-3 mt-2"> {/* Adjusted spacing */}
                  {/* Flex container for icons */}
                  <FaBicycle className="text-primary text-3xl hover:text-accent transition duration-300" />
                  <FaPlane className="text-primary text-3xl hover:text-accent transition duration-300" />
                  <FaSuitcase className="text-primary text-3xl hover:text-accent transition duration-300" />
                  <FaMapMarkerAlt className="text-primary text-3xl hover:text-accent transition duration-300" />
                </div>
               <Link to='/tripcatalog'>
               <div>
                  <ReadMoreButton />
                </div>
               </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeSection4;
