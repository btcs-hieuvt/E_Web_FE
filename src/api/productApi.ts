import { ProductPost } from "@/types/product";
import apiBase from "./apiClient";

export class productApi {
  static getAll = async (page: number = 1, limit: number = 10) => {
    try {
      const response = await apiBase.get(
        `product/get-product?page=${page}&limit=${limit}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  static getListProductByCategorySlug = async (
    categorySlug: string,
    page: number = 1,
    limit: number = 10
  ) => {
    try {
      const response = await apiBase.get(
        `product/category/${categorySlug}?page=${page}&limit=${limit}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  static getProductBySlug = async (slug: string) => {
    try {
      const ressponse = await apiBase.get(`product/get-product/${slug}`);
    } catch (error) {
      console.log(error);
    }
  };

  static createProduct = async (token: string, bodyPost: ProductPost) => {
    try {
      const response = await apiBase.post("product/create-product", bodyPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  static updateProduct = async (
    token: string,
    id: string,
    bodyPost: ProductPost
  ) => {
    try {
      const response = await apiBase.put(
        `product/update-product/${id}`,
        bodyPost,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  static deleteProduct = async (token: string, id: string) => {
    try {
      const response = await apiBase.delete(`product/delete-product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
}
