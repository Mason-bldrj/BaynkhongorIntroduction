"use client";
import { fetchFunc } from "@/app/backdata";
import { BannerArea } from "@/app/components/homapage/bannerArea";
import { SuggestionArea } from "@/app/components/homapage/suggestionArea";
import { NewsVideoArea } from "@/app/components/newspage/newsVideoArea";
import { TailanArea } from "@/app/components/newspage/tailanArea";
import { bplace } from "@/app/data";
import { OrangeBourd } from "@/app/components/detail/orengeBourd";
import urls from "@/lib/urls";
export default function News() {
  const data = fetchFunc(urls.NEWS);
  console.log(data);
  return (
    <div className="w-full flex flex-col items-center justify-between gap-10">
      <BannerArea />
      <SuggestionArea />
      <TailanArea />
      <NewsVideoArea />
    </div>
  );
}
