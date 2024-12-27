import React from "react";
import Image from "next/image";
// import "@fortawesome/fontawesome-free/css/all.min.css";

interface companyProfileProps {
  heading:string,
  subHeading:string,
  img:string,
  btnContent:string
}

interface companyDataProps {
  companyData : companyProfileProps
}

export default function CompanyProfile({companyData}:companyDataProps) {
  return (
    <section className="w-full mx-auto  bg-white py-14">
      <div className="container mx-auto max-w-[85rem] justify-center items-center">
        <div className="flex flex-col lg:flex-row      mx-auto w-full justify-center items-center ">
            <div className="lg:w-[40%] w-full mt-10 lg:mt-0 flex justify-center items-center">
            <Image
              src={companyData?.img}
              width={400}
              height={400}
              className=""
              alt="real state"
            />
          </div>
          <div className="text-center lg:text-left lg:w-[60%] w-full  mt-10 lg:mt-0  pr-10 lg:pr-20 p-6 lg:p-0">
            <h3 className=" text-2xl lg:text-3xl  mb-6 lg:mb-10 text-black">
            {companyData?.heading}
            </h3>
            <p className="  mb-10 lg:mb-20 justify-evenly text-black">
            {companyData?.subHeading}
            </p>
            <a
              href="#"
              className=" font-bold bg-pink-400 text-white border-2     py-2 px-6  "
            >
              {companyData?.btnContent}
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
