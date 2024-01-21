"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { sliderData } from "@/data";

export default function ProductContents() {
  const router = useRouter();
  const clickDetail = (href: string) => {
    router.push(href);
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-wrap max-w-full mx-auto">
      {sliderData.map((data, index) => (
      <div
        key={index}
        className="px-2 py-3 w-full h-[220px] md:w-full md:h-[300px] md:max-w-[280px] mx-auto
          bg-white hover:bg-gray-100 rounded-lg md:px-4 flex flex-col gap-1 cursor-pointer shadow-lg hover:shadow-none
          transition-shadow"
        onClick={() => clickDetail(`/product/${data.id}`)}
      >
        <div className="w-full h-[110px] relative rounded-md mx-auto bg-white flex items-center justify-center overflow-hidden">
          <Image
            width={200}
            height={40}
            alt="product"
            src={data.img}
          />
        </div>

        <div className="max-w-full mx-auto">
          <p className="w-full truncate max-w-full text-center mx-auto mt-2 md:mt-4 text-[12px] md:text-[14px] font-semibold">{data.title}</p>
          <p className="w-full max-w-full text-left mx-auto mt-2 md:mt-4 text-[10px] md:text-[12px]">{data.description}</p>
        </div>
      </div>
      ))}
    </div>
  )
}