"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";


interface Header1Props {}

const NAV_ITEMS = [

  {
    href: "/properties",
    label: "Properties",
    isBold: true,
   
  },
  { href: "/about-us", label: "About Us", isBold: true },
  { href: "/blog", label: "Blog", isBold: true },
 
];

const Header: React.FC<Header1Props> = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // useEffect(() => {
  //   setIsClient(true);

  //   const handleScroll = () => {
  //     const header = document.getElementById("sticky-header");

  //     if (header) {
  //       if (window.scrollY > 50 && window.innerWidth >= 768) {
  //         header.classList.add("bg-white", "shadow-lg", "text-black");
  //         header.classList.remove("bg-transparent", "text-white");
  //         setIsScrolled(true);
  //       } else if (window.innerWidth >= 768) {
  //         header.classList.remove("bg-white", "shadow-lg", "text-black");
  //         header.classList.add("bg-transparent", "text-white");
  //         setIsScrolled(false);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header
      className={`px-6 fixed top-0 w-full z-50 transition duration-300 ease-in-out py-0 bg-white shadow-lg text-black`}
      //    ${
      //   // isMobileNavOpen || (isClient && window.innerWidth < 768)
      //     // ?
      //      "bg-white shadow-lg"
      //     // :
      //      "bg-transparent"
      // }
      // //  ${isScrolled ? 
      //   "text-black" 
      //   `}

      // id="sticky-header"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          <div className="logo">
            <a href="/" title="alentoz">
              {/* Desktop light logo */}
              <Image
                id="logo-light"
                className={`hidden lg:block h-16 transition duration-300 ease-in-out object-cover    ${
                  isScrolled ? "hidden opacity-0" : "block opacity-100  rounded-lg "
                }`}
                loading="lazy"
                src={"/logo/logorealstate.png"}
                alt="alentoz"
                width={120}
                height={0} 
                quality={100}

              />

              {/* Desktop dark logo */}
              <Image
                id="logo-dark"
                className={`absolute top-4 hidden lg:block  transition duration-300 ease-in-out object-cover h-16 ${
                  isScrolled ? "block opacity-100" : "hidden opacity-0"
                }`}
                loading="lazy"
                src={"/logo/logorealstate.png"}
                alt="alentoz"
                width={120} 
                height={0} 
                quality={100}
              />

              {/* Mobile logo */}
              <Image
                id="logo-mobile"
                className="block lg:hidden  transition duration-300 ease-in-out object-cover h-16  "
                loading="lazy"
                src={"/logo/logorealstate.png"}
                alt="alentoz"
                width={120} 
                height={0} 
                quality={100}
              />
            </a>
          </div>

          <div className="hidden md:flex">
            <ul className="flex items-center ">
              {NAV_ITEMS.map(({ href, label, isBold }, index) => (
                <li
                  key={index}
                  className="relative group "
                  onMouseEnter={() => setOpenDropdown(label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={href}
                    className={`relative py-[10px] mx-[20px] text-black ${
                      isBold ? "font-bold" : "font-bold"
                    } ${
                      isScrolled
                        ? "nava-black text-black hover:text-blue-500"
                        : "nava-white text-black hover:text-blue-500"
                    }`}
                  >
                    {label}
                  </a>
                
                </li>
              ))}
            </ul>
            {/* Contact Us Button */}
            <ul>
              <li>
                {/* <a
                  href="/contact-us"
                  className={`py-[13px] px-[30px] ${
                    isScrolled
                      ? "text-white bg-primary hover:text-primary"
                      : "text-white hover:text-primary"
                  } hover:bg-white bg-primary rounded-[40px] border-2 border-primary hover:border-primary transition-all duration-300 flex font-bold mx-[20px] items-center`}
                > */}
                <a
                  href="/contact-us"
                  className={`py-[13px] px-[30px]  hover:bg-pink-400 hover:text-white bg-pink-400 rounded-[40px] border-2 border-white hover:border-primary transition-all duration-300 flex font-bold mx-[20px] items-center`}
                  //   ${
                  //   isScrolled
                  //     ? "text-black bg-primary hover:text-blue-500"
                  //     : "text-black hover:text-blue-500"
                  // }
                  
                >
                  Contact us
               
                </a>
              </li>
            </ul>
          </div>
          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden nav-toggler focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${
                isMobileNavOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ${
                isMobileNavOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                isMobileNavOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`h-[90vh] md:hidden bg-white transition-all duration-300 ease-in-out ${
            isMobileNavOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <ul className="flex flex-col items-center space-y-6 py-4">
            {NAV_ITEMS.map(({ href, label, isBold }, index) => (
              <li key={index} className="text-black">
                <a
                  href={href}
                  className={`block ${isBold ? "font-bold" : ""}`}
                  onClick={() =>
                    setOpenDropdown(openDropdown === label ? null : label)
                  }
                >
                  {label}
                </a>
                {/* {subItems && openDropdown === label && (
                  <ul className="mt-2 space-y-2">
                    {subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.href}
                          className="block px-4 py-2 text-sm"
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )} */}
              </li>
            ))}
            {/* Contact Us for Mobile */}
            <li>
              <a href="/contact-us" className="text-white font-bold">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
