"use client";
import { fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";

export default function News() {
  const data = fetchFunc(urls.NEWS);
  console.log(data);

  return <div></div>;
}
