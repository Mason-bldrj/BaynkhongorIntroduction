"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { VideoCard } from "../detail/videoCard";
import { ArrowButtons } from "../detail/arrowButtons";
import { useState , useEffect } from "react";
import { videoArr } from "@/app/data";
import urls from "@/lib/urls";
import { fetchFunc } from "@/app/backdata";
export const VideoArea = () => {
  const [data1, setdata1] = useState();
  const fetchedData = async () => {
    const res = fetchFunc(urls.NEWS);
    const data = await (await res).json();
    setdata1(data.videoData);
  };
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
  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <div className="w-full mb-[200px] sm:mb-[300px] lg:mb-[500px] flex items-center flex-col">
      <div className="flex sm:w-[80%] xl:w-[1147px] sm:ml-[150px] sm:mt-20 w-full mt-10 ">
        <OrangeBourd data={"ВИДЕО МЭДЭЭ"} />
      </div>
      <div className="w-full sm:h-[183px] h-[80px] bg-[#ff7119] mt-5 sm:mt-10 flex justify-center items-start">
        <div className="w-full xl:w-[1320px] flex justify-start ">
          <div className="flex items-center w-full h-[fit] gap-[55px]  mt-[130px] ">
            <div className="xl:w-[1130px] sm:h-[300px] xl:h-[420px] w-[85%] ">
              {" "}
              <VideoCard videoArr={videoArr} data1={data1} startIndex={startIndex} />
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
