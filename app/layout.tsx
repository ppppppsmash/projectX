import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderContents from "@/components/HeaderContents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "恒佳株式会社",
  description: "恒佳株式会社, 恒佳株式会社は伊段シリーズは、日本最先端の生産設備、自動化された生産ライン、無菌環境、高品質な品質管理により、最も厳しく、健康的な日本の健康食品を世界にお届けしております。",
  keywords: "伊段,バターコーヒー,北海道鹿角霊芝,ジンジャーミルクティー,サラシア習慣"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} relative`}>
        <HeaderContents />

        {children}
      </body>
    </html>
  );
}
