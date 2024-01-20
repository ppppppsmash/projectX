import Head from "next/head";
import Image from "next/image"
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const menus = [
  {
    title: "ホーム",
    link: "/"
  },
  {
    title: "執行役員メッセージ",
    link: "/about"
  },
  {
    title: "主要事業",
    link: "/business"
  },
  {
    title: "会社概要",
    link: "/profile"
  },
  {
    title: "組織図",
    link: "/organization"
  }
];

function Header() {
  const [active, setActive] = useState<number>(0);

  const activeHandler = (index: number) => {
    setActive(index);
  }

  return (
    <div
      className="absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs
        font-medium uppercase opacity-90 md:px-10 z-50"
    >
      <Head>
        <title>恒佳株式会社</title>
      </Head>

      <div className="flex items-center gap-2 font-medium tracking-[5px]">
        <h1 className="text-lg font-semibold">恒佳株式会社</h1>
      </div>

      <ul className="flex flex-wrap items-center gap-3 text-[11px] md:gap-8">
        {menus.map((menu, index) => (
          <motion.li
            layout
            key={index}
            className={`${
              active == index && "border-b-2 border-b-yellow-500"
            }
            inline-block cursor-pointer  border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2
            hover:text-white hover:scale-[0.9] duration-300 transition-all`}
            onClick={() => activeHandler(index)}
          >
            <Link
              href={menu.link}
            >
              {menu.title}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
