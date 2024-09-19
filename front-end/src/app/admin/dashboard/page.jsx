"use client";

import AdminMain from "@/app/components/admin/AdminMains";
import AdminSideBar from "@/app/components/admin/AdminSideBar";
import DashboardSec from "@/app/components/admin/Dashboard";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const router = useRouter();
  const [admin, setAdmin] = useState("");
  const [changedRequest, setChangedRequest] = useState("CREATE");
  const [menus, setMenu] = useState("Бидний тухай");
  const e = async () => {
    const inadmin = await localStorage.getItem("admin");

    setTimeout(() => {
      if (!inadmin) {
        return router.push("/");
      }
    }, 1000);
  };
  useEffect(() => {
    e();
  }, [admin]);
  return (
    <div className="flex ">
      <AdminSideBar
        setMenu={setMenu}
        changedRequest={changedRequest}
        setChangedRequest={setChangedRequest}
      />
      <div
        className={` p-[50px] w-[70%]  justify-center ${
          changedRequest === "CREATE" ? "flex" : "hidden"
        } `}
      >
        <AdminMain menus={menus}></AdminMain>
      </div>
      <div
        className={` p-[50px] w-full    ${
          changedRequest === "CREATE" ? "hidden" : "flex"
        } `}
      >
        <DashboardSec menus={menus}></DashboardSec>
      </div>
    </div>
  );
};
export default AdminDashboard;
