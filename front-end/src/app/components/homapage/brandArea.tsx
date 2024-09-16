"use client";
import { OrangeBourd } from "../detail/orengeBourd";
import { BrandCard } from "../detail/brandCard";
import { useState, useEffect } from "react";
import urls from "@/lib/urls";
import { fetchFunc } from "@/app/backdata";

export const BrandArea = () => {
  const [data, setData] = useState(null); // State for fetched data
  const [loading, setLoading] = useState(true); // Loading state

  const fetchedData = async () => {
    setLoading(true); // Start loading
    try {
      const res = await fetchFunc(urls.KEEPSAKE);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <div className="max-w-[1147px] m-auto w-[95%] flex justify-center">
      <div className="w-full flex flex-col items-start mt-10">
        <div className="sm:mb-10 sm:ml-[80px]">
          <OrangeBourd data={"БРЭНД БҮТЭЭГДЭХҮҮН"} />
        </div>
        {loading ? (
            <div className="w-full flex justify-center items-center h-[200px]">
            <div className="loader"></div>{" "}
          </div>
        ) : (
          <BrandCard data={data} />
        )}
      </div>
    </div>
  );
};
