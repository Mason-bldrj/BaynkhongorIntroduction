export const Zahiramj = ({ data }: any) => {
          const filtredData = data?.filter((el: any) => {
            return el.legalityType === "COMMAND";
          });
          return (
            <div className=" w-full">
            <div className=" w-full flex flex-col gap-10">
              {filtredData?.map((el: any, i: number) => {
                return (
                  <div key={i} className="w-full flex flex-col gap-5 border-b border-b-[#ff7119] pb-5">
                    <div className="text-center text-[#ff7119] mb-2 text-[24px]">{el.title}</div>
                    <div className=" font-bold text-[20px]">{el.name}</div>
                    <div className=" leading-[30px] text-sm">{el.link}</div>
                  </div>
                );
              })}
            </div>
          </div>
          );
        };
        