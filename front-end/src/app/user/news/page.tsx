"use client";
import { fetchFunc } from "@/app/backdata";
import { BannerArea } from "@/app/components/homapage/bannerArea";
import { SuggestionArea } from "@/app/components/homapage/suggestionArea";
import { NewsVideoArea } from "@/app/components/newspage/newsVideoArea";
import { TailanArea } from "@/app/components/newspage/tailanArea";
import { useEffect , useState } from "react";
import urls from "@/lib/urls";
export default function News() {
  const [data, setdata] = useState();
  const [data1, setdata1] = useState();
  const [data2, setdata2] = useState();
  const fetchedData = async () => {
    const res = fetchFunc(urls.NEWS);
    const data = await (await res).json();
    setdata(data.reportData);
    setdata1(data.videoData);
    setdata2(data.resourcesData);
  };
  useEffect(() => {
    fetchedData();
  }, []);
  console.log(data1);
  
  
  return (
    <div className="w-full flex flex-col items-center justify-between gap-10">
      <BannerArea/>
      <SuggestionArea  />
      <TailanArea data={data}/>
      <NewsVideoArea data={data}  data2={data2}/>

    </div>
  );
}
