export const OrangeBourd = ({ data }: any) => {
  return (
    <div className="flex gap-1">
          <div className="w-[2px] h-[40px] bg-[#ff7119] rounded-sm"></div>
      {" "}
      <div>
        <h1 className={` text-white bg-[#ff7119] px-4 text-xl text-center p-1 h-[40px]`}>
          {data}
        </h1>
        <div className="w-0 h-0 border-r-[25px] border-b-[10px] border-b-transparent border-[#1C1B1B] opacity-40"></div>
      </div>
    </div>
  );
};
