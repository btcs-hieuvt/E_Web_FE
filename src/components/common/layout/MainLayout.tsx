import { Footer, Navbar } from "@/components/main";
import React from "react";
import Authen from "../auth";
import ToastNotification from "../ToastNotification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRefreshtoken from "@/hooks/useRefreshtoken";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  useRefreshtoken();
  return (
    <>
      <div className="min-h-screen overflow-hidden relative flex flex-col justify-between">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <Authen />
      <ToastNotification />
    </>
  );
};

export default MainLayout;
