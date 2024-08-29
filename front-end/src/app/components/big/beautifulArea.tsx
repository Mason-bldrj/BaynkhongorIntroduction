'use client'
import { bplace } from "@/app/data";
import { OrangeBourd } from "../detail/orengeBourd";
import { BeautifulAreaCard } from "../detail/beautifulAreaCard";

export const BeautifulArea = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div className="">
        <div className="mb-10 ml-[200px]">
          {" "}
          <OrangeBourd data={"ҮЗЭСГЭЛЭНТ ГАЗРУУД"} />
        </div>

        <div className="bg-[url('/bigmountain.png')] w-[1441px] h-[583px]  bg-cover relative">
          <div className="w-full h-full bg-black opacity-50"></div>
          <div className="w-full h-full absolute top-[10px] left-0">
            <BeautifulAreaCard />
          </div>
        </div>
      </div>
    </div>
  );
};
