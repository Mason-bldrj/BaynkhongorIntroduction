"use client";
import { fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";
import { useEffect, useState } from "react";

export default function Travel() {
  const [data, setdata] = useState();
  const fetchedData = async () => {
    const res = fetchFunc(urls.TRAVEL);
    const data = await (await res).json();
    setdata(data[0]);
  };
  useEffect(() => {
    fetchedData();
  }, []);
  console.log(data);

  return <div></div>;
}
