import { createContext, useState } from "react";
import { IUser, TStore } from "../types/store";

interface StoreProps {
  children: React.ReactNode;
}

export const Store = createContext<TStore | null>(null);

//untuk menyediakan data store di semua komponen
export const StoreProvider: React.FC<StoreProps> = ({ children }) => {
  const [user, setUserState] = useState<IUser>({
    id: "",
    fullName: "",
    email: "",
    mobilePhone: "",
  });

  // //ini state
  const [isLogin, setIsLogin] = useState(false);

  // //ini action
  const setUser = (user: IUser) => {
    setUserState(user);
    setIsLogin(true);
  };

  // //ini action

  const clearUser = () => {
    setUserState({
      id: "",
      email: "",
      fullName: "",
      mobilePhone: "",
    });
    setIsLogin(false);
  };

  return (
    <>
      <Store.Provider value={{ user, isLogin, setUser, clearUser }}>{children}</Store.Provider>
    </>
  );
};
