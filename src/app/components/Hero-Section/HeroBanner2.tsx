import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { iconMapping } from '@/utils/common';

interface bannerDataProps {
  heading:string,
  heading2:string,
  icon:string,
  brandName:string,
  des:string,
  bgImg:string
}

interface bannerData {
  heroBanner2 : bannerDataProps
}
const HeroBanner2 :React.FC<bannerData> = ({heroBanner2}) => {
  return (
    <section className="w-full">
        <div className="w-full h-[520px] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center relative" style={{
    backgroundImage:`url(${heroBanner2?.bgImg})`
        }}>
          
        </div>
        <div className='inset-0 absolute h-[600px]  bg-black opacity-50 '>
        </div>
        <div className='inset-0 absolute mt-10 lg:px-28 sm:px-10 md:20 flex justify-around    flex-col'>
            <div className='lg:px-10 md:px-10 sm:px-10 px-10'>
                <p className='pt-10 lg:text-[25px] sm:text-[18px] font-semibold text-slate-300'>{heroBanner2?.brandName}</p>
                <p className='pt-5 lg:text-[35px] sm:text-[25px] font-semibold text-slate-300'>{heroBanner2?.heading}</p>
                <p className=' lg:text-[35px] sm:text-[25px] font-semibold text-slate-300'>{heroBanner2?.heading2} </p>
            </div>
            <div className='lg:px-10 md:px-10 sm:px-10 px-10 lg-0 md:pt-0 sm:pt-32 pt-32'>
            <FontAwesomeIcon icon={iconMapping[heroBanner2?.icon]} style={{width:50 }} />
            <p className='pt-1 lg:text-[15px] font-semibold text-slate-300 sm:text-[10px]'>{heroBanner2?.des} </p>
            </div>
        </div>

      </section>
  )
}

export default HeroBanner2
