"use client";
import { bplace } from "@/app/data";
import { OrangeBourd } from "../detail/orengeBourd";
import { BrandCard } from "../detail/brandCard";
import { useState, useEffect } from "react";
import urls from "@/lib/urls";
import { fetchFunc } from "@/app/backdata";
export const BrandArea = () => {
  const [data, setdata] = useState();
  const fetchedData = async () => {
    const res = fetchFunc(urls.KEEPSAKE);
    const data = await (await res).json();
    setdata(data);
  };
  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <div className="max-w-[1147px] m-auto w-[95%] flex justify-center">
      <div className="w-full flex flex-col items-start mt-10">
        <div className="sm:mb-10 sm:ml-[80px]">
          {" "}
          <OrangeBourd data={"БРЭНД БҮТЭЭГДЭХҮҮН"} />
        </div>
        <BrandCard data={data}/>
      </div>
    </div>
  );
};
