import { postFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useState } from "react";

const EmployeeFrom = () => {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    position: "",
    phoneNumber: 0,
  });
  const [links, setLinks] = useState({
    fbLink: "",
    IG_Link: "",
    twitterLink: "",
  });
  const createEmployee = async () => {
    try {
      const res = await postFunc(urls.EMPLOYEE, {
        name: employeeData.name,
        position: employeeData.position,
        phoneNumber: employeeData.phoneNumber,
        links: {
          fbLink: links.fbLink,
          IG_Link: links.IG_Link,
          twitterLink: links.twitterLink,
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
        <div className="text-[16px]">Ажилтаны нэр </div>
        <input
          type="text"
          placeholder="Нэр"
          name="name"
          className="px-[6px] py-[8px] rounded-[8px]"
          onChange={(event) => {
            setTimeout(() => {
              setEmployeeData({
                ...employeeData,
                name: event.target.value,
              });
            }, 2000);
          }}
        />
      </div>
      <div className="flex flex-col   ">
        <div className="text-[16px]"> Албан тушаал</div>
        <input
          className="px-[6px] py-[8px] rounded-[8px]"
          type="text"
          placeholder="Албан тушаал"
          name="position"
          onChange={(event) => {
            setTimeout(() => {
              setEmployeeData({
                ...employeeData,
                position: event.target.value,
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
              setEmployeeData({
                ...employeeData,
                phoneNumber: number,
              });
            }, 2000);
          }}
        />
      </div>
      <div>
        <div>Facebook profile</div>
        <input
          type="text"
          placeholder="Link"
          name="fbLink"
          className="px-[6px] py-[8px] rounded-[8px]"
          onChange={(event) => {
            setTimeout(() => {
              setLinks({
                ...links,
                fbLink: event.target.value,
              });
            }, 2000);
          }}
        />
      </div>
      <div>
        <div>Instagram Profile</div>
        <input
          type="text"
          placeholder="Link"
          name="IG_Link"
          className="px-[6px] py-[8px] rounded-[8px]"
          onChange={(event) => {
            setTimeout(() => {
              setLinks({
                ...links,
                IG_Link: event.target.value,
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
            console.log(employeeData, links);
            createEmployee();
          }}
        >
          Нэмэх
        </button>
      </div>
    </div>
  );
};
export default EmployeeFrom;
