"use client";

import { useAuthentication } from "@/context/authContext";
import useAuth from "@/hooks/useAuthentication";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { BiSolidCart, BiMenu } from "react-icons/bi";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { accessTokenState } from "@/atom/authAtom";
import { DecodeJWT } from "@/utils/auth/decodeJwt";
import Logo from "../icons/Logo";
import { showSideMenuState } from "@/atom/refAtom";
import { Avatar, Badge } from "antd";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import SeacrhBar from "../search/SearchBar";

const Controller = () => {
  const { openLogin, openRegister } = useAuthentication();
  const { isAuthenticated, logout } = useAuth();
  const accessToken = useRecoilValue(accessTokenState);

  const user = DecodeJWT(accessToken as string);

  return (
    <>
      {user && user.role === 1 ? (
        <Link href="/admin" className="btnItem cursor-pointer">
          Dashboard
        </Link>
      ) : null}
      {isAuthenticated ? (
        <>
          <Link href={"/my-profile"}>
            <div className="btnItem cursor-pointer flex items-center">
              <FaUserCircle className="mr-2" /> Profile
            </div>
          </Link>
        </>
      ) : (
        <>
          <div className="btnItem cursor-pointer" onClick={openLogin}>
            Sign In
          </div>
          <div className="btnItem cursor-pointer" onClick={openRegister}>
            Join Us
          </div>
        </>
      )}
    </>
  );
};

const Navbar = () => {
  const [show, setShow] = useRecoilState(showSideMenuState);
  const { totalItem } = useCart();
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  const handleAutoCloseNav = () => {
    if (navRef.current) {
      const { clientWidth } = navRef.current;
      if (clientWidth > 768) setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleAutoCloseNav);

    return () => {
      window.removeEventListener("resize", handleAutoCloseNav);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-500 transform ${
        show ? "bg-white text-[#000]" : "bg-[#000]"
      } text-white p-4 md:px-[30px] md:py-[14px] flex justify-between items-center`}
    >
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      {/* <div className="w-[50%]">
        <SeacrhBar />
      </div> */}
      <div className="flex items-center justify-end space-x-[30px]">
        <div className="space-x-[24px] hidden md:flex items-center">
          <Controller />
        </div>
        <Badge count={totalItem} size="small">
          <div onClick={() => router.push("/cart")} className="cursor-pointer">
            <Avatar icon={<BiSolidCart className="text-[24px]" />} />
          </div>
        </Badge>
        <div
          onClick={() => setShow(!show)}
          className={`md:hidden ${show ? "text-[#000]" : ""}`}
        >
          {show ? (
            <IoClose className="text-[24px]" />
          ) : (
            <BiMenu className="text-[24px]" />
          )}
        </div>
      </div>
      <div
        ref={navRef}
        className={`absolute top-[100%] border-t right-0 lg:hidden h-screen w-full bg-white transition-all duration-500 transform ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="[&_.btnItem]:h-[62px] [&_.btnItem]:px-4 [&_.btnItem]:py-2 [&_.btnItem]:flex
          [&_.btnItem]:items-center [&_.btnItem]:text-lg [&_.btnItem]:font-bold [&_.btnItem]:uppercase 
          [&_.btnItem]:border-b [&_.btnItem]:text-[#000]
        "
        >
          <Controller />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
