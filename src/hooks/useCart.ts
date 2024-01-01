import { CartItem, cartState } from "@/atom/cartAtom";
import { ProductDetailType } from "@/types/product";
import React, { useEffect, useMemo } from "react";
import { toast } from "react-toastify";
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

  const totalPrice = useMemo(() => {
    let total = 0;

    cart.forEach((item) => {
      if (item.priceSale) {
        total += item.totalItem * item.priceSale;
      } else {
        total += item.totalItem * item.price;
      }
    });

    return total;
  }, [cart]);

  useEffect(() => {
    const cartItems =
      JSON.parse(localStorage.getItem("cartItems") as string) || [];
    setCart(cartItems);
  }, []);

  const handleAddToCart = (newItem: ProductDetailType) => {
    const existItem = cart.find((item) => item._id === newItem._id);

    if (existItem) {
      const newCart = cart.map((item) =>
        item._id === newItem._id
          ? { ...item, totalItem: item.totalItem + 1 }
          : item
      );

      setCart(newCart);
      localStorage.setItem("cartItems", JSON.stringify(newCart));
    } else {
      const newCart = { ...newItem, totalItem: 1 };
      setCart([...cart, newCart]);
      localStorage.setItem("cartItems", JSON.stringify([...cart, newCart]));
    }

    toast.success("Item added to cart");
  };
  const handleDeleteItemInCart = (id: string) => {
    const newCart = cart.filter((item) => item._id !== id);
    setCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const handleChangeQuantityItem = (type: "minus" | "plus", id: string) => {
    switch (type) {
      case "minus":
        const updatedCartMinus = cart.map((item) => {
          if (item._id === id) {
            if (item.totalItem > 1) {
              return {
                ...item,
                totalItem: item.totalItem - 1,
              };
            } else {
              return null;
            }
          }
          return item;
        });
        const newCart = updatedCartMinus.filter((item) => item !== null);

        setCart(newCart as CartItem[]);
        localStorage.setItem("cartItems", JSON.stringify(newCart));

        break;
      case "plus":
        const updatedCartPlus = cart.map((item) => {
          if (item._id === id) {
            if (item.totalItem >= item.quantity) {
              return item;
            }
            return {
              ...item,
              totalItem: item.totalItem + 1,
            };
          }
          return item;
        });

        setCart(updatedCartPlus);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartPlus));
        break;
      default:
        break;
    }
  };

  return {
    totalPrice,
    handleAddToCart,
    cart,
    totalItem,
    handleDeleteItemInCart,
    handleChangeQuantityItem,
  };
};

export default useCart;
