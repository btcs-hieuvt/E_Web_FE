import { cartState } from "@/atom/cartAtom";
import { ProductDetailType } from "@/types/product";
import React, { useMemo } from "react";
import { useRecoilState } from "recoil";

const useCart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const totalItem = useMemo(() => {
    let total = 0;

    cart.forEach((item) => {
      total += item.totalItem;
    });

    return total;
  }, [cart]);

  const handleAddToCart = (newItem: ProductDetailType) => {
    const existItem = cart.find((item) => item._id === newItem._id);

    if (existItem) {
      const newCart = cart.map((item) =>
        item._id === newItem._id
          ? { ...item, totalItem: item.totalItem + 1 }
          : { ...item, totalItem: 1 }
      );

      setCart(newCart);
    } else {
      const newCart = { ...newItem, totalItem: 1 };
      setCart([...cart, newCart]);
    }
  };
  return {
    handleAddToCart,
    cart,
    totalItem,
  };
};

export default useCart;
