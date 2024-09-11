"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export const TailanCard = ({ data, startIndex }: any) => {
  const router = useRouter();
  console.log(data);
  
  const handleNavigate = (id: string) => {
    router.push(`/user/NEWS${id}`);
  };
  return (
    <div className="w-full flex ">
      <div className="flex w-full overflow-x-scroll sm:w-[1155px] sm:overflow-hidden ease-linear transition-transform duration-300 justify-start">
        <div
          className="flex ease-linear transition-transform duration-300 justify-start gap-[20px]"
          style={{
            transform: `translateX(-${startIndex * 290}px)`,
          }}
        >
          {data?.map((el: any, i: number) => {
            return (
              <div
              onClick={() => handleNavigate(el._id)}
                key={i}
                className="w-[270px] px-4  h-[86px] rounded-sm  cursor-pointer bg-[#F7F8FC] flex justify-center items-center hover:bg-gray-200 hover:scale-[110%]"
              >
                <div className="w-[238px] h-[60px] flex gap-2 overflow-hidden items-center">
                  <div className="bg-[#ff7119] w-[5px] h-[90%]"></div>
                  {el.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
