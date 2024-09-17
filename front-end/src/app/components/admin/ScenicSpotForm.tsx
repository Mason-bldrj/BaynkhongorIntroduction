import urls from "@/lib/urls";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 } from "uuid";

import { postFunc } from "@/app/backdata";
import { imageDb } from "@/firebase";

const ScenicSpotFrom = (props?: any) => {
  const { edit, data } = props;
  console.log(data);

  const [image, setImage] = useState<any>();
  const [scenicData, setScenicData] = useState({
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

    setScenicData({
      ...scenicData,
      img: `https://firebasestorage.googleapis.com/v0/b/app-demo-554df.appspot.com/o/${a}?alt=media&token=4554e441-c30b-4a16-b81f-5b50727d691e`,
    });
  };
  const createScenic = async () => {
    try {
      const res = await postFunc(urls.SCENICSPORT, {
        name: scenicData.name,
        img: scenicData.img,
        description: scenicData.description,
      });
      console.log(res);
    } catch (err: any) {
      return err;
    }
  };
  console.log(scenicData);

  const editScenic = async () => {
    try {
      const res = await postFunc(urls.SCENICSPORT, {
        id: data._id,

        name: scenicData.name,
        img: scenicData.img,
        description: scenicData.description,
      });
      console.log(res);
    } catch (err: any) {
      return err;
    }
  };
  return (
    <div className="flex items-center flex-wrap rounded-[8px] shadow-sm bg-[#f6f6f6] gap-[24px] border-[1px] border-solid border-[#f7f7f7] p-[20px]">
      <div>
        <div className="text-[16px]">Тухайн газарын нэр </div>
        <input
          defaultValue={data?.name}
          type="text"
          placeholder="Нэр"
          name="name"
          className="px-[6px] py-[8px] rounded-[8px]"
          onChange={(event) => {
            setTimeout(() => {
              setScenicData({
                ...scenicData,
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
              setScenicData({
                ...scenicData,
                description: event.target.value,
              });
            }, 1000);
          }}
        />
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
              const file = event.target.files[0];
              console.log(file);

              setImage(file);
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
      <div className="flex items-center   justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
        <button
          onClick={() => {
            if (edit === true) {
              editScenic();
            } else {
              createScenic();
            }
          }}
        >
          Нэмэх
        </button>
      </div>
    </div>
  );
};
export default ScenicSpotFrom;
