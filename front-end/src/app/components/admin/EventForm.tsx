import urls from "@/lib/urls";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 } from "uuid";

import { postFunc } from "@/app/backdata";
import { imageDb } from "@/firebase";

const EventForm = (props?: any) => {
  const { edit, data } = props;
  const [image, setImage] = useState<any>();
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    img: "",
  });
  const handleclick = async (image: any) => {
    const a = v4();

    const imgRef = ref(imageDb, `${a}`);
    const res = await uploadBytes(imgRef, image);
    console.log(res);
    console.log(a);

    setEventData({
      ...eventData,
      img: `https://firebasestorage.googleapis.com/v0/b/app-demo-554df.appspot.com/o/${a}?alt=media&token=4554e441-c30b-4a16-b81f-5b50727d691e`,
    });
  };
  const createEvent = async () => {
    try {
      const res = await postFunc(urls.EVENT, {
        name: eventData.name,
        img: eventData.img,
        description: eventData.description,
      });
    } catch (err: any) {
      return err;
    }
  };
  const editEvent = async () => {
    try {
      const res = await postFunc(urls.EVENT, {
        id: data._id,
        name: eventData.name,
        img: eventData.img,
        description: eventData.description,
      });
    } catch (err: any) {
      return err;
    }
  };
  return (
    <div className="flex items-center flex-wrap rounded-[8px] shadow-sm bg-[#f6f6f6] gap-[24px] border-[1px] border-solid border-[#f7f7f7] p-[20px]">
      <div>
        <div className="text-[16px]">Эвент нэр </div>
        <input
          defaultValue={data?.naem}
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
            }, 1000);
          }}
        />
      </div>
      <div className="flex flex-col w-full h-[150px]   ">
        <div className="text-[16px]"> Тайлбар </div>
        <textarea
          defaultValue={data?.description}
          className="px-[6px] py-[8px] rounded-[8px] h-full"
          placeholder="Тайлбар"
          name="description"
          onChange={(event) => {
            setTimeout(() => {
              setEventData({
                ...eventData,
                description: event.target.value,
              });
            }, 1000);
          }}
        />
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
              const file = event.target.files[0];
              console.log(file);

              setImage(file);
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
      <div className="flex items-center   justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
        <button
          onClick={() => {
            if (edit === true) {
              editEvent();
            } else {
              createEvent();
            }
          }}
        >
          Нэмэх
        </button>
      </div>
    </div>
  );
};
export default EventForm;
