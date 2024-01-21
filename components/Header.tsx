import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    title: "会社概要",
    link: "/profile"
  },
  {
    title: "取扱商品",
    link: "/product"
  },
  {
    title: "組織図",
    link: "/organization"
  }
];

function Header() {
  const pathname = usePathname()
  //const [active, setActive] = useState<number>(0);
  const [active, setActive] = useState<string>(pathname);

  const activeHandler = (href: string) => {
    setActive(href);
  }

  return (
    <div
      className="absolute py-2 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs
        font-medium uppercase md:px-10 z-50 h-24 md:h-10 bg-white shadow-sm"
    >
      <Head>
        <title>恒佳株式会社</title>
      </Head>

      <div className="flex items-center gap-2 font-medium tracking-normal md:tracking-[5px]">
        <h1 className="text-lg font-semibold">恒佳株式会社</h1>
      </div>

      <ul className="flex flex-wrap items-center gap-3 text-[11px] md:gap-8">
        {menus.map((menu, index) => (
          <motion.li
            layout
            key={index}
            className={`${
              active == menu.link && "border-b-2 border-b-yellow-500"
            }
            inline-block cursor-pointer  border-b-yellow-500 ease-in-out hover:border-b-2
            hover:text-yellow-600 hover:scale-[0.9] duration-300 transition-all`}
            onClick={() => activeHandler(menu.link)}
          >
            <Link
              href={{pathname: menu.link}}
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
