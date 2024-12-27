
"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
 // Import JSON data

// Define TypeScript interfaces
interface Service {
  title: string;
  image: string;
}

interface Data {
  btnContent?:string,
  heading:string,
  sideBarHeading:string
  services: Service[];
  categories: string[];
}

interface PropertyServicesProps {
  propertyData : Data
}


const PropertyServices : React.FC<PropertyServicesProps> = ({propertyData}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { services, categories,heading,sideBarHeading,btnContent } = propertyData; // Destructure JSON data

  const handleCategoryClick = (
    category: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setSelectedCategory(category);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sectionRef.current &&
      !sectionRef.current.contains(event.target as Node)
    ) {
      setSelectedCategory(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="best-listing" className="py-12 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 listing text-black">
         {heading}
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/4 pr-4 order-2 md:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white shadow-lg rounded-lg overflow-hidden ${
                    selectedCategory === service.title
                      ? "border-2 border-primaryBlue"
                      : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3
                      className={`text-lg text-black font-semibold mb-2 ${
                        selectedCategory === service.title ? "font-bold" : ""
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/4 pl-4 mt-8 lg:mt-0 order-1 md:order-2">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-black">
               {sideBarHeading}
              </h3>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href="#"
                      className={`cursor-pointer hover:text-blue-400 text-black text-primaryBlue hover:underline ${
                        selectedCategory === category ? "font-bold" : ""
                      }`}
                      onClick={(event) => handleCategoryClick(category, event)}
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <button className="bg-pink-400 hover:bg-blue-500 text-white w-full px-4 py-2 rounded-[5px]">
               {btnContent}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyServices;

