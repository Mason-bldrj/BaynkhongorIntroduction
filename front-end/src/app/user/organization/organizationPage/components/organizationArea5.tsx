"use client";
import { Monestry } from "./monestry";
export const OrganizationArea5 = ({ data }: any) => {
  const church = Array.isArray(data)
  ? data.filter((el: any) => el.institutionType === "CHURCH")
  : [];
  return (
    <div className="w-full flex flex-col gap-10">
      <Monestry data={church} />
    </div>
  );
};
