"use client";

import { fetchFunc } from "@/app/backdata";
import AboutUs from "@/app/components/admin/AboutUs";
import EmployeeFrom from "@/app/components/admin/EmployeeFrom";
import EventForm from "@/app/components/admin/EventForm";
import InstitutionForm from "@/app/components/admin/InstitutionForm";
import KeepSakeForm from "@/app/components/admin/Keepsake.Form";
import LegalityForm from "@/app/components/admin/Legality.Form";
import NewsFrom from "@/app/components/admin/NewsFrom";
import ScenicSpotFrom from "@/app/components/admin/ScenicSpotForm";
import TravelForm from "@/app/components/admin/TravelForm";
import urls from "@/lib/urls";
import { useEffect, useState } from "react";

const EditPage = ({ params }: any) => {
  const { id } = params;
  const a = id.split("*");
  const incomeId = a[0];
  const menuName = decodeURIComponent(a[1]);
  const menus = menuName.split("}")[0];
  console.log(menus, incomeId);
  const [edit, setEdit] = useState(false);
  const [aboutData, setAboutUsData] = useState();
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      let fetchedData = [];
      if (menus === "Бидний тухай") {
        const res = await fetchFunc(`${urls.ABOUTUS}`);
        const data = await res.json();
        const set: any = [data[0]];
        setAboutUsData(set[0]);
      } else if (menus === "Байгуулга") {
        const res = await fetchFunc(
          `${urls.institution}/getbyId?id=${incomeId}`
        );
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "Аялал") {
        const res = await fetchFunc(`${urls.TRAVEL}/getbyId?id=${incomeId}`);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "Event") {
        const res = await fetchFunc(`${urls.EVENT}/getbyId?id=${incomeId}`);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "Бэлэг дурсгал") {
        const res = await fetchFunc(`${urls.KEEPSAKE}/getbyId?id=${incomeId}`);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "Хууль , Эрх зүй") {
        const res = await fetchFunc(`${urls.LEGALITY}/getbyId?id=${incomeId}`);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "Ажилчид") {
        const res = await fetchFunc(`${urls.EMPLOYEE}/getbyId?id=${incomeId}`);
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "Үзэсгэлэнт Газрууд") {
        const res = await fetchFunc(
          `${urls.SCENICSPORT}/getbyId?id=${incomeId}`
        );
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "report") {
        const res = await fetchFunc(
          `${urls.NEWS}/report/getbyId?id=${incomeId}`
        );
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "video") {
        const res = await fetchFunc(
          `${urls.NEWS}/video/getbyId?id=${incomeId}`
        );
        fetchedData = await res.json();
        setData(fetchedData);
      } else if (menus === "resources") {
        const res = await fetchFunc(
          `${urls.NEWS}/resources/getbyId?id=${incomeId}`
        );
        fetchedData = await res.json();
        setData(fetchedData);
      }
      console.log(fetchedData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    fetchData();
    if (id) {
      setEdit(true);
    } else {
      setEdit(false);
    }
  }, []);
  return (
    <div>
      <div
        className={`${
          menus === "Бидний тухай" ? "flex" : "hidden"
        } flex-col justify-center items-center gap-[40px] `}
      >
        <h1 className="text-[28px]"> Танилцуулга мэдээлэл оруулах</h1>
        <AboutUs edit={edit} aboutData={aboutData} />
      </div>
      <div
        className={`${
          menus === "Ажилчид" ? "flex" : "hidden"
        } flex-col justify-center items-center gap-[40px]`}
      >
        <h1 className="text-[28px]"> Ажилчдийн мэдээлэл оруулах</h1>
        <EmployeeFrom edit={edit} data={data} />
      </div>
      <div
        className={`${
          menus === "Event" ? "flex" : "hidden"
        } flex-col justify-center items-center gap-[40px]`}
      >
        <h1 className="text-[28px]"> Арга хэмжээний талаар мэдээлэл оруулах</h1>
        <EventForm data={data} edit={edit} />
      </div>
      <div
        className={`${
          menus === "Бэлэг дурсгал" ? "flex" : "hidden"
        } flex-col justify-center items-center gap-[40px]`}
      >
        <h1 className="text-[28px]">
          {" "}
          Бэлэг дурсгалийн талаар мэдээлэл оруулах
        </h1>
        <KeepSakeForm data={data} edit={edit} />
      </div>
      <div
        className={`${
          menus === "Хууль , Эрх зүй" ? "flex" : "hidden"
        } flex-col justify-center items-center gap-[40px]`}
      >
        <h1 className="text-[24px]">
          {" "}
          Хууль , Эрх зүйн талаар мэдээлэл оруулах
        </h1>
        <LegalityForm data={data} edit={edit} />
      </div>
      <div
        className={`${
          menus === "Мэдээ" ? "flex" : "hidden"
        } flex-col justify-center items-center gap-[40px]`}
      >
        <h1 className="text-[28px]">Мэдээ мэдээлэл оруулах</h1>
        <NewsFrom data={data} edit={edit} />
      </div>
      <div
        className={`${
          menus === "Аялал" ? "flex" : "hidden"
        } flex-col justify-center items-center gap-[40px]`}
      >
        <h1 className="text-[28px]"> Аялалын талаар мэдээлэл оруулах</h1>
        <TravelForm data={data} edit={edit} />
      </div>
      <div
        className={`${
          menus === "Байгуулга" ? "flex" : "hidden"
        } flex-col justify-center items-center gap-[40px]`}
      >
        <h1 className="text-[28px]">Байгуулгийн талаар мэдээлэл оруулах</h1>
        <InstitutionForm data={data} edit={edit} />
      </div>
      <div
        className={`${
          menus === "Үзэсгэлэнт Газрууд" ? "flex" : "hidden"
        } flex-col justify-center items-center gap-[40px]`}
      >
        <h1 className="text-[28px]">Газаруудын талаар мэдээлэл оруулах</h1>
        <ScenicSpotFrom data={data} edit={edit}></ScenicSpotFrom>{" "}
      </div>
    </div>
  );
};
export default EditPage;
