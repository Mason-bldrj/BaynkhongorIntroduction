import { dividerClasses } from "@mui/material";
import { DefaultArea } from "../components/homapage/defaultArea";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className={`w-full flex items-center flex-col`}>
        {" "}
        <DefaultArea />
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
};
export default UserLayout;
