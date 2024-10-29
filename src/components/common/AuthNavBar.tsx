import { Box, Button } from "@mui/material";
import image from "../../assets/image/Frame.png";
import { useNavigate } from "react-router-dom";

const AuthNavBar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 60px" }}>
      <Box sx={{ width: "125px" }}>
        <img src={image} alt="img" style={{ width: "100%" }} />
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button onClick={() => navigate("/")} variant="outlined" sx={{ border: "2px solid #393939", color: "#393939", width: "100px", zIndex: 10 }}>
          Login
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#393939", width: "100px", zIndex: 10 }}>
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default AuthNavBar;
