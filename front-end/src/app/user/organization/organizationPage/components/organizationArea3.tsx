"use client";
import { OrangeBourd } from "@/app/components/detail/orengeBourd";
import { ArrowButtons } from "@/app/components/detail/arrowButtons";
import { useState } from "react";
import { OrganizationRelaxCard } from "./organizationRelaxCard";
export const OrganizationArea3 = ({ data }: any) => {
  const [startIndex, setStartIndex] = useState(0);
  const tour =Array.isArray(data)
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
  return (
    <div className="w-full  flex flex-col gap-10">
      <div className="w-full">
        <OrganizationRelaxCard data={tour} startIndex={startIndex} />
      </div>
    </div>
  );
};
