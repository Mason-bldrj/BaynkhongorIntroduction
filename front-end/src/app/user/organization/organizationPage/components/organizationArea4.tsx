"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MuseumCard } from "../museamCard";
import { museumIMG } from "@/app/data";
export const OrganizationArea4 = ({ data }: any) => {
  const museum =Array.isArray(data)
  ? data.filter((el: any) => el.institutionType === "MUSEUM")
  : [];
  
  return (
    <div className="w-full flex flex-col gap-5 justify-between items-center">
      <div className="w-full flex justify-end">
        <div className="text-[#ff7119] text-[15px]  lg:text-[20px] xl:text-[25px] w-[50%] text-start">
          Түүх угсаатны зүй, Байгалийн музей
        </div>
      </div>
      <div className="flex flex-col w-full justify-between gap-5">
        <div className="text-[14px]">
          Тус музей анх 1980 онд 240 орчим үзмэртэйгээр байгуулагдсан. Тухайн
          үедээ ЕБС, цэцэрлэгүүдийн сургалтын төв байдлаар үйл ажиллагаагаа
          явуулж байсан. 1993 оноос музейн зориулалтад шилжсэн. Одоо байгалийн
          музей нь 1100 гаруй үзмэртэй, 8 танхимтай үйл ажиллагаагаа явуулж
          байна. 2008 онд 578 үзмэр засварлаж шинээр нэмсэн. Музейн хосгүй үнэт
          үзмэрийн нэг Баянговь сумын Бүгийн цавын хоолойгоос олдсон махчин
          динозаврийн төрөл Тербозавр чулуужсан яст мэлхий юм. Одоогоос 130 сая
          жилийн өмнө амьдарч байсан.
        </div>
        <div className="text-[14px]">
          Тус музей хоёр салбартай бөгөөд аймгийн төв дэх музейгээс гадна Галуут
          сумын Чин сүжигт Номун ханы сүм музей гэсэн салбартай.
        </div>
        <div className="flex w-full md:justify-between flex-wrap justify-center">
          <Image
            className="object-cover w-[90%] md:w-[49%] h-[312px] rounded-md md:mb-0 mb-5"
            src="/museumicon.png"
            width={9704}
            height={5004}
            alt="Carousel image"
          />{" "}
          <Image
            className="object-cover w-[90%] md:w-[49%] h-[312px] rounded-md md:mb-0 mb-5"
            src="/museumicon2.png"
            width={9704}
            height={5004}
            alt="Carousel image"
          />
        </div>
        <div className="text-[14px]">
          Түүх, угсаатны зүйн болон Байгалийн түүхийн музейд хосгүй ховор
          үзвэрүүд олон бий. Тухайлбал, тарбозаврын бүтэн хэлхээ яс, хүрэл морь,
          бадамлянхуа цэцэг, Ламын гэгээний хийдэд залагдаж байсан Цагаан,
          Ногоон дарь эх бурхад зэрэг ард иргэдийн бэлэглэсэн, худалдсан түүхэн
          ач холбогдолтай хосгүй үнэт 10 мянга орчим үзмэртэй билээ.
        </div>
        <div className="text-[14px]">
          Музей тус бүр найман танхимтай. Түүх угсаатны зүйн музей Нэн эртний
          танхим, Генералуудын, Угсаатны зүйн, Сав суулгын, Шашин, зан үйлийн,
          Алдартны танхим, Дүрслэх урлаг, уран сийлбэрийн, Уламжлалт зан үйлийн
          танхимтай. Харин Байгалийн музей Динозаврын танхим, Шавжны, Ургамлын,
          Чулуулгын, Мазаалайн, Хангайн амьтны, Говийн амьтны шувуудын
          танхимтай.
        </div>
        <div>
          <div className="mt-5 mb-5">Түүх угсаатны зүй, Байгалийн түүхийн музей</div>
          <div className=" w-full overflow-x-scroll">
            <div className="w-[1147px] flex justify-between ">
              {" "}
              {museumIMG.map((el) => {
                return (
                  <Image
                    className="w-[173px] h-[143px] rounded-md"
                    src={el}
                    width={500}
                    height={500}
                    alt="Carousel image"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <MuseumCard data={museum} />
    </div>
  );
};
