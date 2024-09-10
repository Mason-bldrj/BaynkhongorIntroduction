import { TravelPageCard } from "./travelPageCard";
import { bplace } from "@/app/data";
export const TravelPageArea1 = ({ data }: any) => {
 data = data?.filter((el:any, i:number)=>{return el.travelType === "LocalTravel"})
  return (
    <div className="w-full flex justify-center">
      <TravelPageCard data={data}/>
    </div>
  );
};
