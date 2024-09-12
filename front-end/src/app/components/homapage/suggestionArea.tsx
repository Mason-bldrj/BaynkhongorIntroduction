"use client";
import { bplace2 } from "../../data";
import Image from "next/image";
import { useState, useEffect } from "react";
import { OrangeBourd } from "../detail/orengeBourd";
import { useRouter } from "next/navigation";
export const SuggestionArea = () => {
  const router = useRouter();
  const [clientPercent, setClientPercent] = useState(0);
  const [dataHolder, setDataHolder] = useState(bplace2);
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle content

  const progressCalculator = (index: number, Event: any) => {
    const updatedData = [...dataHolder];
    updatedData[index].count++;
    let clickCount = updatedData.reduce(
      (total, place) => total + place.count,
      0
    );
    updatedData.map((el) => {
      el.percent = Math.floor((el.count * 100) / clickCount);
    });
    setDataHolder(updatedData);
    setClientPercent(updatedData[index].percent);
  };

  useEffect(() => {
    // Empty useEffect
  }, []);

  return (
    <div className="w-[90%] lg:w-[1000px] flex flex-col items-center sm:block sm:w-[80%] xl:w-[1147px] mt-3 sm:mt-10">
      <div className="xl:ml-10 sm:flex flex-col gap-5 w-full hidden">
        <div className="w-[173px]">
          <OrangeBourd data={"Санал"} />
        </div>
        <div>Та Хонгор нутагт хаашаа аялахыг хүсэж байгаагаа сонгоно уу?</div>
      </div>

      {/* Утасны хувилбарын хэсэг */}
      <div className="sm:hidden flex flex-col w-full mt-5">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="border-[#ff7119] border-2 bg-gray-100 hover:bg-[#FF6C10] hover:text-white w-full h-[50px] flex items-center justify-center text-sm  rounded-lg"
        >
          {isExpanded
            ? "Хаах"
            : "Та Хонгор нутагт хаашаа аялахыг хүсэж байгаагаа сонгох бол энд дарна уу."}
        </button>
        {isExpanded && (
          <div className="flex flex-wrap justify-around w-full mt-2">
            {dataHolder.map((el, i) => (
              <div
                key={i}
                className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] mb-5"
              >
                <Image
                  className="object-cover w-full h-[150px] cursor-pointer"
                  src={el.icon}
                  width={500}
                  height={500}
                  alt="Carousel image"
                />
                <button
                  onClick={(Event) => progressCalculator(i, Event)}
                  className="bg-[#D9D9D9] hover:bg-[#ff7119] hover:text-white w-full h-10 flex justify-center items-center text-center text-sm rounded-lg mt-2"
                >
                  {el.title}
                </button>
                <div className="w-full bg-gray-200 rounded-md h-2 mt-1 flex items-center">
                  <div
                    className="bg-[#ff7119] h-full rounded-md"
                    style={{ width: `${el.percent}%` }}
                  ></div>
                  <div className="text-xs ml-2">{el.percent + "%"}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Талбарын хувилбарын хэсэг */}
      <div className="sm:flex hidden justify-between mt-5 rounded-sm w-full sm:gap-2 md:gap-5 gap-[20px] sm:overflow-visible">
        {dataHolder.map((el, i) => (
          <div
            key={i}
            className="sm:min-w-[13%] md:min-w-[16%] lg:min-w-[15%] xl:min-w-[173px] h-full relative"
          >
            <Image
              className="object-cover sm:w-full sm:h-full cursor-pointer"
              src={el.icon}
              width={173}
              height={200}
              alt="Carousel image"
            />
            <button
              onClick={(Event) => progressCalculator(i, Event)}
              className="bg-[#D9D9D9] hover:bg-[#ff7119] hover:text-white sm:h-[27px] w-[125px] h-[40px] sm:w-[80%] xl:h-[40px] xl:w-[125px] flex justify-center items-center text-center absolute bottom-10 sm:text-[6px] md:text-[7px] lg:text-[10px] xl:text-sm right-0 opacity-70 rounded-l-sm z-10"
            >
              {el.title}
            </button>
            <div className="w-full bg-gray-200 rounded-md h-[8px] dark:bg-gray-700 mt-1 flex justify-between items-center">
              <div
                className="bg-[#ff7119] h-[8px] rounded-md w-full"
                style={{ width: `${el.percent}%` }}
              ></div>
              <div className="w-[5px] flex items-center mr-7 text-[10px]">
                {el.percent + "%"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
