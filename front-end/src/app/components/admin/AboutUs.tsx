import { postFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useState } from "react";

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
        porpose: aboutUsData.porpose,
        objective: aboutUsData.objective,
        phoneNumbers: {
          phoneNumbers1: phoneNumbers.phoneNumber1,
          phoneNumbers2: phoneNumbers.phoneNumber2,
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
            }, 2000);
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
            }, 2000);
          }}
        />
      </div>
      <div>
        <div>Утас</div>
        <input
          type="tel"
          placeholder="Утас"
          className="px-[6px] py-[8px] rounded-[8px]"
          min={0}
          max={8}
          name="phoneNumber"
          onChange={(event) => {
            const number = Number(event.target.value);
            setTimeout(() => {
              setAboutUsData({
                ...aboutUsData,
                phoneNumber: number,
              });
            }, 2000);
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
              setTravelData({
                ...aboutUsData,
                about: event.target.value,
              });
            }, 2000);
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
              setTravelData({
                ...aboutUsData,
                objective: event.target.value,
              });
            }, 2000);
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
              setTravelData({
                ...aboutUsData,
                aboutOffice: event.target.value,
              });
            }, 2000);
          }}
        />
      </div>
      <div>
        <div>Twitter profile</div>
        <input
          type="text"
          placeholder="Link"
          name="twitterLink"
          className="px-[6px] py-[8px] rounded-[8px] shadow-sm"
          onChange={(event) => {
            setTimeout(() => {
              setLinks({
                ...links,
                twitterLink: event.target.value,
              });
            }, 2000);
          }}
        />
      </div>
      <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
        <button
          onClick={() => {
            console.log(aboutUsData, links);
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
