"use client";
import Image from "next/image";
import { bplace } from "@/app/data";
import { useState } from "react";
import { ArrowButtons } from "../detail/arrowButtons";
export const BrandCard = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
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
                <div className=" flex justify-center items-center opacity-0 hover:bg-black hover:opacity-50 absolute w-full h-full top-0 left-0">
                  <div className="text-2xl mt-[120px] text-white w-[200px] text-center">"{el.title}"</div>
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
