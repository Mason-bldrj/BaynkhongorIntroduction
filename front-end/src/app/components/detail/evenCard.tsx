import Image from "next/image";
import { bplace } from "@/app/data";
import { useState, useEffect } from "react";
import { ArrowButtons2 } from "../detail/arrowButtons";
export const EventCard = () => {
  const [sum, setSum] = useState(0);

  return (
    <div className="mt-10 w-full ">
      <div className="w-[100%] h-[478px] flex justify-between items-center">
        <div>
          <Image
            className=" max-w-[1024px] max-h-[420px] shadow-[0_45px_20px_35px_rgba(243,243,243)]"
            src={bplace[sum].icon}
            width={1000}
            height={478}
            alt="Carousel image"
          />
        </div>
        <ArrowButtons2 setSum={setSum} count={sum} />
      </div>
    </div>
  );
};
