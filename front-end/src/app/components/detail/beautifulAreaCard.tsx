'use client'
import Image from "next/image";
import { bplace } from "@/app/data";
// import { BPlaceItem } from "@/app/data";
export const BeautifulAreaCard = () => {

  return (
    <div className="w-full h-full flex items-center justify-start">
      {bplace.splice(0,1).map((el:any, i:number):JSX.Element => {
        return (
          <div  key={i} className="w-[365px] h-[350px]">
            <Image
              key={i}
              className="object-cover w-full h-full"
              src={el.icon}
              width={365}
              height={350}
              alt="Carousel image"
            />
          </div>
        );
      })}
    </div>
  );
};
