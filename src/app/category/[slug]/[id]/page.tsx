"use client";

import ShowProduct from "@/components/common/ShowProduct";
import useCart from "@/hooks/useCart";
import useProductApi from "@/hooks/useProductApi";
import { ProductDetailType } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  params: { id: string };
}
const ProductDetailPage = ({ params }: Props) => {
  const { getProductByNameSlug } = useProductApi();
  const router = useRouter();
  const [productDetail, setProductDetail] = useState<ProductDetailType>();
  const { handleAddToCart } = useCart();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const rs = await getProductByNameSlug(params.id);
        setLoading(false);
        setProductDetail(rs);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getProduct();
  }, [params.id]);

  return (
    <div className="grid grid-cols-2 h-full min-h-[600px]">
      <div className="col-span-1 bg-show-product h-full">
        <ShowProduct images={productDetail?.images ?? []} />
      </div>
      <div className="col-span-1 bg-gradient-to-br from-[#3e3d3d] to-[#0c0c0c] pt-4 px-8 text-white flex flex-col justify-between">
        <div>
          <div className="text-sm leading-4 mb-4 text-neutral-300">
            ! Remaining: {productDetail?.quantity} products
          </div>
          <div className="text-2xl leading-[1.8rem] mb-2 tracking-[.01rem]">
            {productDetail?.name}
          </div>
          <div className="text-sm tracking-[.01rem] text-[#808080] mb-3">
            {productDetail?.subDescription}
          </div>
          <div
            className="whitespace-pre-wrap text-xs leading-[1rem] tracking-[0.03rem] mb-4"
            dangerouslySetInnerHTML={{
              __html: productDetail?.description as string,
            }}
          ></div>
          <div className="flex flex-col space-y-[4px]">
            <span className="block text-2xl leading-6 font-semibold">
              Price:{" "}
              {productDetail?.priceSale
                ? formatPrice(productDetail?.priceSale)
                : formatPrice(productDetail?.price as number)}
              đ
            </span>
            {productDetail?.priceSale ? (
              <span className="block text-lg leading-5 font-medium line-through text-[#ccc]">
                Price: {formatPrice(productDetail?.price ?? 0)}đ
              </span>
            ) : null}
          </div>
        </div>
        <div className="mb-7 flex space-x-[8px]">
          <Button
            className="uppercase min-w-[250px] h-[48px] bg-[#ece81a] text-[#111] hover:opacity-95 hover:text-[#ccc] text-sm font-semibold leading-[18px]"
            onClick={() => handleAddToCart(productDetail as ProductDetailType)}
          >
            add to cart
          </Button>
          <Button
            className="uppercase min-w-[250px] h-[48px] bg-red-400 text-[#111] hover:opacity-95 hover:text-[#ccc] text-sm font-semibold leading-[18px]"
            onClick={() => router.push("/cart")}
          >
            my cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
