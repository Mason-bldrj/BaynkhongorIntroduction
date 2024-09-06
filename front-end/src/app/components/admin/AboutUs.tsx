import { postFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useState } from "react";
import DefaultInformationSec from "./defaultInformationForm";

const AboutUs = () => {
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
  const createEmployee = async () => {
    try {
      const res = await postFunc(urls.ABOUTUS, {
        name: aboutUsData.name,
        email: aboutUsData.email,
        about: aboutUsData.about,
        aboutOffice: aboutUsData.aboutOffice,
        porpose: "0",
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
      console.log(res);
    } catch (err: any) {
      return err;
    }
  };
  return (
    <div className="flex items-center flex-wrap rounded-[8px] shadow-sm bg-[#f6f6f6] gap-[24px] border-[1px] border-solid border-[#f7f7f7] p-[20px]">
      <div>
        <div className="text-[16px]">Газрын нэр </div>
        <input
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
        <input
          type="image"
          placeholder="Зураг"
          className="px-[6px] py-[8px] rounded-[8px]"
          name="mainImg"
          onChange={(event) => {
            setTimeout(() => {
              setAboutUsData({
                ...aboutUsData,
                mainImg: event.target.value,
              });
            }, 1000);
          }}
        />
      </div>
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
      <div className="w-full h-[100px]">
        <div>Бидны тухай</div>
        <textarea
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
        <div>Албаны тухай </div>
        <textarea
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
          setDefaultInformation={setDefaultInformation}
          defaultInformation={defaultInformation}
        ></DefaultInformationSec>
      </div>
      <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
        <button
          onClick={() => {
            console.log(aboutUsData);
            createEmployee();
          }}
        >
          Нэмэх
        </button>
      </div>
    </div>
  );
};
export default AboutUs;
