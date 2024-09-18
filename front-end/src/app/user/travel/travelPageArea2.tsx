import { TravelPageCard } from "./travelPageCard";
import { useState, useEffect } from "react";
export const TravelPageArea2 = ({ data }: any) => {
  const [news, setNews] = useState(Boolean);
  data = data?.filter((el: any, i: number) => {
    return el.travelType === "INTERNAL_TRAVEL";
  });
  useEffect(() => {
    if (data.length === 0) {
      setNews(false);
    } else {
      setNews(true)
    }
 
  }, []);
  return (
    <div className="w-full flex justify-center">
      {news ? (
        <TravelPageCard data={data} />
      ) : (
        <div>Аялал байхгүй байна.</div>
      )}
    </div>
  );
};
