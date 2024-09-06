"use client";
import { fetchFunc } from "@/app/backdata";
import { Title } from "./components/title";
import Image from "next/image";
import urls from "@/lib/urls";
import { useEffect, useState } from "react";
import { EmployeeCard } from "./components/employeeCard";
import { aboutUsData } from "@/app/data";
const api_Url = process.env.NEXT_PUBLIC_API_URL;
export default function AboutUs() {
  const [data, setdata] = useState();
  const fetchedData = async () => {
    const res = fetchFunc(urls.ABOUTUS);
    const data = await (await res).json();
    setdata(data[0]);
  };
  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <div className="sm:h-[fit] md:h-[300px]  sm:w-[98%] lg:w-[950px] lg:h-[340px] xl:h-[373px] xl:w-[1137px] flex flex-col items-center mt-10 gap-4">
      {aboutUsData.map((el, i) => {
        return (
          <>
            <div className="lg:w-[870px] xl:w-[987px] flex flex-col items-start justify-between md:h-[200px]">
              <div className="w-full text-center text-[10px] sm:text-sm font-sans  tracking-wide leading-[20px] md:leading-[28px]">
                {el.orshil}
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-between">
              <div className="w-[98%] flex justify-start">
                {" "}
                <Title title={"Баянхонгор аймгийн аялал"} />
              </div>
              <div className=" mt-7 leading-[28px] font-sans w-[98%] lg:text-[15px] xl:text-[16px] md:text-[14px] sm:text-[13px] text-[11px]">
                {el.travel}
              </div>
              <div className="md:w-full flex md:h-[373px] mt-10 justify-between flex-wrap  md:flex-none">
                <div className="md:w-[48%] w-[98%] h-full">
                  {" "}
                  <Image
                    className="object-cover  rounded-sm min-w-full h-full"
                    src={el.img}
                    width={525}
                    height={373}
                    alt="Carousel image"
                  />
                </div>
                <div className="md:h-full md:w-[48%] w-[98%] flex flex-col justify-between">
                  <div className=" w-full py-2 flex flex-col h-[42%] items-center justify-center shadow-lg rounded-b-md md:mt-0 mt-5">
                    <div className="w-[90%] text-[#ff7119] lg:text-[15px] xl:text-[16px] md:text-[14px] sm:text-[16px] text-[11px]">
                      Зорилго:
                    </div>
                    <div className="w-[90%] lg:text-[14px] xl:text-[15px] md:text-[13px] sm:text-[15px] text-[10px]">
                      {el.zorilogo}
                    </div>
                  </div>
                  <div className="w-full py-2 flex flex-col items-center justify-end rounded-b-md h-[55%] md:mt-0 mt-5">
                    <div className="w-[90%] text-[#ff7119] lg:text-[15px] xl:text-[16px] md:text-[14px] sm:text-[16px] text-[11px]">
                      Зорилт:
                    </div>
                    <div className="w-[90%] lg:text-[14px] xl:text-[15px] md:text-[13px] sm:text-[15px] text-[10px]">
                      {el.zorilt}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-between mt-10 gap-5">
              <Title title={"Алба хаагчид"} />
              <EmployeeCard />
            </div>
          </>
        );
      })}
    </div>
  );
}
