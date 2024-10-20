import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import Navbar from './Navbar'; // Assuming Navbar is used in other pages
import Button from './Button';
import { Link } from 'react-router-dom';

const HomeLandingPage = ({bg, color,title}) => {
  // Array of images with titles and subheadings
  const slides = [
    {
      image: '/images/Homeimg1.jpg',
      title: "Explore The World With <span class='stroke'>Honey Guide</span>",
      subheading: 'Explore the world’s most stunning destinations, curated just for you. Plan your dream trip and embark on new adventures.',
    },
    {
      image: '/images/Homeimg2.jpg',
      title: "Unleash Adventure With <span class='stroke'>Honey Guide</span>",
      subheading: 'Embark on thrilling journeys to breathtaking landscapes. Discover hidden gems and create unforgettable memories with every step you take.',
    },
    {
      image: '/images/Homeimg3.jpg',
      title: "Experience Vibrant Cultures With <span class='stroke'>Honey Guide</span>",
      subheading: 'Immerse yourself in the heart of iconic cities. Savor local flavors, connect with friendly locals, and feel the energy of urban life like never before.',
    },
  ];
  
  

  // State to track the current image index
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect to cycle through images at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change image every 6 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <div className="relative h-[100vh]">
      {/* Navbar (If applicable for all pages) */}
      <Navbar />

      {/* Image Background Section */}
      <div className="relative h-full w-full">
        {/* Background image switcher */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})`, height:'100%' }}
          ></div>
        ))}

        {/* Overlay text container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          {/* Animated Title */}
          <motion.h1
            key={currentSlide} // Reanimate when slide changes
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="mt-10 lg:text-6xl text-3xl capitalize font-poppins lg:max-w-[80%] mx-auto font-extrabold tracking-wider text-secondary"
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }} // Use dangerouslySetInnerHTML to render HTML
          />

          {/* Animated Subheading */}
          <motion.p
            key={`sub-${currentSlide}`} // Reanimate subheading on slide change
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-light lg:text-xl text-[17px] font-poppins text-secondary capi mt-4 md:max-w-[80%] lg:max-w-[70%]"
          >
            {slides[currentSlide].subheading}
          </motion.p>

          {/* Call to Action Button with animation */}
          <Link to='/contact'>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8  font-poppins"
          >
           <Button bg='bg-accent' color='text-secondary' title='Contact us' />
          </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLandingPage;
