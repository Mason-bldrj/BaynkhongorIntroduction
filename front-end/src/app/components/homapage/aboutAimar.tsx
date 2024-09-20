"use client";
import Image from "next/image";
import { OrangeBourd } from "../detail/orengeBourd";
export const AboutAimag = () => {
  return (
    <div className="w-full h-[300px] sm:h-[605px]  flex justify-center">
      <div className="flex flex-col w-full justify-center  items-center gap-5">
        {" "}
        <div className="">
          <OrangeBourd data={"БАЯНХОНГОР АЙМГИЙН ТУХАЙ"} />
        </div>
        <div className="w-full h-[505px] relative sm:mt-5">
          <Image
            className="object-cover w-full h-full absolute top-0 left-0"
            src="/baynkhongor.png"
            width={1448}
            height={635}
            alt="Carousel image"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70 flex justify-center items-center "></div>
          <div className="w-[95%] max-w-[1200px]  h-full absolute right-0 left-0 mx-auto flex justify-center items-center sm:grid grid-cols-2 ">
            <div className="sm:w-full text-white font-thin flex items-center text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-xl">
              {" "}
              БНМАУ-ын Бага Хурлын Тэргүүлэгчдийн 115 дугаар тоот тогтоолоор,
              АДХ-ын гүйцэтгэх захиргааны 91 дүгээр тоот тогтоолоор анх 3
              хоринтой нэгж захиргааг байгуулсанаар Баянхонгор хот бие даасан
              нэгж болох үндэс нь тавигджээ. Гэвч Баянхонгор хайрханы өвөр газар
              нь мөнхийн цэвдэгтэй, цаашид аймгийн төв байршуулахад тохиромжгүй
              байсан тул 1961 онд  Баянхонгор аймгийн төвийг нүүлгэн Номгон
              уулын ар, Түйн голын хөвөөнд байгуулсан түүхтэй.Баянхонгор хот нь
              900 гаруй өрх, 3500  хүн амтай байгуулагдаж байсан бол өдгөө
              төвийн 9 , хөдөөгийн 1 багт 9815 өрх  33147 хүн амтай болон
              өргөжиж, өдрөөс өдөрт бүтээн байгуулалт хийгдэн иргэдээ хөгжүүлэх
              үйл ажиллагаа тогтмол явуулсаар байгаа цэцэглэн хөгжиж буй хот юм.
            </div>
            <div className="w-full justify-end h-full items-center flex">
              <iframe
                className="w-[90%] sm:block hidden  h-[400px]"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/quVfR2Cy8Ss?modestbranding=1&showinfo=0&rel=0&fs=0&iv_load_policy=3"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
