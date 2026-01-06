import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const Slides = () => {
  return (
    <div className="bg-base-200 pt-10 px-6">
      {/* Heading */}
      <div data-aos="zoom-in" className="md:py-20 text-center">
        <h1 className="font-extrabold text-4xl md:text-6xl">
          Your Journey, Your <span className="text-primary">Wheels</span>
        </h1>
        <p data-aos="zoom-in" className="mt-6 text-accent max-w-3xl mx-auto">
          Rent anytime, drive anywhere – flexible rides made simple.
        </p>
      </div>

      {/* Swiper */}
      <div data-aos="zoom-in-down" className="rounded-2xl overflow-hidden shadow-xl md:mx-6">
        <Swiper
          modules={[Autoplay, EffectFade]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1200}
          effect="slide"  
          className="h-[500px]"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative h-full">
              <img
                src="https://i.ibb.co.com/4RYnNKzJ/luxury-cars.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Premium Cars for Your Next Adventure
                </h1>
                <p className="text-lg opacity-90">
                  Choose from our wide selection of vehicles.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative h-full">
              <img
                src="https://i.ibb.co.com/mVsMBRbP/2025-nissan-ariya-in-motion.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Easy Booking & Affordable Prices
                </h1>
                <p className="text-lg opacity-90">
                  Simple booking with transparent pricing.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative h-full">
              <img
                src="https://i.ibb.co.com/gbwVmq3q/SUV-vs-Sedan-Which-Rental-Car-is-Right-for-Your-Next-Adventure.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Safe, Comfortable & Reliable Cars
                </h1>
                <p className="text-lg opacity-90">
                  Inspected and sanitized vehicles.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slides;
