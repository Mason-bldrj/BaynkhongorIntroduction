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
        router.push("/user/project");
        break;
      case 9:
        router.push("/user/foreignrelations");
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-[1147px] w-full m-auto flex flex-col items-center">
      <div className="max-h-[500px] flex flex-col sm:flex-row">
        {/* Сайд менү */}
        <div className="w-full sm:w-[20%] md:h-[400px] sm:h-[300px] lg:h-[500px] sm:flex sm:flex-col hidden">
          {mainMenu.map((el: any, index: number) => (
            <div
              key={index}
              className="md:h-[50px] sm:h-[30px]"
              onClick={() => {
                handleRouter(index);
              }}
            >
              <button
                className={`lg:text-[16px] md:text-[14px] sm:text-[10px] h-full border-b border-l border-opacity-20 border-[#000000] w-full hover:bg-[#FF6C10] hover:text-white transition-colors`}
              >
                {el}
              </button>
            </div>
          ))}
        </div>

        {/* Слайдер */}
        <div className="relative flex-grow overflow-hidden w-full sm:w-[80%] lg:w-[970px]">
          <div
            className="whitespace-nowrap transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {PictureArr.map((src, i) => (
              <div
                key={i}
                className="inline-block w-full h-[500px]" // Ensures all images are on the same line for the sliding effect
              >
                <Image
                  className="object-cover w-full h-full"
                  src={src}
                  width={9704}
                  height={5004}
                  alt={`Carousel image ${i}`}
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-2 left-[45%] gap-2 flex">
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
