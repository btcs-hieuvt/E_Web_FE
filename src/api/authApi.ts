import { LoginType, RegisterType, ResponseAuth } from "@/types/auth";
import apiBase from "./apiClient";

export class authApi {
  static login = async (bodyPost: LoginType): Promise<any | undefined> => {
    try {
      const response = await apiBase.post("auth/login", bodyPost);
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  static register = async (
    bodyPost: RegisterType
  ): Promise<any | undefined> => {
    try {
      const response = await apiBase.post("auth/register", bodyPost);
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  static getMe = async (accessToken: string) => {
    try {
      const response = await apiBase.get("auth/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  static logout = async (accessToken: string): Promise<any | undefined> => {
    try {
      const response = await apiBase.post("auth/logout", undefined, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  static refreshtoken = async (): Promise<any | undefined> => {
    try {
      const response = await apiBase.post("auth/refresh", undefined, {
        withCredentials: true,
      });
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
}
