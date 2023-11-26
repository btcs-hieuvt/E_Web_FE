"use client";

import { accessTokenState } from "@/atom/authAtom";
import { redirect } from "next/navigation";
import React, { ComponentType, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { DecodeJWT } from "./decodeJwt";

const withAdminAuth = (WrappedComponent: ComponentType<any>) => {
  const AuthenticatedComponent = (props: any) => {
    const accessToken = useRecoilValue(accessTokenState);

    useEffect(() => {
      if (!accessToken) {
        redirect("/");
      } else {
        try {
          const decodedToken = DecodeJWT(accessToken);
          const userRole: number = decodedToken.role;

          if (userRole !== 1) {
            redirect("/");
          }
        } catch (error) {
          console.error("Error decoding token:", error);
          redirect("/");
        }
      }
    }, [accessToken]);

    if (!accessToken) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAdminAuth;
