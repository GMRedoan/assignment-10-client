import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slides = () => {
    return (
        <div className="bg-base-200 pt-10 px-6">
            <div className="pb-20">
                <h1 className="text-center font-extrabold text-4xl md:text-6xl tracking-tight leading-snug">Your Journey, Your <span className="text-primary
                ">Wheels</span>
                </h1>

                <p className="text-center mt-6 text-accent max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                    Rent anytime, drive anywhere – flexible rides made simple for every adventure.
                </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl mx-6">
                <div className="carousel w-full">

                    <div id="slide1" className="carousel-item relative w-full h-[500px]">
                        <img
                            src="https://i.ibb.co.com/4RYnNKzJ/luxury-cars.jpg"
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-xl">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                                Premium Cars for Your Next Adventure
                            </h1>
                            <p className="text-lg md:text-xl opacity-90 mb-6">
                                Choose from our wide selection of well-maintained vehicles and enjoy a smooth, reliable ride every time.
                            </p>
                        </div>
                        <div className="absolute right-10 top-1/2">
                            <IoIosArrowForward className="text-white" size={50} />
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full h-[500px]">
                        <img
                            src="https://i.ibb.co.com/mVsMBRbP/2025-nissan-ariya-in-motion.jpg"
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-xl">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                                Easy Booking & Affordable Prices
                            </h1>
                            <p className="text-lg md:text-xl opacity-90 mb-6">
                                Book your car anytime with our simple online system. Transparent pricing—no hidden fees, ever.
                            </p>
                        </div>
                        <div className="absolute right-10 top-1/2">
                            <IoIosArrowForward className="text-white" size={50} />
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full h-[500px]">
                        <img
                            src="https://i.ibb.co.com/gbwVmq3q/SUV-vs-Sedan-Which-Rental-Car-is-Right-for-Your-Next-Adventure.jpg"
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-xl">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                                Safe, Comfortable & Well‑Maintained Cars
                            </h1>
                            <p className="text-lg md:text-xl opacity-90 mb-6">
                                Your safety matters. Every vehicle is fully inspected and sanitized before each rental.
                            </p>
                        </div>
                        <div className="absolute right-10 top-1/2">
                            <IoIosArrowBack className="text-white" size={50} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slides;
