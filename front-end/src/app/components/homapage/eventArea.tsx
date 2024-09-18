"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { EventCard } from "../detail/evenCard";
import { ArrowButtons, ArrowButtons2 } from "../detail/arrowButtons";
import { useState, useEffect } from "react";
import urls from "@/lib/urls";
import { fetchFunc } from "@/app/backdata";

export const EventArea = () => {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state
  const fetchedData = async () => {
    setLoading(true);
    try {
      const res = await fetchFunc(urls.EVENT);
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error("Failed to fetch event data:", error);
    } finally {
      setLoading(false); 
    }
  };
  const visibleCount = 1; 
  const handleNext = () => {
    if (startIndex + visibleCount < data.length) {
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
    <div className="max-w-[1147px] w-[95%] mt-5 sm:mt-20 flex flex-col gap-2">
      <div className="flex w-full justify-between mb-3">
        <div className="w-full flex justify-between">
          <OrangeBourd data={"ЭВЕНТ , АРГА ХЭМЖЭЭ"} />
          <div className="block sm:hidden">
            <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
          </div>
        </div>
      </div>

      <div className="flex sm:gap-2 justify-between h-full items-center w-full">
        {loading ? (
           <div className="w-full flex justify-center items-center h-[200px]">
           <div className="loader"></div>{" "}
         </div>
        ) : (
          <EventCard data={data} startIndex={startIndex} />
        )}
        <div className="sm:block hidden">
          <ArrowButtons2 handleNext={handlePrev} handlePrev={handleNext} />
        </div>
      </div>
    </div>
  );
};
