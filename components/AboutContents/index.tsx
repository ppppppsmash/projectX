"use client"

import { AboutPhoto } from "@/components/UI/AboutPhoto";

export default function AboutContents() {
  
  return (
    <div className="my-5">
      <div className="sm:absolute z-50 left-0 top-[24%]">
        <AboutPhoto />
      </div>
      
      <div className="mt-10 md:mt-[45%] text-[12px] sm:text-[14px] leading-6">
        <p>恒佳株式会社は2012年7月24日（平成24年）に設立し、この十年間にわたり、「美」「健康」「ゆとり」「時代の空気」などの側面からお客さまの暮らしの質的向上を応援するという理念を貫いており、日本の健康食品、漢方薬、化粧品を世界の方々にお求めやすい価格でお届けすることを約束します。</p>
        <br />
        今年で10年目を迎える恒佳株式会社は、「みんなの人生の段階ごとに健康で美しくいるように」を企業理念としております。 自社が伊段シリーズを開発し始めまして、弊社の中核ブランドである伊段シリーズは、日本の健康食品をより便利で効果的な方式で皆様にお届けし、世界中の人々がより効果的に健康を増進し、楽しい生活を送ることができるようにするための製品なので、
        <br />日本最先端の生産設備、自動化された生産ライン、無菌環境、高品質な品質管理により、最も厳しく、健康的な日本の健康食品を世界にお届けしております。
        <p className="mt-8 text-right font-bold text-lg">2022年4月1日</p>
      </div>
    </div>
  )
}