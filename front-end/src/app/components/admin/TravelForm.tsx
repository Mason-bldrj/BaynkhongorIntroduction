import urls from "@/lib/urls";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 } from "uuid";

import { postFunc } from "@/app/backdata";
import { imageDb } from "@/firebase";
import RichTextExample from "@/app/draft";

const TravelForm = (props?: any) => {
  const { edit, data } = props;
  const [travelData, setTravelData] = useState({
    name: "",
    img: "",
    date: "",
    travelType: "",
    description: "",
  });
  const [image, setImage] = useState<any>();
  const handleclick = async (image: any) => {
    const a = v4();

    const imgRef = ref(imageDb, `${a}`);
    const res = await uploadBytes(imgRef, image);

    setTravelData({
      ...travelData,
      img: `https://firebasestorage.googleapis.com/v0/b/app-demo-554df.appspot.com/o/${a}?alt=media&token=4554e441-c30b-4a16-b81f-5b50727d691e`,
    });
  };
  const createTravel = async () => {
    try {
      const res = await postFunc(urls.TRAVEL, {
        name: travelData.name,
        img: travelData.img,
        date: travelData.date,
        travelType: travelData.travelType,
        description: travelData.description,
      });
    } catch (err: any) {
      return err;
    }
  };
  const editTravel = async () => {
    try {
      const res = await postFunc(urls.TRAVEL, {
        id: data._id,
        name: travelData.name,
        img: travelData.img,
        date: travelData.date,
        travelType: travelData.travelType,
        description: travelData.description,
      });
    } catch (err: any) {
      return err;
    }
  };
  return (
    <div className="flex items-center flex-wrap rounded-[8px] shadow-sm bg-[#f6f6f6] gap-[24px] border-[1px] border-solid border-[#f7f7f7] p-[20px]">
      <div>
        <div className="text-[16px]">Аялалын нэр </div>
        <input
          defaultValue={data?.name}
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
            }, 1000);
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
            }, 1000);
          }}
        />
      </div>
      <div>
        <div>Аялалын төрөл</div>
        <select
          defaultValue={data?.travelType}
          className="px-[6px] py-[8px] rounded-[8px]"
          name="travelType"
          onChange={(event) => {
            setTimeout(() => {
              setTravelData({
                ...travelData,
                travelType: event.target.value,
              });
            }, 1000);
          }}
        >
          <option value="LocalTravel">Орон нутгийн аялал</option>
          <option value="FOREIGN_TRAVEL">ГАДААД АЯЛАЛ</option>
          <option value="INTERNAL_TRAVEL">ДОТООД АЯЛАЛ</option>
        </select>
      </div>
      <div>
        <div>Зураг</div>
        <div className="flex">
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
            className="flex justify-center items-center rounded-[8px]  bg-white py-[4px] px-[8px]"
          >
            Upload
          </button>
        </div>
      </div>
      <div className="w-full ">
        <div>Тайлбар</div>
    
        <RichTextExample description={setTravelData}/>
      </div>
      <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
        <button
          onClick={() => {
            if (edit === true) {
              editTravel();
            } else {
              createTravel();
            }
          }}
        >
          Нэмэх
        </button>
      </div>
    </div>
  );
};
export default TravelForm;
