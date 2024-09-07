"use client";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
export const HolbooCard = ({ data }: any) => {
  return (
    <div className="w-full flex justify-center flex-wrap gap-5 mb-2">
      {data.map((el: any, i: number) => {
        return (
          <div className="w-[80%] sm:w-[500px] lg:w-[350px] xl:w-[270px] h-[318px] flex flex-col items-center shadow-md relative">
            <Image
              className="w-full h-[220px] rounded-t-md"
              src={el.icon}
              width={325}
              height={296}
              alt="Carousel image"
            />
            <div className=" absolute w-[80%] justify-center bottom-[120px] border flex bg-[#ff7119] text-white rounded-md text-[15px] flex-wrap">{el.title}</div>
            <div className=" border-b w-[80%] py-2 flex justify-center">{el.phoneNumber}</div>
            <button className="flex text-center justify-start gap-2 text-[#ff7119] items-center mt-4">
              <FaRegArrowAltCircleRight />
              Дэлгэрэнгүй харах
            </button>
          </div>
        );
      })}
    </div>
  );
};
