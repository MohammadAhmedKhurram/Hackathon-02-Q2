import Cart from "@/app/components/Shopping-Cart";
import Banner from "../components/Banner";
import Link from "next/link";

export default function ShoppingCart() {
  return (
    <div className="mb-[145px]">
      <Banner
        title="Home"
        title2="Pages"
        heading="Shopping Cart"
        subheading="Shopping Cart"
      />

      <div className="flex gap-20 mt-[131px] flex-wrap justify-center">
        <div className="">
          <div className="flex max-w-[335px] md:max-w-[670px] text-[12px] md:text-[20px] text-[#1D3178] font-bold ">
            <h1 className="w-[285px]">Product</h1>
            <div className="flex gap-[25px] md:gap-[85px] ml-8">
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>Total</h1>
            </div>
          </div>
          <div className="mt-[48px]">
            <Cart
              name="Ut diam consequat"
              color="Brown"
              size="XL"
              price={49.99}
              quantity={2}
              image="/Cart/Rectangle 34.png"
              total={219}
            />
            <Cart
              name="Vel faucibus posuere"
              color="Brown"
              size="XL"
              price={49.99}
              quantity={2}
              image="/Cart/Rectangle 35.png"
              total={219}
            />
            <Cart
              name="Ac vitae vestibulum"
              color="Brown"
              size="XL"
              price={49.99}
              quantity={2}
              image="/Cart/Rectangle 36.png"
              total={219}
            />
            <Cart
              name="Elit massa diam"
              color="Brown"
              size="XL"
              price={49.99}
              quantity={2}
              image="/Cart/Rectangle 37.png"
              total={219}
            />
            <Cart
              name="Proin pharetra elementum"
              color="Brown"
              size="XL"
              price={49.99}
              quantity={2}
              image="/Cart/Rectangle 38.png"
              total={219}
            />
          </div>
          <div className="flex w-[335px] md:w-[673px] justify-between mt-0 ">
            <Link href="../shop">
              <button className="bg-[#FB2E86] text-white border-2 mt-[20px] border-[#FB2E86] text-xs md:text-sm font-semibold tracking-[0.020em] rounded-[3px] cursor-pointer flex items-center justify-center h-[39px] w-[100px] md:w-[134px] text-[17px] leading-[19.92px] text-left">
                Update Cart
              </button>
            </Link>
            <Link href="../shop">
              <button className="bg-[#FB2E86] text-white border-2 mt-[20px] border-[#FB2E86] text-xs md:text-sm font-semibold tracking-[0.020em] rounded-[3px] cursor-pointer flex items-center justify-center h-[39px] w-[100px] md:w-[134px] text-[17px] leading-[19.92px] text-left">
                Clear Cart
              </button>
            </Link>
          </div>
        </div>

        <div className="items-center flex-col text-center ">
          <div>
            <h1 className="text-[20px] text-[#1D3178] font-bold">
              Cart Totals
            </h1>

            <div className=" w-[371px] h-[284px] bg-[#F4F4FC] py-[30px] px-[20px] mt-[48px]">
              <div className="flex justify-between text-lg font-semibold text-[#1D3178]">
                <h1>Subtotals:</h1>
                <span className="font-normal text-base">
                  <p>£219.00</p>
                </span>
              </div>
              <hr className="mt-1 border-t-[2px]" />

              <div className="flex justify-between text-lg font-semibold text-[#1D3178] mt-[30px]">
                <h1>Totals:</h1>
                <span className="font-normal text-base">
                  <p>£219.00</p>
                </span>
              </div>
              <hr className="mt-1 border-t-[2px]" />

              <div className="flex items-center text-xs font-normal gap-1 mt-[25px]">
                <img
                  src="/uil_check.png"
                  alt="--"
                  className="w-[8px] h-[8px]"
                />
                <p className="text-[#8A91AB]">
                  Shipping & taxes calculated at checkout
                </p>
              </div>

              <Link href="../order-completed">
                <button className="bg-[#19D16F] text-white border-2 mt-[35px] border-[#19D16F] text-xs md:text-sm font-semibold tracking-[0.020em] rounded-[3px] cursor-pointer flex items-center justify-center w-full h-[40px] text-[17px] leading-[19.92px] text-left">
                  Proceed To Cheakout
                </button>
              </Link>
            </div>
          </div>

          <div>
            <h1 className="text-[20px] text-[#1D3178] font-bold mt-[24px] mb-[24px]">
              Cart Totals
            </h1>

            <div className=" w-[371px] h-[284px] bg-[#F4F4FC] py-[30px] px-[20px] text-[#C5CBE3] ">
              <div className="flex justify-between text-sm font-semibold ">
                <h1 className="">Bangladesh</h1>
              </div>
              <hr className="mt-1 border-t-[2px]" />

              <div className="flex justify-between text-sm font-semibold  mt-[30px]">
                <h1>Mirpur Dhaka - 1200</h1>
              </div>
              <hr className="mt-1 border-t-[2px]" />

              <div className="flex justify-between text-sm font-semibold  mt-[30px]">
                <h1>Postal Code</h1>
              </div>
              <hr className="mt-1 border-t-[2px]" />
              <Link href="../order-completed">
                <button className="bg-[#FB2E86] text-white border-2 mt-[35px] border-[#FB2E86] text-xs md:text-sm font-semibold tracking-[0.020em] rounded-[3px] cursor-pointer flex items-center justify-center h-[41px] w-[179px] text-[17px] leading-[19.92px] text-left">
                  Calculate Shipping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
