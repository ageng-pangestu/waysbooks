import axois from "axios";

export const api = axois.create({
  // baseURL: import.meta.env.BASE_URL || "http://localhost:3000",
  baseURL: "http://localhost:3000",
});

//ini untuk menerima token
// export const setAuthToken = (token?: string) => {
//   if (token) {
//     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete api.defaults.headers.common["Authorization"];
//   }
// };
