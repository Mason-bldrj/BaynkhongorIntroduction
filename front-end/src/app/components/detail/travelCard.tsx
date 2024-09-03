"use client";
import Image from "next/image";
export const TravelCard = ({ bplace, startIndex }: any) => {
  return (
    <div className="w-full flex ">
      <div className="flex w-full overflow-scroll sm:w-[1155px] sm:overflow-hidden ease-linear transition-transform duration-300 justify-start">
        <div
          className="flex ease-linear transition-transform duration-300 justify-start gap-[20px]"
          style={{
            transform: `translateX(-${startIndex * 385}px)`,
          }}
        >
          {bplace.map((el: any, i: number) => {
            return (
              <div key={i}>
                <div className="bg-[#ff7119] sm:w-[367px] sm:h-[362px] w-[230px] h-[210px] flex flex-col justify-end items-end rounded-md ">
                  <div className="w-[200px]  sm:w-[325px] text-white mb-1 ">
                    <div className=" font-sans sm:text-xl text-[10px] ">
                      {el.title}
                    </div>
                    <div className=" font-sans sm:text-xl text-[10px]">
                      {el.count}
                    </div>
                  </div>
                  <Image
                    className="sm:w-[325px] sm:h-[296px] w-[200px] h-[171px]"
                    src={el.icon}
                    width={325}
                    height={296}
                    alt="Carousel image"
                  />
                </div>
                <div className="sm:w-[320px] w-[195px]">
                  <div className="text-[#222222] sm:mt-5 mt-2 sm:text-sm text-[10px] font-bold ">
                    {el.title}
                  </div>
                  <div className="text-[#666666] sm:text-sm text-[10px] sm:mt-5 mt-2 ">
                    {el.idk}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
