"use client";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import urls from "@/lib/urls";
import { fetchFunc, putFunc } from "@/app/backdata";

export const BannerArea = () => {
  const [data, setData] = useState<any[]>([]); // To store both total and today's visitor data
  const [value, setValue] = useState("today"); // To toggle between "today" and "total"
  const [count, setCount] = useState(false); // Flag to check if data is fetched
  const [loading, setLoading] = useState(true); // Loading state to track fetch status
  const router = useRouter();

  // Fetch data function
  const fetchedData = async () => {
    try {
      const res = await fetchFunc(urls.COUNT);
      const fetchedData = await res.json();
      setData(fetchedData); // Set the entire data array [total, today]
      setCount(true); // Mark that data is loaded
      setLoading(false); // Set loading to false after fetching
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Even in case of error, stop loading
    }
  };

  // Function to update both total and today's visitor count
  const updateCount = async () => {
    if (data.length >= 2) {
      const totalId = data[0]._id; // ID for total visitors
      const todayId = data[1]._id; // ID for today's visitors
      const totalNumber = data[0].number; // Total visitors number
      const todayNumber = data[1].number; // Today's visitors number

      // Increment both total and today's visitors by 1
      const updatedTotal = totalNumber + 1;
      const updatedToday = todayNumber + 1;

      // Prepare bodies for PUT requests
      const totalBody = { id: totalId, number: updatedTotal };
      const todayBody = { id: todayId, number: updatedToday };

      try {
        // Update both total and today's visitors in parallel
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
    fetchedData(); // Fetch data on component mount
    if (count) {
      updateCount(); // Update counts if data is loaded
    }
  }, [count]);

  // Render loading state if data is still being fetched
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-[200px]">
        <div className="loader"></div>{" "}
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
