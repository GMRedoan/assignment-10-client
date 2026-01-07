import React from "react";
import { Link } from "react-router";

const WhyRent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 px-6 md:px-19 py-6 md:pt-26 bg-base-200">
      <div data-aos="fade-right" className="md:w-1/2">
        <h2 className="text-3xl font-semibold mb-8">Why <span className="text-primary">Rent</span> With Us?</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="text-accent mr-4">01</span>
            <span className="border-b border-gray-300 pb-1 text-xl text-accent">Wide Selection of Luxury Cars with comfortable rides</span>
          </li>
          <li className="flex items-center">
            <span className="text-accent mr-4">02</span>
            <span className="border-b border-gray-300 pb-1 text-xl text-accent">Transparent Pricing & very easy booking system</span>
          </li>
          <li className="flex items-center">
            <span className="text-accent mr-4">03</span>
            <span className="border-b border-gray-300 pb-1 text-xl text-accent">24/7 Support given by our special team members</span>
          </li>
          <li className="flex items-center">
            <span className="text-accent mr-4">04</span>
            <span className="border-b border-gray-300 pb-1 text-xl text-accent">Fastest booking and cancellation system</span>
          </li>
        </ul>
        <p className="text-accent mt-6">
          We go beyond just renting cars — we deliver a premium driving experience, built around trust, comfort, and style.
        </p>
         <Link to='/aboutUs' className="btn btn-primary text-white mt-10 hover:bg-secondary">Learn More About Us
        </Link>
       </div>

      <div data-aos="fade-left" className="md:w-1/2">
        <img
          src="https://i.ibb.co.com/npjpyQm/Whats-App-Image-2022-02-10-at-6-34-43-PM.jpg"
          alt="Luxury Car"
          className="w-full rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhyRent;
