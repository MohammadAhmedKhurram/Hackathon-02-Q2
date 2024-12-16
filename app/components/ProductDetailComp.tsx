import { CiHeart } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

export default function ProductDetailComp(props: {image: string, title: string}) {
  return (
    <div className="mt-[121px]">
      <div className="w-[1770px] h-[509px] flex ml-[375px]">
        <div className="p-3">
          <img src={props.image} alt="--" className="w-530px h-full" />
        </div>
        <div className="flex flex-col justify-center ml-[41px]">
          <h1 className="text-[36px] leading-[42.19px] underline-offset-[0.625em] text-[#0D134E]">
            {props.title}
          </h1>
          <div className="flex gap-1 items-center">
            <img src="/Group 236.png" alt="--" />
            <p className="text-[14px] leading-[29px] text-left underline underline-offset-[0.625em]">
              (22)
            </p>
          </div>
          <div className="flex mt-[14px] gap-4">
            <img src="/$32.00.png" alt="--" />
            <img src="/$32.00 (1).png" alt="--" />
          </div>
          <h4 className="text-[16px] leading-[18.75px] underline-offset-[0.625em] mt-[12px] text-[#151875]">
            Color
          </h4>
          <p className="text-[18px] leading-[29px] text-left underline-offset-[0.625em] mt-[12px] text-[#A9ACC6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus <br /> porttitor purus, et volutpat sit.
          </p>
          <div className="flex text-[#151875] mt-[16px] items-center gap-3">
            <h4 className="text-[16px] leading-[29px] text-left underline-offset-[0.625em] ml-[115px]">
              Add To Cart
            </h4>
            <CiHeart className="w-[31px] h-[31px]" />
          </div>
          <h4 className="text-[16px] leading-[29px] text-left underline-offset-[0.625em] mt-[17px] text-[#151875]">
            Categories:
          </h4>
          <h4 className="text-[16px] leading-[29px] text-left underline-offset-[0.625em] mt-[10px] text-[#151875]">
            Tags
          </h4>
          <div className="flex items-center gap-2 mt-[10px]">
            <h4 className="text-[16px] leading-[29px] text-left underline-offset-[0.625em] text-[#151875]">
              Share
            </h4>
            <img src="/Group 205.png" alt="--" />
          </div>
        </div>
      </div>

      <div className="ml-[375px] text-[#151875]">
        <ul className="flex items-center mt-[238px] gap-32 font-semibold">
          <li className="text-[24px] leading-[28.13px] text-left underline decoration-solid ">
            Description
          </li>
          <li className="text-[24px] leading-[28.13px] text-left  decoration-solid underline-offset-[0.625em]">
            Additional Info
          </li>
          <li className="text-[24px] leading-[28.13px] text-left  decoration-solid underline-offset-[0.625em]">
            Reviews
          </li>
          <li className="text-[24px] leading-[28.13px] text-left  decoration-solid underline-offset-[0.625em]">
            Video
          </li>
        </ul>
        <h3 className="text-[22px] leading-[25.78px] text-left mt-[61px] font-semibold">
          Varius tempor.
        </h3>
        <p className="text-[16px] leading-[29px] text-left mt-[14px] text-[#A9ACC6]">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
          ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
          varius ac est bibendum. <br /> Scelerisque a, risus ac ante. Velit
          consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
          consequat laoreet diam tincidunt. Magna eget faucibus <br /> cras
          justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu,
          nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec.
          Dui, massa viverr .
        </p>
        <h3 className="text-[22px] leading-[25.78px] text-left mt-[36px] font-semibold">
          More details
        </h3>
        <div className="mt-[16px] text-[#A9ACC6]">
          <div className="flex items-center mb-[14px] gap-2">
            <FaArrowRight className=" text-black" />
            <p className="text-[16px] leading-[29px] text-left">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
          <div className="flex items-center mb-[14px] gap-2">
            <FaArrowRight className=" text-[#2F1AC4]" />
            <p className="text-[16px] leading-[29px] text-left">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
          <div className="flex items-center mb-[14px] gap-2">
            <FaArrowRight className=" text-black" />
            <p className="text-[16px] leading-[29px] text-left">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaArrowRight className=" text-black" />
            <p className="text-[16px] leading-[29px] text-left">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
        </div>
        <h1 className="text-[36px] leading-[42.19px] font-bold mt-[248px]">
          Related Products
        </h1>
        <div className="flex gap-[30px] mt-[47px]">
          <div>
            <img src="/item/Rectangle 129.png" alt="--" />
            <div className="flex justify-between items-center mt-[20px]">
              <p>Mens Fashion Wear</p>
              <img src="/Group 236.png" alt="--" />
            </div>
            <p className="mt-[15px]">$43.00</p>
          </div>
          <div >
            <img src="/item/Rectangle 133.png" alt="--" />
            <div className="flex justify-between items-center mt-[45px]">
              <p>Women’s Fashion</p>
              <img src="/Group 236.png" alt="--" />
            </div>
            <p className="mt-[15px]">$67.00</p>
          </div>
          <div>
            <img src="/item/Rectangle 130.png" alt="--" />
            <div className="flex justify-between items-center mt-[20px]">
              <p>Wolx Dummy Fashion</p>
              <img src="/Group 236.png" alt="--" />
            </div>
            <p className="mt-[15px]">$67.00</p>
          </div>
          <div>
            <img src="/item/Rectangle 131.png" alt="--" />
            <div className="flex justify-between items-center mt-[20px]">
              <p>Top Wall Digital Clock</p>
              <img src="/Group 236.png" alt="--" />
            </div>
            <p className="mt-[15px]">$51.00</p>
          </div>
          {/* <img src="/image 1174.png" alt="--" /> */}
        </div>
        
      </div>
      <div className="w-full">
      <div className="flex justify-center mt-[128px]">
      <img src="/image 1174.png" alt="--" />
      </div>
      </div>
    </div>
  );
}
