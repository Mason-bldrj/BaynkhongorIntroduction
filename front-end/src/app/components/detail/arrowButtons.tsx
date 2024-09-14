"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";

export const ArrowButtons = ({ handleNext, handlePrev }: any) => {
  return (
    <div className="*:border *:rounded-md flex gap-1 *:h-[30px] *:w-[30px] *:flex *:justify-center *:items-center text-2xl">
      <button
        onClick={handlePrev}
        className="hover:bg-[#ff7119] hover:text-white "
      >
        <IoIosArrowRoundBack />
      </button>
      <button
        onClick={handleNext}
        className="hover:bg-[#ff7119] hover:text-white "
      >
        <IoIosArrowRoundForward />
      </button>
    </div>
  );
};
export const ArrowButtons2 = ({ handleNext, handlePrev }: any) => {
  return (
    <div className="*:border *:rounded-md flex flex-col gap-1 *:h-[30px] *:w-[30px] *:flex *:justify-center *:items-center text-2xl">
      <button
        onClick={handleNext}
        className="hover:bg-[#ff7119] hover:text-white "
      >
        <IoIosArrowRoundUp />
      </button>
      <button
        onClick={handlePrev}
        className="hover:bg-[#ff7119] hover:text-white "
      >
        <IoIosArrowRoundDown />
      </button>
    </div>
  );
};
