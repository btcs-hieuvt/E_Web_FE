import { paymentApi } from "@/api/paymentApi";
import { accessTokenState } from "@/atom/authAtom";
import { orderStatus } from "@/constants/common";
import { formatPrice } from "@/utils/formatPrice";
import { Select, Spin } from "antd";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

interface Props {
  data: any;
  index: number;
}
const OrderItem = ({ data, index }: Props) => {
  const accessToken = useRecoilValue(accessTokenState);
  const [selectedStatus, setSelectedStatus] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSelectedStatus(data?.status);
  }, [data]);

  const handleGetlistOrder = async () => {
    setLoading(true);
    try {
      const response = await paymentApi.allOrders(accessToken ?? "");
      if (response) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleChangeStatusOrder = async () => {
    setLoading(true);
    try {
      if (selectedStatus && accessToken) {
        const res = await paymentApi?.updateStatusOrder(
          accessToken,
          data._id,
          selectedStatus
        );

        if (res) {
          setLoading(false);
          handleGetlistOrder();
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    handleChangeStatusOrder();
  }, [selectedStatus]);

  console.log(data);

  return (
    <Spin spinning={loading}>
      <div className="border rounded shadow px-4 py-5">
        <div className="grid grid-cols-5 gap-1 border-b pb-2">
          <div className="!w-[60px] flex flex-col space-y-[4px]">
            <div className="font-semibold">#</div>
            <div>{index + 1}</div>
          </div>
          <div className="col-span-1 flex flex-col space-y-[4px]">
            <div className="font-semibold">Status</div>
            <div>
              <Select
                className="w-full"
                value={selectedStatus}
                options={orderStatus}
                onChange={(v) => setSelectedStatus(v)}
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-col space-y-[4px]">
            <div className="font-semibold">Buyer</div>
            <div>{data?.buyer?.name}</div>
          </div>
          <div className="col-span-1 flex flex-col space-y-[4px]">
            <div className="font-semibold">Payment</div>
            <div>{data?.payment.success ? "Success" : "Failed"}</div>
          </div>
          <div className="col-span-1 flex flex-col space-y-[4px]">
            <div className="font-semibold">Date</div>
            <div>{moment(data?.createdAt).format("HH:mm DD/MM/YYYY")}</div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-sm font-semibold text-[#111] leading-4">
            Buyer Information
          </h1>
          <div className="my-2 space-y-[4px]">
            <div>Adress : {data?.buyer?.address}</div>
            <div>Email : {data?.buyer?.email}</div>
            <div>Phone : {data?.buyer?.phone}</div>
          </div>
        </div>
        <div className="container mt-2 space-y-[12px]">
          <h1 className="text-sm font-semibold text-[#111] leading-4">
            Products
          </h1>
          {data?.product?.map((p: any) => (
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
                    p?.id?.priceSale > 0 ? p?.id?.priceSale : p?.id?.price
                  )}{" "}
                  VND
                </p>
                <p>Quantity: {p?.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Spin>
  );
};

export default OrderItem;
