import { postFunc } from "@/app/backdata";
import { imageDb } from "@/firebase";
import urls from "@/lib/urls";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 } from "uuid";

const KeepSakeForm = () => {
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
            }, 1000);
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
