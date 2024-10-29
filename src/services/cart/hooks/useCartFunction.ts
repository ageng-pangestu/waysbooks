import * as cartAsync from "../cartApi";

export const useCartFuntion = () => {
  const addCart = async (book_id: string) => {
    try {
      const res = await cartAsync.addCart(book_id);

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const getCart = async () => {
    try {
      const res = await cartAsync.getCart();

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return { addCart, getCart };
};
