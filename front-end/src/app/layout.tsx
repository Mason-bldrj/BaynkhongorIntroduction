import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DefaultArea } from "./components/homapage/defaultArea";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-full m-0 p-0 `}>
        <div className="w-full flex flex-col items-center">
          <DefaultArea />
          {children}
        </div>
      </body>
    </html>
  );
}
