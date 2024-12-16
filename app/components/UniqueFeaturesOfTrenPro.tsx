import Link from "next/link";
import GeneralButton from "./Btn";
import { Lato } from "next/font/google";


const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function UniqueFeatureOfTrenPro() {
  return (
    <div className="relative h-[579px] pl-[371px] pr-[371px] mt-[135px] bg-[#F1F0FF] flex">
      <div className="relative pl-[0px] pt-[36px]">
        {/* First Image */}
        <img
          src="/UniqqueFeaturesOfTrendPro/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png"
          alt="--"
          className="relative w-[509px] h-[550px] z-20 ml-[70px]"
        />

        {/* Second Image */}
       
      </div>
      <img
          src="/UniqueFeatureOfTrendPro.png"
          alt="--"
          className="absolute top-0 left-0  ml-[392px] w-[481px] h-[449.62] mt-[60px]"
        />
      <div>
        <h1 className="w-[507px] ml-[40px] h-[92px] font-bold mt-[82px] text-[35px] text-[#151875]">
          Unique Features Of leatest & Trending Poducts
        </h1>
        <div className="flex  ml-[40px] gap-2 mt-12 items-center">
          <div className={`${lato.className} w-[11px] h-[11px] bg-[#F52B70]  rounded-full`}></div>
          <p className="text-base font-medium text-[#ACABC3]">
            All frames constructed with hardwood solids and laminates
          </p>
        </div>
        <div className="flex ml-[40px] gap-2 mt-1 mb-1 items-center">
          <div className={`${lato.className} w-[11px] h-[11px] bg-[#2B2BF5]  rounded-full`}></div>
          <p className="text-base font-medium text-[#ACABC3] w-[461px]">
            Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
          </p>
          
        </div>
        <div className="flex ml-[40px] gap-2 items-center">
          <div className={`${lato.className} w-[11px] h-[11px] bg-[#2BF5CC]  rounded-full`}></div>
          <p className="text-base font-medium text-[#ACABC3]">
            Arms, backs and seats are structurally reinforced
          </p>
        </div>
        <div className="flex items-center mt-12 gap-4 ml-[40px]">
          <Link href="../shopping-cart">
          <GeneralButton title="Add To Cart" />
          </Link>
          <ul>
            <li className="text-[#151875]">B&B Italian Sofa </li>
            <li className={`${lato.className} text-[#151875] font-semibold`}>$32.00</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
