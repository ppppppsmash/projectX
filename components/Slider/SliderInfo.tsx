import { motion } from "framer-motion";
import { Data, CurrentSlideData } from "@/types";
import HeadingInfo from "./HeadingInfo";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SliderInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-yellow-500" />

      <HeadingInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
    </>
  );
}

export default SliderInfo;
