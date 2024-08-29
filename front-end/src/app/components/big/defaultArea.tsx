'use client'
import { Header } from "./header";
import { InfoAimag } from "./infoAimag";
import { MainMenu } from "./mainMenu";
export const DefaultArea = () => {
  return (
    <div className="w-full flex justify-center">
    <div className="w-[1441px]">
      <Header />
      <MainMenu />
      <InfoAimag />
    </div>
    </div>
  );
};
