import { FaCheck } from "react-icons/fa6";
import GeneralButton from "./Btn";

export default function DiscountSec() {
  return (
    <div className="ml-[375px] mr-[375px] mt-[129px]">
      <h1 className="text-[42px] font-bold flex justify-center leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
        Discount Item
      </h1>
      <ul className="flex gap-14 justify-center mt-[19px] text-[#151875]">
        <li className="text-[#FB2E86] underline ">Wood Chair</li>
        <li>Plastice Chair</li>
        <li>Sofa Collection</li>
      </ul>
      <div className="">
        <h1 className="text-[35px] flex font-bold mt-[88px] leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875] tracking-[0.015em] decoration-skip-ink-auto">
          20% Discount Of All Products
        </h1>
        <h3 className="text-[21px] text-[#FB2E86] flex leading-[49.22px] text-left underline-offset-[0.1em]  tracking-[0.015em] decoration-skip-ink-auto">
          Earns Sofa Compact
        </h3>
        <p className="text-[17px] font-normal tracking-[0.020em] text-[#B7BACB]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget{" "}
          <br />
          feugiat habitasse nec, bibendum condimentum.
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-4 items-start mb-4">
          <p className="flex items-center gap-2 w-auto text-[#B7BACB]">
            <FaCheck className="text-[#7569B2]" /> Material expose like metals
          </p>
          <p className="flex items-center gap-2 w-auto text-[#B7BACB] ml-14">
            <FaCheck className="text-[#7569B2]" /> Clear lines and geometric
            figures
          </p>
        </div>
      </div>
      <div className="flex gap-2 ">
        <p className="flex items-center gap-2 w-auto text-[#B7BACB]">
          <FaCheck className="text-[#7569B2]" /> Simple neutral colours.
        </p>
        <p className="flex items-center gap-2 w-auto text-[#B7BACB] ml-[92px]">
          <FaCheck className="text-[#7569B2]" /> Material expose like metals
        </p>
      </div>
      <div className="mt-7">
        <GeneralButton title="Shop Now" />
      </div>
      <div className="w-[450px] h-[450px] rounded-full absolute top-[4900px] left-[1041px] bg-[#FCECF1]"></div>
      <img src="/DiscountProds/tortuga-01-b 1 (1).png" alt="--" className="absolute top-[4800px] left-[920px] w-[1699] h-[597pz]"/>

    </div>
  );
}
{/* <img src="/DiscountProds/tortuga-01-b 1 (1).png" alt="--" className="absolute top-[4850px] left-[940px] w-[1699] h-[597pz]"/> */}
//