"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export const NewsCard = ({ data2, startIndex }: any) => {
  const router = useRouter();
  const handleNavigate = (id: string) => {
    router.push(`/user/RESOURCES${id}`);
  };
  console.log(data2);

  return (
    <div className=" flex mb-10 sm:ml-0 ml-2">
      <div className="flex w-full overflow-x-scroll sm:w-[1155px] sm:overflow-hidden ease-linear transition-transform duration-300 justify-start">
        <div
          className="flex ease-linear transition-transform duration-300 justify-start gap-[20px]"
          style={{
            transform: `translateX(-${startIndex * 296}px)`,
          }}
        >
          {data2?.map((el: any, i: number) => {
            return (
              <div key={i} onClick={() => handleNavigate(el._id)}>
                <div className=" border  w-[276px] h-[323px]  rounded-md relative">
                  <Image
                    className="w-full h-full object-cover rounded-md"
                    src={el.img}
                    width={325}
                    height={296}
                    alt="Carousel image"
                  />
                  <div className="w-[80%] py-2 overflow-x-scroll text-center bg-[#d9d9d9] opacity-65 absolute left-0 bottom-2 hover:bg-[#ff7117] hover:text-white">
                    {el.name}
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
