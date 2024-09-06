"use client";
import { OrangeBourd } from "@/app/components/detail/orengeBourd";
import { ArrowButtons } from "@/app/components/detail/arrowButtons";
import { useState } from "react";
import { bplace } from "@/app/data";
import { OrganizationRelaxCard } from "./organizationRelaxCard";
export const OrganizationArea2 = () => {
  const [startIndex, setStartIndex] = useState(0);
  const relax = bplace.filter((el: any) => {
    return el.category === "relax";
  });
  const visibleCount = 1;
  const handleNext = () => {
    if (startIndex + visibleCount < relax.length) {
      setStartIndex(startIndex + 1);
    }
  };
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div className="w-full sm:w-[90%] xl:w-[1147px] flex flex-col gap-10">
      <div className="w-full">
        <OrganizationRelaxCard  relax={relax} startIndex={startIndex} />
      </div>
    </div>
  );
};
