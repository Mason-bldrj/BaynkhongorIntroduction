"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowButtons } from "../detail/arrowButtons";
import { useRouter } from "next/navigation";

export const BrandCard = ({ data }: any) => {
  const router = useRouter();
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const handleNext = () => {
    if (startIndex + visibleCount < data?.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNavigate = (id: string) => {
    router.push(`/user/KEEPSAKE${id}`);
  };

  return (
    <div className="w-full h-full flex items-center justify-start gap-[20px] sm:mt-0 mt-3">
      {/* Mobile View */}
      <div className="flex w-full xl:w-[1029px] h-full overflow-x-scroll scrollbar scrollbar-hidden  sm:overflow-hidden ease-linear transition-transform duration-300 justify-start">
        <div className="sm:hidden flex gap-3 h-full">
          {data?.map((el: any, i: number): JSX.Element => {
            return (
              <div
                key={i}
                className="min-w-[60vw] h-[200px] relative rounded-sm" // Зургуудыг багасгах
                onClick={() => handleNavigate(el._id)}
              >
                <Image
                  className="object-cover rounded-sm h-full w-full"
                  src={el.img}
                  width={800} // Зургийн хэмжээг тохируулсан
                  height={500}
                  alt="Carousel image"
                />
                <div className="bg-black bg-opacity-50 absolute w-full h-full top-0 left-0 flex justify-center items-center">
                  <div className="text-white text-[12px] text-center px-2">
                    "{el.name}"
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View */}
        <div
          className="sm:flex hidden w-full h-full ease-linear transition-transform duration-300 justify-start gap-5 sm:gap-[20px]"
          style={{
            transform: `translateX(-${startIndex * 343}px)`,
          }}
        >
          {data?.map((el: any, i: number): JSX.Element => {
            return (
              <div
                key={i}
                className="min-w-[323px] h-[377px] relative cursor-pointer"
                onClick={() => handleNavigate(el._id)}
              >
                <Image
                  className="object-cover w-full h-full rounded-sm"
                  src={el.img}
                  width={365}
                  height={350}
                  alt="Carousel image"
                />
                <div className="flex justify-center items-center opacity-0 hover:bg-black hover:opacity-50 absolute w-full h-full top-0 left-0">
                  <div className="sm:text-2xl text-[10px] mt-[120px] text-white sm:w-[200px] w-full h-full text-center">
                    "{el.name}"
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arrow Buttons for Desktop */}
      <div className="sm:block hidden">
        <ArrowButtons handleNext={handleNext} handlePrev={handlePrev} />
      </div>
    </div>
  );
};
