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

// Define the type for the data you are fetching
type OrganizationData = any; // Replace with actual types if possible

export default function Organization() {
  const [categoryIndex, setCategoryIndex] = useState<number>(0);
  const [data, setData] = useState<OrganizationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetchedData = async () => {
    try {
      setLoading(true);
      const res = await fetchFunc(urls.institution);
      const jsonData = await (await res).json();
      setData(jsonData);
    } catch (error) {
      setError("Failed to fetch organization data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleComponents = (i: number) => {
    setCategoryIndex(i);
  };

  useEffect(() => {
    fetchedData();
  }, []);

  // Components to display based on category index
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
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-[200px]">
        <div className="loader"></div>{" "}
      </div>
    );
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-[1147px] m-auto w-[95%] flex flex-col items-center justify-between gap-5 md:gap-10 sm:mt-0 mt-5">
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
