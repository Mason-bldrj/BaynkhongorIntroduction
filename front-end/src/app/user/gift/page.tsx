"use client";
import { fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { BannerArea } from "@/app/components/homapage/bannerArea";
import { BrandCard } from "@/app/components/detail/brandCard";
import { OrangeBourd } from "@/app/components/detail/orengeBourd";
import { useState , useEffect } from "react";
export default function Gift() {
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
    <div className="max-w-[1147px] m-auto w-[95%]  flex flex-col items-center justify-between gap-5 sm:mt-0 mt-5 md:gap-10 ">
      <BannerArea />
      <div className="w-full flex justify-start">
          {" "}
          <OrangeBourd data={"БРЭНД БҮТЭЭГДЭХҮҮН"} />
        </div>
  
      <BrandCard data={data}/>
    </div>
  );
}
