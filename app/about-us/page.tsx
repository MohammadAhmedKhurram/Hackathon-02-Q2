import Link from "next/link";
import Banner from "../components/Banner";
import ShopexCard from "../components/Shopixcard";

export default function AboutUs() {
  return (
    <div>
      <Banner title="Home" title2="Pages" heading="About Us" subheading="About Us"/>
      <div className="flex ml-[375px] gap-[30px] mt-[122px]">
        <img src="/Group 73.png" alt="--" className="w-[570px] h-[409px]" />

        <div>
          <h3 className="text-[36px] font-bold text-[#151875] w-[512px] m-0 leading-[48px] text-left mb-[14px] mt-[38px]">
            Know About Our Ecomerce Business, History
          </h3>
          <p className="text-base font-semibold w-[580px] m-0 text-[#8A8FB9] mb-[83px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <Link href="../contact-us">
          <button className="bg-[#FB2E86] text-white border-2 mt-[0px] border-[#FB2E86] text-sm font-normal tracking-[0.020em] rounded-[3px] cursor-pointer flex items-center justify-center h-[44px] w-[145px] text-[18px] leading-[19.92px] text-left">
            Contact Us
          </button>
          </Link>
        </div>
      </div>

      <div className="mt-[141px]">
        <h1 className="text-[42px] leading-[25.6px] text-black text-center font-bold">
          Our Features
        </h1>
        <div className="flex ml-[375px] mr-[375px] gap-32 mt-[67px]">
          <ShopexCard
            image="/WhatShopexOffer/free-delivery 1.png"
            title="Free Shipping"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <ShopexCard
            image="/WhatShopexOffer/cashback 1.png"
            title="100% Cash Back"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <ShopexCard
            image="/WhatShopexOffer/Group (1).png"
            title="Quality Product"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <ShopexCard
            image="/WhatShopexOffer/24-hours-support 1.png"
            title="24/7 Support"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </div>
      </div>

<div className="flex justify-center mt-[204px] items-center">
      <div className="w-[689px] h-[265px] mb-[382px] ">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-[42px] leading-[25.6px] text-black text-center font-bold">
        Our Client Say!
        </h1>
        
        <img src="/Group 200.png" alt="--" className="text-center mt-16 items-center w-[191px] h-[64px]"/>
        <h2 className="text-[22px] font-semibold text-[#151875] mt-[25px]">Selina Gomez</h2>
        <p className="text-[10px] font-semibold text-[#8A8FB9]">Ceo At Webecy Digital</p>
        <p className="mt-[14px] text-[#8A8FB9] text-[16px] font-bold leading-[25.6px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
        <div className="flex gap-1 mt-[14px] ">
           {/* First Box with color */}
  <div className="w-[18px] h-[3px] rounded-[3px] bg-[#FF75B0]"></div>
  
  {/* Second Box with color */}
  <div className="w-[27px] h-[3px] rounded-[3px] bg-[#FB2E86]"></div>
  
  {/* Third Box with color */}
  <div className="w-[18px] h-[3px] rounded-[3px] bg-[#FF75B0]"></div>
        </div>
        </div>
      </div>
      </div>

    </div>
  );
}
