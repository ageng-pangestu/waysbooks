import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import cover1 from "../../assets/image/Rectangle 3.png";
import cover2 from "../../assets/image/Warm-heart-cover.png";
import cover3 from "../../assets/image/cover 3.png";

function List_Top_Book() {
  return [
    {
      imageCover: cover1,
      title: "Sebuah Seni untuk Bersikap Bodo Amat",
      wtiter: "Mark Manson",
      about: "Selama beberapa tahun belakangan, Mark Manson melalui blognya yang sangat populer ter...",
      price: 59000,
    },
    {
      imageCover: cover2,
      title: "Warm Heart",
      wtiter: "Valerie Patkar",
      about: "Dua insan manusia harus terjebak dalam dilema cinta yang memaksa salah satu dari mereka pergi me...",
      price: 49000,
    },
    {
      imageCover: cover3,
      title: "Warm Heart",
      wtiter: "Valerie Patkar",
      about: "Dua insan manusia harus terjebak dalam dilema cinta yang memaksa salah satu dari mereka pergi me...",
      price: 50000,
    },
  ];
}

const TopBookList = () => {
  return List_Top_Book().map((item, index) => {
    return (
      <Box key={index} sx={{ display: "flex", alignItems: "center", zIndex: 10 }}>
        <Box sx={{ width: "250px" }}>
          <img src={item.imageCover} alt="" style={{ width: "100%" }} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "220px", height: "225px", padding: 2 }}>
          <Typography variant="h5" sx={{ fontFamily: "inherit", fontWeight: "bold" }}>
            {item.title}
          </Typography>
          <Typography variant="caption" sx={{ color: "#929292" }}>
            By. {item.wtiter}
          </Typography>
          <Typography variant="body2">"{item.about}"</Typography>
          <Typography sx={{ color: "#44B200", fontWeight: "bold" }}>Rp.{item.price}</Typography>

          <Button variant="contained" sx={{ background: "#393939", width: "100%" }}>
            Add to cart
          </Button>
        </Box>
      </Box>
    );
  });
};

export default TopBookList;
