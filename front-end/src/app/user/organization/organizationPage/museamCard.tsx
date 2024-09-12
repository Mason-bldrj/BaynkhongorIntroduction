import { IoIosTimer } from "react-icons/io";
import { BsTicketDetailed } from "react-icons/bs";
import { useState } from "react";
export const MuseumCard = ({ data }: any) => {
  const [dataTime, setDataTime] = useState(data[0]?.time);
  const [dataPrice, setDataPrice] = useState(data[0]?.price);
  return (
    <div className="w-full justify-around flex flex-wrap gap-5">
      {" "}
      {dataTime?.map((el: any, i: number) => {
        return (
          <div
            key={i}
            className="w-[90%] md:w-[290px] lg:w-[250px] xl:w-[290px] h-[155px] flex flex-col items-center justify-around relative shadow-md "
          >
            <div className="text-center flex text-white gap-2 absolute left-[-15px] top-[3px] text-[20px] bg-[#ff7119] rounded-[50%] p-1">
              <IoIosTimer />
            </div>
            <div className="text-[#ff7119]">
              {el.timeType + " " + "ЦАГИЙН ХУВИАР"}
            </div>
            <div className="text-[14px]">
              {el.timeType === "SUMMER"
                ? `6 сарын 01-10 сарын 01 хүртэл `
                : `10 сарын 01-05 сарын 31 хүртэл `}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="w-full flex justify-around *:text-[13px]">
                <div>{el.day}</div>
                <div>{el.opentime + "-" + el.closedTime}</div>
              </div>
              <div className="w-full flex justify-around *:text-[13px]">
                <div>{el.day}</div>
                <div>{el.opentime + "-" + el.closedTime}</div>
              </div>
              <div className="w-full flex justify-around *:text-[13px]">
                <div>{el.day}</div>
                <div>{el.opentime + "-" + el.closedTime}</div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="w-[290px] h-[205px] shadow-md flex flex-col items-center justify-center mb-2 gap-2 relative">
        {dataPrice?.map((el: any, i: number) => {
          return (
            <div key={i} className="flex justify-between *:text-[13px] w-[80%]">
              <div>{el?.amount.amountType}</div>
              <div>{el.amount.amount + "₮"}</div>
            </div>
          );
        })}
        <div className="bg-[#ff7119] text-white rounded-[50%] text-[15px] p-2 absolute left-[-15px] top-[-1px]">
          <BsTicketDetailed />
        </div>
      </div>
    </div>
  );
};
