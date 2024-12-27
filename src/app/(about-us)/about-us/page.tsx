import React from 'react'
import AboutHeroSection from './AboutHeroSection'
import WeChoose from './WeChoose'
import Innovation from './Innovation'
import InspiredByTommarow from './InspiredByTommarow'
import CompanyProfile from './CompanyProfile'
import ContactForm from './ContactForm'
import weChooseData from "../../../data/JSON/aboutPageJson/weChoose.json"
import innovationData from "../../../data/JSON/aboutPageJson/innovation.json"
import inspiredData from "../../../data/JSON/aboutPageJson/inspiredByTommarow.json"
import companyData from "../../../data/JSON/aboutPageJson/companyProfile.json"
import ContactForm2 from '@/app/(contact-us)/contact-us/ContactForm2'
import HeroBanner2 from '@/app/components/Hero-Section/HeroBanner2'
import heroBanner2 from "../../../data/JSON/CommonJson/HeroBanner2.json"

const page = () => {
  return (
   <>
    {/* <AboutHeroSection/> */}
    <HeroBanner2 heroBanner2={heroBanner2}/>
    <WeChoose weChooseData={weChooseData}/>
    <Innovation innovationData={innovationData}/>
    <InspiredByTommarow inspiredData={inspiredData}/>
    <CompanyProfile companyData={companyData}/>
    <ContactForm2/>
   </>
  )
}

export default page
