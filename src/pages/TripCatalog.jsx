import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet and HelmetProvider
import TripCatalogLandingPage from '../components/TripCatalogLandingPage';
import SearchAndFilter from '../components/SearchAndFilter';
// import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import SpecialOffers from '../components/SpecialOffers';

const TripCatalog = () => {
  return (
    <HelmetProvider>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Explore Our Trip Catalog - Find Your Next Adventure</title>
        <meta
          name="description"
          content="Discover a wide range of exciting trips and travel packages. Use our search and filter options to find the perfect adventure for you."
        />
        <meta name="keywords" content="Trip Catalog, Travel, Adventure, Tours, Special Offers, Vacation Packages" />
      </Helmet>

      {/* Page content */}
      <div>
        <TripCatalogLandingPage />
        <SearchAndFilter />
        <SpecialOffers />
        {/* <BookingForm /> */}
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default TripCatalog;
