"use client";
import { HolbooCard } from "./holboo";
import { bplace } from "@/app/data";

export const OrganizationArea6 = ({data}:any)  => {
  const union=Array.isArray(data)
  ? data.filter((el: any) => el.institutionType === "UNION")
  : [];
  return (
    <div className="w-full sm:w-[90%] xl:w-[1147px] flex flex-col gap-10">
      <HolbooCard data={union}/>
    </div>
  );
};
