import React from 'react'

interface bannerDataProps {
  heading:string,
  btnContent:string,
  bgImg:string
}

interface bannerData {
  heroData : bannerDataProps
}
const HeroSection : React.FC<bannerData> = ({heroData}) => {
  return (
    <section className="w-full">
        <div className="w-full h-[520px]  bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center" style={{
    backgroundImage: `url(${heroData?.bgImg})`,
  }}>
          <div className="w-full text-center">
            <h1 className="font-sans text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold p-2 bg-opacity-40 rounded-sm">
             {heroData?.heading}
            </h1>
          </div>
          <div className="w-full mx-auto">
            <form>
              <div className="xl:w-1/2 lg:w-[60%] md:w-[70%] sm:w-[70%] xs:w-[90%] mx-auto flex gap-2 mt-4">
                <input 
                  type="text" 
                  className="border border-gray-400 w-full p-2 rounded-md text-lg pl-2"
                  placeholder="Search properties..."
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-primaryBlue text-lg text-white rounded-[5px] bg-pink-400 hover:bg-sky-500 font-semibold"
                >
                  {heroData?.btnContent}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}

export default HeroSection
