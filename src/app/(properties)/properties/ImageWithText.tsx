

"use client";
import React, { useState } from "react";
import Image from "next/image";

interface TabData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}



interface TabDataProps {
    tabs : TabData[] 
}


function ImageWithText({tabs}:TabDataProps) {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-5 mx-auto bg-white">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl">
                Tailored Real Estate Solutions for Your Unique Needs
              </h2>
              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`${
                      activeTab === tab.id
                        ? "hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl active"
                        : "hover:bg-gray-200"
                    } text-start focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl`}
                    aria-selected={activeTab === tab.id}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <span className="flex gap-x-6">
      <span className="grow">
        <span
          className={`block text-lg font-semibold ${
            activeTab === tab.id ? "text-blue-600" : "text-gray-800"
          }`}
        >
          {tab.title}
        </span>
        <span className="block mt-1 text-gray-800">
          {tab.description}
        </span>
      </span>
    </span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-6 lg:col-start-1 lg:order-1">
              {tabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <Image
                      key={tab.id}
                      src={tab.imageUrl}
                      alt={tab.altText}
                      className="rounded-xl w-full"
                      width={1000}
                      height={100}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageWithText;



                  {/* <svg width="64px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M622.4 682.453333l60.330667-60.309333 256.405333 256.405333-60.330667 60.309334z" fill="#616161"></path><path d="M426.666667 426.666667m-341.333334 0a341.333333 341.333333 0 1 0 682.666667 0 341.333333 341.333333 0 1 0-682.666667 0Z" fill="#616161"></path><path d="M692.266667 753.92l60.309333-60.330667 185.514667 185.514667-60.330667 60.330667z" fill="#37474F"></path><path d="M426.666667 426.666667m-277.333334 0a277.333333 277.333333 0 1 0 554.666667 0 277.333333 277.333333 0 1 0-554.666667 0Z" fill="#64B5F6"></path><path d="M573.866667 302.933333c-36.266667-42.666667-89.6-68.266667-147.2-68.266666s-110.933333 25.6-147.2 68.266666c-8.533333 8.533333-6.4 23.466667 2.133333 29.866667 8.533333 8.533333 23.466667 6.4 29.866667-2.133333C341.333333 296.533333 381.866667 277.333333 426.666667 277.333333s85.333333 19.2 115.2 53.333334c4.266667 4.266667 10.666667 8.533333 17.066666 8.533333 4.266667 0 10.666667-2.133333 12.8-4.266667 8.533333-8.533333 8.533333-23.466667 2.133334-32z" fill="#BBDEFB"></path></g></svg> */}
                  {/* <svg width="64px" height="64px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M704 896H106.666667V85.333333h405.333333l192 192z" fill="#90CAF9"></path><path d="M672 298.666667H490.666667V117.333333z" fill="#E1F5FE"></path><path d="M736.106667 801.706667l42.24-42.24 180.970666 181.013333-42.24 42.24z" fill="#616161"></path><path d="M597.333333 618.666667m-234.666666 0a234.666667 234.666667 0 1 0 469.333333 0 234.666667 234.666667 0 1 0-469.333333 0Z" fill="#616161"></path><path d="M597.333333 618.666667m-192 0a192 192 0 1 0 384 0 192 192 0 1 0-384 0Z" fill="#90CAF9"></path><path d="M786.112 850.773333l42.24-42.24 131.2 131.221334-42.24 42.24z" fill="#37474F"></path><path d="M640 661.333333h-206.933333c8.533333 34.133333 27.733333 64 53.333333 85.333334H640v-85.333334zM433.066667 576H640v-85.333333h-155.733333c-25.6 21.333333-42.666667 51.2-51.2 85.333333zM428.8 426.666667H234.666667v42.666666h155.733333c10.666667-14.933333 23.466667-29.866667 38.4-42.666666zM364.8 512H234.666667v42.666667h115.2c4.266667-14.933333 8.533333-29.866667 14.933333-42.666667zM341.333333 618.666667c0-6.4 0-14.933333 2.133334-21.333334H234.666667v42.666667h108.8c-2.133333-6.4-2.133333-14.933333-2.133334-21.333333zM349.866667 682.666667H234.666667v42.666666h130.133333c-6.4-12.8-10.666667-27.733333-14.933333-42.666666z" fill="#1976D2"></path></g></svg> */}
