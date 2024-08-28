import Image from "next/image";
export const AboutAimag = () => {
  return (
    <div className="w-[100%] h-[755px] flex justify-center mt-20">
      <div className="flex flex-col w-full justify-center  items-center gap-5">
        {" "}
        <div className="text-white bg-[#ff7119] px-4  text-xl text-center p-1 rounded-sm ml-[500px]">
          БАЯНХОНГОР АЙМГИЙН ТУХАЙ
        </div>
        <div className="w-[98.9vw] h-[635px] relative">
          <Image
            className="object-cover w-full h-full absolute top-0 left-0"
            src="/baynkhongor.png"
            width={1448}
            height={635}
            alt="Carousel image"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-70 flex items-center">
            <p className="text-white w-[564px] h-[275px] ml-[130px]">
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
