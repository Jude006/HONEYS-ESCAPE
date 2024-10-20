import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Button from './Button';

const BookingForm = ({ closeForm }) => {
  return (
    <div className="h-screen w-full inset-0 bg-accent bg-opacity-25 backdrop-blur-sm fixed flex justify-center items-center">
      <div className="w-full">
        <form className="bg-secondary md:w-[40%] w-[95%] md:mt-10 mt-20 h-fit py-10 px-8 rounded mx-auto flex flex-col gap-3 shadow">
          <div className="flex justify-end text-xl text-accent">
            <button onClick={closeForm}> {/* Close the form when clicked */}
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="py-3 px-6 rounded bg-accent bg-opacity-45"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="py-3 px-6 rounded bg-accent bg-opacity-45"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="trip">Name of Trip</label>
            <textarea
              name="trip"
              id="trip"
              className="py-3 px-6 rounded bg-accent bg-opacity-45"
              placeholder="Enter the name of the trip"
            ></textarea>
          </div>
          <div>
            <Button title="Submit Info" bg="bg-accent" color="text-secondary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
