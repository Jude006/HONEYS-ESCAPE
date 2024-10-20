import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaSmile, FaHandHoldingUsd, FaShieldAlt } from "react-icons/fa";


const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
   


      {/* Why Choose Us Section */}
      <div className="bg-[#f0f0f0] py-20 font-Montserrat">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary font-poppins">Why Choose Honey Guard?</h2>
          <p className="text-lg text-gray-600 mt-4 font-poppins">
            Discover what sets us apart and why we're your perfect travel partner.
          </p>
        </div>

        {/* Cards Section */}
        <div
          ref={sectionRef}
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 px-8 md:px-24"
        >
          {/* Card 1 - Customer Satisfaction */}
          <div
            className={`bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="text-5xl text-primary flex justify-center mb-6">
              <FaSmile />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Customer Satisfaction</h3>
            <p className="text-gray-600 text-center">
              Our top priority is ensuring you have a memorable and enjoyable experience, with 24/7 support for all your travel needs.
            </p>
          </div>

          {/* Card 2 - Best Pricing */}
          <div
            className={`bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="text-5xl text-primary flex justify-center mb-6">
              <FaHandHoldingUsd />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Competitive Pricing</h3>
            <p className="text-gray-600 text-center">
              Enjoy the best prices in the market without compromising on quality. Our deals are tailored to fit your budget.
            </p>
          </div>

          {/* Card 3 - Safety and Security */}
          <div
            className={`bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="text-5xl text-primary flex justify-center mb-6">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Safety & Security</h3>
            <p className="text-gray-600 text-center">
              Your safety is our priority. We work with trusted partners to ensure secure and reliable services throughout your journey.
            </p>
          </div>

          {/* Card 4 - Reliable and Trustworthy */}
          <div
            className={`bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="text-5xl text-primary flex justify-center mb-6">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Reliability & Trust</h3>
            <p className="text-gray-600 text-center">
              With years of experience in the travel industry, we are committed to providing reliable services you can trust.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
