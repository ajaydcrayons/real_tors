
import React from "react";

type props = {
    icon:string,
    title:string,
    description:string
}

interface propertyProps {
  heading:string,
  subHeading:string,
  bgImage:string
}

interface PropertyDetailsProps {
  propertyData:propertyProps
}
const PropertiesDetail : React.FC<PropertyDetailsProps> = ({propertyData}) => {
  return (
    <div
      className="property-img bg-cover bg-center min-h-screen flex flex-col items-center justify-center py-20 relative"
      style={{
        backgroundImage: `${propertyData?.bgImage}`,
        backgroundColor: "#F5EDE8",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <h1 className="service-text text-3xl sm:text-4xl md:text-5xl font-bold text-white z-10 mb-10 text-center">
        {propertyData?.heading} <span className="block">{propertyData?.subHeading}</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 max-w-5xl z-10">
        <ServiceCard
          icon="🏠"
          title="Sell Your Home"
          description="We do a free evaluation to be sure you want to start selling."
        />
        <ServiceCard
          icon="🤝"
          title="Buy A Home"
          description="We do a free evaluation to be sure you want to start Buying."
        />
        <ServiceCard
          icon="🏢"
          title="Rent A Home"
          description="Discover Your Ideal Rental Home with Convenient, Comfortable space."
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }:props) => {
  return (
    <div className="z-10 service-card bg-white bg-opacity-80 rounded-lg shadow-md p-6 sm:p-8 max-w-xs w-full">
      <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 text-4xl sm:text-5xl text-yellow-600">
        {icon}
      </div>
      <h2 className="z-10 text-xl sm:text-2xl font-bold text-center mb-2 text-black">{title}</h2>
      <p className="z-10 text-gray-500 text-center mb-4">{description}</p>
      <div className="z-10 text-center">
        <a href="#" className="text-blue-600 text-sm sm:text-md hover:underline">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default PropertiesDetail

  