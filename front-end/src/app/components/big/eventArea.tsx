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
    <div className="w-full mt-12">
      <div className="flex w-full justify-between">
        <div className="ml-20">
          {" "}
          <OrangeBourd data={"ЭВЕНТ , АРГА ХЭМЖЭЭ"} />
        </div>
      </div>
      <div className="flex justify-between h-full items-center">
        <EventCard bplace={bplace} startIndex={startIndex} />
        <ArrowButtons2 handleNext={handleNext} handlePrev={handlePrev} />
      </div>
    </div>
  );
};
