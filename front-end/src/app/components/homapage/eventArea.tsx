"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { EventCard } from "../detail/evenCard";
import { ArrowButtons2 } from "../detail/arrowButtons";
import { useState } from "react";
import { bplace } from "@/app/data";
export const EventArea = () => {
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
  return (
    <div className="w-full sm:w-[1147px] mt-12">
      <div className="flex w-full justify-between">
        <div className="sm:ml-20 sm:mb-10 mb-5 w-full">
          {" "}
          <OrangeBourd data={"ЭВЕНТ , АРГА ХЭМЖЭЭ"} />
        </div>
      </div>
      <div className="flex justify-between h-full items-center w-full">
        <EventCard bplace={bplace} startIndex={startIndex} />
        <div className="sm:block hidden">
          {" "}
          <ArrowButtons2 handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </div>
    </div>
  );
};
