"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const EditModal = (props: any) => {
  const { setClicked, clicked, id } = props;
  const [old, setOld] = useState("");
  const [newPass, setNewPass] = useState("");
  const [result, setResult] = useState("");
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // This will run only on the client-side
    setIsBrowser(true);
  }, []);

  const change = async () => {
    try {
      const res = await axios.put(
        "https://govi-altai-backend.vercel.app/changepassword",
        {
          Password: old,
          Newpassword: newPass,
          id: id,
        }
      );
      setResult(res.data);
    } catch (error) {
      setResult("Алдаа гарлаа");
    }
  };

  const handler = () => {
    setClicked(!clicked);
    if (isBrowser) {
      document.body.style.overflow = clicked ? "visible" : "hidden";
    }
  };

  useEffect(() => {
    if (result === "Амжилттай") {
      setTimeout(() => {
        setClicked(false);
        setResult("");
      }, 2000);
    } else if (result) {
      setTimeout(() => {
        setResult("");
      }, 2000);
    }
  }, [result]);

  if (!isBrowser) return null; // Ensure component is only rendered in the browser

  return (
    <div className="fixed inset-0 top-0 z-10 flex items-center justify-center w-full h-full p-20 text-slate-900">
      <div
        className="fixed inset-0 top-0 w-full h-full p-20 bg-black/50 backdrop-blur-sm"
        onClick={handler}
      ></div>
      <div
        className="absolute max-w-[300px] h-fit w-[95%] bg-white px-6 py-8 flex justify-center items-start gap-10 flex-col rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <label className="w-full">
          Хуучин нууц үг:
          <input
            type="password"
            className="block w-full mt-2 border-b outline-none border-slate-400 bg-transparent"
            onChange={(e) => setOld(e.target.value)}
          />
        </label>
        <label className="w-full">
          Шинэ нууц үг:
          <input
            type="password"
            className="block w-full mt-2 border-b outline-none border-slate-400 bg-transparent"
            onChange={(e) => setNewPass(e.target.value)}
          />
        </label>
        <div
          className={`mx-auto ${
            result === "Амжилттай" ? "text-green-500" : "text-red-500"
          }`}
        >
          {result}
        </div>
        <button
          onClick={change}
          className={`btn bg-main border-none w-full text-white text-base font-medium hover:bg-main/70 transition-colors duration-300 ${
            newPass && old ? "btn-active" : "btn-disabled"
          }`}
        >
          Нууц үг солих
        </button>
      </div>
    </div>
  );
};

export default EditModal;
