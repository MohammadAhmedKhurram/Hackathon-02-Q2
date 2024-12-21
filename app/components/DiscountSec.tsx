import { FaCheck } from "react-icons/fa6";
import { Lato } from "next/font/google";
import Link from "next/link";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function DiscountSec() {
  return (
    <div className="overflow-hidden ml-2 md:ml-[50px] md:mr-[50px] xl:ml-[200px] xl:mr-[200px] 2xl:ml-[375px] 2xl:mr-[375px] mt-[129px]">
      <h1 className="text-[30px] xl:text-[42px] font-bold flex justify-center leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
        Discount Item
      </h1>
      <ul
        className={`${lato.className} flex gap-14 justify-center text-[14px] lg:text-[18px] font-normal mt-[19px] text-[#151875]`}
      >
        <li className="text-[#FB2E86] underline ">Wood Chair</li>
        <li>Plastice Chair</li>
        <li>Sofa Collection</li>
      </ul>
      <div className="flex flex-col justify-center items-center  xl:block">
        <div>
          <h1 className="text-[24px] lg:text-[35px] flex font-bold mt-[116px] leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875] tracking-[0.015em] decoration-skip-ink-auto">
            20% Discount Of All Products
          </h1>
          <h3 className="text-[18px] lg:text-[21px] text-[#FB2E86] flex text-left underline-offset-[0.1em] mt-[10px] tracking-[0.015em]">
            Earns Sofa Compact
          </h3>
          <p
            className={`${lato.className} text-[14px] lg:text-[17px] mt-[20px] font-normal tracking-[0.020em] text-[#B7BACB]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget{" "}
            <br />
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div
            className={`${lato.className} flex gap-x-2 gap-y-1 mt-4 items-start mb-4`}
          >
            <p className="flex items-center gap-2 text-[#B8B8DC] text-[12px] lg:text-[16px]">
              <FaCheck className="text-[#7569B2]" /> Material expose like metals
            </p>
            <p className="flex items-center gap-2 text-[#B8B8DC] ml-14 text-[12px] lg:text-[16px]">
              <FaCheck className="text-[#7569B2]" /> Clear lines and geometric
              figures
            </p>
          </div>
        </div>
        <div className={`${lato.className} flex gap-2 text-[#B8B8DC]`}>
          <p className="flex items-center gap-2 text-[#B8B8DC] text-[12px] lg:text-[16px]">
            <FaCheck className="text-[#7569B2]" /> Simple neutral colours.
          </p>
          <p className="flex items-center gap-2 text-[#B8B8DC] ml-[92px] text-[12px] lg:text-[16px]">
            <FaCheck className="text-[#7569B2]" /> Material expose like metals
          </p>
        </div>
        <div className="mt-7">
          <Link href="../shop">
            <button className="bg-[#FB2E86] text-white border-2 border-[#FB2E86] font-normal rounded-[3px] cursor-pointer flex items-center justify-center h-[40px] lg:h-[57px] mt-[37px] w-[120px] lg:w-[200px] text-[17px] leading-[19.92px] text-left tracking-[0.02em]">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden xl:block w-[300px] h-[300px] 2xl:w-[450px] 2xl:h-[450px] rounded-full absolute top-[5600px] left-[850px] 2xl:top-[4830px] 2xl:left-[1041px] bg-[#FCECF1]"></div>
      <img
        src="/DiscountProds/tortuga-01-b 1 (1).png"
        alt="--"
        className="hidden xl:block absolute top-[5525px] left-[770px] 2xl:top-[4730px] 2xl:left-[920px] w-[470px] 2xl:w-[699px] 2xl:h-[597px]"
      />
    </div>
  );
}
{
  /* <img src="/DiscountProds/tortuga-01-b 1 (1).png" alt="--" className="absolute top-[4850px] left-[940px] w-[1699] h-[597pz]"/> */
}
//
