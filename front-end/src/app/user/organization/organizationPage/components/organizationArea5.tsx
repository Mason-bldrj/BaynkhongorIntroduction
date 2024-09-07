"use client";
import { bplace } from "@/app/data";
import { Monestry } from "./monestry";
export const OrganizationArea5 = () => {
  return (
    <div className="w-full xl:w-[1147px] flex flex-col gap-10">
      <Monestry data={bplace}/>
    </div>
  );
};
