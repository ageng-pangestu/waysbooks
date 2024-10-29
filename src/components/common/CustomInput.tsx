import { Input, InputProps, FormControl, FormHelperText } from "@mui/material";

interface CustomInputProps extends InputProps {
  placeholder: string;
  error?: boolean; // Tambahkan properti error
  helperText?: string; // Tambahkan properti helperText
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, error, helperText, ...props }) => {
  return (
    <FormControl error={error} fullWidth>
      <Input
        disableUnderline
        sx={{
          backgroundColor: "#BCBCBC40",
          border: "2px solid #BCBCBC",
          borderRadius: "5px",
          padding: "2px 10px",
        }}
        placeholder={placeholder}
        {...props}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CustomInput;
