"use client";

import { footerLinks } from "@/constants/footer";
import { Collapse } from "antd";
import Link from "next/link";
import React from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-10 md:py-20 px-8 lg:px-16">
      <>
        <div className="hidden lg:grid grid-cols-4 gap-x-[24px]">
          {footerLinks?.map((item, index) => (
            <div key={Number(index)}>
              <div className="text-lg font-bold text-[#646464] uppercase">
                {item.title}
              </div>
              <div className="flex flex-col mt-4 text-base space-y-[4px] justify-center">
                {item.links.map((i) => (
                  <Link
                    href={i.url}
                    className="h-[22px] font-normal text-[#111]"
                    key={i.name}
                  >
                    {i.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="[&_.ant-collapse-header]:!px-0 lg:hidden [&_.ant-collapse]:bg-[#fff]">
          <Collapse
            expandIconPosition="end"
            expandIcon={({ isActive }) => {
              return isActive ? (
                <AiOutlineMinus className="text-2xl text-[#646464]" />
              ) : (
                <AiOutlinePlus className="text-2xl text-[#646464]" />
              );
            }}
            bordered={false}
            items={footerLinks?.map((item, index) => {
              return {
                key: index,
                label: (
                  <div className="uppercase text text-lg text-[#646464] font-bold">
                    {item.title}
                  </div>
                ),
                children: (
                  <div className="flex flex-col space-y-[4px]">
                    {item.links.map((i) => (
                      <Link
                        href={i.url}
                        className="h-[22px] font-normal text-[#111]"
                        key={i.name}
                      >
                        {i.name}
                      </Link>
                    ))}
                  </div>
                ),
              };
            })}
          />
        </div>
      </>
      <div className="h-[0.5px] bg-[#111a] mt-10 mb-[30px] hidden lg:block"></div>
      <div className="text-[#646464] flex flex-col space-y-[8px] justify-center mt-10 lg:mt-0 lg:flex-row lg:justify-between lg:items-center">
        <div className="text-xs flex items-center">
          &copy; clone by Vũ trung Hiếu
        </div>
        <div className="flex items-center space-x-[20px] text-xs">
          <div>Legal</div>
          <div>Privacy Policy</div>
          <div>Imprint</div>
          <div>Cookie Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
