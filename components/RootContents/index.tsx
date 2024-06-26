"use client"

import { useState, Fragment } from "react";
import { Data, CurrentSlideData } from "@/types";
import { sliderData } from "@/data"
import BackgroundImages from "@/components/Slider/BackgroundImages";
import SliderCard from "../Slider/SliderCard";
import Controls from "../Slider/Controls";
import SliderInfo from "../Slider/SliderInfo";
import { useEffect } from "react";

const initData = sliderData[0];

export default function RootContents() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [data, setData] = useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState<Data>(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({
    data: initData,
    index: 0,
  });

  return (
    <div>
      <BackgroundImages
        transitionData={transitionData}
        currentSlideData={currentSlideData}
      />

      <div className="absolute z-20 h-full w-full">
        <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
          <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-[10%]">
            <SliderInfo
              transitionData={transitionData}
              currentSlideData={currentSlideData}
            />
          </div>

          <div className="col-span-6 flex md:h-full flex-2 flex-col justify-end px-4 py-8 md:justify-end md:px-[10%] md:py-[6%]">
            <div className="hidden sm:flex w-full gap-6">
            {data.map((data) => (
              <SliderCard key={data.img} data={data} />
            ))}
            </div>

            <div className="flex sm:hidden w-full gap-6">
            {data.map((data) => (
              data.id != "0" &&
              <SliderCard key={data.img} data={data} />
            ))}
            </div>
            
            <Controls
              currentSlideData={currentSlideData}
              data={data}
              transitionData={transitionData}
              initData={initData}
              handleData={setData}
              handleTransitionData={setTransitionData}
              handleCurrentSlideData={setCurrentSlideData}
              sliderData={sliderData}
            />
          
          </div>
        </div>
      </div>
    </div>
  );
}
