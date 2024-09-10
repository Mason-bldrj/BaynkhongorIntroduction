"use client";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
export const TravelPageCard = ({ data }: any) => {
  const router = useRouter();
  const handleNavigate = (id: string) => {
    router.push(`/user/TRAVEL${id}`);
  };
  return (
    <div className="w-full flex justify-center flex-wrap gap-5 mb-2">
      {data?.map((el: any, i: number) => {
        return (
          <div
            className="w-[80%] sm:w-[500px] lg:w-[350px] xl:w-[270px] h-[318px] flex flex-col items-center  shadow-md relative "
            onClick={() => handleNavigate(el._id)}
          >
            <Image
              className="w-full h-[250px] rounded-t-md"
              src={el.img}
              width={325}
              height={296}
              alt="Carousel image"
            />
            <div className=" w-[80%] justify-center flex text-[#ff7119] rounded-md text-[15px] flex-wrap font-bold">
              {el.name}
            </div>

            <div className="text-[10px] text-start absolute text-black opacity-50 bottom-2 left-10">
              {el.date}
            </div>

            <div className=" absolute bottom-0 right-0">
              <button className="relative border-l-[40px] border-l-transparent border-b-[70px] border-b-[#ff7119]">
                <FaArrowRightLong className="absolute right-[8px] top-[50px] text-white text-sm" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
