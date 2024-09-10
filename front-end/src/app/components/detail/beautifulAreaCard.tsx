"use client";
import Image from "next/image";
import { bplace } from "@/app/data";
import { useState } from "react";
import { ArrowButtons } from "./arrowButtons";
import { useRouter } from "next/navigation";
export const BeautifulAreaCard = ({data}:any) => {
  const router = useRouter(); 
  const handleNavigate = (id: string) => {
    router.push(`/user/REPORT${id}`);
  };
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3; // You can adjust this based on the screen size for better responsiveness

  const handleNext = () => {
    if (startIndex + visibleCount < bplace.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="w-full h-[200px]  sm:h-[370px] flex items-center justify-between">
      <div className="w-full sm:w-[99%] h-full xl:w-[1135px] sm:overflow-hidden flex ease-linear transition-transform duration-300">
        <div className="sm:hidden flex overflow-scroll h-full  w-full gap-5">
          {data?.map((el: any, i: number): JSX.Element => {
            return (
              <div
                key={i}
                className="min-w-[200px] h-full rounded-sm  relative  "
               
              >
                <Image
                  className="object-cover min-w-full h-full  rounded-sm"
                  src={el.img}
                  width={365}
                  height={300}
                  alt="Carousel image"
                />
                <div className="bg-[#ff7119] text-white px-3 py-1 rounded-t-sm flex justify-center items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[6px]">
                  {el.name}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="sm:flex ease-linear transition-transform duration-300 justify-start gap-[20px] hidden"
          style={{
            transform: `translateX(-${startIndex * 385}px)`, // Using percentage for responsiveness
          }}
        >
          {data?.map((el: any, i: number): JSX.Element => {
            return (
              <div
                key={i}
                className="sm:w-[365px] sm:h-[365px] rounded-sm  relative  "
                onClick={()=>handleNavigate(el._id)}
              >
                <Image
                  className="object-cover w-full h-full rounded-sm"
                  src={el.img}
                  width={365}
                  height={350}
                  alt="Carousel image"
                />
                <div className="bg-[#ff7119] text-white w-[250px] h-[33px] rounded-t-sm flex justify-center items-center absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  {el.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Arrow buttons for navigation */}
      <div className="ml-[30px] z-10 sm:block hidden">
        <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
      </div>
    </div>
  );
};
