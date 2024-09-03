"use client";
import { InfoArr, InfoItem } from "@/app/data";
import Image from "next/image";
import { useState } from "react";
import SideBar from "../detail/sidebar";
export const Header2 = ({ switchHeader }: any) => {
  return (
    <div
      className={`w-full h-[60px] justify-between flex-col items-center bg-[#FF6C10]
          ${switchHeader ? "hidden" : "flex"}
    `}
    >
      <div className="w-full flex justify-end sm:hidden ">
        {" "}
        <SideBar />
      </div>
      <div className="sm:flex justify-around xl:text-xl md:text-[16px] sm:text-[12px] items-center sm:w-[600px] md:w-[800px]  xl:w-[1147px] border-b p-7 hidden">
        {InfoArr.map((el: InfoItem, index: number): JSX.Element => {
          return (
            <div
              key={index}
              className="gap-[10px] flex justify-center items-center cursor-pointer"
            >
              <div className="bg-white rounded-[50%] w-fit h-fit">
                <Image
                  className="p-[5px]"
                  src={el.icon}
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
              <div className="text-white">{el.m}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
