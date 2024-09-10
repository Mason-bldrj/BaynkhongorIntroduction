"use client";
import { OrganizationRestaurantCard } from "./organizationRestaorantCard";
import { ArrowButtons } from "@/app/components/detail/arrowButtons";
import { useState } from "react";
import { OrganizationHotelCard } from "./organizationHotelCard";
export const OrganizationArea1 = ({ data }: any): JSX.Element => {
  const [startIndex, setStartIndex] = useState(0);
  const restaurant = data?.filter((el: any) => {
    return el.institutionType === "SERVICE";
  });
  const hotel = data?.filter((el: any) => {
    return el.institutionType === "SERVICE";
  });
  const visibleCount = 1;
  const handleNext = () => {
    if (startIndex + visibleCount < hotel.length) {
      setStartIndex(startIndex + 1);
    }
  };
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
      <div className="flex w-full justify-between">
        <div className=" w-full text-[#ff7119]">ЗОЧИД БУУДАЛ</div>
        <div className="sm:block hidden">
          {" "}
          <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </div>
      <div className=" w-full ">
        <OrganizationHotelCard hotel={hotel} startIndex={startIndex} />
      </div>
    </div>
  );
};
