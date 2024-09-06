import { postFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useState } from "react";

const InstitutionForm = () => {
  const [institutionData, setInstitutionData] = useState({
    name: "",
    institutionType: "",
    description: "",
    img: "",
  });
  const [timeData, setTimeData] = useState({
    timeType: "",
    day: "",
    opentime: "",
    closedTime: "",
  });
  const [priceData, setPriceData] = useState({
    amountType: "",
    amount: 0,
  });
  const times: any[] = [];
  const prices: any[] = [];
  const addTimeorPrice = (command: string) => {
    if (command === "time") {
      times.push(timeData);
    } else if (command === "price") {
      prices.push(priceData);
    } else {
      return;
    }
  };

  const createEmployee = async () => {
    try {
      const res = await postFunc(urls.TRAVEL, {
        name: institutionData.name,
        institutionType: institutionData.institutionType,
        description: institutionData.description,
        img: institutionData.img,
        time: times,
        price: prices,
      });
      console.log(res);
    } catch (err: any) {
      return err;
    }
  };
  return (
    <div className="flex  flex-col items-center flex-wrap rounded-[8px] shadow-sm bg-[#f6f6f6] gap-[24px] border-[1px] border-solid border-[#f7f7f7] p-[20px]">
      <div className="flex flex-col">
        <div>Үндсэн мэдээлэл</div>
        <div className="flex gap-[20px]">
          <div>
            <div className="text-[16px]">Байгуулга нэр </div>
            <input
              type="text"
              placeholder="Нэр"
              name="name"
              className="px-[6px] py-[8px] rounded-[8px]"
              onChange={(event) => {
                setTimeout(() => {
                  setInstitutionData({
                    ...institutionData,
                    name: event.target.value,
                  });
                }, 2000);
              }}
            />
          </div>
          <div>
            <div>Байгуулга төрөл</div>
            <select
              className="px-[6px] py-[8px] rounded-[8px]"
              name="institutionType"
              onChange={(event) => {
                setTimeout(() => {
                  setInstitutionData({
                    ...institutionData,
                    institutionType: event.target.value,
                  });
                }, 2000);
              }}
            >
              <option value="SERVICE">Үйлчилгээ</option>
              <option value="VACATION">Амралт, Сувилал</option>
              <option value="TOUR">Тур</option>
              <option value="MUSEUM">Музей</option>
              <option value="CHURCH">Сүм хийд</option>
              <option value="UNION">Холбоод</option>
              <option value="CLUB">Клуб</option>
              <option value="THEATER">Театр</option>
            </select>
          </div>
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
                setInstitutionData({
                  ...institutionData,
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
                setInstitutionData({
                  ...institutionData,
                  description: event.target.value,
                });
              }, 2000);
            }}
          />
        </div>
      </div>
      <br />
      <div className="flex flex-col border-t-[2px] border-[#c9c9c9] border-solid pt-[50px] ">
        <div>Цагийн мэдээлэл</div>
        <div className="flex  gap-[20px]   ">
          <div>
            <div className="text-[16px]"> Нээх цаг </div>
            <input
              className="px-[6px] py-[8px] rounded-[8px]"
              type="time"
              placeholder="Албан тушаал"
              name="opentime"
              onChange={(event) => {
                setTimeout(() => {
                  setTimeData({
                    ...timeData,
                    opentime: event.target.value,
                  });
                }, 2000);
              }}
            />
          </div>
          <div>
            <div className="text-[16px]"> Хаах цаг </div>
            <input
              className="px-[6px] py-[8px] rounded-[8px]"
              type="time"
              placeholder="Албан тушаал"
              name="closedTime"
              onChange={(event) => {
                setTimeout(() => {
                  setTimeData({
                    ...timeData,
                    closedTime: event.target.value,
                  });
                }, 2000);
              }}
            />
          </div>
          <div>
            <div>Улирал сонгох</div>
            <select
              className="px-[6px] py-[8px] rounded-[8px]"
              name="timeType"
              onChange={(event) => {
                setTimeout(() => {
                  setTimeData({
                    ...timeData,
                    timeType: event.target.value,
                  });
                }, 2000);
              }}
            >
              <option value="SUMMER">Зун</option>
              <option value="WINTER">Өвөл</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
          <button
            onClick={() => {
              addTimeorPrice("time");
            }}
          >
            Нэмэх
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] border-t-[2px] border-solid border-[c6c6c6] pt-[20px]">
        <div>Үнийн мэдээлэл</div>
        <div className="flex gap-[20px]">
          <div>
            <div>Насны ангилал сонгох</div>
            <select
              className="px-[6px] py-[8px] rounded-[8px]"
              name="timeType"
              onChange={(event) => {
                setTimeout(() => {
                  setPriceData({
                    ...priceData,
                    amountType: event.target.value,
                  });
                }, 2000);
              }}
            >
              <option value="ADULT">Насанд хүрсэн хүн</option>
              <option value="CHILD">Хүүхэд</option>
              <option value="STUDENT">Сурагч</option>
              <option value="TOURIST">Жуучин</option>
              <option value="TAKE_PHOTO">Зураг авах </option>
              <option value="RECORDING">Бичлэг хийх </option>
            </select>
          </div>
          <div>
            <div>
              <div>Зураг</div>
              <input
                type="number"
                placeholder="Дүн"
                name="amount"
                className="px-[6px] py-[8px] rounded-[8px]"
                onChange={(event) => {
                  setTimeout(() => {
                    const number = Number(event.target.value);
                    setPriceData({
                      ...priceData,
                      amount: number,
                    });
                  }, 2000);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
          <button
            onClick={() => {
              addTimeorPrice("price");
            }}
          >
            Нэмэх
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
        <button
          onClick={() => {
            createEmployee();
          }}
        >
          Нэмэх
        </button>
      </div>
    </div>
  );
};
export default InstitutionForm;
