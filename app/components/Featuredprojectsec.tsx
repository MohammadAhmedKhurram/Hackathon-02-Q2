import CardComponent from "./cardcomponent";

export default function Featuredproductssec() {
  return (
    <div className="">

      <h1 className="text-[42px] flex justify-center mt-[129px] leading-[49.22px] text-left underline-offset-[0.1em] text-[#151875]">
        Featured Products
      </h1>

      <div className="flex justify-center gap-7 mt-12">
        <CardComponent
          image="/FeaturedProducts/image 1168.png"
          title="Cantilever chair"
          code="Code - Y523201"
          price="42.00"
          boxColors={["#28A745", "#FFC107", "#DC3545"]}
        />
        <CardComponent
          image="/FeaturedProducts/image 1.png"
          title="Cantilever chair"
          code="Code - Y523201"
          price="42.00"
          boxColors={["#28A745", "#FFC107", "#DC3545"]}
        />
        <CardComponent
          image="/FeaturedProducts/image 1169.png"
          title="Cantilever chair"
          code="Code - Y523201"
          price="42.00"
          boxColors={["#28A745", "#FFC107", "#DC3545"]}
        />
        <CardComponent
          image="/FeaturedProducts/image 3.png"
          title="Cantilever chair"
          code="Code - Y523201"
          price="42.00"
          boxColors={["#28A745", "#FFC107", "#DC3545"]}
        />
      </div>

      <div className="flex gap-2 justify-center mt-[53px]">
  {/* First Box with color #FB2E86 */}
  <div className="w-[24px] h-[4px] bg-[#FB2E86]"></div>
  
  {/* Second Box with color #FEBAD7 */}
  <div className="w-[24px] h-[4px] bg-[#FEBAD7]"></div>
  
  {/* Third Box with color #FEBAD7 */}
  <div className="w-[24px] h-[4px] bg-[#FEBAD7]"></div>
  
  {/* Fourth Box with color #FEBAD7 */}
  <div className="w-[24px] h-[4px] bg-[#FEBAD7]"></div>
</div>


    </div>
  );
}
