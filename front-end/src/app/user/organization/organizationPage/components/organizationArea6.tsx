"use client";
import { HolbooCard } from "./holboo";
import { bplace } from "@/app/data";

export const OrganizationArea6 = ({data}:any)  => {
  const union=Array.isArray(data)
  ? data.filter((el: any) => el.institutionType === "UNION")
  : [];
  return (
    <div className="w-full flex flex-col gap-10">
      <HolbooCard data={union}/>
    </div>
  );
};
