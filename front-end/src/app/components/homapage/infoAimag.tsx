"use client";
import { BayanKhongorInfo } from "@/app/data";
import Image from "next/image";

export const InfoAimag = () => {
  return (
    <div className="w-full flex justify-center items-center mt-5 sm:mt-10 ">
      <div className="w-full sm:w-[80%] lg:w-[1000px] flex justify-center sm:justify-between gap-2 sm:gap-6 md:gap-8 flex-wrap sm:flex-nowrap">
        {BayanKhongorInfo.map((el, i): JSX.Element => {
          return (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-1 sm:gap-2 w-[27%] sm:w-full "
            >
              <Image
                className="sm:w-[58px] sm:h-[57px] object-cover w-[50%]"
                src={el.icon}
                width={57}
                height={58}
                alt="Info icon"
              />
              <div className="text-[#FF6C10] text-[12px] sm:text-[17px]">
                {el.number}
              </div>
              <div className="lg:text-[12px] sm:text-[10px] text-[8px]">
                {el.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
