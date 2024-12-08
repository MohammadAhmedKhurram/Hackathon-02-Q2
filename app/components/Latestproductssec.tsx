import SecondCardComponent from "./Secondcardcomp";

export default function LatestProductSec() {
  return (
    <div className="ml-[371px] mr-[371px]">

      <h1 className="text-[42px] flex justify-center mt-[71px] leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
        Leatest Products
      </h1>
      <ul className="flex gap-14 justify-center mt-[19px] text-[#151875]">
        <li>New Arrival</li>
        <li>Best Seller</li>
        <li>Featured</li>
        <li>Special Offer</li>
      </ul>

      <div className="flex justify-center gap-32 mt-[58px]">
      <SecondCardComponent title="Comfort Handy Craft" image="/LatestProducts/1 (2).png" price={42.00} originalPrice={65.00}/>
      <SecondCardComponent title="Comfort Handy Craft" image="/LatestProducts/2 (2).png" price={42.00} originalPrice={65.00}/>
      <SecondCardComponent title="Comfort Handy Craft" image="/LatestProducts/3 (2).png" price={42.00} originalPrice={65.00}/>
      </div>

      <div className="flex justify-center gap-32 mt-[116.02px]">
      <SecondCardComponent title="Comfort Handy Craft" image="/LatestProducts/4 (2).png" price={42.00} originalPrice={65.00}/>
      <SecondCardComponent title="Comfort Handy Craft" image="/LatestProducts/5.png" price={42.00} originalPrice={65.00}/>
      <SecondCardComponent title="Comfort Handy Craft" image="/LatestProducts/6.png" price={42.00} originalPrice={65.00}/>
      </div>

    </div>
  );
}
