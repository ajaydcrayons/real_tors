import React from 'react'
import Image from 'next/image'

export default function AboutHeroSection() {
  return (
    <>
    {/* <section className='w-full '>
            <Image src="/images/aboutherobanner.jpg" alt='Copper EV' width={1920 } height={1080} className=' object-cover w-full ' />

    </section> */}
    <section className="w-full max-w-[1400px] h-64 lg:h-[728px]">
          <Image
            className="w-full h-full object-cover"
            src={"/images/modern.jpg"}
            width={1800}
            height={728}
            alt="image"
            layout="responsive"
          />
        </section>
    </>
  )
}
