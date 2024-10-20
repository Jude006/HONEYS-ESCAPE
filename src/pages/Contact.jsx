import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet and HelmetProvider
import Navbar from '../components/Navbar';
import ContactLandingPage from '../components/ContactLandingPage';
import ContactSection1 from '../components/ContactSection1';
import Map from '../components/Map';
import Footer from '../components/Footer';
import ContactSection2 from '../components/ContactSection2';

function Contact() {
  return (
    <HelmetProvider>
      {/* Helmet component for setting the title and SEO meta tags */}
      <Helmet>
        <title>Contact Us - Get in Touch with Our Team</title>
        <meta
          name="description"
          content="Have any questions or inquiries? Contact us for more information, support, or to plan your next adventure. We're here to help!"
        />
        <meta
          name="keywords"
          content="Contact, Support, Inquiries, Customer Service, Help, Travel Support"
        />
      </Helmet>

      {/* Contact page content */}
      <ContactLandingPage />
      <ContactSection1 />
      <Map />
      <ContactSection2 />
      <Footer />
    </HelmetProvider>
  );  
}

export default Contact;
