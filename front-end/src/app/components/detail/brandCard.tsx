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
      {/* Mobile View */}
      <div className="flex w-full xl:w-[1029px] h-full overflow-x-scroll sm:overflow-hidden ease-linear transition-transform duration-300 justify-start">
        <div className="sm:hidden flex gap-3 h-full">
          {bplace.map((el: any, i: number): JSX.Element => {
            return (
              <div
                key={i}
                className="min-w-[80vw] h-full relative rounded-sm"
              >
                <Image
                  className="object-cover rounded-sm h-full w-full"
                  src="https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
                  width={23453450}
                  height={2500}
                  alt="Carousel image"
                />
                <div className="bg-black bg-opacity-50 absolute w-full h-full top-0 left-0 flex justify-center items-center">
                  <div className="text-white text-[12px] text-center px-2">
                    "{el.title}"
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View */}
        <div
          className="sm:flex hidden w-full h-full ease-linear transition-transform duration-300 justify-start gap-5 sm:gap-[20px]"
          style={{
            transform: `translateX(-${startIndex * 343}px)`,
          }}
        >
          {bplace.map((el: any, i: number): JSX.Element => {
            return (
              <div key={i} className="min-w-[323px] min-h-[377px] relative">
                <Image
                  className="object-cover w-full h-full rounded-sm"
                  src="https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
                  width={365}
                  height={350}
                  alt="Carousel image"
                />
                <div className="flex justify-center items-center opacity-0 hover:bg-black hover:opacity-50 absolute w-full h-full top-0 left-0">
                  <div className="sm:text-2xl text-[10px] mt-[120px] text-white sm:w-[200px] w-full h-full text-center">
                    "{el.title}"
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrow Buttons for Desktop */}
      <div className="sm:block hidden">
        <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
      </div>
    </div>
  );
};
