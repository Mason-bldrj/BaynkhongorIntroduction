"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export const TravelCard = ({ bplace, data, startIndex }: any) => {
  const router = useRouter();
  const today: any = new Date();
  const startOfyear: any = new Date(2024, 0, 1);
  const diffInMs = today - startOfyear;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const weeksPassed = Math.floor(diffInDays / 7);
  const handleNavigate = (id: string) => {
    router.push(`/user/TRAVEL${id}`);

  };
  const [width, setWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex">
      <div className="flex w-full overflow-hidden sm:w-[1155px] ease-linear transition-transform duration-300 justify-start">
        <div
          className="flex ease-linear transition-transform duration-300 gap-[2vw] sm:gap-[20px] "
          style={{
            transform: `translateX(-${startIndex * (width < 640 ? 92 : 385)}${width < 640 ? "vw" : "px"})`,
          }}
        >
          {data?.map((el: any, i: number) => {
            return (
              <div
                key={i}
                onClick={() => handleNavigate(el._id)}
                className="w-full"
              >
                <div
                  className={`bg-[#ff7119] sm:w-[367px] sm:h-[362px] w-[90vw] h-[210px] flex flex-col  justify-end items-start  sm:items-end rounded-md`}
                >
                  <div className="w-[200px] sm:w-[325px] text-white mb-1 sm:ml-0 ml-2">
                    <div className="font-sans sm:text-[16px] text-[14px]">
                      {`${weeksPassed}-р 7 хоног`}
                    </div>
                    <div className="font-sans sm:text-[16px] text-[10px]">
                      {el.date?.slice(0, 4)}
                    </div>
                  </div>
                  <Image
                    className="sm:w-[325px] sm:h-[296px] w-full h-[171px] object-cover border"
                    src={el.img}
                    width={325}
                    height={296}
                    alt="Carousel image"
                  />
                </div>
                <div className="w-[320px] ">
                  <div className="text-[#222222] sm:mt-5 mt-2 sm:text-sm text-[15px] font-bold">
                    {el.name}
                  </div>
                  <div className="text-[#666666] sm:text-sm text-[13px] sm:mt-5 mt-2 w-full overflow-hidden">
                    {el.description}
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
