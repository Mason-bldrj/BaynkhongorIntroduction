'use client'
import Image from "next/image";
import { bplace } from "@/app/data";
export const TravelCard = () => {
  return (
    <div className="w-full flex overflow-hidden gap-2">
      {bplace.map((el ,i) => {
        return (
          <div key={i}>
            <div className="bg-[#ff7119] min-w-[367px] min-h-[362px] flex flex-col justify-end items-end rounded-md ">
              <div className="w-[325px] text-white mb-1">
                <div className=" font-sans">{el.title}</div>
                <div className=" font-sans">{el.count}</div>
              </div>
              <Image
                className=" max-w-[325px] max-h-[296px]"
                src={el.icon}
                width={325}
                height={296}
                alt="Carousel image"
              />
            </div>
            <div className="w-[320px]">
              <div className="text-[#222222] mt-5 font-bold">{el.title}</div>
              <div className="text-[#666666] text-sm mt-5">{el.idk}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
