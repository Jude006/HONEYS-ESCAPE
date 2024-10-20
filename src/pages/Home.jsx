import React from "react";
import { HelmetProvider } from 'react-helmet-async';
import HomeLandingPage from "../components/HomeLandingPage";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import Section3 from "../components/Section3";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import Testimonies from "../components/Testimonies";
import FeedbackForm from "../components/FeedbackForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <title>Home | Honey Guide</title>
        <meta
          name="description"
          content="Discover unforgettable travel experiences with Honey Guide. Explore our adventure trips, exclusive offers, and customer stories."
        />
        <meta
          name="keywords"
          content="travel, adventure, tours, offers, Honey Guide, experiences"
        />
        <meta property="og:title" content="Home | Honey Guide" />
        <meta
          property="og:description"
          content="Discover unforgettable travel experiences with Honey Guide. Explore our adventure trips and customer stories."
        />
        <meta property="og:url" content="https://www.honeyguide.com/" />
      </HelmetProvider>

      <HomeLandingPage />
      <HomeSection1 />
      <HomeSection2 />
      <Section3 />
      <HomeSection3 />
      <HomeSection4 />

      <div className="relative my-10  border-b-2 border-transparent bg-gradient-to-r from-accent to-primary  ">
        <Testimonies />
      </div>
      <FeedbackForm />
      <Footer />
    </>
  );
};

export default Home;
