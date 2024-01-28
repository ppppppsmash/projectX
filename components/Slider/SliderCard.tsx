import { motion } from "framer-motion";

type Props = {
  data: any;
};

function SliderCard({ data }: Props) {
  return (
    <motion.div
      className="relative h-[180px] min-w-[140px] rounded-2xl shadow-md md:h-56 md:min-w-[160px]"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      {data.id != "0" &&
      <motion.div>
        <motion.img
          layoutId={data.img}
          alt="Transition Image"
          src={data.img}
          className="absolute h-full w-full rounded-2xl object-cover brightness-75"
        />

        <motion.div className="absolute z-10 flex h-full items-end p-4">
          <motion.div>
            <motion.div
              layout
              className="mb-2 h-[2px] w-3 rounded-full bg-yellow-400"
            ></motion.div>
            <motion.p layoutId={data.feature} className="text-xs text-[#D5D5D6]">
              {data.feature}
            </motion.p>
            <motion.h1
              layoutId={data.title}
              className="text-sm leading-6 text-white"
            >
              {data.title}
            </motion.h1>
          </motion.div>
        </motion.div>
      </motion.div>
      }
    </motion.div>
  );
}

export default SliderCard;
