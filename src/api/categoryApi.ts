import { CategoryType } from "@/types/category";
import apiBase from "./apiClient";

export class categoryApi {
  static getAll = async () => {
    try {
      const response = await apiBase.get("category/get-all");
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  static getOne = async (slug: string) => {
    try {
      const response = await apiBase.get(`category/get-one-category/${slug}`);
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  static createCategory = async (token: string, bodyPost: CategoryType) => {
    try {
      const response = await apiBase.post(
        "category/create-category",
        bodyPost,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  static updateCategory = async (
    token: string,
    id: string,
    bodyPost: CategoryType
  ) => {
    try {
      const response = await apiBase.put(
        `category/update-category/${id}`,
        bodyPost,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  static deleteCategory = async (token: string, id: string) => {
    try {
      const response = await apiBase.delete(`category/delete-category/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
}
