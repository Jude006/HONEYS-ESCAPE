import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa"; // Removed navigation icons
import img from "../assets/images/section3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

// Dummy destination data
const destinations = [
  {
    name: "Dubai",
    description:
      "Explore the stunning skyline, luxurious shopping malls, endless beaches, and vibrant nightlife of Dubai. From iconic landmarks like the Burj Khalifa to a desert safari experience, Dubai offers a perfect blend of modernity and tradition.",
    rating: 5,
    buttonText: "Book Now",
  },
  {
    name: "Maldives",
    description:
      "Relax in the tropical paradise of Maldives, with crystal-clear waters, stunning coral reefs, and white sandy beaches. Enjoy world-class resorts and indulge in snorkeling, diving, or simply unwind by the ocean.",
    rating: 4,
    buttonText: "Book Now",
  },
  {
    name: "Paris",
    description:
      "Experience the romance and charm of Paris, from the Eiffel Tower to the Louvre. Stroll through beautiful streets, dine at cozy cafes, and immerse yourself in the rich culture and history that makes Paris a timeless destination.",
    rating: 4.5,
    buttonText: "Book Now",
  },
];

const Section3 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="md:h-[60vh] py-8 font-Montserrat md:px-8 px-4 relative"
    >
      {/* Swiper slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className="w-full h-full"
      >
        {destinations.map((destination, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gradient-to-r from-secondary to-primary py-8 px-6 h-full w-full rounded-lg shadow-md flex flex-col items-center justify-center space-y-6 transition-transform duration-500 transform hover:scale-105 hover:shadow-lg">
              {/* Content Section */}
              <div className="flex flex-col justify-center items-center text-white space-y-4">
                <h2 className="text-4xl font-bold tracking-wider animate-fade-in">
                  {destination.name}
                </h2>
                <p className="text-lg leading-relaxed animate-slide-up text-center max-w-3xl">
                  {destination.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1 animate-slide-up">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-500 ${i < destination.rating ? "fill-current" : "opacity-30"}`}
                    />
                  ))}
                </div>

                {/* Book Now Button */}
                <div className="mt-4 animate-slide-up">
                <Link to='/contact'>
                <button   className="px-6 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out" >
                    {destination.buttonText}
                  </button>
                </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section3;
