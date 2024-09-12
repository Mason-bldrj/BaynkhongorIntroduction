"use client";
import { bplace } from "@/app/data";
import { Monestry } from "./monestry";
export const OrganizationArea5 = ({ data }: any) => {
  const church = Array.isArray(data)
  ? data.filter((el: any) => el.institutionType === "CHURCH")
  : [];
  return (
    <div className="w-full xl:w-[1147px] flex flex-col gap-10">
      <Monestry data={church} />
    </div>
  );
};
