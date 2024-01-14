"use client";

import React, { useEffect, useState } from "react";
import { CartItem } from "@/atom/cartAtom";
import useCart from "@/hooks/useCart";
import { formatPrice } from "@/utils/formatPrice";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { accessTokenState, profileState } from "@/atom/authAtom";
import { useAuthentication } from "@/context/authContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import DropIn from "braintree-web-drop-in-react";
import { paymentApi } from "@/api/paymentApi";
import apiBase from "@/api/apiClient";

const CartPage = () => {
  const {
    totalItem,
    cart,
    handleDeleteItemInCart,
    handleChangeQuantityItem,
    totalPrice,
    handleDestroyCart,
  } = useCart();
  const router = useRouter();
  const accessToken = useRecoilValue(accessTokenState);
  const profile = useRecoilValue(profileState);
  const { openLogin } = useAuthentication();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState();
  const [loading, setLoading] = useState(false);

  const columns: ColumnsType<CartItem> = [
    {
      title: "STT",
      key: "STT",
      dataIndex: "STT",
      width: 60,
      render: (_, {}, index) => (
        <a>{(index + 1).toString().padStart(2, "0")}</a>
      ),
    },
    {
      title: "Photo",
      key: "images",
      dataIndex: "images",
      width: 120,
      render: (_, { images }, index) => (
        <div className="flex items-center justify-center">
          <Image alt="" src={images[0]} width={100} height={100} />
        </div>
      ),
    },
    {
      title: "Product Name",
      key: "name",
      dataIndex: "name",
      render: (_, { name }, index) => <div className="">{name}</div>,
    },
    {
      title: "quantity",
      key: "totalQuantity",
      dataIndex: "totalQuantity",
      width: 100,
      render: (_, { totalItem, _id }, index) => (
        <div className="flex items-center justify-center space-x-[6px]">
          <div>
            <CiCircleMinus
              className="cursor-pointer"
              size={18}
              onClick={() => handleChangeQuantityItem("minus", _id)}
            />
          </div>
          <div>{totalItem}</div>
          <div>
            <CiCirclePlus
              className="cursor-pointer"
              size={18}
              onClick={() => handleChangeQuantityItem("plus", _id)}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      render: (_, { totalItem, price, priceSale }, index) => {
        let totalPrice = 0;
        if (priceSale) {
          totalPrice = totalItem * priceSale;
        } else {
          totalPrice = totalItem * price;
        }
        return (
          <div className="flex items-center justify-center">
            <span>{formatPrice(totalPrice)}đ</span>
          </div>
        );
      },
    },
    {
      title: "",
      key: "delete",
      dataIndex: "delete",
      render: (_, { _id }, index) => {
        return (
          <div className="flex items-center justify-center">
            <AiFillDelete
              className="text-red-400 cursor-pointer"
              size={20}
              onClick={() => handleDeleteItemInCart(_id)}
            />
          </div>
        );
      },
    },
  ];

  //get payment gateway token
  const getToken = async () => {
    const data: any = await paymentApi.getPaymentGatewayToken();
    setClientToken(data?.clientToken);
  };

  useEffect(() => {
    getToken();
  }, [accessToken]);

  const handleCheckOut = async () => {
    if (!accessToken) {
      openLogin();
      toast.warning("Please login before proceeding to checkout");
    } else {
      try {
        setLoading(true);
        const { nonce } = await (instance as any)?.requestPaymentMethod();
        const newCart = cart.map((i) => ({
          id: i._id,
          price: i.priceSale > 0 ? i.priceSale : i.price,
          quantity: i.totalItem,
        }));
        const { data } = await apiBase.post(
          "payment/braintree/payment",
          {
            nonce,
            cart: newCart,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log(data);

        setLoading(false);
        handleDestroyCart();
        router.push("/my-profile/my-order");
        toast.success("Payment Completed Successfully ");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full min-h-[400px] bg-show-product pt-7 pb-4">
      <div className="w-[80%] mx-auto">
        {totalItem > 0 ? (
          <div>
            <div className="text-xl font-semibold text-white leading-6 uppercase tracking-[0.03rem]">
              Cart ({totalItem} items)
            </div>
            <div className="mt-6 [&_.ant-table-summary>tr>td]:!border-r-0">
              <Table
                columns={columns}
                bordered
                scroll={{ x: 500 }}
                dataSource={cart ?? []}
                pagination={false}
                summary={() => (
                  <Table.Summary.Row>
                    <Table.Summary.Cell
                      index={0}
                      className="uppercase text-xl font-semibold"
                    >
                      Total
                    </Table.Summary.Cell>
                    <Table.Summary.Cell index={1} colSpan={4}>
                      <div className="flex justify-end items-center text-lg font-semibold">
                        {formatPrice(totalPrice)}đ
                      </div>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                )}
              />
            </div>
            <div className="flex flex-col items-center pb-[30px]">
              {accessToken ? (
                <>
                  <div className="mt-[30px] w-full p-4 border border-[#fff] rounded-lg text-[#ffffffbd]">
                    <span className="block text-center text-xl leading-5 font-semibold ">
                      Checkout Information
                    </span>
                    <div className="space-y-[6px]">
                      <div>Email: {profile?.email}</div>
                      <div>Phone: {profile?.phone}</div>
                      <div>Address: {profile?.address}</div>
                    </div>
                    <Button
                      className="mt-[30px] h-10 w-[180px] rounded-md flex items-center justify-center bg-[#ece81a] text-white"
                      onClick={() => router.push("/my-profile")}
                    >
                      Update Information
                    </Button>
                  </div>

                  <div className="w-full [&_.braintree-heading]:text-white mt-2 flex flex-col items-center">
                    {clientToken && cart.length > 0 ? (
                      <div className="mt-2 w-full min-h-[200px]">
                        <DropIn
                          options={{
                            authorization: clientToken,
                            paypal: {
                              flow: "vault",
                            },
                          }}
                          onInstance={(instance) => setInstance(instance)}
                        />
                        <Button
                          disabled={loading || !instance || !profile?.address}
                          className={`mt-[30px] h-10 w-[200px] rounded-md flex items-center justify-center ${
                            loading || !instance || !profile?.address
                              ? "!bg-[#ccc]"
                              : "!bg-red-400"
                          }  !text-white`}
                          onClick={handleCheckOut}
                        >
                          {loading ? "Processing..." : " Make Payment"}
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center space-x-[12px] text-white">
            <div className="text-lg font-semibold mb-4">
              There are no products in the cart
            </div>
            <Link href={"/"}>
              {" "}
              <div className="h-10 w-[240px] opacity-95 hover:opacity-100 bg-[#ece81a] rounded-md border border-[#ffffff85] flex items-center justify-center text-base font-semibold">
                Buy now
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
