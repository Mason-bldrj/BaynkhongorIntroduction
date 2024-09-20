'use client'
export const OrangeBourd = ({ data }: any) => {
  return (
    <div className="flex gap-1 ">
          <div className="w-[2px] sm:flex hidden h-[40px] bg-black rounded-sm"></div>
      {" "}
      <div>
        <div className={` text-white font-serif bg-[#213A57] px-4 text-[10px] sm:text-xl text-center py-1 sm:h-[40px]`}>
          {data}
        </div>
        <div className="w-0 h-0 border-r-[25px] border-b-[10px] border-b-transparent border-[#1C1B1B] opacity-40"></div>
      </div>
    </div>
  );
};
