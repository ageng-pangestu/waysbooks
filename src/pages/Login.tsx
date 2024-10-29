import { Box } from "@mui/material";
import image1 from "../assets/image/storytelling (1) 1.png";
import image2 from "../assets/image/storytelling (1) 2.png";
import AuthNavBar from "../components/common/AuthNavBar";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  return (
    <Box sx={{ backgroundColor: "whitesmoke", minHeight: "100vh", width: "100vw", position: "relative" }}>
      <AuthNavBar />
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <LoginForm />
      </Box>
      <img src={image1} alt="" style={{ width: "30%", position: "absolute", top: 0 }} />
      <img src={image2} alt="" style={{ width: "30%", position: "absolute", top: 0, right: 0, zIndex: 1 }} />
    </Box>
  );
};

export default Login;
