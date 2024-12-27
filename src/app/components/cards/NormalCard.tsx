import Image from 'next/image'
import React from 'react'

interface DataCard {
   name:string,
   age:number,
   gender:string 
}

export interface CardProps{
    card:DataCard[]
    heading:string | null,
    subHeading:string | null,
    className:string
}

const NormalCard : React.FC<CardProps> = ({card,heading,subHeading,className}) => {
  return (
   <>
   {
    card?.map((item,i)=>(
   
        <div className={className} key={i}>
          <h2 className='text-center py-3 text-[30px] font-bold '>{heading}</h2>
          <p className='px-10 text-[15px] font-semibold text-blue-400'>{subHeading}</p>
      
          <p>{item.name}</p>    
          <p>{item.age}</p>
          <p>{item.gender}</p>
          
        </div>
      
    ))
   }
   </>
  )
}

export default NormalCard
