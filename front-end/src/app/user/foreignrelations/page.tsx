"use client";
import { LiaPaperclipSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";
export default function foreignRelations() {
  const { push } = useRouter();
  return (
    <div className="flex flex-col gap-4 w-[90%] sm:w-[1147px] items-center sm:items-start mt-4 sm:mt-10 mb-5">
      <div
        onClick={() =>
          push("https://legalinfo.mn/mn/detail?lawId=16230721365191")
        }
        className="w-full flex items-center font-bold cursor-pointer gap-2 hover:text-[#ff7119] text-[15px]  sm:text-[20px]"
      >
        {" "}
        <LiaPaperclipSolid className="text-[15px] sm:text-[20px]" />
        <div>Монгол улсын виз олгох журам</div>
      </div>
      <div
        onClick={() => push("https://www.consul.mn/visa/c/24")}
        className="w-full flex items-center font-bold cursor-pointer gap-2 hover:text-[#ff7119] text-[15px]  sm:text-[20px]"
      >
        <LiaPaperclipSolid className="text-[15px] sm:text-[20px]" />
        <div>Монгол улсын иргэд визгүй зорчих орнууд 2024.03.01 байдлаар</div>
      </div>{" "}
      <div
        onClick={() => push("https://legalinfo.mn/mn/detail?lawId=15416")}
        className="w-full flex items-center font-bold cursor-pointer gap-2 hover:text-[#ff7119] text-[15px]  sm:text-[20px]"
      >
        <LiaPaperclipSolid className="text-[15px] sm:text-[20px]" />
        Монгол Улсын дипломат, албан паспорт олгох, эзэмших, хадгалах журам
      </div>{" "}
      <div
        onClick={() => push("https://sanfrancisco.consul.mn/page/134")}
        className="w-full flex items-center font-bold cursor-pointer gap-2 hover:text-[#ff7119] text-[15px]  sm:text-[20px]"
      >
        <LiaPaperclipSolid className="text-[15px] sm:text-[20px]" />
        Гадаад паспорт захиалах бүрдүүлэх материал
      </div>
    </div>
  );
}
