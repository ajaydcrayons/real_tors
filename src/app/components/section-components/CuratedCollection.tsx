

import React from 'react';
import Image from 'next/image';

interface ImageData {
  src: string;
  alt: string;
  title: string;
  description: string;
  gridSpan: {
    cols: number;
    rows: number;
  };
}

interface curatedImagesProps {
  heading?:string,
  subHeading?:string,
  curatedImages:ImageData[]
}

const  CuratedCollection : React.FC<curatedImagesProps>=({curatedImages,heading,subHeading}) =>{
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto pt-11 pb-24">
        <h1 className="text-4xl font-bold text-center py-3 text-black">{heading}</h1>
        <h2 className="text-lg font-semibold pb-5 text-center text-gray-600">
          {subHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {curatedImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden lg:p-0 md:p-2 sm:p-2 p-2 rounded-2xl   shadow-lg group md:col-span-${image.gridSpan.cols} md:row-span-${image.gridSpan.rows}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1080}
                height={720}
                className="w-full h-full object-cover rounded-lg "
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                  {image.description && <p className="text-white">{image.description}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CuratedCollection;

