"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminModal = (props) => {
  const { setShow, show } = props;
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, setUser] = useState("");
  const [state, setState] = useState("");
  const [admin, setAdmin] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // This runs only in the browser
    setIsBrowser(true);
  }, []);

  const handleClick = async () => {
    try {
      const res = await axios.post(
        "https://govi-altai-backend.vercel.app/adduser",
        {
          Name: `${lastName}``${name}`,
          Admin: admin,
          sum: "govialtai",
        }
      );
      setUser(res.data);
      setState("next");
    } catch (error) {
      console.error("Error adding user:", error);
      // Handle error as needed
    }
  };

  const handler = () => {
    setShow(!show);
    if (isBrowser) {
      document.body.style.overflow = show ? "visible" : "hidden";
    }
  };

  if (!isBrowser) return null; // Ensure component is only rendered in the browser

  return (
    <div className="fixed inset-0 top-0 z-10 flex items-center justify-center w-full h-full p-20">
      <div
        className="fixed inset-0 top-0 w-full h-full p-20 bg-black/50 backdrop-blur-sm"
        onClick={handler}
      ></div>
      <div className="absolute max-w-[400px] h-fit w-[95%] bg-white px-6 py-8 flex justify-center items-start gap-10 flex-col rounded-xl">
        {state ? (
          <div className="flex flex-col gap-5">
            <h4 className="mb-3 font-medium text-center uppercase text-main">
              Нэвтрэх нэр, нууц үгээ хадгалж авна уу!
            </h4>
            <p>Нэвтрэх нэр: {user.Email}</p>
            <p>Нууц үг: {user.Password}</p>
            <button
              onClick={() => setShow(false)}
              className="self-end text-base font-medium text-white border-none btn bg-main hover:bg-main/70"
            >
              Хаах
            </button>
          </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="Овог"
              className="w-full h-12 px-4 py-2 bg-transparent border border-gray-500 outline-none rounded-xl"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Нэр"
              className="w-full h-12 px-4 py-2 bg-transparent border border-gray-500 outline-none rounded-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={admin}
                onChange={() => setAdmin(!admin)}
                className="bg-white"
              />
              Админ
            </div>

            <button
              className={`btn bg-main text-white font-medium text-base self-end hover:bg-main/70 border-none ${
                name ? "btn-active" : "btn-disabled"
              }`}
              onClick={handleClick}
            >
              Үргэлжлүүлэх
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminModal;
