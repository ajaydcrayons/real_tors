import Image from 'next/image'
import React from 'react'

type props ={
    imgUrl:string,
    className:string
}

const DynamicHeroSection = ({imgUrl,className}:props) => {
  return (
    <section className='w-full '>
         <Image src={imgUrl} alt='Copper EV' width={1920 } height={1080} className={className} />
    </section>
  )
}

export default DynamicHeroSection
