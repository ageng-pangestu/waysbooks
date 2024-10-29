import { api } from "../../lib/api";
import { IAddBookForm } from "./types/book";

export async function addBook(body: IAddBookForm) {
  const response = await api.post("/book/add-book", body);
  console.log(response.data);

  return response.data;
}

export async function getAllPost() {
  const response = await api.get("/book");
  return response.data;
}

export async function getBookById(book_id: string) {
  const response = await api.get("/book/" + book_id);
  return response.data;
}
