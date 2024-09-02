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
console.log(backData);

  return (
    <div className="w-full h-[470px] flex ">
      <div className="flex w-[1155px] h-[470px] overflow-hidden flexxx transition-transform duration-300 justify-start">
        <div
          className="flexxx transition-transform duration-300 justify-start gap-[50px]"
          style={{
            transform: `translateY(-${startIndex * 490}px)`,
          }}
        >
          {bplace.map((el: any, i: number) => {
            return (
              <div key={i} className="w-[1000px] h-[440px] relative">
                <Image
                  className=" w-[1000px] max-h-[440px] shadow-[30px_30px] rounded-md shadow-gray-300"
                  src={el.icon}
                  width={1000}
                  height={440}
                  alt="Carousel image"
                />
                <div className="w-[910px] h-[112px] flex flex-col justify-around *:px-5 rounded-md  items-center bg-black opacity-75 text-white absolute left-[50px] bottom-[20px] overflow-hidden">
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
