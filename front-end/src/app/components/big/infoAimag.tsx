"use client";
import { BayanKhongorInfo } from "@/app/data";
import Image from "next/image";
export const InfoAimag = () => {
  return (
    <div className="w-full flex justify-center mt-20 ">
      <div className=" border-b-[#FF6C10] border   border-l-white  border-r-white  border-t-white w-[1143px] max-h-[150px]  flex  justify-center items-center">
        <div className="w-[80%] border-b-[#FF6C10] border   border-l-white  border-r-white  border-t-white max-h-[150px]  flex  justify-center items-center">
          {BayanKhongorInfo.map((el ,i): JSX.Element => {
            return (
              <div key={i} className="h-[200px] w-1/6 flex flex-col justify-center items-center  text-center gap-2">
                <Image
                  src={el.icon}
                  width={57}
                  height={58}
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
    </div>
  );
};
