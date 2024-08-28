"use client";
import { InfoArr, InfoItem } from "@/app/data";
import Image from "next/image";
export const Header = () => {
  return (
    <div className="w-full h-[200px] flex justify-between flex-col  items-center bg-[url('/header.png')] bg-[#FF6C10]">
      <div className="flex justify-around  items-center w-[80%] border-b p-7 ">
        {InfoArr.map((el: InfoItem): JSX.Element => {
          return (
            <div className=" gap-[10px] flex justify-center   items-center cursor-pointer">
              {" "}
              <div className="bg-white rounded-[50%] w-fit h-fit">
                <Image
                  className="p-[5px]"
                  src={el.icon}
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
              <h1 className=" text-white">{el.m}</h1>
            </div>
          );
        })}
      </div>
      <h1 className="text-white text-2xl w-[500px] text-center mb-6">
        Баянхонгор аймаг аялал жуулчлал зочлох үйлчилгээний байгууллага
      </h1>
    </div>
  );
};
