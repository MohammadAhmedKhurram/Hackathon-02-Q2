import React from "react";

interface Thirdproductcomp {
  image: string; 
  title: string; 
  originalPrice: string; 
}

const ThirdTrendingComp: React.FC<Thirdproductcomp> = ({ image, title, originalPrice }) => {
  return (
    <div className="w-[267px] h-[74px] flex shadow-[0px_0px_25px_0px_#0000001A]">
      {/* Left Side: Image with Background */}
      <div className="w-[107px] h-full bg-[#F5F6F8] flex justify-center items-center">
        <img src={image} alt="Product" className="object-contain h-[70%] w-auto" />
      </div>

      {/* Right Side: Heading and Price */}
      <div className="flex-grow bg-white flex flex-col justify-center px-4">
        <h2 className="text-[#151875] font-medium w-[151px] text-[14px]">{title}</h2>
        <span className="text-[#151875] text-[12px] line-through mt-1">${originalPrice}</span>
      </div>
    </div>
  );
};

export default ThirdTrendingComp;
