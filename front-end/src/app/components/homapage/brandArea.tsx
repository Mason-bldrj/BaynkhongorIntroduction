"use client";
import { bplace } from "@/app/data";
import { OrangeBourd } from "../detail/orengeBourd";
import { BrandCard } from "../detail/brandCard";

export const BrandArea = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full xl:w-[1147px] flex flex-col items-start mt-10">
        <div className="sm:mb-10 sm:ml-[80px]">
          {" "}
          <OrangeBourd data={"БРЭНД БҮТЭЭГДЭХҮҮН"} />
        </div>
        <div className="w-full">
          <div className="w-full sm:h-full h-[120px]">
            <BrandCard />
          </div>
        </div>
      </div>
    </div>
  );
};
