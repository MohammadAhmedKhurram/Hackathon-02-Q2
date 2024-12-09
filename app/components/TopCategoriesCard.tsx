import React from "react";
import {TopCateg } from "../types/cardcomptypes"; // Adjust the import path as necessary

const TopCategotiesCard: React.FC<TopCateg> = ({
  image,
  title,
  price,
}) => {
  return (
    <div className="w-[269px] h-[345px] flex flex-col items-center justify-between ">

      {/* Image Section */}
      <div className="h-[269px] bg-[#F6F7FB] w-full flex justify-center items-center rounded-full">
        <img 
          src={image}
          alt="Card Image" 
          className=""
        />
      </div>

      {/* Title - Centered across the entire row */}
      <div className="w-full flex justify-center mt-4">
        <h2 className="text-lg font-semibold text-center text-[#151875]">{title}</h2>
      </div>

      {/* Price and Original Discounted Price - Centered in a new row */}
      <div className="w-full flex justify-center items-center  gap-2">
        <span className="text-[#151875] font-bold text-base">${price}</span>
      </div>

    </div>
  );
};

export default TopCategotiesCard;
