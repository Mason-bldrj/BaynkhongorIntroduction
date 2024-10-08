"use client";
import { fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { BannerArea } from "@/app/components/homapage/bannerArea";
import { EventCard } from "@/app/components/detail/evenCard";
import { OrangeBourd } from "@/app/components/detail/orengeBourd";
import { ArrowButtons2 } from "@/app/components/detail/arrowButtons";
import { useState, useEffect } from "react";
type EventData = any;
export default function Event() {
  const [data, setData] = useState<EventData | null>(null);
  const [startIndex, setStartIndex] = useState<number>(0);
  const visibleCount = 1;
  const fetchedData = async () => {
    try {
      const res = await fetchFunc(urls.EVENT);
      const jsonData = await res.json();
      setData(jsonData);
    } catch (err) {
      console.error("Failed to fetch event data:", err);
    }
  };
  useEffect(() => {
    fetchedData();
  }, []);
  const handleNext = () => {
    if (startIndex + visibleCount < data?.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  if (!data) {
    return (
      <div className="w-full flex justify-center items-center h-[200px]">
        <div className="loader"></div>{" "}
      </div>
    );
  }

  return (
    <div className="mb-10 max-w-[1147px] m-auto w-[95%] flex flex-col items-center justify-between gap-5 sm:mt-0 mt-5 md:gap-10">
      <BannerArea />
      <div className="w-full flex justify-start">
        <OrangeBourd data={"ЭВЕНТ , АРГА ХЭМЖЭЭ"} />
      </div>
      <div className="flex sm:gap-2 xl:gap-0 xl:justify-between h-full items-center w-full">
        {/* Pass the event data and current start index to the EventCard */}
        <EventCard data={data} startIndex={startIndex} />
        <div className="sm:block hidden">
          <ArrowButtons2
            handleNext={handlePrev}
            handlePrev={handleNext}
            isNextDisabled={startIndex + visibleCount >= data?.length}
            isPrevDisabled={startIndex === 0}
          />
        </div>
      </div>
    </div>
  );
}
