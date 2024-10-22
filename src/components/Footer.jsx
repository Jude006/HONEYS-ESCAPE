import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import destination1 from "../assets/images/test1.webp";
import destination2 from "../assets/images/test1.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary via-accent to-primary text-white py-12 font-Montserrat">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Intro Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 font-poppins">
              About Honey Guide
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Experience the ultimate getaway with{" "}
              <span className="font-semibold">Honey Guide</span>. Discover
              serene locations, exceptional service, and unforgettable moments
              tailored just for you.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 font-poppins">
              Quick Links
            </h2>
            <ul className="space-y-3">
              <Link to="/">
                {" "}
                <li className="text-secondary hover:text-accent duration-300 ease-linear">Home</li>
              </Link>
              <Link to="/about">
                {" "}
                <li className="text-secondary hover:text-accent duration-300 ease-linear">About</li>
              </Link>
              <Link to="/tripCatalog">
                {" "}
                <li className="text-secondary hover:text-accent duration-300 ease-linear">
                  Trip Catalog
                </li>
              </Link>
              <Link to="/tourReview">
                {" "}
                <li className="text-secondary hover:text-accent duration-300 ease-linear">
                  Tour Review
                </li>
              </Link>
              <Link to="/contact">
                {" "}
                <li className="text-secondary hover:text-accent duration-300 ease-linear">
                  Contact us
                </li>
              </Link>
            </ul>
          </div>

          {/* Travel Destinations Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 font-poppins ">
              Featured Destinations
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img
                  src={destination1}
                  alt="Destination 1"
                  className="w-full h-24 object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-secondary font-semibold text-center">
                    Bali, Indonesia
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={destination2}
                  alt="Destination 2"
                  className="w-full h-24 object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-secondary font-semibold text-center">
                    Santorini, Greece
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 font-poppins">Contact Us</h2>
            <p className="text-gray-200 mb-3">
              Email:{" "}
              <a
                href="mailto:info@HoneyGuide.com"
                className="hover:text-yellow-300  duration-300"
              >
                info@HoneyGuide.com
              </a>
            </p>
            <p className="text-gray-200 mb-3">
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-yellow-300">
                +123 456 7890
              </a>
            </p>
            <p className="text-gray-200 mb-4">
              Address: 123 Honey Lane, Sweet City, SC 12345
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="hover:text-yellow-300 duration-300"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="hover:text-yellow-300 duration-300"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-yellow-300 duration-300"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="hover:text-yellow-300 duration-300"
              >
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10 border-t border-secondary pt-4">
          <p className="text-gray-200">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">Honey Guide</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
