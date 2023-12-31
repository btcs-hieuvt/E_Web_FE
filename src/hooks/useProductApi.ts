import { productApi } from "@/api/productApi";
import { accessTokenState } from "@/atom/authAtom";
import { productListState, selectedProductState } from "@/atom/productAtom";
import { ProductPost } from "@/types/product";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const useProductApi = () => {
  const [listProduct, setListProduct] = useRecoilState(productListState);
  const setSelectedProduct = useSetRecoilState(selectedProductState);
  const accessToken = useRecoilValue(accessTokenState);

  const getAllProduct = async (page?: number, limit?: number) => {
    const res = await productApi.getAll(page, limit);

    setListProduct(res.result);
    // return res;
  };

  const addProduct = async (body: ProductPost) => {
    const rs = await productApi.createProduct(accessToken as string, body);

    getAllProduct();
    return rs;
  };

  const updateProduct = async (id: string, body: ProductPost) => {
    const rs = await productApi.updateProduct(accessToken as string, id, body);

    getAllProduct();
    return rs;
  };

  const deleteProduct = async (id: string) => {
    const rs = await productApi.deleteProduct(accessToken as string, id);

    getAllProduct();
    return rs;
  };

  const getProductBySlug = async (slug: string) => {
    const rs = await productApi.getProductBySlug(slug);

    return rs;
  };

  const getListProductByCategory = async (
    categorySlug: string,
    page?: number,
    limit?: number
  ) => {
    const rs = await productApi.getListProductByCategorySlug(
      categorySlug,
      page,
      limit
    );

    return rs.result;
  };

  return {
    listProduct,
    getAllProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductBySlug,
    getListProductByCategory,
  };
};

export default useProductApi;
