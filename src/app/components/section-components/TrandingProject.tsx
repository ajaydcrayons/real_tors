import React from "react";
import Image from "next/image";
import Link from "next/link";

interface childDataProps {
  title: string;
  min_price: string;
  max_price:string;
  flat:string;
  by:string ;
  address:string;
  area:string;
  img: string;
  subtitle:string;
  btnContent:string

}

interface TrandingProps {
  heading: string;
  subHeading: string;
  childData: childDataProps[];
}

interface TrandingdataProps {
  Trandingdata: TrandingProps;
}

const TrandingProject: React.FC<TrandingdataProps> = ({ Trandingdata }) => {
  return (
    <>
      <div
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto pt-20 bg-white"
        id="blogs-section"
      >
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-black pb-2">
            {Trandingdata?.heading}
          </h2>
          <p className="mt-1 text-gray-600 font font-semibold">
            {Trandingdata?.subHeading}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Trandingdata?.childData?.map((item: any, i: number) => (
            <a
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-11 " key={i}>
                <Image
                  className=" object-cover rounded-xl"
                  src={item?.img}
                  alt="Blog Image"
                  width={560}
                  height={315}
                />
              </div>
              <div className="my-6">
                <div className="flex justify-between p-2">
                  <div className="text-lg font-semibold text-gray-800">
                    {item?.title}
                  </div>
                  <div className="text-sm font-semibold text-slate-500 pt-[5px]">
                    {item?.subtitle} <span> </span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-600 px-3 pt-1">{item?.by}</p>
                <p className="text-sm  font-semibold text-slate-600 px-3 pt-1">{item?.address}</p>
                <div className="flex justify-between px-3 pt-1">
                <p className="text-sm font-semibold text-slate-600 ">{item?.flat}</p>
                <p className="text-sm font-semibold text-slate-600 ">{item?.area}</p>
                </div>
                {/* <p className="mt-5 text-gray-600">
      
                </p> */}
                  <div className="flex justify-between px-3 pt-5">
                <p className="text-sm font-semibold text-slate-800 pt-2 "> <b className="text-blue-950">₹</b> {item?.min_price} - <b className="text-blue-950">₹</b> {item?.max_price}</p>
                <button className="text-[13px] font-semibold text-white bg-pink-400 rounded-lg p-2 ">{item?.btnContent}</button>
                </div>
              </div>
            </a>
          ))}
          {/* <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <Image
                className=" object-cover rounded-xl"
                src={"/images/2.jpg"}
                alt="Blog Image"
                width={560}
                height={315}
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800">
              Precast Development vs Normal Development
              </h3>
              <p className="mt-5 text-gray-600">
              The construction industry has seen numerous innovations over the years, with precast concrete emerging as...
              </p>
            </div>
          </a>          
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <Image
                className=" object-cover rounded-xl"
                src={"/images/3.jpg"}
                alt="Blog Image"
                width={560}
                height={315}
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800">
              Sustainable Building with Precast Concrete
              </h3>
              <p className="mt-5 text-gray-600">
              As the construction industry faces growing environmental challenges, sustainability has become a critical focus. Builders...
              </p>
            </div>
          </a>           */}
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
};
export default TrandingProject;
