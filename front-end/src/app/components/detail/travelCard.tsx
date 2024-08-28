import Image from "next/image";
import { bplace } from "@/app/data";
export const TravelCard = () => {
  return (
    <div className="w-full flex overflow-hidden gap-2">
      {bplace.map((el) => {
        return (
          <div>
            <div className="bg-[#ff7119] min-w-[367px] min-h-[362px] flex flex-col justify-end items-end rounded-md ">
              <div className="w-[325px] text-white mb-1">
                <p className=" font-sans">{el.title}</p>
                <p className=" font-sans">{el.count}</p>
              </div>
              <Image
                className=" max-w-[325px] max-h-[296px]"
                src={el.icon}
                width={325}
                height={296}
                alt="Carousel image"
              />
            </div>
            <div className="w-[320px]">
              <h1 className="text-[#222222] mt-5 font-bold">{el.title}</h1>
              <p className="text-[#666666] text-sm mt-5">{el.idk}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
