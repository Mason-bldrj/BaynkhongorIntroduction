import { bplace } from "../data";
import Image from "next/image";
export const SuggestionArea = () => {
  return (
    <div className="w-full mt-10">
      <div className="ml-10 flex flex-col gap-5">
        <h1 className="text-white bg-[#ff7119] w-[142px]  text-xl text-center p-1 rounded-sm">
          Санал
        </h1>
        <p>Та Хонгор нутагт хаашаа аялахыг хүсэж байгаагаа сонгоно уу?</p>
      </div>
      <div className="flex justify-between mt-5 rounded-sm">
        {bplace.map((el): JSX.Element => {
          return (
            <div className="w-[173px] h-[200px] relative">
              <Image
                className="object-cover w-full h-full"
                src={el.icon}
                width={173}
                height={197}
                alt="Carousel image"
              />
              <button className="bg-[#D9D9D9] h-[40px] w-[125px] flex justify-center items-center text-center absolute top-[140px] text-sm right-0 opacity-70">
                {el.title}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
