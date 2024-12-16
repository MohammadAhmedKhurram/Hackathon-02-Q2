import Link from "next/link";
import Banner from "../components/Banner";

export default function Shop () {

    const ids: string[] = ["1", "2", "3", "4", "5", "6", "7"]

    return (
        <div className="mb-[132px]">
            <Banner title="Home" title2="Pages" heading="Shop List" subheading="Shop List"/>
            <div className="">
                <div className="">
                    <img src="/page sort by.png" alt="--" className="mt-[124px] ml-[374px]"/>
                    <div className=" ml-[340px] mt-[37px]">
                    <Link href={`/shop/${ids[0]}`}><img src="/Group 187.png" alt="" /></Link>
                    <Link href={`/shop/2`}><img src="/Group 188.png" alt="" /></Link>
                    <Link href={`/shop/3`}><img src="/Group 189.png" alt="" /></Link>
                    <Link href={`/shop/4`}><img src="/Group 190.png" alt="" /></Link>
                    <Link href={`/shop/5`}><img src="/Group 191.png" alt="" /></Link>
                    <Link href={`/shop/6`}><img src="/Group 192.png" alt="" /></Link>
                    <Link href={`/shop/7`}><img src="/Group 193.png" alt="" /></Link>
                    </div>
                    <div className="w-full flex justify-center mt-[234px]">
                    <img src="/image 1175.png" alt="--" className="max-w-full h-auto" />
            </div>

                </div>
            </div>
        </div>
    )
}