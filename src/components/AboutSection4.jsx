import React, { useRef, useState, useEffect } from "react";
import bg from "../assets/images/ab.jpg";
import { FaPlane, FaSwimmer, FaTag } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import CountUp from "react-countup";


function AboutSection4() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
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


      {/* Main Section */}
      <div className="bg-[#f0f0f0] py-10 border-t-2 border-accent">
        
        {/* Heading and Subheading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary font-poppins">Our Travel Services Record</h1>
          <p className="text-lg text-gray-600 mt-4 font-Montserrat">
            Offering unparalleled services in flights, tours, cruises, and hotels to make your journey unforgettable.
          </p>
        </div>

        {/* Background Image and Stats */}
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="w-full object-cover font-poppins bg-fixed bg-cover md:py-0 py-10 md:h-[70vh]"
        >
          <div
            ref={sectionRef}
            className="grid md:grid-cols-2 text-secondary lg:grid-cols-4 grid-cols-2 gap-6 justify-center items-center h-[100%]"
          >
            {/* Flight Booking */}
            <div className="py-3 px-4 gap-3 flex flex-col items-center">
              <div className="text-5xl bg-white w-28 h-28 rounded-full bg-opacity-30 flex items-center justify-center p-3">
                <div className="w-full h-full rounded-full bg-white bg-opacity-30 flex justify-center items-center">
                  <FaPlane />
                </div>
              </div>
              <h5 className="md:text-3xl text-2xl font-bold">
                {isVisible ? <CountUp end={600} duration={2} /> : "600"}
              </h5>
              <p className="md:text-xl text-lg">Flight Booking</p>
            </div>

            {/* Amazing Tours */}
            <div className="py-3 px-4 flex flex-col gap-3 items-center">
              <div className="text-5xl bg-white w-28 h-28 rounded-full bg-opacity-30 flex items-center justify-center p-3">
                <div className="w-full h-full rounded-full bg-white bg-opacity-30 flex justify-center items-center">
                  <FaHouse />
                </div>
              </div>
              <h3 className="md:text-3xl text-2xl font-bold">
                {isVisible ? <CountUp end={250} duration={2} /> : "250"}
              </h3>
              <p className="md:text-xl text-lg">Amazing Tours</p>
            </div>

            {/* Cruise Booking */}
            <div className="py-3 px-4 flex flex-col gap-3 items-center">
              <div className="text-5xl bg-white w-28 h-28 rounded-full bg-opacity-30 flex items-center justify-center p-3">
                <div className="w-full h-full rounded-full bg-white bg-opacity-30 flex justify-center items-center">
                  <FaSwimmer />
                </div>
              </div>
              <h4 className="md:text-3xl text-2xl font-bold">
                {isVisible ? <CountUp end={100} duration={2} /> : "100"}
              </h4>
              <p className="md:text-xl text-lg">Cruise Booking</p>
            </div>

            {/* Hotel Booking */}
            <div className="py-3 px-4 flex flex-col gap-3 items-center">
              <div className="text-5xl bg-white w-28 h-28 rounded-full bg-opacity-30 flex items-center justify-center p-3">
                <div className="w-full h-full rounded-full bg-white bg-opacity-30 flex justify-center items-center">
                  <FaTag />
                </div>
              </div>
              <h6 className="md:text-3xl text-2xl font-bold">
                {isVisible ? <CountUp end={100} duration={2} /> : "100"}
              </h6>
              <p className="md:text-xl text-lg">Hotel Booking</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection4;
