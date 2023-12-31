import { useAuthentication } from "@/context/authContext";
import React, { useEffect, useRef } from "react";
import Login from "./Login";
import Register from "./Register";
import { IoClose } from "react-icons/io5";
import { Spin } from "antd";
import useAuth from "@/hooks/useAuthentication";

const Authen = () => {
  const { isLogin, isRegister, closeLogin, closeRegister } =
    useAuthentication();
  const { loadingAuth } = useAuth();
  const popupRef = useRef<HTMLDivElement>(null);

  const handleBlurPopup = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      if (closeLogin && closeRegister) {
        closeLogin();
        closeRegister();
      }
    }
  };

  const handleClosePopup = () => {
    if (isLogin && closeLogin) closeLogin();
    if (isRegister && closeRegister) closeRegister();
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleBlurPopup);

  //   return () => {
  //     document.removeEventListener("mousedown", handleBlurPopup);
  //   };
  // }, []);

  useEffect(() => {
    if (isLogin || isRegister) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLogin, isRegister]);

  if (isLogin || isRegister) {
    return (
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-[#1111114c] w-screen h-screen flex justify-center items-center">
        <div
          className="bg-[#fff] m-4 w-screen sm:w-[500px]  rounded-md  pb-2"
          ref={popupRef}
        >
          <Spin spinning={loadingAuth}>
            <div className="relative px-[10px] mx-[25px] mt-6">
              <span className="uppercase text-[#4d4d4d] font-medium text-2xl leading-4">
                {isLogin ? "login" : "REGISTRATION"}
              </span>
              <div
                className="w-7 h-7 absolute right-[-15px] top-[-15px] cursor-pointer"
                onClick={handleClosePopup}
              >
                <IoClose className="text-[20px] " />
              </div>
            </div>
            <div className="px-[35px] pt-[10px] max-h-[70vh] overflow-y-auto ">
              {isLogin ? <Login /> : null}
              {isRegister ? <Register /> : null}
            </div>
          </Spin>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Authen;
