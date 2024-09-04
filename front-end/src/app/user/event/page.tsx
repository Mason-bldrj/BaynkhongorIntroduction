"use client";
import { fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";

export default function Event() {
  const data = fetchFunc(urls.EVENT);
  console.log(data);

  return <div></div>;
}
