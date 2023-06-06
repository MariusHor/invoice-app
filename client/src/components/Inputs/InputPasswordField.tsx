import { InputTextField } from "./InputTextField";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

interface InputPasswordFieldProps {
  label: string;
  id: string;
}

export const InputPasswordField = ({ label, id }: InputPasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputTextField
      label={label}
      id={id}
      type={showPassword ? "text" : "password"}
      endAdornment={
        <InputAdornment position="start" sx={{ marginRight: 0 }}>
          <IconButton onClick={handleShowPassword}>
            <VisibilityIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
