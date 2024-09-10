export const Zahiramj = ({ data }: any) => {
          const filtredData = data?.filter((el: any) => {
            return el.legalityType === "RESOLUTION";
          });
          return (
            <div className="">
              <div className=" w-full flex flex-col gap-5">
                {filtredData?.map((el: any, i: number) => {
                  return (
                    <div key={i}>
                      <div className="text-center text-[#ff7119] mb-2">{el.name}</div>
                      <div>{el.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        };
        