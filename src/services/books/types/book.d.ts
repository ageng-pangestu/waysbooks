export interface IAddBookForm {
  title: string;
  writer: string;
  publicationDate: string;
  pages: string;
  isbn: string;
  price: string;
  about: string;
  image?: string;
}

export interface IBookModel {
  id: string;
  title: string;
  writer: string;
  publicationDate: string;
  pages: string;
  isbn: string;
  price: string;
  about: string;
  image?: string;
}
