"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { TravelCard } from "../detail/travelCard";
import { ArrowButtons } from "../detail/arrowButtons";
import { useState, useEffect } from "react";
import urls from "@/lib/urls";
import { fetchFunc } from "@/app/backdata";
export const BrandArea = () => {
  const [data, setData] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 1;
  const fetchedData = async () => {
    setLoading(true);
    try {
      const res = await fetchFunc(urls.KEEPSAKE);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      setLoading(false);
    }
  };
  const handleNext = () => {
    if (data.length > 0 && startIndex + visibleCount < data.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };
  
  const handlePrev = () => {
    if (data.length > 0 && startIndex > 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };
  
  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <div className="max-w-[1200px] w-[95%] flex flex-col gap-5">
      <div className="flex w-full justify-between">
        <div className="w-full flex justify-between">
          <OrangeBourd data={"БРЭНД БҮТЭЭГДЭХҮҮН"} />
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
        <TravelCard  data={data} startIndex={startIndex} />
      )}
    </div>
  );
};
