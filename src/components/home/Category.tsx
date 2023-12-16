import React from "react";

const Category = () => {
  return (
    <div
      className="w-full bg-cover bg-center h-screen flex flex-col items-center"
      style={{
        backgroundImage: 'url("/images/category-background.webp")',
        height: "fit-content",
      }}
    >
      <div className="text-3xl w-[90%] px-[auto] pt-7 font-bold leading-7 tracking-wide flex justify-center items-center md:justify-start text-white">
        EXPLORE PRODUCTS
      </div>
      Category
    </div>
  );
};

export default Category;
