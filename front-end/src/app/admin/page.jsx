"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Flip, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditModal from "@/app/components/modals/EditModal";
import AdminModal from "@/app/components/modals/AdminModal";
import urls from "@/lib/urls";
const Admin = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [check, setCheck] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState("");
  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (!admin) {
      toast.info(
        "Уучлаарай энэ хуудсанд зөвхөн админ эрхтэй хүмүүс л хандах эрхтэй!",
        {
          transition: Flip,
          onClose: () => router.push("/"),
        }
      );
      return;
    }

    const fetchData = async () => {
      const data = await axios.get(`${urls.MAIN_URL}${urls.ADMIN}`);
      setUsers(data.data.reverse());
    };
    fetchData();
  }, [router.asPath, show, check]);
  const deleteUser = async (id) => {
    await axios.delete(
      `https://govi-altai-backend.vercel.app/deleteadmin/${id}`
    );
    setCheck(!check);
  };

  return (
    <div className="flex flex-1 h-full pt-12 bg-[#e5e5e5]">
      <div className="w-full bg-white rounded-lg">
        <div className="h-[87px] bg-main/60 flex items-center px-5 justify-end rounded-t-lg">
          <div
            onClick={() => setShow(!show)}
            className="flex items-center gap-6 px-10 py-2 text-gray-600 transition-all duration-300 bg-white cursor-pointer rounded-2xl hover:bg-main hover:text-white "
          >
            <FaPlus />
            <p>Админ нэмэх</p>
          </div>
          {show && <AdminModal setShow={setShow} show={show} />}
        </div>
        <ToastContainer position="top-center" autoClose={2000} />
        <div className="flex-1 p-6">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="table">
              <thead>
                <tr className="*:text-lg *:font-medium *:text-main *:text-center">
                  <th>Овог нэр</th>
                  <th>Хэрэглэгчийн нэр</th>
                  <th>Төлөв</th>
                  <th>Админ болсон</th>
                </tr>
              </thead>
              <tbody className="">
                {users?.map((news) => (
                  <tr key={news._id}>
                    <td className="text-center text-main">
                      <p>{news.Name}</p>
                    </td>
                    <td className="text-center">
                      <p className="">{news.Email}</p>
                    </td>
                    <td className="font-medium text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div
                          className={`size-3 rounded-full  ${
                            news.Admin ? "bg-green-500" : "bg-yellow-400"
                          }`}
                        ></div>
                        <p className="">{news.Admin ? "Админ" : "Хэрэглэгч"}</p>
                      </div>
                    </td>
                    <td>
                      <p className="text-[#6B6E7F] text-center">
                        {news.createdAt.split("T")[0]}
                      </p>
                    </td>
                    <td className="max-w-32">
                      <div className="flex items-center gap-5 text-main">
                        <div
                          onClick={() => (
                            setClicked(!clicked), setId(news._id)
                          )}
                          className="flex items-center gap-1 transition-opacity duration-300 cursor-pointer hover:opacity-70"
                        >
                          <MdOutlineEdit className="text-xl" />
                          Засах
                        </div>
                        <div
                          className="flex items-center gap-1 transition-opacity duration-300 cursor-pointer hover:opacity-70"
                          onClick={() => deleteUser(news._id)}
                        >
                          <RiDeleteBin6Line className="text-lg" />
                          Устгах
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}

                {clicked && (
                  <EditModal
                    clicked={clicked}
                    setClicked={setClicked}
                    id={id}
                  />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
