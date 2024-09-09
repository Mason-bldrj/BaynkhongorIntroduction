"use client";
import { fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useEffect, useState } from "react";
import { BannerArea } from "@/app/components/homapage/bannerArea";
import { TravelPageArea1 } from "./travelPageArea1";
import { TravelPageArea2 } from "./travelPageArea2";
import { TravelPageArea3 } from "./travelPageArea3";
import { travelCategory } from "@/app/data";
export default function Travel() {
  const [data, setdata] = useState();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const fetchedData = async () => {
    const res = fetchFunc(urls.TRAVEL);
    const data = await (await res).json();
    setdata(data[0]);
  };
  const handleComponents = (i: number) => {
    setCategoryIndex(i);
  };
  useEffect(() => {
    fetchedData();
  }, []);
  console.log(data);

  const components = [
    <TravelPageArea1 key="area1" />,
    <TravelPageArea2 key="area2" />,
    <TravelPageArea3 key="area3" />,
  ];

  return (
    <div className="w-full sm:w-[80%] lg:w-[90%] xl:w-[1148px] scrollbar-track-white  flex flex-col items-center justify-between gap-5 sm:mt-0 mt-5 md:gap-10 ">
      <BannerArea />
      <div className="w-full overflow-x-scroll scrollbar-hide">
        <div className="flex w-[700px]  gap-10 sm:justify-around border-b border-b-[#ff7119] pb-5 items-center ">
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
      <div className="xl:w-full w-full sm:w-[90%] flex justify-center ">
        {components[categoryIndex]}
      </div>
    </div>
  );
}
