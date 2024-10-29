import { Avatar, Box, Button } from "@mui/material";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import image from "../../src/assets/image/Frame.png";
import icon1 from "../assets/image/Vector.png";
import useStore from "../stores/hooks";
import { useEffect } from "react";

const RootLayout = () => {
  const { isLogin, user, clearUser } = useStore();
  const navigate = useNavigate();

  if (!isLogin) {
    return <Navigate to="/auth/login" />;
  }

  useEffect(() => {
    console.log("data user: ", user, isLogin);
  }, []);

  const handleIconClick = () => {
    navigate("cart");
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 60px", position: "relative" }}>
        <Box sx={{ width: "125px" }}>
          <img src={image} alt="img" style={{ width: "100%" }} />
        </Box>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <img onClick={handleIconClick} src={icon1} alt="" style={{ width: "25px", zIndex: 10, cursor: "pointer" }} />
          <Avatar alt="Remy Sharp" src="https://i.guim.co.uk/img/media/04e5b6fd0fe5c0df305b131b21ccd860bf14cb67/0_3_3150_1890/master/3150.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ebb0f14f3e9b1d68b1a28f7e9377545a" />
          <Button onClick={() => clearUser()} variant="contained" sx={{ backgroundColor: "#393939", width: "100px", zIndex: 10 }}>
            Logout
          </Button>
        </Box>
      </Box>

      <Outlet />
    </>
  );
};

export default RootLayout;
