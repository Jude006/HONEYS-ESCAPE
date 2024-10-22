import React, { useState } from 'react';
import { FaClock, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import BookingForm from './BookingForm'; // Import the booking form component

function SpecialOffers() {
  const [showBookingForm, setShowBookingForm] = useState(false); // State to show/hide the booking form

  const handleBookingClick = () => {
    setShowBookingForm(true); // Show the booking form
  };

  const closeBookingForm = () => {
    setShowBookingForm(false); // Hide the booking form
  };

  return (
    <section className="py-16 bg-secondary text-primary font-Montserrat">
     

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold font-poppins">Special Offers & Discounts</h2>
          <p className="text-lg mt-2 font-poppins">
            Unlock amazing travel discounts and save on your next adventure!
          </p>
        </motion.div>

        {/* Special Offers Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Seasonal Offer */}
          <motion.div
            className="bg-white md:px-6 px-2 py-8 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaCalendarAlt className="text-tertiary text-6xl mb-4" />
            <h3 className="text-2xl font-bold mb-2 font-poppins">Seasonal Offer</h3>
            <p className="text-primary mb-4">
              Book by <strong>October</strong> and get <strong>20% off</strong> your trip!
            </p>
            <motion.button
              className="py-2 px-4 text-secondary bg-accent font-bold rounded-lg shadow transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={handleBookingClick} // Trigger the booking form
            >
              Book Now
            </motion.button>
          </motion.div>

          {/* Group Discount */}
          <motion.div
            className="bg-white md:px-6 px-2 py-8   rounded-lg shadow-lg flex flex-col items-center text-center transition-transform"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaUsers className="text-tertiary text-6xl mb-4" />
            <h3 className="text-2xl font-bold mb-2 font-poppins">Group Discount</h3>
            <p className="text-primary mb-4">
              Save <strong>15%</strong> when you book for groups of 5 or more.
            </p>
            <motion.button
              className="py-2 px-4 text-secondary bg-accent font-bold rounded-lg shadow transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={handleBookingClick} // Trigger the booking form
            >
              Book for Group
            </motion.button>
          </motion.div>

          {/* Early Bird Special */}
          <motion.div
            className="bg-white md:px-6 px-2 py-8   rounded-lg shadow-lg flex flex-col items-center text-center transition-transform"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaClock className="text-tertiary text-6xl mb-4" />
            <h3 className="text-2xl font-bold mb-2 font-poppins">Early Bird Special</h3>
            <p className="text-primary mb-4">
              Book at least <strong>3 months in advance</strong> and get an additional <strong>10% off</strong>.
            </p>
            <motion.button
              className="py-2 px-4 text-secondary bg-accent font-bold rounded-lg shadow transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={handleBookingClick} // Trigger the booking form
            >
              Claim Offer
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Show the booking form as a popup when state is true */}
        {showBookingForm && <BookingForm closeForm={closeBookingForm} />}
      </div>
    </section>
  );
}

export default SpecialOffers;
