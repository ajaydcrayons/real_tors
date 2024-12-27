"use client";
import React, { useState, useRef, useEffect } from "react";

interface Slide {
  id: number;
  image: string;
  heading: string;
  text: string;
}

interface Hero1Props {
  data: Slide[];
}

const CouroselField: React.FC<Hero1Props> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    };

    autoSlideRef.current = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [data.length]);

  return (
    <section className="relative overflow-hidden">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {data.map((slide) => (
          <div
            key={slide.id}
            className="relative flex-shrink-0 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>  */}
            {/* Overlay */}
            <div className="flex items-center justify-center h-[80vh] lg:h-[80vh] px-4 md:px-8 lg:px-12 relative z-20 py-36">
              <div className="text-center text-white max-w-md md:max-w-xl lg:max-w-5xl mx-auto">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 opacity-0">
                  {slide.heading}
                </h1>
                <p className="text-sm md:text-base lg:text-lg mb-6 opacity-0">
                  {slide.text}
                </p>
              
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="my-10  mx-auto max-w-[60rem] flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-4 space-y-10 lg:space-y-0">
        <div>
          <a href="#contact-section" className="hero-btn font-bold bg-themebase hover:bg-themehover duration-300   py-3 px-6 text-white">
          REQUEST A CALL
        </a>
        </div>
        <div>
          <a href="/become-a-dealer" className="hero-btn font-bold bg-themebase hover:bg-themehover duration-300   py-3 px-6 text-white">
        NEW DEALERSHIP ENQUIRY
        </a>
        </div>
        <div>
          <a href="#contact" className="hero-btn font-bold bg-themebase hover:bg-themehover duration-300   py-3 px-6 text-white">
        FIND A DEALER
        </a>
        </div>
        <div>
          <a href="tel:+91-9266777488" className="hero-btn font-bold border border-themebase hover:bg-themehover hover:text-white  duration-300   py-3 px-6 text-themebase">
        TOLL FREE: +91-9266777488        </a>
        </div>
        
        

      </div> */}
    </section>
  );
};

export default CouroselField;
