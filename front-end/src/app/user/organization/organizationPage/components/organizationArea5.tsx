"use client";
import { Monestry } from "./monestry";
import { useState, useEffect } from "react";
export const OrganizationArea5 = ({ data }: any) => {
  const [news, setNews] = useState(Boolean);
  const church = Array.isArray(data)
    ? data.filter((el: any) => el.institutionType === "CHURCH")
    : [];
  useEffect(() => {
    if (church.length === 0) {
      setNews(false);
    } else {
      setNews(true);
    }
  }, []);
  return (
    <div className="w-full flex flex-col gap-10">
      {news ? (
        <Monestry data={church} />
      ) : (
        <div>Байгууллага байхгүй байна.</div>
      )}
    </div>
  );
};
