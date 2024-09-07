import { TravelPageCard } from "./travelPageCard";
import { bplace } from "@/app/data";
export const TravelPageArea1 = ({ data }: any) => {
  return (
    <div className="w-full flex justify-center">
      <TravelPageCard data={bplace}/>
    </div>
  );
};
