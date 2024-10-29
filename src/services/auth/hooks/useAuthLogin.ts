// import { setAuthToken } from "../../../lib/api";
import * as authAsync from "../authApi";
import useStore from "../../../stores/hooks";
import { ILoginForm } from "../types/login";

export const useAuthLogin = () => {
  const { setUser } = useStore();

  const login = async (body: ILoginForm) => {
    try {
      const resToken = await authAsync.login(body);

      const profile = await authAsync.checkAuth(resToken.token);

      setUser(profile);
      // setAuthToken(resToken.token);
      localStorage.setItem("token", resToken.token);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
  };
};
