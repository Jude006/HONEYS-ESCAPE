import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Icons for quotes and navigation arrows
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Swiper styles
import bg1 from "../assets/images/test1.webp";
import bg2 from "../assets/images/test2.webp";
import bg3 from "../assets/images/test3.webp";

const Testimonies = () => {
  const testimonies = [
    {
      image: bg1,
      text: "This service was amazing! I had the best experience with this company.",
      name: "John Doe",
      date: "Sept 12, 2023",
    },
    {
      image: bg2,
      text: "Highly recommend! They went above and beyond to meet my needs.",
      name: "Jane Smith",
      date: "Aug 05, 2023",
    },
    {
      image: bg3,
      text: "Fantastic service, friendly staff, and great results.",
      name: "Michael Brown",
      date: "July 29, 2023",
    },
    {
      image: bg1,
      text: "I will definitely use this service again! Wonderful experience.",
      name: "Alice Green",
      date: "Sept 30, 2023",
    },
    {
      image: bg2,
      text: "Quick, reliable, and very professional. Great customer support!",
      name: "David White",
      date: "Aug 15, 2023",
    },
    {
      image: bg3,
      text: "Exceptional quality and attention to detail. Very satisfied.",
      name: "Sophia Black",
      date: "July 22, 2023",
    },
  ];

  return (
    <section className="bg-secondary pt-10 pb-24 border-b-2 bord relative">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-primary font-poppins">
          Reviews from Our Top Travellers
        </h2>
        <p className="text-lg text-gray-600 mt-2 font-Montserrat">
          What are they saying about our services?
        </p>
      </div>

      {/* Swiper Component */}
      <div className="relative">
        {/* Custom Navigation Buttons */}
        <div className="absolute z-20 md:-left-10 -left-6 top-[50%] transform -translate-y-1/2">
          <FaArrowLeft
            size={30}
            className="cursor-pointer bg-accent text-primary p-2 rounded-full"
            id="prev-button"
          />
        </div>
        <div className="absolute z-20 md:-right-14 -right-7  top-[50%] transform -translate-y-1/2">
          <FaArrowRight
            size={30}
            className="cursor-pointer bg-accent text-primary p-2 rounded-full"
            id="next-button"
          />
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]} // Import modules
          spaceBetween={40} // Spacing between slides
          autoplay={{
            delay: 4500, // Autoplay delay
            disableOnInteraction: false, // Continue autoplay even after user interaction
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination", // Target custom pagination element
          }}
          loop={true} // Enable looping
          navigation={{
            prevEl: "#prev-button", // Target custom prev button
            nextEl: "#next-button", // Target custom next button
          }}
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 slide on small screens
            768: { slidesPerView: 2 }, // 2 slides on medium screens
            1024: { slidesPerView: 3 }, // 3 slides on large screens
          }}
          className="testimonies-swiper"
        >
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index} className="overflow-y-visible">
              <div className="relative rounded shadow-lg overflow-y-visible">
                {/* Adjusted Icon Position */}
                {/* <div className='absolute p-3 rounded-full left-[16%] text-white -top-6 bg-accent'>
                  <FaQuoteLeft size={24} />
                </div> */}

                {/* Testimonial Image */}
                <img
                  src={testimony.image}
                  alt={`Testimony by ${testimony.name}`}
                  className="max-h-[55vh] h-[100%] object-cover w-full rounded-t-"
                />

                {/* Semi-transparent Overlay */}
                <div className="absolute h-[20vh] font-Montserrat bg-primary bg-opacity-70 w-full bottom-0 flex flex-col justify-center px-4 py-6">
                  <div className="text-secondary">
                    <p className="italic font-Montserrat">"{testimony.text}"</p>
                    <h4 className="mt-2 font-bold font-poppins">
                      {testimony.name}
                    </h4>
                    <span className="block text-sm text-accent">
                      {testimony.date}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination mt-6 flex justify-center"></div>
      </div>
    </section>
  );
};

export default Testimonies;
