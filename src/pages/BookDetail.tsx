import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import image1 from "../assets/image/storytelling (1) 1.png";
import image2 from "../assets/image/storytelling (1) 2.png";
import { useBookFuntion } from "../services/books/hooks/useBookFunction";
import { useEffect, useState } from "react";
import { IBookModel } from "../services/books/types/book";
import { useCartFuntion } from "../services/cart/hooks/useCartFunction";

const BookDetail = () => {
  const { book_id } = useParams();
  const { getBookById } = useBookFuntion();
  const { addCart } = useCartFuntion();
  const [bookData, setBookData] = useState<IBookModel>();

  useEffect(() => {
    getBookById(String(book_id)).then((result: any) => {
      setBookData(result);
    });
  }, []);

  const onSubmit = async (book_id: string) => {
    console.log("klik onSubmit");
    try {
      await addCart(book_id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <img src={image1} alt="" style={{ width: "30%", position: "absolute", top: 0, zIndex: 1 }} />
      <img src={image2} alt="" style={{ width: "30%", position: "absolute", top: 0, right: 0, zIndex: 1 }} />
      <Box sx={{ width: "65%", margin: "20px auto" }}>
        <Box sx={{ display: "flex" }}>
          <Box style={{ flex: 0.8 }}>
            <img src={bookData?.image} alt="" style={{ width: "100%" }} />
          </Box>
          <Box sx={{ paddingX: 5, flex: 1 }}>
            <Typography variant="h2" sx={{ fontFamily: "inherit" }}>
              {bookData?.title}
            </Typography>
            <Typography sx={{ fontStyle: "italic", color: "gray", marginBottom: 2 }}>By. {bookData?.writer}</Typography>
            <Typography variant="h5">Publication Date</Typography>
            <Typography sx={{ color: "gray", marginBottom: 2 }}>{bookData?.publicationDate}</Typography>
            <Typography variant="h5">Pages</Typography>
            <Typography sx={{ color: "gray", marginBottom: 2 }}>{bookData?.pages}</Typography>
            <Typography variant="h5" sx={{ color: "#D60000" }}>
              ISBN
            </Typography>
            <Typography sx={{ color: "gray", marginBottom: 2 }}>{bookData?.isbn}</Typography>
            <Typography variant="h5">Price</Typography>
            <Typography variant="h5" sx={{ color: "#44B200" }}>
              {bookData?.price ? Number(bookData.price).toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0, maximumFractionDigits: 0 }) : ""}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginTop: 5 }}>
          <Typography variant="h4" sx={{ fontFamily: "inherit" }}>
            About This Book
          </Typography>
          <Typography sx={{ color: "gray", lineHeight: 2 }}>{bookData?.about}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end", marginTop: 5 }}>
          <Button
            onClick={() => {
              onSubmit(String(book_id));
            }}
            variant="contained"
            sx={{ backgroundColor: "#393939" }}
          >
            Add Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BookDetail;
