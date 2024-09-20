"use client";
import { RiAdminLine } from "react-icons/ri";
import { InfoArr, InfoItem } from "@/app/data";
import Image from "next/image";
import SideBar from "../detail/sidebar";
import { useRouter } from "next/navigation";
import { mainMenu } from "@/app/data";
import { useState } from "react";
export const Header = ({ switchHeader }: any) => {
  const router = useRouter();
  const [buttonColor, setButtonColor] = useState(0);
  const handleRouter = (index: number) => {
    setButtonColor(index);
    switch (index) {
      case 0:
        router.push("/");
        break;
      case 1:
        router.push("/user/aboutus");
        break;
      case 2:
        router.push("/user/news");
        break;
      case 3:
        router.push("/user/organization");
        break;
      case 4:
        router.push("/user/travel");
        break;
      case 5:
        router.push("/user/eventt");
        break;
      case 6:
        router.push("/user/law");
        break;
      case 7:
        router.push("/user/gift");
        break;
      case 8:
        router.push("/user/foreignrelations");
        break;
      default:
        break;
    }
  };
  return (
    <div className="w-full h-[60px] border-b  bg-white flex justify-end md:justify-center fixed top-0 z-20  ">
      <div className="h-full max-w-[1200px] w-[95%] m-auto flex justify-between">
        <div className="w-full h-full flex justify-end md:hidden  items-center">
          {" "}
          <SideBar />
        </div>

        {mainMenu.map((el: any, i: number) => {
          return (
            <button
              key={i}
              onClick={() => {
                handleRouter(i);
              }}
              className="text-black hover:scale-105 hover:text-[#ff7119] font-serif hidden md:block  md:text-[12px] lg:text-[14px] xl:text-[16px]"
            >
              {el}
            </button>
          );
        })}
      </div>
    </div>
  );
};
