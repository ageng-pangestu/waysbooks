export interface IStoreState {
  user: IUser;
  isLogin: boolean;
}

export interface IStoreAction {
  setUser: (user: IUser) => void;
  clearUser: () => void;
}

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  gender?: string;
  mobilePhone?: string;
  address?: string;
  role?: string;
}

export type TStore = IStoreState & IStoreAction;
