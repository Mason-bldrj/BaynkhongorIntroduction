"use client";
import Image from "next/image";
import { bplace } from "@/app/data";
import { useState } from "react";
import { ArrowButtons } from "../detail/arrowButtons";
export const BeautifulAreaCard = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
  const handleNext = () => {
    if (startIndex + visibleCount < bplace.length) {
      setStartIndex(startIndex + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div className="w-full h-full flex items-center justify-start gap-[20px]">
      <div className="flex w-[1155px] overflow-hidden flexx transition-transform duration-300 justify-start">
        <div
          className="flexx transition-transform duration-300 justify-start gap-[20px]"
          style={{
            transform: `translateX(-${startIndex * 385}px)`,
          }}
        >
          {bplace.map((el: any, i: number): JSX.Element => {
            return (
              <div key={i} className="min-w-[365px] min-h-[350px] relative">
                <Image
                  className="object-cover w-full h-full rounded-sm"
                  src={el.icon}
                  width={365}
                  height={350}
                  alt="Carousel image"
                />
                <div className="bg-[#ff7119] text-white w-[313px] h-[33px] rounded-t-2xl flex justify-center items-center absolute bottom-0 left-[25px]">
                  {el.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ml-[30px]">
        <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
      </div>
    </div>
  );
};
