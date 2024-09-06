"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { NewsVideoCard } from "../detail/newsVideoCard";
import { ArrowButtons } from "../detail/arrowButtons";
import { useState } from "react";
import { videoArr } from "@/app/data";
export const NewsVideoArea = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="flex sm:w-[90%] xl:w-[1147px] xl:ml-[150px] w-full  ">
        <OrangeBourd data={"ВИДЕО МЭДЭЭ"} />
      </div>
      <NewsVideoCard videoArr={videoArr} />
    </div>
  );
};
