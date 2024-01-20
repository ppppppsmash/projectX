import Head from "next/head";
import Image from "next/image"
import { useState } from "react";
import { motion } from "framer-motion";
//import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";

const menus = [
  "ホーム",
  "執行役員メッセージ",
  "主要事業",
  "取扱商品",
  "会社概要",
  "組織図"
];

function Header() {
  const [active, setActive] = useState(0);

  return (
    <div
      className="absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs
        font-medium uppercase opacity-90 md:px-10 z-50"
    >
      <Head>
        <title>恒佳株式会社</title>
      </Head>

      <div className="flex items-center gap-2 font-medium tracking-[5px]">
        {/* <Image
          width={80}
          height={40}
          alt="Logo"
          src="/images/logo.png"
        /> */}
        <h1 className="text-lg font-semibold">恒佳株式会社</h1>
      </div>
      <ul className="flex flex-wrap items-center gap-3 text-[11px] md:gap-10">
        {menus.map((menu, index) => (
          <motion.li
            layout
            key={index}
            className={` ${
              active == index && " border-b-2 border-b-yellow-500"
            } inline-block cursor-pointer  border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
          >
            {menu}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
