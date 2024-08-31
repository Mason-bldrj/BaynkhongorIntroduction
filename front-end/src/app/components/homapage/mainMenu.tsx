"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { mainMenu } from "@/app/data";
import { PictureArr } from "@/app/data";
import { useRouter } from "next/navigation";

export const MainMenu = () => {
  const router = useRouter();
  const [buttonColor, setButtonColor] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % PictureArr.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleSlider = (index: number) => {
    setCurrentIndex(index);
  };
  const handleRouter = (index: number) => {
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
      case 8: // Corrected index for 'projectt'
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
                handleRouter(index);
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
          <div className="absolute bottom-2 left-[45%] flex gap-2">
            {PictureArr.map((_, i) => (
              <div
                key={i}
                onClick={() => handleSlider(i)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  currentIndex === i ? "bg-orange-500" : "bg-white"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
