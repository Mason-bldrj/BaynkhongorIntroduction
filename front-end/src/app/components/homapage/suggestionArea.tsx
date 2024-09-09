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

  const handleNavigate = (id: number) => {
    router.push(`/user/${id}`);
  };

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
          {isExpanded ? 'Хаах' : 'Та Хонгор нутагт хаашаа аялахыг хүсэж байгаагаа сонгох бол энд дарна уу.'}
        </button>
        {isExpanded && (
          <div className="flex flex-wrap justify-around w-full mt-2">
            {dataHolder.map((el, i) => (
              <div
                key={i}
                className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] mb-5"
              >
                <Image
                  onClick={() => handleNavigate(el.id)}
                  className="object-cover w-full h-[150px] cursor-pointer"
                  src="data:image/jpeg;base64,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"
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
              onClick={() => handleNavigate(el.id)}
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
