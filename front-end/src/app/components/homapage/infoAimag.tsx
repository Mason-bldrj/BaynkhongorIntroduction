"use client";
import { BayanKhongorInfo } from "@/app/data";
import Image from "next/image";
export const InfoAimag = () => {
  return (
    <div className="w-[640px] sm:w-full flex justify-center mt-20 ">
      <div className="w-full overflow-hidden sm:w-[1000px] sm:[200px] sm:border-b-[#FF6C10] sm:border-b flex justify-center items-center">
        {BayanKhongorInfo.map((el, i): JSX.Element => {
          return (
            <div
              key={i}
              className="sm:h-[200px] sm:w-1/6 sm:flex sm:flex-col sm:justify-center sm:items-center  sm:text-center sm:gap-2"
            >
              <Image className="max-w-[57px] max-h-[58px]"
                src={el.icon}
                width={5733}
                height={5833}
                alt="Carousel image"
              />
              <div className=" text-[#FF6C10]">{el.number}</div>{" "}
              <div className="flex items-start h-full">
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
