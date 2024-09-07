"use client";
import { fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { BannerArea } from "@/app/components/homapage/bannerArea";
import { EventCard } from "@/app/components/detail/evenCard";
import { OrangeBourd } from "@/app/components/detail/orengeBourd";
import { bplace } from "@/app/data";
import { ArrowButtons2 } from "@/app/components/detail/arrowButtons";
import { useState } from "react";
export default function Event() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 1;
  const handleNext = () => {
    if (startIndex + visibleCount < bplace.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  const data = fetchFunc(urls.EVENT);
  console.log(data);

  return (
    <div className="w-full sm:w-[90%] xl:w-[1148px]  flex flex-col items-center justify-between gap-5 sm:mt-0 mt-5 md:gap-10 ">
      <BannerArea />
      <div className="w-full flex justify-start">
        {" "}
        <OrangeBourd data={"ЭВЕНТ , АРГА ХЭМЖЭЭ"} />
      </div>
      <div className="flex sm:gap-2 xl:gap-0 xl:justify-between h-full items-center w-full">
        <EventCard bplace={bplace} startIndex={startIndex} />
        <div className="sm:block hidden">
          {" "}
          <ArrowButtons2 handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </div>
    </div>
  );
}
