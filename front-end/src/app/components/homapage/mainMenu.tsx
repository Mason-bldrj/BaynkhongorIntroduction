"use client";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import { mainMenu } from "@/app/data";
import { PictureArr } from "@/app/data";
import { useRouter } from "next/navigation";
export const MainMenu = () => {
  const router = useRouter();
  const [buttonColor, setButtonColor] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PictureArr.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === PictureArr.length - 1 ? 0 : prevIndex + 1
    );
  };
  const HandleRouter = (index: number) => {
    setButtonColor(index);
    switch (index) {
      case 0:
        router.push("./");
        break;
      case 1:
        router.push("./aboutus");
        break;
      case 2:
        router.push("./news");
        break;
      case 3:
        router.push("./organiztion");
        break;
      case 4:
        router.push("./travel");
        break;
      case 5:
        router.push("./eventt");
        break;
      case 6:
        router.push("./law");
        break;
      case 7:
        router.push("./gift");
        break;
      case 7:
        router.push("./projectt");
        break;
      case 9:
        router.push("./foreignrelations");
        break;
      default:
        break;
    }
  };
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1143px] max-h-[500px] flex">
        <div className="w-[173px] h-[500px]">
          {mainMenu.map((el: any, index: number) => (
            <div
              key={index}
              className="h-[50px]"
              onClick={() => {
                HandleRouter(index);
              }}
            >
              <button
                className={`h-full border-b-[0.5px] border-l-[0.5px] border-[#000000] w-full hover:bg-[#FF6C10] hover:text-white transition-colors`}
              >
                {el}
              </button>
            </div>
          ))}
        </div>
        <div className="relative flex-grow overflow-hidden w-[970px]">
          <Image
            className="object-cover w-full h-full"
            src={PictureArr[currentIndex]}
            width={970}
            height={500}
            alt="Carousel image"
          />
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-[#FF6C10] text-white px-3 py-1"
          >
            <IoIosArrowBack className="" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-[#FF6C10] text-white px-3 py-1"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};
