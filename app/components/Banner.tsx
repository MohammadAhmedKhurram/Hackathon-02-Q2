interface banner {
  title: string;
  title2: string;
  heading: string;
  subheading: string;
}

export default function Banner(props: banner) {
  return (
    <div className="h-[286px] w-full bg-[#F6F5FF] text-[#101750] flex items-center">
      <div className="ml-[371px]">
        <h1 className="text-[36px] font-bold leading-[42.19px] mb-1">
          {" "}
          {props.heading}
        </h1>
        <div className="flex ml-[4px]">
          <span className="text-black">
            {props.title}
            <span className="mx-1">.</span>
            {props.title2}
          </span>
          <span className="text-[#FB2E86]">
            <span className="mx-1">.</span>
            {props.subheading}
          </span>
        </div>
      </div>
    </div>
  );
}
