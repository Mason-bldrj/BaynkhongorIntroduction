"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export const TravelCard = ({ data, startIndex }: any) => {
  const router = useRouter();
  const today: any = new Date();
  const startOfyear: any = new Date(2024, 0, 1);
  const diffInMs = today - startOfyear;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const weeksPassed = Math.floor(diffInDays / 7);
  const handleNavigate = (id: string) => {
    router.push(`/user/TRAVEL${id}`);
  };
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full overflow-hidden cursor-pointer ">
      <div
        className=" flex ease-linear transition-transform duration-300  gap-[32px] sm:gap-[20px] "
        style={{
          transform: `translateX(-${startIndex * 387}px)`,
        }}
      >
        {data?.map((el: any, i: number) => {
          return (
            <div
              key={i}
              onClick={() => handleNavigate(el._id)}
              className="flex flex-col  "
            >
              <div
                className={`hover:scale-[1.003] flex flex-col gap-3 items-center  border border-[#213A57] rounded-2xl w-[355px]  sm:w-[367px] h-[370px] sm:h-[400px]`}
              >
                <Image
                  className="w-[95%] h-[200px] object-cover  rounded-2xl mt-2"
                  src={el.img}
                  width={325}
                  height={296}
                  alt="Carousel image"
                />
                <div className="w-[95%] text-black font-serif line-clamp-1  sm:text-sm text-[15px] font-bold">
                  {el.name}
                </div>
                <div className="w-[95%] font-serif line-clamp-3 text-gray-400 text-[14px]">
                  {" "}
                  <div dangerouslySetInnerHTML={{ __html: el.description }} />
                </div>
                <div className="font-serif text-black sm:text-[16px] text-[10px] w-[95%] text-start">
                  {el.date?.slice(0, 10)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
