import { TravelPageCard } from "./travelPageCard";
export const TravelPageArea1 = ({ data }: any) => {
 data = data?.filter((el:any, i:number)=>{return el.travelType === "LocalTravel"})
  return (
    <div className="w-full flex justify-center">
      <TravelPageCard data={data}/>
    </div>
  );
};
