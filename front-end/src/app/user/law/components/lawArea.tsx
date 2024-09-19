"use client";
import { LiaPaperclipSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";
export function LawArea() {
  const { push } = useRouter();
  return (
    <div className="mb-10 flex flex-col gap-4 w-[90%] sm:w-[1147px] items-center sm:items-start mt-4 sm:mt-10">
      <div
        onClick={() =>
          push("https://legalinfo.mn/mn/detail?lawId=16759637037101")
        }
        className="w-full flex items-center font-bold cursor-pointer gap-2 hover:text-[#ff7119] text-[15px]  sm:text-[20px]"
      >
        {" "}
        <LiaPaperclipSolid className="text-[15px] sm:text-[20px]" />
        <div>АЯЛАЛ ЖУУЛЧЛАЛЫН ТУХАЙ</div>
      </div>
     
    </div>
  );
}

