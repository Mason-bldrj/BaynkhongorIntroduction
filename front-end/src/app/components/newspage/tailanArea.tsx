"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { ArrowButtons } from "../detail/arrowButtons";
import { useState } from "react";
import { TailanCard } from "../detail/tailanCard";
export const TailanArea = ({ data }: any) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
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
  return (
    <div className="w-full sm:w-[90%] xl:w-[1147px] sm:mt-10">
      <div className="flex w-full  xl:w-full justify-between">
        <div className="xl:ml-[80px] w-full sm:ml-0 ml-2">
          {" "}
          <OrangeBourd data={"ТАЙЛАН"} />
        </div>
        <div className="sm:block hidden">
          {" "}
          <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </div>
      <div className="mt-4 sm:mt-10 w-full">
        <TailanCard data={data} startIndex={startIndex} />
      </div>
    </div>
  );
};
