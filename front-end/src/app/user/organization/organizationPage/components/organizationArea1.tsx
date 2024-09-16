"use client";
import { OrganizationRestaurantCard } from "./organizationRestaorantCard";
import { ArrowButtons } from "@/app/components/detail/arrowButtons";
import { useState } from "react";
import { OrganizationHotelCard } from "./organizationHotelCard";
export const OrganizationArea1 = ({ data }: any): JSX.Element => {
  const [startIndex, setStartIndex] = useState(0);
  const restaurant = Array.isArray(data)
  ? data.filter((el: any) => el.institutionType === "SERVICE")
  : [];
  const visibleCount = 4;
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="w-full  flex flex-col gap-10 ">
      <div className="w-full">
        <OrganizationRestaurantCard
          restaurant={restaurant}
          startIndex={startIndex}
        />
      </div>
    </div>
  );
};
