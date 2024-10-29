import { Box, Button, Input, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IRegisterForm } from "../../services/auth/types/register";
import { registerSchema, TRegisterSchema } from "../validators/registerValidation";
import { useAuthRegister } from "../../services/auth/hooks/useAuthRegister";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register } = useAuthRegister();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: IRegisterForm) => {
    console.log("data: ", data);
    try {
      await register(data);
      navigate("/auth/login");
      reset();
    } catch (error) {
      console.log(error);
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
      <Typography variant="h5" sx={{ fontWeight: "Bold", fontSize: 30, fontFamily: "inherit", marginBottom: 1 }}>
        Register
      </Typography>

      {/* Email Input */}
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

      {/* Password Input */}
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            {...field}
            type="password"
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

      {/* Full Name Input */}
      <Controller
        name="fullName"
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
            placeholder="Full Name"
            error={!!errors.fullName}
          />
        )}
      />
      {errors.fullName && <Typography color="error">{errors.fullName.message}</Typography>}

      <Button variant="contained" sx={{ backgroundColor: "#393939" }} onClick={handleSubmit(onSubmit)}>
        Register
      </Button>

      <Typography variant="caption" sx={{ textAlign: "center" }}>
        Already have an account?{" "}
        <Link to="/auth/login" style={{ textDecoration: "none", fontWeight: "bold" }}>
          Click here
        </Link>
      </Typography>
    </Box>
  );
};

export default RegisterForm;
