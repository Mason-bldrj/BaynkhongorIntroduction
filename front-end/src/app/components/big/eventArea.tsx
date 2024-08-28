import { OrangeBourd } from "../detail/orengeBourd";
import { EventCard } from "../detail/evenCard";

export const EventArea = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex w-full justify-between">
        <div className="ml-20">
          {" "}
          <OrangeBourd data={"ЭВЕНТ , АРГА ХЭМЖЭЭ"} />
        </div>
      </div>
      <div className="flex justify-between">
          <EventCard/>
         
      </div>
    </div>
  );
};
