"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { TravelCard } from "../detail/travelCard";
import { ArrowButtons } from "../detail/arrowButtons";
import { useState } from "react";
import { bplace } from "@/app/data";
export const TravelArea = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
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
    <div className="w-[1147px] mt-10">
      <div className="flex w-full justify-between">
        <div className="ml-[80px]">
          {" "}
          <OrangeBourd data={"АЯЛАЛ "} />
        </div>

        <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
      </div>
      <div className="mt-10">
        <TravelCard bplace={bplace} startIndex={startIndex} />
      </div>
    </div>
  );
};
