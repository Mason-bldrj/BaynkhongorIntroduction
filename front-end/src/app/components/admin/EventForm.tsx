import { postFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useState } from "react";

const EventForm = () => {
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    img: "",
  });

  const createEvent = async () => {
    try {
      const res = await postFunc(urls.EVENT, {
        name: eventData.name,
        img: eventData.img,
        description: eventData.description,
      });
      console.log(res);
    } catch (err: any) {
      return err;
    }
  };
  return (
    <div className="flex items-center flex-wrap rounded-[8px] shadow-sm bg-[#f6f6f6] gap-[24px] border-[1px] border-solid border-[#f7f7f7] p-[20px]">
      <div>
        <div className="text-[16px]">Эвент нэр </div>
        <input
          type="text"
          placeholder="Нэр"
          name="name"
          className="px-[6px] py-[8px] rounded-[8px]"
          onChange={(event) => {
            setTimeout(() => {
              setEventData({
                ...eventData,
                name: event.target.value,
              });
            }, 2000);
          }}
        />
      </div>
      <div className="flex flex-col w-full h-[150px]   ">
        <div className="text-[16px]"> Тайлбар </div>
        <textarea
          className="px-[6px] py-[8px] rounded-[8px] h-full"
          placeholder="Тайлбар"
          name="description"
          onChange={(event) => {
            setTimeout(() => {
              setEventData({
                ...eventData,
                description: event.target.value,
              });
            }, 2000);
          }}
        />
      </div>
      <div>
        <div>Зураг</div>
        <input
          type="image"
          placeholder=""
          name="img"
          className="px-[6px] py-[8px] rounded-[8px]"
          onChange={(event) => {
            console.log(event.target.value);

            setTimeout(() => {
              setEventData({
                ...eventData,
                img: event.target.value,
              });
            }, 2000);
          }}
        />
      </div>
      <div className="flex items-center   justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
        <button
          onClick={() => {
            console.log(eventData);
            createEvent();
          }}
        >
          Нэмэх
        </button>
      </div>
    </div>
  );
};
export default EventForm;
