import { OrangeBourd } from "../detail/orengeBourd";
import { TravelCard } from "../detail/travelCard";
import { ArrowButtons } from "../detail/arrowButtons";
export const TravelArea = () => {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between">
        <OrangeBourd data={"АЯЛАЛ "} />
        <ArrowButtons />
      </div>
      <div className="mt-10">
          <TravelCard/>
      </div>
    </div>
  );
};
