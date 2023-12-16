import Link from "next/link";
import React from "react";

const Page404 = () => {
  return (
    <div className="flex flex-col space-y-[20px] min-h-[50vh] items-center justify-center">
      <div className="text-2xl leading-6 font-bold ">Oops! Page not found</div>

      <Link
        href={"/"}
        className="px-5 py-3 border rounded-md text-white bg-sky-400 font-semibold text-lg"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Page404;
