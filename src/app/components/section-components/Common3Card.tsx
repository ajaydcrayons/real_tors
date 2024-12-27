
import React from "react";
import Image from "next/image";
import Link from "next/link";


interface childData {
    title : string,
    des : string,
    img : string,
    city:string

}

 interface Common3Card {
 heading:string,
 subHeading:string,
 childData: childData[]
}

interface Data {
    data:Common3Card
}



const   Common3Card : React.FC<Data> = ({data}) => {
  return (
    <>
      <div
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto pt-20 bg-white"
        id="blogs-section"
      >
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-black pb-2">
           {data?.heading}
          </h2>
          <p className="mt-1 text-gray-600 font font-semibold">
        {data?.subHeading}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {
        data?.childData?.map((item : any,i:number)=>(
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
              <div className="flex justify-between">
              <p className="text-xl font-semibold text-slate-800">
              {item?.title}
              </p>
              <p className="text-xl font-semibold text-slate-800">
                {item?.city}
              </p>
              </div>
              <p className="mt-5 text-gray-600">
   
               {item?.des}
              </p>
            </div>
          </a>
        ))
       }          
         
        </div>

      </div>
    </>
  );
}
export default Common3Card;
