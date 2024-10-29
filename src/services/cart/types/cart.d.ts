export interface ICartModel {
  id: number;
  userId: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  cartItems: ICartItem;
  price: string;
  about: string;
  image?: string;
}

interface ICartItem {
  id: number;
  cartId: number;
  bookId: number;
  book: IBookItem;
}

interface IBookItem {
  id: number;
  title: string;
  writer: string;
  publicationDate: string;
  pages: number;
  isbn: string;
  about: string;
  image: string;
}
