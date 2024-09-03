"use client";
import { fetchFunc } from "@/app/backdata";
import urls from "@/lib/urls";

export default function Gift() {
  const data = fetchFunc(urls.KEEPSAKE);
  console.log(data);

  return <div></div>;
}
