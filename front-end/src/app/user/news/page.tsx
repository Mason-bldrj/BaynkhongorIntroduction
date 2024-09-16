"use client";
import { fetchFunc } from "@/app/backdata";
import { BannerArea } from "@/app/components/homapage/bannerArea";
import { SuggestionArea } from "@/app/components/homapage/suggestionArea";
import { NewsVideoArea } from "@/app/components/newspage/newsVideoArea";
import { TailanArea } from "@/app/components/newspage/tailanArea";
import { useEffect, useState } from "react";
import urls from "@/lib/urls";

type NewsData = {
  reportData: any;
  videoData: any;
  resourcesData: any;
};
export default function News() {
  const [data, setData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetchedData = async () => {
    try {
      setLoading(true);
      const res = await fetchFunc(urls.NEWS);
      const jsonData = await (await res).json();
      setData(jsonData);
    } catch (error) {
      setError("Failed to fetch news data");
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
    <div className="max-w-[1147px] m-auto w-[95%] flex flex-col items-center justify-between gap-10">
      <BannerArea />
      <SuggestionArea />
      <TailanArea data={data?.reportData} />
      <NewsVideoArea
        data={data?.reportData}
        data1={data?.videoData}
        data2={data?.resourcesData}
      />
    </div>
  );
}
