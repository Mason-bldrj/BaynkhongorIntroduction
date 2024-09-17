"use client";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import urls from "@/lib/urls";
import { fetchFunc, putFunc } from "@/app/backdata";

export const BannerArea = () => {
  const [data, setData] = useState<any[]>([]);
  const [value, setValue] = useState("today");
  const [count, setCount] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Function to check if a new day has started
  const isNewDay = () => {
    const lastVisit = localStorage.getItem("lastVisit");
    const today = new Date().toDateString();

    if (lastVisit !== today) {
      localStorage.setItem("lastVisit", today);
      return true; // It's a new day
    }
    return false; // Still the same day
  };

  const fetchedData = async () => {
    try {
      const res = await fetchFunc(urls.COUNT);
      const fetchedData = await res.json();
      setData(fetchedData);
      setCount(true);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const updateCount = async () => {
    if (data.length >= 2) {
      const totalId = data[0]._id;
      const todayId = data[1]._id;
      const totalNumber = data[0].number;
      const todayNumber = data[1].number;

      let updatedToday = todayNumber;

      // Check if it's a new day, and reset the count if true
      if (isNewDay()) {
        updatedToday = 1; // Start from 1 since it's the first visit today
      } else {
        updatedToday += 1;
      }

      const updatedTotal = totalNumber + 1;

      const totalBody = { id: totalId, number: updatedTotal };
      const todayBody = { id: todayId, number: updatedToday };

      try {
        await Promise.all([
          putFunc(urls.COUNT, totalBody),
          putFunc(urls.COUNT, todayBody),
        ]);
      } catch (error) {
        console.error("Error updating count:", error);
      }
    }
  };

  useEffect(() => {
    fetchedData();
    if (count) {
      updateCount();
    }
  }, [count]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-[200px]">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="lg:w-[1057px] md:w-full sm:flex lg:justify-between sm:justify-center mt-10 hidden lg:px-0 md:px-2 flex-wrap">
      <div className="w-[641px] h-[147px] relative">
        <Image
          onClick={() => router.push("https://www.facebook.com/Bkhtourism/")}
          className="absolute top-[40px] left-[-25px] cursor-pointer"
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
        <div className="text-white ml-3 mt-2">Манай сайтад зочилсон зочид</div>
        <div className="flex items-center text-white ml-4 text-sm gap-2">
          <IoCalendarOutline />
          <select
            onChange={(e) => setValue(e.target.value)}
            className="bg-[#FF7119]"
          >
            <option value="today">Өнөөдөр</option>
            <option value="total">Нийт</option>
          </select>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-[278px] h-[40px] flex justify-between bg-white rounded-sm items-center">
            <FaRegUser className="ml-4" />
            <div className="mr-4">
              {value === "today"
                ? `${data[1]?.number ?? 0}`
                : `${data[0]?.number ?? 0}`}
            </div>
          </div>
          <div className="w-[278px] text-sm mt-1 text-white text-end">
            Нийт:
            {` ${data[0]?.number}`}
          </div>
        </div>
      </div>
    </div>
  );
};
