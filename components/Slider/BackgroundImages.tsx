import React from "react";
import { motion } from "framer-motion";
import { Data, CurrentSlideData } from "@/types";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function BackgroundImage({ transitionData, currentSlideData }: Props) {
  return (
    <div>
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className="absolute left-[1%] z-10 bottom-[1%] h-[92%] w-[98%] object-cover brightness-[0.4] rounded-md"
          src={transitionData.img}
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
        className="absolute left-1/2 bottom-[1%] -translate-x-1/2 h-[92%] w-[98%] object-cover brightness-[0.4] rounded-md"
      />
    </div>
  );
}

export default BackgroundImage;
