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

  return (
    <div className="w-full flex flex-col items-center">
      {" "}
      <Header switchHeader={switchState} />
      <MainMenu />

    </div>
  );
};
