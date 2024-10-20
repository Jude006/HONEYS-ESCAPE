import React from "react";
import bg from "../assets/images/aboutimg.webp";


const AboutSection1 = () => {
  return (
    <>
  
      {/* new div  */}
      <div className="bg-[#f0f0f0] py-14  ">
        <h1 className="text-4xl font-bold text-primary mb-6 font-poppins text-center">
          Why Choose <span className="text-accent">Honey Guard</span>?
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:px-10 lg:px-20 px-8">
          {/* Image Section */}
          <div className="w-full">
            <img
              src={bg}
              alt="About Honey Guard"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Text Section */}
          <div className=" flex flex-col justify-center py-6 px-4  text-start">
            <p className="text-lg text-gray-700 font-Montserrat leading-7 mb-4">
              At <span className="text-accent font-bold">Honey Guard</span>, we
              believe that travel is about more than just reaching a
              destination. It's about discovering new perspectives, creating
              unforgettable memories, and embracing adventures that inspire and
              rejuvenate.
            </p>
            <p className="text-lg text-gray-700 font-Montserrat leading-7 mb-4">
              Our mission is simple: to make your journey smooth, personalized,
              and filled with enriching experiences. With access to exclusive
              deals, expert guides, and a seamless booking experience, we ensure
              every step of your travel is as enjoyable as the destination
              itself.
            </p>
            <p className="text-lg text-gray-700 font-Montserrat leading-7 mb-4">
              Whether you're dreaming of sandy beaches, historic landmarks, or
              exciting urban escapes,{" "}
              <span className="text-accent font-bold">Honey Guard</span> is your
              trusted companion. We handle all the details, so you can focus on
              making memories that last a lifetime.
            </p>
            <p className="text-lg text-gray-700 font-Montserrat leading-7">
              Join thousands of happy travelers who have trusted us to curate
              their perfect getaway. Your adventure begins with{" "}
              <span className="text-accent font-bold">Honey Guard</span>.
            </p>
          </div>
        </div>
      </div>
      {/* new div  */}
    </>
  );
};

export default AboutSection1;
