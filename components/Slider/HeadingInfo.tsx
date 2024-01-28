import { motion } from "framer-motion";
import Link from "next/link";
import { LuMousePointerClick } from "react-icons/lu";
import { useRouter } from "next/navigation";

type Props = {
  data: any;
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

function HeadingInfo({ data }: Props) {
  const router = useRouter();
  const clickDetail = (href: string) => {
    router.push(href)
  }

  return (
    <>
      <motion.div initial="hidden" animate={"visible"} className=" flex flex-col">
        <AnimatedText
          className="spacing overflow-hidden text-[#D5D5D6] text-sm"
          data={data?.feature}
        />
        <AnimatedText
          className=" my-1 text-lg font-semibold md:my-3 md:text-lg md:leading-[50px]"
          data={data?.title}
        />
        <AnimatedText
          className=" text-xs text-[#D5D5D6]"
          data={data?.description}
        />
      </motion.div>

      {data.id != "0" &&
        <motion.div layout className="mt-5 flex items-center gap-3">
          <button
            className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-5 py-2 text-[10px] font-thin transition duration-300 
              ease-in-out hover:bg-white hover:text-black flex items-center gap-x-2 group"
            onClick={() => clickDetail(`product/${data.id}`)}
          >
            <span>詳細を閲覧</span>
            <LuMousePointerClick className="text-yellow-400 w-5 h-5 group-hover:animate-ping" />
          </button>
        </motion.div>
      }
    </>
  );
}

export default HeadingInfo;