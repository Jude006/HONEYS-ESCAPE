import React from "react";

import why from "../assets/images/why.jpg";
import {
  FaDollarSign,
  FaGlobe,
  FaHeadset,
  FaPlaneDeparture,
  FaUser,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

function HomeSection3() {
  return (
    <div className="py-20 bg-[#f0f0f0] font-mont">
    

      <div
        style={{ backgroundImage: `url(${why})` }}
        className="bg-cover bg-center bg-fixed h-fit py-3 md:py-8 object-cover w-full"
      >
        <div className="md:px-10 lg:px-24 px-8 py-10">
          <div>
            <h1 className="text-white text-center font-poppins md:text-3xl text-xl">
              Why Choose Honey Guide
            </h1>
          </div>
          <div className="grid md:grid-cols-2 font-mont lg:grid-cols-3 grid-cols-1 gap-8 mt-6">
            <div className="bg-secondary py-6 px-4 rounded-sm flex items-start gap-4 transform transition-transform duration-500 hover:scale-105 animate-fade-in">
              <div className="p-4 y bg-primary rounded-full text-secondary">
                <p>
                  <FaGlobe />
                </p>{" "}
                {/* Icon for global reach */}
              </div>
              <div className="p-2">
                <h2 className="md:text-xl font-semibold font-poppins">Global Reach</h2>
                <p className="text-[14px] md:text-[16px] font-Montserrat">
                  Access to the best travel deals worldwide, with just a click
                  of a button.
                </p>
              </div>
            </div>
            <div className="bg-secondary py-6 px-4 rounded-sm hidden md:flex items-start gap-4 transform transition-transform duration-500 hover:scale-105 animate-fade-in">
              <div className="p-4 y bg-primary rounded-full text-secondary">
                <p>
                  <FaDollarSign />
                </p>
              </div>
              <div className="p-2">
                <h2 className="md:text-xl font-semibold font-poppins">Affordable Pricing</h2>
                <p className="text-[14px] md:text-[16px] font-Montserrat">
                  We offer competitive prices on all major travel services.
                </p>
              </div>
            </div>
            <div className="bg-secondary py-6 px-4 rounded-sm hidden md:flex  items-start gap-4 transform transition-transform duration-500 hover:scale-105 animate-fade-in">
              <div className="p-4 y bg-primary rounded-full text-secondary">
                <p>
                  <FaHeadset />
                </p>
              </div>
              <div className="p-2">
                <h2 className="md:text-xl font-semibold font-poppins">24/7 Support</h2>
                <p className="text-[14px] md:text-[16px] font-Montserrat">
                  Our dedicated team is always here to assist you anytime,
                  anywhere.
                </p>
              </div>
            </div>
            <div className="bg-secondary py-6 px-4 rounded-sm hidden md:flex  items-start gap-4 transform transition-transform duration-500 hover:scale-105 animate-fade-in">
              <div className="p-4 y bg-primary rounded-full text-secondary">
                <p>
                  <FaShield />
                </p>{" "}
                {/* Icon for security */}
              </div>
              <div className="p-2">
                <h2 className="md:text-xl font-semibold font-poppins">Secure Payment</h2>
                <p className="text-[14px] md:text-[16px] font-Montserrat">
                  Your data is protected with industry-leading encryption
                  technology.
                </p>
              </div>
            </div>
            <div className="bg-secondary py-6 px-4 rounded-sm flex items-start gap-4 transform transition-transform duration-500 hover:scale-105 animate-fade-in">
              <div className="p-4 y bg-primary rounded-full text-secondary">
                <p>
                  <FaPlaneDeparture />
                </p>{" "}
                {/* Icon for convenience */}
              </div>
              <div className="p-2">
                <h2 className="md:text-xl font-semibold font-poppins">Convenient Booking</h2>
                <p className="text-[14px] md:text-[16px] font-Montserrat">
                  Book your travel in a few easy steps with no hidden fees.
                </p> 
              </div>
            </div>
            <div className="bg-secondary py-6 px-4 rounded-sm flex items-start gap-4 transform transition-transform duration-500 hover:scale-105 animate-fade-in">
              <div className="p-4 y bg-primary rounded-full text-secondary">
                <p>
                  <FaUser />
                </p>{" "}
                {/* Icon for community */}
              </div>
              <div className="p-2">
                <h2 className="md:text-xl font-semibold font-poppins">Trusted by Thousands</h2>
                <p className="text-[14px] md:text-[16px] font-Montserrat">
                  Join a global community of travelers who rely on Smart Travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection3;
