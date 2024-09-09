"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
export const EventCard = ({ bplace, startIndex }: any) => {
  const [backData, setBackData] = useState([]);
  useEffect(() => {
    fetch("https://baynkhongor-backend.vercel.app/api/event")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBackData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return (
    <div className="w-full sm:h-full h-[300px] flex ">
      <div className="flex w-full sm:w-[1155px] h-[470px] overflow-scroll sm:overflow-hidden flex-col transition-transform duration-300 ease-linear justify-start">
        <div className="sm:hidden flex gap-5 ">
          {bplace.map((el: any , i:number) => {
            return (
              <div key={i} className=" relative">
                <Image
                  className="min-w-[250px] max-h-[150px]  rounded-t-md"
                  src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                  width={200}
                  height={100}
                  alt="Carousel image"
                />
                <div className="w-full h-[100px] bg-slate-100 *:text-[12px] *:ml-2 rounded-b-md flex flex-col gap-1">
                  <div className="mt-1 font-bold">{el.title}</div>
                  <div>{el.idk}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="sm:flex flex-col ease-linear transition-transform duration-300 justify-start gap-[50px] hidden"
          style={{
            transform: `translateY(-${startIndex * 490}px)`,
          }}
        >
          {bplace.map((el: any, i: number) => {
            return (
              <div key={i} className="sm:w-full xl:w-[1000px] h-[440px] relative">
                <Image
                  className="sm:w-full xl:w-[1000px] max-h-[440px] sm:shadow-[10px_10px] xl:shadow-[30px_30px] rounded-md shadow-gray-300 object-cover"
                  src="https://i.pinimg.com/originals/07/8c/71/078c71955fe352c544e395fbafddf82c.jpg"
                  width={500}
                  height={500}
                  alt="Carousel image"
                />
                <div className="sm:w-full xl:w-[910px] h-[112px] flex flex-col justify-around *:px-5 rounded-md  items-center bg-black opacity-75 text-white absolute xl:left-[50px] bottom-[20px] overflow-hidden">
                  <div>{el.title}</div>
                  <div>{el.idk}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
