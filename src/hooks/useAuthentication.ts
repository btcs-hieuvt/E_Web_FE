import { useEffect } from "react";
import { authApi } from "@/api/authApi";
import { accessTokenState, loadingAuthState } from "@/atom/authAtom";
import { useAuthentication } from "@/context/authContext";
import { LoginType } from "@/types/auth";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";

const useAuth = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [loadingAuth, setLoadingAuth] = useRecoilState(loadingAuthState);
  const { closeLogin } = useAuthentication();

  const login = async (body: LoginType) => {
    setLoadingAuth(true);
    try {
      const response = await authApi.login(body);
      if (response.success) {
        setLoadingAuth(false);
        setAccessToken(response?.token);
        localStorage.setItem("accessToken", response?.token);
        toast.success("Login Success");
        closeLogin();
      } else {
        setLoadingAuth(false);
        toast.success(response.message);
      }
    } catch (error) {
      setLoadingAuth(false);
      toast.success("Login False");
    }
  };

  const isAuthenticated = !!accessToken;

  // Hàm đăng xuất
  const logout = async (accessToken: string) => {
    setLoadingAuth(true);
    try {
      const rs = await authApi.logout(accessToken as string);
      if (rs.success) {
        setLoadingAuth(false);
        setAccessToken(null);
        localStorage.removeItem("accessToken");
      }
    } catch (error) {
      setLoadingAuth(false);
      toast.success("Logout False");
    }
  };

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

  return {
    loadingAuth,
    login,
    isAuthenticated,
    logout,
  };
};
export default useAuth;