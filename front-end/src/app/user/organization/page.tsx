"use client";
import { OrganizationArea1 } from "./organizationPage/components/organizationArea1";
import { OrganizationArea2 } from "./organizationPage/components/organizationArea2";
import { OrganizationArea3 } from "./organizationPage/components/organizationArea3";
import { OrganizationArea4 } from "./organizationPage/components/organizationArea4";
import { OrganizationArea5 } from "./organizationPage/components/organizationArea5";
import { OrganizationArea6 } from "./organizationPage/components/organizationArea6";
import { OrganizationArea7 } from "./organizationPage/components/organizationArea7";
import { BannerArea } from "@/app/components/homapage/bannerArea";
import { organiztionCategory } from "@/app/data";
import { useState } from "react";

export default function Organization() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const handleComponents = (i: number) => {
    setCategoryIndex(i);
  };
  const components = [
    <OrganizationArea1 key="area1" />,
    <OrganizationArea2 key="area2" />,
    <OrganizationArea3 key="area3" />,
    <OrganizationArea4 key="area4" />,
    <OrganizationArea5 key="area5" />,
    <OrganizationArea6 key="area6" />,
    <OrganizationArea7 key="area7" />
  ];

  return (
    <div className="w-full flex flex-col items-center justify-between gap-10">
      <BannerArea />
      <div className="flex w-full sm:w-[90%] xl:w-[1147px] justify-between">
        {organiztionCategory.map((el, i) => (
          <button
            onClick={() => handleComponents(i)}
            className="px-5 rounded-md py-1 hover:bg-[#ff7119] text-[8px] md:text-[10px] lg:text-[17px]"
            key={i}
          >
            {el}
          </button>
        ))}
      </div>

      {/* Conditionally render the component based on the index */}
      <div>{components[categoryIndex]}</div>
    </div>
  );
}
