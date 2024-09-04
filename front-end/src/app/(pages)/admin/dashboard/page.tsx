"use client";
import AdminSideBar from "@/app/components/admin/AdminSideBar";
import { useState } from "react";

const AdminDashboard = () => {
  const [menus, setMenu] = useState();
  return (
    <div>
      <AdminSideBar setMenu={setMenu} />
      <div></div>
    </div>
  );
};
export default AdminDashboard;
