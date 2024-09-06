"use client";
import Image from "next/image";
export const NewsCard = ({ bplace, startIndex }: any) => {
  return (
    <div className="w-full flex ">
      <div className="flex w-full overflow-scroll sm:w-[1155px] sm:overflow-hidden ease-linear transition-transform duration-300 justify-start">
        <div
          className="flex ease-linear transition-transform duration-300 justify-start gap-[20px]"
          style={{
            transform: `translateX(-${startIndex * 296}px)`,
          }}
        >
          {bplace.map((el: any, i: number) => {
            return (
              <div key={i}>
                <div className=" border  w-[276px] h-[323px]  rounded-md relative">
                  <Image
                    className="w-full h-full object-cover rounded-md"
                    src={el.icon}
                    width={325}
                    height={296}
                    alt="Carousel image"
                  />
                  <div className="w-full py-2 text-center bg-[#d9d9d9] opacity-65 absolute left-0 bottom-2 hover:bg-[#ff7117] hover:text-white">
                    {el.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
