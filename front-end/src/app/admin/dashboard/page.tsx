"use client";
import AdminMain from "@/app/components/admin/AdminMains";
import AdminSideBar from "@/app/components/admin/AdminSideBar";
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
    </div>
  );
};
export default AdminDashboard;
