"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export const EventCard = ({ data, startIndex }: any) => {
  const router = useRouter();
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
  const handleNavigate = (id: string) => {
    router.push(`/user/EVENT${id}`);
  };
  return (
    <div className="w-full sm:h-full h-[300px] flex ">
      <div className="flex w-full h-[470px] overflow-hidden flex-col transition-transform duration-300 ease-linear justify-start">
        <div
          className="sm:hidden flex w-fit ease-linear transition-transform duration-300 justify-start gap-[20px] "
          style={{
            transform: `translateX(-${startIndex * 387}px)`,
          }}
        >
          {data?.map((el: any, i: number) => {
            return (
              <div
                key={i}
                onClick={() => handleNavigate(el._id)}
                className=" relative w-[367px] "
              >
                <Image
                  className="w-full max-h-[150px]  rounded-t-md border"
                  src={el.img}
                  width={20033}
                  height={10033}
                  alt="Carousel image"
                />
                <div>{el?.Name}</div>
                <div className="w-full h-[100px] overflow-y-scroll bg-slate-100 *:text-[12px] *:ml-2 rounded-b-md flex flex-col gap-1">
                  <div className="mt-1 font-bold">{el.name}</div>
                  <div className="">{el.description}</div>
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
          {data?.map((el: any, i: number) => {
            return (
              <div
                key={i}
                className="sm:w-full xl:w-[1000px] h-[440px] relative "
                onClick={() => handleNavigate(el._id)}
              >
                <Image
                  className="sm:w-full xl:w-[1000px] max-h-[440px] shadow-[30px_30px] rounded-md shadow-gray-300 object-cover"
                  src={`${el.img} `}
                  width={500}
                  height={500}
                  alt="Carousel image"
                />
                <div className="sm:w-full xl:w-[910px] h-[112px] flex flex-col justify-around *:px-5 rounded-md  items-center bg-black opacity-75 text-white absolute xl:left-[50px] bottom-[20px] ">
                  <div>{el.name}</div>
                  <div className="w-[80%] overflow-hidden">
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
