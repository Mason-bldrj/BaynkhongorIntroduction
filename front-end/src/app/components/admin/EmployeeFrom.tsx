import urls from "@/lib/urls";
import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 } from "uuid";

import { postFunc, putFunc } from "@/app/backdata";
import { imageDb } from "@/firebase";

const EmployeeFrom = (props?: any) => {
  const { edit, data } = props;
  const [employeeData, setEmployeeData] = useState({
    name: "",
    position: "",
    phoneNumber: 0,
    img: "",
  });
  const [image, setImage] = useState();
  const [links, setLinks] = useState({
    fbLink: "",
    IG_Link: "",
    twitterLink: "",
  });
  const handleclick = async (image: any) => {
    const a = v4();

    const imgRef = ref(imageDb, `${a}`);
    const res = await uploadBytes(imgRef, image);

    setEmployeeData({
      ...employeeData,
      img: `https://firebasestorage.googleapis.com/v0/b/app-demo-554df.appspot.com/o/${a}?alt=media&token=4554e441-c30b-4a16-b81f-5b50727d691e`,
    });
  };
  const createEmployee = async () => {
    try {
      const res = await postFunc(urls.EMPLOYEE, {
        name: employeeData.name,
        position: employeeData.position,
        img: employeeData.img,
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
  const editEmployee = async () => {
    try {
      const res = await putFunc(urls.EMPLOYEE, {
        id: data._id,
        name: employeeData.name,
        position: employeeData.position,
        img: employeeData.img,
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
          defaultValue={data?.name}
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
            }, 1000);
          }}
        />
      </div>
      <div className="flex flex-col   ">
        <div className="text-[16px]"> Албан тушаал</div>
        <input
          defaultValue={data?.position}
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
      <div>
        <div>Утас</div>
        <input
          defaultValue={data?.phoneNumber}
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
            }, 1000);
          }}
        />
      </div>
      <div>
        <div>Facebook profile</div>
        <input
          defaultValue={data?.links?.fbLink}
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
            }, 1000);
          }}
        />
      </div>
      <div>
        <div>Instagram Profile</div>
        <input
          defaultValue={data?.links?.IG_Link}
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
            }, 1000);
          }}
        />
      </div>
      <div>
        <div>Twitter profile</div>
        <input
          defaultValue={data?.links?.twitterLink}
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
            }, 1000);
          }}
        />
      </div>
      <div className="flex items-center justify-center bg-white w-[150px] rounded-[8px] h-[40px] mt-[20px] ">
        <button
          onClick={() => {
            if (edit === true) {
              editEmployee();
            } else {
              createEmployee();
            }
          }}
        >
          Нэмэх
        </button>
      </div>
    </div>
  );
};
export default EmployeeFrom;
