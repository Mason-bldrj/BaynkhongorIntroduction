"use client";
import { BannerArea } from "@/app/components/homapage/bannerArea";
import { LawCategoty } from "@/app/data";
import { useState, useEffect } from "react";
import { fetchFunc } from "@/app/backdata";
import { LawArea} from "./components/lawArea";
import { RuleArea } from "./components/ruleArea";
import { Togtool } from "./components/togtool";
import { Zahiramj } from "./components/zahiramj";
import { Zovshoorol } from "./components/zovshoorol";
import urls from "@/lib/urls";
export default function Organization() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [data, setdata] = useState();
  const fetchedData = async () => {
    const res = fetchFunc(urls.institution);
    const data = await (await res).json();
    setdata(data)
  };
  const handleComponents = (i: number) => {
    setCategoryIndex(i);
  };
  useEffect(() => {
    fetchedData();
  }, []);
  const components = [
    <LawArea key="area1" />,
    <RuleArea key="area2" />,
    <Togtool key="area3" />,
    <Zahiramj key="area4" />,
    <Zovshoorol key="area5" />,
  ];

  return (
    <div className="w-full sm:w-[90%] xl:w-[1148px]  flex flex-col items-center justify-between gap-5 md:gap-10 sm:mt-0 mt-5">
      <BannerArea />
      <div className="w-full overflow-x-scroll scrollbar-hide">
        <div className="flex md:w-[900px] sm:w-[800px] w-[600px] lg:w-[1147px] justify-around border-b border-b-[#ff7119] pb-5 items-center">
          {LawCategoty.map((el, i) => (
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
      <div className="xl:w-full w-full sm:w-[90%] flex justify-center ">{components[categoryIndex]}</div>
    </div>
  );
}
