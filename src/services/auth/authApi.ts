import { IRegisterForm } from "./types/register";
import { api } from "../../lib/api";
import { ILoginForm } from "./types/login";

export async function register(body: IRegisterForm) {
  const response = await api.post("/auth/register", body);
  console.log(response.data);

  return response.data;
}

export async function login(body: ILoginForm) {
  const response = await api.post("/auth/login", body);
  console.log(response.data);

  return response.data;
}

export const checkAuth = async (token: string) => {
  const response = await api.get("/auth/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // data user
  return response.data;
};
