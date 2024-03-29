import { accessTokenState } from "@/atom/authAtom";
import apiBase from "./apiClient";

export class paymentApi {
  static getPaymentGatewayToken = async () => {
    try {
      const response = await apiBase.get("payment/braintree/token");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  static getOrders = async (accessToken: string) => {
    try {
      const response = await apiBase.get("order/get-orders", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  static allOrders = async (accessToken: string) => {
    try {
      const res = await apiBase.get("order/all-orders", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  static updateStatusOrder = async (
    accessToken: string,
    orderId: string,
    status: string
  ) => {
    try {
      const res = await apiBase.put(
        `order/order-status/${orderId}`,
        {
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
}
