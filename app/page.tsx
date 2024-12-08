import DiscountSec from "./components/DiscountSec";
import Featuredproductssec from "./components/Featuredprojectsec";
import Herosec from "./components/Herosec";
import LatestProductSec from "./components/Latestproductssec";
import Navbar from "./components/Navbar";
import Topbanner from "./components/Topbanner";
import TrendingProductsSec from "./components/Trendingproducts";
import UniqueFeatureOfTrenPro from "./components/UniqueFeaturesOfTrenPro";
import WhatShoppixOffer from "./components/Whatshopixoffer";


export default function Home() {
  return (
   <>
   <Topbanner/>
   <Navbar/>
   <Herosec/>
   <Featuredproductssec/>
   <LatestProductSec/>
   <WhatShoppixOffer/>
   <UniqueFeatureOfTrenPro/>
   <TrendingProductsSec/>
   <DiscountSec/>
   </>
  );
}
