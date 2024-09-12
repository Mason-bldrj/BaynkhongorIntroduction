"use client";
import { OrganizationArea1 } from "./organizationPage/components/organizationArea1";
import { OrganizationArea2 } from "./organizationPage/components/organizationArea2";
import { OrganizationArea3 } from "./organizationPage/components/organizationArea3";
import { OrganizationArea4 } from "./organizationPage/components/organizationArea4";
import { OrganizationArea5 } from "./organizationPage/components/organizationArea5";
import { OrganizationArea6 } from "./organizationPage/components/organizationArea6";
import { OrganizationArea7 } from "./organizationPage/components/organizationArea7";
import { OrganizationArea8 } from "./organizationPage/components/organizationArea8";
import { BannerArea } from "@/app/components/homapage/bannerArea";
import { organiztionCategory } from "@/app/data";
import { useState, useEffect } from "react";
import { fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";
export default function Organization() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [data, setdata] = useState();
  const fetchedData = async () => {
    const res = fetchFunc(urls.institution);
    const data = await (await res).json();
    setdata(data);
  };
  const handleComponents = (i: number) => {
    setCategoryIndex(i);
  };
  useEffect(() => {
    fetchedData();
  }, []);
  const components = [
    <OrganizationArea1 data={data} key="area1" />,
    <OrganizationArea2 data={data} key="area2" />,
    <OrganizationArea3 data={data} key="area3" />,
    <OrganizationArea4 data={data} key="area4" />,
    <OrganizationArea5 data={data} key="area5" />,
    <OrganizationArea6 data={data} key="area6" />,
    <OrganizationArea7 data={data} key="area7" />,
    <OrganizationArea8 data={data} key="area8" />,
  ];

  return (
    <div className="w-[90%] xl:w-[1148px]  flex flex-col items-center justify-between gap-5 md:gap-10 sm:mt-0 mt-5">
      <BannerArea />
      <div className="w-full overflow-x-scroll scrollbar-hide">
        <div className="flex w-[1147px] justify-around border-b border-b-[#ff7119] pb-5 items-center">
          {organiztionCategory.map((el, i) => (
            <button
              onClick={() => handleComponents(i)}
              className="flex w-fit px-2 border hover:text-white justify-center rounded-md py-1 hover:bg-[#ff7119]"
              key={i}
            >
              {el}
            </button>
          ))}
        </div>
      </div>
      <div className="xl:w-full w-full sm:w-[90%] flex justify-center ">
        {components[categoryIndex]}
      </div>
    </div>
  );
}
