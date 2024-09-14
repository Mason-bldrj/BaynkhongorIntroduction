"use client";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"; 
import urls from "@/lib/urls";
import { fetchFunc } from "@/app/backdata";
export const BannerArea = () => {
  const [visitorsToday, setVisitorsToday] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [value , setValue] = useState("today");
  const router = useRouter();
  const fetchVisitorData = async () => {
    try {
      const res = await fetch(urls.ABOUTUS);
      const data = await res.json();
      setVisitorsToday(data.todayCount);
      setTotalVisitors(data.totalCount);
    } catch (error) {
      console.error("Failed to fetch visitor data:", error);
    }
  };
  const incrementVisitorCount = async () => {
    try {
      await fetch(urls.ABOUTUS, {
        method: "POST",
      });
    } catch (error) {
      console.error("Failed to increment visitor count:", error);
    }
  };
  useEffect(() => {
    incrementVisitorCount();
    fetchVisitorData();
  }, []);
console.log(value);

  return (
    <div className="lg:w-[1057px] md:w-full sm:flex lg:justify-between sm:justify-center mt-10 hidden lg:px-0 md:px-2 flex-wrap">
      <div className=" w-[641px] h-[147px]  relative">
        <Image
          onClick={() => router.push("https://www.facebook.com/Bkhtourism/")}
          className=" absolute top-[40px] left-[-25px] cursor-pointer"
          src="/fb.png"
          width={57}
          height={58}
          alt="Facebook link"
        />
        <Image
          className="w-[641px]"
          src="/naadambanner.png"
          width={641}
          height={147}
          alt="Banner image"
        />
      </div>
      <div className="lg:w-[367px] sm:w-[641px] lg:mt-0 sm:mt-2 h-[147px] border flex flex-col gap-3 bg-[#FF7119] rounded-md">
        <div className="text-white ml-3 mt-2">Манай сайтад зочилсон зочид </div>
        <div className="flex items-center text-white ml-4 text-sm gap-2">
          <IoCalendarOutline />
          <select onChange={(e)=>setValue(e.target.value)} name="days" id="days " className="bg-[#FF7119]">
            <option value="today">Өнөөдөр</option>
            <option value="total">Нийт</option>
          </select>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-[278px] h-[40px] flex justify-between bg-white rounded-sm items-center">
            <FaRegUser className="ml-4" />
            <div className="mr-4">{value === "today" ? visitorsToday : totalVisitors}</div>
          </div>
          <div className="w-[278px] text-sm mt-1 text-white text-end">
            Нийт: {totalVisitors}
          </div>
        </div>
      </div>
    </div>
  );
};
