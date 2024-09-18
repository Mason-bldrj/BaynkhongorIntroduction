"use client";
import { fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useEffect, useState } from "react";
import { BannerArea } from "@/app/components/homapage/bannerArea";
import { TravelPageArea1 } from "./travelPageArea1";
import { TravelPageArea2 } from "./travelPageArea2";
import { TravelPageArea3 } from "./travelPageArea3";
import { travelCategory } from "@/app/data";

// Define type for fetched data if possible
type TravelData = any; // Replace with proper type based on your data structure

export default function Travel() {
  const [data, setData] = useState<TravelData | null>(null);
  const [categoryIndex, setCategoryIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from API
  const fetchedData = async () => {
    try {
      setLoading(true);
      const res = await fetchFunc(urls.TRAVEL);
      const jsonData = await res.json();
      setData(jsonData);
    } catch (err) {
      setError("Failed to fetch travel data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle switching between components
  const handleComponents = (i: number) => {
    setCategoryIndex(i);
  };

  useEffect(() => {
    fetchedData();
  }, []);

  // Components to be displayed
  const components = [
    <TravelPageArea1 data={data} key="area1" />,
    <TravelPageArea2 data={data} key="area2" />,
    <TravelPageArea3 data={data} key="area3" />,
  ];

  // Show loading or error message when necessary
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-[200px]">
        <div className="loader"></div>{" "}
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="mb-10 max-w-[1147px] m-auto w-[95%] scrollbar-track-white flex flex-col items-center justify-between gap-5 sm:mt-0 mt-5 md:gap-10">
      <BannerArea />
      <div className="w-full overflow-x-scroll scrollbar-hide">
        <div className="flex w-[700px] gap-10 sm:justify-around border-b border-b-[#ff7119] pb-5 items-center">
          {travelCategory.map((el, i) => (
            <button
              onClick={() => handleComponents(i)}
              className="flex w-fit px-2 border hover:text-white justify-center rounded-md py-1 hover:bg-[#ff7119]"
              key={i}
            >
              {el}
            </button>
          ))}
        </div>
      </div>
      <div className="xl:w-full w-full sm:w-[90%] flex justify-center">
        {components[categoryIndex]}
      </div>
    </div>
  );
}
