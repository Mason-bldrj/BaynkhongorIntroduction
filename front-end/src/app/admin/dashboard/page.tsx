"use client";

import AdminMain from "@/components/admin/AdminMains";
import AdminSideBar from "@/components/admin/AdminSideBar";
import DashboardSec from "@/components/admin/Dashboard";
import { useState } from "react";

const AdminDashboard = () => {
  const [changedRequest, setChangedRequest] = useState();
  const [menus, setMenu] = useState("Бидний тухай");
  return (
    <div className="flex">
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
        className={` p-[50px] w-[70%]  justify-center ${
          changedRequest === "CREATE" ? "hidden" : "flex"
        } `}
      >
        <DashboardSec menus={menus}></DashboardSec>
      </div>
    </div>
  );
};
export default AdminDashboard;
