"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import image1 from "/images/about/about_pic1.jpg";
import image2 from "/images/about/about_pic2.jpg";
import image3 from "/images/about/about_pic3.jpg";
import image4 from "/images/about/about_pic4.jpg";
import image5 from "/images/about/about_pic5.jpg";
import image6 from "/images/about/about_pic6.jpg";

const images = [image1, image2, image3, image4, image5, image6]
const alts = [
  "恒佳について1",
  "恒佳について2",
  "恒佳について3",
  "恒佳について4",
  "恒佳について5",
  "恒佳について6",
]

export function AboutPhoto() {
  const [width, setWidth] = React.useState(0);
  const [isCompact, setIsCompact] = React.useState(false);
  const expandedWidth = React.useMemo(() => width * 1.38, [width]);

  React.useEffect(() => {
    const handleResize = () => {
      // 640px is the breakpoint for md
      if (window.innerWidth < 640) {
        setIsCompact(true);
        return setWidth(window.innerWidth / 2 - 64);
      }

      setWidth(window.innerWidth / images.length - 4 * images.length);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.925, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 0.5,
        type: "spring",
      }}
    >
      <div
        className="-my-4 flex w-full snap-x snap-proximity scroll-pl-4 justify-start gap-4 overflow-x-auto px-4 py-4
          sm:gap-6 md:justify-center md:overflow-x-hidden md:px-0"
      >
        {images.map((image, idx) => (
          <motion.div
            key={image.src}
            className="relative h-40 flex-none shrink-0 snap-start overflow-hidden rounded-xl
            bg-zinc-100 ring-2 ring-lime-800/20 dark:bg-zinc-800 dark:ring-lime-300/10 md:h-60 md:rounded-3xl"
            animate={{
              width,
              opacity: isCompact ? 1 : 0.85,
              filter: isCompact ? "grayscale(0)" : "grayscale(0.5)",
            }}
            whileHover={
              isCompact
                ? {}
                : {
                    width: expandedWidth,
                    opacity: 1,
                    filter: "grayscale(0)",
                  }
            }
            layout
          >
            <Image
              src={image}
              alt={alts[idx] ?? ""}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
              priority
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}