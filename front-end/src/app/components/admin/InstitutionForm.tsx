import { postFunc } from "@/app/backdata";
import { imageDb } from "@/firebase";
import urls from "@/lib/urls";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 } from "uuid";

const InstitutionForm = () => {
  const [institutionData, setInstitutionData] = useState({
    name: "",
    institutionType: "",
    description: "",
    img: "",
  });
  const [phoneNumbers, setPhoneNumbers] = useState({
    phoneNumber1: 0,
    phoneNumber2: 0,
  });
  const [timeData, setTimeData] = useState({
    timeType: "",

    opentime: "",
    closedTime: "",
  });
  const [priceData, setPriceData] = useState({
    amountType: "",
    amount: 0,
  });
  const [image, setImage] = useState<any>();
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
  const handleclick = async (image: any) => {
    const a = v4();

    const imgRef = ref(imageDb, `${a}`);
    const res = await uploadBytes(imgRef, image);

    setInstitutionData({
      ...institutionData,
      img: `https://firebasestorage.googleapis.com/v0/b/app-demo-554df.appspot.com/o/${a}?alt=media&token=4554e441-c30b-4a16-b81f-5b50727d691e`,
    });
  };

  const createEmployee = async () => {
    try {
      const res = await postFunc(urls.institution, {
        name: institutionData.name,
        institutionType: institutionData.institutionType,
        description: institutionData.description,
        phoneNumbers: phoneNumbers,
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
                }, 1000);
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
                }, 1000);
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
        <div className="flex gap-[10px]">
          <div>
            <div>Утас 1</div>
            <input
              type="tel"
              placeholder="Утасний дугаар"
              className="px-[6px] py-[8px] rounded-[8px]"
              name="phoneNumber1"
              onChange={(event) => {
                setTimeout(() => {
                  const number = Number(event.target.value);
                  setPhoneNumbers({
                    ...phoneNumbers,
                    phoneNumber1: number,
                  });
                }, 1000);
              }}
            />
          </div>
          <div>
            <div>Утас 2</div>
            <input
              type="tel"
              placeholder="Утасний дугаар"
              className="px-[6px] py-[8px] rounded-[8px]"
              name="phoneNumber2"
              onChange={(event) => {
                setTimeout(() => {
                  const number = Number(event.target.value);
                  setPhoneNumbers({
                    ...phoneNumbers,
                    phoneNumber2: number,
                  });
                }, 1000);
              }}
            />
          </div>
        </div>
        <div>
          <div>Зураг</div>
          <div>
            <input
              type="file"
              placeholder=""
              name="img"
              className="px-[6px] py-[8px] rounded-[8px]"
              onChange={(event: any) => {
                setImage(event.target.files[0]);
              }}
            />
            <button
              onClick={() => {
                handleclick(image);
              }}
            >
              Upload
            </button>
          </div>
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
              }, 1000);
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
                }, 1000);
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
                }, 1000);
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
                }, 1000);
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
              console.log(timeData);

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
                }, 1000);
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
                  }, 1000);
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
