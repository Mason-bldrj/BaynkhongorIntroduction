import urls from "@/lib/urls";
import { useState } from "react";
import DefaultInformationSec from "./defaultInformationForm";
import { v4 } from "uuid";
import { ref, uploadBytes, getStorage } from "firebase/storage";

import { postFunc } from "@/app/backdata";
import { imageDb } from "@/firebase";
import OfferSec from "./OfferSec";

const AboutUs = (props?: any) => {
  const { edit, aboutData } = props;
  const [image, setImage] = useState<string>();
  const [aboutUsData, setAboutUsData] = useState({
    name: "",
    email: "",
    mainImg: "",
    about: "",
    aboutOffice: "",
    porpose: "",
    objective: "",
  });
  const [defaultInformation, setDefaultInformation] = useState({
    natureMonument: 0,
    memorialPlaceNumber: 0,
    groundKM_Number: 0,
    population: 0,
    teamsNumber: 0,
    wardNumber: 0,
  });
  const [phoneNumbers, setPhoneNumbers] = useState({
    phoneNumber1: 0,
    phoneNumber2: 0,
  });
  const [offerArray, setOfferArray] = useState([]);
  const storage = getStorage();
  const uploadImage = () => {
    const storageref = ref(storage);
  };
  const handleclick = async (image: any) => {
    const a = v4();

    const imgRef = ref(imageDb, `${a}`);
    const res = await uploadBytes(imgRef, image);

    setAboutUsData({
      ...aboutUsData,
      mainImg: `https://firebasestorage.googleapis.com/v0/b/app-demo-554df.appspot.com/o/${a}?alt=media&token=4554e441-c30b-4a16-b81f-5b50727d691e`,
    });
  };
  const createEmployee = async () => {
    try {
      const res = await postFunc(urls.ABOUTUS, {
        name: aboutUsData.name,
        email: aboutUsData.email,
        about: aboutUsData.about,
        aboutOffice: aboutUsData.aboutOffice,
        porpose: aboutUsData.porpose,
        mainImg: aboutUsData.mainImg,
        objective: aboutUsData.objective,
        phoneNumbers: {
          phoneNumber1: phoneNumbers.phoneNumber1,
          phoneNumber2: phoneNumbers.phoneNumber2,
        },
        numericalIndicators: {
          natureMonument: defaultInformation.natureMonument,
          memorialPlaceNumber: defaultInformation.memorialPlaceNumber,
          groundKM_Number: defaultInformation.groundKM_Number,
          population: defaultInformation.population,
          teamsNumber: defaultInformation.teamsNumber,
          wardNumber: defaultInformation.wardNumber,
        },
      });
      const res1 = await postFunc(`${urls.ABOUTUS}/offers`, {
        offerArray,
      });
    } catch (err: any) {
      return err;
    }
  };
  console.log(aboutData);

  return (
    <div className="flex items-center flex-wrap rounded-[8px] shadow-sm bg-[#f6f6f6] gap-[24px] border-[1px] border-solid border-[#f7f7f7] p-[20px]">
      <div
        className={`flex flex-col gap-[24px]  ${
          edit === true ? "px-[40px]" : ""
        }`}
      >
        <div>
          <div className="text-[16px]">Газрын нэр </div>
          <input
            defaultValue={aboutData?.name}
            type="text"
            placeholder="Нэр"
            name="name"
            className="px-[6px] py-[8px] rounded-[8px]"
            onChange={(event) => {
              setTimeout(() => {
                setAboutUsData({
                  ...aboutUsData,
                  name: event.target.value,
                });
              }, 1000);
            }}
          />
        </div>
        <div className="flex flex-col   ">
          <div className="text-[16px]"> Имэйл</div>
          <input
            defaultValue={aboutData?.email}
            className="px-[6px] py-[8px] rounded-[8px]"
            type="email"
            placeholder="Имэйл"
            name="email"
            onChange={(event) => {
              setTimeout(() => {
                setAboutUsData({
                  ...aboutUsData,
                  email: event.target.value,
                });
              }, 1000);
            }}
          />
        </div>
        <div>
          <div>Зураг</div>
          <div className="flex items-center gap-[40px] ">
            <input
              type="file"
              placeholder=""
              className="px-[6px] py-[8px] rounded-[8px]"
              name="mainImg"
              onChange={(event) => {
                setTimeout(() => {
                  const file: any = event.target.files;

                  setImage(file[0]);
                }, 1000);
              }}
            />
            <button
              onClick={() => {
                handleclick(image);
              }}
              className="flex justify-center items-center bg-white px-[12px] py-[8px] rounded-[8px] "
            >
              upload
            </button>
          </div>
        </div>
        <div className="flex gap-[24px]">
          <div>
            <div>Утас 1</div>
            <input
              defaultValue={aboutData?.phoneNumbers?.phoneNumber1}
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
              defaultValue={aboutData?.phoneNumbers?.phoneNumber2}
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
        <div className="w-full h-[100px]">
          <div>Бидны тухай</div>
          <textarea
            defaultValue={aboutData?.about}
            placeholder="Бидны тухай"
            name="about"
            className="px-[6px] py-[8px] h-full rounded-[8px] w-full"
            onChange={(event) => {
              setTimeout(() => {
                setAboutUsData({
                  ...aboutUsData,
                  about: event.target.value,
                });
              }, 1000);
            }}
          />
        </div>
        <div className="w-full h-[100px]">
          <div>Зорилго</div>
          <textarea
            defaultValue={aboutData?.objective}
            placeholder="Зорилго"
            name="objective"
            className="px-[6px] py-[8px] h-full rounded-[8px] w-full"
            onChange={(event) => {
              setTimeout(() => {
                setAboutUsData({
                  ...aboutUsData,
                  objective: event.target.value,
                });
              }, 1000);
            }}
          />
        </div>
        <div className="w-full h-[100px]">
          <div>Зорилт</div>
          <textarea
            defaultValue={aboutData?.porpose}
            placeholder="Зорилт"
            name="objective"
            className="px-[6px] py-[8px] h-full rounded-[8px] w-full"
            onChange={(event) => {
              setTimeout(() => {
                setAboutUsData({
                  ...aboutUsData,
                  porpose: event.target.value,
                });
              }, 1000);
            }}
          />
        </div>
        <div className="w-full h-[100px]">
          <div>Албаны тухай </div>
          <textarea
            defaultValue={aboutData?.aboutOffice}
            placeholder="Албаны тухай"
            name="aboutOffice"
            className="px-[6px] py-[8px] h-full rounded-[8px] w-full"
            onChange={(event) => {
              setTimeout(() => {
                setAboutUsData({
                  ...aboutUsData,
                  aboutOffice: event.target.value,
                });
              }, 1000);
            }}
          />
        </div>
        <div className="flex border-t-[2px] border-solid mt-[10px]">
          <DefaultInformationSec
            numericalIndicators={aboutData?.numericalIndicators}
            setDefaultInformation={setDefaultInformation}
            defaultInformation={defaultInformation}
          ></DefaultInformationSec>
        </div>
        <OfferSec
          offerArray={offerArray}
          setOfferArray={setOfferArray}
        ></OfferSec>
      </div>
      <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
        <button
          className="flex p-[8px]"
          onClick={() => {
            console.log(aboutUsData);
            createEmployee();
          }}
        >
          Мэдээлэл оруулах
        </button>
      </div>
    </div>
  );
};
export default AboutUs;
