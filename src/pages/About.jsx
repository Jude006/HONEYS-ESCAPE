import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet and HelmetProvider
import AboutLandingPage from '../components/AboutLandingPage';
import AboutSection1 from '../components/AboutSection1';
import AboutSection4 from '../components/AboutSection4';
import Testimonies from '../components/Testimonies';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';

const About = () => {
  return (
    <HelmetProvider>
      {/* Helmet for SEO */}
      <Helmet>
        <title>About Us - Learn More About Our Company</title>
        <meta
          name="description"
          content="Discover more about our company's mission, vision, and the services we provide. Learn why our clients trust us and choose us for their needs."
        />
        <meta name="keywords" content="About Us, Company, Services, Mission, Vision" />
      </Helmet>

      {/* Page content */}
      <div>
        <AboutLandingPage />
        <AboutSection1 />
        <AboutSection4 />
        <WhyChooseUs />
        <Testimonies />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default About;
