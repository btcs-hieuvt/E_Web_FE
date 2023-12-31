"use client";

import useProductApi from "@/hooks/useProductApi";
import React, { useEffect } from "react";

interface Props {
  params: { id: string };
}
const ProductDetailPage = ({ params }: Props) => {
  const { getProductBySlug } = useProductApi();

  useEffect(() => {
    const getProduct = async () => {
      const rs = await getProductBySlug(params.id);

      console.log(rs);
    };
    getProduct();
  }, [params.id]);

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="col-span-1 bg-orange-300"></div>
      <div className="col-span-1 bg-rose-300">
        ProductDetailPage {params.id}
      </div>
    </div>
  );
};

export default ProductDetailPage;
