import SecondTrendingCard from "./SecondTrendingComp";
import ThirdTrendingComp from "./ThirdTrendingComp";
import TrendingProductsCardComp from "./TrendingprojectCardcomp";

export default function TrendingProductsSec() {
  return (
    <div>
      {/* Heading */}
      <h1 className="text-[30px] md:text-[32px] xl:text-[42px] font-bold flex justify-center mt-[40px] md:mt-[80px] leading-[1.2] text-center text-[#151875]">
        Trending Products
      </h1>

      {/* First Row */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 px-4 md:px-16 lg:px-32">
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

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 mt-10 px-4 md:px-16 lg:px-32">
        <SecondTrendingCard
          image="/TrendingProducts/SecondCComp/1.png"
          mainTitle="23% off in all products"
          subTitle="Shop Now"
          bgColor="#ffff"
        />
        <SecondTrendingCard
          image="/TrendingProducts/SecondCComp/2.png"
          mainTitle="23% off in all products"
          subTitle="View Collection"
          bgColor="#EEEFFC"
        />
        <ul className="flex flex-col gap-4 mt-4">
          <li>
            <ThirdTrendingComp
              image="/ThirdTrendingProduct/1.png"
              title="Executive Seat chair"
              originalPrice="32.00"
            />
          </li>
          <li>
            <ThirdTrendingComp
              image="/ThirdTrendingProduct/2.png"
              title="Executive Seat chair"
              originalPrice="32.00"
            />
          </li>
          <li>
            <ThirdTrendingComp
              image="/ThirdTrendingProduct/3.png"
              title="Executive Seat chair"
              originalPrice="32.00"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
