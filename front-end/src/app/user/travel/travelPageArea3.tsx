import { TravelPageCard } from "./travelPageCard";
import { bplace } from "@/app/data";
export const TravelPageArea3 = ({ data }: any) => {
  data = data?.filter((el:any, i:number)=>{return el.travelType === "FOREIGN_TRAVEL"})
  return (
    <div className="w-full flex justify-center">
      <TravelPageCard data={data}/>
    </div>
  );
};
