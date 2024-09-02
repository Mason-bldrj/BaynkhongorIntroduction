'use client'
import { bplace } from "@/app/data";
import { OrangeBourd } from "../detail/orengeBourd";
import { BeautifulAreaCard } from "../detail/beautifulAreaCard";

export const BeautifulArea = () => {
  return (
    <div className="w-full flex flex-col items-center mt-20">
      <div className="w-full flex flex-col items-center">
        <div className="mb-10 ml-[150px] w-[1147px]">
          {" "}
          <OrangeBourd data={"ҮЗЭСГЭЛЭНТ ГАЗРУУД"} />
        </div>

        <div className="bg-[url('/bigmountain.png')] w-full h-[583px] flex  justify-start bg-cover relative">
          <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
          <div className="w-[1260px] h-full ">
            <BeautifulAreaCard />
          </div>
        </div>
      </div>
    </div>
  );
};
