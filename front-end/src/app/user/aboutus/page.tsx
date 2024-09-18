"use client";
import { EmployeeCard } from "./components/employeeCard";
import { Title } from "./components/title";
import Image from "next/image";
import urls from "@/lib/urls";
import { useEffect, useState } from "react";
import { fetchFunc } from "@/app/backdata";
type AboutUsData = {
  about: string;
  aboutOffice: string;
  mainImg: string;
  porpose: string;
  objective: string;
};

type EmployeeData = {
  // Define the structure of the employee data if available.
};

export default function AboutUs(props?: any) {
  const [data, setData] = useState<AboutUsData | null>(null);
  const [data2, setData2] = useState<EmployeeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchedData = async () => {
    try {
      setLoading(true);
      const res = await fetchFunc(urls.ABOUTUS);
      const jsonData = await res.json();
      setData(jsonData[0]); // Assuming that jsonData is an array
      setData2(jsonData[2]); // Setting employee data
    } catch (error) {
      setError("Failed to fetch data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-[200px]">
        <div className="loader"></div>{" "}
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className=" max-w-[1147px] m-auto w-[95%] flex flex-col items-center mt-10 gap-4">
      <div className="lg:w-[870px] xl:w-[987px] flex flex-col items-start justify-between mb-10">
        <div className="w-full text-center text-[10px] sm:text-sm font-sans tracking-wide leading-[20px] md:leading-[28px]">
          {data?.about}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-between">
        <div className="w-[98%] flex justify-start">
          <Title title={"Баянхонгор аймгийн аялал"} />
        </div>
        <div className="mt-5 leading-[28px] font-sans w-[98%] lg:text-[15px] xl:text-[16px] md:text-[14px] sm:text-[13px] text-[11px]">
          {data?.aboutOffice}
        </div>
        <div className="md:w-full flex md:h-[373px] mt-10 justify-between flex-wrap md:flex-none">
          <div className="md:w-[48%] w-[98%] h-full">
            <Image
              className="object-cover rounded-sm min-w-full h-full"
              src={data?.mainImg || "/default-image.jpg"}
              width={525}
              height={373}
              alt="Carousel image"
            />
          </div>
          <div className="md:h-full md:w-[48%] w-[98%] flex flex-col justify-center">
            <div className="w-full py-2 flex flex-col h-fit items-center justify-center shadow-lg rounded-b-md md:mt-0 mt-5">
              <div className="w-[90%] text-[#ff7119] lg:text-[15px] xl:text-[16px] md:text-[14px] sm:text-[16px] text-[11px]">
                Зорилго:
              </div>
              <div className="w-[90%] lg:text-[14px] xl:text-[15px] md:text-[13px] sm:text-[15px] text-[10px]">
                {data?.porpose}
              </div>
            </div>
            <div className="w-full py-2 flex flex-col items-center justify-end rounded-b-md h-[55%] md:mt-0 mt-5">
              <div className="w-[90%] text-[#ff7119] lg:text-[15px] xl:text-[16px] md:text-[14px] sm:text-[16px] text-[11px]">
                Зорилт:
              </div>
              <div className="w-[90%] lg:text-[14px] xl:text-[15px] md:text-[13px] sm:text-[15px] text-[10px]">
                {data?.objective}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-between mt-10 gap-5">
        <Title title={"Алба хаагчид"} />
        <EmployeeCard data2={data2} />
      </div>
    </div>
  );
}
