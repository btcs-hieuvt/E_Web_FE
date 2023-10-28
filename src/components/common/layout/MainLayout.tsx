import { Footer, Navbar } from "@/components/main";
import React from "react";
import Authen from "../auth";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col justify-between">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Authen />
    </div>
  );
};

export default MainLayout;
