"use client";

import { searchResultState } from "@/atom/productAtom";
import ProductItem from "@/components/common/ProductItem";
import React from "react";
import { useRecoilValue } from "recoil";

const SearchResultPage = ({ params }: { params: { slug: string } }) => {
  const searchResultList = useRecoilValue(searchResultState);
  return (
    <div className="bg-show-product min-h-[75vh] w-full">
      <div className="w-[80%] mx-auto pt-5 pb-[30px]">
        <div className="text-2xl font-semibold tracking-tight leading-6 text-white mt-3">
          Search result for {`"${params.slug}"`}
        </div>
        <div className="mt-[30px]">
          {searchResultList?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {searchResultList?.map((item) => (
                <ProductItem data={item} key={item?._id} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[30vh] text-white font-semibold text-lg">
              No result
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
