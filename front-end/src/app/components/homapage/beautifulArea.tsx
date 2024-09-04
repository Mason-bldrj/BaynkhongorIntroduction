'use client'
import { bplace } from "@/app/data";
import { OrangeBourd } from "../detail/orengeBourd";
import { BeautifulAreaCard } from "../detail/beautifulAreaCard";

export const BeautifulArea = () => {
  return (
    <div className="w-full flex flex-col items-center sm:mt-20">
      <div className="w-full flex flex-col items-center">
        <div className="w-full mb-3 sm:mb-10 xl:ml-[150px]  xl:w-[1147px]">
          {" "}
          <OrangeBourd data={"ҮЗЭСГЭЛЭНТ ГАЗРУУД"} />
        </div>

        <div className="bg-[url('/bigmountain.png')] w-full h-[300px] sm:h-[583px] flex justify-center overflow-hidden sm:justify-start bg-cover relative">
          <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
          <div className="w-full xl:w-[1260px] h-full flex items-center">
            <BeautifulAreaCard />
          </div>
        </div>
      </div>
    </div>
  );
};
