"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { EventCard } from "../detail/evenCard";
import { ArrowButtons2 } from "../detail/arrowButtons";
import { useState, useEffect } from "react";
import urls from "@/lib/urls";
import { fetchFunc } from "@/app/backdata";

export const EventArea = () => {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const fetchedData = async () => {
    const res = fetchFunc(urls.EVENT);
    const jsonData = await (await res).json();
    setData(jsonData);
  };

  const visibleCount = 1; // Хэдэн элемент харуулж байгааг тодорхойлно

  const handleNext = () => {
    if (startIndex + visibleCount < data.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <div className="w-full sm:w-[90%] xl:w-[1147px] mt-12">
      <div className="flex w-full justify-between">
        <div className="sm:ml-20 sm:mb-10 ml-2 mb-5 w-full">
          <OrangeBourd data={"ЭВЕНТ , АРГА ХЭМЖЭЭ"} />
        </div>
      </div>
      <div className="flex sm:gap-2 xl:gap-0 xl:justify-between h-full items-center w-full">
        <EventCard data={data} startIndex={startIndex} />
        <div className="sm:block hidden">
          <ArrowButtons2 handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </div>
    </div>
  );
};
