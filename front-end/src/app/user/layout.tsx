"use client"
import { dividerClasses } from "@mui/material";
import { DefaultArea } from "../components/homapage/defaultArea";
import { Footer } from "../components/homapage/footer";
const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className={`w-full flex items-center flex-col `}>
        {" "}
        <DefaultArea />
      </div>
      <div className="flex items-center justify-center">{children}</div>
      <Footer />
    </div>
  );
};
export default UserLayout;
