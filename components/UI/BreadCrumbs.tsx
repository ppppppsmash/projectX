"use client"

import { usePathname } from "next/navigation";
import { IoMdHome, IoIosArrowForward } from "react-icons/io";

import { menus } from "@/data";

function BreadCrumbs() {
  const pathname = usePathname();

  const currentMenuItem = menus.find((menu) => menu.link === pathname);

  return (
    <div className="px-5 md:px-10 pt-12">
      <nav className="flex">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center text-[10px]">
            <a href="/" className="gap-x-1 inline-flex items-center font-medium text-gray-700 hover:text-gray-400 duration-300">
              <IoMdHome className="h-3 w-3" />
              ホーム
            </a>
          </li>
          {currentMenuItem && (  
            <li className="text-[10px]">
              <p className="flex items-center">
                <IoIosArrowForward />
                <a href="#" className="ms-1 font-medium text-gray-700 md:ms-2">
                  {currentMenuItem.title}
                </a>
              </p>
            </li>
          )}
        </ol>
      </nav>
    </div>
  )
}

export default BreadCrumbs;