import { z } from "zod";

export const addBookSchema = z.object({
  title: z.string(),
  writer: z.string(),
  publicationDate: z.string(),
  pages: z.string(),
  isbn: z.string(),
  price: z.string(),
  about: z.string(),
});

export type TAddBookSchema = z.infer<typeof addBookSchema>;
