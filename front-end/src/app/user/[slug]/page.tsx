"use client";
import { fetchFunc } from "@/app/backdata";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
type UrlsType = Record<string, string>; // Бүх түлхүүрүүдийг string төрөлтэй гэж тодорхойлно
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
  const [data, setData] = useState<any>(null);
  const keywords = Object.keys(urls).filter((key) => key !== "MAIN_URL");
  const findKeyword = (url: string) => {
    const regex = new RegExp(`(${keywords.join("|")})`);
    const match = url.match(regex);
    return match ? match[1] : null;
  };
  const keyword:any = findKeyword(pathname);
  const url = pathname
console.log(keyword);

const startIndex = url.indexOf(keyword);
const endIndex = startIndex + keyword.length;
const afterKeyword = url.substring(endIndex);
  const fetchedData = async () => {
    if (keyword && urls[keyword]) {
      try {
        const res = await fetchFunc(urls[keyword]);
        const data = await res.json();
        setData(data);
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

// const filtredData = data?.filter((el:any)=>{return el._id === afterKeyword})
//  setData(filtredData)
  
  return (
    <div>
      <h1>My Post: {slug}</h1>
      {data ? (
        <div>
          {/* Өгөгдлийг энд харуулах */}
          {/* Жишээ: <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
