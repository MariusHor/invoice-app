import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { InputTextField } from "./InputTextField";
import { InputProps } from "types";

interface InputPasswordFieldProps extends InputProps {
  autocomplete?: string;
}

export const InputPasswordField = ({
  label,
  id,
  autocomplete,
}: InputPasswordFieldProps): React.JSX.Element => {
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
      autocomplete={autocomplete}
    />
  );
};
