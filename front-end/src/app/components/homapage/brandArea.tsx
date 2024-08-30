"use client";
import { bplace } from "@/app/data";
import { OrangeBourd } from "../detail/orengeBourd";
import { BrandCard } from "../detail/brandCard";

export const BrandArea = () => {
  return (
    <div className="w-full flex flex-col items-start mt-10">
      <div className="mb-10 ml-[50px]">
        {" "}
        <OrangeBourd data={"БРЭНД БҮТЭЭГДЭХҮҮН"} />
      </div>
      <div className="">
        <div className="w-full h-full  top-[10px] left-0">
          <BrandCard />
        </div>
      </div>
    </div>
  );
};
