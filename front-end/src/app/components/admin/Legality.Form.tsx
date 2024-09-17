import { postFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useState } from "react";

const LegalityForm = (props?: any) => {
  const { edit, data } = props;
  const [legalityData, setLegalityData] = useState({
    name: "",
    title: "",
    link: "",
    legalityType: "",
  });
  const createLegality = async () => {
    try {
      const res = await postFunc(urls.LEGALITY, {
        name: legalityData.name,
        title: legalityData.title,
        link: legalityData.link,
        legalityType: legalityData.legalityType,
      });
      console.log(res);
    } catch (err: any) {
      return err;
    }
  };
  const editLegality = async () => {
    try {
      const res = await postFunc(urls.LEGALITY, {
        id: data._id,
        name: legalityData.name,
        title: legalityData.title,
        link: legalityData.link,
        legalityType: legalityData.legalityType,
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
          defaultValue={data?.name}
          type="text"
          placeholder="Нэр"
          name="name"
          className="px-[6px] py-[8px] rounded-[8px]"
          onChange={(event) => {
            setTimeout(() => {
              setLegalityData({
                ...legalityData,
                name: event.target.value,
              });
            }, 1000);
          }}
        />
      </div>
      <div className="flex flex-col   ">
        <div className="text-[16px]"> Гарчиг </div>
        <input
          defaultValue={data?.title}
          className="px-[6px] py-[8px] rounded-[8px]"
          type="text"
          placeholder="Гарчиг"
          name="title"
          onChange={(event) => {
            setTimeout(() => {
              setLegalityData({
                ...legalityData,
                title: event.target.value,
              });
            }, 1000);
          }}
        />
      </div>
      <div>
        <div>Төрөл</div>
        <select
          defaultValue={data?.legalityType}
          className="px-[6px] py-[8px] rounded-[8px]"
          name="phoneNumber"
          onChange={(event) => {
            setTimeout(() => {
              setLegalityData({
                ...legalityData,
                legalityType: event.target.value,
              });
            }, 1000);
          }}
        >
          <option value="RESOLUTION">Тогтоол</option>
          <option value="COMMAND">Захирамж</option>
          <option value="CONSENT">Зөвшөөрөл</option>
        </select>
      </div>
      <div>
        <div>Тайлбар</div>
        <input
          defaultValue={data?.link}
          type="text"
          placeholder=""
          name="link"
          className="px-[6px] py-[8px] rounded-[8px]"
          onChange={(event) => {
            setTimeout(() => {
              setLegalityData({
                ...legalityData,
                link: event.target.value,
              });
            }, 1000);
          }}
        />
      </div>
      <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
        <button
          onClick={() => {
            if (edit === true) {
              editLegality();
            } else {
              createLegality();
            }
          }}
        >
          Нэмэх
        </button>
      </div>
    </div>
  );
};
export default LegalityForm;
