"use client";
import { BannerArea } from "../components/homapage/bannerArea";
import { SuggestionArea } from "../components/homapage/suggestionArea";
import { AboutAimag } from "../components/homapage/aboutAimar";
import { TravelArea } from "../components/homapage/travelArea";
import { EventArea } from "../components/homapage/eventArea";
import { BeautifulArea } from "../components/homapage/beautifulArea";
import { BrandArea } from "../components/homapage/brandArea";
import { VideoArea } from "../components/homapage/videoArea";
import { Footer } from "../components/homapage/footer";
import { fetchFunc } from "../backdata";
import urls from "@/lib/urls";
import { useState } from "react";
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <BannerArea />
      <SuggestionArea />
      <AboutAimag />
      <TravelArea />
      <EventArea />
      <BeautifulArea />
      <BrandArea />
      <VideoArea />
      <Footer />
    </div>
  );
}
