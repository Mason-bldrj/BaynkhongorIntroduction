"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { BeautifulAreaCard } from "../detail/beautifulAreaCard";
import { useState, useEffect } from "react";
import urls from "@/lib/urls";
import { fetchFunc } from "@/app/backdata";
export const BeautifulArea = () => {
  const [data, setdata] = useState();
  const fetchedData = async () => {
    const res = fetchFunc(urls.SCENICSPORT);
    const data = await (await res).json();
    setdata(data);
  };
  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <div className="w-full flex flex-col items-center sm:mt-20">
      <div className="w-full flex flex-col items-center">
        <div className="max:w-[1147px] w-[95%]  mb-3 sm:mb-10">
          {" "}
          <OrangeBourd data={"ҮЗЭСГЭЛЭНТ ГАЗРУУД"} />
        </div>

        <div className="bg-[url('/bigmountain.png')] w-full h-[300px] sm:h-[583px] flex justify-center overflow-hidden sm:justify-start bg-cover relative">
          <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
          <div className="max:w-[1147px] w-[95%] m-auto h-full flex items-center">
            <BeautifulAreaCard data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
