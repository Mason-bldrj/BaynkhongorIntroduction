"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { VideoCard } from "../detail/videoCard";
import { ArrowButtons } from "../detail/arrowButtons";
import { useState } from "react";
import { videoArr } from "@/app/data";
export const VideoArea = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 1;
  const handleNext = () => {
    if (startIndex + visibleCount < videoArr.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div className="w-full h-[1000px] flex items-center flex-col">
      <div className="flex w-[1147px] ml-[150px] mt-20 ">
        <OrangeBourd data={"ВИДЕО МЭДЭЭ"} />
      </div>
      <div className="w-full h-[183px] bg-[#ff7119] mt-10 flex justify-center items-start">
        <div className="w-[1320px] flex justify-start">
          <div className="flex items-center w-full h-[fit] gap-[55px]  mt-[130px]">
            <div className="w-[1130px] h-[420px]">
              {" "}
              <VideoCard videoArr={videoArr} startIndex={startIndex} />
            </div>{" "}
            <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
          </div>
        </div>
      </div>
    </div>
  );
};
