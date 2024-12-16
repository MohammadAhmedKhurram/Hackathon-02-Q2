import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

export default function Topbanner() {
  return (
    
      <div className="h-11 flex justify-between items-center bg-[#7E33E0] text-[#F1F1F1] text-base font-semibold pl-[377px] pr-[377px]">

        {/* Left Side */}
        <div className="flex items-center gap-5">
          <div className="flex items-center ">
            <MdOutlineMailOutline className="w-[16px] h-[16px] mr-2" />
            <p>mhhasannul@gmail.com</p>
          </div>
          <div className="flex items-center">
            <FiPhoneCall className="w-[16px] h-[16px] mr-2"/>
            <p>(12345)67890</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <div>English</div>
            <RiArrowDropDownLine className="w-4 h-4" />
          </div>
          <div className="flex items-center ">
            <div>USD</div>
            <RiArrowDropDownLine className="w-4 h-4" />
          </div>
          <Link href='../login'>
          <div className="flex items-center">
            
            <div className="mr-1">Login</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          </Link>

          <div className="flex items-center ">
              <div className="mr-1">Wishlist</div>
              <CiHeart className="w-4 h-4" />
            </div>
          {/* Ensure Proper Center Alignment for Cart */}
          <div className="flex items-center ">
            <Link href="../shopping-cart">
            <BsCart2 className="w-[17.5px] h-[17.5px]" />
            </Link>
          </div>

        </div>
      </div>
    
  );
}
