import DynamicHeroSection from '@/app/components/Hero-Section/DynamicHeroSection'
import Common3Card from '@/app/components/section-components/Common3Card'
import data from "../../../data/JSON/CommonJson/Common3Card.json"
import React from 'react'
import HeroBanner2 from '@/app/components/Hero-Section/HeroBanner2'
import heroBanner2 from "../../../data/JSON/CommonJson/blogBanner.json"

const page = () => {
  return (
    <>
    {/* <DynamicHeroSection imgUrl='/images/blogImg.jpg' className='object-cover w-full'/> */}
    <HeroBanner2 heroBanner2={heroBanner2}/>
    <Common3Card data={data}/>
    </>
  )
}

export default page
