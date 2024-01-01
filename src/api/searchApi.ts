import { ProductDetailType } from "@/types/product";
import apiBase from "./apiClient";

export class searchApi {
  static search = async (
    keywordSearch: string
  ): Promise<ProductDetailType[]> => {
    const response = await apiBase.get(`search?k=${keywordSearch}`);
    return response.data;
  };
}
