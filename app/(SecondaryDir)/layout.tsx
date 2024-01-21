import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderContents from "@/components/HeaderContents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "恒佳株式会社｜商品詳細リスト",
};

export default function SecondLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="relative">
        <HeaderContents />

        <main className="max-w-[1000px] mx-auto px-5 md:px-[120px] pt-[120px]">
          {children}
        </main>
      </body>
    </html>
  );
}
