import { FaPenNib, FaRegCalendarAlt } from "react-icons/fa";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function BlogCardRoute (props:Blogcardroutetype) {
    return (
        <div
        className="w-[870px]">
           <img src={props.img} alt="-" className="w-full h-453px"/>

           <div className="flex items-center justify-between w-[360px] mt-[27px]">
         {/* Author */}
         <div className="flex items-center gap-2 text-[#151875]">
           <FaPenNib className="text-[#FB2E86] w-[11.33px] h-[11.33px]" />
           <span className="font-medium w-[160px] h-[23px] text-sm bg-[#FFE7F9] flex justify-center items-center">Surf Auxion</span>
         </div>

         {/* Date with Calendar Icon */}
         <div className="flex items-center gap-2 text-[#151875]">
           <FaRegCalendarAlt className="text-[#FFA454] w-[16px] h-[16px]"/>
           <span className="text-sm font-medium bg-[#FFECE2] w-[127px] h-[23px] flex justify-center items-center">Aug 09 2020</span>
         </div>
       </div>
       <h3 className="text-[30px] text-[#151875] font-bold leading-[30px] text-left mt-[28px]">{props.heading}</h3>
       <p className={` ${lato.className} text-[#8A8FB9] text-[16px] font-normal leading-[25.6px] text-left mt-[23px] mb-[23px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
       <p className={` ${lato.className} items-center flex text-[#151875] text-[18px] font-semibold leading-[21.6px] text-left w-[100px] h-[22px] mb-[50px]`}>
       Read More
       <span className="inline-block w-[5px] h-[5px] rounded-full bg-[#FB2E86] ml-1"></span>
       </p>
       </div>
    )
}