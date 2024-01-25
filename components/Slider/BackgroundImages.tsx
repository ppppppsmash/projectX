import React from "react";
import { motion } from "framer-motion";
import { Data, CurrentSlideData } from "@/types";
import { useRef } from "react";
import { useEffect } from "react";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function BackgroundImage({ transitionData, currentSlideData }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
}, []);

  return (
    <div>
      {transitionData && transitionData.id == "0" ? (
        <motion.div
          className="absolute left-[2%] z-10 top-[10%] h-[90%] w-[96%] object-cover brightness-[0.4]
            rounded-md overflow-hidden"
        >
          <video
            className="scale-[6] sm:scale-[1]"
            muted
            ref={videoRef}
          >
            <source
              src={transitionData.img}
              type="video/mp4"
            />
          </video>
        </motion.div>
      ) : (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className="absolute left-[2%] z-10 bottom-[4%] h-[84%] w-[96%] object-cover brightness-[0.4] rounded-md"
          src={transitionData.img}
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
        className="absolute left-1/2 bottom-[4%] -translate-x-1/2 h-[84%] w-[96%] object-cover brightness-[0.4] rounded-md"
      />
    </div>
  );
}

export default BackgroundImage;
