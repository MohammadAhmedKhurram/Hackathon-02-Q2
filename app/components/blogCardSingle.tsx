import React from "react";
import { FaStar } from "react-icons/fa";

const BlogCardSingle = (props: blogcardsingletype) => {
  return (
    <div
      className="w-[209.54px] h-[319.53px] bg-white rounded-lg shadow-lg flex flex-col items-center p-2"
    >
      {/* Image Section */}
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-[254.7px] object-cover rounded-t-lg"
      />

      {/* Title */}
      <h3 className="text-[16px] font-medium text-center mt-2 text-gray-800">
        {props.title}
      </h3>

      {/* Price and Rating Section */}
      <div className="flex items-center justify-between w-full px-2 mt-2">
        {/* Original Price */}
        <span className="text-[14px] text-gray-500 line-through">
          {props.price}
        </span>

        {/* Discounted Price */}
        <span className="text-[16px] text-[#FB2E86] font-bold">
          {props.discountedPrice}
        </span>

        {/* Rating */}
        <div className="flex items-center text-[#FFA41C]">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={index < rating ? "text-[#FFA41C]" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCardSingle;

