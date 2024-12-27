import React from "react";


interface ProcessStep {
  title: string;
  description: string;
  classname:string;
}

interface ProcessProps {
  heading:string,
  subHeading:string,
  childData:ProcessStep[]
}

interface whyBuyDataProps {
  whyBuyData : ProcessProps
}

 

const  WhyBuyWithUs:React.FC<whyBuyDataProps> = ({whyBuyData}) => {
  return (
    <section className="development-phase max-w-full mx-auto py-4 px-6 bg-[#F8F8F8] ">
      <div className="container max-w-[85rem] mx-auto flex flex-col justify-center items-center ">
        <div className="p-4 text-center flex justify-center flex-col lg:w-[85%] w-full">
          <h2 className="heading text-4xl font-bold text-black">{whyBuyData?.heading}</h2>
          <br />
          <p className="font-medium pt-4 text-black">
          {whyBuyData?.subHeading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 py-6 lg:px-20 lg:py-10 max-w-[80rem] mx-auto ">
          {whyBuyData?.childData?.map((step, index) => (
            <div
              key={index}
              className={`bg-white px-[10px] pt-[10px] pb-[30px] rounded-3xl shadow-2xl text-center  relative ${step.classname}`}
            >
              <div className="box relative">
                <h4 className="text-base font-bold bg-[#edf0ff] rounded-3xl py-4 px-2 text-black">
                  {step.title}
                </h4>
                <p className="text-sm mt-4 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyBuyWithUs
