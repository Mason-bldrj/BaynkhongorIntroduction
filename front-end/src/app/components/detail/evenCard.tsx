'use client'
import Image from "next/image";
import { bplace } from "@/app/data";
import { useState, useEffect } from "react";
import { ArrowButtons2 } from "../detail/arrowButtons";

export const EventCard = () => {
  const [sum, setSum] =useState(0);
  const [isSliding, setIsSliding] = useState(false);
  useEffect(() => {
    setSum(0)
    setIsSliding(false)
  }, [])
  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      if (sum > bplace.length - 2) {
        setSum(0);
      } else {
        setSum(sum + 1);
      }
      setIsSliding(false);
    }, 500);
  };

  const handlePrev = () => {
    setIsSliding(true);

    setTimeout(() => {
      if (sum >= 1) {
        setSum(sum - 1);
      } else {
        setSum(bplace.length - 1);
      }
      setIsSliding(false);
    }, 500);
  };

  return (
    <div className="mt-5 w-full">
      <div className="w-full h-[478px] flex justify-between items-center relative overflow-hidden">
        <div
          className={`  relative w-full h-[fit] flex justify-between items-center transition-transform duration-500 ${
            isSliding ? "transform -translate-y-full" : "transform translate-0"
          }`}
        >
          <Image
            key={sum}
            className="max-w-[1024px] max-h-[420px] shadow-[30px_30px] shadow-[#f3f3f3] rounded-md transition-transform duration-500 ease-in-out"
            src={bplace[sum].icon}
            width={1000}
            height={478}
            alt="Carousel image"
          />
          <div className="w-[910px] h-[112px] flex flex-col items-center justify-around absolute opacity-75 bottom-5 left-10 rounded-md text-white bg-black">
            <div>{bplace[sum].title}</div>
            <div>{bplace[sum].idk}</div>
          </div>
        </div>
        <ArrowButtons2 handleNext={handleNext} handlePrev={handlePrev} />
      </div>
    </div>
  );
};
