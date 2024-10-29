import * as bookAsync from "../booksApi";
import { IAddBookForm } from "../types/book";

export const useBookFuntion = () => {
  const addBook = async (body: IAddBookForm) => {
    try {
      const res = await bookAsync.addBook(body);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBook = async () => {
    try {
      const resData = await bookAsync.getAllPost();

      return resData;
    } catch (error) {
      console.log(error);
    }
  };

  const getBookById = async (post_id: string) => {
    try {
      const res = await bookAsync.getBookById(post_id);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return { addBook, getAllBook, getBookById };
};
