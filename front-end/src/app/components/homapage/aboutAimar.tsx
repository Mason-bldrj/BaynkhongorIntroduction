"use client";
import Image from "next/image";
import { OrangeBourd } from "../detail/orengeBourd";
export const AboutAimag = () => {
  return (
    <div className="w-full h-[300px] sm:h-[755px]  flex justify-center mt-5 sm:mt-10">
      <div className="flex flex-col w-full justify-center  items-center gap-5">
        {" "}
        <div className="xl:ml-[500px] ">
          <OrangeBourd data={"БАЯНХОНГОР АЙМГИЙН ТУХАЙ"} />
        </div>
        <div className="w-full h-[635px] relative sm:mt-5">
          <Image
            className="object-cover w-full h-full absolute top-0 left-0"
            src="/baynkhongor.png"
            width={1448}
            height={635}
            alt="Carousel image"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70 flex justify-center items-center "></div>
          <div className="w-[95%] max-w-[1147px] flex gap-5 items-center h-full absolute right-0 left-0 mx-auto">
            <div className="text-white font-serif w-full md:w-[50%] sm:px-0 px-3 sm:text-[14px] md:text-[15px] lg:text-[18px] xl:text-xl text-[10px] lg:w-[564px] h-[150px] sm:h-[275px] sm:mb-[100px]">
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
            <iframe
              className="w-[50%] h-[375px] sm:block hidden"
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
  );
};
