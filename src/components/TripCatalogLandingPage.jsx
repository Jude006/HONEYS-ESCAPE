import React from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/images/tripcat.webp';
import Navbar from './Navbar';

const TripCatalogLandingPage = () => {
  return (
    <div>
        <Navbar />
      {/* Hero Section */}
      <div
        className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-center text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-poppins"
          >
            Discover Your Next Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg md:text-2xl font-Montserrat"
          >
            Explore the world with our handpicked travel packages
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 flex md:flex-row flex-col gap-3 justify-center items-center"
          >
            <input
              type="text"
              placeholder="Search your destination"
              className="p-3 md:p-4 font-poppins w-[80%] md:w-[50%] rounded text-black"
            />
            <button className="bg-secondary text-primary p-3 md:p-4 ml-2 font-poppins rounded max-w-[150px]">
              Search
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TripCatalogLandingPage;
