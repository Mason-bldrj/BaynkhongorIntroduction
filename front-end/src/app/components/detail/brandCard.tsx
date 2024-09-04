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
    <div className="w-full h-full flex items-center justify-start gap-[20px] sm:mt-0 mt-3">
      <div className="flex w-full xl:w-[1029px] h-full overflow-scroll sm:overflow-hidden ease-linear transition-transform duration-300 justify-start">
        <div className="sm:hidden flex gap-3 h-full">
          {bplace.map((el: any, i: number): JSX.Element => {
            return (
              <div
                key={i}
                className="w-[120px] h-full  relative rounded-sm"
              >
                <Image
                  className="object-cover reounded-sm h-full w-full"
                  src={el.icon}
                  width={23453450}
                  height={2500}
                  alt="Carousel image"
                />
                <div className=" flex justify-center items-center opacity-0 hover:bg-black hover:opacity-50 absolute w-full h-full top-0 left-0">
                  <div className="sm:text-2xl text-[10px] mt-[120px] text-white sm:w-[200px] w-full h-full text-center">
                    "{el.title}"
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="sm:flex hidden w-full  h-full ease-linear transition-transform duration-300 justify-start gap-5 sm:gap-[20px]"
          style={{
            transform: `translateX(-${startIndex * 343}px)`,
          }}
        >
          {bplace.map((el: any, i: number): JSX.Element => {
            return (
              <div key={i} className="min-w-[323px] min-h-[377px]  relative">
                <Image
                  className="object-cover w-full h-full rounded-sm"
                  src={el.icon}
                  width={365}
                  height={350}
                  alt="Carousel image"
                />
                <div className=" flex justify-center items-center opacity-0 hover:bg-black hover:opacity-50 absolute w-full h-full top-0 left-0">
                  <div className="sm:text-2xl text-[10px] mt-[120px] text-white sm:w-[200px] w-full h-full text-center">
                    "{el.title}"
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sm:block hidden">
        <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
      </div>
    </div>
  );
};
