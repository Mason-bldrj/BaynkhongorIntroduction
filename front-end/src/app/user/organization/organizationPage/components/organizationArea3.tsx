"use client";
import { OrangeBourd } from "@/app/components/detail/orengeBourd";
import { ArrowButtons } from "@/app/components/detail/arrowButtons";
import { useState, useEffect } from "react";
import { OrganizationRelaxCard } from "./organizationRelaxCard";
export const OrganizationArea3 = ({ data }: any) => {
  const [news, setNews] = useState(Boolean);
  const [startIndex, setStartIndex] = useState(0);
  const tour = Array.isArray(data)
    ? data.filter((el: any) => el.institutionType === "TOUR")
    : [];
  const visibleCount = 1;
  const handleNext = () => {
    if (startIndex + visibleCount < tour.length) {
      setStartIndex(startIndex + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  useEffect(() => {
    if (tour.length === 0) {
      setNews(false);
    } else {
      setNews(true);
    }
  }, []);
  return (
    <div className="w-full  flex flex-col gap-10">
      <div className="w-full">
        {news ? (
          <OrganizationRelaxCard data={tour} startIndex={startIndex} />
        ) : (
          <div>Байгууллага байхгүй байна.</div>
        )}
      </div>
    </div>
  );
};
