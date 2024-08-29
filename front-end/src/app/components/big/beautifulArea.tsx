'use client'
import { bplace } from "@/app/data";
import { OrangeBourd } from "../detail/orengeBourd";
import { BeautifulAreaCard } from "../detail/beautifulAreaCard";
import { ArrowButtons } from "../detail/arrowButtons";
export const BeautifulArea = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="">
        <div className="mb-10 ml-[200px]">
          {" "}
          <OrangeBourd data={"ҮЗЭСГЭЛЭНТ ГАЗРУУД"} />
        </div>

        <div className="bg-[url('/bigmountain.png')] w-[100vw] h-[583px]  bg-cover relative">
          <div className="w-full h-full bg-black opacity-50"></div>
          <div className="w-full h-full absolute top-[10px] left-0">
            <BeautifulAreaCard />
            <ArrowButtons />
          </div>
        </div>
      </div>
    </div>
  );
};
