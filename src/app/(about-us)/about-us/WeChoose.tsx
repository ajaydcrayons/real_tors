

import React from 'react';
import Image from 'next/image';

interface Stat {
    value: string;
    label: string;
  }
  
  interface Section {
    title: string;
    description: string;
  }
  
  interface WeChooseDataProps {
    title: string;
    heading: string;
    imageSrc: string;
    imageAlt: string;
    company: {
      title: string;
      description: string;
    };
    stats: Stat[];
    sections: Section[];
  }
  
  interface weChooseDataMainProps {
    weChooseData:WeChooseDataProps
  }




const   WeChoose: React.FC<weChooseDataMainProps>=({weChooseData})=> {
  return (
    <section className="w-full mx-auto bg-white">
      <div className="container mx-auto max-w-[85rem] justify-center items-center">
        <div className="text-center space-y-4">
          <h3 className="text-[30px]  uppercase text-black font-bold pt-10">
            {weChooseData?.title}
          </h3>
          <h1 className="heading text-black font-semibold">{weChooseData?.heading}</h1>
        </div>
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-20 my-4 lg:my-10 max-w-[75rem] mx-auto w-full justify-center items-center p-6">
          <div className="lg:w-[55%] w-full">
            <Image
              src={weChooseData?.imageSrc}
              width={1000}
              height={1000}
              className="rounded-lg"
              alt={weChooseData?.imageAlt}
            />
          </div>
          <div className="flex flex-col lg:flex-col lg:w-[45%] w-full">
            <div className="w-full space-y-6 mt-10 lg:mt-0">
              <h3 className='text-black font-semibold'>{weChooseData?.company?.title}</h3>
              <p className="text-gray-500">{weChooseData?.company?.description}</p>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-3 gap-6 text-left mt-10">
                {weChooseData?.stats?.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <p className="text-4xl text-black">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-[70rem] justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-0 sm:px-4 md:px-4 px-4">
          {weChooseData?.sections?.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-black font-semibold">{section.title}</h3>
              <p className="text-gray-500">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default  WeChoose