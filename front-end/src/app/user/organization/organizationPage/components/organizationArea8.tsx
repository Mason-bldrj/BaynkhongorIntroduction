"use client";
import { HolbooCard } from "./holboo";
import { bplace } from "@/app/data";

export const OrganizationArea8 = ({ data }: any) => {
  const theater = data?.filter((el: any) => {
    return el.institutionType === "THEATER";
  });
  return (
    <div className="w-full sm:w-[90%] xl:w-[1147px] flex flex-col gap-10">
      <HolbooCard data={theater} />
    </div>
  );
};
