import Link from "next/link";
import BlogsSec from "./components/BlogsSec";
import GeneralButton from "./components/Btn";
import DiscountSec from "./components/DiscountSec";
import Featuredproductssec from "./components/Featuredprojectsec";
import Herosec from "./components/Herosec";
import LatestProductSec from "./components/Latestproductssec";
import TopCategotySec from "./components/TopCategories";
import TrendingProductsSec from "./components/Trendingproducts";
import UniqueFeatureOfTrenPro from "./components/UniqueFeaturesOfTrenPro";
import WhatShoppixOffer from "./components/Whatshopixoffer";

export default function Home() {
  return (
    <>
      <Herosec />
      <Featuredproductssec />
      <LatestProductSec />
      <WhatShoppixOffer />
      <UniqueFeatureOfTrenPro />
      <TrendingProductsSec />
      <DiscountSec />
      <TopCategotySec />
      <div>
        <div className="relative w-full h-[462px]">
          <img
            src="/Rectangle 102.png"
            alt="--"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-[#151875] font-bold text-[20px] md:text-[26px] xl:text-[35px] leading-[54.25px] tracking-[0.015em] p-4">
                Get Latest Update By Subscribing
                <span className="hidden lg:inline">
                  <br />
                </span>
                {" "} Our Newsletter
              </h1>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 mt-20">
            <Link href="./shop">
              <GeneralButton title="Shop Now" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20 w-[100%] h-[100px]">
        <img src="/image 1174.png" alt="--" className="w-[904px] h-[93px]" />
      </div>
      <BlogsSec />
    </>
  );
}
