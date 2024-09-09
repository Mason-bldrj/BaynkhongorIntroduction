"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { TravelCard } from "../detail/travelCard";
import { ArrowButtons } from "../detail/arrowButtons";
import { useState, useEffect } from "react";
import urls from "@/lib/urls";
import { fetchFunc } from "@/app/backdata";
import { bplace } from "@/app/data";
export const TravelArea = () => {
  const [data, setdata] = useState();
  const fetchedData = async () => {
    const res = fetchFunc(urls.TRAVEL);
    const data = await (await res).json();
    setdata(data);
  };
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
  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <div className="w-full sm:w-[90%] xl:w-[1147px] mt-10">
      <div className="flex w-full sm:w-[90%] xl:w-full  justify-between">
        <div className="sm:ml-[80px] ml-2">
          {" "}
          <OrangeBourd data={"АЯЛАЛ "} />
        </div>
        <div className=" sm:mr-0 mr-2">
          {" "}
          <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </div>
      <div className="mt-4 sm:mt-10 w-full">
        <TravelCard
          
          bplace={bplace}
          data={data}
          startIndex={startIndex}
        />
      </div>
    </div>
  );
};
