"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

interface AuthContextData {
  isLogin?: boolean;
  openLogin?: () => void;
  closeLogin?: () => void;
  isRegister?: boolean;
  openRegister?: () => void;
  closeRegister?: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const openLogin = () => {
    setIsLoggedIn(true);
    setIsRegister(false);
  };

  const closeLogin = () => {
    setIsLoggedIn(false);
  };

  const openRegister = () => {
    setIsRegister(true);
    setIsLoggedIn(false);
  };

  const closeRegister = () => {
    setIsRegister(false);
  };

  const authContextValue: AuthContextData = useMemo(() => {
    return {
      isLogin: isLoggedIn,
      isRegister,
      openLogin,
      closeLogin,
      openRegister,
      closeRegister,
    };
  }, [isLoggedIn, isRegister]);
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthentication = () => {
  const data = useContext(AuthContext);

  if (!data) {
    throw new Error("data is called outside the context");
  }

  return data;
};
