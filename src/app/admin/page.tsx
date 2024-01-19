"use client";

import React, { useEffect, useState } from "react";
import withAdminAuth from "@/utils/auth/admin";
import { paymentApi } from "@/api/paymentApi";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "@/atom/authAtom";
import OrderItem from "@/components/adminDashboard/order/OrderItem";

const AdminPage = () => {
  const accessToken = useRecoilValue(accessTokenState);
  const [listOrder, setListOrder] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetlistOrder = async () => {
    setLoading(true);
    try {
      const response = await paymentApi.allOrders(accessToken ?? "");
      if (response) {
        setLoading(false);
        setListOrder(response);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetlistOrder();
  }, [accessToken]);

  return (
    <div>
      <h1 className="block text-2xl leading-6 font-semibold mb-4">
        All Orders
      </h1>
      <div className="space-y-[12px]">
        {listOrder.length > 0 ? (
          listOrder?.map((item, index) => (
            <OrderItem key={item._id} data={item} index={index} />
          ))
        ) : (
          <div>No Order</div>
        )}
      </div>
    </div>
  );
};

export default withAdminAuth(AdminPage);
