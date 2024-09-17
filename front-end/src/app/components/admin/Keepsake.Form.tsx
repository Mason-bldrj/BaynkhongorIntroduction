import urls from "@/lib/urls";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 } from "uuid";

import { postFunc } from "@/app/backdata";
import { imageDb } from "@/firebase";

const KeepSakeForm = (props?: any) => {
  const { edit, data } = props;
  const [keepSakeData, setKeepSakeData] = useState({
    name: "",
    img: "",
    title: "",
    description: "",
  });
  const [image, setImage] = useState<any>();
  const handleclick = async (image: any) => {
    const a = v4();

    const imgRef = ref(imageDb, `${a}`);
    const res = await uploadBytes(imgRef, image);

    setKeepSakeData({
      ...keepSakeData,
      img: `https://firebasestorage.googleapis.com/v0/b/app-demo-554df.appspot.com/o/${a}?alt=media&token=4554e441-c30b-4a16-b81f-5b50727d691e`,
    });
  };

  const createKeepSake = async () => {
    try {
      const res = await postFunc(urls.KEEPSAKE, {
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
  const editKeepSake = async () => {
    try {
      const res = await postFunc(urls.KEEPSAKE, {
        id: data._id,
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
          defaultValue={data?.name}
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
            }, 1000);
          }}
        />
      </div>
      <div className="flex flex-col   ">
        <div className="text-[16px]">Гарчиг</div>
        <input
          defaultValue={data?.title}
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
            }, 1000);
          }}
        />
      </div>
      <div>
        <div>Зураг</div>
        <div className="flex items-center">
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
      <div className="w-full h-[100px]">
        <div>Тайлбар</div>
        <textarea
          defaultValue={data?.description}
          placeholder="Тайлбар"
          name="descrition"
          className="px-[6px] py-[8px] h-full rounded-[8px] w-full"
          onChange={(event) => {
            setTimeout(() => {
              setKeepSakeData({
                ...keepSakeData,
                description: event.target.value,
              });
            }, 1000);
          }}
        />
      </div>
      <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
        <button
          onClick={() => {
            if (edit === true) {
              editKeepSake;
            } else {
              createKeepSake();
            }
          }}
        >
          Нэмэх
        </button>
      </div>
    </div>
  );
};
export default KeepSakeForm;
