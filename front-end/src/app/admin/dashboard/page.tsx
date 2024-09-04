"use client";
import AdminMain from "@/app/components/admin/AdminMains";
import AdminSideBar from "@/app/components/admin/AdminSideBar";
import { useState } from "react";

const AdminDashboard = () => {
  const [menus, setMenu] = useState();
  return (
    <div className="flex">
      <AdminSideBar setMenu={setMenu} />
      <div className="flex p-[50px] w-[70%]  justify-center ">
        <AdminMain></AdminMain>
      </div>
    </div>
  );
};
export default AdminDashboard;
