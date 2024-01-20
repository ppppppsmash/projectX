import { motion } from "framer-motion";
//import OtherInfo from "./OtherInfo";
//import { IoMdBookmark } from "react-icons/io";
import { Data, CurrentSlideData } from "@/types";
import HeadingInfo from "./HeadingInfo";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const AnimatedText = ({
  data,
  className,
}: {
  data?: string;
  className?: string;
}) => {
  return (
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <motion.p className={` ${className}`} variants={item} key={data}>
        {data}
      </motion.p>
    </span>
  );
};

function SliderInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className=" mb-2 h-1 w-5 rounded-full bg-white" />

      <HeadingInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />

      <motion.div layout className=" mt-5 flex items-center gap-3">
        <button
          className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-yellow-500 text-xs  transition 
            duration-300 ease-in-out hover:opacity-80 "
        >
          {/* <IoMdBookmark className=" text-xl" /> */}
          Mark
        </button>
        <button
          className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-thin transition duration-300 
            ease-in-out hover:bg-white hover:text-black "
        >
          詳細を閲覧
        </button>
      </motion.div>
    </>
  );
}

export default SliderInfo;
