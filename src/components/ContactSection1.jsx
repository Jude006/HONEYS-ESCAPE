import React from "react";
import { FaMailBulk } from "react-icons/fa";
import { FaMapLocation, FaPhoneFlip } from "react-icons/fa6";
import Button from "./Button";

function ContactSection1() {
  return (
    <div>
      <section className="grid grid-cols-12  font-Montserrat">
        <div className="md:col-span-7 col-span-12">
          <div>
            <h1 className="text-tertiary font-normal md:text-3xl font-poppins">
              Travel Agency Inc.
            </h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 mt-6">
              <p className="md:text-5xl text-2xl text-tertiary">
                <FaPhoneFlip />
              </p>
              <p className="flex flex-col gap-2">
                <span className="md:text-lg ">Phone</span>
                <span className="text-accent md:text-xl text-lg">
                  08068078495
                </span>
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <p className="md:text-5xl text-2xl text-tertiary">
                <FaMailBulk />
              </p>
              <p className="flex flex-col gap-2">
                <span className="md:text-lg">E-mail Adress</span>
                <span className="text-accent md:text-xl text-lg">
                  HoneyGuide002@gmail.com
                </span>
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <p className="md:text-5xl text-2xl text-tertiary">
                <FaMapLocation />
              </p>
              <p className="flex flex-col gap-2">
                <span className="md:text-lg">Location</span>
                <span className="text-accent md:text-xl text-lg md:max-w-[70%]">
                  No1 Lake road Lagos Nigeria
                  Nigeria
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 col-span-12 md:mt-0 mt-14">
          <form
            action="https://formspree.io/f/mwpedvzl"
            method="POST"
            className="shadow"
          >
            <div className="py-5 bg-primary text-center">
              <h1 className="text-secondary md:text-3xl text-2xl">
                Get In Touch
              </h1>
            </div>
            <div className="bg-secondary bg-opacity-30 px-5 py-8 flex flex-col gap-4 ">
              <div className="flex flex-col gap-3">
                <label htmlFor="name">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="py-3 px-6 focus:outline-none bg-accent bg-opacity-20"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="email">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  className="py-3 px-6 focus:outline-none bg-accent bg-opacity-20"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="py-3 px-6 focus:outline-none bg-accent bg-opacity-20 "
                ></textarea>
              </div>
              <div>
                <Button title="Submit" bg="bg-primary" color="text-secondary" />
              </div>
            </div>
          </form>
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default ContactSection1;
