import { Categorytype } from "@/atom/categoryAtom";

export type ProductPost = {
  name: string;
  description: string;
  subDescription: string;
  price: number;
  priceSale?: number;
  category: string;
  quantity: number;
  images: string[];
  shipping?: boolean;
};

export type ProductDetailType = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  subDescription: string;
  price: number;
  priceSale: number;
  category: Categorytype;
  quantity: number;
  images: string[];
  shipping: boolean;
};
