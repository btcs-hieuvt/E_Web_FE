"use client";

import ProductItem from "@/components/common/ProductItem";
import Banner from "@/components/home/Banner";
import { BannerData } from "@/constants/DataBanner";
import useProductApi from "@/hooks/useProductApi";
import { ProductDetailType } from "@/types/product";
import React, { useEffect, useMemo, useState } from "react";

interface ProductsProps {
  params: { slug: string };
}

const CategoryDetail = ({ params }: ProductsProps) => {
  const { slug } = params;
  const { getListProductByCategory } = useProductApi();
  const [totalPage, SetTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [listProduct, setListproduct] = useState<ProductDetailType[]>([]);
  const [loadingItem, setLoadingItem] = useState(false);

  const slides = useMemo(() => {
    const data =
      BannerData.find((item) =>
        slug ? item.keyType === slug : item.keyType === "common"
      )?.items ?? [];

    return data;
  }, [slug]);

  useEffect(() => {
    const getListItem = async () => {
      setLoadingItem(true);
      try {
        const rs = await getListProductByCategory(slug, currentPage);
        setLoadingItem(false);
        SetTotalPage(rs.totalPage);
        setListproduct(rs.data);
      } catch (error) {
        setLoadingItem(false);
      }
    };

    getListItem();
  }, [slug, currentPage]);

  return (
    <div>
      <Banner slides={slides} />
      <div
        className="w-full py-10 bg-cover bg-center h-screen flex flex-col items-center"
        style={{
          backgroundImage: 'url("/images/category-background.webp")',
          height: "fit-content",
        }}
      >
        <div className="w-[85%] mx-auto">
          {listProduct.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {listProduct?.map((item) => (
                <ProductItem data={item} key={item._id} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[30vh] text-white font-semibold text-lg">
              No Item
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
