import React from "react";

interface ShopexCardProps {
  image: string;
  title: string;
  description: string;
}

const ShopexCard: React.FC<ShopexCardProps> = ({ image, title, description }) => {
  return (
    <div className="w-[270px] h-[320px] bg-white  flex flex-col items-center justify-center">
      {/* Image Section */}
      <div className="h-[180px] w-[180px] flex justify-center items-center mb-4">
        <img
          src={image}
          alt="Card"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-[22px] font-bold text-center mb-2">{title}</h2>

      {/* Description */}
      <p className="text-base font-bold text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ShopexCard;
