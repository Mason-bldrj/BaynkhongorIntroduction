export interface InfoItem {
  icon: string;
  m?: string;
  phone?: string;
  report?: string;
}
// export interface BPlaceItem {
//   icon?: string;
//   title?: string;
//   count?: number;
//   percent?: number;
//   idk?: string;
// }
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

export const InfoArr: InfoItem[] = [
  { icon: "/mail.png", m: "Bayankhongor.tourism@gmail.com" },
  { icon: "/phone.png", m: "70444436, 86224024" },
  { icon: "/report.png", m: "Санал , хүсэлт" },
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
export const bplace = [
  {
    id: "1",
    icon: "/shargaljuut.png",
    title: "Шаргалжуут",
    count: 0,
    percent: 0,
    idk: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
  },
  {
    id: "2",
    icon: "/ihbogduul.png",
    title: "Их Богд уул",
    count: 0,
    percent: 0,
    idk: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
  },
  {
    id: "3",
    icon: "/agui.png",
    title: "Цагаан агуй, Бичигт хад",
    count: 0,
    percent: 0,
    idk: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
  },
  {
    id: "4",
    icon: "/ehiingol.png",
    title: "Эхийн гол, Сэгс цагаан богд",
    count: 0,
    percent: 0,
    idk: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
  },
  {
    id: "5",
    icon: "/hohnuur.png",
    title: "Хөх нуур",
    count: 0,
    percent: 0,
    idk: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
  },
  {
    id: "6",
    icon: "/boonnuur.png",
    title: "Бөөн цагаан нуур",
    count: 0,
    percent: 0,
    idk: "There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep...",
  },
];
export const videoArr = [
  "https://www.youtube.com/watch?v=vg2wVT1cv9E&t=122s",
  "https://www.youtube.com/watch?v=_wZqhVDAqtA",
  "https://www.youtube.com/watch?v=Y_Lf_cLz1cE",
  "https://www.youtube.com/watch?v=an3S7tr5Qxw",
];
