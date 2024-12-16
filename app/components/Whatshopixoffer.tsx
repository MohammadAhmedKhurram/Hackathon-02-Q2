import ShopexCard from "./Shopixcard";

export default function WhatShoppixOffer() {
  return (
    <div>
      <h1 className="text-[42px] leading-[49.22px] text-left font-bold flex justify-center text-[#151875] mt-[51px]">
        What Shopex Offer
      </h1>

      <div className="flex ml-[371px] mr-[371px] gap-32 mt-[55px]">
      <ShopexCard
        image="/WhatShopexOffer/free-delivery 1.png"
        title="24/7 Support"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
      />
      <ShopexCard
        image="/WhatShopexOffer/cashback 1.png"
        title="24/7 Support"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
      />
      <ShopexCard
        image="/WhatShopexOffer/Group (1).png"
        title="24/7 Support"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
      />
      <ShopexCard
        image="/WhatShopexOffer/24-hours-support 1.png"
        title="24/7 Support"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
      />
      </div>

    </div>
  );
}
