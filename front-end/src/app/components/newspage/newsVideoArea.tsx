"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { NewsVideoCard } from "../detail/newsVideoCard";
import { videoArr } from "@/app/data";
import { ArrowButtons } from "../detail/arrowButtons";
import { useState } from "react";
import { NewsCard } from "../detail/newsCard";
export const NewsVideoArea = ({data2 ,data1, data}:any) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 1;
  const handleNext = () => {
    if (startIndex + visibleCount < data2?.length) {
      setStartIndex(startIndex + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="flex sm:w-[90%] xl:w-[1147px] sm:ml-0 ml-2 xl:ml-[150px] w-full  ">
        <OrangeBourd data={"ВИДЕО МЭДЭЭ"} />
      </div>
      <NewsVideoCard videoArr={videoArr} data1={data1} data={data} />
      <div className="flex w-full sm:w-[90%] xl:w-[1147px] justify-between mt-3  sm:mt-7">
        <div className="w-full sm:ml-0 ml-2">
          {" "}
          <OrangeBourd data={"АЖ-ЫН НӨӨЦ  ГАЗАР"} />
        </div>
        <div className="sm:block hidden">
          {" "}
          <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </div>
      <div className="sm:mt-10 w-full sm:w-[90%] xl:w-[1147px] ">
        <NewsCard data2={data2} startIndex={startIndex} />
      </div>
    </div>
  );
};
