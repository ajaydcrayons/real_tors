import HeroSection from '@/app/components/Hero-Section/HeroSection'
import React from 'react'
import PropertyServices from './PropertyServices'
import PropertiesDetail from './PropertiesDetail'
import PropertySection from './PropertySection'
import FinestServices from './FinestServices'
import propertyData from "../../../data/JSON/propertyPage/PropertyServices.json"
import propertyDetailData from "../../../data/JSON/propertyPage/PropertyDetail.json"
import propertydetails from "../../../data/JSON/propertyPage/PropertySection.json" 
import tabData from "../../../data/JSON/propertyPage/ImageWithText.json"
import ImageWithText from './ImageWithText'
import bannerData from "../../../data/JSON/CommonJson/HeroSection.json"
const page = () => {
  return (
   <>
   <HeroSection heroData={bannerData}/>
   <PropertyServices propertyData={propertyData}/>
   <PropertiesDetail propertyData={propertyDetailData}/>
   <PropertySection propertydetails={propertydetails?.propertySection}/>
   <FinestServices/>
   <ImageWithText tabs={tabData}/>
   </>
  )
}

export default page
