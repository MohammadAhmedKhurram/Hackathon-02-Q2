import { RiFacebookFill } from "react-icons/ri";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { ImTwitter } from "react-icons/im";
import { Lato } from "next/font/google";


const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Footer() {
  return (
    <div>
      <footer className="w-full h-[478px] bg-[#EEEFFB]">
        {/* Footer with a custom CSS Grid layout */}
        <div className="relative h-full">
          {/* First Column */}
          <div className="absolute top-[95px] left-[310px]">
            <h2 className="text-black text-[38px] font-bold mb-4">Hekto</h2>
            <div className={`${lato.className}`}>
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="w-[200px] h-[40px] border-gray-300 px-3 text-sm outline-none"
              />
              <button className="h-[40px] w-[135px] bg-[#FB2E86] text-white px-4">
                Sign Up
              </button>
            </div>
            <ul className="text-[#8A8FB9] text-sm space-y-2 mt-6">
              <li>Contact Info</li>
              <li>17 Princess Road, London, Greater London NW1 8JR, UK</li>
            </ul>
            </div>
          </div>

          {/* Second Column */}
          <div className="absolute top-[94px] left-[780px]">
            <h2 className="text-black text-lg font-semibold mb-11">
              Categories
            </h2>
            <div className={`${lato.className}`}>
            <ul className="text-[#8A8FB9] text-sm space-y-4">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
            </div>
          </div>

          {/* Third Column */}
          <div className="absolute top-[94px] left-[1047px]">
            <h2 className="text-black text-lg font-semibold mb-11">
              Customer Care
            </h2>
            <div className={`${lato.className}`}>
            <ul className="text-[#8A8FB9] text-sm space-y-4">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
            </div>
          </div>

          {/* Fourth Column */}
          <div className="absolute top-[94px] left-[1287px]">
            <h2 className="text-black text-lg font-semibold mb-11">Pages</h2>
            <div className={`${lato.className}`}>
            <ul className="text-[#8A8FB9] text-sm space-y-4">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className={`${lato.className} h-[53px]  bg-[#E7E4F8] flex justify-between items-center`}>
        <p className="text-[#9DA0AE] ml-[275px] text-[16px] font-semibold">
          ©Webecy - All Rights Reserved
        </p>
        <div className="flex gap-2 mr-[645px] bg-[#E7E4F8]">
          <RiFacebookFill className="w-[19.42px] h-[19.42px]"/>
          <TbBrandInstagramFilled className="w-[19.42px] h-[19.42px]"/>
          <ImTwitter className="w-[19.42px] h-[19.42px]"/>
        </div>
      </div>
    </div>
  );
}
