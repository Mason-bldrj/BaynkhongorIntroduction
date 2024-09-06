import { postFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useState } from "react";

const KeepSakeForm = () => {
  const [keepSakeData, setKeepSakeData] = useState({
    name: "",
    img: "",
    title: "",
    description: "",
  });

  const createKeepSake = async () => {
    try {
      const res = await postFunc(urls.TRAVEL, {
        name: keepSakeData.name,
        img: keepSakeData.img,
        title: keepSakeData.title,
        description: keepSakeData.description,
      });
      console.log(res);
    } catch (err: any) {
      return err;
    }
  };
  return (
    <div className="flex items-center flex-wrap rounded-[8px] shadow-sm bg-[#f6f6f6] gap-[24px] border-[1px] border-solid border-[#f7f7f7] p-[20px]">
      <div>
        <div className="text-[16px]">Нэр </div>
        <input
          type="text"
          placeholder="Нэр"
          name="name"
          className="px-[6px] py-[8px] rounded-[8px]"
          onChange={(event) => {
            setTimeout(() => {
              setKeepSakeData({
                ...keepSakeData,
                name: event.target.value,
              });
            }, 2000);
          }}
        />
      </div>
      <div className="flex flex-col   ">
        <div className="text-[16px]">Гарчиг</div>
        <input
          className="px-[6px] py-[8px] rounded-[8px]"
          type="text"
          placeholder="Гарчиг"
          name="title"
          onChange={(event) => {
            setTimeout(() => {
              setKeepSakeData({
                ...keepSakeData,
                title: event.target.value,
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
              setKeepSakeData({
                ...keepSakeData,
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
              setKeepSakeData({
                ...keepSakeData,
                description: event.target.value,
              });
            }, 2000);
          }}
        />
      </div>
      <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
        <button
          onClick={() => {
            console.log(keepSakeData);
            createKeepSake();
          }}
        >
          Нэмэх
        </button>
      </div>
    </div>
  );
};
export default KeepSakeForm;
