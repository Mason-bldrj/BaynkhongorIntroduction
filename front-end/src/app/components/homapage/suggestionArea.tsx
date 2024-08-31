"use client";
import { bplace } from "../../data";
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
  const [dataHolder, setDataHolder] = useState(bplace);
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
    setClientPercent(bplace[index].percent);
  };
  useEffect(() => {
    dataHolder;
    clientPercent;
  }, [progressCalculator]);
  const handleNavigate = (id: number) => {
    router.push(`/${id}`);
    };
  return (
    <div className="w-[1147px] mt-10">
      <div className="ml-10 flex flex-col gap-5 ">
        <div className="w-[173px]">
          {" "}
          <OrangeBourd data={"Санал"} />
        </div>

        <div>Та Хонгор нутагт хаашаа аялахыг хүсэж байгаагаа сонгоно уу?</div>
      </div>
      <div className="flex justify-between mt-5 rounded-sm">
        {dataHolder.map((el, i): JSX.Element => {
          return (
            <div onClick={()=>{handleNavigate(el.id)}} key={i} className="w-[173px] h-[200px] relative">
              <Image
                className="object-cover w-full h-full"
                src={el.icon}
                width={173}
                height={197}
                alt="Carousel image"
              />
              <button
                onClick={(Event) => progressCalculator(i, Event)}
                className="bg-[#D9D9D9] hover:bg-[#ff7119] hover:text-white h-[40px] w-[125px] flex justify-center items-center text-center absolute top-[140px] text-sm right-0 opacity-70 rounded-l-sm"
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
