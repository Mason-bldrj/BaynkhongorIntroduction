import { useState, useEffect } from "react";
import Image from "next/image";

export const EmployeeCard = ({ data2 }: any) => {
  const itemsPerPageXL = 4;
  const itemsPerPageLG = 3;
  const itemsPerPageMD = 2;
  const itemsPerPageSM = 1;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageXL);
  const totalItems = data2?.length || 0; 
  const totalPages = Math.ceil(totalItems / itemsPerPage); 

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1280) setItemsPerPage(itemsPerPageXL); 
      else if (width >= 1024) setItemsPerPage(itemsPerPageLG);
      else if (width >= 640) setItemsPerPage(itemsPerPageMD);
      else setItemsPerPage(itemsPerPageSM);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full flex flex-col items-center mb-10">
      <div className="w-full flex gap-4 justify-center">
        {data2
          ?.slice(
            currentIndex * itemsPerPage,
            (currentIndex + 1) * itemsPerPage
          )
          .map((el: any, i: number) => (
            <div
              key={i}
              className="flex flex-col w-full sm:w-[calc(100%-10px)] md:w-[calc(50%-10px)] lg:w-[calc(33.33%-10px)] xl:w-[calc(25%-10px)] items-center"
            >
              <div className="w-[259px] flex flex-col gap-2 items-center">
                <Image
                  className="h-[249px] object-cover rounded-md border"
                  src={el.img}
                  width={259}
                  height={249}
                  alt="Employee image"
                  layout="responsive"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="w-full text-center text-[#ff7119]">
                  {el.name}
                </div>
                <div className="w-[90%] overflow-hidden text-center text-[12px] h-fit flex flex-wrap">
                  {el.position}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-2 mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-colors duration-300 ${
              currentIndex === index ? "bg-[#ff7119]" : "bg-[#D9D9D9]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
