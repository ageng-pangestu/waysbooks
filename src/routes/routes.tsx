import { RouteObject } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AdminLayout from "../layout/AdminLayout";
import AddBook from "../pages/AddBook";
import BookDetail from "../pages/BookDetail";
import Cart from "../pages/Cart";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "book/:book_id",
        element: <BookDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AddBook />,
      },
    ],
  },
];

export default routes;
