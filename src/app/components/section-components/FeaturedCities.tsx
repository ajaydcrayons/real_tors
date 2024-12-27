import React from "react";
import Image from "next/image";
import Link from "next/link";

interface childDataProps {
  title:string,
  des:string,
  img:string,
  city:string
}

interface FeaturedProps {
  heading:string,
  subHeading:string,
  childData: childDataProps[]
}

interface FeatureddataProps {
   featuredData:FeaturedProps
}


const   FeaturedCities:React.FC<FeatureddataProps> = ({featuredData})=> {
  return (
    <>
      <div
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto pt-20 bg-white"
        id="blogs-section"
      >
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-black pb-2">
          {featuredData?.heading}
          </h2>
          <p className="mt-1 text-gray-600 font font-semibold">
         {featuredData?.subHeading}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
       {
        featuredData?.childData?.map((item,i)=>(
            <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11" key={i}>
              <Image
                className=" object-cover rounded-xl"
                src={item?.img}
                alt="Blog Image"
                width={560}
                height={315}
              />
            </div>
            <div className="my-6">
             <div className="flex justify-between ">
             <p className="text-xl font-semibold text-slate-800">
              {item?.title}
              </p>
              <p className="text-xl font-semibold text-slate-800">{item?.city}</p>
             </div>
              <p className="mt-5 text-gray-600">
   
               {item?.des}
              </p>
            </div>
          </a>
        ))
       }          
        
        </div>

        {/* <div className="mt-12 text-center">
          <Link
            className="py-3 px-4 inline-flex items-center text-black gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-themeorange shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Read more
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div> */}
      </div>
    </>
  );
}
export default FeaturedCities;
