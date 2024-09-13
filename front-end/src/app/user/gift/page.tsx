"use client";
import { fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { BannerArea } from "@/app/components/homapage/bannerArea";
import { BrandCard } from "@/app/components/detail/brandCard";
import { OrangeBourd } from "@/app/components/detail/orengeBourd";
import { useState, useEffect } from "react";
type KeepsakeData = any;

export default function Gift() {
  const [data, setData] = useState<KeepsakeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchedData = async () => {
    try {
      const res = await fetchFunc(urls.KEEPSAKE);
      const jsonData = await res.json();
      setData(jsonData);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch keepsake data:", err);
      setError("Failed to load data.");
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
    <div className="max-w-[1147px] m-auto w-[95%] flex flex-col items-center justify-between gap-5 sm:mt-0 mt-5 md:gap-10">
      <BannerArea />
      <div className="w-full flex justify-start">
        <OrangeBourd data={"БРЭНД БҮТЭЭГДЭХҮҮН"} />
      </div>
      {data ? <BrandCard data={data} /> : <p>No data available.</p>}
    </div>
  );
}
