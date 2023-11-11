"use client";

import "./globals.css";
import { AuthContextProvider } from "@/context/authContext";
import MainLayout from "@/components/common/layout/MainLayout";
import ToastNotification from "@/components/common/ToastNotification";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-white overflow-x-hidden">
        <RecoilRoot>
          <AuthContextProvider>
            <MainLayout>{children}</MainLayout>
            <ToastNotification />
          </AuthContextProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
