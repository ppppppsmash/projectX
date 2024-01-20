"use client"

import { useState } from "react";
import { Data, CurrentSlideData } from "@/types";
import BackgroundImages from "@/components/Slider/BackgroundImages";

const sliderData = [
  {
    img: "https://placehold.jp/800x800.png",
    location: "Switzrerland Apls",
    description:
      "The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire",
    title: "SAINT ANTÖNEN",
  },
  {
    img: "https://placehold.jp/800x800.png",
    title: "The Grand Canyon",
    description:
      "The earth's geological history opens before your eyes in a mile-deep chasm",
    location: "Arizona",
  },
  {
    img: "https://placehold.jp/800x800.png",
    title: "Masai Mara",
    description:
      "Wild animals in their natural environment, luxury safari lodges",
    location: "Kenya",
  },
  {
    img: "https://placehold.jp/800x800.png",
    title: "Angkor Wat",
    description:
      "A stunning ancient jungle city with hundreds of intricately constructed temples",
    location: "Cambodia",
  },
  {
    img: "https://placehold.jp/800x800.png",
    title: "Bali",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "Indonesia",
  },
];

const initData = sliderData[0];

export default function RootContents() {
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
          <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
            {/* info */}
          </div>

          <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
            Sliders
            Controls
          </div>
        </div>
      </div>
    </div>
  );
}
