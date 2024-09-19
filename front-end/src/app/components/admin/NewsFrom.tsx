import urls from "@/lib/urls";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 } from "uuid";

import { postFunc } from "@/app/backdata";
import { imageDb } from "@/firebase";

const NewsFrom = (props?: any) => {
  const { edit, data } = props;

  const [reportData, setReportData] = useState({
    name: "",
    date: "",
    description: "",
  });
  const [videoNewsData, setVideoNewsData] = useState({
    name: "",
    date: "",
    url: "",
  });
  const [resourcesData, setResourcesData] = useState({
    name: "",
    img: "",
    description: "",
  });
  const [image, setImage] = useState<any>();
  const handleclick = async (image: any) => {
    const a = v4();

    const imgRef = ref(imageDb, `${a}`);
    const res = await uploadBytes(imgRef, image);

    setResourcesData({
      ...resourcesData,
      img: `https://firebasestorage.googleapis.com/v0/b/app-demo-554df.appspot.com/o/${a}?alt=media&token=4554e441-c30b-4a16-b81f-5b50727d691e`,
    });
  };
  const createReport = async () => {
    try {
      const res = await postFunc(urls.REPORT, {
        name: reportData.name,
        date: reportData.date,
        description: reportData.description,
      });
    } catch (err: any) {
      return err;
    }
  };
  const editReport = async () => {
    try {
      const res = await postFunc(urls.REPORT, {
        id: data._id,
        name: reportData.name,
        date: reportData.date,
        description: reportData.description,
      });
    } catch (err: any) {
      return err;
    }
  };
  const createResources = async () => {
    try {
      const res = await postFunc(urls.RESOURCES, {
        name: resourcesData.name,
        img: resourcesData.img,
        description: resourcesData.description,
      });
    } catch (err: any) {
      return err;
    }
  };
  const editResources = async () => {
    try {
      const res = await postFunc(urls.RESOURCES, {
        id: data?._id,
        name: resourcesData.name,
        img: resourcesData.img,
        description: resourcesData.description,
      });
    } catch (err: any) {
      return err;
    }
  };
  const createVideo = async () => {
    try {
      const res = await postFunc(urls.VIDEO, {
        name: videoNewsData.name,
        date: videoNewsData.date,
        url: videoNewsData.url,
      });
    } catch (err: any) {
      return err;
    }
  };
  const editVideo = async () => {
    try {
      const res = await postFunc(urls.VIDEO, {
        id: data._id,
        name: videoNewsData.name,
        date: videoNewsData.date,
        url: videoNewsData.url,
      });
    } catch (err: any) {
      return err;
    }
  };
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex   items-start flex-col rounded-[8px] shadow-sm bg-[#f6f6f6] gap-[24px] border-[1px] border-solid border-[#f7f7f7] p-[20px]">
        <div>Бичлэг оруулах хэсэг</div>
        <div>
          <div>
            <div>Бичлэгний нэр </div>
            <input
              type="text"
              placeholder="Та нэрээ оруулна уу "
              name="name"
              className="px-[6px] py-[8px] rounded-[8px]"
              onChange={(event) => {
                setTimeout(() => {
                  setVideoNewsData({
                    ...videoNewsData,
                    name: event.target.value,
                  });
                }, 1000);
              }}
            />
          </div>
          <div className="w-full ">
            <div>огноо</div>
            <input
              type="date"
              placeholder="Тайлбар"
              name="date"
              className="px-[6px] py-[8px] h-full rounded-[8px] w-full"
              onChange={(event) => {
                setTimeout(() => {
                  setVideoNewsData({
                    ...videoNewsData,
                    date: event.target.value,
                  });
                }, 1000);
              }}
            />
          </div>
          <div className="w-full ">
            <div>Бичлэг оруула хэсэг</div>
            <input
              type="video"
              placeholder="Бичлэг"
              name="url"
              className="px-[6px] py-[8px] h-full rounded-[8px] w-full"
              onChange={(event) => {
                setTimeout(() => {
                  setVideoNewsData({
                    ...videoNewsData,
                    url: event.target.value,
                  });
                }, 1000);
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
          <button
            onClick={() => {
              if (edit === true) {
                editVideo();
              } else {
                createVideo();
              }
            }}
          >
            Нэмэх
          </button>
        </div>
      </div>
      <div className="flex   items-start flex-col rounded-[8px] shadow-sm bg-[#f6f6f6] gap-[24px] border-[1px] border-solid border-[#f7f7f7] p-[20px]">
        <h1>АЖ-ын нөөц газар</h1>
        <div>
          <div>
            <div>Нэр</div>
            <input
              type="text"
              placeholder="Нэр"
              name="name"
              className="px-[6px] py-[8px] rounded-[8px]"
              onChange={(event) => {
                setTimeout(() => {
                  setResourcesData({
                    ...resourcesData,
                    name: event.target.value,
                  });
                }, 1000);
              }}
            />
          </div>
          <div>
            <div>Тайлбар</div>
            <input
              type="text"
              placeholder="Тайлбар"
              name="name"
              className="px-[6px] py-[8px] rounded-[8px]"
              onChange={(event) => {
                setTimeout(() => {
                  setResourcesData({
                    ...resourcesData,
                    description: event.target.value,
                  });
                }, 1000);
              }}
            />
          </div>
          <div className="">
            <div>Зураг</div>
            <div className="flex items-center">
              <input
                type="file"
                placeholder="Зураг"
                name="img"
                className="px-[6px] py-[8px] h-full rounded-[8px] w-full"
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
        </div>
        <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
          <button
            onClick={() => {
              if (edit === true) {
                editResources;
              } else {
                createResources();
              }
            }}
          >
            Нэмэх
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewsFrom;
