export default function Cart(props: {image: string, name: string, color: string, size: string, price: number, quantity: number, total: number}) {
  return (
    <div className="ml-[375px] max-w-[670px]">
      <div className="flex items-center gap-[17px]">
        <div>
          <img src={props.image} alt="Image" className="w-[83px] h-[87px]" />
        </div>

        <div className="w-[183px]">
          <h1 className="text-sm leading-[16.41px] text-left font-bold">
            {props.name}
          </h1>
          <p className="text-[#A1A8C1] text-[12px] leading-[16.41px] text-left mt-1 mb-[2px]">
            Color: <span className="text-sm">{props.color}</span>
          </p>
          <p className="text-[#A1A8C1] text-[12px] leading-[16.41px] text-left">
            Size: <span className="text-sm">{props.size}</span>
          </p>
        </div>

        <div className="flex gap-32 ml-8">
          <div className="text-sm text-[#15245E]">${props.price}</div>

          <div className="text-sm text-[#15245E]">{props.quantity}</div>

          <div className="text-sm text-[#15245E]">£{props.total}.00</div>
        </div>
      </div>

      <hr className="mt-[15px] mb-[15px]" />
    </div>
  );
}
