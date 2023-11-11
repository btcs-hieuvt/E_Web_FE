import { authApi } from "@/api/authApi";
import { accessTokenState } from "@/atom/authAtom";
import axios from "axios";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

const useRefreshtoken = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const refreshToken = async () => {
    try {
      const response = await authApi.refreshtoken();
      const newAccessToken = response.result;
      setAccessToken(newAccessToken);
      localStorage.setItem("accessToken", newAccessToken);
    } catch (error) {
      console.error("Lỗi khi refresh token:", error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("refresh");

      refreshToken();
    }, 1 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

  return {
    refreshToken,
  };
};

export default useRefreshtoken;
