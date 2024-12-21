export default function Cart(props: {
  image: string;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  total: number;
}) {
  return (
    <div className="max-w-[335px] md:max-w-[670px]">
      <div className="flex items-center gap-[5px] md:gap-[17px]">
        <div>
          <img src={props.image} alt="Image" className="w-[83px] h-[87px]" />
        </div>

        <div className="w-[90px] md:w-[183px]">
          <h1 className="text-xs md:text-sm leading-[16.41px] text-left font-bold">
            {props.name}
          </h1>
          <p className="text-[#A1A8C1] text-[10px] md:text-[12px] leading-[16.41px] text-left mt-0 md:mt-1 mb-0 md:mb-[2px]">
            Color: <span className="text-sm">{props.color}</span>
          </p>
          <p className="text-[#A1A8C1] text-[10px] md:text-[12px] leading-[16.41px] text-left">
            Size: <span className="text-sm">{props.size}</span>
          </p>
        </div>

        <div className="flex gap-[35px] md:gap-32 ml-0 md:ml-8">
          <div className="text-[12px] md:text-sm text-[#15245E]">
            ${props.price}
          </div>

          <div className="text-[12px] md:text-sm text-[#15245E]">
            {props.quantity}
          </div>

          <div className="text-[12px] md:text-sm text-[#15245E]">
            £{props.total}.00
          </div>
        </div>
      </div>

      <hr className="mt-[15px] mb-[15px]" />
    </div>
  );
}
