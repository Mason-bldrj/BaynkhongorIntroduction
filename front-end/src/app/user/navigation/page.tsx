import Image from "next/image";
export default function navigation() {
  return (
    <div className="max-w-[1147px] max-h-[600px] h-[100%] m-auto w-[95%] mt-10 flex flex-col gap-10 mb-10">
      <div className="flex w-full justify-between border-b border-b-black pb-5 flex-wrap sm:flex-nowrap gap-5 sm:gap-0">
        {" "}
        <Image
          className="w-full sm:w-[49%] h-[300px] lg:h-[400px] rounded-sm"
          src="/dragon.jpg"
          width={20033}
          height={10033}
          alt="Carousel image"
        />
        <iframe
          className="w-full sm:w-[49%] h-[300px] lg:h-[400px] rounded-sm"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10697.257140331989!2d106.8196607!3d47.910956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96ecda9fb177c7%3A0xc67a51068bb64317!2sDragon%20Bus%20Terminal!5e0!3m2!1smn!2smn!4v1726206840591!5m2!1smn!2smn"
          width="600"
          height="450"
        ></iframe>
      </div>
      <div className="text-2xl font-bold border-b border-b-black pb-1">Авто тээврийн үйлчилгээ</div>
      <div className="w-full text-sm sm:text-md leading-[30px] sm:leading-[50px]">
        -УЛААНБААТАР хотын Драгон центрээс өдөр бүрийн - 08:00 цаг - 14:00 цаг -
        18:00 цагуудаас том оворын автобус Баянхонгор аймагруу явдаг. {<br/>}-БАЯНХОНГОР
        хотын Тээврийн биржээс өдөр бүрийн - 08:00 цаг - 14:00 цаг - 18:00
        цагуудаас том оворын автобус Улаанбаатар хотруу явдаг.{<br/>}-Баянхонгор хотын
        Тээврийн биржээс өдөр бүр аймгийн бүх сумд руу жижиг оврын автобус болон
        суудлын машин явдаг.
      </div>
    </div>
  );
}
