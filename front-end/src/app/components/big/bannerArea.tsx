
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

import { IoCalendarOutline } from "react-icons/io5";
export const BannerArea = () => {
  return (
    <div className="w-[90%] flex justify-between">
      <div className=" w-[641px] h-[147px] relative">
        <Image
          className=" absolute top-[40px] left-[-25px] cursor-pointer"
          src="/fb.png"
          width={57}
          height={58}
          alt="Carousel image"
        />
        <Image
          src="/naadambanner.png"
          width={641}
          height={147}
          alt="Carousel image"
        />
      </div>
      <div className="w-[360px] h-[147px] border flex flex-col gap-3 bg-[#FF7119] rounded-md">
        <h1 className="text-white ml-3 mt-2">Манай сайтад зочилсон зочид </h1>
        <div className="flex items-center text-white ml-4 text-sm gap-2">
          <IoCalendarOutline />
          <select name="days" id="days " className="bg-[#FF7119]">
            <option value="Өнөөдөр">Өнөөдөр</option>
            <option value="7-хоног">7-хоног</option>
            <option value="1-сар">1-сар</option>
            <option value="3-сар">3-сар</option>
          </select>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-[278px] h-[40px] flex justify-between bg-white rounded-sm items-center">
            <FaRegUser className="ml-4" />
            <p className="mr-4">999</p>
          </div>
          <p className="w-[278px] text-sm mt-1 text-white text-end">
            Нийт:99999
          </p>
        </div>
      </div>
    </div>
  );
};
