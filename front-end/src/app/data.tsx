export interface InfoItem {
  id:number
  icon: string;
  m?: string;
  phone?: string;
  report?: string;
}
export const museumIMG = [
  "/museum1.png",
  "/museum2.png",
  "/museum3.png",
  "/museum4.png",
  "/museum5.png",
  "/museum6.png",
];
export const museum = [
  {
    title: "Түүх угсаатны зүй, Байгалийн  музей",
    aboutMuseum:
      "Тус музей анх 1980 онд 240 орчим үзмэртэйгээр байгуулагдсан. Тухайн үедээ ЕБС, цэцэрлэгүүдийн сургалтын төв байдлаар үйл ажиллагаагаа явуулж байсан. 1993 оноос музейн зориулалтад шилжсэн. Одоо байгалийн музей нь 1100 гаруй үзмэртэй, 8 танхимтай үйл ажиллагаагаа явуулж байна. 2008 онд 578 үзмэр засварлаж шинээр нэмсэн. Музейн хосгүй үнэт үзмэрийн нэг Баянговь сумын Бүгийн цавын хоолойгоос олдсон махчин динозаврийн төрөл Тербозавр чулуужсан яст мэлхий юм. Одоогоос 130 сая жилийн өмнө амьдарч байсан.",
    info1:
      "Тус музей хоёр салбартай бөгөөд аймгийн төв дэх музейгээс гадна Галуут сумын Чин сүжигт Номун ханы сүм музей гэсэн салбартай.",
    info2:
      "Түүх, угсаатны зүйн болон Байгалийн түүхийн музейд хосгүй ховор үзвэрүүд олон бий. Тухайлбал, тарбозаврын бүтэн хэлхээ яс, хүрэл морь, бадамлянхуа цэцэг, Ламын гэгээний хийдэд залагдаж байсан Цагаан, Ногоон дарь эх бурхад зэрэг ард иргэдийн бэлэглэсэн, худалдсан түүхэн ач холбогдолтай хосгүй үнэт 10 мянга орчим үзмэртэй билээ.",
    info3:
      "Музей тус бүр найман танхимтай. Түүх угсаатны зүйн музей Нэн эртний танхим, Генералуудын, Угсаатны зүйн, Сав суулгын, Шашин, зан үйлийн, Алдартны танхим, Дүрслэх урлаг, уран сийлбэрийн, Уламжлалт зан үйлийн танхимтай. Харин Байгалийн музей Динозаврын танхим, Шавжны, Ургамлын, Чулуулгын, Мазаалайн, Хангайн амьтны, Говийн амьтны шувуудын танхимтай.",
    img1: "gandan.png",
    img2: "gandan.png",
    img3: "gandan.png",
    img4: "gandan.png",
    img5: "gandan.png",
    img6: "gandan.png",
  },
];
export const mainMenu: string[] = [
  "Нүүр",
  "Бидний тухай ",
  "Мэдээ",
  "Байгууллага",
  "Аялал",
  "Эвент, Арга хэмжээ",
  "Хууль , Эрх зүй",
  "Бэлэг дурсгал",
  "Төсөл ",
  "Гадаад харилцаа",
];

export const organiztionCategory: string[] = [
  "Үйлчилгээ",
  "Амралт, Сувилал",
  "Тур",
  "Музей",
  "Сүм хийд",
  "Холбоод",
  "Клуб",
  "Театр",
];
export const LawCategoty = [
  "Хууль",
  "Дүрэм, Журам",
  "Тогтоол",
  "Захирамж",
  "Зөвшөөрөл",
];

export const travelCategory: string[] = [
  "Орон нутгийн аялал ",
  "Дотоод аялал ",
  "Гадаад  аялал ",
];
export const InfoArr: InfoItem[] = [
  {id:1, icon: "/mail.png", m: "Bayankhongor.tourism@gmail.com" },
  {id:2, icon: "/phone.png", m: "70444436, 86224024" },
  {id:3, icon: "/report.png", m: "Санал , хүсэлт" },
];
export const PictureArr: string[] = [
  "/gandan.png",
  "/bigmountain.png",
  "/sum.png",
  "/uulus.png",
];
export const BayanKhongorInfo = [
  { icon: "/baigal1.png", number: "20", title: "БАЙГАЛИЙН ДУРСГАЛТ ГАЗАР" },
  { icon: "/tuuhen2.png", number: "10", title: "ТҮҮХЭН  ДУРСГАЛТ ГАЗАР" },
  { icon: "/gazar3.png", number: "115,997", title: "ГАЗАР НУТГИЙН ХЭМЖЭЭ" },
  { icon: "/sum4.png", number: "20", title: "СУМЫН ТОО" },
  { icon: "/bag5.png", number: "105", title: "БАГИЙН ТОО" },
  { icon: "/hun6.png", number: "87,993", title: "ХҮН АМЫН ТОО" },
];
export const bplace2 = [
  {
    id: 1,
    icon: "/shargaljuut.png",
    title: "Шаргалжуут",
    count: 0,
    percent: 0,
    category: "hotel",
    phoneNumber: "70007000",
    idk: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
  },
  {
    id: 2,
    icon: "/ihbogduul.png",
    title: "Их Богд уул",
    count: 0,
    percent: 0,
    category: "hotel",
    phoneNumber: "70007000",
    idk: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
  },
  {
    id: 3,
    icon: "/agui.png",
    title: "Цагаан агуй, Бичигт хад",
    count: 0,
    percent: 0,
    category: "restaurant",
    phoneNumber: "70007000",
    idk: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
  },
  {
    id: 4,
    icon: "/ehiingol.png",
    title: "Эхийн гол, Сэгс цагаан богд",
    count: 0,
    percent: 0,
    category: "restaurant",
    phoneNumber: "70007000 , 70007000 ",
    idk: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
  },
  {
    id: 5,
    icon: "/hohnuur.png",
    title: "Хөх нуур",
    count: 0,
    percent: 0,
    category: "restaurant",
    phoneNumber: "70007000",
    idk: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
  },
  {
    id: 6,
    icon: "/boonnuur.png",
    title: "Бөөн цагаан нуур",
    count: 0,
    percent: 0,
    category: "restaurant",
    phoneNumber: "70007000",
    idk: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
  },
];
export const videoArr = [
  {
    url: "https://www.youtube.com/watch?v=vg2wVT1cv9E&t=122s",
    date: "2024.08.10",
    title: "Монгол Туургатны Харвуул Их Наадам",
  },
  {
    url: "https://www.youtube.com/watch?v=_wZqhVDAqtA",
    date: "2024.08.10",
    title: "Монгол Туургатны Харвуул Их Наадам",
  },
  {
    url: "https://www.youtube.com/watch?v=Y_Lf_cLz1cE",
    date: "2024.08.10",
    title: "Монгол Туургатны Харвуул Их Наадам",
  },
  {
    url: "https://www.youtube.com/watch?v=an3S7tr5Qxw",
    date: "2024.08.10",
    title: "Монгол Туургатны Харвуул Их Наадам",
  },
];
