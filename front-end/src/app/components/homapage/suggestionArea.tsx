"use client";
import { bplace2 } from "../../data";
import Image from "next/image";
import { useState, useEffect, use } from "react";
import React from "react";
import { OrangeBourd } from "../detail/orengeBourd";
import { useRouter } from "next/navigation";
interface ProgressBarProps {
  progress: number;
}
export const SuggestionArea = () => {
  const router = useRouter();
  const [clientPercent, setClientPercent] = useState(0);
  const [dataHolder, setDataHolder] = useState(bplace2);
  const progressCalculator = (index: number, Event: any) => {
    dataHolder[index].count++;
    let clickCount = dataHolder.reduce(
      (total, place) => total + place.count,
      0
    );
    dataHolder.map((el, i) => {
      el.percent = Math.floor(
        (el.percent = Math.floor((el.count * 100) / clickCount))
      );
    });
    setClientPercent(bplace2[index].percent);
  };
  useEffect(() => {
    dataHolder;
    clientPercent;
  }, [progressCalculator]);
  const handleNavigate = (id: number) => {
    router.push(`/user/${id}`);
  };
  return (
    <div className="w-full lg:w-[1000px] flex flex-col  items-center sm:block sm:w-[80%]  xl:w-[1147px] mt-3 sm:mt-10">
      <div className="xl:ml-10 flex flex-col gap-5 w-full">
        <div className="w-[173px]">
          {" "}
          <OrangeBourd data={"Санал"} />
        </div>
        <div>Та Хонгор нутагт хаашаа аялахыг хүсэж байгаагаа сонгоно уу?</div>
      </div>
      <div className="flex justify-between mt-5 rounded-sm w-full sm:gap-2 md:gap-5 gap-[20px]  overflow-x-scroll sm:overflow-visible">
        {dataHolder.map((el, i): JSX.Element => {
          return (
            <div key={i} className="min-w-[173px] sm:min-w-[13%] md:min-w-[16%] lg:min-w-[15%]  xl:min-w-[173px] h-full relative ">
              <Image
                onClick={() => {
                  handleNavigate(el.id);
                }}
                className="object-cover w-full h-full cursor-pointer"
                src={el.icon}
                width={173}
                height={200}
                alt="Carousel image"
              />
              <button
                onClick={(Event) => progressCalculator(i, Event)}
                className="bg-[#D9D9D9] hover:bg-[#ff7119] hover:text-white sm:h-[27px] w-[125px] h-[40px] sm:w-[80%] xl:h-[40px] xl:w-[125px] flex justify-center items-center text-center absolute bottom-10 sm:text-[6px] md:text-[7px] lg:text-[10px]  xl:text-sm right-0 opacity-70 rounded-l-sm z-10"
              >
                {el.title}
              </button>
              <div className="w-full bg-gray-200  rounded-md h-[8px] dark:bg-gray-700 mt-1 flex justify-between items-center">
                <div
                  className="bg-[#ff7119] h-[8px] rounded-md w-full "
                  style={{ width: `${el.percent}%` }}
                ></div>
                <div className="w-[5px] flex items-center  mr-7 text-[10px]">
                  {el.percent + "%"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
