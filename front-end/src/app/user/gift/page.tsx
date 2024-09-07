"use client";
import { fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { BannerArea } from "@/app/components/homapage/bannerArea";
import { BrandCard } from "@/app/components/detail/brandCard";
import { OrangeBourd } from "@/app/components/detail/orengeBourd";
export default function Gift() {
  const data = fetchFunc(urls.KEEPSAKE);
  console.log(data);

  return (
    <div className="w-full sm:w-[90%] xl:w-[1148px]  flex flex-col items-center justify-between gap-5 sm:mt-0 mt-5 md:gap-10 ">
      <BannerArea />
      <div className="w-full flex justify-start">
          {" "}
          <OrangeBourd data={"БРЭНД БҮТЭЭГДЭХҮҮН"} />
        </div>
      <BrandCard />
    </div>
  );
}
