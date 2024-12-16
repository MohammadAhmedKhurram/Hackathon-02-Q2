import BlogsCard from "./BlogCard"

export default function BlogsSec () {
    return (
        <div className="mb-[115px]">

        <h1 className="text-[42px] flex justify-center mt-[129px] leading-[49.22px] text-left font-bold underline-offset-[0.1em] text-[#151875]">
         Leatest Blog
        </h1>
  
        <div className="flex justify-center gap-16 mt-20">
          <BlogsCard
            image="/Blogs/1.png"
            title="Top esssential Trends in 2021"
            author="SaberAli"
            date="21 August,2020"
            description="More off this less hello samlande lied much
            over tightly circa horse taped mightly"
            subHeading="Read More"
          />
          <BlogsCard
            image="/Blogs/2.png"
            title="Top esssential Trends in 2021"
            author="Surfauxion"
            date="21 August,2020"
            description="More off this less hello samlande lied much
            over tightly circa horse taped mightly"
            subHeading="Read More"
          />
          <BlogsCard
            image="/Blogs/3.png"
            title="Top esssential Trends in 2021"
            author="SaberAli"
            date="21 August,2020"
            description="More off this less hello samlande lied much
            over tightly circa horse taped mightly"
            subHeading="Read More"
          />
        </div>
  
      </div>
  );
}
