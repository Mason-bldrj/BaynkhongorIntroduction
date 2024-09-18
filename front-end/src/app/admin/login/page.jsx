"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RiUserLine, RiLock2Line } from "react-icons/ri";
import { HiMiniEye, HiEyeSlash } from "react-icons/hi2";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import urls from "@/lib/urls";

const Login = () => {
  const API_URL = process.env.API_URL;
  const router = useRouter();

  const [email, setEmail] = useState(
    typeof window !== "undefined"
      ? window.localStorage.getItem("remember")
        ? JSON.parse(localStorage.getItem("remember")).email
        : ""
      : ""
  );
  const [password, setPassword] = useState(
    typeof window !== "undefined"
      ? window.localStorage.getItem("remember")
        ? JSON.parse(window.localStorage.getItem("remember")).password
        : ""
      : ""
  );
  const [remember, setRemember] = useState(
    typeof window !== "undefined"
      ? window.localStorage.getItem("remember")
        ? JSON.parse(window.localStorage.getItem("remember")).remember
        : false
      : ""
  );
  const e = async () => {
    const inadmin = await localStorage.getItem("admin");

    setTimeout(() => {
      if (inadmin === "isAdmin") {
        return router.push("/admin/dashboard");
      }
    }, 1000);
  };
  const [hide, sethide] = useState(true);
  const inadmin =
    typeof window !== "undefined" ? localStorage.getItem("admin") : null;

  const adminLogin = async () => {
    const result = await axios.post(`${API_URL}${urls.ADMIN_VERIFY}`, {
      adminEmail: email,
      adminPassword: password,
    });

    if (email === "" || password === "") {
      toast.info("Бүх талбарыг бөглөнө үү!", {
        transition: Flip,
      });
    } else {
      if (result?.data == "Хэрэглэгч олдоогүй") {
        toast.info("Хэрэглэгч олдсонгүй.", {
          transition: Flip,
        });
      } else if (result?.data == "Incorrect Password") {
        toast.error("Нууц үг буруу байна", {
          transition: Flip,
        });
      } else {
        window.localStorage.setItem("admin", "isAdmin");
        toast.success("Амжилттай.", {
          transition: Flip,
        });
        router.push("/admin/dashboard");
      }
    }
  };

  useEffect(() => {
    e();
    if (remember == true) {
      window.localStorage.setItem(
        "remember",
        JSON.stringify({
          email,
          password,
          remember: remember,
        })
      );
    } else {
      window.localStorage.setItem(
        "remember",
        JSON.stringify({
          email: "",
          password: "",
          remember: remember,
        })
      );
    }
  }, [remember]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      adminLogin();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-5 sm:bg-gradient-to-b from-white to-main">
      <ToastContainer position="bottom-center" autoClose={2000} />
      <div className="w-[774px] bg-white/80 sm:px-10 md:px-28 py-14 rounded-xl ">
        <h1 className="mb-10 text-lg font-medium text-center sm:text-xl md:text-3xl text-main">
          Админ Нэвтрэх
        </h1>
        <form
          className="*:mb-4"
          onKeyPress={handleKeyPress}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="pb-2 bg-slate-300">
            <div className="flex items-center gap-2 p-2 border-b border-main">
              <RiUserLine className="text-2xl text-main" />
              <div className="flex-1 text-xs">
                <label>Нэвтрэх имэйл</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-base bg-transparent outline-none"
                />
              </div>
            </div>
          </div>

          <div className="pb-2 bg-slate-300">
            <div className="flex items-center gap-2 p-2 border-b border-main ">
              <RiLock2Line className="text-2xl text-main" />
              <div className="flex-1 text-xs">
                <label>Нууц үг</label>
                <input
                  type={hide ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-base bg-transparent outline-none"
                />
              </div>
              {hide ? (
                <HiEyeSlash
                  onClick={() => sethide(false)}
                  className="text-xl text-main"
                />
              ) : (
                <HiMiniEye
                  className="text-xl text-main"
                  onClick={() => sethide(true)}
                />
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 text-main">
            <input
              onChange={(e) => setRemember(!remember)}
              type="checkbox"
              value="synthwave"
              className="block ml-auto toggle theme-controller bg-main border-main"
            />
            Сануулах
          </div>

          <button
            onClick={adminLogin}
            className="w-full text-xl font-medium bg-[#ff7119] rounded-[8px] border-none btn bg-main hover:bg-main/70 md:text-2xl"
          >
            Нэвтрэх
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
