import TopCategotiesCard from "./TopCategoriesCard";

export default function TopCategotySec () {
  return (
    
    <div className="mt-[129px] mb-[100px]">

      <h1 className="text-[42px] flex font-bold justify-center mt-[195px] leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
Top Categories      </h1>
      <div className="flex justify-center ml-[375px] mr-[375px] gap-16 mt-12">
        <TopCategotiesCard
          image="/TopCateg/ad352f97e7cdd9b4848c0ae24630f6ae.png"
          title="Cantilever chair"
          price={26.0}
        />
        <TopCategotiesCard
          image="/TopCateg/22.png"
          title="Cantilever chair"
          price={26.0}
        />
        <TopCategotiesCard
          image="/TopCateg/33.png"
          title="Cantilever chair"
          price={26.0}
        />
        <TopCategotiesCard
          image="/TopCateg/ad352f97e7cdd9b4848c0ae24630f6ae.png"
          title="Cantilever chair"
          price={26.0}
        />

      </div>

      <div className="flex gap-3 justify-center mt-6">
      <div className="w-[10px] h-[10px] bg-[#FB2E86] rounded-full"></div>
      <div className="w-[10px] h-[10px] rounded-full border border-[#FB2E86]"></div>
      <div className="w-[10px] h-[10px] rounded-full border border-[#FB2E86]"></div>

      </div>
      
    </div>
  );
}
