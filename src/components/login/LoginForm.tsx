import { Box, Button, Input, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthLogin } from "../../services/auth/hooks/useAuthLogin";
import { ILoginForm } from "../../services/auth/types/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { loginSchema, TLoginSchema } from "../validators/loginValidation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const { login } = useAuthLogin();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: ILoginForm) => {
    console.log("data login: ", data);
    try {
      await login(data);
      reset();
      toast.error("Login failed. Please check your credentials.");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        padding: 3,
        backgroundColor: "#FFFFFF",
        width: "23rem",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "Bold", fontSize: 30, fontFamily: "inherit" }}>
        Login
      </Typography>

      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            {...field}
            disableUnderline
            sx={{
              backgroundColor: "#BCBCBC40",
              border: "2px solid #BCBCBC",
              borderRadius: "5px",
              padding: "2px 10px",
            }}
            placeholder="Email"
            error={!!errors.email}
          />
        )}
      />
      {errors.email && <Typography color="error">{errors.email.message}</Typography>}

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            type="Password"
            {...field}
            disableUnderline
            sx={{
              backgroundColor: "#BCBCBC40",
              border: "2px solid #BCBCBC",
              borderRadius: "5px",
              padding: "2px 10px",
            }}
            placeholder="Password"
            error={!!errors.password}
          />
        )}
      />
      {errors.password && <Typography color="error">{errors.password.message}</Typography>}

      <Button onClick={handleSubmit(onSubmit)} variant="contained" sx={{ backgroundColor: "#393939" }}>
        Login
      </Button>

      <Typography variant="caption" sx={{ textAlign: "center" }}>
        Don't have account ?{" "}
        <Link to="/auth/register" style={{ textDecoration: "none", fontWeight: "bold" }}>
          Klik here
        </Link>
      </Typography>

      {/* Menampilkan ToastContainer untuk menampung notifikasi Toastify */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />
    </Box>
  );
};

export default LoginForm;
