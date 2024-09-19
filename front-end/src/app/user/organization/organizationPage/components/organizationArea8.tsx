"use client";
import { HolbooCard } from "./holboo";
import { useState, useEffect } from "react";
export const OrganizationArea8 = ({ data }: any) => {
  const [news, setNews] = useState(Boolean);
  const theater =Array.isArray(data)
  ? data.filter((el: any) => el.institutionType === "THEATER")
  : [];
  useEffect(() => {
    if (theater.length === 0) {
      setNews(false);
    } else {
      setNews(true);
    }
  }, []);
  return (
    <div className="w-full flex flex-col gap-10">
      
      {news ? (
        <HolbooCard data={theater} />
        ) : (
          <div>Байгууллага байхгүй байна.</div>
        )}
    </div>
  );
};
