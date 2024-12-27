import Image from "next/image";
import Header from "./components/headers/Header";
import { NavBar } from "./components/ui/Navbar";
import { Navbar } from "flowbite-react";
import { WorldMapDemo } from "./components/WorldMapDemo";
import HeroSection from "./components/Hero-Section/HeroSection";
import WhyBuyWithUs from "./components/section-components/WhyBuyWithUs";
import LeadingRealStateDeveloper from "./components/section-components/LeadingRealStateDeveloper";
import CuratedCollection from "./components/section-components/CuratedCollection";
import TrandingProject from "./components/section-components/TrandingProject";
import FeaturedCities from "./components/section-components/FeaturedCities";
import Footer from "./components/footer/Footer";
import Trandingdata from "../data/JSON/HomePageJson/Tranding.json"
import curatedImages from "../data/JSON/HomePageJson/CuratedCollection.json"
import featuredData from "../data/JSON/HomePageJson/FeaturedCities.json"
import whyBuyData from "../data/JSON/HomePageJson/WhyBuyWithUs.json"
import logos from "../data/JSON/HomePageJson/LeadingRealState.json"
import CouroselField from "./components/ui/Courosel";
import data from "../data/JSON/CommonJson/Courosel.json"

export default function Home() {
  return (
    <>
    {/* <Header/> */}
    {/* <HeroSection/> */}
    
    <CouroselField data={data}/>
    <TrandingProject Trandingdata={Trandingdata}/>
    <LeadingRealStateDeveloper logos={logos} heading="Leading Real Estate Developers"/>
    <CuratedCollection curatedImages={curatedImages} heading="Curated Collection" subHeading="Explore prime properties based on your recommendation"/>
    <WhyBuyWithUs whyBuyData={whyBuyData}/>
    <FeaturedCities featuredData={featuredData}/>
    {/* <Footer/> */}

    </>
  );
}
