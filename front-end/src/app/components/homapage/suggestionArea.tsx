"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { OrangeBourd } from "../detail/orengeBourd";
import urls from "@/lib/urls";
import { fetchFunc, putFunc } from "@/app/backdata";

export const SuggestionArea = () => {
  const [dataHolder, setDataHolder] = useState<any[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const fetchedData = async () => {
    try {
      const res = await fetchFunc(urls.OFFERS);
      const data = await res.json();
      setDataHolder(data.map((item: any) => ({
        ...item,
        percent: 0 // Initialize percent to 0
      })));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const progressCalculator = async (id: string) => {
    const updatedData = [...dataHolder];
    const itemIndex = updatedData.findIndex(item => item._id === id);

    if (itemIndex >= 0) {
      // Update count locally
      updatedData[itemIndex].count++;
      
      // Calculate new percentages
      const clickCount = updatedData.reduce((total, place) => total + place.count, 0);

      updatedData.forEach((el) => {
        el.percent = clickCount > 0 ? Math.floor((el.count * 100) / clickCount) : 0;
      });

      setDataHolder(updatedData);

      // Update count on the server
      try {
        await updateItemCount(id, updatedData[itemIndex].count);
      } catch (error) {
        console.error("Error updating item count:", error);
      }
    }
  };

  const updateItemCount = async (itemId: string, newCount: number) => {
    const sub_url = `/items/${itemId}`; // Adjust the sub_url based on your API
    const body = { count: newCount };
    try {
      const response = await putFunc(sub_url, body);
      console.log("Update successful:", response);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };
  
  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <div className="w-[95%] max-w-[1147px] mx-auto flex flex-col items-center sm:block mt-3 sm:mt-10">
      <div className="sm:flex w-full justify-between">
        <div className="w-[173px]">
          <OrangeBourd data={"Санал"} />
        </div>
        <div>Та Хонгор нутагт хаашаа аялахыг хүсэж байгаагаа сонгоно уу?</div>
      </div>
      <div className="sm:hidden flex flex-col w-full mt-5">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="border-[#ff7119] border-2 bg-gray-100 hover:bg-[#FF6C10] hover:text-white w-full h-[50px] flex items-center justify-center text-sm rounded-lg"
        >
          {isExpanded
            ? "Хаах"
            : "Та Хонгор нутагт хаашаа аялахыг хүсэж байгаагаа сонгох бол энд дарна уу."}
        </button>
        {isExpanded && (
          <div className="flex flex-wrap justify-around w-full mt-2">
            {dataHolder.map((el) => (
              <div
                key={el._id}
                className="flex flex-col items-center w-full lg:w-[22%] xl:w-[20%] mb-5"
              >
                <Image
                  className="object-cover w-full max-h-[150px] cursor-pointer"
                  src={el.img}
                  width={500}
                  height={500}
                  alt="Carousel image"
                />
                <button
                  onClick={() => progressCalculator(el._id)}
                  className="bg-[#D9D9D9] hover:bg-[#ff7119] hover:text-white w-full h-10 flex justify-center items-center text-center text-sm rounded-lg mt-2"
                >
                  {el.name}
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

      {/* Tалбарын хувилбарын хэсэг */}
      <div className="sm:flex hidden justify-between mt-5 rounded-sm w-full sm:gap-2 md:gap-5 gap-[20px] sm:overflow-visible">
        {dataHolder.map((el) => (
          <div
            key={el._id}
            className="sm:min-w-[13%] md:min-w-[16%] lg:min-w-[15%] xl:min-w-[173px] h-full relative"
          >
            <Image
              className="object-cover sm:w-full sm:h-full cursor-pointer"
              src={el.img}
              width={173}
              height={200}
              alt="Carousel image"
            />
            <button
              onClick={() => progressCalculator(el._id)}
              className="bg-[#D9D9D9] hover:bg-[#ff7119] hover:text-white sm:h-[27px] w-[125px] h-[40px] sm:w-[80%] xl:h-[40px] xl:w-[125px] flex justify-center items-center text-center absolute bottom-10 sm:text-[6px] md:text-[7px] lg:text-[10px] xl:text-sm right-0 hover:opacity-100 opacity-70 rounded-l-sm z-10"
            >
              {el.name}
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
