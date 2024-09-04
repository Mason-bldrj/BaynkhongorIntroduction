"use client";
import { fetchFunc } from "@/app/backdata";
import { Title } from "./components/title";
import Image from "next/image";
import urls from "@/lib/urls";
import { useEffect, useState } from "react";
const api_Url = process.env.NEXT_PUBLIC_API_URL;
console.log(api_Url);
export default function AboutUs() {
  const [data, setdata] = useState();
  const fetchedData = async () => {
    const res = fetchFunc(urls.ABOUTUS);
    const data = await (await res).json();
    setdata(data[0]);
  };

  console.log(data);
  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <div className=" w-[1137px] flex flex-col items-center mt-10">
      <div className="w-[987px] flex flex-col items-start justify-between h-[200px]">
        <div className="w-[987px] text-center text-sm font-sans text-[14px] tracking-wide leading-[28px]">
          Юуны өмнө манай энэхүү сайтанд зочилсон эрхэм танд баярласан
          талархсанаа илэрхийлэхэд таатай байна. Баянхонгор аймаг нь хангай,
          говь, тал хээр хосолсон өргөн уудам газар нутагтаа аялал жуулчлалын
          олон төрлийн бүтээгдэхүүн нөөц газруудыг хадгалан оршиж байгаа хосгүй
          баялагтай нутаг билээ. Иймдээ ч бид аялал жуулчлалын салбарыг
          аймгийнхаа нийгэм, эдийг засгийг хөгжүүлэх тэргүүлэх салбар болгон
          зорилт тавьж ажиллаж байгаа төдийгүй,
        </div>
        <Title title={"Баянхонгор аймгийн аялал"} />
      </div>
      <div className="w-full flex flex-col items-start justify-between">
        <div className="w-[987px] mt-7 leading-[28px] font-sans text-[14px]">
          “Аймгийн гадаад харилцаа, аялал жуулчлалын бодлогыг боловсруулан
          шийдвэрлүүлж, хэрэгжилтийг зохион байгуулах чиг үүрэг бүхий Гадаад
          харилцаа, аялал жуулчлалын албыг, аймгийн Засаг даргын дэргэдэх
          агентлагийн статустайгаар байгуулсугай” гэсэн аймгийн ИТХ-ын
          тэргүүлэгчдийн 2017 оны 01-р сарын 03-ны өдрийн 03 дугаар тогтоолыг
          тус тус үндэслэн аймгийн Засаг даргын 2017 оны 02 дугаар сарын 01-ны
          өдрийн А/104 тоот захирамжаар “Аймгийн Засаг даргын дэргэдэх гадаад
          харилцаа, аялал жуулчлалын албаны бүтэц, орон тоо, дүрэм”-ийг
          баталснаар Гадаад харилцаа, аялал жуулчлалын алба үйл ажиллагаагаа
          хэрэгжүүлж эхэлсэн.
        </div>
        <div className="w-full flex h-[373px]">
          <div w-full h-full>
            {" "}
            <Image
              className="object-cover w-full h-full rounded-sm min-w-[525px] min-h-[373px]"
              src="/bureldhuun.png"
              width={525}
              height={373}
              alt="Carousel image"
            />
          </div>
          <div>
            <div className=" w-[580px]">
              <div>Зорилго:</div>
              <div className="w-[580px]">
                Говийн үзэсгэлэнт байгаль, түүх соёлын дурсгалт газар, байгалийн
                гурван бүс нутгийн онцлог, нүүдлийн уламжлалт соёлыг түшиглэсэн
                аялал жуулчлалыг хөгжүүлэх зорилготой{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
