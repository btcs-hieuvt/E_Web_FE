import { Categorytype, categoryListState } from "@/atom/categoryAtom";
import React from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import Link from "next/link";

const CategoryItem = (item: Categorytype) => {
  return (
    <Link href={`/category/${item.slug}`}>
      <div className="border-2 border-[#18151c] hover:border-cyan-500 cursor-pointer">
        <div
          className="w-full pt-[100%] object-cover"
          style={{
            backgroundImage: `url(${item.thumbnail})`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="bg-[#0000006e] py-[3.2px] text-white text-base font-light tracking-[0.75px] text-center">
          {item.name}
        </div>
      </div>
    </Link>
  );
};

const Category = () => {
  const categories = useRecoilValue(categoryListState);

  return (
    <div
      className="w-full bg-cover bg-center h-screen flex flex-col items-center"
      style={{
        backgroundImage: 'url("/images/category-background.webp")',
        height: "fit-content",
      }}
    >
      <div className="text-3xl w-[90%] px-[auto] pt-7 font-bold leading-7 tracking-wide flex justify-center items-center md:justify-start text-white">
        EXPLORE CATEGORIES
      </div>
      <div className="py-[32px] w-full flex justify-center gap-[16px] flex-wrap">
        {categories.map((item, index) => (
          <div className="w-[180px]" key={index}>
            {CategoryItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
