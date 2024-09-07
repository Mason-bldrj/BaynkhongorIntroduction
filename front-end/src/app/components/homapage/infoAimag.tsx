"use client";
import { BayanKhongorInfo } from "@/app/data";
import Image from "next/image";
export const InfoAimag = () => {
  return (
    <div className=" w-full flex justify-center items-center mt-5 sm:mt-10 md:mt-20 ">
      <div className="w-full  sm:w-[80%] lg:w-[1000px] sm:h-[200px] border-b-[#FF6C10] sm:pb-0 pb-3 border-b flex justify-around sm:justify-between items-center gap-2 sm:gap-7 overflow-hidden">
        {BayanKhongorInfo.map((el, i): JSX.Element => {
          return (
            <div
              key={i}
              className="  sm:h-[200px] w-[57px] sm:w-1/6 flex flex-col sjustify-center items-center  text-center gap-1 sm:gap-2"
            >
              <Image className=" sm:min-w-[57px] sm:min-h-[58px] sm:max-w-[57px] sm:max-h-[58px] max-w-[30px] max-h-[31px] "
                src={el.icon}
                width={57}
                height={58}
                alt="Carousel image"
              />
              <div className=" text-[#FF6C10] sm:text-[17px] text-[8px] ">{el.number}</div>{" "}
              <div className="flex sm:items-start  h-full sm:text-[8px] md:text-[9px]  lg:text-[15px] text-[5px]">
                {" "}
                <div>{el.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
