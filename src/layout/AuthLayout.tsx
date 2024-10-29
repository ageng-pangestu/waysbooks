import { Navigate, Outlet } from "react-router-dom";
import useStore from "../stores/hooks";

const AuthLayout = () => {
  const { isLogin, user } = useStore();

  //kondisi jika sudah login, pindah ke home
  if (isLogin) {
    if (user.role == "admin") {
      return <Navigate to="/admin" />;
    } else {
      return <Navigate to="/" />;
    }
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
