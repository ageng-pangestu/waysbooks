import { IRegisterForm } from "../types/register";
import * as authAsync from "../authApi";

export const useAuthRegister = () => {
  const register = async (body: IRegisterForm) => {
    try {
      const res = await authAsync.register(body);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return { register };
};
