"use client";
import { BannerArea } from "./components/big/bannerArea";
import { SuggestionArea } from "./components/big/suggestionArea";
import { AboutAimag } from "./components/big/aboutAimar";
import { TravelArea } from "./components/big/travelArea";
import { EventArea } from "./components/big/eventArea";
export default function Home() {
  return (
    <div className="w-full flex justify-center mt-10 ">
      <div className="w-[1143px] flex flex-col items-end">
        <BannerArea />
        <SuggestionArea />
        <AboutAimag />
        <TravelArea />
        <EventArea/>
      </div>
    </div>
  );
}
