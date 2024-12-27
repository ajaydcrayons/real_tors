

"use client";
import Image from "next/image";

interface Button {
  label: string;
  link?: string;
  scrollTargetId?: string;
}

interface ImageData {
  src: string;
  alt: string;
}

interface PropertySectionData {
  heading: string;
  subheading: string;
  description: string;
  buttons: {
    contact: Button;
    search: Button;
  };
  images: ImageData[];
}
interface propertySectionDetailsprops {
  propertydetails: PropertySectionData
}

export default function PropertySection({propertydetails}:propertySectionDetailsprops) {
  const propertySection = propertydetails;

  return (
    <div className="bg-gray-900 text-white py-16 px-8 md:flex md:justify-between md:items-center mb-24">
      <div className="md:w-1/2 md:pr-14 md:pl-12">
        <h1 className="text-4xl font-bold mb-4">{propertySection?.heading}</h1>
        <h2 className="text-2xl font-serif text-yellow-600 italic mb-4">
          {propertySection?.subheading}
        </h2>
        <p className="mb-6">{propertySection?.description}</p>
        <div className="flex items-center">
          <a href={propertySection?.buttons?.contact.link}>
            <button className="bg-transparent border-2 border-white px-6 py-2 mr-4">
              {propertySection?.buttons?.contact?.label}
            </button>
          </a>
          <span className="mx-2">or</span>
          <button
            className="bg-transparent border-2 border-white px-6 py-2 ml-4"
            onClick={() =>
              document
                .getElementById(propertySection?.buttons?.search?.scrollTargetId!)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {propertySection?.buttons?.search?.label}
          </button>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 grid grid-cols-2 gap-4">
        {propertySection.images.map((image:any, index:number) => (
          <div key={index}>
            <Image
              src={image?.src}
              alt={image?.alt}
              className="rounded-lg w-full"
              width={400}
              height={100}
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
