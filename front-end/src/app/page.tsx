"use client";
import { BannerArea } from "./components/bannerArea";
import { SuggestionArea } from "./components/suggestionArea";
export default function Home() {
  return (
    <div className="w-full flex justify-center mt-10 ">
      <div className="w-[1143px] flex flex-col items-end">
        <BannerArea/>
        <SuggestionArea/>
      </div>
    </div>
  );
}
