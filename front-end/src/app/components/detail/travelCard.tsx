"use client";
import Image from "next/image";
import { useState } from "react";

export const TravelCard = ({ bplace, data, startIndex }: any) => {
  const [year, setYear] = useState("");
  const today: any = new Date();
  const startOfyear: any = new Date(2024, 0, 1);
  const diffInMs = today - startOfyear; // 
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); 
  const weeksPassed = Math.floor(diffInDays / 7); 
  return (
    <div className="w-full flex">
      <div className="flex w-full overflow-scroll sm:w-[1155px] sm:overflow-hidden ease-linear transition-transform duration-300 justify-start">
        <div
          className="flex ease-linear transition-transform duration-300 justify-start gap-[20px]"
          style={{
            transform: `translateX(-${startIndex * 385}px)`,
          }}
        >
          {data?.map((el: any, i: number) => {
            return (
              <div key={i}>
                <div className="bg-[#ff7119] sm:w-[367px] sm:h-[362px] w-[230px] h-[210px] flex flex-col justify-end items-end rounded-md">
                  <div className="w-[200px] sm:w-[325px] text-white mb-1">
                    <div className="font-sans sm:text-[16px] text-[10px]">
                      {`${weeksPassed}-р 7 хоног`} 
                    </div>
                    <div className="font-sans sm:text-[16px] text-[10px]">
                      {el.date?.slice(0, 4)}
                    </div>
                  </div>
                  <Image
                    className="sm:w-[325px] sm:h-[296px] w-[200px] h-[171px]"
                    src={el.img}
                    width={325}
                    height={296}
                    alt="Carousel image"
                  />
                </div>
                <div className="sm:w-[320px] w-[195px]">
                  <div className="text-[#222222] sm:mt-5 mt-2 sm:text-sm text-[10px] font-bold">
                    {el.name}
                  </div>
                  <div className="text-[#666666] sm:text-sm text-[10px] sm:mt-5 mt-2">
                    {el.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
