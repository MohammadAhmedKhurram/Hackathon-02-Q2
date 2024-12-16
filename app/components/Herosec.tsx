import Link from "next/link";
import GeneralButton from "./Btn";
import { Lato } from "next/font/google";


const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Herosec() {
  return (
    <div className="h-[784px] bg-[#F2F0FF]">
    <div className=" flex">
      <img
        src="/Vector 14.png"
        alt="--"
        className="absolute top-[216px] left-[1598px]"
      />
      <p className="w-[69px] h-[74px] top-[258px] left-[1637.39px] absolute text-[35px] leading-[43.89px] text-left text-underline-offset-[0.1em] text-white">
        50% off
      </p>

      <div className="absolute ">
        <img
          src="/Herosec/image 32.png"
          alt="--"
          className="pl-[70px] w-[387px] h-[387px]"
        />
      </div>

      <div className="ml-[375px] mt-[203px] ">
        <p className={`${lato.className}  text-[#FB2E86] m-0 font-bold `}>
          Best Furniture For Your Castle....
        </p>
        <h1 className="text-[53px] leading-[81.98px] tracking-[0.015em] font-bold text-left underline decoration-transparent pt-[22px] pb-[22px] m-0">
          New Furniture Collection
          <br />
          Trends in 2020
        </h1>
        <p className={`${lato.className} font-bold m-0 text-[#8A8FB9]`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing
          <br />
          in phasellus non in justo.
        </p>
        <div className="mt-[44px]">
          <Link href="../shop">
          <GeneralButton title="Shop Now" />
          </Link>
        </div>
      </div>
      <img
        src="/Herosec/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
        alt="--"
        className="z-10 mt-[99px] ml-[32px] w-[629px] h-[629px]"
      />

      <div className="w-[648px] h-[648px] rounded-full absolute top-[202px] left-[1041px] bg-[#ECD2FA59]"></div>
      <div className="w-[651px] h-[651px] rounded-full absolute top-[161px] left-[1096px] bg-[#ECD2FA59]"></div>

      
    </div>
    <div className="flex gap-4 justify-center ">
  {/* First Diamond */}
  <div className="w-[10px] h-[9.89px] bg-[#FB2E86] transform rotate-45"></div> 

  {/* Second Diamond */}
  <div className="w-[10px] h-[9.89px] transform rotate-45 border border-[#FB2E86]"></div>

  {/* Third Diamond */}
  <div className="w-[10px] h-[9.89px] transform rotate-45 border border-[#FB2E86]"></div>
</div>

    </div>
  );
}
