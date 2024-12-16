import Banner from '../components/Banner';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});


export default function ContactUs() {
  return (
    <div>
    <Banner title='Home' title2='Pages' heading='Contact Us' subheading='Contact Us'/>
    <div className="ml-[375px] mr-[375px]">
      <div className="flex mt-[120px]">
        <div>
          <h1 className="text-[36px] leading-[48px] text-left font-bold text-[#151875]">
            Information About us
          </h1>
          <p className={`${lato.className} text-[16px] font-semibold mt-[13px] leading-[25.6px] h-[49px] w-[550px] text-[#8A8FB9] text-left`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <div className="flex gap-3 mt-[70px]">
            <div className="w-[25px] h-[25px] bg-[#5625DF] rounded-full"></div>
            <div className="w-[25px] h-[25px] bg-[#FF27B7] rounded-full"></div>
            <div className="w-[25px] h-[25px] bg-[#37DAF3] rounded-full"></div>
          </div>
        </div>

        <div className="font-semibold text-base text-[#8A8FB9] ml-[117px]">
          <h1 className="text-[36px] leading-[48px] text-left font-bold text-[#151875]">
            Contact Way
          </h1>
          <div className="mt-[26px]">
            <div className="flex">
              <div className="flex items-center gap-[15px]">
                <div className="w-[45px] h-[45px] bg-[#5625DF] rounded-full"></div>

                <div className={`${lato.className} w-[]`}>
                  <p>Tel: 877-67-88-99</p>
                  <p>E-Mail: shop@store.com</p>
                </div>
              </div>

              <div className={`${lato.className} flex items-center ml-[37px] gap-[15px]`}>
                <div className="w-[45px] h-[45px] bg-[#FF27B7] rounded-full"></div>

                <div className={`${lato.className}`}>
                  <p>Support Forum</p>
                  <p>For over 24hr</p>
                </div>
              </div>
            </div>
            <div className="flex mt-[49px]  w-[690px]">
              <div className="flex items-center gap-[15px]">
                <div className="w-[45px] h-[45px] bg-[#FFB265] rounded-full"></div>

                <div className={`${lato.className}`}>
                  <p>20 Margaret st, London</p>
                  <p>Great britain, 3NM98-LK</p>
                </div>
              </div>

              <div className="flex items-center ml-[32px] gap-[15px]">
                <div className="w-[45px] h-[45px] bg-[#1BE982] rounded-full"></div>

                <div className={`${lato.className} `}>
                  <p>Free standard shipping</p>
                  <p>on all orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    <div className='flex'>
      <div className='mt-[152px]'>
      <h1 className="text-[36px] leading-[48px] text-left font-bold text-[#151875]">
      Get In Touch          
      </h1>      
      <p className={`${lato.className} text-[16px] font-semibold mt-[20px] leading-[25.6px] h-[49px] w-[550px] text-[#8A8FB9] text-left`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
          </p>

        <div className={`${lato.className} w-[534px] text-base font-normal mt-[46px] text-[#8A8FB9]`}>
            <div className='flex justify-between'>
                <input type="text" name="" id="" placeholder='Your Name*' required className='border-[1px] h-[45px] w-[255px] p-3'/>
                <input type="email" name="" id="" placeholder='Your E-mail' className='border-[1px] h-[45px] w-[255px] p-3'/>
            </div>
            <input type="text" name="" id="" placeholder='Subject*' required  className='border-[1px] w-full h-[45px] p-3 mt-[34px]'/>
            <textarea 
            name="" 
            id="" 
            placeholder="Type Your Message*" 
            required 
            className="border-[1px] w-full h-[166px] p-3 mt-[47px]"
            />
             
        </div>
        <button
            className="bg-[#FB2E86] text-white border-2 mt-[33px] border-[#FB2E86] text-sm font-normal tracking-[0.020em] rounded-[3px] cursor-pointer flex items-center justify-center h-[44px] w-[157px] text-[16px] leading-[25.6px] text-left"
          >
            Send Mail
          </button>
      </div>
      <img src="/Group 124.png" alt="--" className='mt-[120px] mb-[239px]'/>
      </div>



    </div>
    </div>
  );
}
