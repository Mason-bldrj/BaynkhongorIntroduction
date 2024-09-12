import { imageDb } from "@/firebase";
import { postFunc } from "@/lib/backdata";
import urls from "@/lib/urls";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 } from "uuid";

const NewsFrom = () => {
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
  const createResources = async () => {
    try {
      const res = await postFunc(urls.RESOURCES, {
        name: resourcesData.name,
        img: resourcesData.img,
      });
      console.log(res);
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
      console.log(res);
    } catch (err: any) {
      return err;
    }
  };
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex   items-start flex-col rounded-[8px] shadow-sm bg-[#f6f6f6] gap-[24px] border-[1px] border-solid border-[#f7f7f7] p-[20px]">
        <h1 className="text-start">Тайлан оруулах хэсэг</h1>
        <div>
          <div className="flex gap-[24px] ">
            <div>
              <div className="text-[16px]">Тайлан нэр </div>
              <input
                type="text"
                placeholder="Нэр"
                name="name"
                className="px-[6px] py-[8px] rounded-[8px]"
                onChange={(event) => {
                  setTimeout(() => {
                    setReportData({
                      ...reportData,
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
                    setReportData({
                      ...reportData,
                      date: event.target.value,
                    });
                  }, 1000);
                }}
              />
            </div>
          </div>
          <div>
            <div>Тайлбар</div>
            <textarea
              className="px-[6px] py-[8px] rounded-[8px] w-full h-[100px]"
              name="phoneNumber"
              onChange={(event) => {
                setTimeout(() => {
                  setReportData({
                    ...reportData,
                    description: event.target.value,
                  });
                }, 1000);
              }}
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
          <button
            onClick={() => {
              createReport();
            }}
          >
            Нэмэх
          </button>
        </div>
      </div>

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
                console.log(event.target.value);
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
              createVideo();
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
            <div>Нэр (тайлбар)</div>
            <input
              type="text"
              placeholder="Нэр"
              name="name"
              className="px-[6px] py-[8px] rounded-[8px]"
              onChange={(event) => {
                console.log(event.target.value);
                setTimeout(() => {
                  setResourcesData({
                    ...resourcesData,
                    name: event.target.value,
                  });
                }, 1000);
              }}
            />
          </div>
          <div className="">
            <div>Зураг</div>
            <div>
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
              >
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
          <button
            onClick={() => {
              createResources();
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
