import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet and HelmetProvider
import TourReviewLandingPage from '../components/TourReviewLandingPage';
import Footer from '../components/Footer';
import TourReviewSection1 from '../components/TourReviewSection1';
import Review1 from '../components/Review1';
import TourReviewSection2 from '../components/TourReviewSection2';

const TourReview = () => {
  return (
    <HelmetProvider>
      {/* Helmet component for setting the title and SEO meta tags */}
      <Helmet>
        <title>Tour Reviews - Discover the Best Travel Experiences</title>
        <meta
          name="description"
          content="Explore authentic reviews of the best tours and travel experiences around the world. Read feedback from real travelers and plan your next adventure."
        />
        <meta
          name="keywords"
          content="Tour Reviews, Travel Experiences, Travel Feedback, Best Tours, Vacation Reviews"
        />
      </Helmet>

      {/* Tour review sections */}
      <div>
        <TourReviewLandingPage />
        <TourReviewSection1 />
        <Review1 />
        <TourReviewSection2 />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default TourReview;
