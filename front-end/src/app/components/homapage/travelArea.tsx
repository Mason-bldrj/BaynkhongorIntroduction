"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { TravelCard } from "../detail/travelCard";
import { ArrowButtons } from "../detail/arrowButtons";
import { useState, useEffect } from "react";
import urls from "@/lib/urls";
import { fetchFunc } from "@/app/backdata";
import { bplace } from "@/app/data";

export const TravelArea = () => {
  const [data, setData] = useState(null); // Initial data state
  const [loading, setLoading] = useState(true); // Loading state
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const fetchedData = async () => {
    setLoading(true);
    try {
      const res = await fetchFunc(urls.TRAVEL);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      setLoading(false);
    }
  };
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
    <div className="max-w-[1147px] w-[95%] mt-5 sm:mt-10 flex flex-col gap-5">
      <div className="flex w-full justify-between">
        <div className="w-full flex justify-between">
          <OrangeBourd data={"АЯЛАЛ"} />
        </div>
        <div className="">
          <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </div>

      {loading ? (
        <div className="w-full flex justify-center items-center h-[200px]">
          <div className="loader"></div>{" "}
        </div>
      ) : (
        <TravelCard bplace={bplace} data={data} startIndex={startIndex} />
      )}
    </div>
  );
};
