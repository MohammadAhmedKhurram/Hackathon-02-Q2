import Image from "next/image";
import Btn from "./Btn";
import GeneralButton from "./Btn";

export default function Herosec() {
  return (
    <div className="h-[784px] bg-[#F2F0FF] flex">

<img src="/Vector 14.png" alt="--" className="absolute top-[216px] left-[1572px]"/>
<p className="w-[69px] h-[74px] top-[258px] left-[1615.39px] absolute text-[35px] leading-[43.89px] text-left text-underline-offset-[0.1em] text-[#FFF]">50%
 off</p>

        
      <div className="absolute ">
        <img src="/Herosec/image 32.png" alt="--" className="pl-[70px] w-[387px] h-[387px]"/>
        {/* <Image
          src="/Herosec/image 32.png"
          alt="--"
          width={387}
          height={387}
          className="pl-[70px]"
        ></Image> */}
      </div>

      <div className="ml-[375px] mt-[203px] ">
        <p className=" text-[#FB2E86] m-0 font-extrabold ">Best Furniture For Your Castle....</p>
        <h1 className="text-[53px] leading-[81.98px] tracking-[0.015em] text-left underline decoration-transparent pt-[22px] pb-[22px] m-0">
          New Furniture Collection<br/>Trends in 2020
        </h1>
        <p className="font-bold m-0 text-[#8A8FB9]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing<br/>in phasellus non in justo.
        </p>
        <div className="mt-[44px]">        <GeneralButton title="Shop Now"/>
</div>
      </div>
        <img src="/Herosec/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png" alt="--" className="z-10 mt-[99px] ml-[32px] w-[629px] h-[629px]" />

        <div className="w-[648px] h-[648px] rounded-full absolute top-[202px] left-[1041px] bg-[#ECD2FA59]"></div>
<div className="w-[651px] h-[651px] rounded-full absolute top-[161px] left-[1096px] bg-[#ECD2FA59]"></div>
    </div>
  );
}
