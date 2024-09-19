"use client";

import AdminMain from "@/app/components/admin/AdminMains";
import AdminSideBar from "@/app/components/admin/AdminSideBar";
import DashboardSec from "@/app/components/admin/Dashboard";
import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const router = useRouter();
  const [admin, setAdmin] = useState("");
  const [changedRequest, setChangedRequest] = useState("CREATE");
  const [menus, setMenu] = useState("Бидний тухай");
  const [checkDisplay, setCheckDisplay] = useState(Boolean);
  const e = async () => {
    const inadmin = await localStorage.getItem("admin");

    setTimeout(() => {
      if (!inadmin) {
        return router.push("/");
      }
    }, 1000);
  };
  const logOut = () => {
    localStorage.clear(admin);
    router.push("/admin/login");
  };
  useEffect(() => {
    e();
  }, [admin]);
  useEffect(() => {
    if (window.innerWidth > 640) {
      setCheckDisplay(true);
    } else {
      setCheckDisplay(false);
      alert("Та зөвхөн том дэлгэцэн дээр мэлээлэл оруулах боломжтой.");
      router.push("/");
    }
  }, []);
  return (
    <div className="flex ">
      {checkDisplay == true ? (
        <div className="flex relative">
          <button
            onClick={logOut}
            className=" absolute top-1 right-1 flex items-center hover:scale-[110%] hover:bg-slate-100 gap-2 border rounded-md p-2"
          >
            <CiLogout />
            <div>Гарах</div>
          </button>{" "}
          <AdminSideBar
            setMenu={setMenu}
            changedRequest={changedRequest}
            setChangedRequest={setChangedRequest}
          />
          <div
            className={` p-[50px] w-full  justify-center ${
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
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default AdminDashboard;
