"use client";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
export const OrganizationHotelCard = ({ hotel, startIndex }: any) => {

  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="flex w-full overflow-scroll sm:w-[1155px] sm:overflow-hidden ease-linear transition-transform duration-300 justify-start border-b border-b-[#ff7119] pb-[60px]">
        <div
          className="flex ease-linear transition-transform duration-300 justify-start gap-[20px]"
          style={{
            transform: `translateX(-${startIndex * 290}px)`,
          }}
        >
          {hotel.map((el: any, i: number) => {
            return (
              <div key={i}>
                <div className="border w-[270px] h-[318px] rounded-md flex flex-col items-center">
                  <div className="w-full h-[50%] relative">
                    <Image
                      className="w-full h-full rounded-t-md"
                      src={el.icon}
                      width={325}
                      height={296}
                      alt="Carousel image"
                    />
                    <div className=" w-full flex justify-end absolute bottom-[10px] left-0">
                      <div className="w-[80%] flex justify-around h-[27px] bg-white opacity-65 items-center rounded-l-[20px]">
                        <div className="border border-white bg-[#ff7119] h-fit rounded-[50%] p-2 text-white w-fit">
                          <FaPhoneAlt />
                        </div>
                        <div>{el.phoneNumber}</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[90%] h-[50%] flex flex-col  justify-around">
                    <div className="text-[#ff7119] text-[16px] text-center">
                      {el.title}
                    </div>
                    <div className="text-black opacity-60 text-[13px] w-full text-start">
                      {el.idk}
                    </div>
                    <button className="flex text-center justify-start gap-2 text-[#ff7119] items-center ">
                      <FaRegArrowAltCircleRight />
                      Дэлгэрэнгүй харах
                    </button>
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
