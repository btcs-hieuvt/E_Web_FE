import { accessTokenState } from "@/atom/authAtom";
import useAuth from "@/hooks/useAuthentication";
import useRefreshtoken from "@/hooks/useRefreshtoken";
import { DecodeJWT } from "@/utils/auth/decodeJwt";
import React from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";

const HomePage = () => {
  const notify = () => toast.success("Wow so easy!");
  const accesstoken = useRecoilValue(accessTokenState);
  const { isAuthenticated } = useAuth();
  const { refreshToken } = useRefreshtoken();

  const decode = DecodeJWT(accesstoken as string);

  return (
    <div className="w-full px-24 bg-yellow-600">
      <div className="bg-blue-500">
        HomePage <button onClick={notify}>Notify!</button>
        {isAuthenticated ? "hello hiếu" : "no authen"}
        <button onClick={refreshToken}>refresh</button>
      </div>
    </div>
  );
};

export default HomePage;
