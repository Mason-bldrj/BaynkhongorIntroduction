"use client";
import { Header } from "./header";
import { Header2 } from "./header2";
import { InfoAimag } from "./infoAimag";
import { MainMenu } from "./mainMenu";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
export const DefaultArea = () => {
  const [switchState, setSwitchState] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    pathname;
    if (pathname === "/") {
      setSwitchState(true);
    } else {
      setSwitchState(false);
    }
  }, [pathname]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1441px]">
        <Header switchHeader={switchState} />
        <Header2 switchHeader={switchState} />
        <MainMenu />
        <InfoAimag />
      </div>
    </div>
  );
};
