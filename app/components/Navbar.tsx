import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mt-[19px] mb-[19px] h-10 text-[#0D0E43] text-base font-semibold flex ml-[371px] mr-[371px] items-center">
      <div className="flex items-center">
        <Link href="/">
        <h1 className="text-[34px] font-bold">Hekto</h1>
        </Link>
        <ul className="flex ml-[85px] items-center gap-5">
        <div className="relative group ">
          <Link href="/">
  <li className="text-base font-medium text-[#FB2E86] hover:text-blue-500 cursor-pointer px-4 py-2">
    Home
  </li>
  </Link>

  <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
    <Link href="../about-us">
    <li className="px-4 py-2 text-[#FB2E86] hover:text-blue-500 hover:bg-gray-100 cursor-pointer">
      About
    </li>
    </Link>
    
  </ul>
</div>





          <RiArrowDropDownLine className="w-4 h-4 absolute left-[610px] text-[#FB2E86] " />

          <li>Pages</li>
          <Link href='../shop'>
            
            <li>Products</li>
          </Link>
          <Link href='../blogs'>
            
            <li>Blog</li>
          </Link>
          <Link href='../shop'>
            
            <li>Shop</li>
          </Link>
          <Link href='../contact-us'>
            
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <div className="relative flex items-center w-[317px] h-[40px] overflow-hidden bg-white ml-auto pr-2">
        {/* Search Input Field */}
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full h-full pl-3 text-sm text-gray-700 outline-none bg-white pr-[60px] border-[2px]" // Extra right padding to make space for the button
        />

        {/* Centered Search Button */}
        <button className="absolute right-2 top-1/2 font-bold transform -translate-y-1/2 bg-[#FB2E86] w-[51px] h-[38px] flex items-center justify-center">
          <CiSearch className="w-6 h-7 text-white" />
        </button>
      </div>
    </div>
  );
}
