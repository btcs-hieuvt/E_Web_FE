import { ProductDetailType } from "@/types/product";
import { atom } from "recoil";

export interface CartItem extends ProductDetailType {
  totalItem: number;
}

export const cartState = atom<CartItem[]>({
  key: "cart",
  default: [],
});
