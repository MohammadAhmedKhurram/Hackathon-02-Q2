import React from "react";
import { CardProps } from "../types/cardcomptypes"; // Adjust the import path as necessary

const CardComponent: React.FC<CardProps> = ({ image, title, code, price, boxColors }) => {
  return (
    <div className="w-[270px] h-[361px] flex flex-col items-center shadow-[0px_0px_25px_0px_#0000001A]">
      {/* Image */}
      <div className="h-[236px] bg-[#F6F7FB] w-full flex justify-center items-center">
      <img 
        src={image} 
        alt="Card Image" 
        className="center" 
      />
</div>

      {/* Title */}
      <h2 className="mt-4 text-lg font-semibold text-center text-[#FB2E86]">{title}</h2>

      {/* Colored Boxes */}
      <div className="flex justify-center gap-2 mt-2">
        {boxColors.slice(0, 3).map((color, index) => (
          <div key={index} className={`w-[14px] h-[4px] `} style={{ backgroundColor: color }}></div>
        ))}
      </div>

      {/* Code */}
      <p className="mt-4 text-sm text-[#151875]"> {code}</p>

      {/* Price */}
      <p className="mt-2 text-lg font-bold text-[#151875]">${price}</p>
    </div>
  );
};



export default CardComponent;
