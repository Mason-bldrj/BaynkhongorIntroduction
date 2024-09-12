"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { EventCard } from "../detail/evenCard";
import { ArrowButtons, ArrowButtons2 } from "../detail/arrowButtons";
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
    <div className="max-w-[1147px] w-[95%] mt-5 sm:mt-20 flex flex-col  gap-2">
      <div className="flex w-full justify-between mb-3">
        <div className="w-full flex justify-between">
          <OrangeBourd data={"ЭВЕНТ , АРГА ХЭМЖЭЭ"} />
          <div className="block sm:hidden">
          <ArrowButtons
            className=""
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
          </div>
        </div>
      </div>
      <div className="flex sm:gap-2 justify-between h-full items-center w-full">
        <EventCard data={data} startIndex={startIndex} />
        <div className="sm:block hidden">
          {" "}
          <ArrowButtons2 handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </div>
    </div>
  );
};
