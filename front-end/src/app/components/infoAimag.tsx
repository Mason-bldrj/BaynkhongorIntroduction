"use client";
import { BayanKhongorInfo } from "../data";
import Image from "next/image";
export const InfoAimag = () => {
  return (
    <div className="w-full flex justify-center mt-20 ">
      <div className=" border-b-[#FF6C10] border   border-l-white  border-r-white  border-t-white w-[1143px] max-h-[150px]  flex  justify-center items-center">
        {BayanKhongorInfo.map((el): JSX.Element => {
          return (
            <div className="h-[200px] w-1/6 flex flex-col justify-center items-center  text-center gap-2">
              <Image
                src={el.icon}
                width={57}
                height={58}
                alt="Carousel image"
              />
              <h1 className=" text-[#FF6C10]">{el.number}</h1>{" "}
              <div className="flex items-start h-full">
                {" "}
                <h1>{el.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
