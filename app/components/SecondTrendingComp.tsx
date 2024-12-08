import React from "react";

// Define Props Interface for Type Safety
interface SecondTrendingCardProps {
  mainTitle: string; // Main title text for the card
  subTitle: string; // Subtitle text for the card
  image: string; // URL or path for the image
  bgColor: string; // Background color for the card
}

const SecondTrendingCard: React.FC<SecondTrendingCardProps> = ({
  mainTitle,
  subTitle,
  image,
  bgColor,
}) => {
  return (
    <div
      className={`w-[420px] h-[270px] relative flex flex-col justify-between pl-4`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Top Left: Main Heading and Subheading */}
      <div className="absolute top-4 left-4">
        <h2 className="text-[26px] font-semibold text-[#151875]">{mainTitle}</h2>
        <h3 className="text-base underline text-[#FB2E86] mt-1">{subTitle}</h3>
      </div>

      {/* Bottom Right: Display Image */}
      <div className="absolute bottom-4 right-4">
        <img
          src={image}
          alt="Dynamic Component"
          className="m-0 p-0"
        />
      </div>
    </div>
  );
};

export default SecondTrendingCard;
