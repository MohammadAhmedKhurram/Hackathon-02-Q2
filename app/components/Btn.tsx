import { GenButton } from "../types/propsType";

export default function GeneralButton(props: GenButton) {
  return (
    <button
      className={` bg-[#FB2E86] text-[#ECF0F1] border-2 border-[#FB2E86] tracking-[0.020em] font-normal cursor-pointer flex items-center justify-center w-[163px] h-[50px] text-[17px] leading-[19.92px] text-left`}
    >
      {props.title}
    </button>
  );
}
