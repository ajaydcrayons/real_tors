import React from "react";
import Image from "next/image";
// import "@fortawesome/fontawesome-free/css/all.min.css";

interface innovationPropsData {
  heading:string,
  subHeading:string,
  des1:string,
  des2:string,
  img:string
}

interface innovationProps {
  innovationData : innovationPropsData
}

export default function Innovation({innovationData}:innovationProps) {
  return (
    <section className="w-full mx-auto py-16  bg-white">
      <div className="container mx-auto max-w-[85rem] justify-center items-center">
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-10    mx-auto w-full justify-center items-center ">
          <div className="lg:w-[55%] w-full   lg:mt-0  pl-10 lg:pl-20 p-6 lg:p-0">
            <h3 className=" text-2xl lg:text-4xl uppercase mb-2 text-black font-bold">
            {innovationData?.heading}
            </h3>
            <h5 className="   text-lg lg:text-xl  mt-5 text-black text-semibold">
            {innovationData?.subHeading}
            </h5>
            <p className="  my-6 text-gray-500 ">
           {innovationData?.des1}
            </p>
            <p className="  my-6 text-gray-500 ">
           {innovationData?.des2}
            </p> 
            {/* <a
              href="/"
              className="hero-btn font-bold border border-themebase hover:bg-themehover hover:text-white  duration-300   py-3 px-6 text-themebase "
            >
              KNOW MORE
              <i className="fa fa-arrow-right ml-4"></i>
            </a> */}
          </div>
          <div className="lg:w-[45%] w-full mt-10 lg:mt-0">
            <Image
              src={innovationData?.img}
              width={1000}
              height={1000}
              className=""
              alt="Real State"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
