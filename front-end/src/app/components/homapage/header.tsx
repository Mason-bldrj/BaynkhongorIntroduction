"use client";
import { RiAdminLine } from "react-icons/ri";
import { InfoArr, InfoItem } from "@/app/data";
import Image from "next/image";
import SideBar from "../detail/sidebar";
import { useRouter } from "next/navigation";
export const Header = ({ switchHeader }: any) => {
  const router = useRouter();
  return (
    <div
      className={` relative w-full  h-[50px] sm:h-[180px] md:h-[229px] justify-between flex-col items-center bg-cover sm:bg-center bg-[url('/header.png')] bg-[#FF6C10]
 ${switchHeader ? "flex" : "hidden"}
    `}
    >
      <div className="w-full flex justify-end sm:hidden">
        {" "}
        <SideBar />
      </div>
      <div className="container sm:flex justify-around xl:text-xl md:text-[16px] sm:text-[12px] items-center sm:w-[600px] md:w-[800px]  xl:w-[1147px] p-7 hidden">
        {InfoArr.map((el: InfoItem, index: number): JSX.Element => {
          return (
            <div
              key={index}
              className="gap-[10px] flex justify-center items-center cursor-pointer"
            >
              <div className="bg-white border-black border rounded-[50%] w-fit h-fit">
                <Image
                  className="p-[5px]"
                  src={el.icon}
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
              <div className="text-black">{el.m}</div>
            </div>
          );
        })}
      </div>
      <div className="text-white sm:text-md md:text-2xl  w-fit text-center mb-2 sm:flex hidden">
        Баянхонгор аймаг аялал жуулчлал зочлох үйлчилгээний байгууллага
      </div>

      <RiAdminLine
        onClick={() => router.push("/admin/login")}
        className="hidden sm:block cursor-pointer text-black  p-1 w-[30px] h-[30px] absolute top-2 right-5"
      />
    </div>
  );
};
