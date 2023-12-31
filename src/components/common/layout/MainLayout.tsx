import { Footer, Navbar } from "@/components/main";
import React, { useEffect, useRef } from "react";
import Authen from "../auth";
import "react-toastify/dist/ReactToastify.css";
import useRefreshtoken from "@/hooks/useRefreshtoken";
import { useRecoilValue } from "recoil";
import { showSideMenuState } from "@/atom/refAtom";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  useRefreshtoken();
  const showNavbarmenu = useRecoilValue(showSideMenuState);
  const divRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      if (showNavbarmenu) {
        divRef.current.style.display = "none";
      } else {
        divRef.current.style.display = "";
      }
    }
  }, [showNavbarmenu]);

  return (
    <div className="relative">
      <div className="min-h-screen overflow-hidden relative flex flex-col justify-between">
        <Navbar />
        <div className="h-[1px] w-full bg-white"></div>
        <main className="flex-1 main-content" ref={divRef}>
          {children}
        </main>
        <Footer />
      </div>
      <Authen />
    </div>
  );
};

export default MainLayout;
