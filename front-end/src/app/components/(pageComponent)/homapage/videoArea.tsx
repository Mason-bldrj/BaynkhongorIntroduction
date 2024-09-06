"use client";
import { OrangeBourd } from "../../detail/orengeBourd";
import { VideoCard } from "../../detail/videoCard";
import { ArrowButtons } from "../../detail/arrowButtons";
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
    <div className="w-full h-[280px]  sm:h-[900px] xl:h-[1000px] flex items-center flex-col">
      <div className="flex sm:w-[80%] xl:w-[1147px] sm:ml-[150px] sm:mt-20 w-full mt-10 ">
        <OrangeBourd data={"ВИДЕО МЭДЭЭ"} />
      </div>
      <div className="w-full sm:h-[183px] h-[80px] bg-[#ff7119] mt-5 sm:mt-10 flex justify-center items-start">
        <div className="w-full xl:w-[1320px] flex justify-start ">
          <div className="flex items-center w-full h-[fit] gap-[55px]  mt-[130px] ">
            <div className="xl:w-[1130px] sm:h-[300px] xl:h-[420px] w-[85%] ">
              {" "}
              <VideoCard videoArr={videoArr} startIndex={startIndex} />
            </div>{" "}
            <div className="sm:block hidden">
              <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
