"use client";

import { paymentApi } from "@/api/paymentApi";
import { accessTokenState } from "@/atom/authAtom";
import { formatPrice } from "@/utils/formatPrice";
import { Spin } from "antd";
import { ColumnsType } from "antd/es/table";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";

const MyOrderPage = () => {
  const accessToken = useRecoilValue(accessTokenState);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const getOrders = async () => {
    try {
      setLoading(true);
      const data = await paymentApi.getOrders(accessToken ?? "");
      setOrders(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getOrders();
  }, [accessToken]);

  return (
    <div className="w-full">
      <h1 className="uppercase h-12 flex items-center text-[28px] text-[#444] tracking-[.01rem] font-semibold">
        All Order
      </h1>
      <Spin spinning={loading}>
        <div className="w-full mt-2 space-y-[12px]">
          {orders?.map((o, i) => {
            let totalPrice = 0;
            return (
              <div className="border rounded shadow px-4 py-5" key={i}>
                <div className="grid grid-cols-5 gap-1 border-b pb-2">
                  <div className="col-span-1 flex flex-col space-y-[4px]">
                    <div className="font-semibold">#</div>
                    <div>{i + 1}</div>
                  </div>
                  <div className="col-span-1 flex flex-col space-y-[4px]">
                    <div className="font-semibold">Status</div>
                    <div>{o?.status}</div>
                  </div>
                  <div className="col-span-1 flex flex-col space-y-[4px]">
                    <div className="font-semibold">Buyer</div>
                    <div>{o?.buyer?.name}</div>
                  </div>
                  <div className="col-span-1 flex flex-col space-y-[4px]">
                    <div className="font-semibold">Payment</div>
                    <div>{o?.payment.success ? "Success" : "Failed"}</div>
                  </div>
                  <div className="col-span-1 flex flex-col space-y-[4px]">
                    <div className="font-semibold">Date</div>
                    <div>{moment(o?.createAt).fromNow()}</div>
                  </div>
                </div>
                <div className="container mt-2 space-y-[12px]">
                  {o?.product?.map((p: any) => (
                    <div className="flex space-x-[8px]" key={p?.id?._id}>
                      <div>
                        <Image
                          src={p?.id?.images?.[0]}
                          className="card-img-top"
                          alt={""}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{p?.id?.name}</p>
                        <p className="block my-1">
                          Price :{" "}
                          {formatPrice(
                            p?.id?.priceSale > 0
                              ? p?.id?.priceSale
                              : p?.id?.price
                          )}{" "}
                          VND
                        </p>
                        <p>Quantity: {p?.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="mt-2">
                  <span>Total:</span>{" "}
                  {o?.product?.forEach((item: any) => {
                    totalPrice = totalPrice + item?.quantity * item?.price;
                  })}
                </div> */}
              </div>
            );
          })}
        </div>
      </Spin>
    </div>
  );
};

export default MyOrderPage;
