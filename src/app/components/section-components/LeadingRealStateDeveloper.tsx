"use client";
import React, { useEffect, useState } from "react";

interface logoProps {
  id:number,
  src:string,
  alt:string,
  url:string
}

interface logoDataProps {
  heading?:string,
  logos:logoProps[]
}

const LeadingRealStateDeveloper: React.FC<logoDataProps> = ({logos,heading}) => {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const singleCycleWidth = logos.length * 200; // Assuming each logo has a width of 200px
    const resetTranslateX = -singleCycleWidth;

    const interval = setInterval(() => {
      setTranslateX((prev) => (prev <= resetTranslateX ? 0 : prev - 1));
    }, 10); // Adjust speed by modifying the interval

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-full bg-white "> 
      <div className="mx-auto max-w-[85rem] px-4 lg:px-6">
        <div className="flex justify-center ">
          <h2 className="text-[32px] font-semibold text-black text-center ">{heading}</h2>
        </div>
        <div className="overflow-hidden  py-4">
          <div
            className="flex"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "none", // Disable transition for continuous smooth sliding
            }}
          >
            {/* Duplicate logos for seamless scrolling */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="min-w-[150px] flex justify-center items-center  m-3 "
              >
                <a href={logo.url}>
                  <img
                    src={logo.src}
                    alt={logo.alt} 
                    className="min-h-24  object-contain  border rounded-2xl p-4 bg-white "
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingRealStateDeveloper
