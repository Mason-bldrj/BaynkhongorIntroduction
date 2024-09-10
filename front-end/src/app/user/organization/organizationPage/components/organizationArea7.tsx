"use client";
import { HolbooCard } from "./holboo";
import { bplace } from "@/app/data";

export const OrganizationArea7 = ({data}:any)  => {
  const club= data?.filter((el: any) => {
    return el.institutionType === "CLUB";
  });
  return (
    <div className="w-full sm:w-[90%] xl:w-[1147px] flex flex-col gap-10">
      <HolbooCard data={club}/>
    </div>
  );
};
