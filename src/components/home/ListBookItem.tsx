import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IBookModel } from "../../services/books/types/book";
import { NavLink } from "react-router-dom";
import { useBookFuntion } from "../../services/books/hooks/useBookFunction";

const ListBookItem = () => {
  const { getAllBook } = useBookFuntion();
  const [bookData, setBookData] = useState<IBookModel[]>([]);

  useEffect(() => {
    console.log("useEffect jalan");

    getAllBook().then((result) => {
      setBookData(result);
    });
  }, []);

  useEffect(() => {
    console.log("Book data: ", bookData);
  }, []);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5, justifyContent: "center" }}>
      {bookData.map((item, index) => (
        <Box key={index} sx={{ width: "20%", height: "500px" }}>
          <NavLink to={"book/" + item.id} style={{ textDecoration: "none", color: "black" }}>
            <Box sx={{ width: "100%" }}>
              <img src={item.image} alt="" style={{ width: "100%", height: "320px" }} />
            </Box>
            <Box>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="caption" sx={{ color: "#929292" }}>
                By. {item.writer}
              </Typography>
              <Typography sx={{ color: "#44B200", fontWeight: "bold", marginTop: 2 }}>
                {item.price ? Number(item.price).toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0, maximumFractionDigits: 0 }) : ""}
              </Typography>
            </Box>
          </NavLink>
        </Box>
      ))}
    </Box>
  );
};

export default ListBookItem;
