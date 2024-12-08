import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";


export default function Navbar() {
  return (
    <div className="mt-[19px] mb-[19px] h-10 text-black text-base font-semibold flex ml-[371px] mr-[371px] items-center">

      <div className="flex items-center">
        <h1 className="text-[34px] font-bold">Hekto</h1>
        <ul className="flex ml-[85px] items-center gap-5">

            <li>Home</li>
            <RiArrowDropDownLine className="w-4 h-4 absolute left-[595px]" />

          <li>Pages</li>
          <li>Products</li>
          <li>Blog</li>
          <li>Shop</li>
          <li>Contact</li>
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
      <button className="absolute right-2 top-1/2 font-bold transform -translate-y-1/2 bg-[#FB2E86] w-[51px] h-[30px] flex items-center justify-center">
        <CiSearch className="w-6 h-7 text-white" />
      </button>
    </div>
    </div>
  );
}
