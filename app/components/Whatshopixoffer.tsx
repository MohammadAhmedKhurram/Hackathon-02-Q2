import ShopexCard from "./Shopixcard";

export default function WhatShoppixOffer() {
  return (
    <div>
      <h1 className="text-[42px] leading-[49.22px] text-left font-bold flex justify-center text-[#151875] mt-[51px]">
        What Shopex Offer
      </h1>

      <div className="flex ml-[371px] mr-[371px] gap-32 mt-[55px]">
      <ShopexCard
        image="/WhatShopexOffer/delivery_truck_bolt_65dp_000000_FILL0_wght400_GRAD0_opsz48.png"
        title="24/7 Support"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
      />
      <ShopexCard
        image="/WhatShopexOffer/rocket_launch_65dp_00000_FILL0_wght400_GRAD0_opsz48.png"
        title="24/7 Support"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
      />
      <ShopexCard
        image="/WhatShopexOffer/shopping_bag_speed_65dp_00000_FILL0_wght400_GRAD0_opsz48.png"
        title="24/7 Support"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
      />
      <ShopexCard
        image="/WhatShopexOffer/support_agent_65dp_00000_FILL0_wght400_GRAD0_opsz48.png"
        title="24/7 Support"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
      />
      </div>

    </div>
  );
}
