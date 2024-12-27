

import React from "react";
import Image from "next/image";

interface InspiredByTomorrowData {
  sectionTitle: string;
  subTitle: string;
  description: string[];
  highlights: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface inspiredProps {
  inspiredData:InspiredByTomorrowData
}


export default function InspiredByTommarow({inspiredData}:inspiredProps) {
  const { sectionTitle, subTitle, description, highlights, image } = inspiredData;

  return (
    <section className="w-full mx-auto bg-white py-5 lg:px-5">
      <div className="container mx-auto max-w-[85rem] justify-center items-center">
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-10 mx-auto w-full justify-center items-center">
          <div className="lg:w-[45%] w-full mt-10 lg:mt-0">
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          </div>
          <div className="lg:w-[55%] w-full mt-10 lg:mt-0 pr-10 lg:pr-20 p-6 lg:p-0">
            <h3 className="text-2xl lg:text-4xl uppercase mb-2 text-black">
              {sectionTitle}
            </h3>
            <h5 className=" text-lg lg:text-xl uppercase mt-5 text-black">
              {subTitle}
            </h5>
            {description.map((desc, index) => (
              <p key={index} className="my-6 text-gray-500">
                {desc}
              </p>
            ))}
            <div className="grid lg:grid-cols-2 gap-6 mb-10">
              {highlights.map((highlight, index) => (
                <div key={index}>
                  <p className="text-gray-700 font-semibold lg:w-[80%]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

