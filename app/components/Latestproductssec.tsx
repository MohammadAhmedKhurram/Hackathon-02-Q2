import SecondCardComponent from "./Secondcardcomp";

export default function LatestProductSec() {
  return (
    <div>
      <div className="">
        <h1 className="text-[30px] xl:text-[42px] font-bold flex justify-center mt-[71px] leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
          Latest Products
        </h1>
        <ul className="text-[12px] md:text-[14px] xl:text-[16px] flex gap-[10px] md:gap-14 justify-center mt-[19px] text-[#151875] ml-0 mr-0">
          <li>New Arrival</li>
          <li>Best Seller</li>
          <li>Featured</li>
          <li>Special Offer</li>
        </ul>
      </div>
      <div className="flex flex-wrap justify-center gap-x-16 xl:gap-x-32 gap-y-14 xl:gap-y-[116.02px] mt-[58px] ml-[40px] mr-[40px] lg:ml-[100px] lg:mr-[100px]">
        <SecondCardComponent
          title="Comfort Handy Craft"
          image="/LatestProducts/1 (2).png"
          price={42.0}
          originalPrice={65.0}
        />
        <SecondCardComponent
          title="Comfort Handy Craft"
          image="/LatestProducts/2 (2).png"
          price={42.0}
          originalPrice={65.0}
        />
        <SecondCardComponent
          title="Comfort Handy Craft"
          image="/LatestProducts/3 (2).png"
          price={42.0}
          originalPrice={65.0}
        />
        <SecondCardComponent
          title="Comfort Handy Craft"
          image="/LatestProducts/4 (2).png"
          price={42.0}
          originalPrice={65.0}
        />
        <SecondCardComponent
          title="Comfort Handy Craft"
          image="/LatestProducts/5.png"
          price={42.0}
          originalPrice={65.0}
        />
        <SecondCardComponent
          title="Comfort Handy Craft"
          image="/LatestProducts/6.png"
          price={42.0}
          originalPrice={65.0}
        />
      </div>
    </div>
  );
}
