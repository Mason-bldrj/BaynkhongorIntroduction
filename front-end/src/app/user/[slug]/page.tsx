"use client";
import { fetchFunc } from "@/app/backdata";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
type UrlsType = Record<string, string>;
const urls: UrlsType = {
  ADMIN_VERIFY: "/admin/verifyAdmin",
  ABOUTUS: "/aboutus",
  ADMIN: "/admin",
  EVENT: "/event",
  institution: "/institution",
  KEEPSAKE: "/keepsake",
  LEGALITY: "/legality",
  NEWS: "/news",
  TRAVEL: "/travel",
  EMPLOYEE: "/aboutus/employee",
  OFFERS: "/aboutus/offers",
  MAIN_URL: process.env.NEXT_PUBLIC_API_URL || "",
  REPORT: "/news/report",
  RESOURCES: "/news/resources",
  VIDEO: "/news/video",
};
export default function Page({ params }: { params: { slug: any } }) {
  const pathname = usePathname();
  const { slug } = params;
  const [data, setData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>(null);
  const keywords = Object.keys(urls).filter((key) => key !== "MAIN_URL");
  const findKeyword = (url: string) => {
    const regex = new RegExp(`(${keywords.join("|")})`);
    const match = url.match(regex);
    return match ? match[1] : null;
  };
  const keyword: any = findKeyword(pathname);
  const url = pathname;
  const startIndex = url.indexOf(keyword);
  const endIndex = startIndex + keyword.length;
  const afterKeyword = url.substring(endIndex);
  const fetchedData = async () => {
    if (keyword && urls[keyword]) {
      try {
        const res = await fetchFunc(
          urls[keyword] + `/getbyId?id=` + afterKeyword
        );
        const resultData = await res.json();
        setData(resultData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      console.error(
        "No valid keyword found in the URL or keyword is not in urls"
      );
    }
  };
  useEffect(() => {
    fetchedData();
  }, [pathname]);
  return (
    <div className="max-w-[1147px] m-auto w-[95%]  mt-5 flex flex-col  items-center mb-10">
      <div className="w-full ">
        {data ? (
          <div className="w-full flex flex-col gap-5 ">
            <div className=" text-black font-bold sm:text-[24px] lg:text-[30px] w-full">
              {data.title}
            </div>
            <div className="w-full text-center text-[#ff7119] text-[24px]">
              {data.name}
            </div>
            <div className="w-full flex justify-between flex-wrap">
              {" "}
              <Image
                className="rounded-md w-full sm:w-[50%]"
                src={data.img}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="w-full sm:w-[45%] flex flex-col items-center relative max-h-fit min-h-[100px] mt-4 sm:mt-0">
                <div className="w-[90%] overflow-hidden">
                  {" "}
                  <div className="md:text-[15px] lg:text-[17px]">
                    {" "}
                    {data.description}
                  </div>
                </div>

                <div className=" absolute bottom-2 left-4">
                  {data.date ? data.date.slice(0, 10) : "asdasdsad"}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Мэдээлэл байхгүй</p>
        )}
      </div>
    </div>
  );
}
