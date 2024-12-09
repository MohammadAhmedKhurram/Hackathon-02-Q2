import SecondTrendingCard from "./SecondTrendingComp";
import ThirdTrendingComp from "./ThirdTrendingComp";
import TrendingProductsCardComp from "./TrendingprojectCardcomp";

export default function TrendingProductsSec() {
  return (
    <div>
      <h1 className="text-[42px] font-bold flex justify-center mt-[129px] leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
        Trending Products
      </h1>
      <div className="flex justify-center ml-[375px] mr-[375px] gap-16 mt-12">
        <TrendingProductsCardComp
          image="/TrendingProducts/1.png"
          title="Cantilever chair"
          price={26.0}
          originalPrice={42.0}
        />
        <TrendingProductsCardComp
          image="/TrendingProducts/2.png"
          title="Cantilever chair"
          price={26.0}
          originalPrice={42.0}
        />
        <TrendingProductsCardComp
          image="/TrendingProducts/3.png"
          title="Cantilever chair"
          price={26.0}
          originalPrice={42.0}
        />
        <TrendingProductsCardComp
          image="/TrendingProducts/4.png"
          title="Cantilever chair"
          price={26.0}
          originalPrice={42.0}
        />
      </div>
      <div className="flex ml-[375px] mr-[375px] mt-10">
        <div className="bg-white">
          <SecondTrendingCard
            image="/TrendingProducts/SecondCComp/1.png"
            mainTitle="23% off in all products"
            subTitle="Shop Now"
            bgColor="#ffff"
          />
        </div>
        <SecondTrendingCard
          image="/TrendingProducts/SecondCComp/2.png"
          mainTitle="23% off in all products"
          subTitle="View Collection"
          bgColor="#EEEFFC"
        />

        <ul className="ml-auto h-[270px] gap-14 ">

        <li> <ThirdTrendingComp image="/ThirdTrendingProduct/1.png" title="Executive Seat chair" originalPrice="32.00"/></li>
        <li className="mt-6 mb-6"><ThirdTrendingComp image="/ThirdTrendingProduct/2.png" title="Executive Seat chair" originalPrice="32.00"/></li>
        <li><ThirdTrendingComp image="/ThirdTrendingProduct/3.png" title="Executive Seat chair" originalPrice="32.00"/></li>

      </ul>
      </div>
      
    </div>
  );
}
