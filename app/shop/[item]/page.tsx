import Banner from "@/app/components/Banner";
import ProductDetailComp from "@/app/components/ProductDetailComp";

export default function Item({ params }: { params: { item: string } }) {
  const items = [
    {
      id: "1",
      name: "Accumsan tincidunt",
      img: "/Rectangle 32.png",
    },
    {
      id: "2",
      name: "In nulla",
      img: "/Rectangle 32 (1).png",
    },
    {
      id: "3",
      name: "Vel sem",
      img: "/Rectangle 32 (2).png",
    },
    {
      id: "4",
      name: "Porttitor cum",
      img: "/Rectangle 32 (3).png",
    },
    {
      id: "5",
      name: "Nunc in",
      img: "/Rectangle 32 (4).png",
    },
    {
      id: "6",
      name: "Vitae facilisis",
      img: "/Rectangle 33.png",
    },
    {
      id: "7",
      name: "Curabitur lectus",
      img: "/Rectangle 32 (5).png",
    },
  ];

  const selectedBlog = items.find((item) => item.id === params.item);

  if (!selectedBlog) {
    return <div>Item not found!</div>;
  }

  return (
    <div className="mb-[132px] overflow-hidden">
      <Banner
        title="Home"
        title2="Pages"
        heading="Product Details"
        subheading="Product Details"
      />
      <ProductDetailComp image={selectedBlog.img} title={selectedBlog.name} />
    </div>
  );
}
