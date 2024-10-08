"use client";
import { BannerArea } from "./components/homapage/bannerArea";
import { BrandArea } from "./components/homapage/brandArea";
import { SuggestionArea } from "./components/homapage/suggestionArea";
import { AboutAimag } from "./components/homapage/aboutAimar";
import { TravelArea } from "./components/homapage/travelArea";
import { EventArea } from "./components/homapage/eventArea";
import { BeautifulArea } from "./components/homapage/beautifulArea";
import { VideoArea } from "./components/homapage/videoArea";
import { Footer } from "./components/homapage/footer";
import { fetchFunc, putFunc } from "./backdata";
import { DefaultArea } from "./components/homapage/defaultArea";
import { useState, useEffect } from "react";
import urls from "@/lib/urls";
export default function Home() {
  const [data, setdata] = useState();
  const fetchedData = async () => {
    const res = fetchFunc(urls.ABOUTUS);
    const data = await (await res).json();
    setdata(data);
  };
  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <div className=" flex flex-col items-center gap-[60px] ">
      <DefaultArea />
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
