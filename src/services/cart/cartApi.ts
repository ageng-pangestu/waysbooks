import { api } from "../../lib/api";

export async function addCart(book_id: string) {
  const token = localStorage.getItem("token");
  console.log("Token dari localStorage: ", token);

  const response = await api.post(
    "/cart/add-cart/" + book_id,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(response.data);
  return response.data;
}

export async function getCart() {
  const response = await api.get("/cart", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
}
