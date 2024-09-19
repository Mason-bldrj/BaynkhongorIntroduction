"use client";
import { HolbooCard } from "./holboo";
import { useState, useEffect } from "react";
export const OrganizationArea7 = ({data}:any)  => {
  const [news, setNews] = useState(Boolean);
  const club= Array.isArray(data)
  ? data.filter((el: any) => el.institutionType === "CLUB")
  : [];
  useEffect(() => {
    if (club.length === 0) {
      setNews(false);
    } else {
      setNews(true);
    }
  }, []);
  return (
    <div className="w-full flex flex-col gap-10">
      
      {news ? (
        <HolbooCard data={club}/>
        ) : (
          <div>Байгууллага байхгүй байна.</div>
        )}
    </div>
  );
};
