import { Box, Typography } from "@mui/material";
import image1 from "../assets/image/storytelling (1) 1.png";
import image2 from "../assets/image/storytelling (1) 2.png";
import TopBookList from "../components/home/TopBookList";
import ListBook from "../components/home/ListBook";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  useEffect(() => {
    toast.success("Login successful!");
  }, []);
  return (
    <Box>
      <img src={image1} alt="" style={{ width: "30%", position: "absolute", top: 0, zIndex: 1 }} />
      <img src={image2} alt="" style={{ width: "30%", position: "absolute", top: 0, right: 0, zIndex: 1 }} />
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ lineHeight: 2, fontFamily: "inherit" }}>
          With us, you can shop online & help
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: "inherit" }}>
          save you high stret at the same time
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: 10 }}>
        <TopBookList />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", backgroundColor: "whitesmoke", padding: 10 }}>
        <ListBook />
      </Box>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />
    </Box>
  );
};

export default Home;
