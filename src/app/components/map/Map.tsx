import React from "react";
import Image from "next/image";


function Map() {
  return (
    <>
   <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1746.6196364026378!2d77.11569875633887!3d28.891237042234735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dad004024b1e5%3A0xc955fce15b77e3e9!2sShiv%20Builldtech!5e0!3m2!1sen!2sin!4v1723292273738!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>

);
}

export default Map;