import React, { useRef, useState } from "react";
import { motion } from "framer-motion"; // Framer Motion for animations
import data from "../Data/data1.json";
import { FaStar } from "react-icons/fa"; 
import Button from "./Button";
import Popup from "./Popup";

const HomeSection2 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const modalRef = useRef();

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setSelectedProduct(null);
    }
  };

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
  

      <section className="bg-[#f0f0f0] md:py-16 py-10">
        {/* Animated Section Title and Description */}
        <motion.div
          className="container mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Trigger animation only once when it comes into view
          variants={containerVariants}
        >
          <h2 className="md:text-4xl text-3xl font-poppins font-bold mb-4">
            Discover Your Next Dream Destination
          </h2>
          <p className="md:text-lg text-[16px] text-tertiary mb-8 md:max-w-[80%] mx-auto text-center font-Montserrat">
            Explore breathtaking locations handpicked just for you. Uncover hidden gems and embark on unforgettable adventures with us!
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-10 my-10 font-Montserrat"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="py-10 px-4 shadow flex flex-col gap-8 bg-secondary"
              whileHover={{ scale: 1.05 }} // Hover animation
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
            >
              <div className="justify-center flex">
                <p className="text-center py-3 px-14 bg-accent text-primary rounded-full">
                  {item.date}
                </p>
              </div>
              <div>
                <p className="text-center md:text-2xl text-xl text-secondary">
                  {item.name}
                </p>
              </div>
              <div>
                <p className="text-center text-secondary">
                  {item.shortDescription}
                </p>
              </div>
              <div className="flex items-center justify-center mt-2">
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={`text-yellow-500 ${starIndex < item.starRating ? "filled" : ""}`}
                  />
                ))}
              </div>
              <div className="flex justify-center cursor-pointer" onClick={() => openPopup(item)}>
                <Button title="View Details..." bg="bg-accent" color="text-primary" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Popup */}
        {selectedProduct && (
          <div
            ref={modalRef}
            onClick={closeModal} // Ensure the click is handled here
            className="h-screen cursor-pointer w-full inset-0 fixed backdrop-blur-sm z-30 bg-accent bg-opacity-25 flex items-center justify-center"
          >
            <Popup closePopup={closePopup} selectedProduct={selectedProduct} />
          </div>
        )}
      </section>
    </>
  );
};

export default HomeSection2;
