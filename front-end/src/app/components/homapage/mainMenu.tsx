"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { mainMenu } from "@/app/data";
import { PictureArr } from "@/app/data";
export const MainMenu = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[400px] mt-[60px]">
      <Image
        className="object-cover w-full h-full"
        src="/main.gif"
        layout="fill"
        objectFit="cover"
        alt="Picture of the author"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      <div className=" absolute md:text-[30px] font-serif w-full h-full flex !justify-center mt-[50px] text-white">
        {" "}
        <div className="">
          БАЯНХОНГОР АЙМАГ АЯЛАЛ ЖУУЛЧЛАЛ ЗОЧЛОХ ҮЙЛЧИЛГЭЭНИЙ БАЙГУУЛЛАГА
        </div>
      </div>
    </div>
  );
};
