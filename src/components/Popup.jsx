import React from 'react';
import { FaStar, FaTimes } from 'react-icons/fa'; 
import Button from './Button';
import { Link } from 'react-router-dom';

const Popup = ({ closePopup, selectedProduct }) => {
  return (
    <div>
      <div className="max-w-[80%] bg-secondary h-[80vh] overflow-y-auto py-6 px-10 mx-auto mt-14 z-30 rounded shadow font-Montserrat">
        <div className="flex justify-end cursor-pointer" onClick={closePopup}>
          <h1 className="place-self-end md:text-3xl text-xl text-accent">
            <FaTimes />
          </h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col gap-4">
            <img
              src={selectedProduct.details.additionalImages[0]}
              alt="destination image1"
              className="max-h-[30vh] rounded object-cover"
            />
            <img
              src={selectedProduct.details.additionalImages[1]}
              alt="destination image2"
              className="max-h-[30vh] rounded object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 justify-start">
            <h2 className="md:text-4xl text-2xl font-bold">{selectedProduct.name}</h2>
            <h3>{selectedProduct.details.longDescription}</h3>
            <p>
              <strong>Attraction: </strong>{selectedProduct.details.topAttraction}
            </p>
            <div className="flex items-center gap-2">
              <strong>Rating:</strong>
              {[...Array(5)].map((_, starIndex) => (
                <FaStar
                  key={starIndex}
                  className={`text-yellow-500 ${starIndex < selectedProduct.starRating ? 'filled' : ''}`}
                />
              ))}
            </div>
            {/* the button div */}
          <Link to='/contact'>
            <div>
              <Button title="Book Trip" bg="bg-accent" color="text-secondary" />
            </div>
          </Link>
            {/* the button div */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
