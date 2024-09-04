import { postFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useState } from "react";

const TravelForm = () => {
  const [travelData, setTravelData] = useState({
    name: "",
    img: "",
    date: "",
    travelType: "",
    description: "",
  });

  const createEmployee = async () => {
    try {
      const res = await postFunc(urls.TRAVEL, {
        name: travelData.name,
        img: travelData.img,
        date: travelData.date,
        travelType: travelData.travelType,
        description: travelData.description,
      });
      console.log(res);
    } catch (err: any) {
      return err;
    }
  };
  return (
    <div className="flex items-center flex-wrap rounded-[8px] shadow-sm bg-[#f6f6f6] gap-[24px] border-[1px] border-solid border-[#f7f7f7] p-[20px]">
      <div>
        <div className="text-[16px]">Аялалын нэр </div>
        <input
          type="text"
          placeholder="Нэр"
          name="name"
          className="px-[6px] py-[8px] rounded-[8px]"
          onChange={(event) => {
            setTimeout(() => {
              setTravelData({
                ...travelData,
                name: event.target.value,
              });
            }, 2000);
          }}
        />
      </div>
      <div className="flex flex-col   ">
        <div className="text-[16px]"> Эхлэх өдөр </div>
        <input
          className="px-[6px] py-[8px] rounded-[8px]"
          type="date"
          placeholder="Албан тушаал"
          name="date"
          onChange={(event) => {
            setTimeout(() => {
              setTravelData({
                ...travelData,
                date: event.target.value,
              });
            }, 2000);
          }}
        />
      </div>
      <div>
        <div>Аялалын төрөл</div>
        <select
          className="px-[6px] py-[8px] rounded-[8px]"
          name="phoneNumber"
          onChange={(event) => {
            setTimeout(() => {
              setTravelData({
                ...travelData,
                travelType: event.target.value,
              });
            }, 2000);
          }}
        >
          <option value="LocalTravel">Орон нутгийн аялал</option>
          <option value="FOREIGN_TRAVEL">ГАДААД АЯЛАЛ</option>
          <option value="INTERNAL_TRAVEL">ДОТООД АЯЛАЛ</option>
        </select>
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
              setTravelData({
                ...travelData,
                img: event.target.value,
              });
            }, 2000);
          }}
        />
      </div>
      <div className="w-full h-[100px]">
        <div>Тайлбар</div>
        <textarea
          placeholder="Тайлбар"
          name="descrition"
          className="px-[6px] py-[8px] h-full rounded-[8px] w-full"
          onChange={(event) => {
            setTimeout(() => {
              setTravelData({
                ...travelData,
                description: event.target.value,
              });
            }, 2000);
          }}
        />
      </div>
      <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
        <button
          onClick={() => {
            console.log(travelData);
            createEmployee();
          }}
        >
          Нэмэх
        </button>
      </div>
    </div>
  );
};
export default TravelForm;
