import { fetchFunc } from "@/lib/backdata";
import urls from "@/lib/urls";
import { Router } from "next/router";
import { useEffect, useState } from "react";

const DashboardSec = (props: any) => {
  const { menus } = props;
  const [url, setUrl] = useState("");
  const [data, setData] = useState<any>();
  const fetchData = () => {
    if (menus === "Бидний тухай") {
      const fetchedData = async () => {
        const res = fetchFunc(urls.ABOUTUS);
        const data = await (await res).json();
        setData(data[0]);
      };
      fetchedData();
      console.log(data);
    } else if (menus === "Байгуулга") {
      const fetchedData = async () => {
        const res = fetchFunc(urls.institution);
        const data = await (await res).json();
        setData(data);
      };
      fetchedData();
      console.log(data);
    } else if (menus === "Аялал") {
      const fetchedData = async () => {
        const res = fetchFunc(urls.TRAVEL);
        const data = await (await res).json();
        setData(data);
      };
      fetchedData();
      console.log(data);
    } else if (menus === "Event") {
      const fetchedData = async () => {
        const res = fetchFunc(urls.EVENT);
        const data = await (await res).json();
        setData(data);
      };
      fetchedData();
      console.log(data);
    } else if (menus === "Бэлэг дурсгал") {
      const fetchedData = async () => {
        const res = fetchFunc(urls.KEEPSAKE);
        const data = await (await res).json();
        setData(data);
      };
      fetchedData();
      console.log(data);
    } else if (menus === "Төслүүд") {
      // const data = fetchFunc(urls.);
    } else if (menus === "Хууль , Эрх зүй") {
      const fetchedData = async () => {
        const res = fetchFunc(urls.LEGALITY);
        const data = await (await res).json();
        setData(data);
      };
      fetchedData();
      console.log(data);
    } else if (menus === "Ажилчид") {
      const fetchedData = async () => {
        const res = fetchFunc(urls.EMPLOYEE);
        const data = await (await res).json();
        setData(data);
      };
      fetchedData();
      console.log(data);
    } else if (menus === "report") {
      const fetchedData = async () => {
        const res = fetchFunc(`${urls.NEWS}/report`);
        const data = await (await res).json();
        setData(data);
      };
      fetchedData();
      console.log(data);
    } else if (menus === "video") {
      const fetchedData = async () => {
        const res = fetchFunc(`${urls.NEWS}/video`);
        const data = await (await res).json();
        setData(data);
      };
      fetchedData();
      console.log(data);
    } else if (menus === "resources") {
      const fetchedData = async () => {
        const res = fetchFunc(`${urls.NEWS}/resources`);
        const data = await (await res).json();
        setData(data);
      };
      fetchedData();
      console.log(data);
    }
  };
  useEffect(() => {
    fetchData();
  }, [menus]);

  return (
    <div>
      <table className="w-full border-collapse  ">
        <thead className="borde-b border-black-100 ">
          <th className="border-solid border-[1px] p-[4px] border-[#dddddd]">
            Нэр
          </th>
          <th className="border-solid border-[1px] p-[4px] border-[#dddddd]">
            Гарчиг
          </th>

          <th className="border-solid border-[1px] p-[4px] border-[#dddddd]">
            Худалдан авагчаас хүлээн авсан
          </th>
          <th className="border-solid border-[1px] p-[4px] border-[#dddddd]">
            Гэрээт харилцагчид шилжүүлэх дүн{" "}
          </th>
        </thead>
        <tbody>
          {/* {menus !== "Бидний тухай" &&
            data?.map((item: any, index: number) => (
              <tr key={index} className=" ">
                <td className="py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                  <button></button>
                </td>
                <td className=" text-right py-1 whitespace-pre-line border-solid border-[1px] p-[4px] border-[#dddddd]">
                  {item?.name}
                </td>
                <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd] overflow-hidden">
                  {item?.description}₮
                </td>
                <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                  {new Intl.NumberFormat().format(item?.total_price ?? 0)}₮
                </td>
                <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                  {new Intl.NumberFormat().format(
                    item?.take_merchant_price ?? 0
                  )}
                  ₮
                </td>
                <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                  {new Intl.NumberFormat().format(
                    item?.paid_customer_price ?? 0
                  )}
                  ₮
                </td>
                <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                  {new Intl.NumberFormat().format(
                    item?.send_merchant_price ?? 0
                  )}
                  ₮
                </td>
                <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                  {new Intl.NumberFormat().format(item?.amount ?? 0)}₮
                </td>
                <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                  <button>Мэдээлэл өөрчлөх</button>
                </td>
                <td className=" text-right py-1 border-solid border-[1px] p-[4px] border-[#dddddd]">
                  <button>Устгах</button>
                </td>
              </tr>
            ))} */}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};
export default DashboardSec;
