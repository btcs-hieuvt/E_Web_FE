import { ProductDetailType } from "@/types/product";
import { atom, selector } from "recoil";

export const productListState = atom<{
  data: ProductDetailType[];
  totalPage: number;
}>({
  key: "productList",
  default: undefined,
});

export const searchResultState = atom<ProductDetailType[]>({
  key: "searchResult",
  default: undefined,
});

export const selectedProductState = atom<ProductDetailType | undefined>({
  key: "selectedProduct",
  default: undefined,
});

export const shouldFetchProductListSelector = selector({
  key: "shouldFetchProductList",
  get: ({ get }) => {
    const productList = get(productListState);
    return productList.data.length === 0;
  },
});
