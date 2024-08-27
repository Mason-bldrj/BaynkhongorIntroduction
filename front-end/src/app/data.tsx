export interface InfoItem {
  icon: string;
  m?: string;
  phone?: string;
  report?: string;
}
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
