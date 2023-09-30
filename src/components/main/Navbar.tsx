"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { BiSolidCart, BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Controller = () => {
  const handleSignIn = () => {};
  const handleSignUp = () => {};
  return (
    <>
      <div className="btnItem" onClick={handleSignIn}>
        Sign In
      </div>
      <div className="btnItem" onClick={handleSignUp}>
        Join Us
      </div>
    </>
  );
};

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div
      className={`transition-all duration-500 transform ${
        show ? "bg-white" : "bg-inherit"
      }  p-4 md:px-[30px] md:py-[14px] h-16 md:h-[88px] flex justify-between items-center relative`}
    >
      <div>
        <Link href="/">
          <Image
            alt="logo"
            src="/images/logo.png"
            width={115}
            height={32}
            className="object-cover"
          />
        </Link>
      </div>
      <div className="flex items-center justify-end space-x-[30px]">
        <div className="space-x-[24px] hidden md:flex items-center">
          <Controller />
        </div>
        <div>
          <BiSolidCart className="text-[24px]" />
        </div>
        <div onClick={() => setShow(!show)} className="md:hidden">
          {show ? (
            <IoClose className="text-[24px]" />
          ) : (
            <BiMenu className="text-[24px]" />
          )}
        </div>
      </div>
      <div
        className={`absolute top-[100%] border-t right-0 lg:hidden h-screen w-full bg-white transition-all duration-500 transform ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="[&_.btnItem]:h-[62px] [&_.btnItem]:px-4 [&_.btnItem]:py-2 [&_.btnItem]:flex
          [&_.btnItem]:items-center [&_.btnItem]:text-lg [&_.btnItem]:font-bold [&_.btnItem]:uppercase 
          [&_.btnItem]:border-b
        "
        >
          <Controller />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
