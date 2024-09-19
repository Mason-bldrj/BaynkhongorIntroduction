"use client";
import { HolbooCard } from "./holboo";
import { useState, useEffect } from "react";
export const OrganizationArea6 = ({data}:any)  => {
  const [news, setNews] = useState(Boolean);
  const union=Array.isArray(data)
  ? data.filter((el: any) => el.institutionType === "UNION")
  : [];
  useEffect(() => {
    if (union.length === 0) {
      setNews(false);
    } else {
      setNews(true);
    }
  }, []);
  return (
    <div className="w-full flex flex-col gap-10">
    
      {news ? (
          <HolbooCard data={union}/>
        ) : (
          <div>Байгууллага байхгүй байна.</div>
        )}
    </div>
  );
};
