"use client";
import Image from "next/image";
export const Monestry = ({ data }: any) => {
  return (
    <div className="w-full flex justify-center sm:justify-between flex-wrap *:mb-5">
      {data.map((el: any, i: number) => {
        return (
          <div className="w-[80%] sm:w-[48%] xl:w-[561px] h-[300px] md:h-[354px] relative">
            <Image
              className="w-full h-full rounded-md"
              src={el.icon}
              width={325}
              height={296}
              alt="Carousel image"
            />
            <div className="bg-[#d9d9d9] w-full flex justify-end h-[53px] items-center absolute bottom-2 sm:text-[15px] lg:text-[20px]">
              <div className="w-[80%]">{el.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
